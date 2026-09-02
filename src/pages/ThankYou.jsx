import { useEffect } from 'react'
import { Link } from 'react-router-dom'
import Header from '../components/Header'
import Footer from '../components/Footer'
import { contact } from '../data/contact'

export default function ThankYou() {
  useEffect(() => {
    if (typeof window.gtag === 'function') {
      window.gtag('event', 'conversion', {
        send_to: 'AW-18420637735/dwQMCIqsrescEKfA0s9E',
        value: 1.0,
        currency: 'GBP',
      })
    }
  }, [])

  return (
    <div className="flex min-h-screen flex-col bg-mist">
      <Header />

      <main className="relative flex-1 overflow-hidden px-5 pt-28 pb-20 md:px-8 md:pt-36 md:pb-28">
        <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-cyan/40 to-transparent" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_15%_0%,rgba(0,194,255,0.1),transparent_40%),radial-gradient(circle_at_85%_100%,rgba(0,87,255,0.08),transparent_45%)]" />

        <div className="container-site relative mx-auto max-w-xl text-center">
          <div className="rounded-2xl border border-ink/8 bg-white p-8 shadow-[0_18px_40px_-28px_rgba(5,7,13,0.2)] md:p-12">
            <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-brand">
              <svg viewBox="0 0 24 24" className="h-8 w-8 text-white" fill="none" aria-hidden="true">
                <path
                  d="M5 13l4 4L19 7"
                  stroke="currentColor"
                  strokeWidth="2.2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </div>

            <p className="mt-6 font-display text-sm font-semibold tracking-[0.2em] text-blue uppercase">
              Request received
            </p>
            <h1 className="mt-3 font-display text-3xl font-bold tracking-tight text-ink md:text-4xl">
              Thank you
            </h1>
            <p className="mt-4 text-base leading-relaxed text-slate md:text-lg">
              Tell us a little about your project and we&apos;ll get back to you.
            </p>
            <p className="mt-2 text-base font-medium text-blue">
              Your request has been received.
            </p>
            <p className="mt-4 text-sm text-slate">
              Need to reach us sooner? Email{' '}
              <a
                href={`mailto:${contact.email}`}
                className="font-medium text-blue transition hover:text-cyan"
              >
                {contact.email}
              </a>
              .
            </p>

            <Link
              to="/"
              className="btn-brand mt-8 inline-flex rounded-full px-7 py-3.5 text-base font-bold text-white"
            >
              Back to Home
            </Link>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  )
}
