export default function PackageCard({ pkg, featured = false }) {
  return (
    <article
      className={`group relative flex h-full flex-col overflow-hidden rounded-2xl border p-5 transition duration-300 md:p-6 ${
        featured
          ? 'border-cyan/40 bg-gradient-to-b from-white/[0.1] to-white/[0.03] shadow-[0_0_40px_-12px_rgba(0,194,255,0.45)]'
          : 'border-white/10 bg-white/[0.04] hover:border-cyan/30 hover:bg-white/[0.07]'
      }`}
    >
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-cyan/60 to-transparent" />

      {featured && (
        <div className="mb-4">
          <span className="rounded-full bg-brand px-3 py-1 text-xs font-bold tracking-wide text-white uppercase">
            Popular
          </span>
        </div>
      )}

      <h3 className="font-display text-2xl font-bold text-white md:text-3xl">
        {pkg.name}
      </h3>
      <p className="mt-3 text-base leading-relaxed text-white/70 md:text-lg">
        {pkg.blurb}
      </p>
      <p className="mt-5 text-base font-semibold text-cyan">
        Enquire to find out more
      </p>

      <div className="mt-5 border-t border-white/10 pt-4">
        <p className="text-sm font-semibold tracking-[0.2em] text-white/45 uppercase">
          Includes
        </p>
        <ul className="mt-3 flex-1 space-y-2.5 text-base text-white/80">
          {pkg.includes.map((item) => (
            <li key={item} className="flex gap-3">
              <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-cyan/15 text-cyan">
                <svg
                  viewBox="0 0 16 16"
                  className="h-3 w-3"
                  fill="none"
                  aria-hidden="true"
                >
                  <path
                    d="M3.5 8.5 6.5 11.5 12.5 4.5"
                    stroke="currentColor"
                    strokeWidth="1.8"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </span>
              <span>{item}</span>
            </li>
          ))}
        </ul>
      </div>

      <a
        href="#quote"
        className={`mt-6 inline-flex items-center justify-center rounded-full px-6 py-3.5 text-base font-bold transition ${
          featured
            ? 'btn-brand'
            : 'border border-white/20 text-white hover:border-cyan hover:bg-cyan/10'
        }`}
      >
        {pkg.cta}
      </a>
    </article>
  )
}
