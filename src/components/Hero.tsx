import Button from './Button'
import Link from 'next/link'
import Benefits from './Benefits'
export default function Hero() {
  return (
    <section className="globy__hero">
      <div className="circle"></div>
      <div className="circle"></div>
      <div className="circle"></div>
      <div className="intro">
        <h1 className="intro__heading">
          Build unique websites faster{' '}
          <span className="lightning-bolt"> &#9889;</span>
          with chat
        </h1>
        <h5 className="intro__subtitle">
          Join our waiting list and be among the first to get access when we
          launch!
        </h5>
        <Link href="#contact">
          <Button>Join now</Button>
        </Link>
      </div>

      <Benefits />
    </section>
  )
}
