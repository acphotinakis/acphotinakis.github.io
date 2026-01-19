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

/**
 * Array containing all project data from the document
 */
export const researchProjects: Project[] = [
  {
    metadata: {
      title: "Parallel Computing in the Cloud: Scheduling, Elasticity, and Resilience in Heterogeneous Environments",
      repositoryType: "Research Paper / Technical Report",
      authors: ["Andrew Photinakis "],
      affiliation: "Rochester Institute of Technology (RIT)",
      year: 2025,
      format: "IEEEtran research report",
      primaryDomains: ["Cloud Computing", "Parallel Computing", "Distributed Systems "]
    },
    highLevelDescription: "A research report analyzing three representative systems to demonstrate the shift from static clusters to dynamic, heterogeneous cloud environments, arguing for 'elastic-native' designs.",
    problemSpace: [
      "Hardware heterogeneity",
      "Multi-tenant interference ('noisy neighbor' effects)",
      "Complex application structures (microservices/DAGs)",
      "Frequent faults at scale",
      "Economic waste of 'warm' capacity in serverless models "
    ],
    coreContributions: [
      "A 'lifecycle lens' framing cloud parallelism across building, orchestration, operation, and maintenance.",
      "A comparative synthesis of three 'cloud 2.0' pressures: I/O interference, true elasticity, and scale-resilience.",
      "An architectural argument for application-aware, elastic-native designs that abandon POSIX-bound assumptions. "
    ],
    components: [
      {
        name: "MRS (MapReduce Scheduling)",
        category: "Scheduler",
        problemAddressed: "Cross-VM I/O interference and stragglers in MapReduce-era workloads.",
        keyMechanisms: ["White-box interference model", "Geometric-interval discretization", "List scheduling", "Precedence-aware scheduling "],
        keyTakeaway: "Analytical heuristics can outperform naïve scheduling when interference models are accurate. "
      },
      {
        name: "Dandelion",
        category: "Serverless Platform / Runtime",
        problemAddressed: "Memory waste from warm sandboxes and slow cold starts in serverless computing.",
        keyMechanisms: ["Coordinator + Engine model", "Shared-memory user-space 'zero-copy' channels", "Isolation via language/hardware capabilities rather than POSIX VMs "],
        keyTakeaway: "Cold-start latency is an interface problem; true elasticity requires rejecting POSIX assumptions. "
      },
      {
        name: "Elas Wave",
        category: "LLM Training System / Resilience Framework",
        problemAddressed: "Inevitable hardware failures during long-running, large-scale LLM training.",
        keyMechanisms: ["Multi-dimensional scheduling", "Fast membership repair via dynamic communicators", "RNG resharding for consistency", "Overlapping parameter migration "],
        keyTakeaway: "Cloud-based HPC requires resilience-first designs where recovery is fast, continuous, and in-place. "
      }
    ],
    technicalThemes: {
      scheduling: "Heterogeneity-aware, interference-modeled, and precedence-aware.",
      elasticity: "'True elasticity' focusing on eliminating waste and microsecond cold starts.",
      faultToleranceResilience: "In-place recovery, dynamic reshaping, and fast communicator repair (moving beyond checkpoint/restart).",
      parallelismModel: "Hybrid parallelism, DAG-based workflows, and MapReduce.",
      cloudAssumptionsChallenged: "Rejects POSIX-bound execution and static/fair-share scheduling. "
    },
    technologies: {
      programmingModels: ["MapReduce", "Serverless", "LLM Training (Hybrid Parallelism) "],
      systemConcepts: ["'Elastic-native' design", "Zero-copy communication", "I/O interference modeling", "Sandboxing "],
      hardwareContext: "Heterogeneous (CPUs, GPUs, accelerators, mixed instance types).",
      workloadType: "Microservices, DAG-based workflows, Large Language Model (LLM) training. "
    },
    audience: {
      intendedUse: "Research and Advanced Systems Engineering.",
      targetAudience: "Cloud architects, distributed systems researchers, and parallel computing engineers. "
    },
    keywords: ["cloud-computing", "parallel-computing", "scheduling", "serverless", "elasticity", "fault-tolerance", "distributed-systems", "cloud-native", "llm-training", "heterogeneous-computing", "mapreduce", "microservices", "dag-scheduling"],
    citation: "@techreport { photinakis2025parallelcloud, title = { Parallel Computing in the Cloud: Scheduling, Elasticity, and Resilience in Heterogeneous Environments}, author = { Photinakis, Andrew}, institution = { Rochester Institute of Technology}, year = { 2025}}",
    links: {
      repository: "https://github.com/acphotinakis/ElasticNative-Cloud",
      paper: "https://github.com/acphotinakis/ElasticNative-Cloud/blob/main/Report.pdf"
    },
    notes: [
      "MRS assumes accurate interference models which may clash with modern dynamic DAG workloads.",
      "Dandelion's performance gains (microsecond elasticity) come at the cost of standard POSIX compatibility.",
      "Resilience in Elas Wave focuses on in-place recovery rather than traditional batch checkpoint/restart. "
    ]
  },
  {
    metadata: {
      title: "SecureAuditX: Integrated Privacy-Preserving Auditing",
      repositoryType: "Research Paper / Survey",
      authors: ["Andrew Photinakis "],
      affiliation: "Rochester Institute of Technology (RIT)",
      year: 2025,
      format: "Research report / Comparative synthesis",
      primaryDomains: ["Cloud Computing", "Edge Computing", "IoT/IIoT Security "]
    },
    highLevelDescription: "A research synthesis of privacy-preserving data integrity auditing mechanisms across cloud, edge, and IoT environments.",
    problemSpace: [
      "Metadata leakage (file identities, access patterns, timestamps).",
      "Dependence on full data access and high computational/communication overhead.",
      "Poor support for dynamic data updates (insert, update, delete).",
      "Lack of physical security assumptions for edge and Industrial IoT (IIoT) devices. "
    ],
    coreContributions: [
      "Comparative analysis of five state-of-the-art auditing frameworks.",
      "Unified evaluation criteria covering privacy guarantees, efficiency, scalability, and trust assumptions.",
      "Architectural synthesis combining identity-based cryptography, homomorphic verification, and hardware roots of trust.",
      "Regulatory and ethical alignment analysis with GDPR, CCPA, and NIST Privacy Framework. "
    ],
    components: [
      {
        name: "Cloud Auditing",
        category: "Auditing Framework",
        problemAddressed: "Integrity verification in cloud storage.",
        keyMechanisms: ["Time-based metadata-hiding verification "],
        keyTakeaway: "Enables verification without compromising metadata privacy. "
      },
      {
        name: "Dynamic IoT",
        category: "Auditing Framework",
        problemAddressed: "Integrity of frequently changing IoT data.",
        keyMechanisms: ["Self-triggered homomorphic auditing "],
        keyTakeaway: "Facilitates automated auditing for dynamic workloads. "
      },
      {
        name: "Cloud-to-Cloud Transfer",
        category: "Auditing Framework",
        problemAddressed: "Integrity during inter-cloud data migration.",
        keyMechanisms: ["Constant-time identity-based auditing "],
        keyTakeaway: "Optimized for efficiency in identity-based systems. "
      },
      {
        name: "HoT Security",
        category: "Auditing Framework",
        problemAddressed: "Hardware-level security for industrial environments.",
        keyMechanisms: ["PUF (Physical Unclonable Functions) + TEE (Trusted Execution Environments)"],
        keyTakeaway: "Leverages hardware roots of trust for verification. "
      },
      {
        name: "Edge Enforcement",
        category: "Access Control / Auditing",
        problemAddressed: "Integrating integrity with access control at the edge.",
        keyMechanisms: ["Integrity-driven access control (EDIV + ABAC) "],
        keyTakeaway: "Synthesizes Edge Data Integrity Verification with Attribute-Based Access Control. "
      }
    ],
    technicalThemes: {
      scheduling: "Not explicitly stated.",
      elasticity: "Not explicitly stated.",
      faultToleranceResilience: "Data integrity and hardware-assisted verification.",
      parallelismModel: "Not explicitly stated.",
      cloudAssumptionsChallenged: "Challenges the reliance on full data access and the transparency of metadata. "
    },
    technologies: {
      programmingModels: ["Identity-Based Cryptography (IBC)", "Attribute-Based Access Control (ABAC) "],
      systemConcepts: ["Provable Data Possession (PDP)", "Proof of Retrievability (POR)", "Homomorphic Signatures "],
      hardwareContext: "Physical Unclonable Functions (PUFs), Trusted Execution Environments (TEEs).",
      workloadType: "Dynamic data (insert/update/delete), Cloud-to-Cloud transfer, IIoT. "
    },
    audience: {
      intendedUse: "Research and Industry.",
      targetAudience: "Researchers and developers building privacy-first integrity pipelines. "
    },
    keywords: ["privacy-preserving auditing", "data integrity", "cloud-security", "edge-computing", "iot-security", "iiot", "cryptography", "homomorphic-verification", "trusted-execution-environment", "metadata-privacy"],
    citation: "@techreport { photinakis2025SecureAuditX, title = { Integrated Privacy-Preserving Auditing: Synthesizing Cloud, Edge, and IoT Integrity Mechanisms}, author = { Photinakis, Andrew}, institution { Rochester Institute of Technology}, year = {2025} }",
    links: {
      repository: "https://github.com/acphotinakis/SecureAuditX",
      paper: "https://github.com/acphotinakis/SecureAuditX/blob/main/Report.pdf"
    },
    notes: [
      "The project argues for layered, context-aware auditing rather than a single monolithic protocol.",
      "License is released for academic and research use; author contact is required for other reuse."
    ]
  },
];

export function ResearchSection() {
  return (
    <section id="research" className="py-24 relative border-t border-border">
      <div className="container mx-auto px-6 max-w-5xl">
        {/* Section header */}
        <div className="mb-12">
          <h2 className="section-heading">RESEARCH & SYNTHESIS</h2>
        </div>

        {/* Projects */}
        <div className="space-y-12">
          {researchProjects.map((project, idx) => (
            <div key={idx} className="terminal-card p-6 hover:border-primary transition-colors duration-200">
              {/* Title & Authors */}
              <div className="mb-4">
                <h3 className="text-lg md:text-xl font-medium text-foreground mb-1">{project.metadata.title}</h3>
                <p className="text-xs text-primary">
                  {project.metadata.authors.join(', ')} | {project.metadata.affiliation} | {project.metadata.year}
                </p>
                <p className="text-xs text-muted-foreground">{project.metadata.format}</p>
                              {/* Links */}
              <div className="mt-4 text-md">
                    {project.links.paper && (
                      <a href={project.links.paper} target="_blank" rel="noopener noreferrer" className="px-3 py-1 text-[10px] border border-border text-muted-foreground hover:border-primary hover:text-primary transition-colors uppercase">
                        Paper.PDF
                      </a>
                    )}
                    <a href={project.links.repository} target="_blank" rel="noopener noreferrer" className="px-3 py-1 text-[10px] border border-border text-muted-foreground hover:border-primary hover:text-primary transition-colors uppercase">
                      Repo
                    </a>
              </div>
              </div>

              {/* High-level description */}
              <p className="text-muted-foreground text-sm mb-4 leading-relaxed">{project.highLevelDescription}</p>

              {/* Problem Space */}
              {project.problemSpace.length > 0 && (
                <div className="mb-4">
                  <h4 className="font-semibold text-foreground mb-1">Problem Space:</h4>
                  <ul className="list-disc list-inside text-sm text-muted-foreground space-y-1">
                    {project.problemSpace.map((p, i) => (
                      <li key={i}>{p}</li>
                    ))}
                  </ul>
                </div>
              )}

              {/* Core Contributions */}
              {project.coreContributions.length > 0 && (
                <div className="mb-4">
                  <h4 className="font-semibold text-foreground mb-1">Core Contributions:</h4>
                  <ul className="list-disc list-inside text-sm text-muted-foreground space-y-1">
                    {project.coreContributions.map((c, i) => (
                      <li key={i}>{c}</li>
                    ))}
                  </ul>
                </div>
              )}

              {/* Components */}
              {project.components.length > 0 && (
                <div className="mb-4">
                  <h4 className="font-semibold text-foreground mb-2">Components:</h4>
                  {project.components.map((comp, i) => (
                    <div key={i} className="mb-2 pl-4 border-l border-border">
                      <p className="font-semibold text-sm text-foreground">{comp.name} ({comp.category})</p>
                      <p className="text-xs text-muted-foreground mb-1">{comp.problemAddressed}</p>
                      <ul className="list-disc list-inside text-xs text-muted-foreground space-y-1 mb-1">
                        {comp.keyMechanisms.map((km, j) => (
                          <li key={j}>{km}</li>
                        ))}
                      </ul>
                      <p className="text-xs text-primary font-medium">Key Takeaway: {comp.keyTakeaway}</p>
                    </div>
                  ))}
                </div>
              )}

              {/* Technical Themes */}
              <div className="mb-4">
                <h4 className="font-semibold text-foreground mb-2">Technical Themes:</h4>
                <ul className="list-disc list-inside text-sm text-muted-foreground space-y-1">
                  {Object.entries(project.technicalThemes).map(([key, val]) => (
                    <li key={key}><span className="font-semibold text-white">{key}:</span> {val}</li>
                  ))}
                </ul>
              </div>

              {/* Technologies */}
              <div className="mb-4">
                <h4 className="font-semibold text-foreground mb-2">Technologies:</h4>
                <ul className="list-disc list-inside text-sm text-muted-foreground space-y-1">
                  {Object.entries(project.technologies).map(([key, val]) => (
                    <li key={key}><span className="font-semibold text-white">{key}:</span> {Array.isArray(val) ? val.join(', ') : val}</li>
                  ))}
                </ul>
              </div>

              {/* Audience */}
              <div className="mb-4">
                <h4 className="font-semibold text-foreground mb-2">Audience:</h4>
                <ul className="list-disc list-inside text-sm text-muted-foreground space-y-1">
                  {Object.entries(project.audience).map(([key, val]) => (
                    <li key={key}><span className="font-semibold text-white">{key}:</span> {val}</li>
                  ))}
                </ul>
              </div>

              {/* Keywords */}
              <div className="mb-4 flex flex-wrap gap-2">
                {project.keywords.map((tag, i) => (
                  <span key={i} className="skill-tag">{tag}</span>
                ))}
              </div>

              {/* Links */}
              <div className="mb-4 text-xs">
                    {project.links.paper && (
                      <a href={project.links.paper} target="_blank" rel="noopener noreferrer" className="px-3 py-1 text-[10px] border border-border text-muted-foreground hover:border-primary hover:text-primary transition-colors uppercase">
                        Paper.PDF
                      </a>
                    )}
                    <a href={project.links.repository} target="_blank" rel="noopener noreferrer" className="px-3 py-1 text-[10px] border border-border text-muted-foreground hover:border-primary hover:text-primary transition-colors uppercase">
                      Repo
                    </a>
              </div>

              {/* Notes */}
              {project.notes.length > 0 && (
                <div className="mb-4">
                  <h4 className="font-semibold text-foreground mb-1">Notes:</h4>
                  <ul className="list-disc list-inside text-sm text-muted-foreground space-y-1">
                    {project.notes.map((note, i) => (
                      <li key={i}>{note}</li>
                    ))}
                  </ul>
                </div>
              )}

              {/* Citation */}
              {project.citation && (
                <div className="text-xs text-primary">
                  Citation: {project.citation}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
