'use client'
import { ChangeEvent, useState } from 'react'
import Button from './Button'
import TextField from './TextField'
import EmailIcon from 'public/icons/email.svg'
import UserIcon from 'public/icons/user.svg'
import IndustryIcon from 'public/icons/industry.svg'

export default function SignUpForm() {
  const [form, setForm] = useState({
    fullName: '',
    email: '',
    industry: '',
  })
  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target
    setForm({ ...form, [name]: value })
  }
  return (
    <form className="sign-up__form">
      <TextField
        label="Full name"
        icon={<UserIcon />}
        name="fullName"
        value={form.fullName}
        onChange={handleChange}
      />
      <TextField
        label="Email"
        icon={<EmailIcon />}
        name="email"
        value={form.email}
        onChange={handleChange}
      />
      <TextField
        label="Industry"
        icon={<IndustryIcon />}
        name="industry"
        value={form.industry}
        onChange={handleChange}
      />
      <Button type="button">Join the waiting list</Button>
    </form>
  )
}
