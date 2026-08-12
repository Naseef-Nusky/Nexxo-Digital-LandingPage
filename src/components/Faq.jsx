import { useState } from 'react'
import { faqs } from '../data/content'

function Chevron({ open }) {
  return (
    <span
      className={`flex h-8 w-8 shrink-0 items-center justify-center rounded-full border transition duration-300 ${
        open
          ? 'border-cyan/40 bg-cyan/15 text-blue'
          : 'border-ink/10 bg-mist text-ink/60'
      }`}
    >
      <svg
        viewBox="0 0 24 24"
        className={`h-4 w-4 transition-transform duration-300 ${open ? 'rotate-180' : ''}`}
        fill="none"
        aria-hidden="true"
      >
        <path
          d="m6 9 6 6 6-6"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    </span>
  )
}

export default function Faq() {
  const [open, setOpen] = useState(0)

  return (
    <div className="space-y-2.5">
      {faqs.map((item, index) => {
        const isOpen = open === index
        return (
          <div
            key={item.q}
            className={`overflow-hidden rounded-xl border transition duration-300 ${
              isOpen
                ? 'border-cyan/30 bg-white shadow-[0_20px_40px_-28px_rgba(0,87,255,0.35)]'
                : 'border-ink/8 bg-white hover:border-ink/15'
            }`}
          >
            <button
              type="button"
              className="flex w-full items-center gap-3 px-4 py-3.5 text-left md:gap-4 md:px-5 md:py-4"
              onClick={() => setOpen(isOpen ? -1 : index)}
              aria-expanded={isOpen}
            >
              <span className="min-w-0 flex-1 font-display text-lg font-semibold text-ink md:text-xl">
                {item.q}
              </span>

              <Chevron open={isOpen} />
            </button>

            <div
              className={`grid transition-[grid-template-rows] duration-300 ease-out ${
                isOpen ? 'grid-rows-[1fr]' : 'grid-rows-[0fr]'
              }`}
            >
              <div className="overflow-hidden">
                <div className="border-t border-ink/8 px-4 pb-3.5 md:px-5 md:pb-4">
                  <div className="pt-3 text-base leading-relaxed text-slate whitespace-pre-line md:text-lg">
                    {item.a}
                  </div>
                </div>
              </div>
            </div>
          </div>
        )
      })}
    </div>
  )
}
