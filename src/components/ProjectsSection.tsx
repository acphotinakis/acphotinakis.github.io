/**
 * Interfaces defining the project data structure
 */
interface ProjectMetadata {
  title: string;
  repositoryType: string;
  authors: string[];
  affiliation: string;
  year: string | number;
  format: string;
  primaryDomains: string[];
}

interface ProjectComponent {
  name: string;
  category: string;
  problemAddressed: string;
  keyMechanisms: string[];
  keyTakeaway: string;
}

interface TechnicalThemes {
  scheduling: string;
  elasticity: string;
  faultToleranceResilience: string;
  parallelismModel: string;
  cloudAssumptionsChallenged: string;
}

interface Technologies {
  programmingModels: string[];
  systemConcepts: string[];
  hardwareContext: string;
  workloadType: string;
}

interface Audience {
  intendedUse: string;
  targetAudience: string;
}

interface ProjectLinks {
  repository: string;
  paper?: string;
}

interface Project {
  metadata: ProjectMetadata;
  highLevelDescription: string;
  problemSpace: string[];
  coreContributions: string[];
  components: ProjectComponent[];
  technicalThemes: TechnicalThemes;
  technologies: Technologies;
  audience: Audience;
  keywords: string[];
  citation?: string;
  links: ProjectLinks;
  notes: string[];
}


export const codingProjects: Project[] = [
  {
    metadata: {
      title:"Aegis-Nexus Platform",
      repositoryType:"Software System / Research Artifact",
      authors: ["Andrew Photinakis"],
      affiliation:"Rochester Institute of Technology (RIT)",
      year: 2025,
      format:"Multi-module Maven project / Technical Report",
      primaryDomains: ["Secure Data Handling","Game Platforms","NoSQL Security"]
    },
    highLevelDescription:"A platform for managing video games and social interactions with a focus on secure data handling, fine-grained access control in NoSQL, and user analytics.",
    problemSpace: [
     "Managing secure data handling in NoSQL-based game platforms.",
     "Addressing privacy and integrity for sensitive user info and social interactions.",
     "Reducing resource waste and latency in cloud environments via application-aware design."
    ],
    coreContributions: [
     "Implementation of Attribute-Based Encryption (ABE) for policy-based data access.",
     "Modular architecture separating backend services, synthetic data generation, and UI.",
     "Field-level encryption for sensitive PII using AES-256-GCM.",
     "Integration of secure session management and RBAC."
    ],
    components: [
      {
        name:"pixel_backend",
        category:"Core Backend Service",
        problemAddressed:"Secure management of game entities and user data through REST APIs.",
        keyMechanisms: ["Spring Boot 3.x","Spring Security","MongoDB","Attribute-Based Encryption (ABE)"],
        keyTakeaway:"Centralizes enterprise-grade security and access control for the platform."
      },
      {
        name:"pixel_data_generator",
        category:"Data Generation & Simulation",
        problemAddressed:"Creating realistic, secure synthetic datasets for testing.",
        keyMechanisms: ["JavaFaker","PBKDF2-HMAC-SHA256","AES-256-GCM"],
        keyTakeaway:"Facilitates secure development environments without using real user data."
      },
      {
        name:"pixel_frontend",
        category:"Web Application Runtime",
        problemAddressed:"User interface for game discovery and profile management.",
        keyMechanisms: ["React","TypeScript","Vite","TanStack Query","shaden/ui"],
        keyTakeaway:"Delivers a modular, component-based UI that interacts securely with backend services."
      }
    ],
    technicalThemes: {
      scheduling:"Not explicitly detailed in README.",
      elasticity:"Discussed as 'elastic-native' design in reports.",
      faultToleranceResilience:"Handled via global exception handling and persistent session management.",
      parallelismModel:"Hybrid parallelism for scale-resilience.",
      cloudAssumptionsChallenged:"Moves away from POSIX-legacy interfaces toward application-aware designs."
    },
    technologies: {
      programmingModels: ["Component-Based Architecture (React)","RESTful API design (Spring Boot)"],
      systemConcepts: ["Attribute-Based Encryption (ABE)","Role-Based Access Control (RBAC)","Field-Level Encryption"],
      hardwareContext:"Designed for heterogeneous cloud environments.",
      workloadType:"Multi-tenant game platform with social interactions and analytics."
    },
    audience: {
      intendedUse:"Research and Advanced Systems Engineering.",
      targetAudience:"Developers interested in secure NoSQL architectures and cloud-native designers."
    },
    keywords: ["spring-boot","react","mongodb","attribute-based-encryption","nosql-security","java","typescript","secure-data-handling","cloud-native","game-platform"],
    citation:"@techreport { photinakis2025aegisnexus, title { Aegis-Nexus: Layered Privacy and Access Control for NoSQL Game Platforms}, author = { Photinakis, Andrew}, institution = { Rochester Institute of Technology}, year = {2025} }",
    links: {
      repository:"https://github.com/acphotinakis/Aegis-Nexus",
      paper:"Technical Report PDF"
    },
    notes: [
     "Data generator automatically drops existing MongoDB databases on startup.",
     "Session-based authentication requires specific environment variables (MONGO_URI, ENCRYPTION_KEY)."
    ]
  },
  {
    metadata: {
      title:"SBMPI: Parallelizing Blockchain Computations via Sharding",
      repositoryType:"Research Artifact / Software System",
      authors: ["Andrew Photinakis","Caleb Talbott"],
      affiliation:"Rochester Institute of Technology (RIT)",
      year: 2025,
      format:"C++/MPI implementation and research report",
      primaryDomains: ["Parallel Computing","Distributed Systems","Blockchain"]
    },
    highLevelDescription:"A high-performance C++/MPI simulation of a sharded blockchain network utilizing PBFT consensus to achieve horizontal scalability.",
    problemSpace: [
     "Critical scalability bottlenecks in traditional blockchain architectures.",
     "Transaction throughput limitations and high latency."
    ],
    coreContributions: [
     "Developed a parallel blockchain algorithm using Sharding and MPI.",
     "Demonstrated near-linear throughput scaling with shard count.",
     "Integrated OpenMP for multi-threaded signature verification within nodes.",
     "Implemented a tiered consensus environment with independent committees."
    ],
    components: [
      {
        name:"SBMPI (Sharded Blockchain MPI)",
        category:"Distributed Consensus System",
        problemAddressed:"Sequential processing bottlenecks in blockchain consensus.",
        keyMechanisms: ["Sharding","PBFT (Pre-Prepare, Prepare, Commit phases)","MPI-based message passing"],
        keyTakeaway:"Parallel sharding enables horizontal scalability and significant TPS improvements."
      }
    ],
    technicalThemes: {
      scheduling:"Distribution of transaction partitions by root process (Rank 0) to Shard Leaders.",
      elasticity:"Not explicitly stated.",
      faultToleranceResilience:"Practical Byzantine Fault Tolerance (PBFT) for intra-shard agreement.",
      parallelismModel:"MPI for inter-node communication and OpenMP for intra-node threading.",
      cloudAssumptionsChallenged:"Not explicitly stated."
    },
    technologies: {
      programmingModels: ["MPI (Message Passing Interface)","OpenMP"],
      systemConcepts: ["Sharding","PBFT Consensus","Cryptographic Hashing","ECDSA"],
      hardwareContext:"Simulated distributed environment using independent MPI processes.",
      workloadType:"Blockchain transaction validation and block finalization."
    },
    audience: {
      intendedUse:"Academic Research and Simulation.",
      targetAudience:"Distributed systems researchers and parallel computing students."
    },
    keywords: ["blockchain","sharding","PBFT","MPI","C++","parallel-computing","high-performance-computing","distributed-consensus","OpenMP","cryptography"],
    links: {
      repository:"https://github.com/acphotinakis/HPC-Blockchain",
      paper:"Report.pdf"
    },
    notes: [
     "Total nodes in simulation must be at least the sum of shards plus Final Committee size.",
     "Intended for academic simulation and research purposes."
    ]
  },
  {
    metadata: {
      title:"RDT-Mail-Service",
      repositoryType:"Software System",
      authors: ["acphotinakis"],
      affiliation:"Not explicitly stated",
      year: 2026,
      format:"Python-based network simulation",
      primaryDomains: ["Network Protocols","Distributed Systems","Email Infrastructure"]
    },
    highLevelDescription:"A simulation of an email network stack implementing SMTP and POP3 over a custom reliable RDT 3.0 protocol layered on UDP.",
    problemSpace: [
     "Reliability, concurrency, and durable storage in end-to-end email pipelines.",
     "Data integrity and crash-safe writes in multi-tenant environments.",
     "Modeling email state over unreliable datagram protocols."
    ],
    coreContributions: [
     "Custom RDT 3.0 stop-and-wait reliability layer over UDP.",
     "Implementation of SMTP submission and POP3 retrieval sets.",
     "Thread-safe concurrency using ThreadPoolExecutor for non-blocking packet reception.",
     "Atomic mailbox write mechanism for crash-safe persistence.",
     "Automated end-to-end simulation for load testing and integrity verification."
    ],
    components: [
      {
        name:"Custom RDT 3.0 Protocol",
        category:"Transport Layer",
        problemAddressed:"Reliability over unreliable UDP datagrams.",
        keyMechanisms: ["Sequence numbers","CRC32 checksums","Automatic retransmissions","Timeout handling"],
        keyTakeaway:"Provides a reliable, sequenced transmission channel for application-layer protocols."
      },
      {
        name:"SMTPServer",
        category:"Application Server",
        problemAddressed:"Concurrent email submission and I/O blocking.",
        keyMechanisms: ["ThreadPoolExecutor","RDT packet dispatcher","State-transition negotiation"],
        keyTakeaway:"Decouples expensive disk I/O from network reception to prevent stalls."
      },
      {
        name:"Storage Manager",
        category:"Persistence Layer",
        problemAddressed:"Partial or corrupted mailbox writes during crashes.",
        keyMechanisms: ["Per-user locks","Temporary staging directories","Atomic moves via os.replace"],
        keyTakeaway:"Ensures durable, atomic storage semantics for user mailboxes."
      }
    ],
    technicalThemes: {
      scheduling:"ThreadPoolExecutor for concurrent SMTP command processing.",
      elasticity:"Not explicitly stated.",
      faultToleranceResilience:"RDT 3.0 retransmission, CRC32, and atomic filesystem operations.",
      parallelismModel:"Multi-threaded client/server simulation with shared-queue communication.",
      cloudAssumptionsChallenged:"Not explicitly stated."
    },
    technologies: {
      programmingModels: ["Threaded concurrency","Stop-and-wait ARQ"],
      systemConcepts: ["SMTP","POP3","RDT 3.0","Atomic Writes","CRC32"],
      hardwareContext:"Localhost-bound network simulation.",
      workloadType:"Concurrent message-sending stress tests."
    },
    audience: {
      intendedUse:"Education/Research (Simulation-first approach).",
      targetAudience:"Students or engineers studying network protocol design and reliable systems."
    },
    keywords: ["rdt","udp","smtp","pop3","reliable-data-transfer","concurrency","python","atomic-storage","network-simulation","crc32"],
    links: {
      repository:"https://github.com/acphotinakis/RDT-Mail-Service",
      paper:"DOCS.pdf"
    },
    notes: [
     "Stop-and-wait RDT 3.0 design limits throughput compared to pipelined protocols.",
     "Requires Python 3.10+.",
     "Simulation operates on 127.0.0.1 by default."
    ]
  },
  {
    metadata: {
      title:"TradeSync - AI-Powered Trading Simulator",
      repositoryType:"Software System",
      authors: ["Andrew Photinakis"],
      affiliation:"Not explicitly stated",
      year: 2026,
      format:"Next.js, Node.js, Python FastAPI",
      primaryDomains: ["Fintech","AI/ML","Distributed Systems"]
    },
    highLevelDescription:"A trading platform integrating real-time market data with AI strategy recommendations and collaborative trading via microservices.",
    problemSpace: [
     "Scaling for thousands of concurrent users with sub-10ms latency.",
     "Bridging historical backtesting and real-time execution with AI.",
     "Managing collaborative trading rooms."
    ],
    coreContributions: [
     "Ultra-low latency backend supporting concurrent trades with millisecond precision.",
     "Reinforcement Learning and sentiment analysis for strategy optimization.",
     "Asynchronous training pipeline with Redis-based tracking and versioning.",
     "Real-time streaming and collaborative rooms via WebSockets."
    ],
    components: [
      {
        name:"Trading Engine",
        category:"Microservice",
        problemAddressed:"Order execution and portfolio management latency.",
        keyMechanisms: ["Python FastAPI","async/await","tick-level precision"],
        keyTakeaway:"Achieves sub-5ms order execution and supports 1,000+ ticks/second."
      },
      {
        name:"AI Service",
        category:"Microservice",
        problemAddressed:"Automated strategy generation and sentiment scoring.",
        keyMechanisms: ["PyTorch","Reinforcement Learning (Stable Baselines3)","Transformers for NLP"],
        keyTakeaway:"Provides explainable AI insights with confidence metrics."
      },
      {
        name:"API Gateway",
        category:"Orchestration Layer",
        problemAddressed:"Microservice orchestration, authentication, and load balancing.",
        keyMechanisms: ["Node.js","JWT with refresh token rotation","Rate limiting"],
        keyTakeaway:"Centralizes security and request routing for thousands of users."
      }
    ],
    technicalThemes: {
      scheduling:"Async background training jobs with Redis progress tracking.",
      elasticity:"Deployment-ready via Docker and Kubernetes.",
      faultToleranceResilience:"Rule-based fallbacks for AI models and persistent indexing in Supabase.",
      parallelismModel:"Multithreaded Java Spring Boot and asynchronous FastAPI.",
      cloudAssumptionsChallenged:"Optimized for millisecond latency simulations restricted by standard web protocols."
    },
    technologies: {
      programmingModels: ["Functional React","Async/Await Microservices","OOP"],
      systemConcepts: ["WebSocket protocols","Pub/Sub messaging (Redis)","Explainable AI (XAI)"],
      hardwareContext:"Designed for distributed environments using Docker/Kubernetes.",
      workloadType:"High-frequency trading, NLP sentiment analysis, Reinforcement Learning."
    },
    audience: {
      intendedUse:"Education and Professional Strategy Development.",
      targetAudience:"Novice and professional traders, AI/ML finance researchers."
    },
    keywords: ["trading-simulator","fintech","ai","reinforcement-learning","sentiment-analysis","microservices","nextjs","fastapi","websocket","backtesting","redis","low-latency"],
    links: {
      repository:"https://github.com/acphotinakis/TradeSync"
    },
    notes: [
     "Data simulation speed is 5x faster than real-time.",
     "Real-time market API integration listed for future enhancement (Q1 2026).",
     "Database dropping occurs in related sub-projects."
    ]
  },
  {
    metadata: {
      title:"RadixIP",
      repositoryType:"Software System",
      authors: ["Andrew Photinakis"],
      affiliation:"Rochester Institute of Technology (RIT)",
      year: 2022,
      format:"C Implementation (Abstract Data Type)",
      primaryDomains: ["Data Structures","Network Programming"]
    },
    highLevelDescription:"An application constructing an efficient radix tree database for IPv4 addresses using bit manipulation in C to improve lookup time complexities.",
    problemSpace: [
     "Efficient storage and retrieval of IPv4 addresses.",
     "Optimization of time complexities for full/partial network address queries."
    ],
    coreContributions: [
     "High-performance radix tree database using bitwise operations for indexing.",
     "User-friendly query interface for retrieving geo and network info via IPv4 strings.",
     "Memory-safe C codebase verified with Valgrind and GDB."
    ],
    components: [
      {
        name:"Radix Tree (Trie ADT)",
        category:"Abstract Data Type / Database",
        problemAddressed:"Sub-optimal lookup speeds in traditional IP databases.",
        keyMechanisms: ["Bit manipulation","Bitwise node splitting","In-order/post-order traversals"],
        keyTakeaway:"Provides efficient O(K) lookup time where K is address length."
      },
      {
        name:"Query Engine",
        category:"Search Interface",
        problemAddressed:"User retrieval of IP metadata from the database.",
        keyMechanisms: ["Tokenization","Numeric/string input classification","Closest-match search heuristics"],
        keyTakeaway:"Supports flexible querying of both full IP ranges and individual integers."
      }
    ],
    technicalThemes: {
      scheduling:"Not applicable.",
      elasticity:"Not applicable.",
      faultToleranceResilience:"Memory leak detection via Valgrind and robust error handling.",
      parallelismModel:"Sequential execution.",
      cloudAssumptionsChallenged:"Not applicable."
    },
    technologies: {
      programmingModels: ["Abstract Data Type (ADT)","Procedural C"],
      systemConcepts: ["Bit manipulation","Radix Tree (Trie)","IPv4 addressing"],
      hardwareContext:"General-purpose computing; developed with Vim, Bash, and Make.",
      workloadType:"Database construction from CSV files and interactive querying."
    },
    audience: {
      intendedUse:"Education / Systems Programming.",
      targetAudience:"Developers/students interested in high-performance structures and network address management."
    },
    keywords: ["radix-tree","trie","ipv4","bit-manipulation","c-programming","data-structures","network-database","memory-management","valgrind","query-engine"],
    links: {
      repository:"https://github.com/acphotinakis/RadixIP"
    },
    notes: [
     "Implementation specifically targets IPv4; IPv6 support not stated.",
     "Requires structured CSV input for database population."
    ]
  },
  {
    metadata: {
      title:"SecureComm",
      repositoryType:"Software System",
      authors: ["acphotinakis"],
      affiliation:"Not explicitly stated",
      year: 2024,
      format:"Implementation (C# command-line tool)",
      primaryDomains: ["Cryptography","Secure Communication","CLI Development"]
    },
    highLevelDescription:"A C#-based command-line RSA encryption tool for key generation, public key exchange, and sending encrypted messages via HTTP.",
    problemSpace: [
     "Secure generation and management of RSA key pairs via CLI.",
     "Protected exchange of public keys and encrypted messages.",
     "Data integrity and input validation (email/key sizes) for cryptographic operations."
    ],
    coreContributions: [
     "Complete RSA-based communication CLI.",
     "Custom prime generation and Miller-Rabin primality testing extension for BigInteger.",
     "Thread-safe parallel processing model for high-bit prime generation.",
     "Asynchronous HTTP handlers for remote exchange."
    ],
    components: [
      {
        name:"RSA CLI (Application)",
        category:"Command-Line Interface",
        problemAddressed:"User orchestration of cryptographic actions and argument validation.",
        keyMechanisms: ["Command pattern (keyGen, sendKey, etc.)"],
        keyTakeaway:"Centralizes input validation and action dispatching."
      },
      {
        name:"HttpHandler",
        category:"Network Communication Service",
        problemAddressed:"Remote data exchange for public keys and encrypted content.",
        keyMechanisms: ["HttpClient","Asynchronous GET/PUT","JSON serialization"],
        keyTakeaway:"Facilitates decoupled, asynchronous communication between client and server."
      },
      {
        name:"KeyManager",
        category:"Storage and Persistence Layer",
        problemAddressed:"Secure local storage and retrieval of public/private RSA keys.",
        keyMechanisms: ["File-based persistence","Newtonsoft.Json serialization"],
        keyTakeaway:"Manages lifecycle of local cryptographic artifacts with error handling."
      },
      {
        name:"Prime Extension",
        category:"Mathematical/Cryptographic Library",
        problemAddressed:"Generation of large, cryptographically secure prime numbers for RSA.",
        keyMechanisms: ["Miller-Rabin test","SecureRandom","Parallel.For processing"],
        keyTakeaway:"Optimizes generation of 2048-bit+ primes via multi-threaded search."
      }
    ],
    technicalThemes: {
      scheduling:"Parallel processing (Parallel.For) for prime generation.",
      elasticity:"Not explicitly stated.",
      faultToleranceResilience:"Robust input validation, graceful file error handling, and HTTP status processing.",
      parallelismModel:"Task-based parallelism with locking mechanisms (lockObj) for thread safety.",
      cloudAssumptionsChallenged:"Not explicitly stated."
    },
    technologies: {
      programmingModels: ["Asynchronous (async/await)","Extension Methods","Parallel Processing"],
      systemConcepts: ["RSA Encryption","Miller-Rabin Primality Test","Big-Endian Conversion"],
      hardwareContext:"Command-line environment.",
      workloadType:"Cryptographic key generation and secure message routing."
    },
    audience: {
      intendedUse:"Education and Secure Communication.",
      targetAudience:"Developers and users requiring lightweight CLI for RSA messaging."
    },
    keywords: ["rsa-encryption","c-sharp","cli","cryptography","miller-rabin","prime-generation","asynchronous-communication","public-key-exchange","parallel-computing","secure-messaging"],
    links: {
      repository:"https://github.com/acphotinakis/SecureComm"
    },
    notes: [
     "RSA key sizes must be positive integers, multiples of 8, and at least 2 bits.",
     "Requires valid string-formatted email addresses.",
     "Local storage relies on specific file-naming convention based on recipient email."
    ]
  }
];

export function ProjectsSection() {
  return (
    <section id="projects" className="py-24 relative border-t border-border">
      <div className="container mx-auto px-6 max-w-5xl">
        <div className="mb-12">
          <h2 className="section-heading tracking-widest uppercase">PROJECTS</h2>
        </div>

        <div className="space-y-12">
          {codingProjects.map((project) => (
            <div key={project.metadata.title} className="terminal-card p-6 hover:border-primary transition-colors duration-200">
              {/* Header: Title & Metadata */}
              <div className="p-6 border-b border-border bg-muted/30">
                <div className="flex flex-col md:flex-row md:justify-between md:items-start gap-4">
                  <div>
                    <h3 className="text-xl font-bold text-foreground mb-1 uppercase tracking-tight">
                      {project.metadata.title}
                    </h3>
                    <div className="flex flex-wrap gap-x-4 gap-y-1 text-xs font-mono text-primary">
                      <span>[{project.metadata.format}]</span>
                      <span>AFFILIATION: {project.metadata.affiliation}</span>
                      <span>YEAR: {project.metadata.year}</span>
                    </div>
                  </div>
                  <div className="flex gap-2">
                    {project.links.paper && (
                      <a href={project.links.paper} className="px-3 py-1 text-[10px] border border-primary text-primary hover:bg-primary/10 transition-colors uppercase">
                        Paper.PDF
                      </a>
                    )}
                    <a href={project.links.repository} target="_blank" rel="noopener noreferrer" className="px-3 py-1 text-[10px] border border-border text-muted-foreground hover:border-primary hover:text-primary transition-colors uppercase">
                      Repo
                    </a>
                  </div>
                </div>
              </div>

              <div className="p-6 grid grid-cols-1 md:grid-cols-12 gap-8">
                {/* Left Column: High-Level Info */}
                <div className="md:col-span-7 space-y-6">
                  <div>
                    <h4 className="text-[10px] uppercase font-bold text-muted-foreground mb-2 tracking-widest">Description</h4>
                    <p className="text-sm leading-relaxed text-foreground/90">{project.highLevelDescription}</p>
                  </div>

                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <h4 className="text-[10px] uppercase font-bold text-muted-foreground mb-2 tracking-widest">Problem Space</h4>
                      <ul className="space-y-1">
                        {project.problemSpace.map((prob) => (
                          <li key={prob} className="text-xs flex gap-2">
                            <span className="text-primary">!</span> {prob}
                          </li>
                        ))}
                      </ul>
                    </div>
                    <div>
                      <h4 className="text-[10px] uppercase font-bold text-muted-foreground mb-2 tracking-widest">Contributions</h4>
                      <ul className="space-y-1">
                        {project.coreContributions.map((con) => (
                          <li key={con} className="text-xs flex gap-2">
                            <span className="text-primary">+</span> {con}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>

                  {/* Components Sub-Section */}
                  <div>
                    <h4 className="text-[10px] uppercase font-bold text-muted-foreground mb-3 tracking-widest">Systems Analyzed</h4>
                    <div className="space-y-4">
                      {project.components.map((comp) => (
                        <div key={comp.name} className="p-3 bg-muted/20 border-l-2 border-primary">
                          <div className="flex justify-between items-center mb-1">
                            <span className="text-xs font-bold uppercase">{comp.name}</span>
                            <span className="text-[9px] bg-primary/10 px-1 text-primary">{comp.category}</span>
                          </div>
                          <p className="text-[11px] text-muted-foreground mb-2 italic">"{comp.problemAddressed}"</p>
                          <div className="flex flex-wrap gap-2 mb-2">
                            {comp.keyMechanisms.map(mech => (
                              <span key={mech} className="text-[9px] border border-border px-1 uppercase">{mech}</span>
                            ))}
                          </div>
                          <p className="text-[10px] text-foreground"><span className="font-bold text-primary">TAKEAWAY:</span> {comp.keyTakeaway}</p>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Right Column: Technical Matrix & Metadata */}
                <div className="md:col-span-5 space-y-6">
                  {/* Technical Themes Matrix */}
                  <div className="border border-border p-4 bg-muted/10">
                    <h4 className="text-[10px] uppercase font-bold text-primary mb-3 tracking-widest">Technical Themes</h4>
                    <div className="space-y-3 font-mono">
                      {[
                        { label: 'SCHEDULING', val: project.technicalThemes.scheduling },
                        { label: 'ELASTICITY', val: project.technicalThemes.elasticity },
                        { label: 'RESILIENCE', val: project.technicalThemes.faultToleranceResilience },
                        { label: 'PARALLELISM', val: project.technicalThemes.parallelismModel },
                        { label: 'CHALLENGES', val: project.technicalThemes.cloudAssumptionsChallenged }
                      ].map(theme => (
                        <div key={theme.label}>
                          <p className="text-[9px] text-muted-foreground">{theme.label}</p>
                          <p className="text-[10px] text-foreground leading-tight">{theme.val}</p>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Technologies */}
                  <div>
                    <h4 className="text-[10px] uppercase font-bold text-muted-foreground mb-2 tracking-widest">Stack & Context</h4>
                    <div className="space-y-2 text-xs">
                      <p><span className="text-primary opacity-50">PROG:</span> {project.technologies.programmingModels.join(', ')}</p>
                      <p><span className="text-primary opacity-50">SYS:</span> {project.technologies.systemConcepts.join(', ')}</p>
                      <p><span className="text-primary opacity-50">HARD:</span> {project.technologies.hardwareContext}</p>
                      <p><span className="text-primary opacity-50">WORK:</span> {project.technologies.workloadType}</p>
                    </div>
                  </div>

                  {/* Intended Audience */}
                  <div className="text-[11px] border-t border-border pt-4">
                    <p className="text-muted-foreground uppercase text-[9px] font-bold mb-1">Target Audience</p>
                    <p className="text-foreground italic">{project.audience.targetAudience}</p>
                  </div>
                </div>
              </div>

              {/* Footer: Citation & Tags */}
              <div className="px-6 py-4 bg-muted/30 border-t border-border flex flex-col gap-4">
                {project.citation && (
                  <div className="font-mono text-[9px] text-muted-foreground bg-black/20 p-2 rounded truncate">
                    {project.citation}
                  </div>
                )}
                <div className="flex flex-wrap gap-2">
                  {project.keywords.map((tag) => (
                    <span key={tag} className="px-2 py-0.5 border border-primary/30 text-[9px] text-primary uppercase font-bold tracking-tighter">
                      #{tag}
                    </span>
                  ))}
                </div>
                {project.notes.length > 0 && (
                  <div className="text-[10px] text-muted-foreground italic border-l border-primary/50 pl-2">
                    NOTE: {project.notes[0]}
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}