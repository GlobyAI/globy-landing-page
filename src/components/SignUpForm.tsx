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
        <p className="sign-up-form__message">You successfully signed up!</p>
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
        label="Email"
        icon={errors.email ? <EmailErrorIcon /> : <EmailIcon />}
        name="email"
        value={values.email}
        onChange={(e) => handleChange('email', e.target.value)}
        type="email"
        error={Boolean(errors.email)}
        helperText={errors.email}
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
