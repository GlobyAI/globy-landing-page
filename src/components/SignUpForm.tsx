'use client'
import Button from './Button'
import TextField from './TextField'
import EmailIcon from 'public/icons/email.svg'
import EmailErrorIcon from 'public/icons/email-error.svg'
import UserIcon from 'public/icons/user.svg'
import UserErrorIcon from 'public/icons/user-error.svg'
import IndustryIcon from 'public/icons/industry.svg'
import IndustryErrorIcon from 'public/icons/industry-error.svg'
import useForm from '@/hooks/useForm'

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
        label="Full name"
        icon={errors.full_name ? <UserErrorIcon /> : <UserIcon />}
        name="full_name"
        value={values.full_name}
        onChange={handleChange}
        type="text"
        error={Boolean(errors.full_name)}
        helperText={errors.full_name}
      />
      <TextField
        label="Email"
        icon={errors.email ? <EmailErrorIcon /> : <EmailIcon />}
        name="email"
        value={values.email}
        onChange={handleChange}
        type="email"
        error={Boolean(errors.email)}
        helperText={errors.email}
      />
      <TextField
        type="text"
        label="Industry"
        icon={errors.industry ? <IndustryErrorIcon /> : <IndustryIcon />}
        name="industry"
        value={values.industry}
        error={Boolean(errors.industry)}
        helperText={errors.industry}
        onChange={handleChange}
      />
      <Button type="button" onClick={handleSubmit} disabled={isPending}>
        Join the waiting list
      </Button>
    </form>
  )
}
