import React from 'react'
import Link from 'next/link'
import Logo from 'public/icons/globy logo.svg'
import { APP_ROUTERS } from '@/helpers/config'
import Button from '@/components/Button'
import TextField from '@/components/TextField'
import GoogleIcon from 'public/icons/google.svg'
import AppleIcon from 'public/icons/apple.svg'
import EmailIcon from 'public/icons/email.svg'
import EyeOffIcon from 'public/icons/eye-off.svg'
export default function SignInPage() {
  return (
    <div className="sign-in">
      <div className="circle"></div>
      <div className="circle"></div>
      <div className="sign-in__content">
        <Link href={APP_ROUTERS.INDEX} className="logo">
          <Logo />
        </Link>
        <div className="social-connections">
          <Button icon={<AppleIcon />}>
            <a href="/api/auth/login?connection=apple">Continue with Apple</a>
          </Button>
          <Button icon={<GoogleIcon />}>
            <a href="/api/auth/login?connection=google-oauth2">
              Continue with Google
            </a>
          </Button>
        </div>
        <div className="sign-in__divider">OR</div>
        <form action="" className="sign-in-form">
          <TextField icon={<EmailIcon />} placeholder="Email" />
          <TextField icon={<EyeOffIcon />} placeholder="Password" />
          <Link
            href={APP_ROUTERS.FORGOT_PASSWORD}
            className="sign-in-form__forgot-password"
          >
            Forgot your password?
          </Link>
          <Button>Login / Sign Up</Button>
          <p>
            By creating an account you agree with our Terms of Service, Privacy
            Policy
          </p>
        </form>
      </div>
    </div>
  )
}
