import Header from './components/Header'
import Footer from './components/Footer'
import PackageSlider from './components/PackageSlider'
import QuoteForm from './components/QuoteForm'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import ThankYou from './pages/ThankYou'
import { whyIcons, performIcons, controlIcons } from './components/WhyIcons'
import { ColorGoogle, GoogleText } from './components/GoogleText'
import {
  hero,
  lookGoodPoints,
  salesToolPoints,
  enquiryActions,
  websitePackages,
  leadGenPoints,
  performPoints,
  modernControls,
  buildRankGrow,
  whyChoose,
  currentSiteIssues,
  processSteps,
} from './data/content'

function SectionRule() {
  return <div className="mx-auto mb-8 h-1 w-16 rounded-full bg-brand" />
}

function QuoteCta({ className = '' }) {
  return (
    <a
      href="#quote"
      className={`btn-brand inline-flex items-center justify-center rounded-full px-7 py-3.5 text-base font-bold ${className}`}
    >
      Get a Free Quote
    </a>
  )
}

function LandingHome() {
  return (
    <div id="top" className="min-h-screen">
      <Header />

      {/* Hero */}
      <section className="relative overflow-hidden bg-navy text-white min-h-[100svh]">
        <img
          src="/hero-bg.png"
          alt=""
          aria-hidden="true"
          className="absolute inset-0 h-full w-full object-cover object-[70%_center] md:object-right"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-navy/75 via-navy/60 to-navy/80 lg:bg-gradient-to-r lg:from-navy/95 lg:via-navy/75 lg:to-navy/10" />
        <div
          className="pointer-events-none absolute inset-y-0 left-0 z-[15] hidden w-[55%] bg-gradient-to-r from-navy via-navy/80 to-transparent lg:block"
          aria-hidden="true"
        />

        <div className="container-site relative grid min-h-[100svh] items-center gap-6 py-28 lg:grid-cols-2 lg:gap-0">
          <div className="relative z-20 order-2 w-full min-w-0 text-left lg:order-1">
            <p className="font-display text-sm font-semibold tracking-[0.24em] text-cyan uppercase sm:text-base sm:tracking-[0.28em]">
              {hero.eyebrow}
            </p>
            <h1 className="mt-3 max-w-xl font-display text-[1.85rem] leading-[1.15] font-extrabold tracking-tight sm:text-5xl md:mt-4 md:text-6xl lg:text-[4.25rem]">
              {hero.title}
            </h1>
            <p className="mt-4 max-w-xl text-sm leading-relaxed text-white/85 sm:mt-6 sm:text-xl md:text-2xl">
              {hero.subtitle}
            </p>
            <div className="mt-8 flex w-full flex-col gap-3 sm:mt-10 sm:flex-row sm:flex-wrap sm:gap-4">
              <QuoteCta />
            </div>
          </div>

          <div className="relative z-10 order-1 flex w-full min-w-0 items-center justify-center lg:order-2 lg:absolute lg:inset-y-0 lg:right-0 lg:w-[48%] lg:justify-end">
            <img
              src="/hero.png"
              alt="Nexxo Digital website design showcase"
              className="h-auto w-full max-w-sm object-contain sm:max-w-md md:max-w-xl lg:max-w-none lg:w-full lg:origin-right lg:[mask-image:linear-gradient(to_right,transparent_0%,black_28%,black_100%)]"
            />
          </div>
        </div>
      </section>

      {/* Contact form after hero */}
      <section id="quote" className="relative overflow-hidden bg-mist section-space">
        <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-cyan/40 to-transparent" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_15%_0%,rgba(0,194,255,0.1),transparent_40%),radial-gradient(circle_at_85%_100%,rgba(0,87,255,0.08),transparent_45%)]" />

        <div className="container-site relative">
          <div className="mx-auto mb-8 max-w-3xl text-center md:mb-12">
            <div className="mx-auto mb-5 h-1 w-14 rounded-full bg-brand" />
            <p className="font-display text-sm font-semibold tracking-[0.2em] text-blue uppercase">
              Contact
            </p>
            <h2 className="mt-3 font-display text-3xl font-bold tracking-tight text-ink sm:text-4xl md:text-5xl">
              Let’s Build Something Great
            </h2>
            <p className="mt-4 text-base leading-relaxed text-slate sm:text-xl">
              Tell us a little about your project and we’ll get back to you.
            </p>
          </div>

          <div className="mx-auto max-w-3xl">
            <QuoteForm variant="light" />
          </div>
        </div>
      </section>

      {/* Hero follow-up */}
      <section className="relative overflow-hidden bg-white section-space">
        <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-cyan/50 to-transparent" />
        <div className="container-prose relative text-center">
          <div className="mx-auto mb-8 h-1 w-16 rounded-full bg-brand" />
          <div className="space-y-5 text-lg leading-relaxed text-slate md:text-xl">
            {hero.lines.map((line) => (
              <p
                key={line}
                className="font-display text-xl font-semibold text-ink md:text-2xl"
              >
                {line}
              </p>
            ))}
            <p>{hero.body}</p>
            <p>{hero.closing}</p>
          </div>
          <p className="mt-8 text-center font-display text-[clamp(0.85rem,3.8vw,1.875rem)] font-bold tracking-[0.05em] md:tracking-[0.08em]">
            <span className="inline-block whitespace-nowrap">
              <span className="text-brand">MORE ENQUIRIES</span>
              <span className="text-ink/25">.</span>{' '}
              <span className="text-brand">MORE CUSTOMERS</span>
              <span className="text-ink/25">.</span>
            </span>
            <br className="md:hidden" />
            <span className="inline-block whitespace-nowrap md:ml-1">
              <span className="text-brand">MORE BUSINESS</span>
              <span className="text-ink/25">.</span>
            </span>
          </p>
          <div className="mt-10">
            <QuoteCta />
          </div>
        </div>
      </section>

      {/* A website should do more */}
      <section className="relative overflow-hidden bg-mist section-space">
        <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-cyan/50 to-transparent" />

        <div className="container-site relative">
          <div className="grid items-end gap-10 lg:grid-cols-[1.05fr_0.95fr] lg:gap-16">
            <div>
              <div className="mb-6 h-1 w-14 rounded-full bg-brand" />
              <h2 className="max-w-xl font-display text-3xl font-bold tracking-tight text-ink sm:text-4xl md:text-5xl lg:text-[3.25rem] lg:leading-[1.1]">
                A Website Should Do More Than Just Look Good
              </h2>
              <p className="mt-6 max-w-lg text-lg leading-relaxed text-slate md:text-xl">
                A professionally designed website can completely change the way
                potential customers see your business.
              </p>
              <p className="mt-4 font-display text-xl font-bold text-blue md:text-2xl">
                But design alone isn’t enough.
              </p>
            </div>

            <div className="space-y-5 text-base leading-relaxed text-slate md:text-lg">
              <p>
                If visitors arrive on your website and leave without calling,
                enquiring or requesting a quote, you’re losing potential
                business.
              </p>
              <p className="rounded-2xl border border-cyan/25 bg-white/80 px-5 py-4 text-ink">
                That’s why every Nexxo Digital website is designed around{' '}
                <span className="font-semibold text-blue">conversion</span>.
              </p>
              <p>
                We combine strong design, clear messaging, strategically
                positioned calls to action and a simple customer journey to help
                turn more website visitors into enquiries.
              </p>
            </div>
          </div>

          <div className="mt-14 grid overflow-hidden rounded-2xl border border-ink/10 bg-white/70 sm:grid-cols-2 lg:grid-cols-4">
            {lookGoodPoints.map((item, index) => (
              <article
                key={item.title}
                className="border-ink/10 p-6 max-sm:border-b max-sm:last:border-b-0 sm:border-b sm:odd:border-r lg:border-b-0 lg:border-r lg:last:border-r-0 lg:p-7"
              >
                <span className="font-display text-xs font-bold tracking-[0.22em] text-blue/70">
                  0{index + 1}
                </span>
                <h3 className="mt-4 font-display text-base font-bold tracking-[0.08em] text-ink uppercase md:text-lg">
                  <ColorGoogle text={item.title} />
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-slate md:text-base">
                  <ColorGoogle text={item.text} />
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Sales tool */}
      <section className="relative overflow-hidden bg-mist section-space">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_85%_15%,rgba(0,194,255,0.1),transparent_40%),radial-gradient(circle_at_10%_90%,rgba(0,87,255,0.08),transparent_45%)]" />
        <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-blue/30 to-transparent" />

        <div className="container-site relative">
          <div className="grid gap-12 lg:grid-cols-[1.1fr_0.9fr] lg:items-center lg:gap-16">
            <div>
              <div className="mb-6 h-1 w-14 rounded-full bg-brand" />
              <p className="font-display text-sm font-semibold tracking-[0.2em] text-blue uppercase">
                We Build Websites That Work for Your Business
              </p>
              <h2 className="mt-3 max-w-xl font-display text-3xl font-bold tracking-tight text-ink sm:text-4xl md:text-5xl lg:leading-[1.1]">
                Your Website Should Be One of Your Best Sales Tools
              </h2>
              <p className="mt-6 max-w-xl text-lg leading-relaxed text-slate md:text-xl">
                Your website is often the first place somebody goes before
                deciding whether to contact your business.
              </p>
              <p className="mt-5 text-lg font-semibold text-ink md:text-xl">
                We make that journey clear.
              </p>
              <p className="mt-4 max-w-xl text-base leading-relaxed text-slate md:text-lg">
                From the first headline through to the enquiry form, every
                section is designed to move potential customers closer to
                contacting your business.
              </p>
              <div className="mt-8">
                <QuoteCta />
              </div>
            </div>

            <div className="relative">
              <p className="mb-6 font-display text-sm font-semibold tracking-[0.16em] text-blue uppercase">
                In just a few seconds, they need to understand:
              </p>
              <ol className="relative space-y-0">
                {salesToolPoints.map((item, index) => (
                  <li
                    key={item}
                    className="relative flex gap-4 py-4 first:pt-0 last:pb-0"
                  >
                    {index < salesToolPoints.length - 1 && (
                      <span
                        aria-hidden="true"
                        className="absolute top-12 bottom-0 left-[1.15rem] w-px bg-gradient-to-b from-cyan/60 to-blue/20"
                      />
                    )}
                    <span className="relative z-10 flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-navy font-display text-xs font-bold text-cyan ring-4 ring-mist">
                      0{index + 1}
                    </span>
                    <div className="min-w-0 flex-1 pt-1.5">
                      <p className="font-display text-lg font-bold tracking-tight text-ink md:text-xl">
                        {item}
                      </p>
                    </div>
                  </li>
                ))}
              </ol>
            </div>
          </div>
        </div>
      </section>

      {/* Designed around enquiries */}
      <section className="bg-white section-space">
        <div className="container-prose text-center">
          <SectionRule />
          <p className="font-display text-sm font-semibold tracking-[0.2em] text-blue uppercase">
            Designed Around Enquiries
          </p>
          <h2 className="mt-3 font-display text-3xl font-bold tracking-tight text-ink md:text-5xl">
            Turn More of Your Website Traffic Into Leads
          </h2>
          <div className="mt-6 space-y-5 text-lg leading-relaxed text-slate md:text-xl">
            <p>Getting visitors to your website is only half of the job.</p>
            <p>The real value comes when those visitors become enquiries.</p>
            <p>
              Our websites are designed to make taking the next step simple.
            </p>
            <p className="font-semibold text-ink">That could mean:</p>
          </div>
          <ul className="mx-auto mt-6 grid max-w-2xl gap-3 text-left sm:grid-cols-2">
            {enquiryActions.map((item) => (
              <li
                key={item}
                className="flex items-start gap-3 rounded-xl border border-ink/8 bg-mist/50 px-4 py-3 text-base text-ink/85"
              >
                <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-cyan" />
                <span>{item}</span>
              </li>
            ))}
          </ul>
          <p className="mt-8 text-lg leading-relaxed text-slate md:text-xl">
            We remove unnecessary distractions and focus attention on the actions
            that can create new business.
          </p>
        </div>
      </section>

      {/* Professional design */}
      <section className="bg-mist section-space">
        <div className="container-prose text-center">
          <SectionRule />
          <p className="font-display text-sm font-semibold tracking-[0.2em] text-blue uppercase">
            Professional Website Design
          </p>
          <h2 className="mt-3 font-display text-3xl font-bold tracking-tight text-ink md:text-5xl">
            Make the Right First Impression
          </h2>
          <div className="mt-6 space-y-5 text-lg leading-relaxed text-slate md:text-xl">
            <p>People judge businesses by their websites.</p>
            <p>
              An outdated, confusing or poorly designed site can instantly reduce
              trust — even when the business behind it provides an excellent
              service.
            </p>
            <p>
              We create clean, modern and professional websites that properly
              represent your company and give potential customers confidence in
              contacting you.
            </p>
            <p>
              Your website will be designed specifically around your business,
              services and target customers.
            </p>
            <p className="font-display text-xl font-bold text-ink md:text-2xl">
              Professional appearance. Clear messaging. Stronger conversions.
            </p>
          </div>
        </div>
      </section>

      {/* Packages */}
      <section id="packages" className="relative overflow-hidden bg-navy section-space text-white">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_10%_0%,rgba(0,194,255,0.14),transparent_35%),radial-gradient(circle_at_90%_20%,rgba(0,87,255,0.18),transparent_40%)]" />
        <div className="container-site relative">
          <div className="mx-auto max-w-3xl text-center">
            <p className="font-display text-base font-semibold tracking-[0.24em] text-cyan uppercase">
              Choose the Right Website Package for Your Business
            </p>
            <h2 className="mt-3 font-display text-3xl font-bold tracking-tight md:text-5xl lg:text-6xl">
              Professional Website Packages Built Around Your Goals
            </h2>
            <p className="mt-5 text-base text-white/75 md:text-xl">
              Every business is different. Whether you need a professional
              website to establish your business online or a larger website
              designed to generate enquiries across multiple services, we can
              create the right solution.
            </p>
          </div>

          <PackageSlider packages={websitePackages} />

          <div className="mx-auto mt-14 max-w-2xl text-center">
            <h3 className="font-display text-2xl font-bold md:text-3xl">
              Not Sure Which Package You Need?
            </h3>
            <p className="mt-4 text-base text-white/75 md:text-lg">
              Tell us about your business, your current website and what you want
              to achieve. Our team can recommend the most suitable option based
              on your requirements.
            </p>
            <div className="mt-8">
              <QuoteCta />
            </div>
          </div>
        </div>
      </section>

      {/* Lead generation */}
      <section className="relative overflow-hidden bg-white section-space">
        <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-cyan/40 to-transparent" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_8%_20%,rgba(0,194,255,0.07),transparent_40%),radial-gradient(circle_at_92%_80%,rgba(0,87,255,0.06),transparent_45%)]" />

        <div className="container-site relative">
          <div className="grid gap-12 lg:grid-cols-[0.95fr_1.05fr] lg:items-start lg:gap-16">
            <div className="lg:sticky lg:top-28">
              <div className="mb-6 h-1 w-14 rounded-full bg-brand" />
              <p className="font-display text-sm font-semibold tracking-[0.2em] text-blue uppercase">
                Built for Lead Generation
              </p>
              <h2 className="mt-3 max-w-md font-display text-3xl font-bold tracking-tight text-ink sm:text-4xl md:text-5xl lg:leading-[1.1]">
                Every Part of Your Website Has a Purpose
              </h2>
              <p className="mt-6 max-w-md text-lg leading-relaxed text-slate md:text-xl">
                We don’t add sections simply to make a website look bigger.
              </p>
              <p className="mt-4 max-w-md text-base leading-relaxed text-slate md:text-lg">
                Every important element should help move somebody closer to
                becoming a customer.
              </p>
            </div>

            <ol className="relative space-y-0">
              {leadGenPoints.map((item, index) => (
                <li
                  key={item.title}
                  className="relative grid grid-cols-[auto_1fr] gap-4 border-b border-ink/10 py-6 first:pt-0 last:border-b-0 last:pb-0 md:gap-6 md:py-7"
                >
                  <span className="font-display text-3xl font-extrabold leading-none text-ink/[0.08] md:text-4xl">
                    0{index + 1}
                  </span>
                  <div>
                    <h3 className="font-display text-base font-bold tracking-[0.1em] text-ink uppercase md:text-lg">
                      {item.title}
                    </h3>
                    <p className="mt-2 text-base leading-relaxed text-slate md:text-lg">
                      {item.text}
                    </p>
                  </div>
                </li>
              ))}
            </ol>
          </div>
        </div>
      </section>

      {/* Built for Google */}
      <section className="bg-mist section-space">
        <div className="container-prose text-center">
          <SectionRule />
          <p className="font-display text-sm font-semibold tracking-[0.2em] text-blue uppercase">
            Built for <GoogleText />
          </p>
          <h2 className="mt-3 font-display text-3xl font-bold tracking-tight text-ink md:text-5xl">
            Get Found by More Potential Customers
          </h2>
          <div className="mt-6 space-y-5 text-lg leading-relaxed text-slate md:text-xl">
            <p>A great website needs traffic.</p>
            <p>
              That’s why we build websites with SEO and{' '}
              <GoogleText>Google</GoogleText> Ads in mind from the beginning.
            </p>
            <p>
              Clean development, strong page structure, fast loading speeds and
              properly organised content give your business the foundations
              required to compete online.
            </p>
            <p>
              And when somebody reaches your website through <GoogleText />?
              They arrive on a site designed to turn that traffic into enquiries
              and customers.
            </p>
          </div>
        </div>
      </section>

      {/* Fast. Responsive. Built to perform. */}
      <section className="relative overflow-hidden bg-mist section-space">
        <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-blue/30 to-transparent" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_90%_10%,rgba(0,194,255,0.1),transparent_40%),radial-gradient(circle_at_10%_90%,rgba(0,87,255,0.08),transparent_45%)]" />

        <div className="container-site relative">
          <div className="grid gap-8 lg:grid-cols-[1fr_1.05fr] lg:items-end lg:gap-14">
            <div>
              <div className="mb-6 h-1 w-14 rounded-full bg-brand" />
              <h2 className="max-w-lg font-display text-3xl font-bold tracking-tight text-ink sm:text-4xl md:text-5xl lg:leading-[1.1]">
                Fast. Responsive.
                <br />
                Built to Perform.
              </h2>
            </div>
            <p className="max-w-xl text-lg leading-relaxed text-slate md:text-xl lg:pb-2">
              Every Nexxo Digital website is built to provide a professional
              experience across modern devices.
            </p>
          </div>

          <div className="mt-12 grid overflow-hidden rounded-2xl border border-ink/10 bg-white/70 sm:grid-cols-2 lg:grid-cols-5">
            {performPoints.map((item, index) => (
              <article
                key={item.title}
                className="border-ink/10 p-5 max-sm:border-b max-sm:last:border-b-0 sm:border-b sm:odd:border-r lg:border-b-0 lg:border-r lg:last:border-r-0 md:p-6"
              >
                <div className="flex items-center gap-3">
                  <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-cyan/15 text-blue md:h-11 md:w-11">
                    {performIcons[index]}
                  </span>
                  <h3 className="font-display text-sm font-bold tracking-[0.08em] text-ink uppercase md:text-base">
                    {item.title}
                  </h3>
                </div>
                <p className="mt-3 text-sm leading-relaxed text-slate">
                  {item.text}
                </p>
              </article>
            ))}
          </div>

          <div className="mt-16 grid gap-10 rounded-2xl border border-ink/10 bg-white p-6 md:p-10 lg:grid-cols-[1fr_1fr] lg:items-center lg:gap-14">
            <div>
              <h3 className="font-display text-2xl font-bold tracking-tight text-ink md:text-3xl">
                Modern Development Built Around Your Business
              </h3>
              <p className="mt-5 text-base leading-relaxed text-slate md:text-lg">
                Your business shouldn’t have the same website as everybody else.
              </p>
              <p className="mt-4 text-base leading-relaxed text-slate md:text-lg">
                We use modern development technologies to build fast,
                professional websites tailored around your business and its
                objectives.
              </p>
              <p className="mt-6 text-base leading-relaxed text-slate md:text-lg">
                The result is a website built around what your business actually
                needs.
              </p>
            </div>

            <div>
              <p className="font-display text-sm font-semibold tracking-[0.16em] text-blue uppercase">
                That gives us greater control over:
              </p>
              <ul className="mt-5 grid gap-3 sm:grid-cols-2">
                {modernControls.map((item, index) => (
                  <li
                    key={item}
                    className="flex items-center gap-3 border-b border-ink/8 pb-3 text-base text-ink/85"
                  >
                    <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-cyan/15 text-blue">
                      {controlIcons[index]}
                    </span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* BUILD. RANK. GROW. */}
      <section className="relative overflow-hidden bg-navy section-space text-white">
        <img
          src="/CTA.png"
          alt=""
          aria-hidden="true"
          className="absolute inset-0 h-full w-full object-cover object-center"
        />
        <div className="absolute inset-0 bg-navy/70" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,rgba(0,194,255,0.14),transparent_40%),radial-gradient(circle_at_80%_80%,rgba(0,87,255,0.16),transparent_45%)]" />
        <div className="container-site relative">
          <div className="mx-auto max-w-3xl text-center">
            <p className="font-display text-sm font-semibold tracking-[0.2em] text-cyan uppercase">
              More Than Just Website Design
            </p>
            <h2 className="mt-3 font-display text-3xl font-bold tracking-[0.08em] md:text-5xl">
              <span className="text-brand">BUILD</span>
              <span className="text-white/35">.</span>{' '}
              <span className="text-brand">RANK</span>
              <span className="text-white/35">.</span>{' '}
              <span className="text-brand">GROW</span>
              <span className="text-white/35">.</span>
            </h2>
            <p className="mt-5 text-base text-white/75 md:text-xl">
              Nexxo Digital can help you build the complete system needed to
              generate business online.
            </p>
          </div>
          <div className="mt-12 grid gap-5 md:grid-cols-3">
            {buildRankGrow.map((item) => (
              <article
                key={item.title}
                className="rounded-2xl border border-white/10 bg-white/[0.06] p-6 text-center backdrop-blur-[2px]"
              >
                <h3 className="font-display text-2xl font-bold text-brand">
                  {item.title}
                </h3>
                <p className="mt-3 font-semibold text-white">
                  <ColorGoogle text={item.subtitle} />
                </p>
                <p className="mt-3 text-sm leading-relaxed text-white/70 md:text-base">
                  <ColorGoogle text={item.text} />
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Why choose */}
      <section id="why" className="bg-mist section-space">
        <div className="container-site">
          <div className="mx-auto max-w-3xl text-center">
            <SectionRule />
            <h2 className="font-display text-3xl font-bold tracking-tight text-ink md:text-5xl lg:text-6xl">
              Why Choose Nexxo Digital?
            </h2>
          </div>

          <div className="mt-12 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            {whyChoose.map((item, index) => (
              <article
                key={item.title}
                className="group relative overflow-hidden rounded-2xl border border-ink/8 bg-white p-6 transition duration-300 hover:-translate-y-1 hover:border-cyan/30 hover:shadow-[0_24px_50px_-28px_rgba(0,87,255,0.35)] md:p-7"
              >
                <div className="absolute inset-x-0 top-0 h-1 bg-brand opacity-0 transition group-hover:opacity-100" />
                <div className="flex items-center gap-4">
                  <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-cyan/15 text-blue transition group-hover:scale-105 group-hover:bg-cyan/25">
                    {whyIcons[index]}
                  </span>
                  <h3 className="font-display text-base font-bold tracking-tight text-ink md:text-lg">
                    <ColorGoogle text={item.title} />
                  </h3>
                </div>
                <p className="mt-5 text-base leading-relaxed text-slate md:text-lg">
                  <ColorGoogle text={item.text} />
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Current website issues */}
      <section className="bg-white section-space">
        <div className="container-prose text-center">
          <SectionRule />
          <h2 className="font-display text-3xl font-bold tracking-tight text-ink md:text-5xl">
            Is Your Current Website Generating Enough Enquiries?
          </h2>
          <div className="mt-6 space-y-5 text-lg leading-relaxed text-slate md:text-xl">
            <p>
              Having a website isn’t the same as having a website that performs.
            </p>
            <p>
              If you’re already receiving visitors but aren’t getting enough
              calls or enquiries, there could be a problem with your website.
            </p>
            <p className="font-semibold text-ink">Potential issues include:</p>
          </div>
          <ul className="mx-auto mt-6 grid max-w-2xl gap-3 text-left sm:grid-cols-2">
            {currentSiteIssues.map((item) => (
              <li
                key={item}
                className="flex items-start gap-3 rounded-xl border border-ink/8 bg-mist/50 px-4 py-3 text-base text-ink/85"
              >
                <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-brand" />
                <span>{item}</span>
              </li>
            ))}
          </ul>
          <p className="mt-8 text-lg text-slate md:text-xl">
            Fixing those problems can make a significant difference to how many
            visitors decide to contact you.
          </p>
          <p className="mt-6 text-center font-display text-[clamp(0.85rem,3.8vw,1.875rem)] font-bold tracking-[0.05em] md:tracking-[0.08em]">
            <span className="inline-block whitespace-nowrap">
              <span className="text-brand">MORE ENQUIRIES</span>
              <span className="text-ink/25">.</span>{' '}
              <span className="text-brand">MORE CUSTOMERS</span>
              <span className="text-ink/25">.</span>
            </span>
            <br className="md:hidden" />
            <span className="inline-block whitespace-nowrap md:ml-1">
              <span className="text-brand">MORE BUSINESS</span>
              <span className="text-ink/25">.</span>
            </span>
          </p>
        </div>
      </section>

      {/* Process */}
      <section className="relative overflow-hidden bg-mist pt-[5.5rem] md:pt-[7.5rem]">
        {/* Top waves */}
        <div className="pointer-events-none absolute inset-x-0 top-0 z-0" aria-hidden="true">
          <svg
            viewBox="0 0 1440 120"
            className="block h-16 w-full text-white sm:h-20 md:h-24"
            preserveAspectRatio="none"
          >
            <path
              fill="currentColor"
              d="M0,64 C240,110 480,10 720,48 C960,86 1200,110 1440,40 L1440,0 L0,0 Z"
            />
          </svg>
          <svg
            viewBox="0 0 1440 80"
            className="absolute inset-x-0 top-6 block h-12 w-full text-cyan/20 sm:top-8 sm:h-14 md:top-10 md:h-16"
            preserveAspectRatio="none"
          >
            <path
              fill="currentColor"
              d="M0,40 C180,70 360,10 540,35 C720,60 900,75 1080,40 C1260,5 1350,20 1440,45 L1440,0 L0,0 Z"
            />
          </svg>
        </div>

        <div className="absolute inset-0 bg-[radial-gradient(circle_at_15%_30%,rgba(0,194,255,0.1),transparent_42%),radial-gradient(circle_at_85%_70%,rgba(0,87,255,0.08),transparent_45%)]" />

        <div className="container-site relative z-10 pt-8 md:pt-10">
          <div className="grid gap-6 lg:grid-cols-[0.85fr_1.15fr] lg:items-end lg:gap-12">
            <div>
              <div className="mb-6 h-1 w-14 rounded-full bg-brand" />
              <h2 className="max-w-md font-display text-3xl font-bold tracking-tight text-ink sm:text-4xl md:text-5xl lg:leading-[1.1]">
                Our Website Design Process
              </h2>
            </div>
            <p className="max-w-xl text-xl leading-relaxed text-slate md:text-2xl lg:pb-1">
              A clear path from understanding your business through to launching
              a website built to generate enquiries.
            </p>
          </div>

          {/* Desktop / tablet horizontal steps */}
          <ol className="relative mt-14 hidden md:grid md:grid-cols-5 md:gap-4 lg:gap-5">
            <svg
              aria-hidden="true"
              viewBox="0 0 1000 40"
              className="pointer-events-none absolute top-6 left-[10%] z-0 h-8 w-[80%] text-blue/40"
              preserveAspectRatio="none"
            >
              <path
                d="M0,20 C62.5,4 87.5,36 125,20 C162.5,4 187.5,36 250,20 C287.5,4 312.5,36 375,20 C412.5,4 437.5,36 500,20 C537.5,4 562.5,36 625,20 C662.5,4 687.5,36 750,20 C787.5,4 812.5,36 875,20 C912.5,4 937.5,36 1000,20"
                fill="none"
                stroke="currentColor"
                strokeWidth="2.25"
                strokeLinecap="round"
                strokeDasharray="5 7"
              />
            </svg>
            {processSteps.map((step) => (
              <li key={step.num} className="relative z-10 text-center">
                <span className="relative z-10 mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-navy font-display text-sm font-bold text-cyan ring-4 ring-mist">
                  {step.num}
                </span>
                <h3 className="mt-5 font-display text-base font-bold tracking-[0.1em] text-ink uppercase lg:text-lg">
                  {step.title}
                </h3>
                <p className="mt-3 text-base leading-relaxed text-slate lg:text-lg">
                  {step.text}
                </p>
              </li>
            ))}
          </ol>

          {/* Mobile vertical steps */}
          <ol className="relative mt-12 space-y-0 md:hidden">
            {processSteps.map((step, index) => (
              <li
                key={step.num}
                className="relative grid grid-cols-[auto_1fr] gap-4 border-b border-ink/10 py-6 first:pt-0 last:border-b-0 last:pb-0"
              >
                {index < processSteps.length - 1 && (
                  <span
                    aria-hidden="true"
                    className="absolute top-14 bottom-0 left-[1.15rem] w-px bg-gradient-to-b from-cyan/50 to-blue/20"
                  />
                )}
                <span className="relative z-10 flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-navy font-display text-xs font-bold text-cyan ring-4 ring-mist">
                  {step.num}
                </span>
                <div className="pt-0.5">
                  <h3 className="font-display text-base font-bold tracking-[0.1em] text-ink uppercase">
                    {step.title}
                  </h3>
                  <p className="mt-2 text-base leading-relaxed text-slate md:text-lg">
                    {step.text}
                  </p>
                </div>
              </li>
            ))}
          </ol>
        </div>

        {/* Bottom waves into next dark section */}
        <div
          className="pointer-events-none relative z-0 mt-10 -mb-[1px] sm:mt-14"
          aria-hidden="true"
        >
          <svg
            viewBox="0 0 1440 100"
            className="absolute inset-x-0 bottom-6 block h-12 w-full text-cyan/25 sm:bottom-8 sm:h-14 md:h-16"
            preserveAspectRatio="none"
          >
            <path
              fill="currentColor"
              d="M0,60 C220,20 440,90 720,55 C1000,20 1220,70 1440,35 L1440,100 L0,100 Z"
            />
          </svg>
          <svg
            viewBox="0 0 1440 120"
            className="relative block h-16 w-full text-ink sm:h-20 md:h-24"
            preserveAspectRatio="none"
          >
            <path
              fill="currentColor"
              d="M0,48 C240,100 480,10 720,55 C960,100 1200,30 1440,70 L1440,120 L0,120 Z"
            />
          </svg>
        </div>
      </section>

      {/* Final CTA */}
      <section className="relative overflow-hidden bg-ink section-space text-white">
        <img
          src="/mid-cta-bg.png"
          alt=""
          aria-hidden="true"
          className="absolute inset-0 h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-ink/55 md:bg-ink/70" />
        <div className="container-prose relative text-center">
          <p className="font-display text-sm font-semibold tracking-[0.2em] text-cyan uppercase">
            Ready to Generate More Business Online?
          </p>
          <h2 className="mt-3 font-display text-3xl font-bold tracking-tight md:text-5xl lg:text-6xl">
            Let’s Build a Website That Actually Works for Your Business
          </h2>
          <div className="mt-6 space-y-4 text-base text-white/80 md:text-xl">
            <p>Your website shouldn’t simply exist online.</p>
            <p>
              It should help attract customers, build confidence and generate
              opportunities for your business.
            </p>
            <p>
              Whether you need a new website or your existing website isn’t
              delivering enough enquiries, Nexxo Digital can help.
            </p>
            <p className="font-semibold text-white">
              Build a better website. Generate more enquiries. Grow your
              business.
            </p>
          </div>
          <div className="mt-10 flex flex-wrap justify-center gap-4">
            <QuoteCta />
            <a
              href="#quote"
              className="inline-flex items-center justify-center rounded-full border border-white/30 px-7 py-3.5 text-base font-semibold transition hover:border-white hover:bg-white/5"
            >
              Speak to Our Team
            </a>
          </div>
          <p className="mt-12 font-display text-sm font-semibold tracking-[0.28em] text-cyan uppercase">
            Nexxo Digital
          </p>
          <p className="mt-3 font-display text-2xl font-bold tracking-[0.08em]">
            <span className="text-brand">BUILD</span>
            <span className="text-white/40">.</span>{' '}
            <span className="text-brand">RANK</span>
            <span className="text-white/40">.</span>{' '}
            <span className="text-brand">GROW</span>
            <span className="text-white/40">.</span>
          </p>
        </div>
      </section>

      {/* Quote (bottom) */}
      <section
        id="quote-bottom"
        className="relative overflow-hidden bg-navy section-space text-white"
      >
        <img
          src="/contact-bottom-bg.png"
          alt=""
          aria-hidden="true"
          className="absolute inset-0 h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-navy/70" />
        <div className="container-site relative grid gap-6 lg:grid-cols-[0.9fr_1.2fr] lg:items-center lg:gap-16">
          <div>
            <h2 className="font-display text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl lg:text-6xl">
              Let’s Build Something Great
            </h2>
            <p className="mt-3 text-base leading-relaxed text-white/70 sm:mt-5 sm:text-xl md:text-2xl">
              Tell us a little about your project and we’ll get back to you.
            </p>
            <div className="mt-8 hidden h-px w-24 bg-gradient-to-r from-cyan to-blue lg:block" />
          </div>
          <QuoteForm />
        </div>
      </section>

      <Footer />
    </div>
  )
}

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LandingHome />} />
        <Route path="/thanks" element={<ThankYou />} />
      </Routes>
    </BrowserRouter>
  )
}
