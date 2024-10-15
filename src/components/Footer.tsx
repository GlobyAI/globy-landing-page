import { METADATA } from '@/helpers/config'
import Link from 'next/link'
import InstagramIcon from 'public/icons/instagram-brands.svg'
import LinkedInIcon from 'public/icons/linkedin-brands.svg'
import Join from './Join'
export default function Footer() {
  return (
    <footer className="globy__footer">
      <div className="circle"></div>
      <Join />
      <div className="footer">
        <ul className="footer__social-media">
          <li className="footer__social-media__items">
            <Link
              aria-label="Globy - Instagram"
              className="footer__social-media__links"
              href={METADATA.INSTAGRAM_URL}
              target="_blank"
            >
              <InstagramIcon />
            </Link>
          </li>
          <li className="footer__social-media__items">
            <Link
              aria-label="Globy - LinkedIn"
              className="footer__social-media__links"
              href={METADATA.LINKEDIN_URL}
              target="_blank"
            >
              <LinkedInIcon />
            </Link>
          </li>
        </ul>

        <p className="footer__copyright">
          <span> &copy; </span>
          {METADATA.NAME}. All rights reserved.
        </p>
      </div>
    </footer>
  )
}
