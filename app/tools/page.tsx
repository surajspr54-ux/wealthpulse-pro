export default function ToolsPage() {
  const calculators = [
    { emoji: '🏠', name: 'Mortgage Calculator', desc: 'Monthly payment calculator', href: '/tools/mortgage' },
    { emoji: '💰', name: 'EMI Calculator', desc: 'Loan installment calculator', href: '/tools/emi' },
    { emoji: '📈', name: 'SIP Calculator', desc: 'Mutual fund returns', href: '/tools/sip' },
    { emoji: '💹', name: 'Compound Interest', desc: 'Wealth growth calculator', href: '/tools/compound' },
    { emoji: '🧾', name: 'Income Tax', desc: 'US Federal Tax 2024', href: '/tools/tax' },
    { emoji: '📊', name: 'GST Calculator', desc: 'Indian GST calculator', href: '/tools/gst' },
    { emoji: '💳', name: 'Credit Score', desc: 'FICO score estimator', href: '/tools/credit' },
    { emoji: '🏦', name: 'Retirement', desc: 'Retirement corpus planner', href: '/tools/retirement' },
    { emoji: '📉', name: 'ROI Calculator', desc: 'Return on investment', href: '/tools/roi' },
    { emoji: '💊', name: 'Health Insurance', desc: 'Premium estimator', href: '/tools/health' },
    { emoji: '🚗', name: 'Car Loan', desc: 'Auto loan EMI', href: '/tools/carloan' },
    { emoji: '💼', name: 'Business Loan', desc: 'Business loan calculator', href: '/tools/businessloan' },
  ]

  return (
    <div style={{minHeight:'100vh',background:'#030712',color:'white',fontFamily:'sans-serif'}}>
      <nav style={{padding:'16px 32px',borderBottom:'1px solid rgba(255,255,255,0.1)',display:'flex',justifyContent:'space-between',alignItems:'center'}}>
        <a href="/" style={{textDecoration:'none'}}><b style={{fontSize:'20px',color:'white'}}>WealthPulse<span style={{color:'#34d399'}}>Pro</span></b></a>
        <a href="/" style={{color:'#9ca3af',textDecoration:'none',fontSize:'14px'}}>← Home</a>
      </nav>
      <div style={{textAlign:'center',padding:'60px 20px 40px'}}>
        <h1 style={{fontSize:'48px',fontWeight:'800',marginBottom:'16px'}}>Financial <span style={{color:'#34d399'}}>Calculators</span></h1>
        <p style={{fontSize:'18px',color:'#9ca3af'}}>Free tools — no signup required</p>
      </div>
      <div style={{maxWidth:'1000px',margin:'0 auto',padding:'0 20px 60px',display:'grid',gridTemplateColumns:'repeat(auto-fill,minmax(220px,1fr))',gap:'16px'}}>
        {calculators.map(calc => (
          <a key={calc.name} href={calc.href} style={{background:'rgba(255,255,255,0.04)',border:'1px solid rgba(255,255,255,0.08)',borderRadius:'16px',padding:'24px',textDecoration:'none',color:'white',display:'block'}}>
            <div style={{fontSize:'32px',marginBottom:'12px'}}>{calc.emoji}</div>
            <div style={{fontWeight:'700',fontSize:'16px',marginBottom:'6px'}}>{calc.name}</div>
            <div style={{fontSize:'13px',color:'#6b7280',marginBottom:'12px'}}>{calc.desc}</div>
            <div style={{color:'#34d399',fontSize:'13px',fontWeight:'600'}}>Use Calculator →</div>
          </a>
        ))}
      </div>
      <footer style={{textAlign:'center',padding:'32px',borderTop:'1px solid rgba(255,255,255,0.05)',color:'#4b5563',fontSize:'14px'}}>
        © 2024 WealthPulse Pro · wealthpulsedaily.com
      </footer>
    </div>
  )
}