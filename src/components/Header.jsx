export default function Header() {
  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-white/10 bg-navy">
      <div className="container-site flex items-center justify-between gap-3 py-3 md:py-3.5">
        <a href="#top" className="min-w-0 shrink">
          <img
            src="/Nexxo-Logo.png"
            alt="Nexxo Digital"
            className="h-11 w-auto max-w-[58vw] object-contain sm:h-14 md:h-16 md:max-w-none"
          />
        </a>

        <a
          href="#quote"
          className="btn-brand shrink-0 rounded-full px-4 py-2.5 text-sm font-semibold whitespace-nowrap sm:px-5 sm:py-2.5 sm:text-base"
        >
          Get a Free Quote
        </a>
      </div>
    </header>
  )
}
