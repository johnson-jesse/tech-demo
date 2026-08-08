export default function HubspacePage() {
  return (
    <main className="min-h-screen bg-slate-950 text-slate-100">
      <section className="mx-auto max-w-6xl px-6 py-20">
        <div className="text-center">
          <h1 className="text-5xl font-bold tracking-tight">Hubspace</h1>

          <p className="mt-4 text-xl text-slate-300">
            An exploratory stack simulating a real-time multi person collaboration space built with TypeScript,
            Express, WebSockets, SQLite, and Prisma.
          </p>

          <a
            href="https://hubspace.onrender.com"
            target="_blank"
            rel="noopener noreferrer"
            className="mt-8 inline-block rounded-lg bg-blue-600 px-6 py-3 font-semibold transition hover:bg-blue-500"
          >
            Try It Live →
          </a>

          <p className="mt-3 text-sm text-slate-400">
            Free hosting may take a moment to spin up.
          </p>
        </div>

        <Section title="Overview">
          <p>
            HubSpace is a lightweight realtime web application where
            authenticated users connect, appear as active participants, and
            interact inside a shared environment.
          </p>

          <FeatureList
            items={[
              "User registration and authentication",
              "Password hashing with Argon2",
              "JWT-based authentication",
              "Express REST API design",
              "WebSocket realtime communication",
              "Server-side state management",
              "SQLite persistence with migrations",
              "Deployment as a production web service",
            ]}
          />
        </Section>

        <Section title="Application Architecture">
          <CodeBlock>
            {`Client
 |
 | HTTP / WebSocket
 v
Routes
 |
 v
Controllers
 |
 v
Services
 |
 v
Repositories
 |
 v
SQLite Database


          WebSocket Server
                 |
                 v
          Realtime State
          Actor Management
          Broadcasting`}
          </CodeBlock>
        </Section>

        <Section title="Backend Layers">
          <ArchitectureCard
            title="Routes"
            description="Defines application endpoints and connects requests to controllers."
            items={[
              "Authentication routes",
              "User routes",
              "Health check routes",
              "No business logic",
            ]}
          />

          <ArchitectureCard
            title="Controllers"
            description="Handles HTTP requests and responses."
            items={[
              "Extract request data",
              "Call service methods",
              "Return responses",
              "Translate errors into HTTP responses",
            ]}
          />

          <ArchitectureCard
            title="Services"
            description="Contains core application business logic."
            items={[
              "User registration",
              "Authentication",
              "Password verification",
              "Token generation",
              "User workflows",
            ]}
          />

          <ArchitectureCard
            title="Repositories"
            description="Provides database access while isolating persistence details."
            items={[
              "Create records",
              "Find users",
              "Update data",
              "Execute queries",
            ]}
          />

          <ArchitectureCard
            title="Database Layer"
            description="SQLite provides persistent storage."
            items={[
              "User data",
              "Password hashes",
              "Migration tracking",
              "Application state persistence",
            ]}
          />
        </Section>

        <Section title="Realtime Layer">
          <p>
            The realtime system runs independently from REST API requests while
            sharing application services.
          </p>

          <FeatureList
            items={[
              "Maintain WebSocket connections",
              "Authenticate connected clients",
              "Track active actors",
              "Broadcast world updates",
              "Synchronize connected users",
            ]}
          />
        </Section>

        <Section title="Dependency Injection">
          <p>
            Application dependencies are created centrally and passed into
            application layers. This keeps components loosely coupled and makes
            services easier to test and replace.
          </p>
        </Section>

        <Section title="Tech Stack">
          <div className="grid gap-6 md:grid-cols-3">
            <TechCard
              title="Backend"
              items={[
                "TypeScript",
                "Express",
                "WebSockets",
                "SQLite",
                "Argon2",
                "JWT Authentication",
              ]}
            />

            <TechCard
              title="Frontend"
              items={["HTML", "JavaScript", "Canvas Rendering"]}
            />

            <TechCard title="Deployment" items={["Render Web Service"]} />
          </div>
        </Section>

        <Section title="Project Goals">
          <p>
            Hubspace is a learning project focused on building a complete
            realtime application from the ground up, including authentication,
            networking, persistence, and deployment.
          </p>
        </Section>
      </section>
    </main>
  );
}

type SectionProps = {
  title: string;
  children: React.ReactNode;
};

function Section({ title, children }: SectionProps) {
  return (
    <section className="mt-16">
      <h2 className="mb-6 text-3xl font-bold">{title}</h2>

      <div className="space-y-6 text-lg leading-relaxed text-slate-300">
        {children}
      </div>
    </section>
  );
}

type ListProps = {
  items: string[];
};

function FeatureList({ items }: ListProps) {
  return (
    <ul className="grid gap-3 sm:grid-cols-2">
      {items.map((item) => (
        <li
          key={item}
          className="rounded-lg border border-slate-800 bg-slate-900 p-4"
        >
          ✓ {item}
        </li>
      ))}
    </ul>
  );
}

type ArchitectureCardProps = {
  title: string;
  description: string;
  items: string[];
};

function ArchitectureCard({
  title,
  description,
  items,
}: ArchitectureCardProps) {
  return (
    <div className="rounded-xl border border-slate-800 bg-slate-900 p-6">
      <h3 className="text-xl font-semibold text-white">{title}</h3>

      <p className="mt-2 text-slate-400">{description}</p>

      <ul className="mt-4 space-y-2 text-slate-300">
        {items.map((item) => (
          <li key={item}>• {item}</li>
        ))}
      </ul>
    </div>
  );
}

type TechCardProps = {
  title: string;
  items: string[];
};

function TechCard({ title, items }: TechCardProps) {
  return (
    <div className="rounded-xl border border-slate-800 bg-slate-900 p-6">
      <h3 className="text-xl font-semibold">{title}</h3>

      <ul className="mt-4 space-y-2 text-slate-300">
        {items.map((item) => (
          <li key={item}>{item}</li>
        ))}
      </ul>
    </div>
  );
}

type CodeBlockProps = {
  children: React.ReactNode;
};

function CodeBlock({ children }: CodeBlockProps) {
  return (
    <pre className="overflow-x-auto rounded-xl border border-slate-800 bg-black p-6 text-sm text-green-400">
      <code>{children}</code>
    </pre>
  );
}
