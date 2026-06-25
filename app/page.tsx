export default function Home() {
  return (
    <div style={{minHeight:'100vh',background:'#030712',color:'white',fontFamily:'sans-serif'}}>
      <nav style={{padding:'16px 32px',borderBottom:'1px solid rgba(255,255,255,0.1)',display:'flex',justifyContent:'space-between',alignItems:'center'}}>
        <b style={{fontSize:'20px'}}>WealthPulse<span style={{color:'#34d399'}}>Pro</span></b>
        <a href="#pricing" style={{background:'#10b981',color:'white',padding:'8px 20px',borderRadius:'8px',textDecoration:'none',fontWeight:'600'}}>Get Started</a>
      </nav>
      <div style={{textAlign:'center',padding:'100px 20px'}}>
        <h1 style={{fontSize:'60px',fontWeight:'800',marginBottom:'20px'}}>
          Finance<span style={{color:'#34d399'}}> Infrastructure</span><br/>Platform
        </h1>
        <p style={{fontSize:'20px',color:'#9ca3af',marginBottom:'40px'}}>150+ Free Financial Calculators · API Access · Embeddable Widgets</p>
        <a href="/tools" style={{background:'#10b981',color:'white',padding:'16px 40px',borderRadius:'12px',textDecoration:'none',fontWeight:'700',fontSize:'18px',marginRight:'16px'}}>Try Calculators</a>
        <a href="#pricing" style={{border:'1px solid rgba(255,255,255,0.2)',color:'white',padding:'16px 40px',borderRadius:'12px',textDecoration:'none',fontWeight:'700',fontSize:'18px'}}>View Pricing</a>
      </div>
      <div style={{display:'flex',justifyContent:'center',gap:'60px',padding:'40px',borderTop:'1px solid rgba(255,255,255,0.05)',borderBottom:'1px solid rgba(255,255,255,0.05)'}}>
        {[['150+','Calculators'],['100K+','SEO Pages'],['2M+','Users'],['99.9%','Uptime']].map(([v,l])=>(
          <div key={l} style={{textAlign:'center'}}>
            <div style={{fontSize:'32px',fontWeight:'800'}}>{v}</div>
            <div style={{color:'#6b7280',fontSize:'14px'}}>{l}</div>
          </div>
        ))}
      </div>
      <div style={{maxWidth:'1000px',margin:'60px auto',padding:'0 20px'}}>
        <h2 style={{textAlign:'center',fontSize:'36px',fontWeight:'800',marginBottom:'40px'}}>Popular Calculators</h2>
        <div style={{display:'grid',gridTemplateColumns:'repeat(auto-fill,minmax(220px,1fr))',gap:'16px'}}>
          {[['🏠','Mortgage Calculator'],['💰','EMI Calculator'],['📈','SIP Calculator'],['💹','Compound Interest'],['🧾','Income Tax'],['📊','GST Calculator'],['💳','Credit Score'],['🏦','Retirement']].map(([e,n])=>(
            <div key={n} style={{background:'rgba(255,255,255,0.04)',border:'1px solid rgba(255,255,255,0.08)',borderRadius:'12px',padding:'20px'}}>
              <div style={{fontSize:'28px',marginBottom:'8px'}}>{e}</div>
              <div style={{fontWeight:'600'}}>{n}</div>
            </div>
          ))}
        </div>
      </div>
      <div id="pricing" style={{maxWidth:'900px',margin:'60px auto',padding:'0 20px'}}>
        <h2 style={{textAlign:'center',fontSize:'36px',fontWeight:'800',marginBottom:'40px'}}>Pricing</h2>
        <div style={{display:'grid',gridTemplateColumns:'repeat(3,1fr)',gap:'20px'}}>
          {[{n:'Starter',p:'$19',f:['5 Widgets','1K API calls','10 SEO pages']},{n:'Pro',p:'$49',f:['Unlimited Widgets','50K API calls','500 SEO pages'],hot:true},{n:'Enterprise',p:'$199',f:['Everything','1M+ API calls','Custom Domain']}].map(pl=>(
            <div key={pl.n} style={{background:pl.hot?'rgba(16,185,129,0.1)':'rgba(255,255,255,0.03)',border:pl.hot?'1px solid rgba(16,185,129,0.4)':'1px solid rgba(255,255,255,0.08)',borderRadius:'16px',padding:'24px',textAlign:'center'}}>
              <div style={{fontWeight:'700',fontSize:'18px',marginBottom:'8px'}}>{pl.n}</div>
              <div style={{fontSize:'40px',fontWeight:'800',color:pl.hot?'#34d399':'white',marginBottom:'16px'}}>{pl.p}<span style={{fontSize:'14px',color:'#6b7280'}}>/mo</span></div>
              {pl.f.map(f=><div key={f} style={{color:'#9ca3af',fontSize:'14px',padding:'4px 0'}}>✓ {f}</div>)}
              <a href="/signup" style={{display:'block',marginTop:'20px',background:pl.hot?'#10b981':'rgba(255,255,255,0.08)',color:'white',padding:'12px',borderRadius:'8px',textDecoration:'none',fontWeight:'600'}}>Get Started</a>
            </div>
          ))}
        </div>
      </div>
      <footer style={{textAlign:'center',padding:'40px',borderTop:'1px solid rgba(255,255,255,0.05)',color:'#4b5563',fontSize:'14px'}}>
        © 2024 WealthPulse Pro · wealthpulsedaily.com
      </footer>
    </div>
  )
}