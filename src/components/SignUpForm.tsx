'use client'
import Button from './Button'
import TextField from './TextField'
import EmailIcon from 'public/icons/email.svg'
import EmailErrorIcon from 'public/icons/email-error.svg'
import UserIcon from 'public/icons/user.svg'
import UserErrorIcon from 'public/icons/user-error.svg'
import useForm from '@/hooks/useForm'
import { industries } from '@/helpers/variables'
import SelectBox from './SelectBox'

export default function SignUpForm() {
  const {
    values,
    handleChange,
    errors,
    handleSubmit,
    isSuccess,
    isPending,
    msg,
  } = useForm({
    initialValues: { email: '', industry: '', full_name: '' },
  })

  if (isSuccess) {
    return (
      <div className="sign-up-form">
        <p className="sign-up-form__message">
          <strong>Thank you for signing up! </strong>
          <br />
          <small>
            You&apos;ve been successfully added to our waitlist. We&apos;ll
            notify you when early access becomes available.
          </small>
        </p>
      </div>
    )
  }

  return (
    <form className="sign-up-form">
      {msg && <p className="sign-up-form__error-message">{msg}</p>}
      <TextField
        id="full_name"
        label="Full name"
        icon={errors.full_name ? <UserErrorIcon /> : <UserIcon />}
        name="full_name"
        value={values.full_name}
        onChange={(e) => handleChange('full_name', e.target.value)}
        type="text"
        error={Boolean(errors.full_name)}
        helperText={errors.full_name}
      />
      <TextField
        id="email"
        icon={errors.email ? <EmailErrorIcon /> : <EmailIcon />}
        name="email"
        label="Email"
        value={values.email}
        onChange={(e) => handleChange('email', e.target.value)}
        type="email"
        error={Boolean(errors.email)}
        helperText={errors.email}
        placeholder="name@email.com"
      />

      <SelectBox
        options={industries}
        value={values.industry}
        onSelect={handleChange}
        error={Boolean(errors.industry)}
        message={errors.industry}
      />

      <Button type="button" onClick={handleSubmit} disabled={isPending}>
        Join the waiting list
      </Button>
    </form>
  )
}
