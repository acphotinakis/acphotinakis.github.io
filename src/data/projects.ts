import type { Project, ProjectType } from '@/types/project';

function createSlug(title: string): string {
  return title
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/(^-|-$)/g, '');
}

function determineProjectType(domains: string[], format: string): ProjectType {
  const domainStr = domains.join(' ').toLowerCase();
  const formatStr = format.toLowerCase();

  if (domainStr.includes('research') || formatStr.includes('research') || formatStr.includes('report')) {
    return 'research';
  }
  if (formatStr.includes('cli') || formatStr.includes('command-line') || domainStr.includes('cli')) {
    return 'cli';
  }
  if (domainStr.includes('simulation') || domainStr.includes('simulator') || formatStr.includes('simulation')) {
    return 'simulator';
  }
  if (domainStr.includes('data structure') || domainStr.includes('library') || formatStr.includes('abstract data type') || formatStr.includes('adt')) {
    return 'library';
  }
  return 'system';
}

const rawProjects = [
  {
    metadata: {
      title: "Aegis-Nexus Platform",
      repositoryType: "Software System / Research Artifact",
      authors: ["Andrew Photinakis"],
      affiliation: "Rochester Institute of Technology (RIT)",
      year: 2025,
      format: "Multi-module Maven project / Technical Report",
      primaryDomains: ["Secure Data Handling", "Game Platforms", "NoSQL Security"]
    },
    highLevelDescription: "A platform for managing video games and social interactions with a focus on secure data handling, fine-grained access control in NoSQL, and user analytics.",
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
        name: "pixel_backend",
        category: "Core Backend Service",
        problemAddressed: "Secure management of game entities and user data through REST APIs.",
        keyMechanisms: ["Spring Boot 3.x", "Spring Security", "MongoDB", "Attribute-Based Encryption (ABE)"],
        keyTakeaway: "Centralizes enterprise-grade security and access control for the platform."
      },
      {
        name: "pixel_data_generator",
        category: "Data Generation & Simulation",
        problemAddressed: "Creating realistic, secure synthetic datasets for testing.",
        keyMechanisms: ["JavaFaker", "PBKDF2-HMAC-SHA256", "AES-256-GCM"],
        keyTakeaway: "Facilitates secure development environments without using real user data."
      },
      {
        name: "pixel_frontend",
        category: "Web Application Runtime",
        problemAddressed: "User interface for game discovery and profile management.",
        keyMechanisms: ["React", "TypeScript", "Vite", "TanStack Query", "shadcn/ui"],
        keyTakeaway: "Delivers a modular, component-based UI that interacts securely with backend services."
      }
    ],
    technicalThemes: {
      scheduling: "Not explicitly detailed in README.",
      elasticity: "Discussed as 'elastic-native' design in reports.",
      faultToleranceResilience: "Handled via global exception handling and persistent session management.",
      parallelismModel: "Hybrid parallelism for scale-resilience.",
      cloudAssumptionsChallenged: "Moves away from POSIX-legacy interfaces toward application-aware designs."
    },
    technologies: {
      programmingModels: ["Component-Based Architecture (React)", "RESTful API design (Spring Boot)"],
      systemConcepts: ["Attribute-Based Encryption (ABE)", "Role-Based Access Control (RBAC)", "Field-Level Encryption"],
      hardwareContext: "Designed for heterogeneous cloud environments.",
      workloadType: "Multi-tenant game platform with social interactions and analytics."
    },
    audience: {
      intendedUse: "Research and Advanced Systems Engineering.",
      targetAudience: "Developers interested in secure NoSQL architectures and cloud-native designers."
    },
    keywords: ["spring-boot", "react", "mongodb", "attribute-based-encryption", "nosql-security", "java", "typescript", "secure-data-handling", "cloud-native", "game-platform"],
    citation: "@techreport { photinakis2025aegisnexus, title { Aegis-Nexus: Layered Privacy and Access Control for NoSQL Game Platforms}, author = { Photinakis, Andrew}, institution = { Rochester Institute of Technology}, year = {2025} }",
    links: {
      repository: "https://github.com/acphotinakis/Aegis-Nexus",
      paper: "Technical Report PDF"
    },
    notes: [
      "Data generator automatically drops existing MongoDB databases on startup.",
      "Session-based authentication requires specific environment variables (MONGO_URI, ENCRYPTION_KEY)."
    ]
  },
  {
    metadata: {
      title: "SBMPI: Parallelizing Blockchain Computations via Sharding",
      repositoryType: "Research Artifact / Software System",
      authors: ["Andrew Photinakis", "Caleb Talbott"],
      affiliation: "Rochester Institute of Technology (RIT)",
      year: 2025,
      format: "C++/MPI implementation and research report",
      primaryDomains: ["Parallel Computing", "Distributed Systems", "Blockchain"]
    },
    highLevelDescription: "A high-performance C++/MPI simulation of a sharded blockchain network utilizing PBFT consensus to achieve horizontal scalability.",
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
        name: "SBMPI (Sharded Blockchain MPI)",
        category: "Distributed Consensus System",
        problemAddressed: "Sequential processing bottlenecks in blockchain consensus.",
        keyMechanisms: ["Sharding", "PBFT (Pre-Prepare, Prepare, Commit phases)", "MPI-based message passing"],
        keyTakeaway: "Parallel sharding enables horizontal scalability and significant TPS improvements."
      }
    ],
    technicalThemes: {
      scheduling: "Distribution of transaction partitions by root process (Rank 0) to Shard Leaders.",
      elasticity: "Not explicitly stated.",
      faultToleranceResilience: "Practical Byzantine Fault Tolerance (PBFT) for intra-shard agreement.",
      parallelismModel: "MPI for inter-node communication and OpenMP for intra-node threading.",
      cloudAssumptionsChallenged: "Not explicitly stated."
    },
    technologies: {
      programmingModels: ["MPI (Message Passing Interface)", "OpenMP"],
      systemConcepts: ["Sharding", "PBFT Consensus", "Cryptographic Hashing", "ECDSA"],
      hardwareContext: "Simulated distributed environment using independent MPI processes.",
      workloadType: "Blockchain transaction validation and block finalization."
    },
    audience: {
      intendedUse: "Academic Research and Simulation.",
      targetAudience: "Distributed systems researchers and parallel computing students."
    },
    keywords: ["blockchain", "sharding", "PBFT", "MPI", "C++", "parallel-computing", "high-performance-computing", "distributed-consensus", "OpenMP", "cryptography"],
    links: {
      repository: "https://github.com/acphotinakis/HPC-Blockchain",
      paper: "Report.pdf"
    },
    notes: [
      "Total nodes in simulation must be at least the sum of shards plus Final Committee size.",
      "Intended for academic simulation and research purposes."
    ]
  },
  {
    metadata: {
      title: "RDT-Mail-Service",
      repositoryType: "Software System",
      authors: ["acphotinakis"],
      affiliation: "Not explicitly stated",
      year: 2026,
      format: "Python-based network simulation",
      primaryDomains: ["Network Protocols", "Distributed Systems", "Email Infrastructure"]
    },
    highLevelDescription: "A simulation of an email network stack implementing SMTP and POP3 over a custom reliable RDT 3.0 protocol layered on UDP.",
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
        name: "Custom RDT 3.0 Protocol",
        category: "Transport Layer",
        problemAddressed: "Reliability over unreliable UDP datagrams.",
        keyMechanisms: ["Sequence numbers", "CRC32 checksums", "Automatic retransmissions", "Timeout handling"],
        keyTakeaway: "Provides a reliable, sequenced transmission channel for application-layer protocols."
      },
      {
        name: "SMTPServer",
        category: "Application Server",
        problemAddressed: "Concurrent email submission and I/O blocking.",
        keyMechanisms: ["ThreadPoolExecutor", "RDT packet dispatcher", "State-transition negotiation"],
        keyTakeaway: "Decouples expensive disk I/O from network reception to prevent stalls."
      },
      {
        name: "Storage Manager",
        category: "Persistence Layer",
        problemAddressed: "Partial or corrupted mailbox writes during crashes.",
        keyMechanisms: ["Per-user locks", "Temporary staging directories", "Atomic moves via os.replace"],
        keyTakeaway: "Ensures durable, atomic storage semantics for user mailboxes."
      }
    ],
    technicalThemes: {
      scheduling: "ThreadPoolExecutor for concurrent SMTP command processing.",
      elasticity: "Not explicitly stated.",
      faultToleranceResilience: "RDT 3.0 retransmission, CRC32, and atomic filesystem operations.",
      parallelismModel: "Multi-threaded client/server simulation with shared-queue communication.",
      cloudAssumptionsChallenged: "Not explicitly stated."
    },
    technologies: {
      programmingModels: ["Threaded concurrency", "Stop-and-wait ARQ"],
      systemConcepts: ["SMTP", "POP3", "RDT 3.0", "Atomic Writes", "CRC32"],
      hardwareContext: "Localhost-bound network simulation.",
      workloadType: "Concurrent message-sending stress tests."
    },
    audience: {
      intendedUse: "Education/Research (Simulation-first approach).",
      targetAudience: "Students or engineers studying network protocol design and reliable systems."
    },
    keywords: ["rdt", "udp", "smtp", "pop3", "reliable-data-transfer", "concurrency", "python", "atomic-storage", "network-simulation", "crc32"],
    links: {
      repository: "https://github.com/acphotinakis/RDT-Mail-Service",
      paper: "DOCS.pdf"
    },
    notes: [
      "Stop-and-wait RDT 3.0 design limits throughput compared to pipelined protocols.",
      "Requires Python 3.10+.",
      "Simulation operates on 127.0.0.1 by default."
    ]
  },
  {
    metadata: {
      title: "TradeSync - AI-Powered Trading Simulator",
      repositoryType: "Software System",
      authors: ["Andrew Photinakis"],
      affiliation: "Not explicitly stated",
      year: 2026,
      format: "Next.js, Node.js, Python FastAPI",
      primaryDomains: ["Fintech", "AI/ML", "Distributed Systems"]
    },
    highLevelDescription: "A trading platform integrating real-time market data with AI strategy recommendations and collaborative trading via microservices.",
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
        name: "Trading Engine",
        category: "Microservice",
        problemAddressed: "Order execution and portfolio management latency.",
        keyMechanisms: ["Python FastAPI", "async/await", "tick-level precision"],
        keyTakeaway: "Achieves sub-5ms order execution and supports 1,000+ ticks/second."
      },
      {
        name: "AI Service",
        category: "Microservice",
        problemAddressed: "Automated strategy generation and sentiment scoring.",
        keyMechanisms: ["PyTorch", "Reinforcement Learning (Stable Baselines3)", "Transformers for NLP"],
        keyTakeaway: "Provides explainable AI insights with confidence metrics."
      },
      {
        name: "API Gateway",
        category: "Orchestration Layer",
        problemAddressed: "Microservice orchestration, authentication, and load balancing.",
        keyMechanisms: ["Node.js", "JWT with refresh token rotation", "Rate limiting"],
        keyTakeaway: "Centralizes security and request routing for thousands of users."
      }
    ],
    technicalThemes: {
      scheduling: "Async background training jobs with Redis progress tracking.",
      elasticity: "Deployment-ready via Docker and Kubernetes.",
      faultToleranceResilience: "Rule-based fallbacks for AI models and persistent indexing in Supabase.",
      parallelismModel: "Multithreaded Java Spring Boot and asynchronous FastAPI.",
      cloudAssumptionsChallenged: "Optimized for millisecond latency simulations restricted by standard web protocols."
    },
    technologies: {
      programmingModels: ["Functional React", "Async/Await Microservices", "OOP"],
      systemConcepts: ["WebSocket protocols", "Pub/Sub messaging (Redis)", "Explainable AI (XAI)"],
      hardwareContext: "Designed for distributed environments using Docker/Kubernetes.",
      workloadType: "High-frequency trading, NLP sentiment analysis, Reinforcement Learning."
    },
    audience: {
      intendedUse: "Education and Professional Strategy Development.",
      targetAudience: "Novice and professional traders, AI/ML finance researchers."
    },
    keywords: ["trading-simulator", "fintech", "ai", "reinforcement-learning", "sentiment-analysis", "microservices", "nextjs", "fastapi", "websocket", "backtesting", "redis", "low-latency"],
    links: {
      repository: "https://github.com/acphotinakis/TradeSync"
    },
    notes: [
      "Data simulation speed is 5x faster than real-time.",
      "Real-time market API integration listed for future enhancement (Q1 2026).",
      "Database dropping occurs in related sub-projects."
    ]
  },
  {
    metadata: {
      title: "RadixIP",
      repositoryType: "Software System",
      authors: ["Andrew Photinakis"],
      affiliation: "Rochester Institute of Technology (RIT)",
      year: 2022,
      format: "C Implementation (Abstract Data Type)",
      primaryDomains: ["Data Structures", "Network Programming"]
    },
    highLevelDescription: "An application constructing an efficient radix tree database for IPv4 addresses using bit manipulation in C to improve lookup time complexities.",
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
        name: "Radix Tree (Trie ADT)",
        category: "Abstract Data Type / Database",
        problemAddressed: "Sub-optimal lookup speeds in traditional IP databases.",
        keyMechanisms: ["Bit manipulation", "Bitwise node splitting", "In-order/post-order traversals"],
        keyTakeaway: "Provides efficient O(K) lookup time where K is address length."
      },
      {
        name: "Query Engine",
        category: "Search Interface",
        problemAddressed: "User retrieval of IP metadata from the database.",
        keyMechanisms: ["Tokenization", "Numeric/string input classification", "Closest-match search heuristics"],
        keyTakeaway: "Supports flexible querying of both full IP ranges and individual integers."
      }
    ],
    technicalThemes: {
      scheduling: "Not applicable.",
      elasticity: "Not applicable.",
      faultToleranceResilience: "Memory leak detection via Valgrind and robust error handling.",
      parallelismModel: "Sequential execution.",
      cloudAssumptionsChallenged: "Not applicable."
    },
    technologies: {
      programmingModels: ["Abstract Data Type (ADT)", "Procedural C"],
      systemConcepts: ["Bit manipulation", "Radix Tree (Trie)", "IPv4 addressing"],
      hardwareContext: "General-purpose computing; developed with Vim, Bash, and Make.",
      workloadType: "Database construction from CSV files and interactive querying."
    },
    audience: {
      intendedUse: "Education / Systems Programming.",
      targetAudience: "Developers/students interested in high-performance structures and network address management."
    },
    keywords: ["radix-tree", "trie", "ipv4", "bit-manipulation", "c-programming", "data-structures", "network-database", "memory-management", "valgrind", "query-engine"],
    links: {
      repository: "https://github.com/acphotinakis/RadixIP"
    },
    notes: [
      "Implementation specifically targets IPv4; IPv6 support not stated.",
      "Requires structured CSV input for database population."
    ]
  },
  {
    metadata: {
      title: "SecureComm",
      repositoryType: "Software System",
      authors: ["acphotinakis"],
      affiliation: "Not explicitly stated",
      year: 2024,
      format: "Implementation (C# command-line tool)",
      primaryDomains: ["Cryptography", "Secure Communication", "CLI Development"]
    },
    highLevelDescription: "A C#-based command-line RSA encryption tool for key generation, public key exchange, and sending encrypted messages via HTTP.",
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
        name: "RSA CLI (Application)",
        category: "Command-Line Interface",
        problemAddressed: "User orchestration of cryptographic actions and argument validation.",
        keyMechanisms: ["Command pattern (keyGen, sendKey, etc.)"],
        keyTakeaway: "Centralizes input validation and action dispatching."
      },
      {
        name: "HttpHandler",
        category: "Network Communication Service",
        problemAddressed: "Remote data exchange for public keys and encrypted content.",
        keyMechanisms: ["HttpClient", "Asynchronous GET/PUT", "JSON serialization"],
        keyTakeaway: "Facilitates decoupled, asynchronous communication between client and server."
      },
      {
        name: "KeyManager",
        category: "Storage and Persistence Layer",
        problemAddressed: "Secure local storage and retrieval of public/private RSA keys.",
        keyMechanisms: ["File-based persistence", "Newtonsoft.Json serialization"],
        keyTakeaway: "Manages lifecycle of local cryptographic artifacts with error handling."
      },
      {
        name: "Prime Extension",
        category: "Mathematical/Cryptographic Library",
        problemAddressed: "Generation of large, cryptographically secure prime numbers for RSA.",
        keyMechanisms: ["Miller-Rabin test", "SecureRandom", "Parallel.For processing"],
        keyTakeaway: "Optimizes generation of 2048-bit+ primes via multi-threaded search."
      }
    ],
    technicalThemes: {
      scheduling: "Parallel processing (Parallel.For) for prime generation.",
      elasticity: "Not explicitly stated.",
      faultToleranceResilience: "Robust input validation, graceful file error handling, and HTTP status processing.",
      parallelismModel: "Task-based parallelism with locking mechanisms (lockObj) for thread safety.",
      cloudAssumptionsChallenged: "Not explicitly stated."
    },
    technologies: {
      programmingModels: ["Asynchronous (async/await)", "Extension Methods", "Parallel Processing"],
      systemConcepts: ["RSA Encryption", "Miller-Rabin Primality Test", "Big-Endian Conversion"],
      hardwareContext: "Command-line environment.",
      workloadType: "Cryptographic key generation and secure message routing."
    },
    audience: {
      intendedUse: "Education and Secure Communication.",
      targetAudience: "Developers and users requiring lightweight CLI for RSA messaging."
    },
    keywords: ["rsa-encryption", "c-sharp", "cli", "cryptography", "miller-rabin", "prime-generation", "asynchronous-communication", "public-key-exchange", "parallel-computing", "secure-messaging"],
    links: {
      repository: "https://github.com/acphotinakis/SecureComm"
    },
    notes: [
      "RSA key sizes must be positive integers, multiples of 8, and at least 2 bits.",
      "Requires valid string-formatted email addresses.",
      "Local storage relies on specific file-naming convention based on recipient email."
    ]
  }
];

export const codingProjects: Project[] = rawProjects.map((raw, index) => {
  const slug = createSlug(raw.metadata.title);
  const projectType = determineProjectType(raw.metadata.primaryDomains, raw.metadata.format);
  const year = raw.metadata.year.toString();

  return {
    id: `proj-${index + 1}`,
    slug,
    metadata: raw.metadata,
    highLevelDescription: raw.highLevelDescription,
    problemSpace: raw.problemSpace,
    coreContributions: raw.coreContributions,
    components: raw.components,
    technicalThemes: raw.technicalThemes,
    technologies: raw.technologies,
    audience: raw.audience,
    keywords: raw.keywords,
    citation: raw.citation,
    links: raw.links,
    notes: raw.notes,
    projectType,
    status: year === '2026' ? 'active' : 'completed',
    featured: index < 2,
    thumbnail: `/thumbnails/${slug}.webp`,
    startDate: undefined,
    endDate: undefined,
  };
});

export function getProjectBySlug(slug: string): Project | undefined {
  return codingProjects.find(p => p.slug === slug);
}

export function getProjectsByType(type: ProjectType): Project[] {
  return codingProjects.filter(p => p.projectType === type);
}

export function getFeaturedProjects(): Project[] {
  return codingProjects.filter(p => p.featured);
}

export function getAllYears(): (string | number)[] {
  const years = codingProjects.map(p => p.metadata.year);
  return [...new Set(years)].sort((a, b) => Number(b) - Number(a));
}

export function getAllDomains(): string[] {
  const domains = codingProjects.flatMap(p => p.metadata.primaryDomains);
  return [...new Set(domains)].sort();
}

export function getAllTechnologies(): string[] {
  const techs = codingProjects.flatMap(p => [
    ...p.technologies.programmingModels,
    ...p.technologies.systemConcepts,
  ]);
  return [...new Set(techs)].sort();
}

export function filterProjects(projects: Project[], filters: {
  types?: ProjectType[];
  years?: (string | number)[];
  domains?: string[];
  technologies?: string[];
  searchQuery?: string;
}): Project[] {
  return projects.filter(project => {
    if (filters.types && filters.types.length > 0 && !filters.types.includes(project.projectType)) {
      return false;
    }
    if (filters.years && filters.years.length > 0 && !filters.years.includes(project.metadata.year)) {
      return false;
    }
    if (filters.domains && filters.domains.length > 0) {
      const hasDomain = filters.domains.some(d => project.metadata.primaryDomains.includes(d));
      if (!hasDomain) return false;
    }
    if (filters.technologies && filters.technologies.length > 0) {
      const allTech = [
        ...project.technologies.programmingModels,
        ...project.technologies.systemConcepts,
      ];
      const hasTech = filters.technologies.some(t => allTech.includes(t));
      if (!hasTech) return false;
    }
    if (filters.searchQuery) {
      const query = filters.searchQuery.toLowerCase();
      const searchable = [
        project.metadata.title,
        project.highLevelDescription,
        ...project.metadata.primaryDomains,
        ...project.keywords,
        ...project.technologies.programmingModels,
        ...project.technologies.systemConcepts,
      ].join(' ').toLowerCase();
      if (!searchable.includes(query)) return false;
    }
    return true;
  });
}

export function sortProjects(projects: Project[], option: { field: 'year' | 'title' | 'type'; direction: 'asc' | 'desc' }): Project[] {
  const { field, direction } = option;
  const multiplier = direction === 'asc' ? 1 : -1;

  return [...projects].sort((a, b) => {
    let aVal: string | number;
    let bVal: string | number;

    switch (field) {
      case 'year':
        aVal = Number(a.metadata.year);
        bVal = Number(b.metadata.year);
        break;
      case 'title':
        aVal = a.metadata.title.toLowerCase();
        bVal = b.metadata.title.toLowerCase();
        break;
      case 'type':
        aVal = a.projectType;
        bVal = b.projectType;
        break;
      default:
        return 0;
    }

    if (aVal < bVal) return -1 * multiplier;
    if (aVal > bVal) return 1 * multiplier;
    return 0;
  });
}