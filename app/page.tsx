import {
  ArrowUpRightIcon,
  BoltIcon,
  CodeBracketIcon,
  DevicePhoneMobileIcon,
  PaintBrushIcon,
  SparklesIcon,
  ChevronDoubleRightIcon,
} from "@heroicons/react/24/outline";
import {
  StarIcon as StarIconSolid,
} from "@heroicons/react/24/solid";
import SiteFooter from "@/app/components/SiteFooter";
import SiteHeader from "@/app/components/SiteHeader";
import PageSection from "./components/PageSection";

const capabilities = [
  {
    icon: SparklesIcon,
    title: "Brand worlds",
    description: "Distinctive identities built to feel like you, only sharper.",
  },
  {
    icon: CodeBracketIcon,
    title: "Digital products",
    description: "Useful, intuitive interfaces that make the complex feel simple.",
  },
  {
    icon: PaintBrushIcon,
    title: "Art direction",
    description: "A clear visual point of view, carried through every detail.",
  },
  {
    icon: DevicePhoneMobileIcon,
    title: "Web experiences",
    description: "Fast, responsive websites made to work beautifully everywhere.",
  },
];

const services = [
  {
    number: "01",
    title: "Find your focus",
    description:
      "We get close to your people, your product, and the opportunity in front of you. Then we make a plan that gives the work a reason to exist.",
    icon: SparklesIcon,
    tags: ["Strategy", "Positioning", "Research"],
  },
  {
    number: "02",
    title: "Make it memorable",
    description:
      "From a flexible identity to the smallest interaction, we build a visual language with enough character to stand apart and room to grow.",
    icon: PaintBrushIcon,
    tags: ["Identity", "Art direction", "UI / UX"],
  },
  {
    number: "03",
    title: "Bring it to life",
    description:
      "Thoughtful engineering turns the design into a polished, accessible experience that feels just as good in the browser as it looks in the deck.",
    icon: BoltIcon,
    tags: ["Development", "Motion", "Launch"],
  },
];

export default function Home() {
  return (
    <div id="top" className="min-h-screen overflow-hidden bg-background text-foreground">
      <SiteHeader />
      <main>
        <PageSection id="hero" className="relative isolate pb-20 pt-12">
          <div
            aria-hidden="true"
            className="pointer-events-none absolute inset-x-0 top-16 -z-10 mx-auto h-120 max-w-5xl rounded-full bg-[radial-gradient(ellipse_at_center,var(--tw-gradient-stops))] from-coral/10 via-transparent to-transparent blur-3xl"
          />
          <div className="mx-auto max-w-4xl text-center">
            <p className="mb-7 inline-flex items-center gap-2 rounded-full border border-line bg-surface/70 px-4 py-2 text-[10px] font-semibold uppercase tracking-[0.2em] text-muted sm:text-xs">
              <span className="size-1.5 rounded-full bg-coral" />
              Building frontend since · 2014
            </p>
            <h1 className="text-balance text-4xl font-medium leading-[1.08] tracking-[-0.055em] sm:text-6xl lg:text-7xl">
              Good work deserves <span className="text-coral">better</span> experiences.
            </h1>
            <p className="mx-auto mt-6 max-w-xl text-pretty text-sm leading-7 text-muted sm:text-base">
              My name is <b>Morten Olgenkær</b>. I&apos;m a lead/principal frontend developer with over a decade of experience and a passion for creating exceptional digital experiences.
            </p>
            <div className="mt-9 flex flex-wrap items-center justify-center gap-3">
              <a
                className="inline-flex items-center gap-2 rounded-full bg-coral px-6 py-3 text-sm font-semibold text-white transition hover:bg-coral/90"
                href="#contact"
              >
                Experiences <StarIconSolid aria-hidden="true" className="size-4" />
              </a>
              <a
                className="rounded-full inline-flex items-center gap-2 border border-line px-6 py-3 text-sm font-medium text-foreground transition hover:bg-surface"
                href="#work"
              >
                Explore more <ChevronDoubleRightIcon aria-hidden="true" className="size-4" />
              </a>
            </div>
          </div>

          <div className="relative mx-auto mt-16 max-w-5xl sm:mt-20">
            <div
              aria-hidden="true"
              className="absolute -inset-x-16 bottom-0 top-8 -z-10 rounded-[50%] bg-coral/10 blur-[90px]"
            />
            <div
              aria-label="Preview of a colorful digital product dashboard"
              className="relative mx-auto max-w-4xl"
              role="img"
            >
              <div className="rounded-t-2xl border border-white/15 bg-[#111522] p-2 shadow-[0_35px_100px_-35px_rgba(0,0,0,0.8)] sm:rounded-t-[1.4rem] sm:p-3">
                <div className="overflow-hidden rounded-t-xl bg-[#f7f7fa] text-[#191c2b] sm:rounded-t-2xl">
                  <div className="flex h-9 items-center gap-1.5 border-b border-[#e7e8ef] px-3 sm:h-11 sm:px-5">
                    <span className="size-2 rounded-full bg-[#ff625e]" />
                    <span className="size-2 rounded-full bg-[#ffc26e]" />
                    <span className="size-2 rounded-full bg-[#77c99a]" />
                    <div className="mx-auto hidden h-5 w-2/5 rounded-full bg-[#eceef3] sm:block" />
                    <div className="ml-auto flex gap-2">
                      <span className="size-4 rounded-full bg-[#e6e8ef]" />
                      <span className="size-4 rounded-full bg-[#e6e8ef]" />
                    </div>
                  </div>
                  <div className="grid min-h-[17rem] grid-cols-[3.25rem_1fr] sm:min-h-[25rem] sm:grid-cols-[4.5rem_1fr]">
                    <div className="flex flex-col items-center gap-4 border-r border-[#e7e8ef] py-4 sm:gap-6 sm:py-6">
                      <span className="grid size-6 place-items-center rounded-lg bg-[#ff625e] text-[10px] font-bold text-white">F</span>
                      <span className="h-1 w-5 rounded-full bg-[#c4c6d1]" />
                      <span className="h-1 w-5 rounded-full bg-[#e0e1e8]" />
                      <span className="h-1 w-5 rounded-full bg-[#e0e1e8]" />
                      <span className="mt-auto size-6 rounded-full bg-[#e8e9ef]" />
                    </div>
                    <div className="p-3 sm:p-7">
                      <div className="mb-4 flex items-center justify-between sm:mb-7">
                        <div>
                          <div className="h-2 w-20 rounded-full bg-[#25293a] sm:w-28" />
                          <div className="mt-2 h-1.5 w-28 rounded-full bg-[#d2d4de] sm:w-40" />
                        </div>
                        <div className="h-7 w-16 rounded-lg bg-[#ff625e] sm:h-9 sm:w-24" />
                      </div>
                      <div className="grid gap-3 sm:grid-cols-[1.35fr_0.65fr] sm:gap-5">
                        <div className="relative min-h-36 overflow-hidden rounded-xl bg-[linear-gradient(130deg,#171b2b_0%,#282d46_46%,#ff625e_47%,#ff9b72_72%,#ffd18e_100%)] p-4 sm:min-h-64 sm:p-7">
                          <div className="absolute -right-4 -top-8 size-36 rounded-full border-[18px] border-white/10 sm:size-56 sm:border-[28px]" />
                          <div className="relative mt-3 max-w-44 sm:mt-8">
                            <span className="text-[8px] uppercase tracking-[0.2em] text-white/65 sm:text-[10px]">A little more color</span>
                            <div className="mt-2 text-lg font-medium leading-tight tracking-tight text-white sm:text-3xl">Make room<br />for wonder.</div>
                            <div className="mt-4 h-6 w-20 rounded-full bg-white text-center text-[8px] font-semibold leading-6 text-[#202236] sm:mt-6 sm:h-8 sm:w-28 sm:text-[10px] sm:leading-8">See what&apos;s new</div>
                          </div>
                          <span className="absolute bottom-5 right-5 size-8 rounded-full border border-white/60 sm:bottom-8 sm:right-8 sm:size-12" />
                        </div>
                        <div className="grid grid-cols-2 gap-2 sm:grid-cols-1 sm:gap-4">
                          <div className="rounded-xl border border-[#e7e8ef] p-3 sm:p-5">
                            <div className="size-6 rounded-lg bg-[#fff0e8] sm:size-8" />
                            <div className="mt-3 h-1.5 w-12 rounded-full bg-[#2c3040] sm:mt-5 sm:w-20" />
                            <div className="mt-2 h-1 w-16 rounded-full bg-[#d2d4de] sm:w-28" />
                          </div>
                          <div className="rounded-xl border border-[#e7e8ef] p-3 sm:p-5">
                            <div className="flex h-8 items-end gap-1 sm:h-12">
                              <span className="h-3 w-2 rounded-t bg-[#ffb786] sm:h-5 sm:w-3" />
                              <span className="h-5 w-2 rounded-t bg-[#ff625e] sm:h-8 sm:w-3" />
                              <span className="h-4 w-2 rounded-t bg-[#ffc98f] sm:h-6 sm:w-3" />
                              <span className="h-7 w-2 rounded-t bg-[#ff625e] sm:h-10 sm:w-3" />
                              <span className="h-5 w-2 rounded-t bg-[#ffb786] sm:h-7 sm:w-3" />
                            </div>
                            <div className="mt-2 h-1.5 w-14 rounded-full bg-[#2c3040] sm:mt-4 sm:w-20" />
                            <div className="mt-2 h-1 w-20 rounded-full bg-[#d2d4de] sm:w-28" />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="mx-auto h-2 w-[82%] rounded-b-lg bg-[#252938] sm:h-3" />
              <div className="mx-auto h-1 w-[28%] rounded-b-xl bg-[#393d4b]" />
              <div className="absolute -left-4 top-1/3 hidden -translate-x-1/2 rounded-2xl border border-line bg-surface/90 p-4 shadow-xl backdrop-blur md:block">
                <div className="flex items-center gap-3">
                  <span className="grid size-9 place-items-center rounded-xl bg-coral/15 text-coral">
                    <SparklesIcon aria-hidden="true" className="size-5" />
                  </span>
                  <span className="text-xs font-medium">Made to feel<br />different.</span>
                </div>
              </div>
              <div className="absolute -right-4 bottom-12 hidden translate-x-1/2 rounded-2xl border border-line bg-surface/90 p-4 shadow-xl backdrop-blur md:block">
                <div className="flex items-center gap-3">
                  <span className="grid size-9 place-items-center rounded-xl bg-[#ffc98f]/15 text-peach">
                    <BoltIcon aria-hidden="true" className="size-5" />
                  </span>
                  <span className="text-xs font-medium">Thoughtful by<br />design.</span>
                </div>
              </div>
            </div>
          </div>
          <p className="mt-8 text-center text-[10px] font-medium uppercase tracking-[0.2em] text-muted">
            Strategy · Identity · Digital
          </p>
        </PageSection>

        <section id="work" className="px-5 py-5 sm:px-8 lg:py-12">
          <div className="mx-auto grid max-w-6xl grid-cols-2 overflow-hidden rounded-2xl border border-line bg-surface/80 sm:grid-cols-4">
            {capabilities.map(({ icon: Icon, title, description }) => (
              <article
                key={title}
                className="border-b border-line p-5 last:border-0 even:border-l sm:border-b-0 sm:border-l sm:p-7 first:border-l-0 [&:nth-child(3)]:border-b-0"
              >
                <Icon aria-hidden="true" className="mb-5 size-5 text-coral" />
                <h2 className="text-sm font-semibold">{title}</h2>
                <p className="mt-2 text-xs leading-5 text-muted">{description}</p>
              </article>
            ))}
          </div>
        </section>

        <section id="services" className="px-5 pb-24 pt-24 sm:px-8 sm:pb-32 sm:pt-32">
          <div className="mx-auto max-w-6xl">
            <div className="mx-auto max-w-xl text-center">
              <p className="text-[10px] font-semibold uppercase tracking-[0.22em] text-coral">Good work, good people</p>
              <h2 className="mt-4 text-3xl font-medium tracking-[-0.045em] sm:text-5xl">
                Small team. <span className="text-muted">Full picture.</span>
              </h2>
              <p className="mt-4 text-sm leading-7 text-muted">
                From first sketch to final pixel, we bring the right minds
                together to make the whole thing feel effortless.
              </p>
            </div>

            <div className="mt-12 grid gap-4 lg:mt-16 lg:grid-cols-3">
              {services.map(({ number, title, description, icon: Icon, tags }) => (
                <article
                  key={number}
                  className="group rounded-2xl border border-line bg-surface/70 p-6 transition hover:-translate-y-1 hover:border-coral/40 sm:p-8"
                >
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-medium tracking-[0.16em] text-muted">{number}</span>
                    <Icon aria-hidden="true" className="size-5 text-coral transition group-hover:scale-110" />
                  </div>
                  <h3 className="mt-8 text-xl font-medium tracking-tight">{title}</h3>
                  <p className="mt-3 min-h-24 text-sm leading-6 text-muted">{description}</p>
                  <div className="mt-7 flex flex-wrap gap-2">
                    {tags.map((tag) => (
                      <span key={tag} className="rounded-full border border-line px-3 py-1.5 text-[10px] font-medium text-muted">
                        {tag}
                      </span>
                    ))}
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section id="contact" className="px-5 pb-24 sm:px-8 sm:pb-32">
          <div className="relative mx-auto max-w-6xl overflow-hidden rounded-3xl border border-line bg-surface px-6 py-12 text-center sm:px-12 sm:py-16">
            <div aria-hidden="true" className="absolute -right-12 -top-24 size-64 rounded-full bg-coral/10 blur-3xl" />
            <p className="relative text-[10px] font-semibold uppercase tracking-[0.22em] text-coral">Have a good one?</p>
            <h2 className="relative mx-auto mt-4 max-w-2xl text-3xl font-medium tracking-[-0.045em] sm:text-5xl">
              Let&apos;s make something that matters.
            </h2>
            <a
              className="relative mt-8 inline-flex items-center gap-2 rounded-full bg-coral px-6 py-3 text-sm font-semibold text-white transition hover:bg-coral/90"
              href="#"
            >
              Tell us about it <ArrowUpRightIcon aria-hidden="true" className="size-4" />
            </a>
          </div>
        </section>
      </main>
      <SiteFooter />
    </div>
  );
}
