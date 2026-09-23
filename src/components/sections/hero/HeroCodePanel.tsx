import { cn } from "@/lib/utils";

const technologies = [
  "Next.js",
  "TypeScript",
  "NestJS",
  "GraphQL",
  "PostgreSQL",
] as const;

type HeroCodePanelProps = {
  name: string;
  headline: string;
};

export function HeroCodePanel({ name, headline }: HeroCodePanelProps) {
  return (
    <div className="hidden font-mono text-sm lg:block">
      <div
        className={cn(
          "overflow-hidden rounded-lg border border-border/70 bg-[#0d1117] shadow-sm",
          "motion-safe:animate-in motion-safe:fade-in motion-safe:slide-in-from-bottom-4 motion-safe:duration-700",
        )}
      >
        <TerminalHeader />

        <div className="space-y-1 px-6 py-5 leading-7">
          <CodeLine delay={150}>
            <Keyword>const</Keyword> <Variable>engineer</Variable>{" "}
            <Muted>{"= {"}</Muted>
          </CodeLine>

          <CodeProperty name="name" value={name} delay={260} />
          <CodeProperty name="role" value={headline} delay={370} />
          <CodeProperty
            name="focus"
            value="Full-stack development & AI integrations"
            delay={480}
          />

          <CodeStack delay={590} />

          <CodeLine className="text-white/60" delay={700}>
            {"}"}
            <Cursor />
          </CodeLine>
        </div>
      </div>
    </div>
  );
}

function TerminalHeader() {
  return (
    <div className="flex items-center gap-2 border-b border-white/10 bg-white/[0.03] px-4 py-3">
      <span className="size-2.5 rounded-full bg-[#ff5f56]" />
      <span className="size-2.5 rounded-full bg-[#ffbd2e]" />
      <span className="size-2.5 rounded-full bg-[#27c93f]" />

      <span className="ml-2 text-xs text-white/40">profile.ts</span>
    </div>
  );
}

function CodeLine({
  children,
  className = "",
  delay = 0,
}: {
  children: React.ReactNode;
  className?: string;
  delay?: number;
}) {
  return (
    <p
      className={cn(
        "motion-safe:animate-in motion-safe:fade-in motion-safe:slide-in-from-left-1 motion-safe:fill-mode-backwards motion-safe:duration-300",
        className,
      )}
      style={{ animationDelay: `${delay}ms` }}
    >
      {children}
    </p>
  );
}

function CodeProperty({
  name,
  value,
  delay,
}: {
  name: string;
  value: string;
  delay?: number;
}) {
  return (
    <CodeLine className="pl-4" delay={delay}>
      <Property>{name}</Property>
      <Muted>: </Muted>
      <String>{`"${value}"`}</String>
      <Muted>,</Muted>
    </CodeLine>
  );
}

function CodeStack({ delay }: { delay?: number }) {
  return (
    <CodeLine className="pl-4" delay={delay}>
      <Property>stack</Property>
      <Muted>: [</Muted>

      {technologies.map((tech, index) => (
        <span key={tech}>
          <String>{`"${tech}"`}</String>

          {index < technologies.length - 1 && <Muted>, </Muted>}
        </span>
      ))}

      <Muted>],</Muted>
    </CodeLine>
  );
}

function Cursor() {
  return (
    <span
      aria-hidden="true"
      className="ml-1 inline-block h-3.5 w-[7px] translate-y-[2px] bg-[#79c0ff]/80 motion-safe:animate-pulse"
    />
  );
}

function Keyword({ children }: { children: React.ReactNode }) {
  return <span className="text-[#ff7b72]">{children}</span>;
}

function Variable({ children }: { children: React.ReactNode }) {
  return <span className="text-[#d2a8ff]">{children}</span>;
}

function Property({ children }: { children: React.ReactNode }) {
  return <span className="text-[#79c0ff]">{children}</span>;
}

function String({ children }: { children: React.ReactNode }) {
  return <span className="text-[#a5d6ff]">{children}</span>;
}

function Muted({ children }: { children: React.ReactNode }) {
  return <span className="text-white/60">{children}</span>;
}
