/* ============================================================
 *  Sishi Li · Academic Portfolio  —  vanilla JS app
 *  ----------------------------------------------------------
 *  Edit content by editing the data tables in this file.
 *  No build step. Just refresh the page after saving.
 * ============================================================ */

/* ─────── 1. CONFIG ─────── */

// Replace with your Formspree endpoint (https://formspree.io/f/XXXXXX).
// Leave empty string to fall back to the offline "thank you" message.
const FORMSPREE_ENDPOINT = 'https://formspree.io/f/mjgjnzjk';

/* ─────── 2. TRANSLATIONS ─────── */

const T = {
  en: {
    navLogo: 'Sishi Li',
    name: 'Sishi Li',
    tagline: 'PhD in Built Environment',
    affilLine1: 'Research Fellow · Department of The Built Environment',
    affilLine2: 'National University of Singapore',
    bio: "I work at the intersection of thermal comfort, human well-being, and smart building systems. My research focuses on dynamic thermal environments, personal comfort systems, and occupant-centric building control.",
    downloadCV: 'Download CV',
    getInTouch: 'Get in Touch',
    nav: { news: 'News', experience: 'Experience', projects: 'Projects', publications: 'Publications', contact: 'Contact' },
    chips: ['Thermal Comfort', 'Human Well-Being', 'Smart Buildings', 'Occupant-Centric Control'],
    acad0: 'ResearchGate', acad1: 'ORCID', acad2: 'Scopus',
    heroBadge: '@ NUS · Singapore',
    newsLabel: 'RECENT UPDATES',         newsTitle: "What's New",
    expLabel: 'BACKGROUND',              expTitle: 'Experience & Education',
    positions: 'Positions',              education: 'Education',
    projLabel: 'RESEARCH',               projTitle: 'Projects',
    pubLabel: 'SCHOLARSHIP',             pubTitle: 'Publications',
    pubFilters: ['All', 'First Author', 'Journal', 'Conference'],
    conferenceLabel: 'CONFERENCE PRESENTATIONS',
    contactLabel: 'CONNECT',             contactTitle: 'Get in Touch',
    contactIntro: "I'm open to research collaborations, academic discussions, and speaking invitations. Feel free to reach out!",
    academicProfiles: 'Academic Profiles',
    formName: 'Your name', formEmail: 'your@email.com', formMsg: "Hello Sishi, I'd like to connect...",
    formSend: 'Send Message →',
    formSuccess: "Thank you for your message! I'll get back to you soon.",
    formError: 'Something went wrong. Please try again or email me directly.',
    footerLeft: 'Sishi Li · National University of Singapore',
    footerRight: '© 2026 Sishi Li',
    underReview: 'Under Review',
    inChinese: 'In Chinese',
    firstAuthor: '1st Author',
    connections: 'Academic Network',
    workWithMe: 'A Glimpse of My Moments',
    photoHint: '✦ Click to view all',
    lightboxClose: '✕  Close',
  },
  zh: {
    navLogo: '李思师',
    name: '李思师',
    tagline: '建筑环境与能源工程博士',
    affilLine1: '研究员 · 建筑环境系',
    affilLine2: '新加坡国立大学',
    bio: '我的研究聚焦于热舒适、人体健康与智慧建筑系统的交叉领域，致力于动态热环境设计、个人舒适系统以及以使用者为中心的建筑控制策略。',
    downloadCV: '下载简历',
    getInTouch: '联系我',
    nav: { news: '动态', experience: '经历', projects: '项目', publications: '论文', contact: '联系' },
    chips: ['热舒适', '人体健康', '智慧建筑', '以用户为中心的控制'],
    acad0: 'ResearchGate', acad1: 'ORCID', acad2: 'Scopus',
    heroBadge: '@ NUS · 新加坡',
    newsLabel: '最新动态',               newsTitle: '近期资讯',
    expLabel: '背景',                    expTitle: '工作与教育经历',
    positions: '工作职位',               education: '教育经历',
    projLabel: '科研项目',               projTitle: '研究项目',
    pubLabel: '学术成果',                pubTitle: '论文发表',
    pubFilters: ['全部', '第一作者', '期刊', '会议'],
    conferenceLabel: '学术会议报告',
    contactLabel: '联系方式',            contactTitle: '与我联系',
    contactIntro: '欢迎科研合作、学术交流及演讲邀请，随时联系！',
    academicProfiles: '学术主页',
    formName: '您的姓名', formEmail: 'your@email.com', formMsg: '您好，思师，我想与您联系...',
    formSend: '发送消息 →',
    formSuccess: '感谢您的留言！我会尽快回复您。',
    formError: '发送失败，请重试或直接发邮件给我。',
    footerLeft: '李思师 · 新加坡国立大学',
    footerRight: '© 2026 李思师',
    underReview: '审稿中',
    inChinese: '中文',
    firstAuthor: '第一作者',
    connections: '学术网络',
    workWithMe: '生活瞬间',
    photoHint: '✦ 点击查看全部',
    lightboxClose: '✕  关闭',
  },
};

/* ─────── 3. DATA TABLES ─────── */

const NEWS = {
  en: [
    { date: 'Oct 2025', tag: 'Position',  text: 'Started as Research Fellow at the Department of The Built Environment, National University of Singapore.' },
    { date: 'Jun 2025', tag: 'Degree',    text: 'Received PhD in Civil Engineering (Building Science) from Tsinghua University. Dissertation: Design and evaluation of a dynamic non-uniform thermal environment.' },
    { date: '2026',     tag: 'Paper',     text: 'Paper under review — "Thermal comfort and physiological responses under winter temperature cycles: Implications for demand response control in buildings," Building and Environment.' },
    { date: 'Nov 2024', tag: 'Award',     text: 'Received Second Prize at the China Thermal Comfort Conference Student Forum.' },
    { date: 'Jul 2024', tag: 'Conference', text: 'Oral presentation at Indoor Air 2024, Honolulu, USA — evaluating four personal heating devices and occupant usage behaviour.' },
    { date: 'Nov 2024', tag: 'Conference', text: 'Oral presentation at the 6th Thermal Comfort Conference (China) — effects of temperature cycles on thermal comfort.' },
  ],
  zh: [
    { date: '2025年10月', tag: '职位', text: '入职新加坡国立大学建筑环境系，担任研究员。' },
    { date: '2025年6月',  tag: '学位', text: '获清华大学土木工程（建筑技术）方向博士学位，论文题目：动态非均匀热环境的设计与评价。' },
    { date: '2026年',     tag: '论文', text: '论文审稿中 —《冬季温度循环下的热舒适与生理响应：对建筑需求响应控制的启示》，投稿至 Building and Environment。' },
    { date: '2024年11月', tag: '奖项', text: '获中国热舒适学术会议学生论坛二等奖。' },
    { date: '2024年7月',  tag: '会议', text: '在Indoor Air 2024（美国檀香山）作口头报告——四种个人供暖设备性能评估与用户行为研究。' },
    { date: '2024年11月', tag: '会议', text: '在第六届全国热舒适学术会议作口头报告——温度循环对热舒适的影响。' },
  ],
};

const POSITIONS = {
  en: [
    { period: 'Oct 2025 – Present', role: 'Research Fellow', org: 'National University of Singapore · Singapore',
      detail: 'Digital twin-based smart fan systems for enhanced energy efficiency and occupant comfort. PI: Ali Ghahramani.' },
  ],
  zh: [
    { period: '2025年10月 – 至今', role: '研究员', org: '新加坡国立大学 · 新加坡',
      detail: '基于数字孪生的智能风扇系统，提升能效与用户热舒适。项目负责人：Ali Ghahramani。' },
  ],
};

const EDUCATION = {
  en: [
    { period: 'Aug 2020 – Jun 2025', role: 'Ph.D. in Civil Engineering', org: 'Tsinghua University, Beijing, China',
      detail: 'Building Science · Supervisor: Prof. Bin Cao · GPA: 3.87/4.00' },
    { period: 'Sep 2016 – Jun 2020', role: 'B.Eng. in Building Environment and Energy Engineering', org: 'Chongqing University, Chongqing, China',
      detail: 'GPA: 3.84/4.00 (Rank: 1/114)' },
  ],
  zh: [
    { period: '2020年8月 – 2025年6月', role: '工学博士（土木工程）', org: '清华大学，北京，中国',
      detail: '建筑科学 · 导师：曹彬教授 · GPA: 3.87/4.00' },
    { period: '2016年9月 – 2020年6月', role: '工学学士（建筑环境与能源工程）', org: '重庆大学，重庆，中国',
      detail: 'GPA: 3.84/4.00（排名：1/114）' },
  ],
};

const PROJECTS = {
  en: [
    { period: 'Sep 2025 – Present',
      title: 'Digital Twin-Based Smart Fan Systems for Enhanced Energy Efficiency and Occupant Comfort',
      funder: 'Green Buildings Innovation Cluster (GBIC) R&D · PI: Ali Ghahramani',
      desc: 'Design control logic for smart fan systems, validate performance via simulation, and manage project delivery.',
      role: 'Leading Researcher' },
    { period: 'Nov 2022 – Nov 2025',
      title: 'Personal Environmental Comfort Demand Analysis and System Design in Non-Uniform Space-Time Environments',
      funder: 'National Key R&D Program of China · PI: Bin Cao',
      desc: 'Quantify effects of personal comfort systems (PECS) on thermal comfort and building energy; develop a support platform for PECS design and operation.',
      role: 'Leading Researcher & Sub-project Manager' },
    { period: 'Nov 2022 – Nov 2024',
      title: 'Humanized Design and Products for the User Interface in the Built Environment',
      funder: 'Tsinghua University – Toyota Joint Research Fund · PI: Bin Cao',
      desc: 'Analyze effects of non-uniform heat and cold exposures on physiological responses; propose evaluation methods for thermal comfort in dynamic environments.',
      role: 'Leading Researcher & Sub-project Manager' },
    { period: 'Aug 2018 – Dec 2021',
      title: 'Thermal Protection Technology for Winter Outdoor Spectating Environments',
      funder: 'National Key R&D Program of China · PI: Bin Cao',
      desc: 'Analyzed heating demands in extremely cold environments; developed portable and wearable body heating devices for winter sports events.',
      role: 'Primary Researcher' },
  ],
  zh: [
    { period: '2025年9月 – 至今',
      title: '基于数字孪生的智能风扇系统——提升能效与用户热舒适',
      funder: '绿色建筑创新集群（GBIC）R&D · 负责人：Ali Ghahramani',
      desc: '设计智能风扇系统控制逻辑，通过仿真验证系统性能，负责项目管理工作。',
      role: '主要研究人员' },
    { period: '2022年11月 – 2025年11月',
      title: '非均匀时空环境下个人舒适需求分析与系统设计',
      funder: '国家重点研发计划 · 负责人：曹彬',
      desc: '量化个人环境舒适系统（PECS）对热舒适与建筑能耗的影响，开发PECS设计与运行支撑平台。',
      role: '主要研究人员 & 子课题负责人' },
    { period: '2022年11月 – 2024年11月',
      title: '建筑环境中用户界面的人性化设计与产品研究',
      funder: '清华大学–丰田联合研究基金 · 负责人：曹彬',
      desc: '分析多种非均匀冷热暴露对人体生理响应与主观感受的影响；提出动态非均匀热环境下热舒适评价方法。',
      role: '主要研究人员 & 子课题负责人' },
    { period: '2018年8月 – 2021年12月',
      title: '冬季室外观赛环境热防护技术研究',
      funder: '国家重点研发计划 · 负责人：曹彬',
      desc: '分析极寒环境中人体供热需求，研发用于冬季体育赛事的便携式与可穿戴供热装备。',
      role: '主要研究人员' },
  ],
};

const PUBS = [
  { num: 1,  year: '2026', first: true,  type: 'journal',
    title: 'Thermal comfort and physiological responses under winter temperature cycles: Implications for demand response control in buildings',
    authors: ['S. Li','X. Jia','B. Cao','et al.'],
    journal: 'Building and Environment', status: 'underReview' },
  { num: 2,  year: '2024', first: true,  type: 'journal',
    title: 'Thermal comfort benefits, energy efficiency, and occupant regulation behaviour in four types of personal heating within the built environment',
    authors: ['S. Li','X. Jia','C. Peng','et al.'],
    journal: 'Building and Environment', volume: '266 (2024) 112075',
    doi: 'https://doi.org/10.1016/j.buildenv.2024.112075' },
  { num: 3,  year: '2024', first: true,  type: 'journal',
    title: 'Effects of temperature cycles on human thermal comfort in built environment under summer conditions',
    authors: ['S. Li','X. Jia','C. Peng','et al.'],
    journal: 'Science of The Total Environment', volume: '912 (2024) 168756',
    doi: 'https://doi.org/10.1016/j.scitotenv.2023.168756' },
  { num: 4,  year: '2023', first: true,  type: 'journal',
    title: 'Improvement of thermal perceptions and physiological responses using torso heating under short-term cold exposure',
    authors: ['S. Li','X. Jia','B. Cao','et al.'],
    journal: 'Science of The Total Environment', volume: '892 (2023) 164491',
    doi: 'https://doi.org/10.1016/j.scitotenv.2023.164491' },
  { num: 5,  year: '2023', first: true,  type: 'journal',
    title: 'Thermal comfort characteristics and heating demand of people with different activity status during extremely cold exposure',
    authors: ['S. Li','X. Jia','B. Cao','et al.'],
    journal: 'Building and Environment', volume: '228 (2023) 109798',
    doi: 'https://doi.org/10.1016/j.scitotenv.2023.164491' },
  { num: 6,  year: '2023', first: true,  type: 'journal',
    title: 'Study on the Performance of Personal Heating in Extremely Cold Environments Using a Thermal Manikin',
    authors: ['S. Li','Y. Deng','B. Cao'],
    journal: 'Buildings', volume: '13 (2023) 362',
    doi: 'https://doi.org/10.3390/buildings13020362' },
  { num: 7,  year: '2024', first: false, type: 'journal',
    title: 'Development of the Universal Standard Effective Temperature for evaluating thermal comfort across different metabolic rates',
    authors: ['X. Jia','S. Li','Y. Zhu','et al.'],
    journal: 'Building and Environment', volume: '250 (2024) 111149',
    doi: 'https://doi.org/10.1016/j.buildenv.2023.111149' },
  { num: 8,  year: '2024', first: false, type: 'journal',
    title: 'Measurement of steady state and dynamic metabolic rates under typical daily activities',
    authors: ['X. Jia','S. Li','J. Wang','et al.'],
    journal: 'Building and Environment', volume: '254 (2024) 111344',
    doi: 'https://doi.org/10.1016/j.buildenv.2024.111344' },
  { num: 9,  year: '2023', first: false, type: 'journal',
    title: 'Transient thermal comfort and physiological responses following a step change in activity status under summer indoor environments',
    authors: ['X. Jia','S. Li','Y. Zhu','et al.'],
    journal: 'Energy and Buildings', volume: '285 (2023) 112918',
    doi: 'https://doi.org/10.1016/j.enbuild.2023.112918' },
  { num: 10, year: '2024', first: false, type: 'journal',
    title: 'From characteristics to practical applications of skin temperature in thermal comfort research – A comprehensive review',
    authors: ['J. Zhao','R. Wang','Y. Wu','…','S. Li','H. Jiang','B. Cao'],
    journal: 'Building and Environment', volume: '262 (2024) 111820',
    doi: 'https://doi.org/10.1016/j.buildenv.2024.111820' },
  { num: 11, year: '2022', first: true,  type: 'journal', inChinese: true,
    title: 'Study on Wearable Personalized Thermal Comfort System for Cold Environments',
    authors: ['S. Li','B. Cao'],
    journal: 'World Architecture', volume: '6 (2022) 61–65' },
  { num: 12, year: '2020', first: true,  type: 'journal', inChinese: true,
    title: 'Optimization Study of Deflecting Ventilation Based on CFD and Orthogonal Tests',
    authors: ['S. Li','M. Zhao','Y. Zhai','et al.'],
    journal: 'Building Energy & Environment', volume: '8 (2020) 25–30' },
  { num: 13, year: '2022', first: false, type: 'journal', inChinese: true,
    title: 'Ergonomics in built environments: Prospects of human thermal comfort research',
    authors: ['B. Cao','Y. Zhu','Y. Hou','…','S. Li','S. Liu'],
    journal: 'Chinese Science Bulletin', volume: '67 (2022) 1757–1770',
    doi: 'https://doi.org/10.1360/tb-2022-0006' },
];

const CONFERENCES = [
  { year: '2024', title: 'The effects of temperature cycles on thermal comfort in built environment under summer conditions', event: 'Thermal Comfort Conference, China',  type: 'Oral' },
  { year: '2024', title: 'Thermal performance evaluation of four personal heating devices and occupant usage behaviour',      event: 'Indoor Air 2024, Honolulu, USA',     type: 'Oral' },
  { year: '2023', title: 'Human responses to temperature cycles under summer conditions',                                     event: 'ISHVAC 2023, Beijing, China',        type: 'Oral' },
  { year: '2023', title: 'Thermal perception and physiological response of people with different heating modes during short-term cold exposure',
                  event: 'Healthy Buildings 2023, Tianjin, China', type: 'Oral' },
  { year: '2022', title: 'Effect of activity status on thermal comfort during extremely cold exposure',                       event: 'Indoor Air 2022, Kuopio, Finland',   type: 'Online · Poster' },
];

const PHOTOS = [
  'uploads/life_photo1.jpg',
  'uploads/life_photo2.jpg',
  'uploads/life_photo3.jpg',
  'uploads/life_photo4.jpg',
];

const NETWORK_NODES = [
  { id: 'ali',     namesEn: ['Ali','Ghahramani'], nameZh: 'Ali\nGhahramani', r: 30, x: 509, y: 142, color: '#b0d4c8', stroke: '#8abfb0', link: 'https://www.researchgate.net/profile/Ali-Ghahramani-4' },
  { id: 'bin',     namesEn: ['Bin Cao'],          nameZh: '曹彬',            r: 48, x: 580, y: 278, color: '#3d8a6c', stroke: '#2d6e55', link: 'https://www.researchgate.net/profile/Bin-Cao-6' },
  { id: 'yingxin', namesEn: ['Yingxin','Zhu'],    nameZh: '朱颖心',          r: 42, x: 340, y: 97,  color: '#5ea08a', stroke: '#4a8570', link: 'https://www.researchgate.net/profile/Yingxin-Zhu' },
  { id: 'jiahao',  namesEn: ['Jiahao','Wang'],    nameZh: 'Jiahao\nWang',    r: 26, x: 276, y: 355, color: '#c8e4dc', stroke: '#a8ccbd', link: 'https://www.researchgate.net/profile/Jiahao-Wang-65' },
  { id: 'xinyu',   namesEn: ['Xinyu Jia'],        nameZh: '贾新宇',          r: 38, x: 218, y: 201, color: '#7ab5a0', stroke: '#5ea08a', link: 'https://www.researchgate.net/profile/Xinyu-Jia-4' },
  { id: 'yong',    namesEn: ['Yong','Cheng'],     nameZh: '程勇',            r: 34, x: 583, y: 445, color: '#95c4b2', stroke: '#7aaa96', link: 'https://www.researchgate.net/profile/Cheng-Yong-4' },
];

/* ─────── 4. STATE & UTILITIES ─────── */

const state = {
  lang: 'en',
  pubFilter: 0,
};

const $  = (sel, root = document) => root.querySelector(sel);
const $$ = (sel, root = document) => Array.from(root.querySelectorAll(sel));
const SVG_NS = 'http://www.w3.org/2000/svg';

function el(tag, attrs = {}, ...children) {
  const node = document.createElement(tag);
  for (const [k, v] of Object.entries(attrs)) {
    if (v == null || v === false) continue;
    if (k === 'class')      node.className = v;
    else if (k === 'html')  node.innerHTML = v;
    else if (k.startsWith('on') && typeof v === 'function') node.addEventListener(k.slice(2), v);
    else                    node.setAttribute(k, v === true ? '' : v);
  }
  for (const c of children) {
    if (c == null || c === false) continue;
    node.append(c instanceof Node ? c : document.createTextNode(String(c)));
  }
  return node;
}

function svg(tag, attrs = {}, ...children) {
  const node = document.createElementNS(SVG_NS, tag);
  for (const [k, v] of Object.entries(attrs)) {
    if (v == null || v === false) continue;
    node.setAttribute(k, v);
  }
  for (const c of children) if (c) node.append(c);
  return node;
}

/* ─────── 5. RENDER ─────── */

function renderStatic() {
  const t = T[state.lang];

  // simple text bindings
  $$('[data-bind]').forEach(node => {
    const key = node.dataset.bind;
    if (t[key] != null) node.textContent = t[key];
  });

  // nav labels
  $$('[data-nav]').forEach(a => { a.textContent = t.nav[a.dataset.nav]; });

  // hero name (different markup per language)
  const heroName = $('#hero-name');
  heroName.innerHTML = state.lang === 'en'
    ? '<span>Sishi</span><br />Li.'
    : '<span>李</span>思师';

  // hero affil
  const affil = $('#hero-affil');
  affil.innerHTML = '';
  affil.append(el('strong', {}, t.affilLine1), document.createElement('br'), t.affilLine2);

  // chips
  const chips = $('#hero-chips');
  chips.innerHTML = '';
  t.chips.forEach(c => chips.append(el('span', { class: 'hero-chip' }, c)));

  // form placeholders
  $('#cf-name').placeholder  = t.formName;
  $('#cf-email').placeholder = t.formEmail;
  $('#cf-msg').placeholder   = t.formMsg;

  // page lang attribute
  document.documentElement.lang = state.lang === 'zh' ? 'zh' : 'en';
}

function renderNews() {
  const grid = $('#news-grid');
  grid.innerHTML = '';
  NEWS[state.lang].forEach(item => {
    grid.append(
      el('div', { class: 'news-item' },
        el('div', { class: 'news-date' }, item.date),
        el('div', { class: 'news-content' },
          el('span', { class: 'news-tag' }, item.tag),
          item.text,
        ),
      )
    );
  });
}

function renderExpItems(rootSel, items) {
  const root = $(rootSel);
  root.innerHTML = '';
  items.forEach(it => {
    root.append(
      el('div', { class: 'exp-item' },
        el('div', { class: 'exp-period' }, it.period),
        el('div', { class: 'exp-role' },   it.role),
        el('div', { class: 'exp-org' },    it.org),
        el('div', { class: 'exp-detail' }, it.detail),
      )
    );
  });
}

function renderProjects() {
  const grid = $('#projects-grid');
  grid.innerHTML = '';
  PROJECTS[state.lang].forEach(p => {
    grid.append(
      el('div', { class: 'proj-card' },
        el('div', { class: 'proj-period' }, p.period),
        el('div', { class: 'proj-title' },  p.title),
        el('div', { class: 'proj-funder' }, p.funder),
        el('div', { class: 'proj-desc' },   p.desc),
        el('span', { class: 'proj-role-badge' }, p.role),
      )
    );
  });
}

function renderPubFilters() {
  const t = T[state.lang];
  const wrap = $('#pub-filters');
  wrap.innerHTML = '';
  t.pubFilters.forEach((label, i) => {
    const btn = el('button', {
      class: 'pub-filter' + (state.pubFilter === i ? ' active' : ''),
      onclick: () => { state.pubFilter = i; renderPubFilters(); renderPubs(); },
    }, label);
    wrap.append(btn);
  });
}

function renderPubs() {
  const t = T[state.lang];
  const list = $('#pub-list');
  list.innerHTML = '';

  const filtered = PUBS.filter(p => {
    if (state.pubFilter === 0) return true;
    if (state.pubFilter === 1) return p.first;
    if (state.pubFilter === 2) return p.type === 'journal';
    if (state.pubFilter === 3) return p.type === 'conference';
    return true;
  });

  filtered.forEach(p => {
    // authors with bold S. Li
    const authorsNode = el('div', { class: 'pub-authors' });
    p.authors.forEach((a, j) => {
      const span = a === 'S. Li' ? el('strong', {}, a) : document.createTextNode(a);
      authorsNode.append(span);
      if (j < p.authors.length - 1) authorsNode.append(', ');
    });

    const journalText = `${p.journal}${p.volume ? ', ' + p.volume : ''}${p.status === 'underReview' ? ' · ' + t.underReview : ''}`;

    const tags = el('div', { class: 'pub-tags' });
    if (p.first)     tags.append(el('span', { class: 'pub-tag first' }, t.firstAuthor));
    if (p.inChinese) tags.append(el('span', { class: 'pub-tag' }, t.inChinese));
    tags.append(el('span', { class: 'pub-tag' }, p.year));
    if (p.doi) {
      tags.append(el('a', {
        class: 'pub-tag doi', href: p.doi, target: '_blank', rel: 'noopener',
        html: '<svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><path d="M18 13v6a2 2 0 01-2 2H5a2 2 0 01-2-2V8a2 2 0 012-2h6"/><polyline points="15 3 21 3 21 9"/><line x1="10" y1="14" x2="21" y2="3"/></svg>DOI',
      }));
    }

    list.append(
      el('div', { class: 'pub-item' },
        el('div', { class: 'pub-num' }, `[${p.num}]`),
        el('div', {},
          el('div', { class: 'pub-title-text' }, p.title),
          authorsNode,
          el('div', { class: 'pub-journal' }, journalText),
          tags,
        )
      )
    );
  });
}

function renderConferences() {
  const list = $('#conf-list');
  list.innerHTML = '';
  CONFERENCES.forEach(c => {
    list.append(
      el('div', { class: 'pub-item' },
        el('div', { class: 'pub-num' }, c.year),
        el('div', {},
          el('div', { class: 'pub-title-text', style: 'font-size:14px' }, c.title),
          el('div', { class: 'pub-journal' }, c.event),
          el('div', { class: 'pub-tags' }, el('span', { class: 'pub-tag' }, c.type)),
        )
      )
    );
  });
}

/* ─── Academic Network SVG ─── */

function renderNetwork() {
  const mount = $('#network-svg-mount');
  mount.innerHTML = '';

  const cx = 440, cy = 240;
  const root = svg('svg', {
    viewBox: '130 15 580 470',
    xmlns: SVG_NS,
    style: 'width:100%;height:auto',
  });

  const defs = svg('defs');
  defs.append(svg('clipPath', { id: 'centerClip2' }, svg('circle', { cx, cy, r: 50 })));
  const filter = svg('filter', { id: 'nodeShadow', x: '-30%', y: '-30%', width: '160%', height: '160%' });
  filter.append(svg('feDropShadow', { dx: 0, dy: 2, stdDeviation: 4, 'flood-color': '#00000018' }));
  defs.append(filter);
  root.append(defs);

  // connection lines
  NETWORK_NODES.forEach(n => {
    root.append(svg('line', {
      x1: cx, y1: cy, x2: n.x, y2: n.y,
      stroke: '#a8ccbd', 'stroke-width': 1.5, 'stroke-dasharray': '5 4', opacity: 0.55,
    }));
  });

  // peripheral nodes
  NETWORK_NODES.forEach(n => {
    const a = svg('a', { href: n.link, target: '_blank', rel: 'noopener' });
    const g = svg('g', { class: 'net-node', filter: 'url(#nodeShadow)' });

    g.append(svg('circle', { cx: n.x, cy: n.y, r: n.r, fill: n.color, opacity: 0.93 }));
    g.append(svg('circle', { cx: n.x, cy: n.y, r: n.r, fill: 'none', stroke: n.stroke, 'stroke-width': 1.5, opacity: 0.6 }));

    const lines = state.lang === 'zh' ? n.nameZh.split('\n') : n.namesEn;
    const fs = Math.max(8.5, Math.min(11.5, n.r * 0.42));
    const lh = fs + 3;
    const totalH = lines.length * lh;
    lines.forEach((line, i) => {
      const text = svg('text', {
        x: n.x,
        y: n.y - totalH / 2 + i * lh + lh * 0.75,
        'text-anchor': 'middle',
        'font-size': fs,
        'font-family': 'Outfit,sans-serif',
        'font-weight': 600,
        fill: 'white',
        style: 'pointer-events:none;user-select:none',
      });
      text.textContent = line;
      g.append(text);
    });

    a.append(g);
    root.append(a);
  });

  // center: Sishi Li
  root.append(svg('circle', { cx, cy, r: 58, fill: '#c6e0d7', opacity: 0.35 }));
  root.append(svg('circle', { cx, cy, r: 54, fill: '#a8ccbd', filter: 'url(#nodeShadow)' }));
  root.append(svg('circle', { cx, cy, r: 54, fill: 'none', stroke: 'white', 'stroke-width': 2.5, opacity: 0.55 }));
  const img = svg('image', {
    href: 'uploads/photo-1777390625965.jpg',
    x: cx - 50, y: cy - 50, width: 100, height: 100,
    'clip-path': 'url(#centerClip2)',
    preserveAspectRatio: 'xMidYMid slice',
  });
  // legacy attribute for older renderers
  img.setAttributeNS('http://www.w3.org/1999/xlink', 'xlink:href', 'uploads/photo-1777390625965.jpg');
  root.append(img);

  const centerLabel = svg('text', {
    x: cx, y: cy + 68, 'text-anchor': 'middle',
    'font-size': 11.5, 'font-family': 'Outfit,sans-serif',
    'font-weight': 700, fill: '#3d8a6c',
  });
  centerLabel.textContent = state.lang === 'en' ? 'Sishi Li' : '李思师';
  root.append(centerLabel);

  mount.append(root);
}

/* ─── Photo stack & lightbox ─── */

const PHOTO_CARDS = [
  { src: 3, zIndex: 1, restRot: -14, restX: -40, restY: 20, fanRot: -28, fanX: -185, fanY: 35 },
  { src: 2, zIndex: 2, restRot:  -6, restX: -16, restY:  9, fanRot: -12, fanX:  -72, fanY: 60 },
  { src: 1, zIndex: 3, restRot:   4, restX:  14, restY:  6, fanRot:  10, fanX:   72, fanY: 60 },
  { src: 0, zIndex: 4, restRot:   1, restX:   0, restY:  0, fanRot:  26, fanX:  185, fanY: 35 },
];

function renderPhotoStack() {
  const wrap = $('#photo-stack');
  wrap.innerHTML = '';

  PHOTO_CARDS.forEach(card => {
    const div = el('div', {
      class: 'photo-card',
      style: `z-index:${card.zIndex}; transform: rotate(${card.restRot}deg) translate(${card.restX}px, ${card.restY}px);`,
    }, el('img', { src: PHOTOS[card.src], alt: '' }));
    div.dataset.rest = `rotate(${card.restRot}deg) translate(${card.restX}px, ${card.restY}px)`;
    div.dataset.fan  = `rotate(${card.fanRot}deg) translate(${card.fanX}px, ${card.fanY}px)`;
    wrap.append(div);
  });

  wrap.append(el('div', { class: 'photo-stack-hint', 'data-bind': 'photoHint' }, T[state.lang].photoHint));

  const cards = $$('.photo-card', wrap);
  wrap.addEventListener('mouseenter', () => cards.forEach(c => c.style.transform = c.dataset.fan));
  wrap.addEventListener('mouseleave', () => cards.forEach(c => c.style.transform = c.dataset.rest));
  wrap.addEventListener('click', openLightbox);
}

function buildLightboxOnce() {
  const grid = $('#lightbox-grid');
  if (grid.childElementCount) return;
  PHOTOS.forEach(src => {
    grid.append(
      el('div', { class: 'lightbox-cell' },
        el('img', { src, alt: '' })
      )
    );
  });
}

function openLightbox() {
  buildLightboxOnce();
  const lb = $('#lightbox');
  lb.classList.add('open');
  document.body.style.overflow = 'hidden';
}
function closeLightbox() {
  $('#lightbox').classList.remove('open');
  document.body.style.overflow = '';
}

/* ─────── 6. INTERACTIONS ─────── */

function setupNavObservers() {
  const ids = ['hero', 'news', 'experience', 'projects', 'publications', 'contact'];
  const linkFor = id => $(`.nav-links a[data-nav="${id}"]`);

  const obs = new IntersectionObserver(entries => {
    entries.forEach(e => {
      if (!e.isIntersecting) return;
      $$('.nav-links a').forEach(a => a.classList.remove('active'));
      const link = linkFor(e.target.id);
      if (link) link.classList.add('active');
    });
  }, { rootMargin: '-40% 0px -55% 0px' });

  ids.forEach(id => { const node = document.getElementById(id); if (node) obs.observe(node); });
}

function setupFadeUp() {
  const obs = new IntersectionObserver(entries => {
    entries.forEach(e => { if (e.isIntersecting) e.target.classList.add('visible'); });
  }, { threshold: 0.1 });
  $$('.fade-up').forEach(node => obs.observe(node));
}

function setupLangToggle() {
  $$('.lang-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      const lang = btn.dataset.lang;
      if (lang === state.lang) return;
      state.lang = lang;
      $$('.lang-btn').forEach(b => b.classList.toggle('active', b.dataset.lang === lang));
      renderAll();
    });
  });
}

function setupLightbox() {
  $('#lightbox').addEventListener('click', e => { if (e.target.id === 'lightbox') closeLightbox(); });
  $('#lightbox-close').addEventListener('click', closeLightbox);
  document.addEventListener('keydown', e => { if (e.key === 'Escape') closeLightbox(); });
}

function setupContactForm() {
  const form    = $('#contact-form');
  const success = $('#cf-success');
  const errBox  = $('#cf-error');
  const submit  = $('.form-submit', form);

  form.addEventListener('submit', async (e) => {
    e.preventDefault();
    errBox.hidden = true;

    if (!form.reportValidity()) return;

    const showSuccess = () => {
      form.hidden = true;
      success.hidden = false;
    };

    if (!FORMSPREE_ENDPOINT) {
      // No endpoint configured — show local success state.
      showSuccess();
      return;
    }

    submit.disabled = true;
    const original  = submit.textContent;
    submit.textContent = '…';

    try {
      const data = new FormData(form);
      const res = await fetch(FORMSPREE_ENDPOINT, {
        method: 'POST',
        body: data,
        headers: { Accept: 'application/json' },
      });
      if (!res.ok) throw new Error('bad status ' + res.status);
      showSuccess();
    } catch (err) {
      errBox.textContent = T[state.lang].formError;
      errBox.hidden = false;
      submit.disabled = false;
      submit.textContent = original;
    }
  });
}

function setupIntroAnimation() {
  setTimeout(() => {
    const overlay = $('#intro-overlay');
    if (!overlay) return;
    overlay.classList.add('hide');
    setTimeout(() => { overlay.style.display = 'none'; }, 900);
  }, 2800);
}

/* ─────── 7. BOOT ─────── */

function renderAll() {
  renderStatic();
  renderNews();
  renderExpItems('#positions-list', POSITIONS[state.lang]);
  renderExpItems('#education-list', EDUCATION[state.lang]);
  renderProjects();
  renderPubFilters();
  renderPubs();
  renderConferences();
  renderNetwork();
  renderPhotoStack();
}

document.addEventListener('DOMContentLoaded', () => {
  renderAll();
  setupNavObservers();
  setupFadeUp();
  setupLangToggle();
  setupLightbox();
  setupContactForm();
  setupIntroAnimation();
});
