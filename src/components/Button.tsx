'use client'
import React from 'react'

interface Props extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  icon?: React.ReactNode
  children: React.ReactNode
}

export default function Button({ icon, children, ...rest }: Props) {
  return (
    <button {...rest}>
      {icon}
      {children}
    </button>
  )
}
