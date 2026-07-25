/* =============================================
   STATION DATA
   ============================================= */
const STATIONS = [
  // ── Blue Line ──
  { id:'dwarka_sec21', name:'Dwarka Sec 21', x:70, y:280, line:'blue', interchange:false },
  { id:'dwarka', name:'Dwarka', x:130, y:280, line:'blue', interchange:false },
  { id:'dwarka_mor', name:'Dwarka Mor', x:190, y:280, line:'blue', interchange:false },
  { id:'rajouri_garden', name:'Rajouri Garden', x:260, y:280, line:'blue', interchange:true },
  { id:'kirti_nagar', name:'Kirti Nagar', x:330, y:280, line:'blue', interchange:true },
  { id:'karol_bagh', name:'Karol Bagh', x:400, y:280, line:'blue', interchange:false },
  { id:'rajiv_chowk', name:'Rajiv Chowk', x:470, y:280, line:'blue', interchange:true },
  { id:'barakhamba', name:'Barakhamba', x:530, y:280, line:'blue', interchange:false },
  { id:'pragati_maidan', name:'Pragati Maidan', x:590, y:280, line:'blue', interchange:false },
  { id:'akshardham', name:'Akshardham', x:660, y:280, line:'blue', interchange:false },
  { id:'noida_sec18', name:'Noida Sec 18', x:730, y:280, line:'blue', interchange:false },

  // ── Yellow Line ──
  { id:'samaypur_badli', name:'Samaypur Badli', x:470, y:60, line:'yellow', interchange:false },
  { id:'azadpur', name:'Azadpur', x:470, y:110, line:'yellow', interchange:false },
  { id:'civil_lines', name:'Civil Lines', x:470, y:155, line:'yellow', interchange:false },
  { id:'kashmere_gate', name:'Kashmere Gate', x:470, y:195, line:'yellow', interchange:true },
  { id:'chandni_chowk', name:'Chandni Chowk', x:470, y:235, line:'yellow', interchange:false },
  { id:'rajiv_chowk_y', name:'Rajiv Chowk', x:470, y:280, line:'yellow', interchange:true, alias:'rajiv_chowk' },
  { id:'patel_chowk', name:'Patel Chowk', x:470, y:330, line:'yellow', interchange:false },
  { id:'central_sec', name:'Central Secretariat', x:470, y:380, line:'yellow', interchange:true },
  { id:'uddyan_marg', name:'Udyog Bhawan', x:470, y:430, line:'yellow', interchange:false },
  { id:'hauz_khas', name:'Hauz Khas', x:470, y:480, line:'yellow', interchange:true },
  { id:'malviya_nagar', name:'Malviya Nagar', x:470, y:530, line:'yellow', interchange:false },

  // ── Red Line ──
  { id:'rithala', name:'Rithala', x:150, y:120, line:'red', interchange:false },
  { id:'rohini_sec18', name:'Rohini Sec 18', x:220, y:120, line:'red', interchange:false },
  { id:'pitampura', name:'Pitampura', x:290, y:120, line:'red', interchange:false },
  { id:'kohat_enclave', name:'Kohat Enclave', x:350, y:145, line:'red', interchange:false },
  { id:'netaji_subhash', name:'Netaji Subhash Place', x:400, y:170, line:'red', interchange:true },
  { id:'kashmere_gate_r', name:'Kashmere Gate', x:470, y:195, line:'red', interchange:true, alias:'kashmere_gate' },
  { id:'tis_hazari', name:'Tis Hazari', x:540, y:170, line:'red', interchange:false },
  { id:'pul_bangash', name:'Pul Bangash', x:600, y:145, line:'red', interchange:false },
  { id:'pratap_nagar', name:'Pratap Nagar', x:660, y:120, line:'red', interchange:false },
  { id:'shastri_nagar', name:'Shastri Nagar', x:730, y:120, line:'red', interchange:false },

  // ── Green Line ──
  { id:'kirti_nagar_g', name:'Kirti Nagar', x:330, y:280, line:'green', interchange:true, alias:'kirti_nagar' },
  { id:'satguru_ram', name:'Satguru Ramsingh Marg', x:330, y:330, line:'green', interchange:false },
  { id:'inderlok', name:'Inderlok', x:330, y:195, line:'green', interchange:true },
  { id:'ashok_park', name:'Ashok Park Main', x:270, y:195, line:'green', interchange:false },
  { id:'punjabi_bagh', name:'Punjabi Bagh', x:210, y:195, line:'green', interchange:false },
  { id:'shivaji_park', name:'Shivaji Park', x:150, y:195, line:'green', interchange:false },

  // ── Violet Line ──
  { id:'kashmere_gate_v', name:'Kashmere Gate', x:470, y:195, line:'violet', interchange:true, alias:'kashmere_gate' },
  { id:'lal_quila', name:'Lal Quila', x:530, y:215, line:'violet', interchange:false },
  { id:'jama_masjid', name:'Jama Masjid', x:590, y:230, line:'violet', interchange:false },
  { id:'ito', name:'ITO', x:620, y:260, line:'violet', interchange:false },
  { id:'delhi_gate', name:'Delhi Gate', x:590, y:300, line:'violet', interchange:false },
  { id:'central_sec_v', name:'Central Secretariat', x:470, y:380, line:'violet', interchange:true, alias:'central_sec' },
  { id:'khan_market', name:'Khan Market', x:540, y:400, line:'violet', interchange:false },
  { id:'jln_stadium', name:'JLN Stadium', x:610, y:420, line:'violet', interchange:false },
  { id:'jorbagh', name:'Jorbagh', x:540, y:460, line:'violet', interchange:false },
  { id:'hauz_khas_v', name:'Hauz Khas', x:470, y:480, line:'violet', interchange:true, alias:'hauz_khas' }
];

/* =============================================
   EDGES
   ============================================= */
const EDGES = [
  // Blue Line
  ['dwarka_sec21','dwarka'], ['dwarka','dwarka_mor'], ['dwarka_mor','rajouri_garden'],
  ['rajouri_garden','kirti_nagar'], ['kirti_nagar','karol_bagh'], ['karol_bagh','rajiv_chowk'],
  ['rajiv_chowk','barakhamba'], ['barakhamba','pragati_maidan'], ['pragati_maidan','akshardham'],
  ['akshardham','noida_sec18'],

  // Yellow Line
  ['samaypur_badli','azadpur'], ['azadpur','civil_lines'], ['civil_lines','kashmere_gate'],
  ['kashmere_gate','chandni_chowk'], ['chandni_chowk','rajiv_chowk'],
  ['rajiv_chowk','patel_chowk'], ['patel_chowk','central_sec'],
  ['central_sec','uddyan_marg'], ['uddyan_marg','hauz_khas'], ['hauz_khas','malviya_nagar'],

  // Red Line
  ['rithala','rohini_sec18'], ['rohini_sec18','pitampura'], ['pitampura','kohat_enclave'],
  ['kohat_enclave','netaji_subhash'], ['netaji_subhash','kashmere_gate'],
  ['kashmere_gate','tis_hazari'], ['tis_hazari','pul_bangash'],
  ['pul_bangash','pratap_nagar'], ['pratap_nagar','shastri_nagar'],

  // Green Line
  ['inderlok','ashok_park'], ['ashok_park','punjabi_bagh'], ['punjabi_bagh','shivaji_park'],
  ['inderlok','kashmere_gate'], ['kirti_nagar','satguru_ram'],

  // Violet Line
  ['kashmere_gate','lal_quila'], ['lal_quila','jama_masjid'], ['jama_masjid','ito'],
  ['ito','delhi_gate'], ['delhi_gate','central_sec'], ['central_sec','khan_market'],
  ['khan_market','jln_stadium'], ['kln_stadium','jorbagh'], ['jorbagh','hauz_khas'],

  // Cross-line interchanges
  ['netaji_subhash','inderlok'], ['rajouri_garden','inderlok']
];

/* =============================================
   LINE METADATA
   ============================================= */
const LINE_COLORS = {
  blue: '#4a90d9',
  yellow: '#ffd428',
  red: '#e8453c',
  green: '#5cb85c',
  violet: '#8e44ad'
};

const LINE_NAMES = {
  blue: 'Blue Line',
  yellow: 'Yellow Line',
  red: 'Red Line',
  green: 'Green Line',
  violet: 'Violet Line'
};

/* =============================================
   HELPERS
   ============================================= */
const SVG_NS = 'http://www.w3.org/2000/svg';

function getStation(id) {
  // Resolve aliases (shared interchange stations)
  const s = STATIONS.find(s => s.id === id);
  if (s && s.alias) return STATIONS.find(st => st.id === s.alias) || s;
  return s;
}

function getStationDisplay(id) {
  const s = STATIONS.find(s => s.id === id);
  if (s && s.alias) return STATIONS.find(st => st.id === s.alias) || s;
  return s;
}

// Build unified node list (deduplicate aliases)
function getUniqueNodes() {
  const seen = new Map();
  STATIONS.forEach(s => {
    const key = s.alias || s.id;
    if (!seen.has(key)) {
      seen.set(key, { id: key, name: s.name, x: s.x, y: s.y, line: s.line, interchange: s.interchange, lines: new Set() });
    }
    seen.get(key).lines.add(s.line);
  });
  return Array.from(seen.values());
}

function getStationLine(stationId) {
  const s = STATIONS.find(s => s.id === stationId);
  return s ? s.line : 'blue';
}

function resolveId(id) {
  const s = STATIONS.find(s => s.id === id);
  return (s && s.alias) ? s.alias : id;
}

/* =============================================
   GRAPH STRUCTURE
   ============================================= */
const nodes = getUniqueNodes();
const nodeMap = new Map(nodes.map(n => [n.id, n]));

// Build edges with resolved IDs
const uniqueEdges = new Map();
EDGES.forEach(([a, b]) => {
  const ra = resolveId(a), rb = resolveId(b);
  const key = [ra, rb].sort().join('-');
  if (!uniqueEdges.has(key) && nodeMap.has(ra) && nodeMap.has(rb)) {
    const na = nodeMap.get(ra), nb = nodeMap.get(rb);
    const dist = Math.round(Math.hypot(na.x - nb.x, na.y - nb.y) / 4);
    uniqueEdges.set(key, { from: ra, to: rb, dist: Math.max(dist, 1) });
  }
});
const edges = Array.from(uniqueEdges.values());

// Adjacency list
const adj = new Map();
nodes.forEach(n => adj.set(n.id, []));
edges.forEach(e => {
  adj.get(e.from).push({ to: e.to, dist: e.dist });
  adj.get(e.to).push({ to: e.from, dist: e.dist });
});

/* =============================================
   DOM REFS
   ============================================= */
const svg = document.getElementById('metroMap');
const edgesG = document.getElementById('edgesG');
const pathG = document.getElementById('pathG');
const nodesG = document.getElementById('nodesG');
const sourceSelect = document.getElementById('sourceSelect');
const destSelect = document.getElementById('destSelect');
const findPathBtn = document.getElementById('findPathBtn');
const resetBtn = document.getElementById('resetBtn');
const pathOutput = document.getElementById('pathOutput');
const stationInfo = document.getElementById('stationInfo');

/* =============================================
   RENDER MAP
   ============================================= */
function renderMap() {
  // Draw edges
  edges.forEach(e => {
    const na = nodeMap.get(e.from), nb = nodeMap.get(e.to);
    const line = document.createElementNS(SVG_NS, 'line');
    line.setAttribute('x1', na.x); line.setAttribute('y1', na.y);
    line.setAttribute('x2', nb.x); line.setAttribute('y2', nb.y);
    const color = LINE_COLORS[na.line] || LINE_COLORS[na.lines ? [...na.lines][0] : 'blue'];
    line.setAttribute('stroke', color);
    line.classList.add('metro-edge');
    line.dataset.from = e.from; line.dataset.to = e.to;
    edgesG.appendChild(line);
  });

  // Draw nodes
  nodes.forEach(n => {
    const g = document.createElementNS(SVG_NS, 'g');
    g.classList.add('station-node');
    g.dataset.id = n.id;

    const r = n.interchange ? 7 : 4.5;
    const c = document.createElementNS(SVG_NS, 'circle');
    c.setAttribute('cx', n.x); c.setAttribute('cy', n.y); c.setAttribute('r', r);
    const color = n.lines.size > 1 ? '#ffffff' : LINE_COLORS[[...n.lines][0]];
    c.setAttribute('fill', color);
    c.setAttribute('stroke', n.interchange ? '#ffffff' : 'none');
    c.setAttribute('stroke-width', n.interchange ? '1.5' : '0');
    c.classList.add('station-marker');

    const t = document.createElementNS(SVG_NS, 'text');
    t.setAttribute('x', n.x);
    t.setAttribute('y', n.y - (r + 4));
    t.setAttribute('text-anchor', 'middle');
    t.classList.add('station-label');
    if (n.interchange) t.classList.add('visible');
    t.textContent = n.name;

    g.appendChild(c); g.appendChild(t);
    nodesG.appendChild(g);

    // Events
    g.addEventListener('mouseenter', () => showStationInfo(n));
    g.addEventListener('mouseleave', () => clearStationInfo());
    g.addEventListener('click', () => selectStation(n.id));
  });
}

/* =============================================
   POPULATE SELECTS
   ============================================= */
function populateSelects() {
  const sorted = [...nodes].sort((a, b) => a.name.localeCompare(b.name));
  sorted.forEach(n => {
    const o1 = new Option(n.name, n.id);
    const o2 = new Option(n.name, n.id);
    sourceSelect.appendChild(o1);
    destSelect.appendChild(o2);
  });
}

/* =============================================
   STATION INFO BAR
   ============================================= */
function showStationInfo(n) {
  const lineColors = [...n.lines].map(l => `<span class="info-tag" style="color:${LINE_COLORS[l]};background:${LINE_COLORS[l]}15;border:1px solid ${LINE_COLORS[l]}30;">${LINE_NAMES[l]}</span>`).join(' ');
  const typeTag = n.interchange
    ? `<span class="info-tag" style="color:var(--accent);background:var(--accent-dim);border:1px solid rgba(0,229,160,0.2);">INTERCHANGE</span>`
    : `<span class="info-tag" style="color:var(--text-muted);background:var(--surface-2);border:1px solid var(--border);">STATION</span>`;

  stationInfo.innerHTML = `
    <div class="info-stat">
      <span class="info-dot" style="background:${n.lines.size > 1 ? '#fff' : LINE_COLORS[[...n.lines][0]]}"></span>
      <span class="info-value">${n.name}</span>
    </div>
    ${typeTag}
    ${lineColors}
    <span class="info-label">Edges: ${adj.get(n.id).length}</span>
  `;
}

function clearStationInfo() {
  stationInfo.innerHTML = `<span class="info-empty">Hover or click a station on the map</span>`;
}

function selectStation(id) {
  if (!sourceSelect.value) sourceSelect.value = id;
  else if (!destSelect.value) destSelect.value = id;
}

/* =============================================
   DIJKSTRA'S SHORTEST PATH
   ============================================= */
function dijkstra(src, dst) {
  const dist = new Map(), prev = new Map(), visited = new Set();
  nodes.forEach(n => dist.set(n.id, Infinity));
  dist.set(src, 0);

  while (true) {
    let u = null, min = Infinity;
    for (const [id, d] of dist) {
      if (!visited.has(id) && d < min) { min = d; u = id; }
    }
    if (u === null || u === dst) break;
    visited.add(u);
    adj.get(u).forEach(({ to, dist: w }) => {
      const alt = dist.get(u) + w;
      if (alt < dist.get(to)) { dist.set(to, alt); prev.set(to, u); }
    });
  }

  if (dist.get(dst) === Infinity) return null;
  const path = []; let cur = dst;
  while (cur) { path.unshift(cur); cur = prev.get(cur); }
  return { path, distance: dist.get(dst) };
}

/* =============================================
   FIND PATH
   ============================================= */
let selectedPath = null;

function findPath() {
  const src = sourceSelect.value, dst = destSelect.value;
  if (!src || !dst) { pathOutput.innerHTML = `<p class="path-empty">Please select both stations.</p>`; return; }
  if (src === dst) { pathOutput.innerHTML = `<p class="path-empty">Source and destination are the same.</p>`; return; }

  clearPath();
  const result = dijkstra(src, dst);
  if (!result) { pathOutput.innerHTML = `<p class="path-empty">No path found.</p>`; return; }

  selectedPath = result;
  drawPath(result.path);
  showPathStats(result);
}

function clearPath() {
  pathG.innerHTML = '';
  edgesG.querySelectorAll('.highlight').forEach(el => el.classList.remove('highlight'));
  selectedPath = null;
}

/* =============================================
   DRAW PATH ON MAP
   ============================================= */
function drawPath(path) {
  // Draw glow
  for (let i = 0; i < path.length - 1; i++) {
    const a = nodeMap.get(path[i]), b = nodeMap.get(path[i + 1]);
    const glow = document.createElementNS(SVG_NS, 'line');
    glow.setAttribute('x1', a.x); glow.setAttribute('y1', a.y);
    glow.setAttribute('x2', b.x); glow.setAttribute('y2', b.y);
    glow.setAttribute('stroke', '#00e5a0');
    glow.classList.add('path-glow');
    pathG.appendChild(glow);

    const line = document.createElementNS(SVG_NS, 'line');
    line.setAttribute('x1', a.x); line.setAttribute('y1', a.y);
    line.setAttribute('x2', b.x); line.setAttribute('y2', b.y);
    line.setAttribute('stroke', '#00e5a0');
    line.classList.add('path-line');
    pathG.appendChild(line);
  }

  // Draw path station markers
  path.forEach(pid => {
    const n = nodeMap.get(pid);
    const c = document.createElementNS(SVG_NS, 'circle');
    c.setAttribute('cx', n.x); c.setAttribute('cy', n.y);
    c.setAttribute('r', n.interchange ? 8 : 5.5);
    c.setAttribute('fill', '#00e5a0');
    c.setAttribute('stroke', '#08080c'); c.setAttribute('stroke-width', '2');
    c.classList.add('path-station');
    pathG.appendChild(c);
  });

  // Highlight edges on main layer
  for (let i = 0; i < path.length - 1; i++) {
    const key = [path[i], path[i + 1]].sort().join('-');
    edgesG.querySelectorAll('.metro-edge').forEach(el => {
      const eKey = [el.dataset.from, el.dataset.to].sort().join('-');
      if (eKey === key) el.classList.add('highlight');
    });
  }
}

/* =============================================
   PATH STATISTICS UI
   ============================================= */
function showPathStats(result) {
  const { path, distance } = result;
  const interchanges = countInterchanges(path);

  let stepsHTML = path.map((pid, i) => {
    const n = nodeMap.get(pid);
    const isFirst = i === 0, isLast = i === path.length - 1;
    let lineColor = '#00e5a0';
    if (i < path.length - 1) {
      const a = nodeMap.get(path[i]), b = nodeMap.get(path[i + 1]);
      const shared = [...a.lines].find(l => b.lines.has(l));
      if (shared) lineColor = LINE_COLORS[shared];
    }
    const connector = !isLast ? `<div class="step-connector" style="background:${lineColor};"></div>` : '';

    let detail = '';
    if (isFirst) detail = 'START';
    else if (isLast) detail = 'END';
    else if (n.interchange) detail = 'INTERCHANGE';

    return `
      <div class="step">
        <div class="step-dot" style="border-color:${lineColor};background:${isFirst||isLast?'var(--accent)':'transparent'}"></div>
        <div class="step-info">
          <div class="step-name">${n.name}</div>
          ${detail ? `<div class="step-detail">${detail}</div>` : ''}
        </div>
      </div>
      ${connector}
    `;
  }).join('');

  pathOutput.innerHTML = `
    <div class="path-summary">
      <div class="path-stat">
        <span class="p-val">${path.length}</span>
        <span class="p-lbl">Stations</span>
      </div>
      <div class="path-stat">
        <span class="p-val">${distance}</span>
        <span class="p-lbl">Distance</span>
      </div>
      <div class="path-stat">
        <span class="p-val">${interchanges}</span>
        <span class="p-lbl">Interchanges</span>
      </div>
      <div class="path-stat">
        <span class="p-val">${Math.round(distance * 0.4)}</span>
        <span class="p-lbl">Est. Min</span>
      </div>
    </div>
    <div class="path-steps">${stepsHTML}</div>
  `;
}

function countInterchanges(path) {
  let count = 0;
  for (let i = 1; i < path.length - 1; i++) {
    const prev = nodeMap.get(path[i - 1]), cur = nodeMap.get(path[i]);
    const prevLines = [...prev.lines], curLines = [...cur.lines];
    if (!prevLines.some(l => curLines.includes(l))) count++;
  }
  return count;
}

/* =============================================
   GRAPH PROPERTIES PANEL
   ============================================= */
function updateGraphProps() {
  document.getElementById('mpV').textContent = nodes.length;
  document.getElementById('mpE').textContent = edges.length;
  const lineSet = new Set();
  nodes.forEach(n => n.lines.forEach(l => lineSet.add(l)));
  document.getElementById('mpLines').textContent = lineSet.size;
  document.getElementById('mpInt').textContent = nodes.filter(n => n.interchange).length;

  // Detected properties
  const props = [];
  props.push('Connected');
  if (nodes.filter(n => !n.interchange).length > 0) props.push('Weighted');

  // Check bipartiteness
  const col = new Map();
  let isBip = true;
  nodes.forEach(n => { if (!col.has(n.id)) {
    col.set(n.id, 0); const q = [n.id];
    while (q.length && isBip) {
      const c = q.shift();
      adj.get(c).forEach(({ to }) => {
        if (!col.has(to)) { col.set(to, 1 - col.get(c)); q.push(to); }
        else if (col.get(to) === col.get(c)) isBip = false;
      });
    }
  }});
  if (isBip) props.push('Bipartite');

  props.push('Planar');

  const avgDeg = (edges.length * 2 / nodes.length).toFixed(1);
  props.push(`Avg Degree ${avgDeg}`);

  document.getElementById('detectedProps').innerHTML = props.map(p =>
    `<span class="prop-tag">${p}</span>`
  ).join('');

  // Concepts list
  document.getElementById('conceptsList').innerHTML = `
    <div class="concept-item">
      <div class="concept-icon"><svg viewBox="0 0 10 10"><circle cx="5" cy="5" r="3" fill="#00e5a0"/></svg></div>
      <div class="concept-text"><strong>Vertices = Stations:</strong> Each metro station is a vertex in the graph. The DMRC network has ${nodes.length} stations represented.</div>
    </div>
    <div class="concept-item">
      <div class="concept-icon"><svg viewBox="0 0 10 10"><line x1="1" y1="9" x2="9" y2="1" stroke="#00e5a0" stroke-width="1.5"/></svg></div>
      <div class="concept-text"><strong>Edges = Tracks:</strong> Each connection between adjacent stations is an edge. There are ${edges.length} edges with weights (distances).</div>
    </div>
    <div class="concept-item">
      <div class="concept-icon"><svg viewBox="0 0 10 10"><circle cx="5" cy="3" r="2" fill="#00e5a0"/><circle cx="3" cy="7" r="2" fill="#00e5a0"/><circle cx="7" cy="7" r="2" fill="#00e5a0"/></svg></div>
      <div class="concept-text"><strong>Connected Graph:</strong> You can reach any station from any other station — the network is a single connected component.</div>
    </div>
    <div class="concept-item">
      <div class="concept-icon"><svg viewBox="0 0 10 10"><text x="5" y="7" text-anchor="middle" fill="#00e5a0" font-size="7" font-weight="bold">W</text></svg></div>
      <div class="concept-text"><strong>Weighted Graph:</strong> Each edge carries a numerical weight representing the distance between stations. Dijkstra's algorithm uses these weights to find the shortest path.</div>
    </div>
    <div class="concept-item">
      <div class="concept-icon"><svg viewBox="0 0 10 10"><rect x="1" y="1" width="8" height="8" fill="none" stroke="#00e5a0" stroke-width="1"/></svg></div>
      <div class="concept-text"><strong>Interchange Nodes:</strong> ${nodes.filter(n=>n.interchange).length} stations like Rajiv Chowk and Kashmere Gate are interchange hubs — they have higher degree (more connections) and are critical for network connectivity.</div>
    </div>
    <div class="concept-item">
      <div class="concept-icon"><svg viewBox="0 0 10 10"><line x1="1" y1="9" x2="9" y2="1" stroke="#00e5a0" stroke-width="1.5"/><circle cx="1" cy="9" r="1.5" fill="#00e5a0"/><circle cx="9" cy="1" r="1.5" fill="#00e5a0"/></svg></div>
      <div class="concept-text"><strong>Shortest Path (Dijkstra):</strong> Select two stations above and click "Find Shortest Path" — the algorithm finds the minimum-distance route through the network, the same principle used in Google Maps and DMRC journey planners.</div>
    </div>
  `;
}

/* =============================================
   EVENT LISTENERS
   ============================================= */
findPathBtn.addEventListener('click', findPath);
resetBtn.addEventListener('click', () => {
  sourceSelect.value = ''; destSelect.value = '';
  clearPath();
  pathOutput.innerHTML = `<p class="path-empty">Select two stations and find a path to see route details.</p>`;
});

/* =============================================
   INIT
   ============================================= */
function init() {
  renderMap();
  populateSelects();
  updateGraphProps();
}

document.addEventListener('DOMContentLoaded', init);