'use client'
import { useState } from 'react'

export default function RetirementCalculator() {
  const [currentAge, setCurrentAge] = useState('')
  const [retireAge, setRetireAge] = useState('')
  const [expenses, setExpenses] = useState('')
  const [returnRate, setReturnRate] = useState('')
  const [inflation, setInflation] = useState('')
  const [result, setResult] = useState<any>(null)

  const calculate = () => {
    const ca = parseFloat(currentAge)
    const ra = parseFloat(retireAge)
    const exp = parseFloat(expenses)
    const ret = parseFloat(returnRate) / 100
    const inf = parseFloat(inflation) / 100
    const yearsToRetire = ra - ca
    const yearsInRetirement = 80 - ra
    const inflatedExpense = exp * Math.pow(1 + inf, yearsToRetire)
    const annualExpense = inflatedExpense * 12
    const realReturn = (ret - inf)
    const corpus = annualExpense * ((1 - Math.pow(1 + realReturn, -yearsInRetirement)) / realReturn)
    const monthlyRate = ret / 12
    const months = yearsToRetire * 12
    const monthlyInvestment = corpus * monthlyRate / (Math.pow(1 + monthlyRate, months) - 1)
    setResult({ corpus, monthlyInvestment, inflatedExpense, yearsToRetire })
  }

  return (
    <div style={{minHeight:'100vh',background:'#030712',color:'white',fontFamily:'sans-serif'}}>
      <nav style={{padding:'16px 32px',borderBottom:'1px solid rgba(255,255,255,0.1)',display:'flex',justifyContent:'space-between',alignItems:'center'}}>
        <a href="/" style={{textDecoration:'none'}}><b style={{fontSize:'20px',color:'white'}}>WealthPulse<span style={{color:'#34d399'}}>Pro</span></b></a>
        <a href="/tools" style={{color:'#9ca3af',textDecoration:'none',fontSize:'14px'}}>← All Calculators</a>
      </nav>
      <div style={{maxWidth:'600px',margin:'60px auto',padding:'0 20px'}}>
        <div style={{textAlign:'center',marginBottom:'40px'}}>
          <div style={{fontSize:'48px',marginBottom:'12px'}}>🏦</div>
          <h1 style={{fontSize:'36px',fontWeight:'800',marginBottom:'8px'}}>Retirement Calculator</h1>
          <p style={{color:'#9ca3af'}}>Plan your retirement corpus today</p>
        </div>
        <div style={{background:'rgba(255,255,255,0.04)',border:'1px solid rgba(255,255,255,0.08)',borderRadius:'20px',padding:'32px'}}>
          {[
            {label:'Current Age',val:currentAge,set:setCurrentAge,ph:'e.g. 30'},
            {label:'Retirement Age',val:retireAge,set:setRetireAge,ph:'e.g. 60'},
            {label:'Monthly Expenses (₹)',val:expenses,set:setExpenses,ph:'e.g. 50000'},
            {label:'Expected Return Rate (%)',val:returnRate,set:setReturnRate,ph:'e.g. 12'},
            {label:'Inflation Rate (%)',val:inflation,set:setInflation,ph:'e.g. 6'},
          ].map(f=>(
            <div key={f.label} style={{marginBottom:'20px'}}>
              <label style={{display:'block',color:'#9ca3af',fontSize:'14px',marginBottom:'8px'}}>{f.label}</label>
              <input type="number" value={f.val} onChange={e=>f.set(e.target.value)} placeholder={f.ph} style={{width:'100%',background:'rgba(255,255,255,0.06)',border:'1px solid rgba(255,255,255,0.15)',borderRadius:'10px',padding:'12px 16px',color:'white',fontSize:'16px',outline:'none',boxSizing:'border-box'}}/>
            </div>
          ))}
          <button onClick={calculate} style={{width:'100%',background:'#10b981',color:'white',border:'none',borderRadius:'12px',padding:'16px',fontSize:'18px',fontWeight:'700',cursor:'pointer'}}>
            Calculate Retirement Corpus
          </button>
        </div>
        {result && (
          <div style={{marginTop:'24px',display:'grid',gridTemplateColumns:'1fr 1fr',gap:'16px'}}>
            <div style={{background:'rgba(16,185,129,0.1)',border:'1px solid rgba(16,185,129,0.3)',borderRadius:'16px',padding:'20px',textAlign:'center',gridColumn:'1/-1'}}>
              <div style={{color:'#9ca3af',fontSize:'12px',marginBottom:'8px'}}>Corpus Required at Retirement</div>
              <div style={{color:'#34d399',fontSize:'28px',fontWeight:'800'}}>₹{Math.round(result.corpus).toLocaleString()}</div>
            </div>
            <div style={{background:'rgba(255,255,255,0.04)',border:'1px solid rgba(255,255,255,0.08)',borderRadius:'16px',padding:'20px',textAlign:'center'}}>
              <div style={{color:'#9ca3af',fontSize:'12px',marginBottom:'8px'}}>Monthly Investment Needed</div>
              <div style={{color:'white',fontSize:'22px',fontWeight:'800'}}>₹{Math.round(result.monthlyInvestment).toLocaleString()}</div>
            </div>
            <div style={{background:'rgba(255,255,255,0.04)',border:'1px solid rgba(255,255,255,0.08)',borderRadius:'16px',padding:'20px',textAlign:'center'}}>
              <div style={{color:'#9ca3af',fontSize:'12px',marginBottom:'8px'}}>Monthly Expense at Retirement</div>
              <div style={{color:'white',fontSize:'22px',fontWeight:'800'}}>₹{Math.round(result.inflatedExpense).toLocaleString()}</div>
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