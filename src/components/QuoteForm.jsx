import { useState } from 'react'
import { websiteTypes } from '../data/content'

const fieldClass =
  'mt-1.5 w-full rounded-xl border border-white/10 bg-white/5 px-3 py-2.5 text-sm text-white outline-none transition placeholder:text-white/35 focus:border-cyan/50 focus:bg-white/10 sm:mt-2 sm:px-4 sm:py-3.5 sm:text-base'

export default function QuoteForm() {
  const [submitted, setSubmitted] = useState(false)

  function handleSubmit(e) {
    e.preventDefault()
    setSubmitted(true)
  }

  if (submitted) {
    return (
      <div className="rounded-2xl border border-cyan/30 bg-white/5 p-5 text-center backdrop-blur-sm sm:p-8 md:p-10">
        <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-brand">
          <svg viewBox="0 0 24 24" className="h-7 w-7 text-white" fill="none" aria-hidden="true">
            <path
              d="M5 13l4 4L19 7"
              stroke="currentColor"
              strokeWidth="2.2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </div>
        <h3 className="mt-5 font-display text-3xl font-bold text-white">
          Thank you
        </h3>
        <p className="mt-3 text-lg text-white/70">
          Tell us a little about your project and we’ll get back to you.
        </p>
        <p className="mt-2 text-base font-medium text-cyan">
          Your request has been received.
        </p>
      </div>
    )
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="relative overflow-hidden rounded-2xl border border-white/10 bg-white/[0.04] p-4 backdrop-blur-sm sm:p-6 md:p-9"
    >
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-cyan/70 to-transparent" />

      <div className="grid gap-3 sm:gap-5 md:grid-cols-2">
        <label className="block text-sm font-medium text-white/80 sm:text-base">
          Name
          <input required name="name" className={fieldClass} />
        </label>
        <label className="block text-sm font-medium text-white/80 sm:text-base">
          Business Name
          <input name="business" className={fieldClass} />
        </label>
        <label className="block text-sm font-medium text-white/80 sm:text-base">
          Email Address
          <input required type="email" name="email" className={fieldClass} />
        </label>
        <label className="block text-sm font-medium text-white/80 sm:text-base">
          Telephone Number
          <input name="phone" className={fieldClass} />
        </label>
      </div>

      <label className="mt-3 block text-sm font-medium text-white/80 sm:mt-5 sm:text-base">
        What type of website do you need?
        <select
          name="type"
          className={`${fieldClass} appearance-none`}
          defaultValue=""
          required
        >
          <option value="" disabled className="bg-navy text-white">
            Select an option
          </option>
          {websiteTypes.map((type) => (
            <option key={type} value={type} className="bg-navy text-white">
              {type}
            </option>
          ))}
        </select>
      </label>

      <label className="mt-3 block text-sm font-medium text-white/80 sm:mt-5 sm:text-base">
        Tell us about your project
        <textarea
          required
          name="project"
          rows={4}
          className={`${fieldClass} resize-y`}
        />
      </label>

      <button
        type="submit"
        className="btn-brand mt-5 inline-flex w-full items-center justify-center rounded-full px-6 py-3 text-sm font-bold sm:mt-7 sm:px-7 sm:py-4 sm:text-base md:w-auto"
      >
        Request a Quote
      </button>
    </form>
  )
}
