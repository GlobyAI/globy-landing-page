import ContactForm from './ContactForm'

export default function Contact() {
  return (
    <section className="contact divider" id="contact">
      <h4 className="heading">Reserve your front-row seat now!</h4>
      <p className="contact__subtitle">
        Leave your details and you will be among the first to use Globy&apos;s
        ground-breaking service.
      </p>
      <ContactForm />
    </section>
  )
}
