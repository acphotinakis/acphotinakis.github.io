import { createFileRoute } from "@tanstack/react-router";
import { useQuery } from "@tanstack/react-query";
import { getGithubData } from "@/lib/github.functions";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Andrew Photinakis — Software Engineer" },
      {
        name: "description",
        content:
          "Portfolio of Andrew Photinakis — backend engineering, distributed systems, cloud infrastructure, and AI systems. M.S. Computer Science at RIT, expected December 2026.",
      },
      { property: "og:title", content: "Andrew Photinakis — Software Engineer" },
      {
        property: "og:description",
        content:
          "Experience at AWS, PwC, and TechSource. Projects in distributed consensus, high-performance computing, and AI pipelines.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Portfolio,
});

const LINKS = {
  email: "andrewcphotinakis@gmail.com",
  linkedin: "https://www.linkedin.com/in/andrew-photinakis/",
  github: "https://github.com/acphotinakis",
  site: "https://acphotinakis.github.io/",
  resume: "/Andrew_Photinakis_Resume.pdf",
};

const EXPERIENCE = [
  {
    role: "Software Development Engineer Intern",
    org: "Amazon Web Services (AWS)",
    period: "May 2026 – August 2026",
    summary:
      "Engineered highly scalable public-facing APIs and asynchronous backend orchestration workflows for cloud networking infrastructure, enabling automated, low-latency resource provisioning across distributed environments. Built a control-plane service surfacing real-time network routing health with optimized database views and custom state-reconciliation algorithms.",
    headline: "30% faster team workflows",
    metrics: ["low-latency provisioning", "real-time routing health"],
    techNote: "Built a multi-agent Generative AI orchestration system on MCP servers + LLMs",
  },
  {
    role: "Software Engineer & Cyber Risk Consulting Intern",
    org: "PricewaterhouseCoopers (PwC)",
    period: "June 2025 – August 2025",
    summary:
      "Accelerated an AI-driven document-processing pipeline by consolidating Python and .NET workflows into a unified C# (.NET Core) system for LLM orchestration and YAML validation. Designed a modular Angular + Node.js + BigQuery frontend delivering real-time metric visualizations in Google Cloud.",
    headline: "2× pipeline throughput",
    metrics: ["90% ↓ setup time", "80% ↓ AI hallucinations"],
    techNote: "Prompt-safe schema constraints for Vertex AI stability",
  },
  {
    role: "Software Engineering Co-op",
    org: "TechSource, Inc.",
    period: "January 2024 – December 2025",
    summary:
      "Led development of a fully automated Java data pipeline on Azure Function Apps, cutting execution time and operational cost while automating daily reports to stakeholders. Integrated Swagger and SOAP APIs for reliable data extraction, and built reusable TypeScript + Next.js UI components for the U.S. Department of Energy's GPT-4-powered AI platform.",
    headline: "98% ↓ execution time",
    metrics: ["99% data-transfer accuracy", "DOE GPT-4 platform UI"],
    techNote: "Azure Function Apps · Next.js · TailwindCSS",
  },
];

const PROJECTS = [
  {
    domain: "Distributed Systems",
    title: "SBMPI Blockchain Simulator",
    blurb:
      "High-performance blockchain simulator in C++17 using MPI and OpenMP — PBFT consensus with 3-phase commit, sharded validation, and secp256k1 cryptography.",
    repo: "acphotinakis/HPC-Blockchain",
  },
  {
    domain: "Networking",
    title: "RDT Email Service",
    blurb:
      "SMTP/POP3 mail service achieving 100% packet delivery over lossy UDP via a custom RDT 3.0 transport with CRC32 checksums and a thread-safe persistence layer.",
    repo: "acphotinakis/RDT-Mail-Service",
  },
  {
    domain: "Fintech · AI",
    title: "TradeSync",
    blurb:
      "AI-powered trading simulator with a microservices backend — sub-5ms order execution, reinforcement-learning strategies, and WebSocket trading rooms.",
    repo: "acphotinakis/TradeSync",
  },
  {
    domain: "Research",
    title: "Parallel Computing in the Cloud",
    blurb:
      "IEEE-format research report on scheduling, elasticity, and resilience in heterogeneous cloud environments — an argument for elastic-native system design.",
    repo: "acphotinakis/ElasticNative-Cloud",
  },
  {
    domain: "Security Research",
    title: "SecureAuditX",
    blurb:
      "Research synthesis of privacy-preserving data-integrity auditing across cloud, edge, and IoT — identity-based crypto, homomorphic verification, and hardware trust.",
    repo: "acphotinakis/SecureAuditX",
  },
  {
    domain: "Full-Stack Security",
    title: "Aegis-Nexus Platform",
    blurb:
      "Modular platform with session-based authentication, MongoDB persistence, and a component-based UI interacting securely with backend services.",
    repo: "acphotinakis/Aegis-Nexus",
  },
  {
    domain: "Data Structures",
    title: "RadixIP",
    blurb:
      "Radix-tree IPv4 address database in C using bit manipulation — O(K) lookups, flexible full or partial queries, verified memory-safe with Valgrind.",
    repo: "acphotinakis/RadixIP",
  },
  {
    domain: "Cryptography",
    title: "SecureComm",
    blurb:
      "RSA encryption suite in C# with a CLI command pattern and asynchronous HTTP key/message exchange — Miller-Rabin prime generation included.",
    repo: "acphotinakis/SecureComm",
  },
];

const SKILLS = [
  {
    category: "Languages",
    items: "Java · C · C++ · C# · Python · TypeScript · SQL · Bash",
  },
  {
    category: "Frameworks",
    items:
      "Spring Boot · .NET Core · React · Angular · Next.js · Node.js · FastAPI · Flask · TailwindCSS",
  },
  {
    category: "Cloud & Data",
    items:
      "Azure Functions · Azure Data Factory · Google Cloud Platform · PostgreSQL · MongoDB · BigQuery · DynamoDB · MySQL",
  },
  {
    category: "AI / ML",
    items:
      "Model Context Protocol · Agentic AI Workflows · Vertex AI · TensorFlow · PyTorch · Scikit-learn · Keras",
  },
];

const TRACK_RECORD = [
  { label: "pipeline speedup", value: "98%", width: "98%" },
  { label: "data accuracy", value: "99%", width: "99%" },
  { label: "packet delivery", value: "100%", width: "100%" },
  { label: "eng velocity gain", value: "30%", width: "30%" },
];

function GithubLive() {
  const { data, isLoading, isError } = useQuery({
    queryKey: ["github", "acphotinakis"],
    queryFn: () => getGithubData(),
    staleTime: 5 * 60 * 1000,
  });

  return (
    <section id="github" className="py-14">
      <div className="mb-8 flex items-baseline justify-between border-b border-border pb-3">
        <h2 className="text-2xl font-bold tracking-tight">GitHub — live</h2>
        <span className="font-mono text-[11px] uppercase tracking-[0.15em] text-muted-foreground">
          api.github.com
        </span>
      </div>

      {isLoading && (
        <div className="rounded-xl border border-border bg-card/40 p-6 font-mono text-[11px] text-muted-foreground ring-1 ring-black/5 backdrop-blur-xl">
          $ fetching github.com/acphotinakis …
        </div>
      )}

      {isError && (
        <div className="rounded-xl border border-border bg-card/40 p-6 font-mono text-[11px] text-muted-foreground ring-1 ring-black/5 backdrop-blur-xl">
          Live data unavailable right now — visit{" "}
          <a
            href="https://github.com/acphotinakis"
            target="_blank"
            rel="noreferrer"
            className="text-blue hover:underline"
          >
            github.com/acphotinakis
          </a>
          .
        </div>
      )}

      {data && (
        <div className="space-y-4">
          <div className="flex flex-col gap-5 rounded-xl border border-border bg-card/55 p-5 ring-1 ring-black/5 backdrop-blur-xl sm:flex-row sm:items-center sm:p-6">
            <img
              src={data.profile.avatarUrl}
              alt={`${data.profile.name} on GitHub`}
              className="size-16 rounded-full border border-border"
            />
            <div className="flex-1">
              <h3 className="text-base font-semibold">
                {data.profile.name}{" "}
                <span className="font-mono text-[11px] font-normal text-muted-foreground">
                  @{data.profile.login}
                </span>
              </h3>
              {data.profile.bio && (
                <p className="mt-1 max-w-[60ch] text-sm text-muted-foreground text-pretty">
                  {data.profile.bio}
                </p>
              )}
            </div>
            <div className="flex gap-4 font-mono text-[11px] text-muted-foreground sm:flex-col sm:gap-1.5 sm:text-right">
              <span>
                <span className="text-foreground">{data.profile.publicRepos}</span> repos
              </span>
              <span>
                <span className="text-foreground">{data.totalStars}</span> ★ stars
              </span>
              <span>
                <span className="text-foreground">{data.profile.followers}</span> followers
              </span>
            </div>
          </div>

          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {data.topRepos.map((r) => (
              <a
                key={r.name}
                href={r.htmlUrl}
                target="_blank"
                rel="noreferrer"
                className="group flex flex-col rounded-xl border border-border bg-card/55 p-5 ring-1 ring-black/5 backdrop-blur-xl transition-colors hover:border-blue/40"
              >
                <div className="flex items-baseline justify-between gap-2">
                  <h4 className="text-sm font-semibold transition-colors group-hover:text-blue">
                    {r.name}
                  </h4>
                  <span className="font-mono text-[11px] text-muted-foreground">
                    ★ {r.stars} · ⑂ {r.forks}
                  </span>
                </div>
                <p className="mt-1.5 flex-1 text-sm text-muted-foreground text-pretty">
                  {r.description ?? "No description."}
                </p>
                <div className="mt-4 flex items-center justify-between font-mono text-[11px] text-muted-foreground">
                  <span>{r.language ?? "—"}</span>
                  <span>
                    updated{" "}
                    {new Date(r.updatedAt).toLocaleDateString("en-US", {
                      month: "short",
                      year: "numeric",
                    })}
                  </span>
                </div>
              </a>
            ))}
          </div>

          <p className="font-mono text-[11px] text-muted-foreground/80">
            live from the GitHub API · fetched{" "}
            {new Date(data.fetchedAt).toLocaleTimeString("en-US", {
              hour: "2-digit",
              minute: "2-digit",
            })}
          </p>
        </div>
      )}
    </section>
  );
}

function Portfolio() {
  return (
    <div className="min-h-screen bg-background font-sans text-foreground antialiased">
      {/* Ambient background glows */}
      <div className="pointer-events-none fixed inset-0 z-0 overflow-hidden">
        <div className="absolute -top-32 left-1/2 h-[520px] w-[820px] -translate-x-1/2 rounded-full bg-white/70 blur-3xl" />
        <div className="absolute top-1/3 -right-40 h-[420px] w-[420px] rounded-full bg-blue-soft/20 blur-3xl" />
        <div className="absolute bottom-0 left-[-10%] h-[380px] w-[560px] rounded-full bg-blue/10 blur-3xl" />
      </div>

      <div className="relative z-10 mx-auto max-w-6xl px-6">
        {/* Header */}
        <header className="sticky top-0 z-30 -mx-6 mb-10 border-b border-border/70 bg-background/70 backdrop-blur-xl">
          <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
            <span className="font-mono text-xs tracking-tight">
              <span className="text-blue">▍</span>{" "}
              <span className="font-semibold">andrew.photinakis</span>
            </span>
            <nav className="hidden items-center gap-7 font-mono text-[11px] uppercase tracking-[0.15em] text-muted-foreground sm:flex">
              <a className="transition-colors hover:text-foreground" href="#work">
                Work
              </a>
              <a className="transition-colors hover:text-foreground" href="#projects">
                Projects
              </a>
              <a className="transition-colors hover:text-foreground" href="#skills">
                Skills
              </a>
              <a className="transition-colors hover:text-foreground" href="#contact">
                Contact
              </a>
            </nav>
            <a
              href="#contact"
              className="rounded-md border border-border bg-card/60 px-3 py-1.5 font-mono text-[11px] tracking-tight text-foreground transition-colors hover:border-blue/40 hover:text-blue"
            >
              Open to work
            </a>
          </div>
        </header>

        {/* Hero */}
        <section className="grid items-center gap-10 py-10 lg:grid-cols-12 lg:py-16">
          <div className="lg:col-span-7">
            <div className="rise mb-6 inline-flex items-center gap-2 rounded-full border border-border bg-card/50 px-3 py-1 font-mono text-[11px] uppercase tracking-[0.15em] text-muted-foreground backdrop-blur-md">
              <span className="size-1.5 rounded-full bg-blue" /> MS CS · RIT · Dec 2026
            </div>
            <h1
              className="rise text-5xl font-extrabold leading-[0.95] tracking-tight text-balance sm:text-6xl"
              style={{ animationDelay: "80ms" }}
            >
              Andrew Photinakis
            </h1>
            <p
              className="rise mt-5 max-w-[36ch] text-lg text-muted-foreground text-pretty"
              style={{ animationDelay: "160ms" }}
            >
              I build scalable backend systems and distributed infrastructure — cloud orchestration,
              high-performance computing, and AI-powered pipelines.
            </p>
            <div
              className="rise mt-4 font-mono text-xs text-muted-foreground"
              style={{ animationDelay: "220ms" }}
            >
              <span className="text-blue">$</span> <span className="text-foreground">whoami</span> —
              backend &amp; distributed systems engineer
              <span className="caret text-blue">▍</span>
            </div>
            <div
              className="rise mt-8 flex flex-wrap items-center gap-3"
              style={{ animationDelay: "300ms" }}
            >
              <a
                href="#projects"
                className="rounded-md bg-primary px-5 py-2.5 text-sm font-medium text-primary-foreground transition-colors hover:bg-blue"
              >
                View projects
              </a>
              <a
                href="#contact"
                className="rounded-md border border-border bg-card/50 px-5 py-2.5 text-sm font-medium text-foreground backdrop-blur-md transition-colors hover:border-blue/40"
              >
                Get in touch
              </a>
            </div>
          </div>
          <div className="rise lg:col-span-5" style={{ animationDelay: "200ms" }}>
            <div className="rounded-2xl border border-border bg-card/55 p-5 ring-1 ring-black/5 backdrop-blur-xl">
              <div className="flex items-center justify-between font-mono text-[11px] uppercase tracking-[0.15em] text-muted-foreground">
                <span>Track record</span>
                <span className="text-blue">● shipping</span>
              </div>
              <div className="mt-4 space-y-3">
                {TRACK_RECORD.map((m) => (
                  <div key={m.label}>
                    <div className="flex justify-between font-mono text-[11px] text-muted-foreground">
                      <span>{m.label}</span>
                      <span className="text-foreground">{m.value}</span>
                    </div>
                    <div className="mt-1.5 h-1.5 overflow-hidden rounded-full bg-foreground/10">
                      <div className="h-full rounded-full bg-blue" style={{ width: m.width }} />
                    </div>
                  </div>
                ))}
              </div>
              <div className="flowline mt-5 h-px w-full" />
              <p className="mt-3 font-mono text-[11px] text-muted-foreground">
                3 internships · 8 open-source systems · 2 research reports
              </p>
            </div>
          </div>
        </section>

        {/* Experience */}
        <section id="work" className="py-14">
          <div className="mb-8 flex items-baseline justify-between border-b border-border pb-3">
            <h2 className="text-2xl font-bold tracking-tight">Experience</h2>
            <span className="font-mono text-[11px] uppercase tracking-[0.15em] text-muted-foreground">
              03 internships
            </span>
          </div>
          <div className="space-y-3">
            {EXPERIENCE.map((job) => (
              <div
                key={job.org}
                className="group rounded-xl border border-border bg-card/55 p-5 ring-1 ring-black/5 backdrop-blur-xl transition-colors hover:border-blue/40 sm:p-6"
              >
                <div className="flex flex-wrap items-baseline justify-between gap-2">
                  <h3 className="text-base font-semibold">
                    {job.role} — {job.org}
                  </h3>
                  <span className="font-mono text-[11px] text-muted-foreground">{job.period}</span>
                </div>
                <p className="mt-2 max-w-[62ch] text-sm text-muted-foreground text-pretty">
                  {job.summary}
                </p>
                <div className="mt-4 flex flex-wrap items-center gap-2">
                  <span className="rounded-md bg-blue/10 px-2.5 py-1 font-mono text-[11px] font-medium text-blue">
                    {job.headline}
                  </span>
                  {job.metrics.map((m) => (
                    <span
                      key={m}
                      className="rounded-md bg-foreground/5 px-2.5 py-1 font-mono text-[11px] text-muted-foreground"
                    >
                      {m}
                    </span>
                  ))}
                </div>
                <p className="mt-3 font-mono text-[11px] text-muted-foreground/80">
                  {job.techNote}
                </p>
              </div>
            ))}
          </div>

          {/* Education */}
          <div className="mt-3 rounded-xl border border-border bg-card/40 p-5 ring-1 ring-black/5 backdrop-blur-xl sm:p-6">
            <div className="flex flex-wrap items-baseline justify-between gap-2">
              <h3 className="text-base font-semibold">
                Rochester Institute of Technology — M.S. Computer Science
              </h3>
              <span className="font-mono text-[11px] text-muted-foreground">Expected Dec 2026</span>
            </div>
            <p className="mt-2 text-sm text-muted-foreground">
              B.S. Computer Science, December 2025 · Minor in Finance · Presidential Scholar &amp;
              Dean's List · Calculus Teaching Assistant
            </p>
          </div>
        </section>

        {/* Projects */}
        <section id="projects" className="py-14">
          <div className="mb-8 flex items-baseline justify-between border-b border-border pb-3">
            <h2 className="text-2xl font-bold tracking-tight">Projects</h2>
            <span className="font-mono text-[11px] uppercase tracking-[0.15em] text-muted-foreground">
              08 systems
            </span>
          </div>
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {PROJECTS.map((p) => (
              <a
                key={p.title}
                href={`https://github.com/${p.repo}`}
                target="_blank"
                rel="noreferrer"
                className="group flex flex-col rounded-xl border border-border bg-card/55 p-5 ring-1 ring-black/5 backdrop-blur-xl transition-colors hover:border-blue/40"
              >
                <span className="font-mono text-[11px] uppercase tracking-[0.12em] text-blue">
                  {p.domain}
                </span>
                <h3 className="mt-2 text-base font-semibold transition-colors group-hover:text-blue">
                  {p.title}
                </h3>
                <p className="mt-1.5 flex-1 text-sm text-muted-foreground text-pretty">{p.blurb}</p>
                <span className="mt-4 flex items-center gap-1 font-mono text-[11px] text-muted-foreground transition-colors group-hover:text-foreground">
                  github.com/{p.repo}{" "}
                  <span className="opacity-0 transition-opacity group-hover:opacity-100">↗</span>
                </span>
              </a>
            ))}
          </div>
        </section>

        <GithubLive />

        {/* Skills */}
        <section id="skills" className="py-14">
          <div className="mb-8 flex items-baseline justify-between border-b border-border pb-3">
            <h2 className="text-2xl font-bold tracking-tight">Skills</h2>
            <span className="font-mono text-[11px] uppercase tracking-[0.15em] text-muted-foreground">
              taxonomy
            </span>
          </div>
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {SKILLS.map((s) => (
              <div
                key={s.category}
                className="rounded-xl border border-border bg-card/55 p-5 ring-1 ring-black/5 backdrop-blur-xl"
              >
                <h3 className="font-mono text-[11px] uppercase tracking-[0.15em] text-blue">
                  {s.category}
                </h3>
                <p className="mt-3 text-sm text-muted-foreground text-pretty">{s.items}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Contact */}
        <section id="contact" className="py-16">
          <div className="relative overflow-hidden rounded-2xl border border-border bg-card/60 p-8 ring-1 ring-black/5 backdrop-blur-xl sm:p-12">
            <div className="pointer-events-none absolute -top-24 right-0 h-64 w-96 rounded-full bg-blue-soft/20 blur-3xl" />
            <div className="relative">
              <span className="font-mono text-[11px] uppercase tracking-[0.15em] text-blue">
                $ reach out
              </span>
              <h2 className="mt-3 max-w-[20ch] text-3xl font-extrabold tracking-tight text-balance sm:text-4xl">
                Let's build systems that scale.
              </h2>
              <p className="mt-4 max-w-[48ch] text-sm text-muted-foreground text-pretty">
                Hiring for backend, distributed systems, or cloud infrastructure roles? I graduate
                with my M.S. in December 2026 and am open to full-time software engineering
                opportunities.
              </p>
              <div className="mt-6 flex flex-wrap gap-3">
                <a
                  href={`mailto:${LINKS.email}`}
                  className="rounded-md bg-primary px-5 py-2.5 text-sm font-medium text-primary-foreground transition-colors hover:bg-blue"
                >
                  {LINKS.email}
                </a>
                <a
                  href={LINKS.linkedin}
                  target="_blank"
                  rel="noreferrer"
                  className="rounded-md border border-border bg-card/50 px-5 py-2.5 text-sm font-medium text-foreground backdrop-blur-md transition-colors hover:border-blue/40"
                >
                  LinkedIn
                </a>
                <a
                  href={LINKS.github}
                  target="_blank"
                  rel="noreferrer"
                  className="rounded-md border border-border bg-card/50 px-5 py-2.5 text-sm font-medium text-foreground backdrop-blur-md transition-colors hover:border-blue/40"
                >
                  GitHub
                </a>
                <a
                  href={LINKS.resume}
                  className="rounded-md border border-border bg-card/50 px-5 py-2.5 text-sm font-medium text-foreground backdrop-blur-md transition-colors hover:border-blue/40"
                >
                  Résumé ↓
                </a>
              </div>
            </div>
          </div>
          <footer className="mt-8 flex flex-col items-start justify-between gap-2 border-t border-border pt-5 font-mono text-[11px] text-muted-foreground sm:flex-row sm:items-center">
            <span>© 2026 Andrew Photinakis — Washington, D.C.</span>
            <span className="text-muted-foreground">
              acphotinakis.github.io ·{" "}
              <a
                href={LINKS.site}
                target="_blank"
                rel="noreferrer"
                className="text-blue hover:underline"
              >
                site
              </a>{" "}
              · <span className="text-blue">ok</span>
            </span>
          </footer>
        </section>
      </div>
    </div>
  );
}
