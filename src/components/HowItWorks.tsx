import GlobyIcon from 'public/icons/globy.svg'
import ArrowUpIcon from 'public/icons/circle-arrow-up.svg'
import Message from './Message'
import ChatHistory from './ChatHistory'
import Button from './Button'
import Link from 'next/link'
import Image from 'next/image'

export default function HowItWorks() {
  return (
    <section className="globy__how-it-works divider">
      <div className="circle"></div>
      <div className="circle"></div>
      <h2 className="heading">How it works</h2>
      <div className="globy__how-it-works__chat-history">
        <div className="conversation">
          <div className="conversation__screen-bg">
            <Image
              src="/images/how-it-works-screen.png"
              alt="chat-history-screen"
              fill
              sizes="(min-width: 768px) 1100px 900px"
            />
          </div>
          <div className="question">
            <div className="question__globy">
              <div className="question__globy__heading">
                <figure className="avatar">
                  <GlobyIcon />
                </figure>
                <strong>QUESTION 3 OF 10</strong>
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
              <strong className="question__globy__greeting">
                Hi, I’m Globy 👋 We’ll begin with some relevant questions,
                sounds good?
              </strong>
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
            <p>
              <strong>Globy</strong> creates professional, <br /> relevant,
              modern and completely unique websites. <br />
              You get easy help to edit the website without any prior knowledge.
            </p>
            <Link href="#join">
              <Button>Sign up now</Button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}
