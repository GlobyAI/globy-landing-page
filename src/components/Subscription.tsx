'use client'
import React from 'react'
import DiscountIcon from 'public/icons/discount.svg'
import BusinessMark from 'public/icons/business-mark.svg'
import NotSupport from 'public/icons/not-support.svg'
import Supported from 'public/icons/support.svg'
import Button from './Button'
import { pricingOptions } from '@/helpers/variables'
import Link from 'next/link'

export default function Subscription() {
  const [selectedPlan, setSelectedPlan] = React.useState('monthly')

  const handleChangePlan = (plan: string) => {
    if (plan === selectedPlan) return
    setSelectedPlan(plan)
  }

  return (
    <div className="globy__plans__subscription">
      <div className={`billing-circle  ${selectedPlan}`}>
        <p
          className={`billing-circle__options `}
          onClick={() => handleChangePlan('monthly')}
        >
          Monthly
        </p>
        <p
          className={`billing-circle__options billing-circle__options--annually ${selectedPlan === 'annually' ? 'selected' : ''} `}
        >
          Annually
          <DiscountIcon />
        </p>
      </div>
      <div className="pricing-tiers">
        {pricingOptions.map((option) => (
          <article
            className={`pricing-tiers__options ${option.forBusiness ? 'business' : ''}`}
            key={option.id}
          >
            {option.forBusiness && (
              <div className="business__icon">
                <BusinessMark />
              </div>
            )}
            <div className="option-detail">
              <strong className="option-detail__name">
                <em>{option.name}</em>
              </strong>
              <p className="option-detail__price">
                {option.price > 0 ? (
                  <>
                    &euro;{option.price} <span>/month</span>
                  </>
                ) : (
                  'Free'
                )}
              </p>

              <p className="option-detail__description">{option.description}</p>
            </div>

            <Link href="#join">
              <Button>Get started</Button>
            </Link>

            <ul className="support-details">
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
  )
}
