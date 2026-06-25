'use client'
import { useState } from 'react'

export default function GSTCalculator() {
  const [amount, setAmount] = useState('')
  const [rate, setRate] = useState('18')
  const [type, setType] = useState('add')
  const [result, setResult] = useState<any>(null)

  const calculate = () => {
    let base = parseFloat(amount)
    if (type === 'extract') base = base / (1 + parseFloat(rate)/100)
    const gst = base * parseFloat(rate) / 100
    const final = base + gst
    const cgst = gst / 2
    const sgst = gst / 2
    setResult({ base, gst, final, cgst, sgst })
  }

  return (
    <div style={{minHeight:'100vh',background:'#030712',color:'white',fontFamily:'sans-serif'}}>
      <nav style={{padding:'16px 32px',borderBottom:'1px solid rgba(255,255,255,0.1)',display:'flex',justifyContent:'space-between',alignItems:'center'}}>
        <a href="/" style={{textDecoration:'none'}}><b style={{fontSize:'20px',color:'white'}}>WealthPulse<span style={{color:'#34d399'}}>Pro</span></b></a>
        <a href="/tools" style={{color:'#9ca3af',textDecoration:'none',fontSize:'14px'}}>← All Calculators</a>
      </nav>
      <div style={{maxWidth:'600px',margin:'60px auto',padding:'0 20px'}}>
        <div style={{textAlign:'center',marginBottom:'40px'}}>
          <div style={{fontSize:'48px',marginBottom:'12px'}}>📊</div>
          <h1 style={{fontSize:'36px',fontWeight:'800',marginBottom:'8px'}}>GST Calculator</h1>
          <p style={{color:'#9ca3af'}}>Calculate GST with CGST & SGST breakup</p>
        </div>
        <div style={{background:'rgba(255,255,255,0.04)',border:'1px solid rgba(255,255,255,0.08)',borderRadius:'20px',padding:'32px'}}>
          <div style={{marginBottom:'20px'}}>
            <label style={{display:'block',color:'#9ca3af',fontSize:'14px',marginBottom:'8px'}}>Amount (₹)</label>
            <input type="number" value={amount} onChange={e=>setAmount(e.target.value)} placeholder="e.g. 10000" style={{width:'100%',background:'rgba(255,255,255,0.06)',border:'1px solid rgba(255,255,255,0.15)',borderRadius:'10px',padding:'12px 16px',color:'white',fontSize:'16px',outline:'none',boxSizing:'border-box'}}/>
          </div>
          <div style={{marginBottom:'20px'}}>
            <label style={{display:'block',color:'#9ca3af',fontSize:'14px',marginBottom:'8px'}}>GST Rate</label>
            <select value={rate} onChange={e=>setRate(e.target.value)} style={{width:'100%',background:'#1f2937',border:'1px solid rgba(255,255,255,0.15)',borderRadius:'10px',padding:'12px 16px',color:'white',fontSize:'16px',outline:'none',boxSizing:'border-box'}}>
              <option value="5">5%</option>
              <option value="12">12%</option>
              <option value="18">18%</option>
              <option value="28">28%</option>
            </select>
          </div>
          <div style={{marginBottom:'28px'}}>
            <label style={{display:'block',color:'#9ca3af',fontSize:'14px',marginBottom:'8px'}}>Calculation Type</label>
            <select value={type} onChange={e=>setType(e.target.value)} style={{width:'100%',background:'#1f2937',border:'1px solid rgba(255,255,255,0.15)',borderRadius:'10px',padding:'12px 16px',color:'white',fontSize:'16px',outline:'none',boxSizing:'border-box'}}>
              <option value="add">Add GST to Amount</option>
              <option value="extract">Extract GST from Amount</option>
            </select>
          </div>
          <button onClick={calculate} style={{width:'100%',background:'#10b981',color:'white',border:'none',borderRadius:'12px',padding:'16px',fontSize:'18px',fontWeight:'700',cursor:'pointer'}}>
            Calculate GST
          </button>
        </div>
        {result && (
          <div style={{marginTop:'24px',display:'grid',gridTemplateColumns:'1fr 1fr',gap:'16px'}}>
            <div style={{background:'rgba(16,185,129,0.1)',border:'1px solid rgba(16,185,129,0.3)',borderRadius:'16px',padding:'20px',textAlign:'center',gridColumn:'1/-1'}}>
              <div style={{color:'#9ca3af',fontSize:'12px',marginBottom:'8px'}}>Total Amount (with GST)</div>
              <div style={{color:'#34d399',fontSize:'32px',fontWeight:'800'}}>₹{Math.round(result.final).toLocaleString()}</div>
            </div>
            <div style={{background:'rgba(255,255,255,0.04)',border:'1px solid rgba(255,255,255,0.08)',borderRadius:'16px',padding:'20px',textAlign:'center'}}>
              <div style={{color:'#9ca3af',fontSize:'12px',marginBottom:'8px'}}>Base Amount</div>
              <div style={{color:'white',fontSize:'22px',fontWeight:'800'}}>₹{Math.round(result.base).toLocaleString()}</div>
            </div>
            <div style={{background:'rgba(255,255,255,0.04)',border:'1px solid rgba(255,255,255,0.08)',borderRadius:'16px',padding:'20px',textAlign:'center'}}>
              <div style={{color:'#9ca3af',fontSize:'12px',marginBottom:'8px'}}>Total GST</div>
              <div style={{color:'white',fontSize:'22px',fontWeight:'800'}}>₹{Math.round(result.gst).toLocaleString()}</div>
            </div>
            <div style={{background:'rgba(255,255,255,0.04)',border:'1px solid rgba(255,255,255,0.08)',borderRadius:'16px',padding:'20px',textAlign:'center'}}>
              <div style={{color:'#9ca3af',fontSize:'12px',marginBottom:'8px'}}>CGST</div>
              <div style={{color:'white',fontSize:'22px',fontWeight:'800'}}>₹{Math.round(result.cgst).toLocaleString()}</div>
            </div>
            <div style={{background:'rgba(255,255,255,0.04)',border:'1px solid rgba(255,255,255,0.08)',borderRadius:'16px',padding:'20px',textAlign:'center'}}>
              <div style={{color:'#9ca3af',fontSize:'12px',marginBottom:'8px'}}>SGST</div>
              <div style={{color:'white',fontSize:'22px',fontWeight:'800'}}>₹{Math.round(result.sgst).toLocaleString()}</div>
            </div>
          </div>
        )}
        <div style={{marginTop:'24px',textAlign:'center'}}>
          <a href="/tools" style={{color:'#34d399',textDecoration:'none',fontSize:'14px'}}>← View All Calculators</a>
        </div>
      </div>
      <footer style={{textAlign:'center',padding:'32px',borderTop:'1px solid rgba(255,255,255,0.05)',color:'#4b5563',fontSize:'14px',marginTop:'60px'}}>
        © 2024 WealthPulse Pro · wealthpulsedaily.com
      </footer>
    </div>
  )
}