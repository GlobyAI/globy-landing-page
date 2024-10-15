import React from 'react'
import GlobyIcon from 'public/icons/globy.svg'
import Image from 'next/image'

type Props = {
  isCustomer?: boolean
  message?: string
  children?: React.ReactNode
  icon?: React.ReactNode
}

export default function Message({
  isCustomer,
  message,
  children,
  icon,
}: Props) {
  return (
    <div
      className={`message ${isCustomer ? 'message--customer' : 'message--globy'}`}
    >
      <figure className={`avatar ${isCustomer ? 'lg' : ''} `}>
        {isCustomer ? (
          <Image
            src="/images/customer-avatar.png"
            alt="Conversation - Customer"
            fill
            sizes="56px 56px"
          />
        ) : (
          <GlobyIcon />
        )}
      </figure>

      <span className="message__content">{children ? children : message}</span>
      {icon && icon}
    </div>
  )
}
