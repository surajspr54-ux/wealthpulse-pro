export default function MortgagePage() {
  const states = [
    {slug:'alabama',name:'Alabama',avgHome:215000,rate:7.1},
    {slug:'alaska',name:'Alaska',avgHome:310000,rate:7.0},
    {slug:'arizona',name:'Arizona',avgHome:320000,rate:7.2},
    {slug:'arkansas',name:'Arkansas',avgHome:195000,rate:7.1},
    {slug:'california',name:'California',avgHome:750000,rate:7.3},
    {slug:'colorado',name:'Colorado',avgHome:520000,rate:7.2},
    {slug:'connecticut',name:'Connecticut',avgHome:390000,rate:7.0},
    {slug:'delaware',name:'Delaware',avgHome:320000,rate:7.0},
    {slug:'florida',name:'Florida',avgHome:405000,rate:7.2},
    {slug:'georgia',name:'Georgia',avgHome:310000,rate:7.1},
    {slug:'hawaii',name:'Hawaii',avgHome:820000,rate:7.0},
    {slug:'idaho',name:'Idaho',avgHome:380000,rate:7.2},
    {slug:'illinois',name:'Illinois',avgHome:275000,rate:7.1},
    {slug:'indiana',name:'Indiana',avgHome:235000,rate:7.0},
    {slug:'iowa',name:'Iowa',avgHome:205000,rate:7.0},
    {slug:'kansas',name:'Kansas',avgHome:215000,rate:7.1},
    {slug:'kentucky',name:'Kentucky',avgHome:210000,rate:7.1},
    {slug:'louisiana',name:'Louisiana',avgHome:210000,rate:7.2},
    {slug:'maine',name:'Maine',avgHome:340000,rate:7.0},
    {slug:'maryland',name:'Maryland',avgHome:385000,rate:7.0},
    {slug:'massachusetts',name:'Massachusetts',avgHome:560000,rate:7.1},
    {slug:'michigan',name:'Michigan',avgHome:225000,rate:7.1},
    {slug:'minnesota',name:'Minnesota',avgHome:310000,rate:7.0},
    {slug:'mississippi',name:'Mississippi',avgHome:180000,rate:7.2},
    {slug:'missouri',name:'Missouri',avgHome:225000,rate:7.1},
    {slug:'montana',name:'Montana',avgHome:385000,rate:7.1},
    {slug:'nebraska',name:'Nebraska',avgHome:245000,rate:7.0},
    {slug:'nevada',name:'Nevada',avgHome:395000,rate:7.2},
    {slug:'new-hampshire',name:'New Hampshire',avgHome:415000,rate:7.0},
    {slug:'new-jersey',name:'New Jersey',avgHome:485000,rate:7.0},
    {slug:'new-mexico',name:'New Mexico',avgHome:290000,rate:7.2},
    {slug:'new-york',name:'New York',avgHome:520000,rate:7.1},
    {slug:'north-carolina',name:'North Carolina',avgHome:310000,rate:7.1},
    {slug:'north-dakota',name:'North Dakota',avgHome:240000,rate:7.0},
    {slug:'ohio',name:'Ohio',avgHome:225000,rate:7.1},
    {slug:'oklahoma',name:'Oklahoma',avgHome:200000,rate:7.2},
    {slug:'oregon',name:'Oregon',avgHome:435000,rate:7.1},
    {slug:'pennsylvania',name:'Pennsylvania',avgHome:270000,rate:7.0},
    {slug:'rhode-island',name:'Rhode Island',avgHome:390000,rate:7.0},
    {slug:'south-carolina',name:'South Carolina',avgHome:280000,rate:7.2},
    {slug:'south-dakota',name:'South Dakota',avgHome:290000,rate:7.0},
    {slug:'tennessee',name:'Tennessee',avgHome:300000,rate:7.1},
    {slug:'texas',name:'Texas',avgHome:325000,rate:7.3},
    {slug:'utah',name:'Utah',avgHome:440000,rate:7.2},
    {slug:'vermont',name:'Vermont',avgHome:340000,rate:7.0},
    {slug:'virginia',name:'Virginia',avgHome:380000,rate:7.1},
    {slug:'washington',name:'Washington',avgHome:520000,rate:7.2},
    {slug:'west-virginia',name:'West Virginia',avgHome:155000,rate:7.1},
    {slug:'wisconsin',name:'Wisconsin',avgHome:270000,rate:7.0},
    {slug:'wyoming',name:'Wyoming',avgHome:295000,rate:7.0},
  ]

  return (
    <div style={{minHeight:'100vh',background:'#030712',color:'white',fontFamily:'sans-serif'}}>
      <nav style={{padding:'16px 32px',borderBottom:'1px solid rgba(255,255,255,0.1)',display:'flex',justifyContent:'space-between',alignItems:'center'}}>
        <a href="/" style={{textDecoration:'none'}}><b style={{fontSize:'20px',color:'white'}}>WealthPulse<span style={{color:'#34d399'}}>Pro</span></b></a>
        <a href="/tools" style={{color:'#9ca3af',textDecoration:'none',fontSize:'14px'}}>← All Calculators</a>
      </nav>

      <div style={{maxWidth:'1000px',margin:'0 auto',padding:'40px 20px'}}>
        <div style={{textAlign:'center',marginBottom:'40px'}}>
          <h1 style={{fontSize:'44px',fontWeight:'800',marginBottom:'16px'}}>
            Mortgage Calculator <span style={{color:'#34d399'}}>by State</span>
          </h1>
          <p style={{color:'#9ca3af',fontSize:'18px'}}>
            Free mortgage calculators for all 50 US states with local rates and home prices
          </p>
        </div>

        <div style={{display:'grid',gridTemplateColumns:'repeat(auto-fill,minmax(180px,1fr))',gap:'12px'}}>
          {states.map(state=>(
            <a key={state.slug} href={`/mortgage/${state.slug}`} style={{background:'rgba(255,255,255,0.04)',border:'1px solid rgba(255,255,255,0.08)',borderRadius:'12px',padding:'16px',textDecoration:'none',color:'white',display:'block'}}>
              <div style={{fontWeight:'600',fontSize:'14px',marginBottom:'4px'}}>{state.name}</div>
              <div style={{color:'#34d399',fontSize:'13px'}}>Rate: {state.rate}%</div>
              <div style={{color:'#6b7280',fontSize:'12px'}}>Avg: ${(state.avgHome/1000).toFixed(0)}K</div>
            </a>
          ))}
        </div>
      </div>

      <footer style={{textAlign:'center',padding:'32px',borderTop:'1px solid rgba(255,255,255,0.05)',color:'#4b5563',fontSize:'14px',marginTop:'60px'}}>
        © 2024 WealthPulse Pro · wealthpulsedaily.com
      </footer>
    </div>
  )
}