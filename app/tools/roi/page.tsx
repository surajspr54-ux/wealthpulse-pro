'use client'
import { useState } from 'react'

export default function ROICalculator() {
  const [initial, setInitial] = useState('')
  const [final, setFinal] = useState('')
  const [costs, setCosts] = useState('')
  const [years, setYears] = useState('')
  const [result, setResult] = useState<any>(null)

  const calculate = () => {
    const inv = parseFloat(initial)
    const fin = parseFloat(final)
    const cost = parseFloat(costs) || 0
    const yr = parseFloat(years) || 1
    const totalCost = inv + cost
    const netProfit = fin - totalCost
    const roi = (netProfit / totalCost) * 100
    const annualized = (Math.pow(1 + roi/100, 1/yr) - 1) * 100
    const multiple = fin / inv
    setResult({ roi, netProfit, annualized, multiple, totalCost })
  }

  return (
    <div style={{minHeight:'100vh',background:'#030712',color:'white',fontFamily:'sans-serif'}}>
      <nav style={{padding:'16px 32px',borderBottom:'1px solid rgba(255,255,255,0.1)',display:'flex',justifyContent:'space-between',alignItems:'center'}}>
        <a href="/" style={{textDecoration:'none'}}><b style={{fontSize:'20px',color:'white'}}>WealthPulse<span style={{color:'#34d399'}}>Pro</span></b></a>
        <a href="/tools" style={{color:'#9ca3af',textDecoration:'none',fontSize:'14px'}}>← All Calculators</a>
      </nav>
      <div style={{maxWidth:'600px',margin:'60px auto',padding:'0 20px'}}>
        <div style={{textAlign:'center',marginBottom:'40px'}}>
          <div style={{fontSize:'48px',marginBottom:'12px'}}>📉</div>
          <h1 style={{fontSize:'36px',fontWeight:'800',marginBottom:'8px'}}>ROI Calculator</h1>
          <p style={{color:'#9ca3af'}}>Calculate Return on Investment for any investment</p>
        </div>
        <div style={{background:'rgba(255,255,255,0.04)',border:'1px solid rgba(255,255,255,0.08)',borderRadius:'20px',padding:'32px'}}>
          {[
            {label:'Initial Investment ($)',val:initial,set:setInitial,ph:'e.g. 10000'},
            {label:'Final Value / Revenue ($)',val:final,set:setFinal,ph:'e.g. 15000'},
            {label:'Additional Costs ($) — Optional',val:costs,set:setCosts,ph:'e.g. 500'},
            {label:'Time Period (Years) — Optional',val:years,set:setYears,ph:'e.g. 2'},
          ].map(f=>(
            <div key={f.label} style={{marginBottom:'20px'}}>
              <label style={{display:'block',color:'#9ca3af',fontSize:'14px',marginBottom:'8px'}}>{f.label}</label>
              <input type="number" value={f.val} onChange={e=>f.set(e.target.value)} placeholder={f.ph} style={{width:'100%',background:'rgba(255,255,255,0.06)',border:'1px solid rgba(255,255,255,0.15)',borderRadius:'10px',padding:'12px 16px',color:'white',fontSize:'16px',outline:'none',boxSizing:'border-box'}}/>
            </div>
          ))}
          <button onClick={calculate} style={{width:'100%',background:'#10b981',color:'white',border:'none',borderRadius:'12px',padding:'16px',fontSize:'18px',fontWeight:'700',cursor:'pointer'}}>
            Calculate ROI
          </button>
        </div>
        {result && (
          <div style={{marginTop:'24px',display:'grid',gridTemplateColumns:'1fr 1fr',gap:'16px'}}>
            <div style={{background: result.roi >= 0 ? 'rgba(16,185,129,0.1)' : 'rgba(239,68,68,0.1)',border: result.roi >= 0 ? '1px solid rgba(16,185,129,0.3)' : '1px solid rgba(239,68,68,0.3)',borderRadius:'16px',padding:'20px',textAlign:'center',gridColumn:'1/-1'}}>
              <div style={{color:'#9ca3af',fontSize:'12px',marginBottom:'8px'}}>Return on Investment</div>
              <div style={{color: result.roi >= 0 ? '#34d399' : '#ef4444',fontSize:'48px',fontWeight:'800'}}>{result.roi.toFixed(1)}%</div>
            </div>
            {[
              {label:'Net Profit',val:`$${Math.round(result.netProfit).toLocaleString()}`},
              {label:'Annualized ROI',val:`${result.annualized.toFixed(1)}%`},
              {label:'Total Invested',val:`$${Math.round(result.totalCost).toLocaleString()}`},
              {label:'Growth Multiple',val:`${result.multiple.toFixed(2)}x`},
            ].map(r=>(
              <div key={r.label} style={{background:'rgba(255,255,255,0.04)',border:'1px solid rgba(255,255,255,0.08)',borderRadius:'16px',padding:'20px',textAlign:'center'}}>
                <div style={{color:'#9ca3af',fontSize:'12px',marginBottom:'8px'}}>{r.label}</div>
                <div style={{color:'white',fontSize:'22px',fontWeight:'800'}}>{r.val}</div>
              </div>
            ))}
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