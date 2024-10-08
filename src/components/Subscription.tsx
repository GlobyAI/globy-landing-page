'use client'
import React from 'react'
import DiscountIcon from 'public/icons/discount.svg'
import BusinessMark from 'public/icons/business-mark.svg'
import NotSupport from 'public/icons/not-support.svg'
import Supported from 'public/icons/support.svg'
import Button from './Button'
import { pricingOptions } from '@/helpers/variables'

export default function Subscription() {
  const [selectedPlan, setSelectedPlan] = React.useState('annually')

  const handleChangePlan = (plan: string) => {
    setSelectedPlan(plan)
  }

  return (
    <div className="globy__plans__subscription">
      <div className="billing-circle">
        <p
          className={`billing-circle__options ${selectedPlan === 'monthly' ? 'selected' : ''} `}
          onClick={() => handleChangePlan('monthly')}
        >
          Monthly
        </p>
        <p
          className={`billing-circle__options billing-circle__options--annually ${selectedPlan === 'annually' ? 'selected' : ''} `}
          onClick={() => handleChangePlan('annually')}
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
              <h5 className="option-detail__name">
                <em>{option.name}</em>
              </h5>
              <p className="option-detail__price">
                {option.price} <span>/month</span>
              </p>

              <p className="option-detail__description">{option.description}</p>
            </div>

            <Button globyIcon={false}>Get started</Button>

            <ul className="pricing-tiers__options__support-details">
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
