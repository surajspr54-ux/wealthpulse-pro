export const dynamic = 'force-static'

const STATES = [
  {slug:'alabama',name:'Alabama',avgHome:215000,rate:7.1,tax:5.0},
  {slug:'alaska',name:'Alaska',avgHome:310000,rate:7.0,tax:0},
  {slug:'arizona',name:'Arizona',avgHome:320000,rate:7.2,tax:2.5},
  {slug:'arkansas',name:'Arkansas',avgHome:195000,rate:7.1,tax:4.9},
  {slug:'california',name:'California',avgHome:750000,rate:7.3,tax:13.3},
  {slug:'colorado',name:'Colorado',avgHome:520000,rate:7.2,tax:4.4},
  {slug:'connecticut',name:'Connecticut',avgHome:390000,rate:7.0,tax:6.99},
  {slug:'delaware',name:'Delaware',avgHome:320000,rate:7.0,tax:6.6},
  {slug:'florida',name:'Florida',avgHome:405000,rate:7.2,tax:0},
  {slug:'georgia',name:'Georgia',avgHome:310000,rate:7.1,tax:5.75},
  {slug:'hawaii',name:'Hawaii',avgHome:820000,rate:7.0,tax:11.0},
  {slug:'idaho',name:'Idaho',avgHome:380000,rate:7.2,tax:5.8},
  {slug:'illinois',name:'Illinois',avgHome:275000,rate:7.1,tax:4.95},
  {slug:'indiana',name:'Indiana',avgHome:235000,rate:7.0,tax:3.23},
  {slug:'iowa',name:'Iowa',avgHome:205000,rate:7.0,tax:6.0},
  {slug:'kansas',name:'Kansas',avgHome:215000,rate:7.1,tax:5.7},
  {slug:'kentucky',name:'Kentucky',avgHome:210000,rate:7.1,tax:5.0},
  {slug:'louisiana',name:'Louisiana',avgHome:210000,rate:7.2,tax:4.25},
  {slug:'maine',name:'Maine',avgHome:340000,rate:7.0,tax:7.15},
  {slug:'maryland',name:'Maryland',avgHome:385000,rate:7.0,tax:5.75},
  {slug:'massachusetts',name:'Massachusetts',avgHome:560000,rate:7.1,tax:5.0},
  {slug:'michigan',name:'Michigan',avgHome:225000,rate:7.1,tax:4.25},
  {slug:'minnesota',name:'Minnesota',avgHome:310000,rate:7.0,tax:9.85},
  {slug:'mississippi',name:'Mississippi',avgHome:180000,rate:7.2,tax:5.0},
  {slug:'missouri',name:'Missouri',avgHome:225000,rate:7.1,tax:4.95},
  {slug:'montana',name:'Montana',avgHome:385000,rate:7.1,tax:6.75},
  {slug:'nebraska',name:'Nebraska',avgHome:245000,rate:7.0,tax:6.84},
  {slug:'nevada',name:'Nevada',avgHome:395000,rate:7.2,tax:0},
  {slug:'new-hampshire',name:'New Hampshire',avgHome:415000,rate:7.0,tax:0},
  {slug:'new-jersey',name:'New Jersey',avgHome:485000,rate:7.0,tax:10.75},
  {slug:'new-mexico',name:'New Mexico',avgHome:290000,rate:7.2,tax:5.9},
  {slug:'new-york',name:'New York',avgHome:520000,rate:7.1,tax:10.9},
  {slug:'north-carolina',name:'North Carolina',avgHome:310000,rate:7.1,tax:4.75},
  {slug:'north-dakota',name:'North Dakota',avgHome:240000,rate:7.0,tax:2.9},
  {slug:'ohio',name:'Ohio',avgHome:225000,rate:7.1,tax:3.99},
  {slug:'oklahoma',name:'Oklahoma',avgHome:200000,rate:7.2,tax:4.75},
  {slug:'oregon',name:'Oregon',avgHome:435000,rate:7.1,tax:9.9},
  {slug:'pennsylvania',name:'Pennsylvania',avgHome:270000,rate:7.0,tax:3.07},
  {slug:'rhode-island',name:'Rhode Island',avgHome:390000,rate:7.0,tax:5.99},
  {slug:'south-carolina',name:'South Carolina',avgHome:280000,rate:7.2,tax:6.5},
  {slug:'south-dakota',name:'South Dakota',avgHome:290000,rate:7.0,tax:0},
  {slug:'tennessee',name:'Tennessee',avgHome:300000,rate:7.1,tax:0},
  {slug:'texas',name:'Texas',avgHome:325000,rate:7.3,tax:0},
  {slug:'utah',name:'Utah',avgHome:440000,rate:7.2,tax:4.85},
  {slug:'vermont',name:'Vermont',avgHome:340000,rate:7.0,tax:8.75},
  {slug:'virginia',name:'Virginia',avgHome:380000,rate:7.1,tax:5.75},
  {slug:'washington',name:'Washington',avgHome:520000,rate:7.2,tax:0},
  {slug:'west-virginia',name:'West Virginia',avgHome:155000,rate:7.1,tax:6.5},
  {slug:'wisconsin',name:'Wisconsin',avgHome:270000,rate:7.0,tax:7.65},
  {slug:'wyoming',name:'Wyoming',avgHome:295000,rate:7.0,tax:0},
]

export async function generateStaticParams() {
  return STATES.map(s => ({ state: s.slug }))
}

export async function generateMetadata({ params }: { params: Promise<{ state: string }> }) {
  const { state: stateSlug } = await params
  const state = STATES.find(s => s.slug === stateSlug)
  if (!state) return { title: 'Not Found' }
  return {
    title: 'Mortgage Calculator ' + state.name + ' 2024 | Home Loan Rates',
    description: 'Free ' + state.name + ' mortgage calculator. Average home price $' + state.avgHome.toLocaleString() + ', current rate ' + state.rate + '%.',
  }
}

export default async function StateMortgagePage({ params }: { params: Promise<{ state: string }> }) {
  const { state: stateSlug } = await params
  const state = STATES.find(s => s.slug === stateSlug)
  if (!state) return <div>Not Found</div>

  const loan = state.avgHome * 0.8
  const r = state.rate / 100 / 12
  const n = 360
  const monthly = Math.round(loan * r * Math.pow(1+r,n) / (Math.pow(1+r,n)-1))
  const totalInterest = Math.round(monthly * n - loan)

  return (
    <div style={{minHeight:'100vh',background:'#030712',color:'white',fontFamily:'sans-serif'}}>
      <nav style={{padding:'16px 32px',borderBottom:'1px solid rgba(255,255,255,0.1)',display:'flex',justifyContent:'space-between',alignItems:'center'}}>
        <a href="/" style={{textDecoration:'none'}}><b style={{fontSize:'20px',color:'white'}}>WealthPulse<span style={{color:'#34d399'}}>Pro</span></b></a>
        <a href="/tools/mortgage" style={{color:'#9ca3af',textDecoration:'none',fontSize:'14px'}}>Back to Calculator</a>
      </nav>
      <div style={{maxWidth:'900px',margin:'0 auto',padding:'40px 20px'}}>
        <div style={{fontSize:'13px',color:'#6b7280',marginBottom:'24px'}}>
          <a href="/" style={{color:'#6b7280',textDecoration:'none'}}>Home</a> {'->'} <a href="/mortgage" style={{color:'#6b7280',textDecoration:'none'}}>Mortgage</a> {'->'} {state.name}
        </div>
        <h1 style={{fontSize:'40px',fontWeight:'800',marginBottom:'16px'}}>{state.name} Mortgage Calculator 2024</h1>
        <p style={{color:'#9ca3af',fontSize:'18px',marginBottom:'32px',lineHeight:'1.7'}}>
          Calculate your monthly mortgage payment for a home in {state.name}. Average home prices around ${state.avgHome.toLocaleString()} with current rates at {state.rate}%.
        </p>
        <div style={{display:'grid',gridTemplateColumns:'repeat(3,1fr)',gap:'16px',marginBottom:'40px'}}>
          {[
            {label:'Avg Home Price',val:'$'+state.avgHome.toLocaleString()},
            {label:'Current Rate',val:state.rate+'%'},
            {label:'Est. Monthly',val:'$'+monthly.toLocaleString(),highlight:true},
          ].map(item=>(
            <div key={item.label} style={{background:item.highlight?'rgba(16,185,129,0.1)':'rgba(255,255,255,0.04)',border:item.highlight?'1px solid rgba(16,185,129,0.3)':'1px solid rgba(255,255,255,0.08)',borderRadius:'16px',padding:'20px',textAlign:'center'}}>
              <div style={{color:'#9ca3af',fontSize:'12px',marginBottom:'8px'}}>{item.label}</div>
              <div style={{color:item.highlight?'#34d399':'white',fontSize:'24px',fontWeight:'800'}}>{item.val}</div>
            </div>
          ))}
        </div>
        <div style={{background:'rgba(255,255,255,0.04)',border:'1px solid rgba(255,255,255,0.08)',borderRadius:'20px',padding:'32px',marginBottom:'40px',textAlign:'center'}}>
          <h2 style={{fontSize:'24px',fontWeight:'700',marginBottom:'12px'}}>Free Mortgage Calculator</h2>
          <p style={{color:'#9ca3af',marginBottom:'24px'}}>Get exact monthly payments for your {state.name} home</p>
          <a href="/tools/mortgage" style={{background:'#10b981',color:'white',padding:'16px 40px',borderRadius:'12px',textDecoration:'none',fontWeight:'700',fontSize:'18px'}}>Calculate Now</a>
        </div>
        <h2 style={{color:'white',fontSize:'24px',fontWeight:'700',marginBottom:'16px'}}>Mortgage Rates in {state.name}</h2>
        <p style={{color:'#9ca3af',marginBottom:'24px',lineHeight:'1.8'}}>
          Current mortgage rates in {state.name} average around {state.rate}% for a 30-year fixed loan. On a median-priced home of ${state.avgHome.toLocaleString()} with 20% down, your monthly payment would be approximately ${monthly.toLocaleString()}. Over 30 years, total interest paid would be ${totalInterest.toLocaleString()}.
        </p>
        <h2 style={{color:'white',fontSize:'24px',fontWeight:'700',marginBottom:'16px'}}>{state.name} Housing Market</h2>
        <p style={{color:'#9ca3af',marginBottom:'24px',lineHeight:'1.8'}}>
          The median home value in {state.name} is ${state.avgHome.toLocaleString()}.
          {state.tax === 0 ? ' '+state.name+' has no state income tax.' : ' '+state.name+' has a state income tax rate of up to '+state.tax+'%.'}
        </p>
        <h2 style={{color:'white',fontSize:'24px',fontWeight:'700',marginBottom:'16px'}}>FAQ</h2>
        {[
          {q:'What is the average mortgage rate in '+state.name+'?', a:'Current average rates in '+state.name+' are approximately '+state.rate+'% for a 30-year fixed loan.'},
          {q:'What is the average home price in '+state.name+'?', a:'The median home price in '+state.name+' is approximately $'+state.avgHome.toLocaleString()+' as of 2024.'},
          {q:'Does '+state.name+' have state income tax?', a:state.tax===0?'No! '+state.name+' has no state income tax.':'Yes, '+state.name+' has a top rate of '+state.tax+'%.'},
        ].map(faq=>(
          <div key={faq.q} style={{background:'rgba(255,255,255,0.03)',border:'1px solid rgba(255,255,255,0.08)',borderRadius:'12px',padding:'20px',marginBottom:'12px'}}>
            <div style={{color:'white',fontWeight:'600',marginBottom:'8px'}}>{faq.q}</div>
            <div style={{color:'#9ca3af',fontSize:'14px'}}>{faq.a}</div>
          </div>
        ))}
        <div style={{marginTop:'40px'}}>
          <h2 style={{color:'white',fontSize:'20px',fontWeight:'700',marginBottom:'16px'}}>Other States</h2>
          <div style={{display:'flex',flexWrap:'wrap',gap:'8px'}}>
            {STATES.filter(s=>s.slug!==state.slug).slice(0,20).map(s=>(
              <a key={s.slug} href={'/mortgage/'+s.slug} style={{background:'rgba(255,255,255,0.04)',border:'1px solid rgba(255,255,255,0.08)',borderRadius:'8px',padding:'6px 12px',textDecoration:'none',color:'#9ca3af',fontSize:'13px'}}>{s.name}</a>
            ))}
          </div>
        </div>
      </div>
      <footer style={{textAlign:'center',padding:'32px',borderTop:'1px solid rgba(255,255,255,0.05)',color:'#4b5563',fontSize:'14px',marginTop:'60px'}}>
        2024 WealthPulse Pro - wealthpulsedaily.com
      </footer>
    </div>
  )
}