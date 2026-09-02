import { contact } from '../data/contact'

export default function Footer() {
  return (
    <footer className="border-t border-white/10 bg-navy py-14 text-white md:py-16">
      <div className="container-site grid gap-10 md:grid-cols-2">
        <div>
          <img
            src="/Nexxo-Logo.png"
            alt="Nexxo Digital"
            className="h-16 w-auto md:h-20"
          />
          <p className="mt-4 max-w-sm text-base leading-relaxed text-white/65">
            Websites built to generate more enquiries, more customers and more
            business.
          </p>
          <p className="mt-4 font-display text-sm font-bold tracking-[0.14em]">
            <span className="text-brand">BUILD</span>
            <span className="text-white/35">.</span>{' '}
            <span className="text-brand">RANK</span>
            <span className="text-white/35">.</span>{' '}
            <span className="text-brand">GROW</span>
            <span className="text-white/35">.</span>
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
            <li className="flex items-start gap-3">
              <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-cyan/15 text-cyan">
                <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" aria-hidden="true">
                  <path
                    d="M12 21s6-5.2 6-10a6 6 0 1 0-12 0c0 4.8 6 10 6 10Z"
                    stroke="currentColor"
                    strokeWidth="1.7"
                  />
                  <circle cx="12" cy="11" r="2.2" stroke="currentColor" strokeWidth="1.7" />
                </svg>
              </span>
              <span>
                <span className="block text-sm tracking-[0.14em] text-white/45 uppercase">
                  {contact.registeredOfficeLabel}
                </span>
                {contact.registeredOffice}
              </span>
            </li>
          </ul>
        </div>
      </div>

      <div className="container-site mt-10 border-t border-white/10 pt-6 text-center text-sm text-white/45">
        © {new Date().getFullYear()} Nexxo Digital. All rights reserved.
      </div>
    </footer>
  )
}
