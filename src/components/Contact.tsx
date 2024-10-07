'use client'
import TextField from './TextField'
import EmailIcon from 'public/icons/email.svg'
import UserIcon from 'public/icons/user.svg'
import IndustryIcon from 'public/icons/industry.svg'
import Button from './Button'
import { ChangeEvent, useState } from 'react'

export default function Contact() {
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
    <section className="contact divider" id="contact">
      <h4 className="heading">Reserve your front-row seat now!</h4>
      <p className="contact__subtitle">
        Leave your details and you will be among the first to use Globy&apos;s
        ground-breaking service.
      </p>

      <form className="contact__form">
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

        <Button content="Join the waiting list" type="button" />
      </form>
    </section>
  )
}
