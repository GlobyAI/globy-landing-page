import React from 'react'
import DiscountIcon from 'public/icons/discount.svg'
import BusinessMark from 'public/icons/business-mark.svg'
import NotSupport from 'public/icons/not-support.svg'
import Supported from 'public/icons/support.svg'
import Button from './Button'
const pricingOptions = [
  {
    id: 1,
    forBusiness: false,
    name: 'Standard',
    price: '100 kr',
    description: 'For those who want to let Globy kick-start the journey.',
    subscribeUrl: '/#',
    benefits: [
      {
        title: 'Globy assistans',
        isSupported: true,
      },
      {
        title: 'Content creation',
        isSupported: false,
      },
      {
        title: 'Unlimited changes',
        isSupported: false,
      },
      {
        title: 'Social media coverage',
        isSupported: false,
      },
    ],
  },
  {
    id: 2,
    forBusiness: false,
    name: 'PRO',
    price: '200 kr',
    description: 'For those who want to take their business to the next level.',
    subscribeUrl: '/#',
    benefits: [
      {
        title: 'Globy assistans',
        isSupported: true,
      },
      {
        title: 'Content creation',
        isSupported: true,
      },
      {
        title: 'Unlimited changes',
        isSupported: false,
      },
      {
        title: 'Social media coverage',
        isSupported: false,
      },
    ],
  },
  {
    id: 3,
    forBusiness: true,
    name: 'BUSINESS',
    price: '300 kr',
    description: 'For those who want to become a global star.',
    subscribeUrl: '/#',
    benefits: [
      {
        title: 'Globy assistans',
        isSupported: true,
      },
      {
        title: 'Content creation',
        isSupported: true,
      },
      {
        title: 'Unlimited changes',
        isSupported: true,
      },
      {
        title: 'Social media coverage',
        isSupported: true,
      },
    ],
  },
]
export default function Plans() {
  return (
    <section className="plans divider">
      <h3 className="heading">
        <em>Plans that suit everyone</em>
      </h3>
      <div className="plans__subscription">
        <div className="billing-circle">
          <p className="billing-circle__options">Monthly</p>
          <p className="billing-circle__options billing-circle__options--annually selected">
            Annually
            <DiscountIcon />
          </p>
        </div>
        <div className="pricing">
          {pricingOptions.map((option) => (
            <article
              className={`pricing__options ${option.forBusiness ? 'business' : ''}`}
              key={option.id}
            >
              {option.forBusiness && (
                <div className="business__icon">
                  <BusinessMark />
                </div>
              )}
              <div className="option-detail">
                <h5 className="option-detail__name">
                  <em>{option.name}</em>
                </h5>
                <p className="option-detail__price">
                  {option.price} <span>/month</span>
                </p>

                <p className="option-detail__description">
                  {option.description}
                </p>
              </div>

              <Button
                content="Get started"
                href={option.subscribeUrl}
                globyIcon={false}
              />

              <ul className="pricing__options__support-details">
                {option.benefits.map((benefit, index) => (
                  <li key={index} className="support-details__items">
                    {benefit.isSupported ? <Supported /> : <NotSupport />}
                    {benefit.title}
                  </li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
