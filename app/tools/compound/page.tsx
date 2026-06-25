'use client'
import { useState } from 'react'

export default function CompoundCalculator() {
  const [principal, setPrincipal] = useState('')
  const [rate, setRate] = useState('')
  const [years, setYears] = useState('')
  const [frequency, setFrequency] = useState('12')
  const [monthly, setMonthly] = useState('')
  const [result, setResult] = useState<any>(null)

  const calculate = () => {
    const p = parseFloat(principal)
    const r = parseFloat(rate) / 100
    const t = parseFloat(years)
    const n = parseFloat(frequency)
    const m = parseFloat(monthly) || 0
    const principalGrowth = p * Math.pow(1 + r/n, n*t)
    const monthlyRate = r/12
    const months = t*12
    const contribGrowth = m > 0 ? m * (Math.pow(1+monthlyRate,months)-1)/monthlyRate : 0
    const final = principalGrowth + contribGrowth
    const totalInvested = p + (m * months)
    const interest = final - totalInvested
    setResult({ final, interest, totalInvested })
  }

  return (
    <div style={{minHeight:'100vh',background:'#030712',color:'white',fontFamily:'sans-serif'}}>
      <nav style={{padding:'16px 32px',borderBottom:'1px solid rgba(255,255,255,0.1)',display:'flex',justifyContent:'space-between',alignItems:'center'}}>
        <a href="/" style={{textDecoration:'none'}}><b style={{fontSize:'20px',color:'white'}}>WealthPulse<span style={{color:'#34d399'}}>Pro</span></b></a>
        <a href="/tools" style={{color:'#9ca3af',textDecoration:'none',fontSize:'14px'}}>← All Calculators</a>
      </nav>
      <div style={{maxWidth:'600px',margin:'60px auto',padding:'0 20px'}}>
        <div style={{textAlign:'center',marginBottom:'40px'}}>
          <div style={{fontSize:'48px',marginBottom:'12px'}}>💹</div>
          <h1 style={{fontSize:'36px',fontWeight:'800',marginBottom:'8px'}}>Compound Interest Calculator</h1>
          <p style={{color:'#9ca3af'}}>Watch your wealth grow with compound interest</p>
        </div>
        <div style={{background:'rgba(255,255,255,0.04)',border:'1px solid rgba(255,255,255,0.08)',borderRadius:'20px',padding:'32px'}}>
          <div style={{marginBottom:'20px'}}>
            <label style={{display:'block',color:'#9ca3af',fontSize:'14px',marginBottom:'8px'}}>Initial Investment ($)</label>
            <input type="number" value={principal} onChange={e=>setPrincipal(e.target.value)} placeholder="e.g. 10000" style={{width:'100%',background:'rgba(255,255,255,0.06)',border:'1px solid rgba(255,255,255,0.15)',borderRadius:'10px',padding:'12px 16px',color:'white',fontSize:'16px',outline:'none',boxSizing:'border-box'}}/>
          </div>
          <div style={{marginBottom:'20px'}}>
            <label style={{display:'block',color:'#9ca3af',fontSize:'14px',marginBottom:'8px'}}>Annual Interest Rate (%)</label>
            <input type="number" value={rate} onChange={e=>setRate(e.target.value)} placeholder="e.g. 8" style={{width:'100%',background:'rgba(255,255,255,0.06)',border:'1px solid rgba(255,255,255,0.15)',borderRadius:'10px',padding:'12px 16px',color:'white',fontSize:'16px',outline:'none',boxSizing:'border-box'}}/>
          </div>
          <div style={{marginBottom:'20px'}}>
            <label style={{display:'block',color:'#9ca3af',fontSize:'14px',marginBottom:'8px'}}>Time Period (Years)</label>
            <input type="number" value={years} onChange={e=>setYears(e.target.value)} placeholder="e.g. 10" style={{width:'100%',background:'rgba(255,255,255,0.06)',border:'1px solid rgba(255,255,255,0.15)',borderRadius:'10px',padding:'12px 16px',color:'white',fontSize:'16px',outline:'none',boxSizing:'border-box'}}/>
          </div>
          <div style={{marginBottom:'20px'}}>
            <label style={{display:'block',color:'#9ca3af',fontSize:'14px',marginBottom:'8px'}}>Compounding Frequency</label>
            <select value={frequency} onChange={e=>setFrequency(e.target.value)} style={{width:'100%',background:'#1f2937',border:'1px solid rgba(255,255,255,0.15)',borderRadius:'10px',padding:'12px 16px',color:'white',fontSize:'16px',outline:'none',boxSizing:'border-box'}}>
              <option value="1">Annually</option>
              <option value="4">Quarterly</option>
              <option value="12">Monthly</option>
              <option value="365">Daily</option>
            </select>
          </div>
          <div style={{marginBottom:'28px'}}>
            <label style={{display:'block',color:'#9ca3af',fontSize:'14px',marginBottom:'8px'}}>Monthly Contribution ($) — Optional</label>
            <input type="number" value={monthly} onChange={e=>setMonthly(e.target.value)} placeholder="e.g. 100" style={{width:'100%',background:'rgba(255,255,255,0.06)',border:'1px solid rgba(255,255,255,0.15)',borderRadius:'10px',padding:'12px 16px',color:'white',fontSize:'16px',outline:'none',boxSizing:'border-box'}}/>
          </div>
          <button onClick={calculate} style={{width:'100%',background:'#10b981',color:'white',border:'none',borderRadius:'12px',padding:'16px',fontSize:'18px',fontWeight:'700',cursor:'pointer'}}>
            Calculate Growth
          </button>
        </div>
        {result && (
          <div style={{marginTop:'24px',display:'grid',gridTemplateColumns:'1fr 1fr 1fr',gap:'16px'}}>
            <div style={{background:'rgba(16,185,129,0.1)',border:'1px solid rgba(16,185,129,0.3)',borderRadius:'16px',padding:'20px',textAlign:'center'}}>
              <div style={{color:'#9ca3af',fontSize:'12px',marginBottom:'8px'}}>Final Amount</div>
              <div style={{color:'#34d399',fontSize:'22px',fontWeight:'800'}}>${Math.round(result.final).toLocaleString()}</div>
            </div>
            <div style={{background:'rgba(255,255,255,0.04)',border:'1px solid rgba(255,255,255,0.08)',borderRadius:'16px',padding:'20px',textAlign:'center'}}>
              <div style={{color:'#9ca3af',fontSize:'12px',marginBottom:'8px'}}>Interest Earned</div>
              <div style={{color:'white',fontSize:'22px',fontWeight:'800'}}>${Math.round(result.interest).toLocaleString()}</div>
            </div>
            <div style={{background:'rgba(255,255,255,0.04)',border:'1px solid rgba(255,255,255,0.08)',borderRadius:'16px',padding:'20px',textAlign:'center'}}>
              <div style={{color:'#9ca3af',fontSize:'12px',marginBottom:'8px'}}>Total Invested</div>
              <div style={{color:'white',fontSize:'22px',fontWeight:'800'}}>${Math.round(result.totalInvested).toLocaleString()}</div>
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