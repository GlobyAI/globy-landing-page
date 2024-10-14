import { METADATA } from '@/helpers/config'
import Link from 'next/link'
import TwitterIcon from 'public/icons/x-twitter-brands.svg'
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
            <Link href={METADATA.TWITTER_URL}>
              <TwitterIcon />
            </Link>
          </li>
          <li className="footer__social-media__items">
            <Link href={METADATA.INSTAGRAM_URL}>
              <InstagramIcon />
            </Link>
          </li>
          <li className="footer__social-media__items">
            <Link href={METADATA.LINKEDIN_URL}>
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
