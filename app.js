'use strict';

/* ─── Caregiver data ─────────────────────────────────── */
const CAREGIVERS = [
  {
    id:'cg1', name:'Anjali Sharma', initials:'AS',
    avatarBg:'linear-gradient(135deg,#e6eefc,#e6fff8)', avatarColor:'#064e3b',
    experience:5, languages:['Hindi','English'], location:'Bangalore',
    skills:['Companion care','Medication reminders','Mobility assistance'],
    rating:4.9, reviews:230, ratePerHour:350, available:true,
    bio:'Compassionate caregiver with 5 years of hospital experience. I specialise in post-surgery recovery and making patients feel calm and cared for throughout their stay.',
  },
  {
    id:'cg2', name:'Ravi Patel', initials:'RP',
    avatarBg:'linear-gradient(135deg,#fce7f3,#e0f2fe)', avatarColor:'#1e3a5f',
    experience:3, languages:['English','Gujarati'], location:'Ahmedabad',
    skills:['Patient comfort','Hospital errands','Feeding assistance'],
    rating:4.8, reviews:180, ratePerHour:300, available:true,
    bio:'Dedicated to making hospital stays less stressful. I help patients with day-to-day tasks so families can stay focused on what matters most.',
  },
  {
    id:'cg3', name:'Meera Iyer', initials:'MI',
    avatarBg:'linear-gradient(135deg,#e6eefc,#e6fff8)', avatarColor:'#064e3b',
    experience:7, languages:['Kannada','English'], location:'Bangalore',
    skills:['Companionship','Language support','Light mobility help'],
    rating:4.95, reviews:320, ratePerHour:400, available:true,
    bio:'With 7 years supporting patients across Bangalore hospitals, I provide warm, professional care and bridge communication between patients and medical staff.',
  },
  {
    id:'cg4', name:'Sunita Reddy', initials:'SR',
    avatarBg:'linear-gradient(135deg,#fce7f3,#ede9fe)', avatarColor:'#4c1d95',
    experience:4, languages:['Telugu','Hindi'], location:'Hyderabad',
    skills:['Post-surgery support','Meal assistance','Emotional support'],
    rating:4.85, reviews:145, ratePerHour:320, available:true,
    bio:'Post-surgery recovery can be overwhelming. I bring patience and empathy to every shift, ensuring patients are never alone and always comfortable.',
  },
  {
    id:'cg5', name:'Deepak Nair', initials:'DN',
    avatarBg:'linear-gradient(135deg,#d1fae5,#e0f2fe)', avatarColor:'#1e3a5f',
    experience:6, languages:['Malayalam','English'], location:'Kochi',
    skills:['Elderly care','Wheelchair assistance','Pharmacy runs'],
    rating:4.9, reviews:210, ratePerHour:380, available:false,
    bio:'Specialising in elderly care, I help patients navigate hospitals with dignity. Trained in safe wheelchair transfers and attentive to every detail of comfort.',
  },
  {
    id:'cg6', name:'Priya Singh', initials:'PS',
    avatarBg:'linear-gradient(135deg,#fef3c7,#fce7f3)', avatarColor:'#78350f',
    experience:2, languages:['Hindi','Punjabi'], location:'Delhi',
    skills:['Night-shift monitoring','Vital log tracking','Family updates'],
    rating:4.75, reviews:92, ratePerHour:280, available:true,
    bio:'Especially good at night shifts — calm, reliable, and thorough. I send regular updates so families can rest knowing their loved one is in good hands.',
  },
  {
    id:'cg7', name:'Karthik Raju', initials:'KR',
    avatarBg:'linear-gradient(135deg,#e6eefc,#fce7f3)', avatarColor:'#7c2d12',
    experience:8, languages:['Tamil','English'], location:'Chennai',
    skills:['ICU support','Family liaison','Nutrition tracking'],
    rating:4.92, reviews:380, ratePerHour:420, available:true,
    bio:'8 years of hospital experience including ICU wards. I stay composed under pressure and coordinate effectively with nurses and ward staff.',
  },
  {
    id:'cg8', name:'Neha Gupta', initials:'NG',
    avatarBg:'linear-gradient(135deg,#d1fae5,#fef3c7)', avatarColor:'#064e3b',
    experience:1, languages:['Hindi','English'], location:'Delhi',
    skills:['Companionship','Reading aloud','Entertainment support'],
    rating:4.6, reviews:45, ratePerHour:250, available:true,
    bio:'Enthusiastic and warm, I provide cheerful companionship — reading aloud, light conversation, and keeping spirits high during long hospital stays.',
  },
  {
    id:'cg9', name:'Suresh Kumar', initials:'SK',
    avatarBg:'linear-gradient(135deg,#ede9fe,#d1fae5)', avatarColor:'#1e3a5f',
    experience:10, languages:['Telugu','Kannada'], location:'Hyderabad',
    skills:['Critical care support','Medical translation','Family counselling'],
    rating:4.98, reviews:560, ratePerHour:450, available:true,
    bio:'A decade across Hyderabad\'s top hospitals. Fluent in Telugu and Kannada, I frequently help families understand complex medical instructions with clarity.',
  },
];

/* ─── Sample reviews per caregiver ─────────────────── */
const SAMPLE_REVIEWS = {
  cg1:[
    {name:'Preethi M.', rating:5, comment:'Anjali was wonderful with my father. She was attentive, kind, and kept us updated regularly.', date:'12 Mar 2026'},
    {name:'Sunil R.', rating:5, comment:'Highly recommend! Very professional and caring throughout the night shift.', date:'5 Feb 2026'},
    {name:'Kavitha B.', rating:4, comment:'Great experience overall. Punctual and very patient with my elderly mother.', date:'20 Jan 2026'},
  ],
  cg2:[
    {name:'Arun P.', rating:5, comment:'Ravi was fantastic. Handled everything calmly even when things got hectic.', date:'10 Mar 2026'},
    {name:'Deepa S.', rating:4, comment:'Very helpful with the hospital errands. Friendly and easy to communicate with.', date:'1 Feb 2026'},
  ],
  cg3:[
    {name:'Raghu I.', rating:5, comment:'Meera is outstanding. Her experience really shows — the nurses trusted her completely.', date:'15 Mar 2026'},
    {name:'Lalitha K.', rating:5, comment:'Warm, professional, and incredibly reliable. Will definitely book again.', date:'8 Mar 2026'},
    {name:'Vinay T.', rating:5, comment:'Excellent communication. She kept the family updated throughout the shift.', date:'18 Feb 2026'},
  ],
  cg4:[{name:'Ramesh R.', rating:5, comment:'Sunita was fantastic post my wife\'s surgery. Couldn\'t have managed without her.', date:'3 Mar 2026'}],
  cg5:[
    {name:'Binu N.', rating:5, comment:'Deepak is the gold standard for elderly care. Patient, gentle, and thorough.', date:'2 Mar 2026'},
    {name:'Sheeba J.', rating:5, comment:'My mother loved him. He made her feel safe the whole time.', date:'14 Jan 2026'},
  ],
  cg6:[{name:'Gurpreet S.', rating:4, comment:'Priya was great on the night shift — calm and attentive throughout.', date:'22 Feb 2026'}],
  cg7:[
    {name:'Mani R.', rating:5, comment:'Karthik\'s ICU experience gave us peace of mind like nothing else could.', date:'9 Mar 2026'},
    {name:'Suja A.', rating:5, comment:'Professional, knowledgeable, and genuinely kind. Highly recommended.', date:'1 Mar 2026'},
  ],
  cg8:[{name:'Rohan G.', rating:5, comment:'Neha kept my dad entertained and in good spirits. Lovely person.', date:'5 Mar 2026'}],
  cg9:[
    {name:'Lakshmi K.', rating:5, comment:'Suresh is exceptional. His translation help was a lifesaver for our family.', date:'11 Mar 2026'},
    {name:'Vikram S.', rating:5, comment:'10 years of experience and it shows in every small thing he does.', date:'28 Feb 2026'},
    {name:'Padma R.', rating:5, comment:'Best caregiver we have ever had. Will always request Suresh specifically.', date:'10 Feb 2026'},
  ],
};

/* ─── In-memory session ──────────────────────────────── */
const Auth = {
  login(name, email) {
    sessionStorage.setItem('cm_user', JSON.stringify({ name, email }));
  },
  logout() {
    sessionStorage.removeItem('cm_user');
    window.location.href = 'index.html';
  },
  currentUser() {
    try { return JSON.parse(sessionStorage.getItem('cm_user')); } catch { return null; }
  },
  requireAuth(next) {
    if (!this.currentUser()) {
      window.location.href = 'auth.html' + (next ? '?next=' + encodeURIComponent(next) : '');
      return false;
    }
    return true;
  },
};

/* ─── In-memory bookings (persist for tab session) ─── */
let _bookings = JSON.parse(sessionStorage.getItem('cm_bookings') || '[]');

const Bookings = {
  getAll: () => _bookings,
  getByUser(userId) { return _bookings.filter(b => b.userId === userId); },
  get: (id) => _bookings.find(b => b.id === id),
  create(data) {
    const b = { id: 'bk' + Date.now(), ...data, status: 'upcoming', createdAt: new Date().toISOString() };
    _bookings.push(b);
    sessionStorage.setItem('cm_bookings', JSON.stringify(_bookings));
    return b;
  },
  cancel(id) {
    _bookings = _bookings.map(b => b.id === id ? { ...b, status: 'cancelled' } : b);
    sessionStorage.setItem('cm_bookings', JSON.stringify(_bookings));
  },
};

/* ─── In-memory messages ─────────────────────────────── */
let _messages = JSON.parse(sessionStorage.getItem('cm_messages') || '[]');

const CANNED_REPLIES = [
  'Thank you for reaching out! I\'ll be there on time.',
  'Got it, I\'ll make sure to bring everything needed.',
  'Understood. Please don\'t hesitate to share any specific instructions.',
  'I\'ve noted all the details. See you soon!',
  'Thank you! I\'ll coordinate with the ward staff on arrival.',
];

const Messages = {
  getByBooking: (bookingId) => _messages.filter(m => m.bookingId === bookingId),
  send(bookingId, senderRole, text) {
    const m = { id: 'msg' + Date.now(), bookingId, senderRole, text, sentAt: new Date().toISOString() };
    _messages.push(m);
    sessionStorage.setItem('cm_messages', JSON.stringify(_messages));
    return m;
  },
  simulateReply(bookingId, onReply) {
    setTimeout(() => {
      const reply = CANNED_REPLIES[Math.floor(Math.random() * CANNED_REPLIES.length)];
      const m = Messages.send(bookingId, 'caregiver', reply);
      onReply(m);
    }, 1600);
  },
};

/* ─── Caregiver helpers ──────────────────────────────── */
const Caregivers = {
  getAll: () => CAREGIVERS,
  get: (id) => CAREGIVERS.find(c => c.id === id),
  search({ query = '', language = '', minRating = 0, availableOnly = false, sortBy = 'rating' } = {}) {
    let list = [...CAREGIVERS];
    if (query) {
      const q = query.toLowerCase();
      list = list.filter(c =>
        c.name.toLowerCase().includes(q) ||
        c.location.toLowerCase().includes(q) ||
        c.skills.some(s => s.toLowerCase().includes(q)) ||
        c.languages.some(l => l.toLowerCase().includes(q))
      );
    }
    if (language) list = list.filter(c => c.languages.includes(language));
    if (minRating) list = list.filter(c => c.rating >= parseFloat(minRating));
    if (availableOnly) list = list.filter(c => c.available);
    list.sort((a, b) => {
      if (sortBy === 'rating') return b.rating - a.rating;
      if (sortBy === 'price_asc') return a.ratePerHour - b.ratePerHour;
      if (sortBy === 'price_desc') return b.ratePerHour - a.ratePerHour;
      if (sortBy === 'experience') return b.experience - a.experience;
      return 0;
    });
    return list;
  },
};

/* ─── Pricing ────────────────────────────────────────── */
const Pricing = {
  estimate(ratePerHour, durationHours) {
    const subtotal = ratePerHour * durationHours;
    const fee = Math.round(subtotal * 0.05);
    return { subtotal, fee, total: subtotal + fee };
  },
  durationLabel: { 2:'2 hours', 4:'4 hours', 8:'8-hour shift', 12:'Full day (12 hrs)' },
};

/* ─── Toast ──────────────────────────────────────────── */
const Toast = {
  show(msg, type = 'success') {
    const el = Object.assign(document.createElement('div'), { className: `toast toast-${type}`, textContent: msg });
    document.body.appendChild(el);
    requestAnimationFrame(() => { el.classList.add('show'); });
    setTimeout(() => { el.classList.remove('show'); setTimeout(() => el.remove(), 300); }, 3200);
  },
};

/* ─── Nav ────────────────────────────────────────────── */
const Nav = {
  render(selector, activePage = '') {
    const user = Auth.currentUser();
    const pages = [
      { href: 'caregivers.html', label: 'Browse', key: 'caregivers' },
      { href: 'index.html#pricing', label: 'Pricing', key: 'pricing' },
    ];
    const links = pages.map(p =>
      `<a href="${p.href}" class="nav-link${activePage === p.key ? ' active' : ''}">${p.label}</a>`
    ).join('');

    const authArea = user
      ? `<a href="dashboard.html" class="nav-link${activePage === 'dashboard' ? ' active' : ''}">Dashboard</a>
         <a href="messages.html" class="nav-link${activePage === 'messages' ? ' active' : ''}">Messages</a>
         <button class="btn btn-ghost btn-sm" onclick="Auth.logout()">Log out</button>`
      : `<a class="btn btn-primary btn-sm" href="auth.html">Sign in</a>`;

    const el = document.querySelector(selector);
    if (!el) return;
    el.innerHTML = `
      <header>
        <div class="brand">
          <a href="index.html" class="logo-link">
            <div class="logo">CM</div>
            <div>
              <div class="brand-name">CareMate</div>
              <div class="brand-sub">Hospital Caregiver Booking</div>
            </div>
          </a>
        </div>
        <nav id="main-nav" aria-label="Main navigation">
          ${links}
          ${authArea}
        </nav>
        <button class="hamburger" onclick="document.getElementById('main-nav').classList.toggle('open')" aria-label="Toggle menu">☰</button>
      </header>`;
  },
};

/* ─── Utilities ──────────────────────────────────────── */
const Utils = {
  formatDate: (iso) => new Date(iso).toLocaleDateString('en-IN', { day:'numeric', month:'short', year:'numeric' }),
  formatTime: (t) => { const [h, m] = t.split(':'); const ap = +h >= 12 ? 'PM' : 'AM'; return `${+h % 12 || 12}:${m} ${ap}`; },
  stars: (r) => '★'.repeat(Math.round(r)) + '☆'.repeat(5 - Math.round(r)),
  statusBadge(status) {
    const map = { upcoming:['#dcfce7','#166534'], completed:['#e0f2fe','#075985'], cancelled:['#fee2e2','#991b1b'] };
    const [bg, color] = map[status] || ['#f1f5f9','#475569'];
    return `<span style="background:${bg};color:${color};padding:3px 10px;border-radius:999px;font-size:12px;font-weight:700;text-transform:capitalize">${status}</span>`;
  },
  currency: (n) => '₹' + n.toLocaleString('en-IN'),
};
