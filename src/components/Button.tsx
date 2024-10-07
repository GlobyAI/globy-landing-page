'use client'
import React from 'react'
import GlobyIcon from 'public/icons/globy.svg'
import Link from 'next/link'

interface Props extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  href?: string
  globyIcon?: boolean
  content?: string
}

export default function Button({
  href,
  globyIcon = true,
  content,
  ...rest
}: Props) {
  if (href) {
    return (
      <button {...rest}>
        <Link href={href}>
          {globyIcon && <GlobyIcon />}
          {content}
        </Link>
      </button>
    )
  }

  return (
    <button {...rest}>
      {globyIcon && <GlobyIcon />}
      {content}
    </button>
  )
}
