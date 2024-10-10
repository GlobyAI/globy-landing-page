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
            fill
            sizes="(min-width: 768px) 155px, 58px"
            priority
          />
        </Link>
      </nav>
    </header>
  )
}
