import { useEffect, useRef, useState } from 'react'
import PackageCard from './PackageCard'

function useVisibleCount() {
  const [count, setCount] = useState(1)

  useEffect(() => {
    const update = () => {
      if (window.innerWidth >= 1280) setCount(3)
      else if (window.innerWidth >= 768) setCount(2)
      else setCount(1)
    }
    update()
    window.addEventListener('resize', update)
    return () => window.removeEventListener('resize', update)
  }, [])

  return count
}

const navBtnClass =
  'flex h-9 w-9 items-center justify-center rounded-full border border-white/30 bg-transparent text-white backdrop-blur-[2px] transition hover:border-cyan hover:bg-white/10 hover:text-cyan disabled:cursor-not-allowed disabled:opacity-35 sm:h-11 sm:w-11'

const AUTO_MS = 4000

export default function PackageSlider({ packages }) {
  const visible = useVisibleCount()
  const maxIndex = Math.max(0, packages.length - visible)
  const [index, setIndex] = useState(0)
  const [dragOffset, setDragOffset] = useState(0)
  const [isDragging, setIsDragging] = useState(false)
  const [paused, setPaused] = useState(false)

  const containerRef = useRef(null)
  const startX = useRef(0)
  const currentX = useRef(0)
  const dragging = useRef(false)

  useEffect(() => {
    setIndex((current) => Math.min(current, maxIndex))
  }, [maxIndex])

  useEffect(() => {
    if (paused || isDragging || maxIndex === 0) return undefined

    const id = window.setInterval(() => {
      setIndex((i) => (i >= maxIndex ? 0 : i + 1))
    }, AUTO_MS)

    return () => window.clearInterval(id)
  }, [paused, isDragging, maxIndex])

  const prev = () => setIndex((i) => (i <= 0 ? maxIndex : i - 1))
  const next = () => setIndex((i) => (i >= maxIndex ? 0 : i + 1))

  const onPointerDown = (clientX) => {
    dragging.current = true
    setIsDragging(true)
    startX.current = clientX
    currentX.current = clientX
    setDragOffset(0)
  }

  const onPointerMove = (clientX) => {
    if (!dragging.current) return
    currentX.current = clientX
    setDragOffset(clientX - startX.current)
  }

  const onPointerUp = () => {
    if (!dragging.current) return
    dragging.current = false
    setIsDragging(false)

    const delta = currentX.current - startX.current
    const threshold = 50

    if (delta <= -threshold) next()
    else if (delta >= threshold) prev()

    setDragOffset(0)
  }

  const containerWidth = containerRef.current?.offsetWidth || 1
  const slidePercent = 100 / visible
  const dragPercent = containerWidth
    ? (dragOffset / containerWidth) * slidePercent
    : 0

  return (
    <div
      className="relative mt-8 sm:mt-12 md:px-12"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
    >
      <button
        type="button"
        onClick={prev}
        aria-label="Previous packages"
        className={`${navBtnClass} absolute top-1/2 left-0 z-20 hidden -translate-y-1/2 md:flex`}
      >
        <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" aria-hidden="true">
          <path
            d="M15 6 9 12l6 6"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </button>

      <button
        type="button"
        onClick={next}
        aria-label="Next packages"
        className={`${navBtnClass} absolute top-1/2 right-0 z-20 hidden -translate-y-1/2 md:flex`}
      >
        <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" aria-hidden="true">
          <path
            d="m9 6 6 6-6 6"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </button>

      <div
        ref={containerRef}
        className="touch-pan-y overflow-hidden"
        onTouchStart={(e) => {
          setPaused(true)
          onPointerDown(e.touches[0].clientX)
        }}
        onTouchMove={(e) => onPointerMove(e.touches[0].clientX)}
        onTouchEnd={() => {
          onPointerUp()
          setPaused(false)
        }}
        onTouchCancel={() => {
          onPointerUp()
          setPaused(false)
        }}
        onMouseDown={(e) => onPointerDown(e.clientX)}
        onMouseMove={(e) => {
          if (dragging.current) onPointerMove(e.clientX)
        }}
        onMouseUp={onPointerUp}
        onMouseLeave={() => {
          if (dragging.current) onPointerUp()
        }}
      >
        <div
          className={`flex ${isDragging ? '' : 'transition-transform duration-500 ease-out'}`}
          style={{
            transform: `translateX(calc(-${index * slidePercent}% + ${dragPercent}%))`,
            cursor: isDragging ? 'grabbing' : 'grab',
          }}
        >
          {packages.map((pkg) => (
            <div
              key={pkg.name}
              className="box-border shrink-0 px-0.5 select-none sm:px-2"
              style={{ width: `${slidePercent}%`, flex: `0 0 ${slidePercent}%` }}
            >
              <PackageCard
                pkg={pkg}
                featured={pkg.name === 'Business Website'}
              />
            </div>
          ))}
        </div>
      </div>

      <div className="mt-4 flex items-center justify-between md:hidden">
        <button
          type="button"
          onClick={prev}
          aria-label="Previous packages"
          className={navBtnClass}
        >
          <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" aria-hidden="true">
            <path
              d="M15 6 9 12l6 6"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </button>

        <button
          type="button"
          onClick={next}
          aria-label="Next packages"
          className={navBtnClass}
        >
          <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" aria-hidden="true">
            <path
              d="m9 6 6 6-6 6"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </button>
      </div>
    </div>
  )
}
