'use client'
import { useState } from 'react'

export default function TaxCalculator() {
  const [income, setIncome] = useState('')
  const [filing, setFiling] = useState('single')
  const [deductions, setDeductions] = useState('')
  const [result, setResult] = useState<any>(null)

  const calculate = () => {
    const inc = parseFloat(income)
    const ded = parseFloat(deductions) || 0
    const stdDed: Record<string,number> = { single: 14600, married_joint: 29200, married_separate: 14600, hoh: 21900 }
    const brackets: Record<string,[number,number,number][]> = {
      single: [[0,11600,0.10],[11600,47150,0.12],[47150,100525,0.22],[100525,191950,0.24],[191950,243725,0.32],[243725,609350,0.35],[609350,Infinity,0.37]],
      married_joint: [[0,23200,0.10],[23200,94300,0.12],[94300,201050,0.22],[201050,383900,0.24],[383900,487450,0.32],[487450,731200,0.35],[731200,Infinity,0.37]],
      married_separate: [[0,11600,0.10],[11600,47150,0.12],[47150,100525,0.22],[100525,191950,0.24],[191950,243725,0.32],[243725,365600,0.35],[365600,Infinity,0.37]],
      hoh: [[0,16550,0.10],[16550,63100,0.12],[63100,100500,0.22],[100500,191950,0.24],[191950,243700,0.32],[243700,609350,0.35],[609350,Infinity,0.37]],
    }
    const totalDed = stdDed[filing] + ded
    const taxable = Math.max(0, inc - totalDed)
    let tax = 0
    let marginal = 0
    for (const [low,high,rate] of brackets[filing]) {
      if (taxable > low) {
        tax += Math.min(taxable - low, high - low) * rate
        marginal = rate * 100
      }
    }
    const effective = (tax / inc) * 100
    const afterTax = inc - tax
    const monthly = afterTax / 12
    setResult({ tax, effective, marginal, afterTax, monthly, taxable })
  }

  return (
    <div style={{minHeight:'100vh',background:'#030712',color:'white',fontFamily:'sans-serif'}}>
      <nav style={{padding:'16px 32px',borderBottom:'1px solid rgba(255,255,255,0.1)',display:'flex',justifyContent:'space-between',alignItems:'center'}}>
        <a href="/" style={{textDecoration:'none'}}><b style={{fontSize:'20px',color:'white'}}>WealthPulse<span style={{color:'#34d399'}}>Pro</span></b></a>
        <a href="/tools" style={{color:'#9ca3af',textDecoration:'none',fontSize:'14px'}}>← All Calculators</a>
      </nav>
      <div style={{maxWidth:'600px',margin:'60px auto',padding:'0 20px'}}>
        <div style={{textAlign:'center',marginBottom:'40px'}}>
          <div style={{fontSize:'48px',marginBottom:'12px'}}>🧾</div>
          <h1 style={{fontSize:'36px',fontWeight:'800',marginBottom:'8px'}}>Income Tax Calculator</h1>
          <p style={{color:'#9ca3af'}}>US Federal Income Tax 2024</p>
        </div>
        <div style={{background:'rgba(255,255,255,0.04)',border:'1px solid rgba(255,255,255,0.08)',borderRadius:'20px',padding:'32px'}}>
          <div style={{marginBottom:'20px'}}>
            <label style={{display:'block',color:'#9ca3af',fontSize:'14px',marginBottom:'8px'}}>Annual Income ($)</label>
            <input type="number" value={income} onChange={e=>setIncome(e.target.value)} placeholder="e.g. 75000" style={{width:'100%',background:'rgba(255,255,255,0.06)',border:'1px solid rgba(255,255,255,0.15)',borderRadius:'10px',padding:'12px 16px',color:'white',fontSize:'16px',outline:'none',boxSizing:'border-box'}}/>
          </div>
          <div style={{marginBottom:'20px'}}>
            <label style={{display:'block',color:'#9ca3af',fontSize:'14px',marginBottom:'8px'}}>Filing Status</label>
            <select value={filing} onChange={e=>setFiling(e.target.value)} style={{width:'100%',background:'#1f2937',border:'1px solid rgba(255,255,255,0.15)',borderRadius:'10px',padding:'12px 16px',color:'white',fontSize:'16px',outline:'none',boxSizing:'border-box'}}>
              <option value="single">Single</option>
              <option value="married_joint">Married Filing Jointly</option>
              <option value="married_separate">Married Filing Separately</option>
              <option value="hoh">Head of Household</option>
            </select>
          </div>
          <div style={{marginBottom:'28px'}}>
            <label style={{display:'block',color:'#9ca3af',fontSize:'14px',marginBottom:'8px'}}>Additional Deductions ($) — Optional</label>
            <input type="number" value={deductions} onChange={e=>setDeductions(e.target.value)} placeholder="e.g. 5000" style={{width:'100%',background:'rgba(255,255,255,0.06)',border:'1px solid rgba(255,255,255,0.15)',borderRadius:'10px',padding:'12px 16px',color:'white',fontSize:'16px',outline:'none',boxSizing:'border-box'}}/>
          </div>
          <button onClick={calculate} style={{width:'100%',background:'#10b981',color:'white',border:'none',borderRadius:'12px',padding:'16px',fontSize:'18px',fontWeight:'700',cursor:'pointer'}}>
            Calculate Tax
          </button>
        </div>
        {result && (
          <div style={{marginTop:'24px',display:'grid',gridTemplateColumns:'1fr 1fr',gap:'16px'}}>
            <div style={{background:'rgba(16,185,129,0.1)',border:'1px solid rgba(16,185,129,0.3)',borderRadius:'16px',padding:'20px',textAlign:'center',gridColumn:'1/-1'}}>
              <div style={{color:'#9ca3af',fontSize:'12px',marginBottom:'8px'}}>Federal Tax Owed</div>
              <div style={{color:'#34d399',fontSize:'32px',fontWeight:'800'}}>${Math.round(result.tax).toLocaleString()}</div>
            </div>
            {[
              {label:'Effective Tax Rate',val:`${result.effective.toFixed(1)}%`},
              {label:'Marginal Tax Rate',val:`${result.marginal}%`},
              {label:'After-Tax Income',val:`$${Math.round(result.afterTax).toLocaleString()}`},
              {label:'Monthly Take-Home',val:`$${Math.round(result.monthly).toLocaleString()}`},
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