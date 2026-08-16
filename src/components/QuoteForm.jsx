import { useState } from 'react'
import { websiteTypes } from '../data/content'

const baseFieldClass =
  'mt-1.5 w-full rounded-xl border bg-white/5 px-3 py-2.5 text-sm text-white outline-none transition placeholder:text-white/35 sm:mt-2 sm:px-4 sm:py-3.5 sm:text-base'

const okFieldClass =
  'border-white/10 focus:border-cyan/50 focus:bg-white/10'

const errorFieldClass =
  'border-red-400/70 focus:border-red-400 focus:bg-white/10'

const initialValues = {
  name: '',
  business: '',
  email: '',
  phone: '',
  type: '',
  project: '',
}

const API_URL = (import.meta.env.VITE_API_URL || 'http://localhost:5050').replace(
  /\/$/,
  ''
)

function fieldClass(hasError) {
  return `${baseFieldClass} ${hasError ? errorFieldClass : okFieldClass}`
}

function validate(values) {
  const errors = {}
  const name = values.name.trim()
  const business = values.business.trim()
  const email = values.email.trim()
  const phone = values.phone.trim()
  const project = values.project.trim()

  if (!name) {
    errors.name = 'Please enter your name.'
  } else if (name.length < 2) {
    errors.name = 'Name must be at least 2 characters.'
  } else if (!/^[a-zA-Z][a-zA-Z\s'.-]{1,79}$/.test(name)) {
    errors.name = 'Please enter a valid name.'
  }

  if (business && business.length < 2) {
    errors.business = 'Business name must be at least 2 characters.'
  }

  if (!email) {
    errors.email = 'Please enter your email address.'
  } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(email)) {
    errors.email = 'Please enter a valid email address.'
  }

  if (!phone) {
    errors.phone = 'Please enter your telephone number.'
  } else {
    const digits = phone.replace(/\D/g, '')
    if (digits.length < 8 || digits.length > 15) {
      errors.phone = 'Please enter a valid telephone number.'
    } else if (!/^[+\d][\d\s().-]{7,24}$/.test(phone)) {
      errors.phone = 'Please enter a valid telephone number.'
    }
  }

  if (!values.type) {
    errors.type = 'Please select a website type.'
  }

  if (!project) {
    errors.project = 'Please tell us about your project.'
  } else if (project.length < 20) {
    errors.project = 'Please add a bit more detail (at least 20 characters).'
  }

  return errors
}

function FieldError({ message }) {
  if (!message) return null
  return (
    <p className="mt-1.5 text-xs text-red-300 sm:text-sm" role="alert">
      {message}
    </p>
  )
}

export default function QuoteForm() {
  const [values, setValues] = useState(initialValues)
  const [errors, setErrors] = useState({})
  const [touched, setTouched] = useState({})
  const [submitted, setSubmitted] = useState(false)
  const [submitting, setSubmitting] = useState(false)
  const [submitError, setSubmitError] = useState('')

  function updateField(name, value) {
    setValues((current) => ({ ...current, [name]: value }))
    if (touched[name] || errors[name]) {
      const next = { ...values, [name]: value }
      const nextErrors = validate(next)
      setErrors((current) => {
        const updated = { ...current }
        if (nextErrors[name]) updated[name] = nextErrors[name]
        else delete updated[name]
        return updated
      })
    }
  }

  function markTouched(name) {
    setTouched((current) => ({ ...current, [name]: true }))
    const nextErrors = validate(values)
    setErrors((current) => {
      const updated = { ...current }
      if (nextErrors[name]) updated[name] = nextErrors[name]
      else delete updated[name]
      return updated
    })
  }

  async function handleSubmit(e) {
    e.preventDefault()
    setSubmitError('')
    const nextErrors = validate(values)
    setErrors(nextErrors)
    setTouched({
      name: true,
      business: true,
      email: true,
      phone: true,
      type: true,
      project: true,
    })

    if (Object.keys(nextErrors).length > 0) {
      const firstError = Object.keys(nextErrors)[0]
      const el = document.querySelector(`[name="${firstError}"]`)
      el?.focus()
      return
    }

    setSubmitting(true)

    try {
      const response = await fetch(`${API_URL}/api/quote`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          name: values.name.trim(),
          business: values.business.trim(),
          email: values.email.trim(),
          telephone: values.phone.trim(),
          need: values.type,
          project: values.project.trim(),
          source: 'landing',
        }),
      })

      const result = await response.json().catch(() => ({}))

      if (!response.ok || !result.ok) {
        const message =
          result.error ||
          (Array.isArray(result.errors) ? result.errors.join(' ') : null) ||
          'Unable to send your request. Please try again.'
        throw new Error(message)
      }

      setSubmitted(true)
    } catch (err) {
      setSubmitError(
        err.message || 'Unable to send your request. Please try again.'
      )
    } finally {
      setSubmitting(false)
    }
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
      noValidate
      className="relative overflow-hidden rounded-2xl border border-white/10 bg-white/[0.04] p-4 backdrop-blur-sm sm:p-6 md:p-9"
    >
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-cyan/70 to-transparent" />

      <div className="grid gap-3 sm:gap-5 md:grid-cols-2">
        <label className="block text-sm font-medium text-white/80 sm:text-base">
          Name <span className="text-cyan">*</span>
          <input
            name="name"
            autoComplete="name"
            value={values.name}
            onChange={(e) => updateField('name', e.target.value)}
            onBlur={() => markTouched('name')}
            aria-invalid={Boolean(errors.name)}
            className={fieldClass(errors.name)}
          />
          <FieldError message={errors.name} />
        </label>

        <label className="block text-sm font-medium text-white/80 sm:text-base">
          Business Name
          <input
            name="business"
            autoComplete="organization"
            value={values.business}
            onChange={(e) => updateField('business', e.target.value)}
            onBlur={() => markTouched('business')}
            aria-invalid={Boolean(errors.business)}
            className={fieldClass(errors.business)}
          />
          <FieldError message={errors.business} />
        </label>

        <label className="block text-sm font-medium text-white/80 sm:text-base">
          Email Address <span className="text-cyan">*</span>
          <input
            type="email"
            name="email"
            autoComplete="email"
            inputMode="email"
            value={values.email}
            onChange={(e) => updateField('email', e.target.value)}
            onBlur={() => markTouched('email')}
            aria-invalid={Boolean(errors.email)}
            className={fieldClass(errors.email)}
          />
          <FieldError message={errors.email} />
        </label>

        <label className="block text-sm font-medium text-white/80 sm:text-base">
          Telephone Number <span className="text-cyan">*</span>
          <input
            type="tel"
            name="phone"
            autoComplete="tel"
            inputMode="tel"
            value={values.phone}
            onChange={(e) => updateField('phone', e.target.value)}
            onBlur={() => markTouched('phone')}
            aria-invalid={Boolean(errors.phone)}
            className={fieldClass(errors.phone)}
          />
          <FieldError message={errors.phone} />
        </label>
      </div>

      <label className="mt-3 block text-sm font-medium text-white/80 sm:mt-5 sm:text-base">
        What type of website do you need? <span className="text-cyan">*</span>
        <select
          name="type"
          className={`${fieldClass(errors.type)} appearance-none`}
          value={values.type}
          onChange={(e) => updateField('type', e.target.value)}
          onBlur={() => markTouched('type')}
          aria-invalid={Boolean(errors.type)}
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
        <FieldError message={errors.type} />
      </label>

      <label className="mt-3 block text-sm font-medium text-white/80 sm:mt-5 sm:text-base">
        Tell us about your project <span className="text-cyan">*</span>
        <textarea
          name="project"
          rows={4}
          value={values.project}
          onChange={(e) => updateField('project', e.target.value)}
          onBlur={() => markTouched('project')}
          aria-invalid={Boolean(errors.project)}
          className={`${fieldClass(errors.project)} resize-y`}
        />
        <FieldError message={errors.project} />
      </label>

      {submitError ? (
        <p className="mt-4 text-sm text-red-300" role="alert">
          {submitError}
        </p>
      ) : null}

      <button
        type="submit"
        disabled={submitting}
        className="btn-brand mt-5 inline-flex w-full items-center justify-center rounded-full px-6 py-3 text-sm font-bold disabled:cursor-not-allowed disabled:opacity-70 sm:mt-7 sm:px-7 sm:py-4 sm:text-base md:w-auto"
      >
        {submitting ? 'Sending…' : 'Request a Quote'}
      </button>
    </form>
  )
}
