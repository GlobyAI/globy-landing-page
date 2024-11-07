'use client'
import React, { useEffect, useRef, useState } from 'react'
import AppWindowIcon from './AppWindowIcon'
import MessageCircleHeartIcon from './MessageCircleHeartIcon'
import AlarmIcon from './AlarmClockIcon'
import EarthIcon from './EarthIcon'

export default function Benefits() {
  const benefitsRef = useRef(null)
  const [isVisible, setIsVisible] = useState([false, false, false, false])
  const [hasAnimated, setHasAnimated] = useState(false)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasAnimated) {
          setHasAnimated(true)
          const timers = [
            setTimeout(() => setIsVisible([true, false, false, false]), 150),
            setTimeout(() => setIsVisible([true, true, false, false]), 450),
            setTimeout(() => setIsVisible([true, true, true, false]), 750),
            setTimeout(() => setIsVisible([true, true, true, true]), 1050),
          ]
          return () => timers.forEach(clearTimeout)
        }
      },
      { threshold: 0.1 },
    )

    if (benefitsRef.current) {
      observer.observe(benefitsRef.current)
    }

    return () => {
      if (benefitsRef.current) {
        observer.unobserve(benefitsRef.current)
      }
    }
  }, [hasAnimated])

  return (
    <div className="benefits" ref={benefitsRef}>
      <article className="benefits__items">
        <div className="icon-wrapper">
          <div className={`icon-container ${isVisible[0] ? 'animate' : ''}`}>
            {isVisible[0] && <AppWindowIcon />}
          </div>
        </div>
        <strong className="benefits__items__title">
          Industry Best <br />
          Practices
        </strong>
        <p className="benefits__items__content">
          Benefit from time-tested standards and practices, built right into
          your website design.
        </p>
      </article>

      <article className="benefits__items">
        <div className="icon-wrapper">
          <div className={`icon-container ${isVisible[1] ? 'animate' : ''}`}>
            {isVisible[1] && <MessageCircleHeartIcon />}
          </div>
        </div>
        <strong className="benefits__items__title">
          Tailored <br />
          Uniqueness
        </strong>
        <p className="benefits__items__content">
          We analyze your competitors and create a design that’s truly unique to
          your business.
        </p>
      </article>

      <article className="benefits__items">
        <div className="icon-wrapper">
          <div className={`icon-container ${isVisible[2] ? 'animate' : ''}`}>
            {isVisible[2] && <AlarmIcon />}
          </div>
        </div>
        <strong className="benefits__items__title">
          Lightning-Fast <br />
          Launch
        </strong>
        <p className="benefits__items__content">
          Get your website up and running in just hours, so you can start
          growing your business fast.
        </p>
      </article>

      <article className="benefits__items">
        <div className="icon-wrapper">
          <div className={`icon-container ${isVisible[3] ? 'animate' : ''}`}>
            {isVisible[3] && <EarthIcon />}
          </div>
        </div>
        <strong className="benefits__items__title">
          Comprehensive
          <br /> Built-In SEO
        </strong>
        <p className="benefits__items__content">
          Your site is fully optimized for search engines, boosting visibility
          from day one.
        </p>
      </article>

      <div className="dots">
        <span className="dots__items"></span>
        <span className="dots__items"></span>
        <span className="dots__items"></span>
      </div>
    </div>
  )
}
