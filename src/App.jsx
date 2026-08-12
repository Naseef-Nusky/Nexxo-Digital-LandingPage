import Header from './components/Header'
import PackageSlider from './components/PackageSlider'
import QuoteForm from './components/QuoteForm'
import Faq from './components/Faq'
import { whyIcons } from './components/WhyIcons'
import {
  websitePackages,
  ecommercePackages,
  whyChoose,
} from './data/content'
import { contact } from './data/contact'

export default function App() {
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
              Nexxo Digital
            </p>
            <h1 className="mt-3 max-w-xl font-display text-[1.85rem] leading-[1.15] font-extrabold tracking-tight sm:text-5xl md:mt-4 md:text-6xl lg:text-[4.25rem]">
              Expert Website{' '}
              <span className="whitespace-nowrap">Design &amp; Development</span>
            </h1>
            <p className="mt-4 max-w-xl text-lg leading-relaxed text-white/85 sm:mt-6 sm:text-xl md:text-2xl">
              Websites built to make your business look credible,
              <br className="sm:hidden" /> perform better and generate more
              enquiries.
            </p>
            <div className="mt-8 flex w-full flex-col gap-3 sm:mt-10 sm:flex-row sm:flex-wrap sm:gap-4">
              <a
                href="#quote"
                className="btn-brand inline-flex items-center justify-center rounded-full px-7 py-3.5 text-base font-bold"
              >
                Get a Free Quote
              </a>
              <a
                href="#quote"
                className="inline-flex items-center justify-center rounded-full border border-white/30 px-7 py-3.5 text-base font-semibold text-white transition hover:border-white hover:bg-white/5"
              >
                Speak to Our Team
              </a>
            </div>
          </div>

          <div className="relative z-10 order-1 flex w-full min-w-0 items-center justify-center lg:order-2 lg:absolute lg:inset-y-0 lg:right-0 lg:w-[52%] lg:justify-end">
            <img
              src="/hero.png"
              alt="Nexxo Digital website design showcase"
              className="h-auto w-full max-w-sm object-contain sm:max-w-md md:max-w-xl lg:max-w-none lg:w-full lg:scale-105 lg:origin-right lg:[mask-image:linear-gradient(to_right,transparent_0%,black_28%,black_100%)]"
            />
          </div>
        </div>
      </section>

      {/* Intro */}
      <section className="relative overflow-hidden bg-white section-space">
        <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-cyan/50 to-transparent" />
        <div className="container-prose relative text-center">
          <div className="mx-auto mb-8 h-1 w-16 rounded-full bg-brand" />
          <p className="text-xl leading-relaxed text-slate md:text-2xl">
            At Nexxo Digital, we design and develop modern, high-performing
            websites tailored around your business.
          </p>
          <p className="mt-6 text-xl leading-relaxed text-slate md:text-2xl">
            Whether you need a professional company website, a complete redesign
            or a fully functional e-commerce platform, we create websites that
            combine strong design with speed, usability and conversion-focused
            structure.
          </p>
          <p className="mt-6 text-xl leading-relaxed font-semibold text-ink md:text-2xl">
            No generic one-size-fits-all approach. Your website is built around
            your brand, your customers and what you actually want the site to
            achieve.
          </p>
        </div>
      </section>

      {/* Designed around business */}
      <section className="bg-mist section-space">
        <div className="container-prose text-center">
          <div className="mx-auto mb-8 h-1 w-16 rounded-full bg-brand" />
          <h2 className="font-display text-4xl font-bold tracking-tight text-ink md:text-5xl lg:text-6xl">
            Websites Designed Around Your Business
          </h2>
          <p className="mt-6 text-xl text-slate md:text-2xl">
            Your website is often the first impression someone gets of your
            company.
          </p>
          <p className="mt-3 text-xl font-semibold text-ink md:text-2xl">
            We make sure it’s a good one.
          </p>
          <p className="mt-6 text-xl leading-relaxed text-slate">
            Every Nexxo Digital website is designed to look professional across
            desktop, tablet and mobile while making it easy for potential
            customers to understand what you offer and take the next step.
          </p>
          <p className="mt-6 text-xl leading-relaxed text-slate">
            From simple brochure websites to advanced business and e-commerce
            platforms, we can manage the entire project from design through to
            launch.
          </p>
        </div>
      </section>

      {/* Packages */}
      <section id="packages" className="relative overflow-hidden bg-navy section-space text-white">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_10%_0%,rgba(0,194,255,0.14),transparent_35%),radial-gradient(circle_at_90%_20%,rgba(0,87,255,0.18),transparent_40%)]" />
        <div className="container-site relative">
          <div className="mx-auto max-w-3xl text-center">
            <p className="font-display text-base font-semibold tracking-[0.24em] text-cyan uppercase">
              Packages
            </p>
            <h2 className="mt-3 font-display text-4xl font-bold tracking-tight md:text-5xl lg:text-6xl">
              Website Design Packages
            </h2>
          </div>

          <PackageSlider packages={websitePackages} />
        </div>
      </section>

      {/* Ecommerce */}
      <section
        id="ecommerce"
        className="border-y border-ink/5 bg-white section-space text-ink"
      >
        <div className="container-site">
          <h2 className="text-center font-display text-4xl font-bold tracking-tight md:text-5xl lg:text-6xl">
            E-Commerce Website
            <br />
            Development
          </h2>
          <div className="mt-12 grid gap-6 lg:grid-cols-3">
            {ecommercePackages.map((pkg) => (
              <article
                key={pkg.name}
                className="flex h-full flex-col rounded-2xl border border-ink/8 bg-white p-6 transition duration-300 hover:-translate-y-1 hover:border-cyan/30 hover:shadow-[0_24px_50px_-28px_rgba(0,87,255,0.3)] md:p-8"
              >
                <h3 className="font-display text-2xl font-bold text-ink md:text-3xl">
                  {pkg.name}
                </h3>
                <p className="mt-3 text-base leading-relaxed text-slate md:text-lg">
                  {pkg.blurb}
                </p>
                <p className="mt-4 text-base font-semibold text-blue">
                  Enquire to find out more
                </p>
                <p className="mt-6 text-sm font-semibold tracking-[0.18em] text-ink/45 uppercase">
                  Includes
                </p>
                <ul className="mt-3 flex-1 space-y-2.5 text-base text-ink/80">
                  {pkg.includes.map((item) => (
                    <li key={item} className="flex gap-2">
                      <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-blue" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
                <a
                  href="#quote"
                  className="btn-brand mt-8 inline-flex items-center justify-center rounded-full px-6 py-3.5 text-base font-bold"
                >
                  {pkg.cta}
                </a>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Why */}
      <section id="why" className="bg-mist section-space">
        <div className="container-site">
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="font-display text-4xl font-bold tracking-tight text-ink md:text-5xl lg:text-6xl">
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
                  <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-cyan/15 text-blue transition group-hover:scale-105 group-hover:bg-cyan/25">
                    {whyIcons[index]}
                  </span>
                  <h3 className="font-display text-xl font-bold text-ink md:text-2xl">
                    {item.title}
                  </h3>
                </div>
                <p className="mt-5 text-base leading-relaxed text-slate md:text-lg">
                  {item.text}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Mid CTA */}
      <section className="relative overflow-hidden bg-ink section-space text-white">
        <img
          src="/mid-cta-bg.png"
          alt=""
          aria-hidden="true"
          className="absolute inset-0 h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-ink/75" />
        <div className="container-prose relative text-center">
          <h2 className="font-display text-4xl font-bold tracking-tight md:text-5xl lg:text-6xl">
            Your Website. Your Brand. Built Properly.
          </h2>
          <p className="mt-6 text-xl text-white/80 md:text-2xl">
            Whether you’re starting from scratch, replacing an outdated website
            or building something more advanced, Nexxo Digital can take your
            project from idea to launch.
          </p>
          <p className="mt-4 text-xl text-white/80 md:text-2xl">
            Tell us what you’re looking to achieve and we’ll recommend the right
            solution.
          </p>
          <div className="mt-10 flex flex-wrap justify-center gap-4">
            <a
              href="#quote"
              className="btn-brand rounded-full px-7 py-3.5 text-base font-bold"
            >
              Get Your Free Quote
            </a>
            <a
              href="#quote"
              className="rounded-full border border-white/30 px-7 py-3.5 text-base font-semibold transition hover:bg-white/5"
            >
              Enquire to Find Out More
            </a>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section id="faq" className="section-space bg-mist">
        <div className="container-prose">
          <h2 className="text-center font-display text-4xl font-bold tracking-tight text-ink md:text-5xl lg:text-6xl">
            Frequently Asked Questions
          </h2>
          <div className="mt-12">
            <Faq />
          </div>
        </div>
      </section>

      {/* Quote */}
      <section
        id="quote"
        className="relative overflow-hidden bg-navy section-space text-white"
      >
        <img
          src="/contact-bottom-bg.png"
          alt=""
          aria-hidden="true"
          className="absolute inset-0 h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-navy/70" />
        <div className="container-site relative grid gap-10 lg:grid-cols-[0.9fr_1.2fr] lg:items-center lg:gap-16">
          <div>
            <h2 className="font-display text-4xl font-bold tracking-tight md:text-5xl lg:text-6xl">
              Let’s Build Something Great
            </h2>
            <p className="mt-5 text-xl leading-relaxed text-white/70 md:text-2xl">
              Tell us a little about your project and we’ll get back to you.
            </p>
            <div className="mt-8 hidden h-px w-24 bg-gradient-to-r from-cyan to-blue lg:block" />
          </div>
          <QuoteForm />
        </div>
      </section>

      <footer className="border-t border-white/10 bg-navy py-14 text-white md:py-16">
        <div className="container-site grid gap-10 md:grid-cols-2">
          <div>
            <img
              src="/Nexxo-Logo.png"
              alt="Nexxo Digital"
              className="h-16 w-auto md:h-20"
            />
            <p className="mt-4 max-w-sm text-base leading-relaxed text-white/65">
              Expert website design and development built to make your business
              look credible, perform better and generate more enquiries.
            </p>
          </div>

          <div>
            <h3 className="font-display text-base font-semibold tracking-[0.18em] text-white/50 uppercase">
              Contact
            </h3>
            <ul className="mt-4 space-y-4 text-base text-white/80">
              <li>
                <a
                  href={`mailto:${contact.email}`}
                  className="flex items-center gap-3 transition hover:text-cyan"
                >
                  <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-cyan/15 text-cyan">
                    <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" aria-hidden="true">
                      <path
                        d="M4 7.5A2.5 2.5 0 0 1 6.5 5h11A2.5 2.5 0 0 1 20 7.5v9a2.5 2.5 0 0 1-2.5 2.5h-11A2.5 2.5 0 0 1 4 16.5v-9Z"
                        stroke="currentColor"
                        strokeWidth="1.7"
                      />
                      <path
                        d="m6 8 6 5 6-5"
                        stroke="currentColor"
                        strokeWidth="1.7"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </span>
                  <span>
                    <span className="block text-sm tracking-[0.14em] text-white/45 uppercase">
                      Email
                    </span>
                    {contact.email}
                  </span>
                </a>
              </li>
              <li>
                <a
                  href={`tel:${contact.phone.replace(/\s/g, '')}`}
                  className="flex items-center gap-3 transition hover:text-cyan"
                >
                  <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-cyan/15 text-cyan">
                    <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" aria-hidden="true">
                      <path
                        d="M8.5 4.5h2.2l1.1 3.2-1.4 1.4a12.5 12.5 0 0 0 5.5 5.5l1.4-1.4 3.2 1.1v2.2A2 2 0 0 1 18.5 18.5 13.5 13.5 0 0 1 5 5a2 2 0 0 1 2-2h1.5Z"
                        stroke="currentColor"
                        strokeWidth="1.7"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </span>
                  <span>
                    <span className="block text-sm tracking-[0.14em] text-white/45 uppercase">
                      Mobile
                    </span>
                    {contact.phoneDisplay}
                  </span>
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="container-site mt-10 border-t border-white/10 pt-6 text-center text-sm text-white/45">
          © {new Date().getFullYear()} Nexxo Digital. All rights reserved.
        </div>
      </footer>
    </div>
  )
}
