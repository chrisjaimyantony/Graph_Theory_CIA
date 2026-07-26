/* =============================================
   GROUP METADATA
   ============================================= */
const GROUPS = {
  college: { color:'#00d4ff', name:'College Friends' },
  work:    { color:'#5cb85c', name:'Work Colleagues' },
  family:  { color:'#ffd428', name:'Family' },
  gaming:  { color:'#9b59b6', name:'Gaming Circle' },
  neighbor:{ color:'#e8783c', name:'Neighbors' }
};

/* =============================================
   PEOPLE DATA
   ============================================= */
const PEOPLE = [
  // College (left side)
  { id:'bob',     name:'Bob',     group:'college', x:70,  y:200 },
  { id:'eve',     name:'Eve',     group:'college', x:185, y:180 },
  { id:'alice',   name:'Alice',   group:'college', x:120, y:270 },
  { id:'diana',   name:'Diana',   group:'college', x:55,  y:330 },
  { id:'charlie', name:'Charlie', group:'college', x:200, y:335 },

  // Work (right side)
  { id:'hugo',    name:'Hugo',    group:'work', x:580, y:180 },
  { id:'frank',   name:'Frank',   group:'work', x:685, y:200 },
  { id:'grace',   name:'Grace',   group:'work', x:740, y:270 },
  { id:'ivy',     name:'Ivy',     group:'work', x:615, y:330 },
  { id:'jack',    name:'Jack',    group:'work', x:700, y:345 },

  // Family (top center)
  { id:'mia',     name:'Mia',     group:'family', x:230, y:60  },
  { id:'kate',    name:'Kate',    group:'family', x:340, y:45  },
  { id:'noah',    name:'Noah',    group:'family', x:440, y:60  },
  { id:'liam',    name:'Liam',    group:'family', x:400, y:130 },
  { id:'olivia',  name:'Olivia',  group:'family', x:290, y:130 },

  // Gaming (bottom left)
  { id:'pete',    name:'Pete',    group:'gaming', x:65,  y:405 },
  { id:'tina',    name:'Tina',    group:'gaming', x:170, y:390 },
  { id:'quinn',   name:'Quinn',   group:'gaming', x:90,  y:475 },
  { id:'rosa',    name:'Rosa',    group:'gaming', x:45,  y:495 },
  { id:'sam',     name:'Sam',     group:'gaming', x:225, y:465 },

  // Neighbors (bottom right)
  { id:'uma',     name:'Uma',     group:'neighbor', x:560, y:405 },
  { id:'will',    name:'Will',    group:'neighbor', x:495, y:465 },
  { id:'vic',     name:'Vic',     group:'neighbor', x:635, y:435 },
  { id:'xena',    name:'Xena',    group:'neighbor', x:725, y:400 },
  { id:'yara',    name:'Yara',    group:'neighbor', x:665, y:500 }
];

const personMap = new Map(PEOPLE.map(p => [p.id, p]));
function initials(id) { return personMap.get(id).name[0]; }
function sub(n) { const s='₀₁₂₃₄₅₆₇₈₉'; return String(n).split('').map(d=>s[+d]).join(''); }

/* =============================================
   FRIENDSHIPS
   ============================================= */
const FRIENDSHIPS = [
  // College (8) — dense friend circle
  { from:'alice', to:'bob' }, { from:'alice', to:'charlie' },
  { from:'alice', to:'diana' }, { from:'alice', to:'eve' },
  { from:'bob', to:'charlie' }, { from:'bob', to:'eve' },
  { from:'charlie', to:'diana' }, { from:'diana', to:'eve' },

  // Work (7)
  { from:'frank', to:'grace' }, { from:'frank', to:'hugo' },
  { from:'frank', to:'ivy' }, { from:'grace', to:'hugo' },
  { from:'grace', to:'ivy' }, { from:'hugo', to:'jack' },
  { from:'ivy', to:'jack' },

  // Family (7)
  { from:'kate', to:'liam' }, { from:'kate', to:'mia' },
  { from:'kate', to:'noah' }, { from:'liam', to:'noah' },
  { from:'liam', to:'olivia' }, { from:'mia', to:'olivia' },
  { from:'noah', to:'olivia' },

  // Gaming (6)
  { from:'pete', to:'quinn' }, { from:'pete', to:'rosa' },
  { from:'quinn', to:'rosa' }, { from:'quinn', to:'tina' },
  { from:'rosa', to:'tina' }, { from:'sam', to:'tina' },

  // Neighbors (6)
  { from:'uma', to:'vic' }, { from:'uma', to:'will' },
  { from:'vic', to:'will' }, { from:'vic', to:'xena' },
  { from:'will', to:'yara' }, { from:'xena', to:'yara' },

  // Cross-group bridges (8)
  { from:'alice',   to:'kate' },   // college-family
  { from:'bob',     to:'pete' },   // college-gaming
  { from:'charlie', to:'frank' },  // college-work
  { from:'diana',   to:'uma' },    // college-neighbors
  { from:'eve',     to:'grace' },  // college-work
  { from:'ivy',     to:'olivia' }, // work-family
  { from:'jack',    to:'sam' },    // work-gaming
  { from:'liam',    to:'will' }    // family-neighbors
];

/* =============================================
   INTEREST GROUPS (BIPARTITE)
   ============================================= */
const INTERESTS = [
  { id:'music', name:'Music',      members:['alice','grace','kate','pete','quinn'] },
  { id:'sports', name:'Sports',    members:['bob','frank','liam','sam','uma'] },
  { id:'tech',   name:'Tech',      members:['charlie','hugo','ivy','quinn','tina'] },
  { id:'art',    name:'Art & Design', members:['diana','eve','mia','olivia','rosa'] },
  { id:'fitness', name:'Fitness',  members:['frank','jack','noah','uma','vic','xena'] }
];

/* =============================================
   BUILD GRAPH
   ============================================= */
const SVG_NS = 'http://www.w3.org/2000/svg';
const adj = new Map();
PEOPLE.forEach(p => adj.set(p.id, []));

FRIENDSHIPS.forEach(f => {
  adj.get(f.from).push(f.to);
  adj.get(f.to).push(f.from);
});

function isEdge(a, b) {
  return adj.get(a).includes(b);
}

function sameGroup(a, b) {
  return personMap.get(a).group === personMap.get(b).group;
}

function mutualFriends(a, b) {
  const setA = new Set(adj.get(a));
  return adj.get(b).filter(x => setA.has(x));
}

function getInitials(id) { return personMap.get(id).name.split(' ').map(w=>w[0]).join(''); }

/* =============================================
   DOM REFS
   ============================================= */
const svg = document.getElementById('networkMap');
const edgesG = document.getElementById('edgesG');
const pathG = document.getElementById('pathG');
const suggestG = document.getElementById('suggestG');
const nodesG = document.getElementById('nodesG');
const groupLabelsG = document.getElementById('groupLabelsG');
const legendG = document.getElementById('legendG');
const personASelect = document.getElementById('personA');
const personBSelect = document.getElementById('personB');
const findPathBtn = document.getElementById('findPathBtn');
const resetBtn = document.getElementById('resetBtn');
const randomBtn = document.getElementById('randomBtn');
const pathOutput = document.getElementById('pathOutput');
const profileOutput = document.getElementById('profileOutput');
const suggestOutput = document.getElementById('suggestOutput');
const pathCard = document.getElementById('pathCard');
const profileCard = document.getElementById('profileCard');
const suggestCard = document.getElementById('suggestCard');
const stationInfo = document.getElementById('stationInfo');
const propsGrid = document.getElementById('propsGrid');
const detectedProps = document.getElementById('detectedProps');
const graphTypesList = document.getElementById('graphTypesList');

let selectedPerson = null;

/* =============================================
   RENDER MAP
   ============================================= */
function renderMap() {
  // Group labels
  const groupCenters = {};
  Object.keys(GROUPS).forEach(g => {
    const members = PEOPLE.filter(p => p.group === g);
    const cx = members.reduce((s,p) => s+p.x, 0) / members.length;
    const cy = members.reduce((s,p) => s+p.y, 0) / members.length;
    groupCenters[g] = { x: cx, y: cy - 45 };
    const t = document.createElementNS(SVG_NS, 'text');
    t.setAttribute('x', cx); t.setAttribute('y', cy - 45);
    t.setAttribute('text-anchor', 'middle');
    t.classList.add('group-label');
    t.setAttribute('fill', GROUPS[g].color);
    t.setAttribute('opacity', '0.4');
    t.textContent = GROUPS[g].name;
    groupLabelsG.appendChild(t);
  });

  // Edges
  // Edges — clearly visible
  FRIENDSHIPS.forEach(f => {
    const a = personMap.get(f.from), b = personMap.get(f.to);
    const sg = sameGroup(f.from, f.to);
    const color = sg ? GROUPS[a.group].color : 'rgba(0,212,255,0.6)';

    const line = document.createElementNS(SVG_NS, 'line');
    line.setAttribute('x1', a.x); line.setAttribute('y1', a.y);
    line.setAttribute('x2', b.x); line.setAttribute('y2', b.y);
    line.setAttribute('stroke', color);
    line.setAttribute('stroke-width', sg ? '2' : '1.5');
    line.classList.add('social-edge');
    line.classList.add(sg ? 'same-group' : 'cross-group');
    line.dataset.from = f.from; line.dataset.to = f.to;
    edgesG.appendChild(line);
  });

  // Nodes
    // Nodes — with smart label positioning
  PEOPLE.forEach(p => {
    const g = document.createElementNS(SVG_NS, 'g');
    g.classList.add('social-node'); g.dataset.id = p.id;

    const c = document.createElementNS(SVG_NS, 'circle');
    c.setAttribute('cx', p.x); c.setAttribute('cy', p.y);
    c.setAttribute('r', '11');
    c.setAttribute('fill', GROUPS[p.group].color);
    c.setAttribute('fill-opacity', '0.25');
    c.setAttribute('stroke', GROUPS[p.group].color);
    c.setAttribute('stroke-width', '1.5');
    c.classList.add('person-circle');

    const t = document.createElementNS(SVG_NS, 'text');
    t.setAttribute('x', p.x); t.setAttribute('y', p.y);
    t.setAttribute('text-anchor', 'middle');
    t.setAttribute('dominant-baseline', 'central');
    t.setAttribute('fill', GROUPS[p.group].color);
    t.classList.add('person-initials');
    t.setAttribute('font-size', '9');
    t.textContent = getInitials(p.id);

    // Label: below if in top half, above if in bottom half
    const lbl = document.createElementNS(SVG_NS, 'text');
    lbl.setAttribute('x', p.x);
    const labelBelow = p.y < 280;
    lbl.setAttribute('y', labelBelow ? p.y + 20 : p.y - 16);
    lbl.setAttribute('text-anchor', 'middle');
    lbl.classList.add('person-name-label');
    lbl.textContent = p.name;

    g.appendChild(c); g.appendChild(t); g.appendChild(lbl);
    nodesG.appendChild(g);

    g.addEventListener('mouseenter', () => showProfile(p));
    g.addEventListener('mouseleave', () => hideProfile());
    g.addEventListener('click', () => selectPerson(p.id));
  });

  // Legend
  const keys = Object.keys(GROUPS);
  keys.forEach((key, i) => {
    const x = i * 155;
    const dot = document.createElementNS(SVG_NS, 'circle');
    dot.setAttribute('cx', x + 5); dot.setAttribute('cy', 5);
    dot.setAttribute('r', '4');
    dot.setAttribute('fill', GROUPS[key].color);
    dot.setAttribute('fill-opacity', '0.3');
    dot.setAttribute('stroke', GROUPS[key].color);
    dot.setAttribute('stroke-width', '1');
    legendG.appendChild(dot);

    const txt = document.createElementNS(SVG_NS, 'text');
    txt.setAttribute('x', x + 16); txt.setAttribute('y', 8);
    txt.setAttribute('font-family', 'JetBrains Mono, monospace');
    txt.setAttribute('font-size', '8');
    txt.setAttribute('fill', '#2e4a6a');
    txt.setAttribute('letter-spacing', '0.5');
    txt.textContent = GROUPS[key].name;
    legendG.appendChild(txt);
  });
}

/* =============================================
   POPULATE SELECTS
   ============================================= */
function populateSelects() {
  const sorted = [...PEOPLE].sort((a,b) => a.name.localeCompare(b.name));
  sorted.forEach(p => {
    personASelect.appendChild(new Option(p.name, p.id));
    personBSelect.appendChild(new Option(p.name, p.id));
  });
}

/* =============================================
   PERSON INTERACTION
   ============================================= */
function selectPerson(id) {
  if (!personASelect.value) { personASelect.value = id; highlightNode(id); }
  else if (!personBSelect.value && personASelect.value !== id) { personBSelect.value = id; }
  else { personASelect.value = id; personBSelect.value = ''; clearHighlights(); highlightNode(id); }
}

function highlightNode(id) {
  const deg = new Set(adj.get(id));
  deg.add(id);
  nodesG.querySelectorAll('.social-node').forEach(n => {
    n.classList.toggle('dim', !deg.has(n.dataset.id));
    n.classList.toggle('highlighted', n.dataset.id === id);
  });
  edgesG.querySelectorAll('.social-edge').forEach(e => {
    const connected = e.dataset.from === id || e.dataset.to === id;
    e.classList.toggle('dim', !connected);
    e.classList.toggle('highlight', connected);
  });
  showSuggestions(id);
}

function clearHighlights() {
  nodesG.querySelectorAll('.social-node').forEach(n => {
    n.classList.remove('dim', 'highlighted');
  });
  edgesG.querySelectorAll('.social-edge').forEach(e => {
    e.classList.remove('dim', 'highlight');
  });
  suggestG.innerHTML = '';
  suggestCard.style.display = 'none';
}

/* =============================================
   PROFILE PANEL
   ============================================= */
function showProfile(p) {
  const friends = adj.get(p.id);
  const interests = INTERESTS.filter(i => i.members.includes(p.id));
  const color = GROUPS[p.group].color;

  const friendsHTML = friends.map(fid => {
    const fp = personMap.get(fid);
    const fc = GROUPS[fp.group].color;
    return `<span class="friend-chip" style="color:${fc};border-color:${fc}30;background:${fc}08;" onclick="selectPerson('${fid}')">${fp.name}</span>`;
  }).join('');

  const interestsHTML = interests.map(i => i.name).join(', ') || 'None listed';

  profileCard.style.display = 'block';
  profileOutput.innerHTML = `
    <div class="profile-header">
      <div class="profile-avatar" style="background:${color}20;border-color:${color};color:${color};">${getInitials(p.id)}</div>
      <div>
        <div class="profile-name">${p.name}</div>
        <div class="profile-group" style="color:${color};">${GROUPS[p.group].name}</div>
      </div>
    </div>
    <div class="profile-stats">
      <div class="profile-stat"><span class="ps-val">${friends.length}</span><span class="ps-lbl">Friends</span></div>
      <div class="profile-stat"><span class="ps-val">${interests.length}</span><span class="ps-lbl">Interests</span></div>
    </div>
    <div style="font-size:9px;color:var(--text-muted);letter-spacing:1px;margin-bottom:4px;">INTERESTS: <span style="color:var(--text-secondary);">${interestsHTML}</span></div>
    <div style="font-size:9px;color:var(--text-muted);letter-spacing:1px;margin-bottom:6px;">FRIENDS</div>
    <div class="profile-friends">${friendsHTML}</div>
  `;
}

function hideProfile() {
  if (!selectedPerson) {
    profileCard.style.display = 'none';
  }
}

/* =============================================
   SUGGESTIONS — PEOPLE YOU MAY KNOW
   ============================================= */
function showSuggestions(id) {
  const directFriends = new Set(adj.get(id));
  const candidates = new Map(); // personId -> mutual count

  adj.get(id).forEach(friend => {
    adj.get(friend).forEach(ff => {
      if (ff !== id && !directFriends.has(ff)) {
        candidates.set(ff, (candidates.get(ff) || 0) + 1);
      }
    });
  });

  if (candidates.size === 0) {
    suggestCard.style.display = 'none';
    return;
  }

  const sorted = [...candidates.entries()].sort((a, b) => b[1] - a[1]).slice(0, 5);

  suggestCard.style.display = 'block';
  suggestOutput.innerHTML = sorted.map(([pid, count]) => {
    const p = personMap.get(pid);
    const color = GROUPS[p.group].color;
    return `
      <div class="suggest-item" onclick="selectPerson('${pid}')">
        <div class="suggest-avatar" style="background:${color};">${getInitials(pid)}</div>
        <div class="suggest-info">
          <div class="suggest-name">${p.name}</div>
          <div class="suggest-reason">${count} mutual friend${count > 1 ? 's' : ''} · ${GROUPS[p.group].name}</div>
        </div>
      </div>
    `;
  }).join('');

  // Draw suggestion rings on map
  suggestG.innerHTML = '';
  sorted.forEach(([pid]) => {
    const p = personMap.get(pid);
    const ring = document.createElementNS(SVG_NS, 'circle');
    ring.setAttribute('cx', p.x); ring.setAttribute('cy', p.y);
    ring.setAttribute('r', '20');
    ring.classList.add('suggest-ring', 'show');
    suggestG.appendChild(ring);
  });
}

/* =============================================
   BFS — SHORTEST SOCIAL PATH
   ============================================= */
function bfs(src, dst) {
  const visited = new Set([src]);
  const prev = new Map();
  const queue = [src];

  while (queue.length) {
    const cur = queue.shift();
    if (cur === dst) break;
    adj.get(cur).forEach(nb => {
      if (!visited.has(nb)) {
        visited.add(nb);
        prev.set(nb, cur);
        queue.push(nb);
      }
    });
  }

  if (!visited.has(dst)) return null;
  const path = [];
  let cur = dst;
  while (cur !== undefined) { path.unshift(cur); cur = prev.get(cur); }
  return path;
}

/* =============================================
   FIND PATH
   ============================================= */
function findPath() {
  const src = personASelect.value, dst = personBSelect.value;
  if (!src || !dst) return;
  if (src === dst) return;

  clearPath();
  const path = bfs(src, dst);
  if (!path) return;

  drawPath(path);
  showPathStats(path);
}

function clearPath() {
  pathG.innerHTML = '';
  suggestG.innerHTML = '';
  edgesG.querySelectorAll('.highlight, .dim').forEach(el => el.classList.remove('highlight', 'dim'));
  nodesG.querySelectorAll('.dim, .highlighted').forEach(el => el.classList.remove('dim', 'highlighted'));
  pathCard.style.display = 'none';
  suggestCard.style.display = 'none';
}

/* =============================================
   DRAW PATH ON MAP
   ============================================= */
function drawPath(path) {
  // Dim everything
  nodesG.querySelectorAll('.social-node').forEach(n => n.classList.add('dim'));
  edgesG.querySelectorAll('.social-edge').forEach(e => e.classList.add('dim'));

  // Highlight path nodes
  path.forEach(pid => {
    nodesG.querySelector(`[data-id="${pid}"]`).classList.remove('dim');
    nodesG.querySelector(`[data-id="${pid}"]`).classList.add('highlighted');
  });

  // Draw path edges
  for (let i = 0; i < path.length - 1; i++) {
    const a = personMap.get(path[i]), b = personMap.get(path[i+1]);

    const glow = document.createElementNS(SVG_NS, 'line');
    glow.setAttribute('x1', a.x); glow.setAttribute('y1', a.y);
    glow.setAttribute('x2', b.x); glow.setAttribute('y2', b.y);
    glow.setAttribute('stroke', '#00d4ff');
    glow.classList.add('path-glow-line');
    glow.style.animationDelay = (i * 0.1) + 's';
    pathG.appendChild(glow);

    const line = document.createElementNS(SVG_NS, 'line');
    line.setAttribute('x1', a.x); line.setAttribute('y1', a.y);
    line.setAttribute('x2', b.x); line.setAttribute('y2', b.y);
    line.setAttribute('stroke', '#00d4ff');
    line.classList.add('path-main-line');
    line.style.opacity = '0'; line.style.transition = `opacity .4s ${i*0.08}s`;
    pathG.appendChild(line);
    requestAnimationFrame(() => { line.style.opacity = '1'; });

    // Highlight the edge in the main layer too
    edgesG.querySelectorAll('.social-edge').forEach(e => {
      if ((e.dataset.from===path[i]&&e.dataset.to===path[i+1])||(e.dataset.from===path[i+1]&&e.dataset.to===path[i])) {
        e.classList.remove('dim'); e.classList.add('highlight');
      }
    });
  }

  // Ring on path nodes
  path.forEach((pid, i) => {
    const p = personMap.get(pid);
    const ring = document.createElementNS(SVG_NS, 'circle');
    ring.setAttribute('cx', p.x); ring.setAttribute('cy', p.y);
    ring.setAttribute('r', '18'); ring.setAttribute('fill', 'none');
    ring.setAttribute('stroke', '#00d4ff'); ring.setAttribute('stroke-width', '1.5');
    ring.classList.add('path-node-ring');
    ring.style.opacity = '0'; ring.style.transition = `opacity .3s ${i*0.06}s`;
    pathG.appendChild(ring);
    requestAnimationFrame(() => { ring.style.opacity = '0.5'; });
  });
}

/* =============================================
   PATH STATISTICS
   ============================================= */
function showPathStats(path) {
  const degrees = path.length - 1;
  const mutual = mutualFriends(path[0], path[path.length - 1]);

  // Common interests
  const interestsA = new Set(INTERESTS.filter(i => i.members.includes(path[0])).map(i => i.id));
  const commonInterests = INTERESTS.filter(i => interestsA.has(i.id) && i.members.includes(path[path.length-1]));

  let stepsHTML = path.map((pid, i) => {
    const p = personMap.get(pid);
    const color = GROUPS[p.group].color;
    const isFirst = i === 0, isLast = i === path.length - 1;
    const connector = !isLast ? `<div class="step-connector" style="background:${color}40;"></div>` : '';

    let detail = '';
    if (isFirst) detail = 'START';
    else if (isLast) detail = 'TARGET';

    return `
      <div class="step">
        <div class="step-dot" style="border-color:${color};background:${isFirst||isLast?color:'transparent'}"></div>
        <div class="step-info">
          <div class="step-name">${p.name}</div>
          ${detail ? `<div class="step-detail">${detail}</div>` : ''}
        </div>
      </div>
      ${connector}
    `;
  }).join('');

  const mutualHTML = mutual.length
    ? mutual.map(mid => `<span class="friend-chip" style="color:var(--accent);border-color:rgba(0,212,255,0.2);background:rgba(0,212,255,0.04);">${personMap.get(mid).name}</span>`).join(' ')
    : '<span style="font-size:10px;color:var(--text-muted);">No mutual friends</span>';

  const interestHTML = commonInterests.length
    ? commonInterests.map(i => i.name).join(', ')
    : 'None';

  pathCard.style.display = 'block';
  pathOutput.innerHTML = `
    <div class="path-summary">
      <div class="path-stat"><span class="p-val">${degrees}</span><span class="p-lbl">Degrees</span></div>
      <div class="path-stat"><span class="p-val">${mutual.length}</span><span class="p-lbl">Mutual Friends</span></div>
      <div class="path-stat"><span class="p-val">${path.length}</span><span class="p-lbl">People</span></div>
      <div class="path-stat"><span class="p-val">${commonInterests.length}</span><span class="p-lbl">Common Interests</span></div>
    </div>
    <div style="font-size:9px;color:var(--text-muted);letter-spacing:1px;margin-bottom:4px;">MUTUAL FRIENDS</div>
    <div style="display:flex;flex-wrap:wrap;gap:4px;margin-bottom:10px;">${mutualHTML}</div>
    <div style="font-size:9px;color:var(--text-muted);letter-spacing:1px;margin-bottom:4px;">COMMON INTERESTS: <span style="color:var(--text-secondary);">${interestHTML}</span></div>
    <div style="font-size:9px;color:var(--text-muted);letter-spacing:1px;margin:10px 0 4px;">PATH</div>
    <div class="path-steps">${stepsHTML}</div>
  `;
}

/* =============================================
   NETWORK PROPERTIES
   ============================================= */
function updateNetworkProps() {
  const V = PEOPLE.length, E = FRIENDSHIPS.length;
  const avgDeg = (E * 2 / V).toFixed(1);
  const maxDeg = Math.max(...PEOPLE.map(p => adj.get(p.id).length));
  const busiest = PEOPLE.filter(p => adj.get(p.id).length === maxDeg).map(p => p.name).join(', ');

  // Count inter-group edges
  const crossEdges = FRIENDSHIPS.filter(f => !sameGroup(f.from, f.to)).length;

  propsGrid.innerHTML = `
    <div class="mini-prop"><span class="mini-val">${V}</span><span class="mini-lbl">People</span></div>
    <div class="mini-prop"><span class="mini-val">${E}</span><span class="mini-lbl">Connections</span></div>
    <div class="mini-prop"><span class="mini-val">${avgDeg}</span><span class="mini-lbl">Avg Friends</span></div>
    <div class="mini-prop"><span class="mini-val">${crossEdges}</span><span class="mini-lbl">Cross-Group</span></div>
  `;

  const props = [
    'Connected', 'Weighted', `Max Degree ${maxDeg}`,
    `5 Groups`, `${V} People`, `${E} Edges`
  ];
  detectedProps.innerHTML = props.map(p => `<span class="prop-tag">${p}</span>`).join('');

  updateGraphTypes(V, E, avgDeg, maxDeg, crossEdges, busiest);
}

/* =============================================
   GRAPH TYPES DEMONSTRATED
   ============================================= */
function updateGraphTypes(V, E, avgDeg, maxDeg, crossEdges, busiest) {
  const types = [
    { name:'Connected', explain:'Every person can reach every other person through friendship chains. The network forms a single connected component.' },
    { name:'Weighted', explain:'Each edge can represent connection strength (close friend vs acquaintance). Pathfinding can prioritize stronger bonds.' },
    { name:'Undirected', explain:'Friendships are mutual — if Alice is friends with Bob, Bob is friends with Alice. Edge (A,B) = Edge (B,A).' },
    { name:'Cyclic', explain:'Friend circles exist — e.g., Alice→Bob→Charlie→Alice forms a cycle of length 3 within the college group.' },
    { name:'Acyclic Subgraph', explain:'The BFS tree from any person is acyclic — it shows the shortest friendship chain without any loops.' },
    { name:'Path Graph', explain:'The shortest social path between two people (shown above when you find a connection) forms a path graph Pₙ.' },
    { name:'Complete Subgraph', explain:'Tight friend groups are near-complete — the college group has 8 edges among 5 people (K₅ has 10). These are cliques.' },
    { name:'Bipartite', explain:'People ↔ Interest Groups form a bipartite graph. Each person connects to their interests, never to other interests directly.' },
    { name:'Tree Structure', explain:'A BFS/DFS traversal from any node creates a tree — connected and acyclic, showing how information spreads.' },
    { name:'Regular (approx)', explain:'Most people have ~3-4 friends, making the network approximately regular. Degree variance is low.' },
    { name:'Planar (groups)', explain:'Each individual friend group can be drawn without edge crossings. The full network with cross-edges is non-planar.' },
    { name:'Non-Planar', explain:'With 25 vertices and 42 edges, the full network exceeds E ≤ 3V−6 = 69, and dense subgraphs create unavoidable crossings.' },
    { name:'Finite', explain:'The network has exactly 25 people and 42 connections — both are countable and limited.' },
    { name:'Simple Graph', explain:'No self-loops (you can\'t befriend yourself) and at most one edge between any pair (single friendship).' },
    { name:'Multi-Graph Potential', explain:'If we add multiple relationship types (friend, colleague, family), parallel edges between the same pair would form a multi-graph.' },
    { name:'Directed Potential', explain:'If we model "follows" (A follows B, B may not follow A), the undirected graph becomes a directed graph (digraph).' },
    { name:'Hub Nodes', explain:`${busiest} (degree ${maxDeg}) acts as a hub — a highly connected person who bridges different social circles.` },
    { name:'Cut Vertices', explain:'Bridge people (e.g., Alice connecting college to family) are cut vertices — removing them would disconnect parts of the network.' },
    { name:'Clustering', explain:'Friend groups show high clustering — people within a group are densely connected, while cross-group links are sparse.' },
    { name:'Small World', explain:'Despite 25 people, the average distance between any two is ~3 hops — demonstrating the "six degrees of separation" principle.' }
  ];

  graphTypesList.innerHTML = types.map(t => `
    <div class="gt-item">
      <span class="gt-name">${t.name}</span>
      <span class="gt-explain">${t.explain}</span>
    </div>
  `).join('');
}

/* =============================================
   EVENTS
   ============================================= */
findPathBtn.addEventListener('click', findPath);
resetBtn.addEventListener('click', () => {
  personASelect.value = ''; personBSelect.value = '';
  clearPath(); clearHighlights();
  profileCard.style.display = 'none';
});
randomBtn.addEventListener('click', () => {
  const ids = PEOPLE.map(p => p.id);
  const a = ids[Math.floor(Math.random()*ids.length)];
  let b = a; while(b===a) b = ids[Math.floor(Math.random()*ids.length)];
  personASelect.value = a; personBSelect.value = b;
  findPath();
});

document.addEventListener('keydown', e => {
  if (e.target.tagName==='SELECT'||e.target.tagName==='INPUT') return;
  if (e.key==='Enter') findPath();
  if (e.key==='r'||e.key==='R') { personASelect.value=''; personBSelect.value=''; clearPath(); clearHighlights(); }
});

/* =============================================
   INIT
   ============================================= */
function init() {
  renderMap();
  populateSelects();
  updateNetworkProps();
}

document.addEventListener('DOMContentLoaded', init);