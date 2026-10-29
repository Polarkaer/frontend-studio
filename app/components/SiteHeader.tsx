import ThemeToggle from "./ThemeToggle";

export default function SiteHeader() {
  return (
    <header className="relative z-10 border-b border-line bg-background/80 backdrop-blur-xl">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-5 py-5 sm:px-8">
        <a className="flex items-center gap-3" href="#" aria-label="Frontend Studio home">
          <span className="grid size-6 place-items-center rounded-full bg-foreground text-background">
            <span className="size-2 rounded-full bg-background" />
          </span>
          <span className="text-sm font-semibold tracking-[0.18em]">Frontend Studio</span>
        </a>
        <nav aria-label="Main navigation" className="hidden items-center gap-8 md:flex">
          <a className="text-sm text-muted transition hover:text-foreground" href="#work">What I do</a>
          <a className="text-sm text-muted transition hover:text-foreground" href="#services">Experiences</a>
          <a className="text-sm text-muted transition hover:text-foreground" href="#services">Other platforms</a>
          <a className="text-sm text-muted transition hover:text-foreground" href="#contact">Contact</a>
        </nav>
        <div className="flex items-center gap-3">
          <a
            className="hidden rounded-full bg-coral px-5 py-2.5 text-xs font-semibold text-white transition hover:bg-coral/90 sm:inline-flex"
            href="#contact"
          >
            Let&apos;s talk <span aria-hidden="true" className="ml-2">↗</span>
          </a>
          <ThemeToggle />
        </div>
      </div>
    </header>
  );
}
