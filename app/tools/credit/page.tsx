'use client'
import { useState } from 'react'

export default function CreditScoreCalculator() {
  const [payment, setPayment] = useState('')
  const [utilization, setUtilization] = useState('')
  const [age, setAge] = useState('')
  const [accounts, setAccounts] = useState('')
  const [inquiries, setInquiries] = useState('')
  const [result, setResult] = useState<any>(null)

  const calculate = () => {
    const paymentScore = (parseFloat(payment) / 100) * 350
    const util = parseFloat(utilization)
    const utilScore = util <= 10 ? 300 : util <= 30 ? 270 - ((util-10)*1.5) : util <= 50 ? 240 - ((util-30)*3) : Math.max(0, 180 - ((util-50)*3.6))
    const ageScore = Math.min(150, parseFloat(age) * 10)
    const mixScore = Math.min(100, parseFloat(accounts) * 10)
    const inquiryScore = Math.max(0, 100 - (parseFloat(inquiries) * 20))
    const raw = paymentScore + utilScore + ageScore + mixScore + inquiryScore
    const score = Math.round(Math.min(850, Math.max(300, 300 + (raw/1000)*550)))
    const rating = score >= 800 ? 'Exceptional 🌟' : score >= 740 ? 'Very Good ✅' : score >= 670 ? 'Good 👍' : score >= 580 ? 'Fair ⚠️' : 'Poor ❌'
    const color = score >= 740 ? '#34d399' : score >= 670 ? '#fbbf24' : '#ef4444'
    setResult({ score, rating, color })
  }

  return (
    <div style={{minHeight:'100vh',background:'#030712',color:'white',fontFamily:'sans-serif'}}>
      <nav style={{padding:'16px 32px',borderBottom:'1px solid rgba(255,255,255,0.1)',display:'flex',justifyContent:'space-between',alignItems:'center'}}>
        <a href="/" style={{textDecoration:'none'}}><b style={{fontSize:'20px',color:'white'}}>WealthPulse<span style={{color:'#34d399'}}>Pro</span></b></a>
        <a href="/tools" style={{color:'#9ca3af',textDecoration:'none',fontSize:'14px'}}>← All Calculators</a>
      </nav>
      <div style={{maxWidth:'600px',margin:'60px auto',padding:'0 20px'}}>
        <div style={{textAlign:'center',marginBottom:'40px'}}>
          <div style={{fontSize:'48px',marginBottom:'12px'}}>💳</div>
          <h1 style={{fontSize:'36px',fontWeight:'800',marginBottom:'8px'}}>Credit Score Simulator</h1>
          <p style={{color:'#9ca3af'}}>Estimate your FICO credit score instantly</p>
        </div>
        <div style={{background:'rgba(255,255,255,0.04)',border:'1px solid rgba(255,255,255,0.08)',borderRadius:'20px',padding:'32px'}}>
          {[
            {label:'On-Time Payment History (%)',val:payment,set:setPayment,ph:'e.g. 95'},
            {label:'Credit Utilization (%)',val:utilization,set:setUtilization,ph:'e.g. 30'},
            {label:'Average Credit Age (Years)',val:age,set:setAge,ph:'e.g. 5'},
            {label:'Total Credit Accounts',val:accounts,set:setAccounts,ph:'e.g. 5'},
            {label:'Hard Inquiries (Last 2 Years)',val:inquiries,set:setInquiries,ph:'e.g. 1'},
          ].map(f=>(
            <div key={f.label} style={{marginBottom:'20px'}}>
              <label style={{display:'block',color:'#9ca3af',fontSize:'14px',marginBottom:'8px'}}>{f.label}</label>
              <input type="number" value={f.val} onChange={e=>f.set(e.target.value)} placeholder={f.ph} style={{width:'100%',background:'rgba(255,255,255,0.06)',border:'1px solid rgba(255,255,255,0.15)',borderRadius:'10px',padding:'12px 16px',color:'white',fontSize:'16px',outline:'none',boxSizing:'border-box'}}/>
            </div>
          ))}
          <button onClick={calculate} style={{width:'100%',background:'#10b981',color:'white',border:'none',borderRadius:'12px',padding:'16px',fontSize:'18px',fontWeight:'700',cursor:'pointer'}}>
            Calculate Credit Score
          </button>
        </div>
        {result && (
          <div style={{marginTop:'24px',textAlign:'center'}}>
            <div style={{background:'rgba(255,255,255,0.04)',border:`2px solid ${result.color}`,borderRadius:'20px',padding:'40px'}}>
              <div style={{color:'#9ca3af',fontSize:'14px',marginBottom:'12px'}}>Your Estimated Credit Score</div>
              <div style={{fontSize:'80px',fontWeight:'800',color:result.color,lineHeight:'1'}}>{result.score}</div>
              <div style={{fontSize:'24px',fontWeight:'700',marginTop:'12px'}}>{result.rating}</div>
              <div style={{marginTop:'20px',background:'rgba(255,255,255,0.05)',borderRadius:'12px',padding:'16px'}}>
                <div style={{fontSize:'13px',color:'#9ca3af'}}>
                  Score Range: 300 (Poor) → 850 (Exceptional)
                </div>
              </div>
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