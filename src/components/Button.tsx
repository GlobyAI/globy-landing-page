'use client'
import React from 'react'
import GlobyIcon from 'public/icons/globy.svg'

interface Props extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  globyIcon?: boolean
  children: React.ReactNode
}

export default function Button({ globyIcon = true, children, ...rest }: Props) {
  return (
    <button {...rest}>
      {globyIcon && <GlobyIcon />}
      {children}
    </button>
  )
}
