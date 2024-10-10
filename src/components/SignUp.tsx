import SignUpForm from './SignUpForm'

export default function Contact() {
  return (
    <section className="sign-up divider" id="sign-up">
      <h4 className="heading">Reserve your front-row seat now!</h4>
      <p className="sign-up__subtitle">
        Leave your details and you will be among the first to use Globy&apos;s
        ground-breaking service.
      </p>
      <SignUpForm />
    </section>
  )
}
