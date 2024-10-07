import { METADATA } from '@/helpers/config'
import Link from 'next/link'
import React from 'react'
import TwitterIcon from 'public/icons/x-twitter-brands.svg'
import InstagramIcon from 'public/icons/instagram-brands.svg'
import LinkedInIcon from 'public/icons/linkedin-brands.svg'
export default function Footer() {
  return (
    <footer className="globy__footer">
      <article className="footer-content">
        <ul className="footer-content__social-media">
          <li className="footer-content__social-media__items">
            <Link href={METADATA.APP_TWITTER_URL}>
              <TwitterIcon />
            </Link>
          </li>
          <li className="footer-content__social-media__items">
            <Link href={METADATA.APP_INSTAGRAM_URL}>
              <InstagramIcon />
            </Link>
          </li>
          <li className="footer-content__social-media__items">
            <Link href={METADATA.APP_LINKEDIN_URL}>
              <LinkedInIcon />
            </Link>
          </li>
        </ul>

        <p className="footer-content__copyright">
          <span> &copy; </span>
          {METADATA.APP_NAME}. All rights reserved.
        </p>
      </article>
    </footer>
  )
}
