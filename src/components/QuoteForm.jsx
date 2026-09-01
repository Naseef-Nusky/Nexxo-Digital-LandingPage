import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { websiteTypes } from '../data/content'

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

  if (project && project.length > 5000) {
    errors.project = 'Project details are too long.'
  }

  return errors
}

function FieldError({ message, dark }) {
  if (!message) return null
  return (
    <p
      className={`mt-1.5 text-xs sm:text-sm ${dark ? 'text-red-300' : 'text-red-600'}`}
      role="alert"
    >
      {message}
    </p>
  )
}

export default function QuoteForm({ variant = 'dark' }) {
  const navigate = useNavigate()
  const [values, setValues] = useState(initialValues)
  const [errors, setErrors] = useState({})
  const [touched, setTouched] = useState({})
  const [submitting, setSubmitting] = useState(false)
  const [submitError, setSubmitError] = useState('')
  const dark = variant === 'dark'

  const baseFieldClass =
    'mt-1.5 w-full rounded-xl border px-3 py-2.5 text-sm outline-none transition sm:mt-2 sm:px-4 sm:py-3.5 sm:text-base'

  const okFieldClass = dark
    ? 'border-white/10 bg-white/5 text-white placeholder:text-white/35 focus:border-cyan/50 focus:bg-white/10'
    : 'border-ink/15 bg-white text-ink placeholder:text-slate/55 focus:border-cyan/50 focus:bg-white focus:ring-2 focus:ring-cyan/15'

  const errorFieldClass = dark
    ? 'border-red-400/70 bg-white/5 text-white focus:border-red-400 focus:bg-white/10'
    : 'border-red-400 bg-white text-ink focus:border-red-500 focus:ring-2 focus:ring-red-200'

  const labelClass = dark
    ? 'block text-sm font-medium text-white/80 sm:text-base'
    : 'block text-sm font-medium text-ink sm:text-base'

  const optionClass = dark ? 'bg-navy text-white' : 'bg-white text-ink'

  function fieldClass(hasError) {
    return `${baseFieldClass} ${hasError ? errorFieldClass : okFieldClass}`
  }

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
      const el = e.currentTarget.querySelector(`[name="${firstError}"]`)
      el?.focus()
      el?.scrollIntoView({ behavior: 'smooth', block: 'center' })
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

      navigate('/thanks')
    } catch (err) {
      setSubmitError(
        err.message || 'Unable to send your request. Please try again.'
      )
    } finally {
      setSubmitting(false)
    }
  }

  return (
    <form
      onSubmit={handleSubmit}
      noValidate
      className={
        dark
          ? 'relative overflow-hidden rounded-2xl border border-white/10 bg-white/[0.04] p-4 backdrop-blur-sm sm:p-6 md:p-9'
          : 'relative overflow-hidden rounded-2xl border border-ink/10 bg-white p-4 shadow-[0_18px_40px_-28px_rgba(5,7,13,0.16)] sm:p-6 md:p-9'
      }
    >
      <div
        className={`absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent to-transparent ${
          dark ? 'via-cyan/70' : 'via-cyan/50'
        }`}
      />

      <div className="grid gap-3 sm:gap-5 md:grid-cols-2">
        <label className={labelClass}>
          Name <span className="text-blue">*</span>
          <input
            name="name"
            autoComplete="name"
            value={values.name}
            onChange={(e) => updateField('name', e.target.value)}
            onBlur={() => markTouched('name')}
            aria-invalid={Boolean(errors.name)}
            className={fieldClass(errors.name)}
          />
          <FieldError message={errors.name} dark={dark} />
        </label>

        <label className={labelClass}>
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
          <FieldError message={errors.business} dark={dark} />
        </label>

        <label className={labelClass}>
          Email Address <span className="text-blue">*</span>
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
          <FieldError message={errors.email} dark={dark} />
        </label>

        <label className={labelClass}>
          Telephone Number <span className="text-blue">*</span>
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
          <FieldError message={errors.phone} dark={dark} />
        </label>
      </div>

      <label className={`mt-3 sm:mt-5 ${labelClass}`}>
        What type of website do you need? <span className="text-blue">*</span>
        <select
          name="type"
          className={`${fieldClass(errors.type)} appearance-none`}
          value={values.type}
          onChange={(e) => updateField('type', e.target.value)}
          onBlur={() => markTouched('type')}
          aria-invalid={Boolean(errors.type)}
        >
          <option value="" disabled className={optionClass}>
            Select an option
          </option>
          {websiteTypes.map((type) => (
            <option key={type} value={type} className={optionClass}>
              {type}
            </option>
          ))}
        </select>
        <FieldError message={errors.type} dark={dark} />
      </label>

      <label className={`mt-3 sm:mt-5 ${labelClass}`}>
        Tell us about your project{' '}
        <span className={dark ? 'text-white/40' : 'text-slate'}>
          (optional)
        </span>
        <textarea
          name="project"
          rows={4}
          value={values.project}
          onChange={(e) => updateField('project', e.target.value)}
          onBlur={() => markTouched('project')}
          aria-invalid={Boolean(errors.project)}
          className={`${fieldClass(errors.project)} resize-y`}
        />
        <FieldError message={errors.project} dark={dark} />
      </label>

      {submitError ? (
        <p
          className={`mt-4 text-sm ${dark ? 'text-red-300' : 'text-red-600'}`}
          role="alert"
        >
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
