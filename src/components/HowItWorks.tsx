import GlobyIcon from 'public/icons/globy.svg'
import ArrowUpIcon from 'public/icons/circle-arrow-up.svg'
import Message from './Message'
import ChatHistory from './ChatHistory'
import Button from './Button'
import Link from 'next/link'

export default function HowItWorks() {
  return (
    <section className="globy__how-it-works divider">
      <div className="circle"></div>
      <div className="circle"></div>
      <h2 className="heading">How it works</h2>
      <div className="globy__how-it-works__chat-history">
        <div className="bg-grid"></div>
        <div className="bg-screen"></div>
        <div className="conversation">
          <div className="question">
            <div className="question__globy">
              <figure className="avatar">
                <GlobyIcon />
              </figure>
              <div className="question__globy__heading">
                <p>QUESTION 3 OF 10</p>
                <ul className="dot-process-bar">
                  <li className="dot-process-bar__dots done"></li>
                  <li className="dot-process-bar__dots done"></li>
                  <li className="dot-process-bar__dots done current"></li>
                  <li className="dot-process-bar__dots"></li>
                  <li className="dot-process-bar__dots"></li>
                  <li className="dot-process-bar__dots"></li>
                  <li className="dot-process-bar__dots"></li>
                  <li className="dot-process-bar__dots"></li>
                  <li className="dot-process-bar__dots"></li>
                  <li className="dot-process-bar__dots"></li>
                </ul>
              </div>
              <h4 className="question__globy__greeting">
                Hi, I’m Globy 👋 We’ll begin with some relevant questions,
                sounds good?
              </h4>
            </div>

            <div className="question__customer">
              <Message
                isCustomer
                icon={<ArrowUpIcon />}
                message="Yes, sure thing, please guide me. I’m about to start my
                business."
              />
            </div>
          </div>

          <ChatHistory />
          <div className="presentation">
            <h6>
              <strong>Globy</strong> creates professional, <br /> relevant,
              modern and completely unique websites. <br />
              You get easy help to edit the website without any prior knowledge.
            </h6>
            <Link href="#contact">
              <Button>Sign up now</Button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}
