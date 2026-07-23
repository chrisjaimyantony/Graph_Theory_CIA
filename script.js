/* =============================================
   MODULE DATA
   ============================================= */
const MODULES = [
  {
    id: 1,
    tag: "Module 01",
    title: "The Fundamentals",
    description: "Learn the foundational building blocks of graph theory — from the simplest null and trivial graphs to the essential distinction between directed and undirected structures.",
    // Replace null with your YouTube video ID string, e.g. "dQw4w9WgXcQ"
    videoId: "uY3xe3SAsY0",
    graphs: [
      {
        name: "Null Graph",
        definition: "A graph containing any number of vertices but absolutely no edges. Every vertex is completely isolated with no connections.",
        svg: `<svg viewBox="0 0 120 80"><circle cx="20" cy="28" r="3.5" fill="#00e5a0"/><circle cx="55" cy="55" r="3.5" fill="#00e5a0"/><circle cx="85" cy="22" r="3.5" fill="#00e5a0"/><circle cx="100" cy="58" r="3.5" fill="#00e5a0"/></svg>`
      },
      {
        name: "Trivial Graph",
        definition: "The simplest possible graph — exactly one vertex and no edges. It is both a null graph and a simple graph by definition.",
        svg: `<svg viewBox="0 0 120 80"><circle cx="60" cy="40" r="5" fill="#00e5a0"/></svg>`
      },
      {
        name: "Finite Graph",
        definition: "A graph where both the vertex set and the edge set contain a countable, limited number of elements.",
        svg: `<svg viewBox="0 0 120 80"><line x1="25" y1="20" x2="60" y2="14" stroke="#00e5a0" stroke-width="1.2" opacity="0.4"/><line x1="60" y1="14" x2="95" y2="24" stroke="#00e5a0" stroke-width="1.2" opacity="0.4"/><line x1="25" y1="20" x2="35" y2="55" stroke="#00e5a0" stroke-width="1.2" opacity="0.4"/><line x1="35" y1="55" x2="80" y2="50" stroke="#00e5a0" stroke-width="1.2" opacity="0.4"/><line x1="60" y1="14" x2="80" y2="50" stroke="#00e5a0" stroke-width="1.2" opacity="0.4"/><circle cx="25" cy="20" r="3.5" fill="#00e5a0"/><circle cx="60" cy="14" r="3.5" fill="#00e5a0"/><circle cx="95" cy="24" r="3.5" fill="#00e5a0"/><circle cx="35" cy="55" r="3.5" fill="#00e5a0"/><circle cx="80" cy="50" r="3.5" fill="#00e5a0"/></svg>`
      },
      {
        name: "Infinite Graph",
        definition: "A graph where at least one of the vertex set or edge set contains an infinite number of elements, extending without bound.",
        svg: `<svg viewBox="0 0 120 80"><line x1="12" y1="40" x2="34" y2="40" stroke="#00e5a0" stroke-width="1.2" opacity="0.4"/><line x1="34" y1="40" x2="56" y2="40" stroke="#00e5a0" stroke-width="1.2" opacity="0.4"/><line x1="56" y1="40" x2="78" y2="40" stroke="#00e5a0" stroke-width="1.2" opacity="0.4"/><circle cx="12" cy="40" r="3.5" fill="#00e5a0"/><circle cx="34" cy="40" r="3.5" fill="#00e5a0"/><circle cx="56" cy="40" r="3.5" fill="#00e5a0"/><circle cx="78" cy="40" r="3.5" fill="#00e5a0" opacity="0.5"/><circle cx="94" cy="40" r="2.5" fill="#00e5a0" opacity="0.3"/><circle cx="106" cy="40" r="1.5" fill="#00e5a0" opacity="0.15"/></svg>`
      },
      {
        name: "Simple Graph",
        definition: "A graph with no self-loops and at most one edge between any pair of vertices. The most commonly studied type of graph.",
        svg: `<svg viewBox="0 0 120 80"><line x1="25" y1="22" x2="95" y2="22" stroke="#00e5a0" stroke-width="1.2" opacity="0.4"/><line x1="25" y1="22" x2="25" y2="58" stroke="#00e5a0" stroke-width="1.2" opacity="0.4"/><line x1="95" y1="22" x2="95" y2="58" stroke="#00e5a0" stroke-width="1.2" opacity="0.4"/><circle cx="25" cy="22" r="3.5" fill="#00e5a0"/><circle cx="95" cy="22" r="3.5" fill="#00e5a0"/><circle cx="25" cy="58" r="3.5" fill="#00e5a0"/><circle cx="95" cy="58" r="3.5" fill="#00e5a0"/></svg>`
      },
      {
        name: "Undirected Graph",
        definition: "A graph where edges have no direction. The edge between A and B is identical to the edge between B and A — travel goes both ways.",
        svg: `<svg viewBox="0 0 120 80"><line x1="60" y1="12" x2="20" y2="62" stroke="#00e5a0" stroke-width="1.2" opacity="0.4"/><line x1="20" y1="62" x2="100" y2="62" stroke="#00e5a0" stroke-width="1.2" opacity="0.4"/><line x1="60" y1="12" x2="100" y2="62" stroke="#00e5a0" stroke-width="1.2" opacity="0.4"/><circle cx="60" cy="12" r="3.5" fill="#00e5a0"/><circle cx="20" cy="62" r="3.5" fill="#00e5a0"/><circle cx="100" cy="62" r="3.5" fill="#00e5a0"/></svg>`
      },
      {
        name: "Directed Graph",
        definition: "A graph (digraph) where every edge has a specific direction, pointing from a source vertex to a destination vertex.",
        svg: `<svg viewBox="0 0 120 80"><defs><marker id="arr7" viewBox="0 0 10 10" refX="10" refY="5" markerWidth="6" markerHeight="6" orient="auto"><path d="M0,1 L10,5 L0,9" fill="#00e5a0"/></marker></defs><line x1="22" y1="48" x2="50" y2="18" stroke="#00e5a0" stroke-width="1.2" opacity="0.4" marker-end="url(#arr7)"/><line x1="70" y1="18" x2="98" y2="48" stroke="#00e5a0" stroke-width="1.2" opacity="0.4" marker-end="url(#arr7)"/><line x1="88" y1="58" x2="32" y2="58" stroke="#00e5a0" stroke-width="1.2" opacity="0.4" marker-end="url(#arr7)"/><circle cx="22" cy="48" r="3.5" fill="#00e5a0"/><circle cx="60" cy="14" r="3.5" fill="#00e5a0"/><circle cx="98" cy="48" r="3.5" fill="#00e5a0"/></svg>`
      },
      {
        name: "Path Graph",
        definition: "A graph where all vertices are arranged in a single sequential chain, each connected only to its immediate neighbors. Denoted P\u2099.",
        svg: `<svg viewBox="0 0 120 80"><line x1="10" y1="40" x2="32" y2="40" stroke="#00e5a0" stroke-width="1.2" opacity="0.4"/><line x1="32" y1="40" x2="54" y2="40" stroke="#00e5a0" stroke-width="1.2" opacity="0.4"/><line x1="54" y1="40" x2="76" y2="40" stroke="#00e5a0" stroke-width="1.2" opacity="0.4"/><line x1="76" y1="40" x2="98" y2="40" stroke="#00e5a0" stroke-width="1.2" opacity="0.4"/><line x1="98" y1="40" x2="112" y2="40" stroke="#00e5a0" stroke-width="1.2" opacity="0.4"/><circle cx="10" cy="40" r="3.5" fill="#00e5a0"/><circle cx="32" cy="40" r="3.5" fill="#00e5a0"/><circle cx="54" cy="40" r="3.5" fill="#00e5a0"/><circle cx="76" cy="40" r="3.5" fill="#00e5a0"/><circle cx="98" cy="40" r="3.5" fill="#00e5a0"/><circle cx="112" cy="40" r="3.5" fill="#00e5a0"/></svg>`
      }
    ],
    quiz: [
      { question: "How many vertices does a null graph have?", options: ["Exactly 1", "Always 0", "Depends on the number of edges", "Any non-negative number, but always 0 edges"], answer: 3 },
      { question: "A trivial graph has exactly:", options: ["0 vertices and 0 edges", "1 vertex and 0 edges", "2 vertices and 1 edge", "1 vertex and 1 self-loop"], answer: 1 },
      { question: "What makes a graph \"infinite\"?", options: ["It looks too big to draw", "It has more than 1000 vertices", "At least one of its vertex or edge sets is infinite", "It has loops"], answer: 2 },
      { question: "True or False: A simple graph allows multiple edges between the same two vertices.", options: ["True", "False"], answer: 1 },
      { question: "In a directed graph, an edge from A to B means:", options: ["You can travel both ways between A and B", "You can only travel from A to B", "A and B are the same vertex", "The edge has a weight"], answer: 1 },
      { question: "True or False: In an undirected graph, the edge (A, B) is the same as (B, A).", options: ["True", "False"], answer: 0 },
      { question: "What is the main feature of a path graph?", options: ["Every vertex connects to every other vertex", "It contains cycles", "All vertices are connected in a single straight-line sequence", "It has self-loops"], answer: 2 },
      { question: "A path graph P\u2086 has how many edges?", options: ["6", "7", "5", "12"], answer: 2 },
      { question: "True or False: A null graph with 5 vertices has 0 edges.", options: ["True", "False"], answer: 0 },
      { question: "How is a directed graph different from an undirected graph?", options: ["Directed graphs have more vertices", "Undirected graphs always have weights", "Directed edges have direction; undirected edges do not", "There is no real difference"], answer: 2 },
      { question: "True or False: A trivial graph is also a null graph.", options: ["True", "False"], answer: 0 },
      { question: "Which graph type is best for representing one-way streets?", options: ["Undirected graph", "Null graph", "Directed graph", "Trivial graph"], answer: 2 }
    ]
  },
  {
    id: 2,
    tag: "Module 02",
    title: "Structure & Properties",
    description: "Explore how graphs connect and behave — understand connectivity, completeness, cycles, and the many ways edges can carry meaning through weights, multiplicity, and self-loops.",
    videoId: F6aXFnqwYkM,
    graphs: [
      {
        name: "Connected Graph",
        definition: "A graph where a path exists between every pair of vertices. The graph forms one single unbroken piece with no isolated parts.",
        svg: `<svg viewBox="0 0 120 80"><line x1="20" y1="18" x2="55" y2="10" stroke="#00e5a0" stroke-width="1.2" opacity="0.4"/><line x1="55" y1="10" x2="95" y2="22" stroke="#00e5a0" stroke-width="1.2" opacity="0.4"/><line x1="20" y1="18" x2="30" y2="55" stroke="#00e5a0" stroke-width="1.2" opacity="0.4"/><line x1="30" y1="55" x2="80" y2="52" stroke="#00e5a0" stroke-width="1.2" opacity="0.4"/><line x1="55" y1="10" x2="80" y2="52" stroke="#00e5a0" stroke-width="1.2" opacity="0.4"/><line x1="95" y1="22" x2="80" y2="52" stroke="#00e5a0" stroke-width="1.2" opacity="0.4"/><circle cx="20" cy="18" r="3.5" fill="#00e5a0"/><circle cx="55" cy="10" r="3.5" fill="#00e5a0"/><circle cx="95" cy="22" r="3.5" fill="#00e5a0"/><circle cx="30" cy="55" r="3.5" fill="#00e5a0"/><circle cx="80" cy="52" r="3.5" fill="#00e5a0"/></svg>`
      },
      {
        name: "Disconnected Graph",
        definition: "A graph containing at least two vertices with no path between them, forming two or more separate components.",
        svg: `<svg viewBox="0 0 120 80"><line x1="15" y1="28" x2="35" y2="15" stroke="#00e5a0" stroke-width="1.2" opacity="0.4"/><line x1="15" y1="28" x2="35" y2="52" stroke="#00e5a0" stroke-width="1.2" opacity="0.4"/><circle cx="15" cy="28" r="3.5" fill="#00e5a0"/><circle cx="35" cy="15" r="3.5" fill="#00e5a0"/><circle cx="35" cy="52" r="3.5" fill="#00e5a0"/><line x1="58" y1="38" x2="62" y2="38" stroke="#00e5a0" stroke-width="0.5" opacity="0.15" stroke-dasharray="2,2"/><line x1="78" y1="20" x2="105" y2="20" stroke="#00e5a0" stroke-width="1.2" opacity="0.4"/><line x1="105" y1="20" x2="95" y2="55" stroke="#00e5a0" stroke-width="1.2" opacity="0.4"/><circle cx="78" cy="20" r="3.5" fill="#00e5a0"/><circle cx="105" cy="20" r="3.5" fill="#00e5a0"/><circle cx="95" cy="55" r="3.5" fill="#00e5a0"/></svg>`
      },
      {
        name: "Complete Graph",
        definition: "A graph where every vertex has a direct edge to every other vertex. Denoted K\u2099 for n vertices. No pair is left unconnected.",
        svg: `<svg viewBox="0 0 120 80"><line x1="30" y1="18" x2="90" y2="18" stroke="#00e5a0" stroke-width="1.2" opacity="0.4"/><line x1="30" y1="18" x2="30" y2="58" stroke="#00e5a0" stroke-width="1.2" opacity="0.4"/><line x1="30" y1="18" x2="90" y2="58" stroke="#00e5a0" stroke-width="1.2" opacity="0.4"/><line x1="90" y1="18" x2="90" y2="58" stroke="#00e5a0" stroke-width="1.2" opacity="0.4"/><line x1="90" y1="18" x2="30" y2="58" stroke="#00e5a0" stroke-width="1.2" opacity="0.4"/><line x1="30" y1="58" x2="90" y2="58" stroke="#00e5a0" stroke-width="1.2" opacity="0.4"/><circle cx="30" cy="18" r="3.5" fill="#00e5a0"/><circle cx="90" cy="18" r="3.5" fill="#00e5a0"/><circle cx="30" cy="58" r="3.5" fill="#00e5a0"/><circle cx="90" cy="58" r="3.5" fill="#00e5a0"/></svg>`
      },
      {
        name: "Regular Graph",
        definition: "A graph where every vertex has exactly the same degree (number of connected edges). A 3-regular graph is also called cubic.",
        svg: `<svg viewBox="0 0 120 80"><line x1="30" y1="18" x2="90" y2="18" stroke="#00e5a0" stroke-width="1.2" opacity="0.4"/><line x1="90" y1="18" x2="90" y2="58" stroke="#00e5a0" stroke-width="1.2" opacity="0.4"/><line x1="90" y1="58" x2="30" y2="58" stroke="#00e5a0" stroke-width="1.2" opacity="0.4"/><line x1="30" y1="58" x2="30" y2="18" stroke="#00e5a0" stroke-width="1.2" opacity="0.4"/><circle cx="30" cy="18" r="3.5" fill="#00e5a0"/><circle cx="90" cy="18" r="3.5" fill="#00e5a0"/><circle cx="90" cy="58" r="3.5" fill="#00e5a0"/><circle cx="30" cy="58" r="3.5" fill="#00e5a0"/></svg>`
      },
      {
        name: "Cyclic Graph",
        definition: "A graph that contains at least one cycle — a closed path that starts and ends at the same vertex without repeating edges.",
        svg: `<svg viewBox="0 0 120 80"><line x1="60" y1="12" x2="20" y2="62" stroke="#00e5a0" stroke-width="1.2" opacity="0.4"/><line x1="20" y1="62" x2="100" y2="62" stroke="#00e5a0" stroke-width="1.2" opacity="0.4"/><line x1="100" y1="62" x2="60" y2="12" stroke="#00e5a0" stroke-width="1.2" opacity="0.4"/><circle cx="60" cy="12" r="3.5" fill="#00e5a0"/><circle cx="20" cy="62" r="3.5" fill="#00e5a0"/><circle cx="100" cy="62" r="3.5" fill="#00e5a0"/></svg>`
      },
      {
        name: "Acyclic Graph",
        definition: "A graph that contains no cycles whatsoever. Trees are the most common type of acyclic graph — every path is one-directional.",
        svg: `<svg viewBox="0 0 120 80"><line x1="60" y1="10" x2="30" y2="35" stroke="#00e5a0" stroke-width="1.2" opacity="0.4"/><line x1="60" y1="10" x2="90" y2="35" stroke="#00e5a0" stroke-width="1.2" opacity="0.4"/><line x1="30" y1="35" x2="15" y2="60" stroke="#00e5a0" stroke-width="1.2" opacity="0.4"/><line x1="30" y1="35" x2="45" y2="60" stroke="#00e5a0" stroke-width="1.2" opacity="0.4"/><line x1="90" y1="35" x2="75" y2="60" stroke="#00e5a0" stroke-width="1.2" opacity="0.4"/><line x1="90" y1="35" x2="105" y2="60" stroke="#00e5a0" stroke-width="1.2" opacity="0.4"/><circle cx="60" cy="10" r="3.5" fill="#00e5a0"/><circle cx="30" cy="35" r="3.5" fill="#00e5a0"/><circle cx="90" cy="35" r="3.5" fill="#00e5a0"/><circle cx="15" cy="60" r="3.5" fill="#00e5a0"/><circle cx="45" cy="60" r="3.5" fill="#00e5a0"/><circle cx="75" cy="60" r="3.5" fill="#00e5a0"/><circle cx="105" cy="60" r="3.5" fill="#00e5a0"/></svg>`
      },
      {
        name: "Weighted Graph",
        definition: "A graph where each edge carries a numerical value (weight) representing cost, distance, time, or capacity.",
        svg: `<svg viewBox="0 0 120 80"><line x1="20" y1="22" x2="100" y2="22" stroke="#00e5a0" stroke-width="1.2" opacity="0.4"/><line x1="100" y1="22" x2="60" y2="65" stroke="#00e5a0" stroke-width="1.2" opacity="0.4"/><line x1="20" y1="22" x2="60" y2="65" stroke="#00e5a0" stroke-width="1.2" opacity="0.4"/><text x="60" y="16" fill="#00e5a0" font-size="10" text-anchor="middle" font-family="IBM Plex Mono, monospace" opacity="0.85">5</text><text x="87" y="48" fill="#00e5a0" font-size="10" text-anchor="middle" font-family="IBM Plex Mono, monospace" opacity="0.85">3</text><text x="33" y="48" fill="#00e5a0" font-size="10" text-anchor="middle" font-family="IBM Plex Mono, monospace" opacity="0.85">7</text><circle cx="20" cy="22" r="3.5" fill="#00e5a0"/><circle cx="100" cy="22" r="3.5" fill="#00e5a0"/><circle cx="60" cy="65" r="3.5" fill="#00e5a0"/></svg>`
      },
      {
        name: "Multi-Graph",
        definition: "A graph that permits multiple edges between the same pair of vertices, but does not allow self-loops on any vertex.",
        svg: `<svg viewBox="0 0 120 80"><path d="M30,40 C50,12 70,12 90,40" fill="none" stroke="#00e5a0" stroke-width="1.2" opacity="0.4"/><path d="M30,40 L90,40" fill="none" stroke="#00e5a0" stroke-width="1.2" opacity="0.4"/><path d="M30,40 C50,68 70,68 90,40" fill="none" stroke="#00e5a0" stroke-width="1.2" opacity="0.4"/><circle cx="30" cy="40" r="4" fill="#00e5a0"/><circle cx="90" cy="40" r="4" fill="#00e5a0"/></svg>`
      },
      {
        name: "Pseudo Graph",
        definition: "A graph that permits both multiple edges between the same pair of vertices and self-loops on individual vertices.",
        svg: `<svg viewBox="0 0 120 80"><path d="M32,38 C32,20 48,20 48,38" fill="none" stroke="#00e5a0" stroke-width="1.2" opacity="0.4"/><path d="M34,45 C50,28 70,28 86,45" fill="none" stroke="#00e5a0" stroke-width="1.2" opacity="0.4"/><path d="M34,45 C50,62 70,62 86,45" fill="none" stroke="#00e5a0" stroke-width="1.2" opacity="0.4"/><circle cx="30" cy="45" r="4" fill="#00e5a0"/><circle cx="90" cy="45" r="4" fill="#00e5a0"/></svg>`
      }
    ],
    quiz: [
      { question: "What does it mean for a graph to be \"connected\"?", options: ["Every vertex has the same degree", "All edges have weights", "You can reach any vertex from any other vertex through some path", "The graph has no edges"], answer: 2 },
      { question: "True or False: A disconnected graph has at least two separate parts not connected to each other.", options: ["True", "False"], answer: 0 },
      { question: "In a complete graph K\u2085, each vertex is connected to:", options: ["2 other vertices", "4 other vertices", "3 other vertices", "5 other vertices"], answer: 1 },
      { question: "What does \"3-regular graph\" mean?", options: ["The graph has exactly 3 vertices", "The graph has exactly 3 edges", "Every vertex has exactly degree 3", "The graph has 3 cycles"], answer: 2 },
      { question: "An acyclic graph is a graph that:", options: ["Has exactly one cycle", "Has many cycles", "Has self-loops", "Has no cycles at all"], answer: 3 },
      { question: "In a weighted graph, what do the numbers on edges represent?", options: ["Direction of travel", "Color coding", "A value like distance, cost, or time", "The number of vertices"], answer: 2 },
      { question: "What is a multi-graph?", options: ["A graph with multiple vertices", "A graph drawn on multiple pages", "A graph with weights on edges", "A graph that allows more than one edge between the same pair of vertices"], answer: 3 },
      { question: "How is a pseudo-graph different from a multi-graph?", options: ["They are exactly the same", "A pseudo-graph allows self-loops; a multi-graph does not", "A multi-graph allows self-loops; a pseudo-graph does not", "A pseudo-graph has no edges"], answer: 1 },
      { question: "A cyclic graph must contain:", options: ["Self-loops", "An even number of vertices", "All vertices of equal degree", "At least one closed path (cycle)"], answer: 3 },
      { question: "True or False: Every complete graph is also a regular graph.", options: ["True", "False"], answer: 0 },
      { question: "How many edges are in a complete graph with 6 vertices (K\u2086)?", options: ["6", "12", "36", "15"], answer: 3 },
      { question: "A graph that is both connected and acyclic is called:", options: ["A complete graph", "A regular graph", "A tree", "A wheel graph"], answer: 2 }
    ]
  },
  {
    id: 3,
    tag: "Module 03",
    title: "Advanced & Specialized",
    description: "Dive into specialized graph types that power everything from network design to computer architecture — bipartite graphs, planarity, and beyond.",
    videoId: "UWMpqhL6tbk",
    graphs: [
      {
        name: "Bipartite Graph",
        definition: "A graph whose vertices can be split into two disjoint sets, with every edge connecting a vertex from one set to a vertex in the other — never within the same set.",
        svg: `<svg viewBox="0 0 120 80"><line x1="25" y1="18" x2="88" y2="22" stroke="#00e5a0" stroke-width="1.2" opacity="0.4"/><line x1="25" y1="18" x2="88" y2="50" stroke="#00e5a0" stroke-width="1.2" opacity="0.4"/><line x1="25" y1="48" x2="88" y2="22" stroke="#00e5a0" stroke-width="1.2" opacity="0.4"/><line x1="25" y1="48" x2="88" y2="65" stroke="#00e5a0" stroke-width="1.2" opacity="0.4"/><line x1="25" y1="68" x2="88" y2="50" stroke="#00e5a0" stroke-width="1.2" opacity="0.4"/><circle cx="25" cy="18" r="3.5" fill="#00e5a0"/><circle cx="25" cy="48" r="3.5" fill="#00e5a0"/><circle cx="25" cy="68" r="3.5" fill="#00e5a0"/><circle cx="88" cy="22" r="3.5" fill="#00e5a0"/><circle cx="88" cy="50" r="3.5" fill="#00e5a0"/><circle cx="88" cy="65" r="3.5" fill="#00e5a0"/></svg>`
      },
      {
        name: "Complete Bipartite Graph",
        definition: "A bipartite graph where every vertex in one set connects to every vertex in the other set. Denoted K\u2098\u2099. Nothing is left unconnected between the two groups.",
        svg: `<svg viewBox="0 0 120 80"><line x1="30" y1="25" x2="82" y2="15" stroke="#00e5a0" stroke-width="1.2" opacity="0.4"/><line x1="30" y1="25" x2="82" y2="42" stroke="#00e5a0" stroke-width="1.2" opacity="0.4"/><line x1="30" y1="25" x2="82" y2="65" stroke="#00e5a0" stroke-width="1.2" opacity="0.4"/><line x1="30" y1="60" x2="82" y2="15" stroke="#00e5a0" stroke-width="1.2" opacity="0.4"/><line x1="30" y1="60" x2="82" y2="42" stroke="#00e5a0" stroke-width="1.2" opacity="0.4"/><line x1="30" y1="60" x2="82" y2="65" stroke="#00e5a0" stroke-width="1.2" opacity="0.4"/><circle cx="30" cy="25" r="3.5" fill="#00e5a0"/><circle cx="30" cy="60" r="3.5" fill="#00e5a0"/><circle cx="82" cy="15" r="3.5" fill="#00e5a0"/><circle cx="82" cy="42" r="3.5" fill="#00e5a0"/><circle cx="82" cy="65" r="3.5" fill="#00e5a0"/></svg>`
      },
      {
        name: "Planar Graph",
        definition: "A graph that can be drawn on a flat surface without any edges crossing each other. It divides the plane into distinct regions called faces.",
        svg: `<svg viewBox="0 0 120 80"><line x1="60" y1="8" x2="12" y2="68" stroke="#00e5a0" stroke-width="1.2" opacity="0.4"/><line x1="60" y1="8" x2="108" y2="68" stroke="#00e5a0" stroke-width="1.2" opacity="0.4"/><line x1="12" y1="68" x2="108" y2="68" stroke="#00e5a0" stroke-width="1.2" opacity="0.4"/><line x1="60" y1="42" x2="60" y2="8" stroke="#00e5a0" stroke-width="1.2" opacity="0.4"/><line x1="60" y1="42" x2="12" y2="68" stroke="#00e5a0" stroke-width="1.2" opacity="0.4"/><line x1="60" y1="42" x2="108" y2="68" stroke="#00e5a0" stroke-width="1.2" opacity="0.4"/><circle cx="60" cy="8" r="3.5" fill="#00e5a0"/><circle cx="12" cy="68" r="3.5" fill="#00e5a0"/><circle cx="108" cy="68" r="3.5" fill="#00e5a0"/><circle cx="60" cy="42" r="3.5" fill="#00e5a0"/></svg>`
      },
      {
        name: "Non-Planar Graph",
        definition: "A graph that cannot be drawn on a flat surface without at least two edges crossing. K\u2085 and K\u2083\u2083 are the classic non-planar examples.",
        svg: `<svg viewBox="0 0 120 80"><line x1="60" y1="8" x2="18" y2="30" stroke="#00e5a0" stroke-width="1.2" opacity="0.4"/><line x1="60" y1="8" x2="102" y2="30" stroke="#00e5a0" stroke-width="1.2" opacity="0.4"/><line x1="60" y1="8" x2="32" y2="68" stroke="#00e5a0" stroke-width="1.2" opacity="0.4"/><line x1="60" y1="8" x2="88" y2="68" stroke="#00e5a0" stroke-width="1.2" opacity="0.4"/><line x1="18" y1="30" x2="102" y2="30" stroke="#00e5a0" stroke-width="1.2" opacity="0.4"/><line x1="18" y1="30" x2="32" y2="68" stroke="#00e5a0" stroke-width="1.2" opacity="0.4"/><line x1="18" y1="30" x2="88" y2="68" stroke="#00e5a0" stroke-width="1.2" opacity="0.4"/><line x1="102" y1="30" x2="32" y2="68" stroke="#00e5a0" stroke-width="1.2" opacity="0.4"/><line x1="102" y1="30" x2="88" y2="68" stroke="#00e5a0" stroke-width="1.2" opacity="0.4"/><line x1="32" y1="68" x2="88" y2="68" stroke="#00e5a0" stroke-width="1.2" opacity="0.4"/><circle cx="60" cy="8" r="3.5" fill="#00e5a0"/><circle cx="18" cy="30" r="3.5" fill="#00e5a0"/><circle cx="102" cy="30" r="3.5" fill="#00e5a0"/><circle cx="32" cy="68" r="3.5" fill="#00e5a0"/><circle cx="88" cy="68" r="3.5" fill="#00e5a0"/></svg>`
      },
      {
        name: "Wheel Graph",
        definition: "A graph formed by connecting a single central vertex to every vertex of a cycle. Denoted W\u2099, it looks exactly like a spoke wheel.",
        svg: `<svg viewBox="0 0 120 80"><line x1="60" y1="10" x2="90" y2="26" stroke="#00e5a0" stroke-width="1.2" opacity="0.4"/><line x1="90" y1="26" x2="82" y2="60" stroke="#00e5a0" stroke-width="1.2" opacity="0.4"/><line x1="82" y1="60" x2="38" y2="60" stroke="#00e5a0" stroke-width="1.2" opacity="0.4"/><line x1="38" y1="60" x2="30" y2="26" stroke="#00e5a0" stroke-width="1.2" opacity="0.4"/><line x1="30" y1="26" x2="60" y2="10" stroke="#00e5a0" stroke-width="1.2" opacity="0.4"/><line x1="60" y1="40" x2="60" y2="10" stroke="#00e5a0" stroke-width="1.2" opacity="0.4"/><line x1="60" y1="40" x2="90" y2="26" stroke="#00e5a0" stroke-width="1.2" opacity="0.4"/><line x1="60" y1="40" x2="82" y2="60" stroke="#00e5a0" stroke-width="1.2" opacity="0.4"/><line x1="60" y1="40" x2="38" y2="60" stroke="#00e5a0" stroke-width="1.2" opacity="0.4"/><line x1="60" y1="40" x2="30" y2="26" stroke="#00e5a0" stroke-width="1.2" opacity="0.4"/><circle cx="60" cy="40" r="4" fill="#00e5a0"/><circle cx="60" cy="10" r="3.5" fill="#00e5a0"/><circle cx="90" cy="26" r="3.5" fill="#00e5a0"/><circle cx="82" cy="60" r="3.5" fill="#00e5a0"/><circle cx="38" cy="60" r="3.5" fill="#00e5a0"/><circle cx="30" cy="26" r="3.5" fill="#00e5a0"/></svg>`
      },
      {
        name: "Hypercube Graph",
        definition: "An n-dimensional cube graph whose vertices represent all binary strings of length n, with edges between strings differing in exactly one bit. Denoted Q\u2099.",
        svg: `<svg viewBox="0 0 120 80"><line x1="20" y1="20" x2="58" y2="20" stroke="#00e5a0" stroke-width="1.2" opacity="0.4"/><line x1="58" y1="20" x2="58" y2="58" stroke="#00e5a0" stroke-width="1.2" opacity="0.4"/><line x1="58" y1="58" x2="20" y2="58" stroke="#00e5a0" stroke-width="1.2" opacity="0.4"/><line x1="20" y1="58" x2="20" y2="20" stroke="#00e5a0" stroke-width="1.2" opacity="0.4"/><line x1="38" y1="10" x2="78" y2="10" stroke="#00e5a0" stroke-width="1.2" opacity="0.22"/><line x1="78" y1="10" x2="78" y2="48" stroke="#00e5a0" stroke-width="1.2" opacity="0.22"/><line x1="78" y1="48" x2="38" y2="48" stroke="#00e5a0" stroke-width="1.2" opacity="0.22"/><line x1="38" y1="48" x2="38" y2="10" stroke="#00e5a0" stroke-width="1.2" opacity="0.22"/><line x1="20" y1="20" x2="38" y2="10" stroke="#00e5a0" stroke-width="1.2" opacity="0.28"/><line x1="58" y1="20" x2="78" y2="10" stroke="#00e5a0" stroke-width="1.2" opacity="0.28"/><line x1="58" y1="58" x2="78" y2="48" stroke="#00e5a0" stroke-width="1.2" opacity="0.28"/><line x1="20" y1="58" x2="38" y2="48" stroke="#00e5a0" stroke-width="1.2" opacity="0.28"/><circle cx="20" cy="20" r="3" fill="#00e5a0"/><circle cx="58" cy="20" r="3" fill="#00e5a0"/><circle cx="58" cy="58" r="3" fill="#00e5a0"/><circle cx="20" cy="58" r="3" fill="#00e5a0"/><circle cx="38" cy="10" r="3" fill="#00e5a0" opacity="0.5"/><circle cx="78" cy="10" r="3" fill="#00e5a0" opacity="0.5"/><circle cx="78" cy="48" r="3" fill="#00e5a0" opacity="0.5"/><circle cx="38" cy="48" r="3" fill="#00e5a0" opacity="0.5"/></svg>`
      }
    ],
    quiz: [
      { question: "What defines a bipartite graph?", options: ["Every vertex has the same degree", "The graph has no edges", "Vertices split into two groups with edges only between groups, never within", "The graph is always complete"], answer: 2 },
      { question: "True or False: Every complete bipartite graph is also a bipartite graph.", options: ["True", "False"], answer: 0 },
      { question: "In K\u2083\u2083, how many edges are there?", options: ["6", "9", "12", "18"], answer: 1 },
      { question: "What does it mean for a graph to be planar?", options: ["It has no cycles", "It is bipartite", "It can be drawn on a flat surface without edges crossing", "It has equal vertices and edges"], answer: 2 },
      { question: "True or False: K\u2085 (complete graph with 5 vertices) is planar.", options: ["True", "False"], answer: 1 },
      { question: "K\u2083\u2083 is:", options: ["Planar", "Non-planar", "A tree", "A null graph"], answer: 1 },
      { question: "A wheel graph is made up of:", options: ["Only isolated vertices", "A complete graph", "A cycle with one extra central vertex connected to every vertex on the cycle", "Two separate paths"], answer: 2 },
      { question: "True or False: A hypercube Q\u2083 has 8 vertices.", options: ["True", "False"], answer: 0 },
      { question: "A hypercube Q\u2099 has how many vertices?", options: ["n", "2n", "2\u207F", "n\u00B2"], answer: 2 },
      { question: "True or False: Every tree is a planar graph.", options: ["True", "False"], answer: 0 },
      { question: "How many edges does a wheel graph W\u2086 have (6 total vertices)?", options: ["6", "10", "12", "15"], answer: 1 },
      { question: "A hypercube Q\u2083 looks like:", options: ["A square", "A cube", "A triangle", "A star"], answer: 1 }
    ]
  }
];

/* =============================================
   STATE & DOM REFS
   ============================================= */
let activeModule = 0;
const sidebar = document.getElementById('sidebar');
const navList = document.getElementById('navList');
const mainContent = document.getElementById('mainContent');
const menuToggle = document.getElementById('menuToggle');
const overlay = document.getElementById('overlay');

/* =============================================
   RENDERING
   ============================================= */
function renderNav() {
  navList.innerHTML = MODULES.map((mod, i) => `
    <div class="nav-item${i === 0 ? ' active' : ''}" data-index="${i}">
      <span class="nav-number">${String(i + 1).padStart(2, '0')}</span>
      <div class="nav-info">
        <h3>${mod.title}</h3>
        <p>${mod.graphs.length} concepts</p>
      </div>
    </div>
  `).join('');
}

function renderModule(index) {
  const mod = MODULES[index];
  const nextMod = MODULES[index + 1];

  const videoHTML = mod.videoId
    ? `<div class="video-wrapper"><iframe src="https://www.youtube.com/embed/${mod.videoId}" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen loading="lazy"></iframe></div>`
    : `<div class="video-placeholder">
         <div class="play-icon">&#9654;</div>
         <p>Video will appear here</p>
         <p class="small">Set videoId in script.js &rarr; Module ${mod.id}</p>
       </div>`;

  const cardsHTML = mod.graphs.map(g => `
    <div class="graph-card">
      <div class="card-svg">${g.svg}</div>
      <h3 class="card-name">${g.name}</h3>
      <p class="card-definition">${g.definition}</p>
    </div>
  `).join('');

  const quizHTML = mod.quiz.map((q, qi) => `
    <div class="quiz-question" data-question="${qi}">
      <p class="question-text">
        <span class="question-number">Q${qi + 1}.</span>${q.question}
      </p>
      <div class="options-list">
        ${q.options.map((opt, oi) => `
          <div class="option-item" data-option="${oi}">
            <input type="radio" name="m${mod.id}-q${qi}" id="m${mod.id}-q${qi}-o${oi}" value="${oi}">
            <label for="m${mod.id}-q${qi}-o${oi}">${opt}</label>
          </div>
        `).join('')}
      </div>
    </div>
  `).join('');

  const nextHTML = nextMod
    ? `<div class="module-next">
         <button class="btn btn-outline" onclick="switchModule(${index + 1})">
           Next: ${nextMod.title} &rarr;
         </button>
       </div>`
    : '';

  mainContent.innerHTML = `
    <section class="module-section">
      <header class="module-header">
        <span class="module-tag">${mod.tag}</span>
        <h1 class="module-title">${mod.title}</h1>
        <p class="module-description">${mod.description}</p>
      </header>

      <div class="video-section">
        <div class="section-label"><span>Watch</span></div>
        ${videoHTML}
      </div>

      <div class="cards-section">
        <div class="section-label"><span>Key Concepts</span></div>
        <div class="cards-grid">${cardsHTML}</div>
      </div>

      <div class="quiz-section">
        <div class="section-label"><span>Knowledge Check</span></div>
        <div class="quiz-container" id="quiz-${mod.id}">
          ${quizHTML}
          <div class="quiz-actions">
            <button class="btn btn-primary" id="submit-${mod.id}">Submit Quiz</button>
            <button class="btn btn-outline" id="retake-${mod.id}" style="display:none">Retake Quiz</button>
          </div>
          <div class="quiz-result" id="result-${mod.id}">
            <span class="result-score" id="score-${mod.id}"></span>
            <span class="result-text" id="score-text-${mod.id}"></span>
          </div>
        </div>
      </div>

      ${nextHTML}
    </section>
  `;

  mainContent.scrollTop = 0;

  // Attach quiz event listeners
  document.getElementById(`submit-${mod.id}`).addEventListener('click', () => submitQuiz(mod.id));
  document.getElementById(`retake-${mod.id}`).addEventListener('click', () => retakeQuiz(mod.id));
}

/* =============================================
   NAVIGATION
   ============================================= */
function switchModule(index) {
  if (index === activeModule) return;
  activeModule = index;

  document.querySelectorAll('.nav-item').forEach((el, i) => {
    el.classList.toggle('active', i === index);
  });

  renderModule(index);
  closeMobileMenu();
}

/* =============================================
   QUIZ LOGIC
   ============================================= */
function submitQuiz(moduleId) {
  const mod = MODULES.find(m => m.id === moduleId);
  const container = document.getElementById(`quiz-${moduleId}`);
  if (!container || container.classList.contains('quiz-submitted')) return;

  let score = 0;

  mod.quiz.forEach((q, qi) => {
    const selected = container.querySelector(`input[name="m${moduleId}-q${qi}"]:checked`);
    const questionDiv = container.querySelector(`[data-question="${qi}"]`);
    const options = questionDiv.querySelectorAll('.option-item');

    // Always highlight the correct answer
    options[q.answer].classList.add('correct');

    if (selected) {
      const val = parseInt(selected.value);
      if (val === q.answer) {
        score++;
      } else {
        options[val].classList.add('selected-wrong');
      }
    }
  });

  container.classList.add('quiz-submitted');
  container.querySelectorAll('input').forEach(inp => inp.disabled = true);

  // Show score
  const pct = Math.round((score / mod.quiz.length) * 100);
  document.getElementById(`score-${moduleId}`).textContent = `${score}/${mod.quiz.length}`;
  let msg = `<strong>Keep learning!</strong> You scored ${pct}%.`;
  if (pct >= 80) msg = `<strong>Excellent!</strong> You scored ${pct}%.`;
  else if (pct >= 60) msg = `<strong>Good effort!</strong> You scored ${pct}%.`;
  document.getElementById(`score-text-${moduleId}`).innerHTML = msg;
  document.getElementById(`result-${moduleId}`).classList.add('show');

  document.getElementById(`retake-${moduleId}`).style.display = 'inline-block';
}

function retakeQuiz(moduleId) {
  const container = document.getElementById(`quiz-${moduleId}`);
  if (!container) return;

  container.classList.remove('quiz-submitted');
  container.querySelectorAll('input').forEach(inp => {
    inp.disabled = false;
    inp.checked = false;
  });
  container.querySelectorAll('.option-item').forEach(el => {
    el.classList.remove('correct', 'selected-wrong');
  });

  document.getElementById(`result-${moduleId}`).classList.remove('show');
  document.getElementById(`retake-${moduleId}`).style.display = 'none';

  container.scrollIntoView({ behavior: 'smooth', block: 'start' });
}

/* =============================================
   MOBILE MENU
   ============================================= */
function toggleMobile() {
  sidebar.classList.toggle('open');
  overlay.classList.toggle('show');
}

function closeMobileMenu() {
  sidebar.classList.remove('open');
  overlay.classList.remove('show');
}

/* =============================================
   INIT
   ============================================= */
function init() {
  renderNav();
  renderModule(0);

  navList.addEventListener('click', e => {
    const item = e.target.closest('.nav-item');
    if (item) switchModule(parseInt(item.dataset.index));
  });

  menuToggle.addEventListener('click', toggleMobile);
  overlay.addEventListener('click', closeMobileMenu);
}

document.addEventListener('DOMContentLoaded', init);