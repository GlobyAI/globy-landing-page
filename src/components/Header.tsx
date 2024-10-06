import React from 'react'
import Image from 'next/image'
import { APP_ROUTERS } from '@/helpers/config'
import Link from 'next/link'

export default function Header() {
  return (
    <header className="globy__header">
      <nav className="globy__header__navbar">
        <Link href={APP_ROUTERS.INDEX}>
          <Image
            src="/images/globy logo.png"
            alt="Globy Logo"
            width={155}
            height={58}
            priority
          />
        </Link>
      </nav>
    </header>
  )
}
