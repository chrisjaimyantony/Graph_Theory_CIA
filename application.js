/* =============================================
   DMRC METRO DATA — SINGLE NODE PER STATION
   ============================================= */
const STATIONS = [
  // ── Yellow Line ──
  { id:'samaypur_badli', name:'Samaypur Badli', x:420, y:40, lines:['yellow'] },
  { id:'azadpur', name:'Azadpur', x:420, y:80, lines:['yellow'] },
  { id:'civil_lines', name:'Civil Lines', x:420, y:120, lines:['yellow'] },
  { id:'kashmere_gate', name:'Kashmere Gate', x:420, y:165, lines:['yellow','red','violet'] },
  { id:'chandni_chowk', name:'Chandni Chowk', x:420, y:200, lines:['yellow'] },
  { id:'new_delhi', name:'New Delhi', x:420, y:235, lines:['yellow'] },
  { id:'rajiv_chowk', name:'Rajiv Chowk', x:420, y:275, lines:['yellow','blue'] },
  { id:'patel_chowk', name:'Patel Chowk', x:420, y:310, lines:['yellow'] },
  { id:'central_sec', name:'Central Secretariat', x:420, y:355, lines:['yellow','violet'] },
  { id:'udyog_bhawan', name:'Udyog Bhawan', x:420, y:390, lines:['yellow'] },
  { id:'jorbagh', name:'Jorbagh', x:420, y:425, lines:['yellow'] },
  { id:'hauz_khas', name:'Hauz Khas', x:420, y:465, lines:['yellow'] },

  // ── Blue Line (unique only) ──
  { id:'dwarka_sec21', name:'Dwarka Sec 21', x:50, y:275, lines:['blue'] },
  { id:'dwarka', name:'Dwarka', x:100, y:275, lines:['blue'] },
  { id:'dwarka_mor', name:'Dwarka Mor', x:150, y:275, lines:['blue'] },
  { id:'rajouri_garden', name:'Rajouri Garden', x:215, y:275, lines:['blue'] },
  { id:'kirti_nagar', name:'Kirti Nagar', x:280, y:275, lines:['blue','green'] },
  { id:'karol_bagh', name:'Karol Bagh', x:340, y:275, lines:['blue'] },
  { id:'barakhamba', name:'Barakhamba', x:475, y:275, lines:['blue'] },
  { id:'mandi_house', name:'Mandi House', x:540, y:255, lines:['blue','violet'] },
  { id:'pragati_maidan', name:'Pragati Maidan', x:600, y:260, lines:['blue'] },
  { id:'akshardham', name:'Akshardham', x:665, y:268, lines:['blue'] },
  { id:'noida_sec18', name:'Noida Sec 18', x:745, y:275, lines:['blue'] },

  // ── Red Line (unique only) ──
  { id:'rithala', name:'Rithala', x:80, y:165, lines:['red'] },
  { id:'rohini_sec18', name:'Rohini Sec 18', x:130, y:165, lines:['red'] },
  { id:'pitampura', name:'Pitampura', x:180, y:165, lines:['red'] },
  { id:'netaji_subhash', name:'Netaji Subhash Place', x:235, y:165, lines:['red'] },
  { id:'inderlok', name:'Inderlok', x:300, y:165, lines:['red','green'] },
  { id:'pratap_nagar', name:'Pratap Nagar', x:345, y:165, lines:['red'] },
  { id:'tis_hazari', name:'Tis Hazari', x:475, y:165, lines:['red'] },
  { id:'pul_bangash', name:'Pul Bangash', x:530, y:165, lines:['red'] },
  { id:'shastri_nagar', name:'Shastri Nagar', x:585, y:165, lines:['red'] },
  { id:'shahdara', name:'Shahdara', x:650, y:165, lines:['red'] },

  // ── Green Line (unique only) ──
  { id:'satguru_ram', name:'Satguru Ramsingh Marg', x:280, y:230, lines:['green'] },
  { id:'ashok_park', name:'Ashok Park Main', x:245, y:135, lines:['green'] },
  { id:'punjabi_bagh', name:'Punjabi Bagh', x:195, y:135, lines:['green'] },
  { id:'shivaji_park', name:'Shivaji Park', x:145, y:135, lines:['green'] },
  { id:'mundka', name:'Mundka', x:90, y:135, lines:['green'] },

  // ── Violet Line (unique only) ──
  { id:'lal_quila', name:'Lal Quila', x:470, y:195, lines:['violet'] },
  { id:'jama_masjid', name:'Jama Masjid', x:510, y:220, lines:['violet'] },
  { id:'delhi_gate', name:'Delhi Gate', x:540, y:238, lines:['violet'] },
  { id:'ito', name:'ITO', x:558, y:250, lines:['violet'] },
  { id:'janpath', name:'Janpath', x:510, y:290, lines:['violet'] },
  { id:'khan_market', name:'Khan Market', x:480, y:380, lines:['violet'] },
  { id:'jln_stadium', name:'JLN Stadium', x:530, y:405, lines:['violet'] },
];

// Mark interchange
STATIONS.forEach(s => { s.interchange = s.lines.length > 1; });

// Station lookup
const stationMap = new Map(STATIONS.map(s => [s.id, s]));

/* =============================================
   EDGES — EACH WITH LINE INFO
   ============================================= */
const EDGES = [
  // Blue Line
  { from:'dwarka_sec21', to:'dwarka', line:'blue' },
  { from:'dwarka', to:'dwarka_mor', line:'blue' },
  { from:'dwarka_mor', to:'rajouri_garden', line:'blue' },
  { from:'rajouri_garden', to:'kirti_nagar', line:'blue' },
  { from:'kirti_nagar', to:'karol_bagh', line:'blue' },
  { from:'karol_bagh', to:'rajiv_chowk', line:'blue' },
  { from:'rajiv_chowk', to:'barakhamba', line:'blue' },
  { from:'barakhamba', to:'mandi_house', line:'blue' },
  { from:'mandi_house', to:'pragati_maidan', line:'blue' },
  { from:'pragati_maidan', to:'akshardham', line:'blue' },
  { from:'akshardham', to:'noida_sec18', line:'blue' },

  // Yellow Line
  { from:'samaypur_badli', to:'azadpur', line:'yellow' },
  { from:'azadpur', to:'civil_lines', line:'yellow' },
  { from:'civil_lines', to:'kashmere_gate', line:'yellow' },
  { from:'kashmere_gate', to:'chandni_chowk', line:'yellow' },
  { from:'chandni_chowk', to:'new_delhi', line:'yellow' },
  { from:'new_delhi', to:'rajiv_chowk', line:'yellow' },
  { from:'rajiv_chowk', to:'patel_chowk', line:'yellow' },
  { from:'patel_chowk', to:'central_sec', line:'yellow' },
  { from:'central_sec', to:'udyog_bhawan', line:'yellow' },
  { from:'udyog_bhawan', to:'jorbagh', line:'yellow' },
  { from:'jorbagh', to:'hauz_khas', line:'yellow' },

  // Red Line
  { from:'rithala', to:'rohini_sec18', line:'red' },
  { from:'rohini_sec18', to:'pitampura', line:'red' },
  { from:'pitampura', to:'netaji_subhash', line:'red' },
  { from:'netaji_subhash', to:'inderlok', line:'red' },
  { from:'inderlok', to:'pratap_nagar', line:'red' },
  { from:'pratap_nagar', to:'kashmere_gate', line:'red' },
  { from:'kashmere_gate', to:'tis_hazari', line:'red' },
  { from:'tis_hazari', to:'pul_bangash', line:'red' },
  { from:'pul_bangash', to:'shastri_nagar', line:'red' },
  { from:'shastri_nagar', to:'shahdara', line:'red' },

  // Green Line
  { from:'kirti_nagar', to:'satguru_ram', line:'green' },
  { from:'satguru_ram', to:'inderlok', line:'green' },
  { from:'inderlok', to:'ashok_park', line:'green' },
  { from:'ashok_park', to:'punjabi_bagh', line:'green' },
  { from:'punjabi_bagh', to:'shivaji_park', line:'green' },
  { from:'shivaji_park', to:'mundka', line:'green' },

  // Violet Line
  { from:'kashmere_gate', to:'lal_quila', line:'violet' },
  { from:'lal_quila', to:'jama_masjid', line:'violet' },
  { from:'jama_masjid', to:'delhi_gate', line:'violet' },
  { from:'delhi_gate', to:'ito', line:'violet' },
  { from:'ito', to:'mandi_house', line:'violet' },
  { from:'mandi_house', to:'janpath', line:'violet' },
  { from:'janpath', to:'central_sec', line:'violet' },
  { from:'central_sec', to:'khan_market', line:'violet' },
  { from:'khan_market', to:'jln_stadium', line:'violet' },
];

/* =============================================
   LINE METADATA
   ============================================= */
const LINES = {
  blue:   { color:'#4a90d9', name:'Blue Line' },
  yellow: { color:'#ffd428', name:'Yellow Line' },
  red:    { color:'#e8453c', name:'Red Line' },
  green:  { color:'#5cb85c', name:'Green Line' },
  violet: { color:'#9b59b6', name:'Violet Line' },
};

/* =============================================
   BUILD GRAPH
   ============================================= */
const SVG_NS = 'http://www.w3.org/2000/svg';
const adj = new Map();
STATIONS.forEach(s => adj.set(s.id, []));

// Compute weights and build adjacency
EDGES.forEach(e => {
  const a = stationMap.get(e.from), b = stationMap.get(e.to);
  const dist = Math.max(Math.round(Math.hypot(a.x - b.x, a.y - b.y) / 5), 1);
  adj.get(e.from).push({ to: e.to, dist, line: e.line });
  adj.get(e.to).push({ to: e.from, dist, line: e.line });
});

// Edge lookup helper
function findEdge(a, b) {
  return EDGES.find(e =>
    (e.from === a && e.to === b) || (e.from === b && e.to === a)
  );
}

function sub(n) { const s='₀₁₂₃₄₅₆₇₈₉'; return String(n).split('').map(d=>s[+d]).join(''); }

/* =============================================
   DOM
   ============================================= */
const svg = document.getElementById('metroMap');
const edgesG = document.getElementById('edgesG');
const pathG = document.getElementById('pathG');
const nodesG = document.getElementById('nodesG');
const legendG = document.getElementById('legendG');
const sourceSelect = document.getElementById('sourceSelect');
const destSelect = document.getElementById('destSelect');
const findPathBtn = document.getElementById('findPathBtn');
const resetBtn = document.getElementById('resetBtn');
const randomBtn = document.getElementById('randomBtn');
const pathOutput = document.getElementById('pathOutput');
const analysisOutput = document.getElementById('analysisOutput');
const pathCard = document.getElementById('pathCard');
const analysisCard = document.getElementById('analysisCard');
const stationInfo = document.getElementById('stationInfo');
const propsGrid = document.getElementById('propsGrid');
const detectedProps = document.getElementById('detectedProps');
const conceptsList = document.getElementById('conceptsList');

let hoveredStation = null;

/* =============================================
   RENDER MAP
   ============================================= */
function renderMap() {
  // Draw edges — each colored by its metro line
  EDGES.forEach(e => {
    const a = stationMap.get(e.from), b = stationMap.get(e.to);
    const line = document.createElementNS(SVG_NS, 'line');
    line.setAttribute('x1', a.x); line.setAttribute('y1', a.y);
    line.setAttribute('x2', b.x); line.setAttribute('y2', b.y);
    line.setAttribute('stroke', LINES[e.line].color);
    line.classList.add('metro-edge');
    line.dataset.from = e.from; line.dataset.to = e.to; line.dataset.line = e.line;
    edgesG.appendChild(line);
  });

  // Draw nodes
  STATIONS.forEach(n => {
    const g = document.createElementNS(SVG_NS, 'g');
    g.classList.add('station-node'); g.dataset.id = n.id;

    const r = n.interchange ? 7 : 4;
    const c = document.createElementNS(SVG_NS, 'circle');
    c.setAttribute('cx', n.x); c.setAttribute('cy', n.y); c.setAttribute('r', r);
    c.setAttribute('fill', n.interchange ? '#ffffff' : LINES[n.lines[0]].color);
    if (n.interchange) {
      c.setAttribute('stroke', '#ffffff'); c.setAttribute('stroke-width', '2');
      c.setAttribute('fill', '#08080c');
    }

    const t = document.createElementNS(SVG_NS, 'text');
    t.setAttribute('x', n.x); t.setAttribute('y', n.y - (r + 4));
    t.setAttribute('text-anchor', 'middle');
    t.classList.add('station-label');
    if (n.interchange) t.classList.add('interchange-label');
    t.textContent = n.name;

    g.appendChild(c); g.appendChild(t);
    nodesG.appendChild(g);

    g.addEventListener('mouseenter', () => { hoveredStation = n; showStationInfo(n); });
    g.addEventListener('mouseleave', () => { hoveredStation = null; clearStationInfo(); });
    g.addEventListener('click', () => selectStation(n.id));
  });

  // Draw legend
  const lineKeys = Object.keys(LINES);
  lineKeys.forEach((key, i) => {
    const x = i * 150;
    const bar = document.createElementNS(SVG_NS, 'rect');
    bar.setAttribute('x', x); bar.setAttribute('y', 0);
    bar.setAttribute('width', 20); bar.setAttribute('height', 4);
    bar.setAttribute('rx', 2); bar.setAttribute('fill', LINES[key].color);
    legendG.appendChild(bar);

    const txt = document.createElementNS(SVG_NS, 'text');
    txt.setAttribute('x', x + 26); txt.setAttribute('y', 5);
    txt.setAttribute('font-family', 'IBM Plex Mono, monospace');
    txt.setAttribute('font-size', '9'); txt.setAttribute('fill', '#555568');
    txt.textContent = LINES[key].name;
    legendG.appendChild(txt);
  });
}

/* =============================================
   POPULATE SELECTS
   ============================================= */
function populateSelects() {
  const sorted = [...STATIONS].sort((a, b) => a.name.localeCompare(b.name));
  sorted.forEach(n => {
    sourceSelect.appendChild(new Option(n.name, n.id));
    destSelect.appendChild(new Option(n.name, n.id));
  });
}

/* =============================================
   STATION INTERACTION
   ============================================= */
function showStationInfo(n) {
  const deg = adj.get(n.id).length;
  const lineTags = n.lines.map(l =>
    `<span class="info-tag" style="color:${LINES[l].color};background:${LINES[l].color}15;border:1px solid ${LINES[l].color}30;">${LINES[l].name}</span>`
  ).join(' ');
  const typeTag = n.interchange
    ? `<span class="info-tag" style="color:var(--accent);background:var(--accent-dim);border:1px solid rgba(0,229,160,0.25);">INTERCHANGE (Degree ${deg})</span>`
    : `<span class="info-tag" style="color:var(--text-muted);background:var(--surface-2);border:1px solid var(--border);">Degree ${deg}</span>`;

  stationInfo.innerHTML = `
    <div class="info-stat">
      <span class="info-dot" style="background:${n.interchange ? '#fff' : LINES[n.lines[0]].color}"></span>
      <span class="info-value">${n.name}</span>
    </div>
    ${typeTag} ${lineTags}
  `;
}

function clearStationInfo() {
  stationInfo.innerHTML = `<span class="info-empty">Hover over a station to see details · Click to select</span>`;
}

function selectStation(id) {
  if (!sourceSelect.value) { sourceSelect.value = id; }
  else if (!destSelect.value && sourceSelect.value !== id) { destSelect.value = id; }
  else { sourceSelect.value = id; destSelect.value = ''; }
}

/* =============================================
   DIJKSTRA'S ALGORITHM
   ============================================= */
function dijkstra(src, dst) {
  const dist = new Map(), prev = new Map(), prevEdge = new Map(), visited = new Set();
  STATIONS.forEach(s => dist.set(s.id, Infinity));
  dist.set(src, 0);

  while (true) {
    let u = null, min = Infinity;
    for (const [id, d] of dist) { if (!visited.has(id) && d < min) { min = d; u = id; } }
    if (u === null || u === dst) break;
    visited.add(u);
    adj.get(u).forEach(({ to, dist: w }) => {
      const alt = dist.get(u) + w;
      if (alt < dist.get(to)) { dist.set(to, alt); prev.set(to, u); prevEdge.set(to, { line: findEdge(u, to).line }); }
    });
  }

  if (dist.get(dst) === Infinity) return null;
  const path = []; const edgeLines = []; let cur = dst;
  while (cur) { path.unshift(cur); if (prevEdge.has(cur)) edgeLines.unshift(prevEdge.get(cur).line); cur = prev.get(cur); }
  return { path, distance: dist.get(dst), edgeLines };
}

/* =============================================
   FIND PATH
   ============================================= */
function findPath() {
  const src = sourceSelect.value, dst = destSelect.value;
  if (!src || !dst) return;
  if (src === dst) return;

  clearPath();
  const result = dijkstra(src, dst);
  if (!result) return;

  drawPath(result.path, result.edgeLines);
  showPathStats(result);
  showPathAnalysis(result);
}

function clearPath() {
  pathG.innerHTML = '';
  edgesG.querySelectorAll('.highlight').forEach(el => el.classList.remove('highlight'));
  pathCard.style.display = 'none';
  analysisCard.style.display = 'none';
}

/* =============================================
   DRAW PATH ON MAP
   ============================================= */
function drawPath(path, edgeLines) {
  // Glow + line segments colored by metro line
  for (let i = 0; i < path.length - 1; i++) {
    const a = stationMap.get(path[i]), b = stationMap.get(path[i + 1]);
    const color = LINES[edgeLines[i]].color;

    const glow = document.createElementNS(SVG_NS, 'line');
    glow.setAttribute('x1', a.x); glow.setAttribute('y1', a.y);
    glow.setAttribute('x2', b.x); glow.setAttribute('y2', b.y);
    glow.setAttribute('stroke', '#00e5a0');
    glow.classList.add('path-glow');
    glow.style.animationDelay = (i * 0.08) + 's';
    pathG.appendChild(glow);

    const line = document.createElementNS(SVG_NS, 'line');
    line.setAttribute('x1', a.x); line.setAttribute('y1', a.y);
    line.setAttribute('x2', b.x); line.setAttribute('y2', b.y);
    line.setAttribute('stroke', color);
    line.classList.add('path-line');
    line.style.opacity = '0'; line.style.transition = `opacity .4s ${i * 0.06}s`;
    pathG.appendChild(line);
    requestAnimationFrame(() => { line.style.opacity = '1'; });
  }

  // Station rings on path
  path.forEach((pid, i) => {
    const n = stationMap.get(pid);
    const ring = document.createElementNS(SVG_NS, 'circle');
    ring.setAttribute('cx', n.x); ring.setAttribute('cy', n.y);
    ring.setAttribute('r', n.interchange ? 9 : 6);
    ring.setAttribute('fill', 'none'); ring.setAttribute('stroke', '#00e5a0');
    ring.setAttribute('stroke-width', '2'); ring.setAttribute('opacity', '0.5');
    ring.style.transition = `opacity .3s ${i * 0.05}s`;
    ring.style.opacity = '0';
    pathG.appendChild(ring);
    requestAnimationFrame(() => { ring.style.opacity = '0.5'; });
  });

  // Highlight edges
  for (let i = 0; i < path.length - 1; i++) {
    const key1 = path[i], key2 = path[i + 1];
    edgesG.querySelectorAll('.metro-edge').forEach(el => {
      if ((el.dataset.from === key1 && el.dataset.to === key2) || (el.dataset.from === key2 && el.dataset.to === key1)) {
        el.classList.add('highlight');
      }
    });
  }
}

/* =============================================
   PATH STATISTICS
   ============================================= */
function showPathStats(result) {
  const { path, distance, edgeLines } = result;

  // Detect interchanges along path
  const interchanges = [];
  let currentLine = edgeLines[0] || 'blue';
  for (let i = 1; i < edgeLines.length; i++) {
    if (edgeLines[i] !== currentLine) {
      interchanges.push({ station: path[i], from: currentLine, to: edgeLines[i] });
      currentLine = edgeLines[i];
    }
  }

  const linesUsed = [...new Set(edgeLines)];

  let stepsHTML = '';
  let prevLine = null;
  path.forEach((pid, i) => {
    const n = stationMap.get(pid);
    const isFirst = i === 0, isLast = i === path.length - 1;
    const edgeLine = i < edgeLines.length ? edgeLines[i] : prevLine;
    const lineColor = edgeLine ? LINES[edgeLine].color : '#00e5a0';
    const isInterchange = interchanges.find(ic => ic.station === pid);

    if (edgeLine) prevLine = edgeLine;

    let detail = '';
    if (isFirst) detail = 'START';
    else if (isLast) detail = 'DESTINATION';
    else if (isInterchange) detail = `INTERCHANGE \u2192 ${LINES[isInterchange.to].name}`;

    const lineTag = (edgeLine && (isFirst || isInterchange))
      ? `<span class="step-line-tag" style="color:${LINES[edgeLine].color};background:${LINES[edgeLine].color}15;border:1px solid ${LINES[edgeLine].color}25;">${LINES[edgeLine].name}</span>` : '';

    stepsHTML += `
      <div class="step">
        <div class="step-dot" style="border-color:${lineColor};background:${isFirst||isLast?'var(--accent)':'transparent'};"></div>
        <div class="step-info">
          <div class="step-name">${n.name}</div>
          ${detail ? `<div class="step-detail">${detail}</div>` : ''}
          ${lineTag}
        </div>
      </div>
      ${!isLast ? `<div class="step-connector" style="background:${i < edgeLines.length ? LINES[edgeLines[i]].color : lineColor};"></div>` : ''}
    `;
  });

  pathCard.style.display = 'block';
  pathOutput.innerHTML = `
    <div class="path-summary">
      <div class="path-stat"><span class="p-val">${path.length}</span><span class="p-lbl">Stations</span></div>
      <div class="path-stat"><span class="p-val">${distance}</span><span class="p-lbl">Distance</span></div>
      <div class="path-stat"><span class="p-val">${interchanges.length}</span><span class="p-lbl">Interchanges</span></div>
      <div class="path-stat"><span class="p-val">${Math.round(distance * 0.4)}</span><span class="p-lbl">Est. Min</span></div>
    </div>
    <div class="path-steps">${stepsHTML}</div>
  `;
}

/* =============================================
   PATH GRAPH ANALYSIS — "WHICH GRAPH IS THIS?"
   ============================================= */
function showPathAnalysis(result) {
  const { path, edgeLines } = result;
  const n = path.length;
  const e = n - 1;
  const linesUsed = [...new Set(edgeLines)];

  const interchanges = [];
  let curLine = edgeLines[0];
  for (let i = 1; i < edgeLines.length; i++) {
    if (edgeLines[i] !== curLine) {
      interchanges.push({ station: stationMap.get(path[i]).name, from: curLine, to: edgeLines[i] });
      curLine = edgeLines[i];
    }
  }

  const props = [
    { label: `Path Graph P${sub(n)}`, type: 'yes' },
    { label: 'Connected', type: 'yes' },
    { label: 'Acyclic', type: 'yes' },
    { label: 'Tree', type: 'yes' },
    { label: 'Bipartite', type: 'yes' },
    { label: 'Planar', type: 'yes' },
    { label: `Weighted (${e} edges)`, type: 'info' },
    { label: `${linesUsed.length} Line${linesUsed.length > 1 ? 's' : ''}`, type: 'info' },
  ];

  const linesHTML = linesUsed.map(l =>
    `<div class="analysis-line-item"><div class="analysis-line-bar" style="background:${LINES[l].color};"></div>${LINES[l].name}</div>`
  ).join('');

  const interHTML = interchanges.length
    ? interchanges.map(ic =>
        `<div class="analysis-line-item"><div class="analysis-line-bar" style="background:var(--accent);"></div>${ic.station}: ${LINES[ic.from].name} → ${LINES[ic.to].name}</div>`
      ).join('')
    : '<div class="analysis-line-item" style="color:var(--text-muted);">No interchanges needed</div>';

  analysisCard.style.display = 'block';
  analysisOutput.innerHTML = `
    <div class="analysis-type">Path Graph P${sub(n)}</div>
    <div class="analysis-sub">
      Your route with <strong>${n} vertices</strong> (stations) and <strong>${e} edges</strong> (connections) forms a <strong>Path Graph</strong> — a connected, acyclic, planar graph where each internal vertex has degree 2 and endpoints have degree 1. This is also a <strong>tree</strong> (connected + acyclic), and all trees are <strong>bipartite</strong>.
    </div>
    <div class="analysis-props">${props.map(p => `<span class="analysis-tag ${p.type}">${p.label}</span>`).join('')}</div>
    <div class="analysis-lines">
      <div style="font-size:11px;color:var(--text-muted);margin-bottom:4px;font-weight:600;">LINES TRAVERSED</div>
      ${linesHTML}
    </div>
    <div class="analysis-lines" style="margin-top:10px;">
      <div style="font-size:11px;color:var(--text-muted);margin-bottom:4px;font-weight:600;">INTERCHANGES</div>
      ${interHTML}
    </div>
  `;
}

/* =============================================
   NETWORK PROPERTIES
   ============================================= */
function updateNetworkProps() {
  const V = STATIONS.length, E = EDGES.length;
  const lineSet = new Set();
  STATIONS.forEach(s => s.lines.forEach(l => lineSet.add(l)));
  const interchangeCount = STATIONS.filter(s => s.interchange).length;

  const maxDeg = Math.max(...STATIONS.map(s => adj.get(s.id).length));
  const interchangeMax = STATIONS.find(s => adj.get(s.id).length === maxDeg);

  propsGrid.innerHTML = `
    <div class="mini-prop"><span class="mini-val">${V}</span><span class="mini-lbl">Vertices</span></div>
    <div class="mini-prop"><span class="mini-val">${E}</span><span class="mini-lbl">Edges</span></div>
    <div class="mini-prop"><span class="mini-val">${lineSet.size}</span><span class="mini-lbl">Lines</span></div>
    <div class="mini-prop"><span class="mini-val">${interchangeCount}</span><span class="mini-lbl">Interchanges</span></div>
  `;

  const avgDeg = (E * 2 / V).toFixed(1);
  const props = [
    'Connected', 'Weighted', `Avg Degree ${avgDeg}`,
    `Max Degree ${maxDeg}`, 'Planar', 'Cyclic'
  ];

  // Check bipartiteness
  const col = new Map(); let isBip = true;
  for (const s of STATIONS) {
    if (col.has(s.id)) continue;
    col.set(s.id, 0); const q = [s.id];
    while (q.length && isBip) {
      const c = q.shift();
      adj.get(c).forEach(({ to }) => {
        if (!col.has(to)) { col.set(to, 1 - col.get(c)); q.push(to); }
        else if (col.get(to) === col.get(c)) isBip = false;
      });
    }
  }
  if (isBip) props.splice(3, 0, 'Bipartite');

  detectedProps.innerHTML = props.map(p => `<span class="prop-tag">${p}</span>`).join('');

  conceptsList.innerHTML = `
    <div class="concept-item">
      <div class="concept-icon"><svg viewBox="0 0 10 10"><circle cx="5" cy="5" r="3" fill="#00e5a0"/></svg></div>
      <div class="concept-text"><strong>Vertices = Stations:</strong> Each of the ${V} metro stations is a vertex. Interchange stations like <strong>Kashmere Gate</strong> (degree ${adj.get('kashmere_gate').length}) have the highest degrees because multiple lines converge there.</div>
    </div>
    <div class="concept-item">
      <div class="concept-icon"><svg viewBox="0 0 10 10"><line x1="1" y1="9" x2="9" y2="1" stroke="#00e5a0" stroke-width="1.5"/></svg></div>
      <div class="concept-text"><strong>Edges = Track Segments:</strong> ${E} edges connect adjacent stations. Each edge carries a <strong>weight</strong> (distance), making this a <strong>Weighted Graph</strong>.</div>
    </div>
    <div class="concept-item">
      <div class="concept-icon"><svg viewBox="0 0 10 10"><circle cx="5" cy="3" r="2" fill="#00e5a0"/><circle cx="3" cy="7" r="2" fill="#00e5a0"/><circle cx="7" cy="7" r="2" fill="#00e5a0"/></svg></div>
      <div class="concept-text"><strong>Connected Graph:</strong> Any station can reach any other station — the network forms a single connected component. This is essential for public transit.</div>
    </div>
    <div class="concept-item">
      <div class="concept-icon"><svg viewBox="0 0 10 10"><rect x="2" y="2" width="6" height="6" fill="none" stroke="#00e5a0" stroke-width="1.2"/><line x1="2" y1="2" x2="8" y2="8" stroke="#00e5a0" stroke-width="0.8"/></svg></div>
      <div class="concept-text"><strong>Cyclic Graph:</strong> The network contains multiple cycles — you can take different routes between stations (e.g., Rajiv Chowk → Kashmere Gate via Yellow or via Blue+Red). This is what makes pathfinding meaningful.</div>
    </div>
    <div class="concept-item">
      <div class="concept-icon"><svg viewBox="0 0 10 10"><text x="5" y="7" text-anchor="middle" fill="#00e5a0" font-size="6" font-weight="bold">D</text></svg></div>
      <div class="concept-text"><strong>Dijkstra's Algorithm:</strong> Select two stations above — the algorithm finds the minimum-distance path through this ${V}-vertex graph, the same principle used by the DMRC app and Google Maps.</div>
    </div>
    <div class="concept-item">
      <div class="concept-icon"><svg viewBox="0 0 10 10"><path d="M2,8 L5,2 L8,8" fill="none" stroke="#00e5a0" stroke-width="1.2"/></svg></div>
      <div class="concept-text"><strong>Interchange Nodes:</strong> ${interchangeCount} stations serve as interchanges. In graph terms, they are <strong>cut vertices</strong> — removing one would disconnect parts of the network.</div>
    </div>
  `;
}

/* =============================================
   EVENTS
   ============================================= */
findPathBtn.addEventListener('click', findPath);
resetBtn.addEventListener('click', () => {
  sourceSelect.value = ''; destSelect.value = '';
  clearPath();
});
randomBtn.addEventListener('click', () => {
  const ids = STATIONS.map(s => s.id);
  const a = ids[Math.floor(Math.random() * ids.length)];
  let b = a; while (b === a) b = ids[Math.floor(Math.random() * ids.length)];
  sourceSelect.value = a; destSelect.value = b;
  findPath();
});

// Keyboard
document.addEventListener('keydown', e => {
  if (e.target.tagName === 'SELECT' || e.target.tagName === 'INPUT') return;
  if (e.key === 'Enter') findPath();
  if (e.key === 'r' || e.key === 'R') { sourceSelect.value = ''; destSelect.value = ''; clearPath(); }
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