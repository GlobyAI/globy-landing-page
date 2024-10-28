import { APP_ROUTERS } from '@/helpers/config'
import Link from 'next/link'
import Logo from 'public/icons/globy logo.svg'
export default function Header() {
  return (
    <header className="globy__header">
      <nav className="globy__header__navbar">
        <Link href={APP_ROUTERS.INDEX}>
          <Logo />
        </Link>
      </nav>
    </header>
  )
}
