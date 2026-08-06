// THE MISSING MANUAL — Core JS

// ── SEED DATA ──────────────────────────────────────────────
const DATA = {
  categories: [
    { id:'freelancing',    name:'Freelancing',       icon:'💼', color:'#2563EB', colorLight:'#EFF4FF', desc:'Client work, pricing, contracts, survival.',                lessons:47, contributors:23 },
    { id:'university',     name:'University',         icon:'🎓', color:'#7C3AED', colorLight:'#F5F3FF', desc:'CGPA, exams, hostel life, and the rest.',                  lessons:62, contributors:31 },
    { id:'web-dev',        name:'Web Development',    icon:'💻', color:'#0891B2', colorLight:'#ECFEFF', desc:'Code, portfolios, getting hired, side projects.',           lessons:38, contributors:19 },
    { id:'graphic-design', name:'Graphic Design',     icon:'🎨', color:'#D97706', colorLight:'#FFFBEB', desc:'Tools, clients, pricing your work right.',                  lessons:29, contributors:14 },
    { id:'business',       name:'Business',           icon:'📈', color:'#059669', colorLight:'#ECFDF5', desc:'Starting, surviving, and actually growing.',                lessons:41, contributors:22 },
    { id:'nysc',           name:'NYSC',               icon:'🟢', color:'#16A34A', colorLight:'#F0FDF4', desc:'Camp, PPA, state secrets, and real survival tips.',         lessons:33, contributors:18 },
    { id:'job-hunting',    name:'Job Hunting',        icon:'🔍', color:'#DC2626', colorLight:'#FEF2F2', desc:'CV, interviews, LinkedIn, salary negotiation.',             lessons:25, contributors:12 },
    { id:'money',          name:'Money & Finance',    icon:'💰', color:'#CA8A04', colorLight:'#FEFCE8', desc:'Budgeting, saving, not going broke at 25.',                 lessons:31, contributors:17 },
  ],
  lessons: {
    freelancing: [
      {
        id:'fl-001', type:'Things Nobody Tells You',
        title:'Your first client will lowball you — and you will accept it. Here\'s why that\'s okay.',
        situation:'I was 20, desperate for my first client, and accepted ₦5,000 for a full website redesign that took me 3 weeks.',
        what_happened:'I delivered the work, the client was happy, and I thought I\'d "made it." Then I calculated my hourly rate: ₦79 per hour. That\'s when it hit me — I had undersold myself so badly that I was working harder than someone on minimum wage while also carrying all the stress of running a business.',
        lesson:'The first client isn\'t about the money. It\'s about the testimonial, the portfolio piece, and understanding what the process actually feels like. Price yourself low intentionally for your first 1-2 clients if you must, but set a mental deadline: after this one, my price goes up. Write that number down.',
        advice:'Scope the project in writing before you agree to anything. Even a WhatsApp message saying "this covers X, Y, and Z" protects you. Every extra request after that is a new conversation.',
        author:'Anonymous', authorInitial:'?', time:'3 days ago', wishes:342, comments:28, category:'freelancing'
      },
      {
        id:'fl-002', type:'Costly Mistakes',
        title:'I worked for 6 weeks without a deposit. Client disappeared. Never again.',
        situation:'Got a "big" client who wanted a full e-commerce store. Seemed professional. Said he\'d pay "when we see results."',
        what_happened:'I built the entire thing — 3 product pages, cart system, payment integration — and when I delivered, he started giving excuses. Two weeks of follow-up, then silence. I lost 6 weeks of work and ₦180,000 in potential earnings.',
        lesson:'No deposit, no work. 50% upfront is the industry standard for a reason. A client who refuses to pay a deposit is telling you exactly how they\'ll treat you when the work is done. Listen.',
        advice:'Create a simple contract template. Include: project scope, payment schedule (50% start, 50% on delivery), revision rounds, and what happens if the client ghosts.',
        author:'Anonymous', authorInitial:'?', time:'1 week ago', wishes:289, comments:41, category:'freelancing'
      },
      {
        id:'fl-003', type:'Red Flags',
        title:'The client who says "this is simple, won\'t take long" is the hardest client you\'ll have.',
        situation:'Client message: "I just need a quick landing page, nothing fancy, should take you like 2 hours max." I took the job.',
        what_happened:'That "quick landing page" had 7 revision rounds over 3 weeks. He wanted custom animations he couldn\'t describe, a colour that "felt like success," and three times told me to "just make it look better" with no further context.',
        lesson:'When a client downplays complexity, they are not familiar with what the work actually involves. That\'s not their fault — but it means YOU need to set expectations firmly.',
        advice:'Respond to "it\'s simple" with: "Let me send you a quick scope so we\'re aligned on what\'s included." Then list everything you\'re building. This kills 80% of scope creep before it starts.',
        author:'Anonymous', authorInitial:'?', time:'2 weeks ago', wishes:198, comments:19, category:'freelancing'
      },
      {
        id:'fl-004', type:'Time Savers',
        title:'Create a rate card. Stop quoting prices from memory.',
        situation:'Every time a potential client asked my prices, I\'d panic and either overprice out of nerves or underprice because I felt they couldn\'t afford it.',
        what_happened:'I made a simple document: Landing page — ₦80,000. Multi-page site — ₦180,000–₦350,000. E-commerce — ₦400,000+. Maintenance — ₦25,000/month. My confidence in conversations doubled overnight.',
        lesson:'A rate card removes the emotional negotiation from the conversation. The price is the price. The card said so.',
        advice:'Make your rate card slightly higher than what you actually want. That leaves room to negotiate without going below your real floor.',
        author:'Anonymous', authorInitial:'?', time:'3 weeks ago', wishes:267, comments:33, category:'freelancing'
      },
      {
        id:'fl-005', type:'Regrets From Experience',
        title:'I said yes to every client for 2 years. My quality suffered and I nearly quit.',
        situation:'My philosophy was: never turn down money. I took every project regardless of scope, budget, or how bad the vibe was.',
        what_happened:'At my peak I had 6 active clients at the same time. My work started getting sloppy. I missed a deadline. A good client gave a bad review. I lost momentum and nearly stopped freelancing entirely.',
        lesson:'Your capacity is a resource. Protect it like money. A ₦50,000 project that destroys your week is less valuable than a ₦30,000 project from a great client who pays on time.',
        advice:'Start keeping a simple "client score" after each project: Communication, Payment, Scope clarity, Overall ease. Only take referrals from clients who scored 4+/5.',
        author:'Anonymous', authorInitial:'?', time:'1 month ago', wishes:412, comments:56, category:'freelancing'
      },
    ],
    university: [
      {
        id:'uni-001', type:'Things Nobody Tells You',
        title:'First semester CGPA is not a death sentence — but recovery is ten times harder than maintenance.',
        situation:'Entered university thinking I could coast through like secondary school. First semester result: 2.1 GPA.',
        what_happened:'I spent the next 5 semesters grinding to drag that GPA up. Even with 5.0s in later semesters, the math meant my cumulative barely crossed 3.5 at graduation. One bad semester early follows you the entire degree.',
        lesson:'The first semester sets the mathematical floor. If you start with 1.8, you\'re fighting uphill math for 4 years. It\'s not impossible — but every A+ you get later is partly paying for past mistakes.',
        advice:'Treat first semester like a final exam you\'ve been preparing for your whole life. Don\'t "settle in slowly." Settle in aggressively.',
        author:'Anonymous', authorInitial:'?', time:'5 days ago', wishes:523, comments:67, category:'university'
      },
      {
        id:'uni-002', type:'Costly Mistakes',
        title:'I joined 5 clubs in week one. Finished none. Lost the whole first session.',
        situation:'Fresher excitement. Drama club, debate society, entrepreneurship club, music group, and departmental association. All in week one.',
        what_happened:'By week 4, I was spread so thin I couldn\'t remember what I\'d signed up for. By week 8, I had attended zero clubs fully and missed 3 lectures for meetings that didn\'t even matter.',
        lesson:'One club, done well, that aligns with your goals is worth ten clubs attended halfheartedly.',
        advice:'Don\'t join anything for 6 weeks. Observe first. Then pick one. Commit for a full semester before adding anything else.',
        author:'Anonymous', authorInitial:'?', time:'2 weeks ago', wishes:198, comments:24, category:'university'
      },
      {
        id:'uni-003', type:'Things Nobody Tells You',
        title:'Your lecturers\' past questions are the entire exam. Stop reading the textbook alone.',
        situation:'I spent 3 days reading a 400-page textbook for my first university exam. Failed spectacularly.',
        what_happened:'My coursemates who got As spent one day going through 5 years of past questions and marking schemes. They\'d figured out the pattern. I hadn\'t.',
        lesson:'University exams are mostly predictable. Lecturers recycle questions because they\'re busy humans. Past questions + understanding why answers are correct = your best study strategy.',
        advice:'From day one, find the past question bank for every course. If one doesn\'t exist, start one. Share it. That goodwill comes back.',
        author:'Anonymous', authorInitial:'?', time:'3 weeks ago', wishes:445, comments:38, category:'university'
      },
    ],
    nysc: [
      {
        id:'nysc-001', type:'Things Nobody Tells You',
        title:'The most important thing at camp isn\'t the drills. It\'s the people you meet.',
        situation:'I treated camp like an obstacle to survive — head down, count days, get out.',
        what_happened:'Three years later, my NYSC camp contact landed me the job I\'m in now. The person I ignored in the bunk next to me turned out to be an MD\'s nephew.',
        lesson:'Camp is a random sampling of the Nigerian educated class — lawyers, engineers, doctors, bankers — all in matching khaki at the same time. This never happens again in real life. Use it.',
        advice:'Collect contacts intentionally. LinkedIn people during camp. Follow up once you\'re back. The relationship value of NYSC comes from network density — hundreds of degree holders in one place for 3 weeks.',
        author:'Anonymous', authorInitial:'?', time:'1 week ago', wishes:389, comments:44, category:'nysc'
      },
      {
        id:'nysc-002', type:'Costly Mistakes',
        title:'I turned down my PPA posting because it wasn\'t in my preferred city. Worst decision of my service year.',
        situation:'Got posted to a rural LGA. Complained. Used connections to move to the state capital. Thought I\'d won.',
        what_happened:'My original PPA was a private company. The one I moved to was a government office where I sat doing nothing for 11 months. Zero experience gained. The original posting had juniors who later got absorbed as full staff.',
        lesson:'Your PPA is not punishment. It\'s an opportunity wearing an inconvenient address. Evaluate before you reject.',
        advice:'Before you try to change your PPA, spend two weeks there. Ask: Is anyone learning anything? Is there a real organisation here? If yes — stay.',
        author:'Anonymous', authorInitial:'?', time:'2 weeks ago', wishes:276, comments:31, category:'nysc'
      },
    ],
    'web-dev': [
      {
        id:'wd-001', type:'Things Nobody Tells You',
        title:'Knowing how to code and knowing how to get paid to code are two completely different skills.',
        situation:'I could build full-stack applications but couldn\'t land a single client or job for 8 months after I finished learning.',
        what_happened:'I was applying to 50+ jobs, getting no responses. I had no portfolio people could find, no LinkedIn presence, no GitHub with real projects. My skills existed only on my laptop.',
        lesson:'Visibility is a skill. Building in private is the same as not building. Your code needs to be somewhere people can see it before it has any market value.',
        advice:'Before you learn one more framework: push your projects to GitHub, write a short case study for each one, and put them somewhere people can click. Then go back to learning.',
        author:'Anonymous', authorInitial:'?', time:'4 days ago', wishes:334, comments:29, category:'web-dev'
      },
    ],
    'graphic-design': [
      {
        id:'gd-001', type:'Red Flags',
        title:'"I\'ll pay you in exposure" has never paid anyone\'s rent. Not once.',
        situation:'Early in my design career, I did 4 projects for free in exchange for "promotion to their audience."',
        what_happened:'None of them promoted me. The one that did sent me three more people who also wanted free work. I had effectively trained the market in my area to expect free work from me.',
        lesson:'Exposure only has value if the other person\'s audience is genuinely your target client. A small business with 200 Instagram followers cannot pay you in exposure.',
        advice:'If someone asks for free work, ask yourself: would I be excited if 100 people exactly like this person reached out to me? If the answer is no — it\'s not a fair trade.',
        author:'Anonymous', authorInitial:'?', time:'1 week ago', wishes:287, comments:22, category:'graphic-design'
      },
    ],
    business: [
      {
        id:'biz-001', type:'Costly Mistakes',
        title:'I launched a business without telling anyone. Wonder why nobody bought.',
        situation:'Spent 4 months building my product/service. Perfecting it. Getting it just right. Then launched by posting once on WhatsApp.',
        what_happened:'Five people viewed the story. Two were family. Nobody bought. I blamed the economy, the market, Nigeria. Two years later I learned that marketing starts before launch, not after.',
        lesson:'If you\'re building something and nobody knows you\'re building it, you don\'t have a business — you have a hobby with ambition.',
        advice:'Talk about what you\'re building from day one. Document the process. Share the problems. Build the audience before the product is ready.',
        author:'Anonymous', authorInitial:'?', time:'3 days ago', wishes:401, comments:48, category:'business'
      },
    ],
    'job-hunting': [
      {
        id:'jh-001', type:'Time Savers',
        title:'Tailor your CV for every single application. Generic CVs are invisible.',
        situation:'I sent the same CV to 80 jobs in 3 months. Got 2 callbacks. Changed nothing, wondered why.',
        what_happened:'A recruiter friend reviewed my CV and pointed out that it read like a Wikipedia article about me — not a response to their specific job description. I was telling them what I did. Not why it mattered to them.',
        lesson:'A CV isn\'t a biography. It\'s an argument for why you solve their specific problem. The keywords in the job description are the answer key.',
        advice:'Before sending any application: read the job description once, highlight the 5 most important requirements, then open your CV and make sure each of those 5 things is visible within the first third of the page.',
        author:'Anonymous', authorInitial:'?', time:'5 days ago', wishes:318, comments:27, category:'job-hunting'
      },
    ],
    money: [
      {
        id:'mon-001', type:'Regrets From Experience',
        title:'I made ₦500,000 in my first good month as a freelancer. I spent ₦480,000. I have nothing to show for it.',
        situation:'First time earning real money. Felt like I\'d arrived. Bought the phone, fixed the clothes, went out more, helped everyone who asked.',
        what_happened:'The next month was slow. I had nothing saved. I had to borrow to cover basic expenses. The freedom I thought I\'d built lasted exactly 30 days.',
        lesson:'Income in bursts (freelance, contracts, sales) requires a different money mindset than salary. The good month must fund the bad months. Always.',
        advice:'The day you receive any income above your basic needs: save 30% before you spend anything. Not plan to save. Actually move it. Your future self during a slow month will thank you.',
        author:'Anonymous', authorInitial:'?', time:'2 weeks ago', wishes:498, comments:62, category:'money'
      },
    ],
  }
};

// ── AUTH ────────────────────────────────────────────────────
const Auth = {
  isLoggedIn(){ return !!localStorage.getItem('tmm_user'); },
  getUser(){ return JSON.parse(localStorage.getItem('tmm_user')||'null'); },
  login(name,email){
    const u={name,email,handle:'@'+name.toLowerCase().replace(/\s+/g,'').replace(/[^a-z0-9]/g,''),initial:name[0].toUpperCase(),reputation:0,contributions:0,bio:''};
    localStorage.setItem('tmm_user',JSON.stringify(u)); return u;
  },
  logout(){ localStorage.removeItem('tmm_user'); },
  register(name,email){ return Auth.login(name,email); }
};

// ── WISHES ──────────────────────────────────────────────────
const Wishes = {
  key:'tmm_wishes',
  getAll(){ return JSON.parse(localStorage.getItem(this.key)||'[]'); },
  has(id){ return this.getAll().includes(id); },
  toggle(id){
    const all=this.getAll(), idx=all.indexOf(id);
    idx>-1?all.splice(idx,1):all.push(id);
    localStorage.setItem(this.key,JSON.stringify(all));
    return idx===-1;
  }
};

// ── SAVED ───────────────────────────────────────────────────
const Saved = {
  key:'tmm_saved',
  getAll(){ return JSON.parse(localStorage.getItem(this.key)||'[]'); },
  has(id){ return this.getAll().includes(id); },
  toggle(id){
    const all=this.getAll(), idx=all.indexOf(id);
    idx>-1?all.splice(idx,1):all.push(id);
    localStorage.setItem(this.key,JSON.stringify(all));
    return idx===-1;
  }
};

// ── TOAST ───────────────────────────────────────────────────
function showToast(msg){
  let t=document.querySelector('.toast');
  if(!t){t=document.createElement('div');t.className='toast';document.body.appendChild(t);}
  t.innerHTML=`<svg viewBox="0 0 16 16" fill="currentColor"><path d="M13.78 4.22a.75.75 0 010 1.06l-7.25 7.25a.75.75 0 01-1.06 0L2.22 9.28a.75.75 0 011.06-1.06L6 10.94l6.72-6.72a.75.75 0 011.06 0z"/></svg>${msg}`;
  t.classList.add('show');
  clearTimeout(t._t);
  t._t=setTimeout(()=>t.classList.remove('show'),2800);
}

// ── SHARE ───────────────────────────────────────────────────
function openShare(title,url){
  const o=document.getElementById('share-overlay');
  if(!o)return;
  const st=document.getElementById('share-title-text');
  const su=document.getElementById('share-url');
  if(st)st.textContent=title||'The Missing Manual';
  if(su)su.value=url||window.location.href;
  o.classList.add('open');
}
function closeShare(){ const o=document.getElementById('share-overlay'); if(o)o.classList.remove('open'); }
function shareVia(p){
  const url=encodeURIComponent(document.getElementById('share-url').value);
  const text=encodeURIComponent('Check out this lesson on The Missing Manual');
  const links={whatsapp:`https://wa.me/?text=${text}%20${url}`,twitter:`https://twitter.com/intent/tweet?text=${text}&url=${url}`,facebook:`https://facebook.com/sharer/sharer.php?u=${url}`,linkedin:`https://linkedin.com/sharing/share-offsite/?url=${url}`,telegram:`https://t.me/share/url?url=${url}&text=${text}`};
  if(p==='copy'){copyLink();return;}
  if(links[p])window.open(links[p],'_blank');
  closeShare();
}
function copyLink(){
  const i=document.getElementById('share-url');
  if(i){navigator.clipboard.writeText(i.value).catch(()=>{});showToast('Link copied!');closeShare();}
}

// ── LOGOUT ──────────────────────────────────────────────────
function doLogout(){
  Auth.logout();
  const inPages=window.location.pathname.includes('/pages/');
  window.location.href=inPages?'../index.html':'index.html';
}

// ── SIDEBAR ─────────────────────────────────────────────────
function buildSidebar(active){
  const u=Auth.getUser();
  const inPages=window.location.pathname.includes('/pages/');
  const root=inPages?'../':'';
  return `<aside class="sidebar">
    <div class="sidebar-logo">
      <div class="logo-mark"><span>M</span></div>
      <div><span class="logo-name">The Missing Manual</span><span class="logo-sub">Real lessons. Hard earned.</span></div>
    </div>
    <nav class="sidebar-nav">
      <div class="nav-section">
        <span class="nav-section-label">Discover</span>
        <a href="${root}index.html" class="nav-link ${active==='home'?'active':''}">${ic('home')} Home</a>
        <a href="${root}pages/explore.html" class="nav-link ${active==='explore'?'active':''}">${ic('grid')} Explore</a>
        <a href="${root}pages/submit.html" class="nav-link ${active==='submit'?'active':''}">${ic('plus')} Submit a Lesson</a>
      </div>
      <div class="nav-section">
        <span class="nav-section-label">Manuals</span>
        ${DATA.categories.slice(0,5).map(c=>`<a href="${root}pages/manual.html?cat=${c.id}" class="nav-link"><span style="font-size:13px">${c.icon}</span>${c.name}<span class="count">${c.lessons}</span></a>`).join('')}
        <a href="${root}pages/explore.html" class="nav-link" style="font-size:12px;color:var(--text-muted);padding-left:12px">All manuals →</a>
      </div>
      ${u?`<div class="nav-section">
        <span class="nav-section-label">You</span>
        <a href="${root}pages/dashboard.html" class="nav-link ${active==='dashboard'?'active':''}">${ic('chart')} Dashboard</a>
        <a href="${root}pages/messages.html" class="nav-link ${active==='messages'?'active':''}">${ic('message')} Messages<span class="count msg-unread-badge hidden" id="msg-badge-sidebar" style="background:#FEF2EE;color:#C84B31">0</span></a>
        <a href="${root}pages/saved.html" class="nav-link ${active==='saved'?'active':''}">${ic('bookmark')} Saved</a>
        <a href="${root}pages/notifications.html" class="nav-link ${active==='notif'?'active':''}">${ic('bell')} Notifications <span class="count" style="background:#FEF2EE;color:#C84B31">3</span></a>
      </div>`:''}
    </nav>
    <div class="sidebar-bottom">
      ${u?`<div class="sidebar-user" onclick="window.location='${root}pages/profile.html'">
        <div class="avatar">${u.initial}</div>
        <div><span class="s-name">${u.name}</span><span class="s-handle">${u.handle}</span></div>
      </div>
      <button class="nav-link" onclick="doLogout()" style="width:100%;margin-top:4px;color:var(--warm);background:none;border:none">${ic('logout')} Sign out</button>`
      :`<a href="${root}pages/login.html" class="btn btn-primary" style="width:100%;justify-content:center;display:flex;margin-bottom:8px">Sign in</a>
       <a href="${root}pages/signup.html" class="btn btn-ghost" style="width:100%;justify-content:center;display:flex">Create account</a>`}
    </div>
  </aside>`;
}

// ── TOPBAR ──────────────────────────────────────────────────
function buildTopbar(ph){
  const u=Auth.getUser();
  const inPages=window.location.pathname.includes('/pages/');
  const root=inPages?'../':'';
  return `<div class="topbar">
    <div class="topbar-search">
      ${ic('search')}
      <input type="text" placeholder="${ph||'Search manuals and lessons…'}" />
    </div>
    <div class="topbar-right">
      <button class="icon-btn" id="themeBtn" onclick="toggleTheme()" title="Toggle dark/light" style="font-size:17px;border:1px solid var(--border);background:var(--surface)">&#127769;</button>
      <a href="${root}pages/submit.html" class="icon-btn" title="Submit">${ic('plus')}</a>
      ${u?`<a href="${root}pages/notifications.html" class="icon-btn notif-dot">${ic('bell')}</a>
           <div class="avatar" style="cursor:pointer" onclick="window.location='${root}pages/profile.html'">${u.initial}</div>`
         :`<a href="${root}pages/login.html" class="btn btn-ghost btn-sm">Sign in</a>
           <a href="${root}pages/signup.html" class="btn btn-primary btn-sm">Join free</a>`}
    </div>
  </div>`;
}

// ── MOBILE NAV ──────────────────────────────────────────────
function buildMobileNav(active){
  const inPages=window.location.pathname.includes('/pages/');
  const root=inPages?'../':'';
  return `<nav class="mobile-nav"><div class="mobile-nav-inner">
    <div class="m-nav-item ${active==='home'?'active':''}" onclick="window.location='${root}index.html'">${ic('home')}<span>Home</span></div>
    <div class="m-nav-item ${active==='explore'?'active':''}" onclick="window.location='${root}pages/explore.html'">${ic('grid')}<span>Explore</span></div>
    <div class="m-nav-item ${active==='submit'?'active':''}" onclick="window.location='${root}pages/submit.html'">${ic('plus')}<span>Submit</span></div>
    <div class="m-nav-item ${active==='messages'?'active':''}" style="position:relative" onclick="window.location='${root}pages/messages.html'">${ic('message')}<span>Messages</span><span class="msg-unread-badge hidden" id="msg-badge-mobile" style="position:absolute;top:2px;right:10px;width:7px;height:7px;background:var(--crimson,#B91C1C);border-radius:50%;border:1.5px solid var(--surface)"></span></div>
    <div class="m-nav-item ${active==='saved'?'active':''}" onclick="window.location='${root}pages/saved.html'">${ic('bookmark')}<span>Saved</span></div>
    <div class="m-nav-item ${active==='profile'?'active':''}" onclick="window.location='${root}pages/profile.html'">${ic('user')}<span>Profile</span></div>
  </div></nav>`;
}

// ── SHARE MODAL ─────────────────────────────────────────────
function buildShareModal(){
  return `<div class="overlay" id="share-overlay" onclick="if(event.target===this)closeShare()">
    <div class="modal">
      <button class="modal-close" onclick="closeShare()">✕</button>
      <div class="modal-title">Share this lesson</div>
      <div class="modal-sub" id="share-title-text">The Missing Manual</div>
      <div class="share-grid">
        <div class="share-opt" onclick="shareVia('whatsapp')"><div class="s-icon" style="background:#DCF8C6">📱</div><span>WhatsApp</span></div>
        <div class="share-opt" onclick="shareVia('twitter')"><div class="s-icon" style="background:#E7F3FF">🐦</div><span>Twitter / X</span></div>
        <div class="share-opt" onclick="shareVia('facebook')"><div class="s-icon" style="background:#E8F0FE">📘</div><span>Facebook</span></div>
        <div class="share-opt" onclick="shareVia('linkedin')"><div class="s-icon" style="background:#E8F0FE">💼</div><span>LinkedIn</span></div>
        <div class="share-opt" onclick="shareVia('telegram')"><div class="s-icon" style="background:#E3F2FD">✈️</div><span>Telegram</span></div>
        <div class="share-opt" onclick="shareVia('copy')"><div class="s-icon" style="background:#F4F4F1">🔗</div><span>Copy link</span></div>
      </div>
      <div class="copy-row">
        <input class="copy-input" id="share-url" type="text" readonly />
        <button class="btn btn-ghost btn-sm" onclick="copyLink()">Copy</button>
      </div>
    </div>
  </div>`;
}

// ── ICONS ───────────────────────────────────────────────────
function ic(n){
  const I={
    home:`<svg viewBox="0 0 16 16" fill="none" stroke="currentColor" stroke-width="1.5"><path d="M2 6.5L8 2l6 4.5V14a1 1 0 01-1 1H3a1 1 0 01-1-1V6.5z"/><path d="M6 15V9h4v6"/></svg>`,
    grid:`<svg viewBox="0 0 16 16" fill="none" stroke="currentColor" stroke-width="1.5"><rect x="1.5" y="1.5" width="5" height="5" rx="1"/><rect x="9.5" y="1.5" width="5" height="5" rx="1"/><rect x="1.5" y="9.5" width="5" height="5" rx="1"/><rect x="9.5" y="9.5" width="5" height="5" rx="1"/></svg>`,
    plus:`<svg viewBox="0 0 16 16" fill="none" stroke="currentColor" stroke-width="1.75"><path d="M8 2v12M2 8h12"/></svg>`,
    bookmark:`<svg viewBox="0 0 16 16" fill="none" stroke="currentColor" stroke-width="1.5"><path d="M3 2h10a1 1 0 011 1v11l-6-3.5L2 14V3a1 1 0 011-1z"/></svg>`,
    bell:`<svg viewBox="0 0 16 16" fill="none" stroke="currentColor" stroke-width="1.5"><path d="M8 1.5A4.5 4.5 0 013.5 6v3.5H2v1.5h12V9.5h-1.5V6A4.5 4.5 0 018 1.5zM6.5 13a1.5 1.5 0 003 0"/></svg>`,
    chart:`<svg viewBox="0 0 16 16" fill="none" stroke="currentColor" stroke-width="1.5"><rect x="1.5" y="9.5" width="3" height="5" rx=".5"/><rect x="6.5" y="5.5" width="3" height="9" rx=".5"/><rect x="11.5" y="2.5" width="3" height="12" rx=".5"/></svg>`,
    user:`<svg viewBox="0 0 16 16" fill="none" stroke="currentColor" stroke-width="1.5"><circle cx="8" cy="5" r="3"/><path d="M2 14c0-3 2.686-5 6-5s6 2 6 5"/></svg>`,
    search:`<svg viewBox="0 0 16 16" fill="none" stroke="currentColor" stroke-width="1.5"><circle cx="6.5" cy="6.5" r="4"/><path d="M11 11l3 3"/></svg>`,
    logout:`<svg viewBox="0 0 16 16" fill="none" stroke="currentColor" stroke-width="1.5"><path d="M6 14H3a1 1 0 01-1-1V3a1 1 0 011-1h3M11 11l3-3-3-3M15 8H6"/></svg>`,
    heart:`<svg viewBox="0 0 16 16" fill="currentColor"><path d="M8 13.7C7.6 13.4 1 9.2 1 5.1 1 2.8 2.8 1 5.1 1c1.2 0 2.4.5 3 1.4C8.6 1.5 9.7 1 11 1 13.2 1 15 2.8 15 5.1c0 4-6.6 8.3-7 8.6z"/></svg>`,
    comment:`<svg viewBox="0 0 16 16" fill="none" stroke="currentColor" stroke-width="1.5"><path d="M2 2h12a1 1 0 011 1v7a1 1 0 01-1 1H9l-3 3v-3H3a1 1 0 01-1-1V3a1 1 0 011-1z"/></svg>`,
    share:`<svg viewBox="0 0 16 16" fill="none" stroke="currentColor" stroke-width="1.5"><circle cx="12" cy="3" r="1.5"/><circle cx="12" cy="13" r="1.5"/><circle cx="4" cy="8" r="1.5"/><path d="M10.5 3.9L5.5 7M5.5 9l5 3.1"/></svg>`,
    check:`<svg viewBox="0 0 16 16" fill="none" stroke="currentColor" stroke-width="2"><path d="M3 8l3.5 3.5L13 4"/></svg>`,
    star:`<svg viewBox="0 0 16 16" fill="currentColor"><path d="M8 1l1.854 4.146L14 5.618l-3 3.09.708 4.292L8 10.618l-3.708 2.382.708-4.292-3-3.09 4.146-.472z"/></svg>`,
    message:`<svg viewBox="0 0 16 16" fill="none" stroke="currentColor" stroke-width="1.5"><path d="M2 3h12a1 1 0 011 1v6a1 1 0 01-1 1H5l-3 3V4a1 1 0 011-1z"/></svg>`,
    send:`<svg viewBox="0 0 16 16" fill="currentColor"><path d="M1.5 14.5L14.8 8.4a.5.5 0 000-.9L1.5 1.4a.5.5 0 00-.7.6l2 6L1 14a.5.5 0 00.5.9zM3.4 8L2 3.7 12 8l-10 4.3L3.4 8z"/></svg>`,
  };
  return I[n]||'';
}
// Alias for pages that use icon()
function icon(n){ return ic(n); }

// ── THEME TOGGLE ──
function toggleTheme() {
  var dark = document.body.classList.toggle('dark');
  localStorage.setItem('tmm_theme', dark ? 'dark' : 'light');
  var btn = document.getElementById('themeBtn');
  if (btn) btn.textContent = dark ? '☀️' : '🌙';
}

// Apply saved theme on load
(function() {
  if (localStorage.getItem('tmm_theme') === 'dark') {
    document.body.classList.add('dark');
  }
})();

// ── UNREAD MESSAGE BADGE POLLING ───────────────────────────
// Updates any element with class "msg-unread-badge" (sidebar + mobile nav).
// Safe on pages that don't load api.js, and on logged-out visitors.
(function() {
  function paintBadge(count) {
    var els = document.querySelectorAll('.msg-unread-badge');
    for (var i = 0; i < els.length; i++) {
      var el = els[i];
      if (count > 0) {
        el.classList.remove('hidden');
        if (el.tagName === 'SPAN' && el.id === 'msg-badge-sidebar') el.textContent = count;
      } else {
        el.classList.add('hidden');
      }
    }
  }

  function poll() {
    if (typeof Api === 'undefined' || typeof Auth === 'undefined' || !Auth.isLoggedIn()) return;
    Api.getUnreadMessageCount().then(function(res) {
      paintBadge(res && res.count ? res.count : 0);
    }).catch(function() {});
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', function() { poll(); setInterval(poll, 12000); });
  } else {
    poll();
    setInterval(poll, 12000);
  }
})();
