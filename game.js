/* =============================================
   CONSTANTS
   ============================================= */
const SVG_NS = 'http://www.w3.org/2000/svg';
const NODE_R = 16;
const EDGE_HIT = 10;
const DRAG_MIN = 4;

/* =============================================
   STATE
   ============================================= */
let graph = { nodes: [], edges: [] };
let nextNId = 1;
let nextEId = 1;
let mode = 'node';
let dragging = false;
let dragId = null;
let mdX = 0, mdY = 0;
let tmpLine = null;
let curChallenge = 0;
let completed = new Set();

/* =============================================
   DOM
   ============================================= */
const svg = document.getElementById('canvas');
const bgRect = document.getElementById('bgRect');
const edgesG = document.getElementById('edgesGroup');
const nodesG = document.getElementById('nodesGroup');
const tempG = document.getElementById('tempGroup');
const wrap = document.getElementById('canvasWrap');
const hint = document.getElementById('canvasHint');

/* =============================================
   CHALLENGES
   ============================================= */
const CHALLENGES = [
  { title:'Null Graph', task:'Place 4+ vertices with zero edges',
    desc:'A null graph has vertices but no edges. Every vertex is completely isolated.',
    check:()=> graph.nodes.length>=4 && graph.edges.length===0 },
  { title:'Path Graph', task:'Build a path graph with 5 vertices',
    desc:'Connect 5 vertices in a single chain. No branches, no cycles. Each endpoint has degree 1.',
    check:()=> graph.nodes.length===5 && graph.edges.length===4 && isPathGraph() },
  { title:'Cycle Graph', task:'Build a cycle graph with 5 vertices',
    desc:'Arrange 5 vertices in a closed loop. Every vertex must have exactly degree 2.',
    check:()=> graph.nodes.length===5 && graph.edges.length===5 && isCycleGraph() },
  { title:'Complete Graph', task:'Build a complete graph K\u2084',
    desc:'4 vertices where every pair is connected. Should have exactly 6 edges.',
    check:()=> graph.nodes.length===4 && isComplete() },
  { title:'Bipartite Graph', task:'Build a bipartite graph that is NOT complete',
    desc:'Split vertices into 2 groups. Edges only between groups, never within. Leave at least one cross-pair unconnected.',
    check:()=> graph.nodes.length>=4 && graph.edges.length>0 && isBipartite() && !isCompleteBipartite() },
  { title:'Tree', task:'Build a tree with 6 vertices',
    desc:'Connected with no cycles. Must have exactly 6 vertices and 5 edges.',
    check:()=> graph.nodes.length===6 && graph.edges.length===5 && isConnected() && isAcyclic() },
  { title:'3-Regular Graph', task:'Build a 3-regular graph',
    desc:'Every vertex must have exactly 3 connections. You need at least 4 vertices.',
    check:()=>{ if(graph.nodes.length<4) return false; const d=getDeg(); return Object.values(d).every(v=>v===3); } },
  { title:'Wheel Graph', task:'Build a wheel graph W\u2085',
    desc:'One center vertex connected to all others. Outer vertices form a cycle. 5 vertices total.',
    check:()=> graph.nodes.length===5 && isWheelGraph() },
  { title:'Disconnected Graph', task:'Create 2+ separate components',
    desc:'Make at least two groups of vertices with no path connecting them.',
    check:()=> graph.nodes.length>=4 && graph.edges.length>=1 && !isConnected() },
  { title:'Complete Bipartite', task:'Build K\u2082,\u2083',
    desc:'2 vertices in one set, 3 in the other. Every vertex in set 1 connects to every vertex in set 2. 6 edges total.',
    check:()=> graph.nodes.length===5 && graph.edges.length===6 && isCompleteBipartite() }
];

/* =============================================
   GRAPH OPERATIONS
   ============================================= */
function addNode(x, y) {
  const id = nextNId++;
  graph.nodes.push({ id, x, y });
  const g = mkEl('g'); g.classList.add('node-group'); g.dataset.id = id;
  const c = mkEl('circle');
  c.setAttribute('cx',x); c.setAttribute('cy',y); c.setAttribute('r',NODE_R);
  c.classList.add('node');
  const t = mkEl('text');
  t.setAttribute('x',x); t.setAttribute('y',y);
  t.setAttribute('text-anchor','middle'); t.setAttribute('dominant-baseline','central');
  t.classList.add('node-label'); t.textContent = id;
  g.appendChild(c); g.appendChild(t); nodesG.appendChild(g);
  g.style.opacity='0'; g.style.transform='scale(0.5)';
  g.style.transformOrigin = x+'px '+y+'px';
  requestAnimationFrame(()=>{ g.style.transition='opacity .2s,transform .2s'; g.style.opacity='1'; g.style.transform='scale(1)'; });
  onChange(); return id;
}

function getNode(id){ return graph.nodes.find(n=>n.id===id); }
function hasEdge(a,b){ return graph.edges.some(e=>(e.from===a&&e.to===b)||(e.from===b&&e.to===a)); }

function addEdge(a,b){
  if(a===b||hasEdge(a,b)) return;
  const id=nextEId++;
  graph.edges.push({id,from:a,to:b});
  const A=getNode(a),B=getNode(b);
  const l=mkEl('line');
  l.setAttribute('x1',A.x);l.setAttribute('y1',A.y);
  l.setAttribute('x2',B.x);l.setAttribute('y2',B.y);
  l.classList.add('edge'); l.dataset.id=id;
  edgesG.appendChild(l); onChange();
}

function moveNode(id,x,y){
  const n=getNode(id); if(!n)return;
  n.x=x; n.y=y;
  const g=nodesG.querySelector('[data-id="'+id+'"]');
  if(g){ g.querySelector('circle').setAttribute('cx',x); g.querySelector('circle').setAttribute('cy',y);
    g.querySelector('text').setAttribute('x',x); g.querySelector('text').setAttribute('y',y);
    g.style.transformOrigin=x+'px '+y+'px'; }
  graph.edges.forEach(e=>{
    if(e.from===id||e.to===id){
      const l=edgesG.querySelector('[data-id="'+e.id+'"]');
      if(l){const f=getNode(e.from),t=getNode(e.to);
        l.setAttribute('x1',f.x);l.setAttribute('y1',f.y);
        l.setAttribute('x2',t.x);l.setAttribute('y2',t.y);}
    }
  });
}

function delNode(id){
  graph.edges.filter(e=>e.from===id||e.to===id).forEach(e=>rmEdge(e.id));
  graph.nodes=graph.nodes.filter(n=>n.id!==id);
  const g=nodesG.querySelector('[data-id="'+id+'"]'); if(g)g.remove();
  onChange();
}
function rmEdge(id){ graph.edges=graph.edges.filter(e=>e.id!==id); const l=edgesG.querySelector('[data-id="'+id+'"]'); if(l)l.remove(); }
function delEdge(id){ rmEdge(id); onChange(); }
function clearAll(){ graph={nodes:[],edges:[]}; nextNId=1; nextEId=1; edgesG.innerHTML=''; nodesG.innerHTML=''; onChange(); }

/* =============================================
   GRAPH ANALYSIS
   ============================================= */
function getDeg(){
  const d={}; graph.nodes.forEach(n=>d[n.id]=0);
  graph.edges.forEach(e=>{d[e.from]=(d[e.from]||0)+1;d[e.to]=(d[e.to]||0)+1;});
  return d;
}
function getAdj(){
  const a={}; graph.nodes.forEach(n=>a[n.id]=[]);
  graph.edges.forEach(e=>{a[e.from].push(e.to);a[e.to].push(e.from);});
  return a;
}
function isConnected(){
  if(graph.nodes.length<=1) return true;
  const adj=getAdj(), vis=new Set(), q=[graph.nodes[0].id];
  vis.add(q[0]);
  while(q.length){const c=q.shift(); for(const nb of adj[c]) if(!vis.has(nb)){vis.add(nb);q.push(nb);}}
  return vis.size===graph.nodes.length;
}
function isAcyclic(){
  const adj=getAdj(), vis=new Set(); let cyc=false;
  function dfs(n,p){ vis.add(n); for(const nb of adj[n]){ if(cyc)return; if(nb===p)continue; if(vis.has(nb)){cyc=true;return;} dfs(nb,n);} }
  for(const n of graph.nodes){ if(cyc)break; if(!vis.has(n.id)) dfs(n.id,-1); }
  return !cyc;
}
function isBipartite(){
  if(!graph.nodes.length) return true;
  const adj=getAdj(), col={};
  for(const n of graph.nodes){
    if(col[n.id]!==undefined) continue;
    col[n.id]=0; const q=[n.id];
    while(q.length){const c=q.shift(); for(const nb of adj[c]){
      if(col[nb]===undefined){col[nb]=1-col[c];q.push(nb);}
      else if(col[nb]===col[c]) return false;
    }}
  }
  return true;
}
function isComplete(){ const V=graph.nodes.length; return V>0 && graph.edges.length===V*(V-1)/2; }
function isPathGraph(){ return graph.nodes.length>=2 && isConnected() && isAcyclic() && Object.values(getDeg()).every(d=>d<=2); }
function isCycleGraph(){ return graph.nodes.length>=3 && isConnected() && Object.values(getDeg()).every(d=>d===2); }
function isWheelGraph(){
  if(graph.nodes.length<4) return false;
  const V=graph.nodes.length, ds=Object.values(getDeg());
  return ds.filter(d=>d===V-1).length===1 && ds.filter(d=>d!==V-1).every(d=>d===3);
}
function isCompleteBipartite(){
  if(!isBipartite()||graph.nodes.length<2) return false;
  const adj=getAdj(),col={}; col[graph.nodes[0].id]=0;
  const q=[graph.nodes[0].id];
  while(q.length){const c=q.shift(); for(const nb of adj[c]) if(col[nb]===undefined){col[nb]=1-col[c];q.push(nb);}}
  const s0=graph.nodes.filter(n=>col[n.id]===0).map(n=>n.id),
        s1=graph.nodes.filter(n=>col[n.id]===1).map(n=>n.id);
  if(!s0.length||!s1.length) return false;
  const es=new Set(graph.edges.map(e=>Math.min(e.from,e.to)+'-'+Math.max(e.from,e.to)));
  for(const a of s0) for(const b of s1) if(!es.has(Math.min(a,b)+'-'+Math.max(a,b))) return false;
  return true;
}
function combos(arr,k){
  if(k===0)return[[]]; if(arr.length<k)return[];
  const [f,...r]=arr;
  return[...combos(r,k-1).map(c=>[f,...c]),...combos(r,k)];
}
function containsK5(){
  if(graph.nodes.length<5) return false;
  const es=new Set(graph.edges.map(e=>Math.min(e.from,e.to)+'-'+Math.max(e.from,e.to)));
  const ids=graph.nodes.map(n=>n.id);
  return combos(ids,5).some(c=>{
    for(let i=0;i<5;i++) for(let j=i+1;j<5;j++) if(!es.has(Math.min(c[i],c[j])+'-'+Math.max(c[i],c[j]))) return false;
    return true;
  });
}
function containsK33(){
  if(graph.nodes.length<6) return false;
  const es=new Set(graph.edges.map(e=>Math.min(e.from,e.to)+'-'+Math.max(e.from,e.to)));
  const ids=graph.nodes.map(n=>n.id);
  return combos(ids,6).some(six=>{
    return combos(six,3).some(gA=>{
      const sA=new Set(gA); const gB=six.filter(x=>!sA.has(x));
      for(const a of gA) for(const b of gB) if(!es.has(Math.min(a,b)+'-'+Math.max(a,b))) return false;
      return true;
    });
  });
}
function isPlanarGraph(){
  if(graph.nodes.length<=4) return true;
  if(graph.edges.length>3*graph.nodes.length-6) return false;
  if(containsK5()) return false;
  if(containsK33()) return false;
  return true;
}

/* =============================================
   CLASSIFICATION
   ============================================= */
function sub(n){ const s='₀₁₂₃₄₅₆₇₈₉'; return String(n).split('').map(d=>s[+d]).join(''); }

function classify(){
  const V=graph.nodes.length, E=graph.edges.length;
  if(V===0) return 'Empty Canvas';
  if(V===1&&E===0) return 'Trivial Graph';
  if(E===0) return 'Null Graph';
  if(isComplete()) return 'Complete Graph K'+sub(V);
  if(isCompleteBipartite()){
    const adj=getAdj(),col={}; col[graph.nodes[0].id]=0;
    const q=[graph.nodes[0].id];
    while(q.length){const c=q.shift(); for(const nb of adj[c]) if(col[nb]===undefined){col[nb]=1-col[c];q.push(nb);}}
    const s0=graph.nodes.filter(n=>col[n.id]===0).length;
    return 'Complete Bipartite K'+sub(s0)+','+sub(V-s0);
  }
  if(isWheelGraph()) return 'Wheel Graph W'+sub(V);
  if(isCycleGraph()) return 'Cycle Graph C'+sub(V);
  if(isPathGraph()) return 'Path Graph P'+sub(V);
  if(isConnected()&&isAcyclic()) return 'Tree';
  const ds=Object.values(getDeg());
  if(ds.length&&ds.every(d=>d===ds[0])) return 'Regular Graph ('+ds[0]+'-regular)';
  if(isBipartite()) return 'Bipartite Graph';
  if(isConnected()) return 'Connected Graph';
  return 'Disconnected Graph';
}

function updateClass(){
  const V=graph.nodes.length, E=graph.edges.length;
  document.getElementById('statVertices').textContent=V;
  document.getElementById('statEdges').textContent=E;
  if(V===0){
    ['propConnected','propAcyclic','propRegular','propComplete','propBipartite','propPlanar','propSimple']
      .forEach(id=>setProp(id,null));
    setGraphType('Empty Canvas'); return;
  }
  setProp('propConnected',isConnected());
  setProp('propAcyclic',isAcyclic());
  const ds=Object.values(getDeg());
  const reg=ds.length&&ds.every(d=>d===ds[0]);
  setProp('propRegular',reg,reg?' ('+ds[0]+'-regular)':'');
  setProp('propComplete',isComplete());
  setProp('propBipartite',isBipartite());
  setProp('propPlanar',isPlanarGraph());
  setProp('propSimple',true);
  setGraphType(classify());
}

function setProp(id,val,extra){
  const el=document.getElementById(id);
  const v=el.querySelector('.prop-val');
  if(val===null){ v.textContent='—'; v.className='prop-val'; }
  else { v.textContent=(val?'Yes':'No')+(extra||''); v.className='prop-val '+(val?'yes':'no'); }
}

function setGraphType(txt){
  const el=document.getElementById('graphType');
  if(el.textContent!==txt){ el.textContent=txt; el.classList.remove('bump'); void el.offsetWidth; el.classList.add('bump'); }
}

/* =============================================
   CHALLENGES UI
   ============================================= */
function updateChallengeUI(){
  const ch=CHALLENGES[curChallenge];
  document.getElementById('challengeBadge').textContent=(curChallenge+1)+' / '+CHALLENGES.length;
  document.getElementById('challengeTitle').textContent=ch.title;
  document.getElementById('challengeTask').textContent=ch.task;
  document.getElementById('challengeDesc').textContent=ch.desc;
  const ok=ch.check(), card=document.getElementById('challengeCard'), suc=document.getElementById('challengeSuccess');
  if(ok){ completed.add(curChallenge); suc.classList.add('show'); card.classList.add('completed'); }
  else { suc.classList.remove('show'); card.classList.remove('completed'); }
  updateProgress();
}
function updateProgress(){
  document.getElementById('progressDots').innerHTML=CHALLENGES.map((_,i)=>{
    const cur=i===curChallenge, done=completed.has(i);
    return '<div class="dot'+(cur?' current':'')+(done?' completed':'')+'"></div>';
  }).join('');
  document.getElementById('progressText').textContent=completed.size+' / '+CHALLENGES.length+' completed';
}
function onChange(){ updateClass(); updateChallengeUI(); }

/* =============================================
   SVG HELPERS
   ============================================= */
function mkEl(tag){ return document.createElementNS(SVG_NS,tag); }
function svgPt(e){ const r=svg.getBoundingClientRect(); return {x:e.clientX-r.left, y:e.clientY-r.top}; }
function ptSegDist(px,py,x1,y1,x2,y2){
  const dx=x2-x1,dy=y2-y1,lenSq=dx*dx+dy*dy;
  if(!lenSq) return Math.hypot(px-x1,py-y1);
  const t=Math.max(0,Math.min(1,((px-x1)*dx+(py-y1)*dy)/lenSq));
  return Math.hypot(px-(x1+t*dx),py-(y1+t*dy));
}
function nearEdge(x,y){
  let best=Infinity,found=null;
  graph.edges.forEach(e=>{
    const a=getNode(e.from),b=getNode(e.to),d=ptSegDist(x,y,a.x,a.y,b.x,b.y);
    if(d<best){best=d;found=e;}
  });
  return best<EDGE_HIT?found:null;
}
function mkTmpLine(x1,y1,x2,y2){
  const l=mkEl('line');
  l.setAttribute('x1',x1);l.setAttribute('y1',y1);l.setAttribute('x2',x2);l.setAttribute('y2',y2);
  l.classList.add('temp-edge'); tempG.appendChild(l); return l;
}
function cleanup(){ dragging=false; dragId=null; if(tmpLine){tmpLine.remove();tmpLine=null;} wrap.classList.remove('dragging'); }

/* =============================================
   EVENT HANDLERS
   ============================================= */
function onDown(cx,cy,srcEl){
  const pt={x:cx,y:cy}, nG=srcEl.closest('.node-group');
  mdX=pt.x; mdY=pt.y;
  if(mode==='edge'&&nG){ dragId=+nG.dataset.id; dragging=true; const n=getNode(dragId); tmpLine=mkTmpLine(n.x,n.y,pt.x,pt.y); }
  else if(mode==='move'&&nG){ dragId=+nG.dataset.id; dragging=true; wrap.classList.add('dragging'); }
}
function onMove(cx,cy){
  if(!dragging) return;
  const pt={x:cx,y:cy};
  if(mode==='edge'&&tmpLine){ tmpLine.setAttribute('x2',pt.x); tmpLine.setAttribute('y2',pt.y); }
  else if(mode==='move'&&dragId!==null){ moveNode(dragId,pt.x,pt.y); }
}
function onUp(cx,cy,srcEl){
  const pt={x:cx,y:cy}, nG=srcEl.closest('.node-group');
  const isClick=Math.hypot(pt.x-mdX,pt.y-mdY)<DRAG_MIN;
  if(mode==='node'&&isClick&&!nG&&srcEl.closest('#canvas')) addNode(pt.x,pt.y);
  else if(mode==='edge'&&dragging&&nG){ const tid=+nG.dataset.id; if(tid!==dragId) addEdge(dragId,tid); }
  else if(mode==='move'&&dragging) onChange();
  else if(mode==='delete'&&isClick){
    if(nG) delNode(+nG.dataset.id);
    else if(srcEl.closest('#canvas')){ const ne=nearEdge(pt.x,pt.y); if(ne) delEdge(ne.id); }
  }
  cleanup();
}

svg.addEventListener('mousedown',e=>{ e.preventDefault(); const p=svgPt(e); onDown(p.x,p.y,e.target); });
document.addEventListener('mousemove',e=>{ if(!dragging) return; const p=svgPt(e); onMove(p.x,p.y); });
document.addEventListener('mouseup',e=>{ if(!dragging&&mode!=='node'&&mode!=='delete') return; const p=svgPt(e); onUp(p.x,p.y,e.target); });

svg.addEventListener('touchstart',e=>{ e.preventDefault(); const t=e.touches[0],r=svg.getBoundingClientRect();
  onDown(t.clientX-r.left,t.clientY-r.top,e.target); },{passive:false});
document.addEventListener('touchmove',e=>{ if(!dragging)return; e.preventDefault(); const t=e.touches[0],r=svg.getBoundingClientRect();
  onMove(t.clientX-r.left,t.clientY-r.top); },{passive:false});
document.addEventListener('touchend',e=>{ const t=e.changedTouches[0],r=svg.getBoundingClientRect();
  onUp(t.clientX-r.left,t.clientY-r.top,document.elementFromPoint(t.clientX,t.clientY)||svg); });

svg.addEventListener('contextmenu',e=>e.preventDefault());

/* ─── Toolbar ─── */
function setMode(m){
  mode=m;
  document.querySelectorAll('.tool-btn[data-mode]').forEach(b=>b.classList.toggle('active',b.dataset.mode===m));
  wrap.dataset.mode=m;
  const h={node:'Click anywhere to add a vertex',edge:'Drag from one vertex to another to connect',
    move:'Drag vertices to reposition them',delete:'Click a vertex or edge to remove it'};
  hint.textContent=h[m]||'';
}
document.querySelectorAll('.tool-btn[data-mode]').forEach(b=>b.addEventListener('click',()=>setMode(b.dataset.mode)));
document.getElementById('clearBtn').addEventListener('click',clearAll);
document.getElementById('prevChallenge').addEventListener('click',()=>{ curChallenge=(curChallenge-1+CHALLENGES.length)%CHALLENGES.length; updateChallengeUI(); });
document.getElementById('nextChallenge').addEventListener('click',()=>{ curChallenge=(curChallenge+1)%CHALLENGES.length; updateChallengeUI(); });

document.addEventListener('keydown',e=>{
  if(e.target.tagName==='INPUT'||e.target.tagName==='TEXTAREA') return;
  switch(e.key){ case'1':setMode('node');break; case'2':setMode('edge');break; case'3':setMode('move');break; case'4':setMode('delete');break; }
});

/* =============================================
   INIT
   ============================================= */
setMode('node');
updateChallengeUI();
updateClass();