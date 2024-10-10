import React from 'react'
import AppWindowICon from 'public/icons/app-window.svg'
import MessageCircleHeartIcon from 'public/icons/message-circle-heart.svg'
import AlarmClockIcon from 'public/icons/alarm-clock.svg'
import EarthIcon from 'public/icons/earth.svg'
export default function Benefits() {
  return (
    <>
      <div className="benefits">
        <article className="benefits__items">
          <AppWindowICon />
          <h5 className="benefits__items__title">Industry Best Practices</h5>
          <p className="benefits__items__content">
            Benefit from time-tested standards and practices, built right into
            your website design.
          </p>
        </article>
        <article className="benefits__items">
          <MessageCircleHeartIcon />

          <h5 className="benefits__items__title">Tailored Uniqueness</h5>
          <p className="benefits__items__content">
            We analyze your competitors and create a design that’s truly unique
            to your business.
          </p>
        </article>
        <article className="benefits__items">
          <AlarmClockIcon />
          <h5 className="benefits__items__title">Lightning-Fast Launch</h5>
          <p className="benefits__items__content">
            Get your website up and running in just hours, so you can start
            growing your business fast.
          </p>
        </article>
        <article className="benefits__items">
          <EarthIcon />
          <h5 className="benefits__items__title">Comprehensive Built-In SEO</h5>
          <p className="benefits__items__content">
            Your site is fully optimized for search engines, boosting visibility
            from day one.
          </p>
        </article>
      </div>

      <div className="dots">
        <span className="dots__items"></span>
        <span className="dots__items"></span>
        <span className="dots__items"></span>
      </div>
    </>
  )
}
