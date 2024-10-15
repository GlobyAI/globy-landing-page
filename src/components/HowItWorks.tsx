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
        <div className="how-to-work__bg"></div>
        <div className="conversation">
          <div className="conversation__screen-bg">
            <Image
              src="/images/how-it-works-screen.png"
              alt="chat-history-screen"
              fill
              sizes="(min-width: 768px) 1100px 900px"
            />
          </div>
          <div className="chat">
            <div className="chat__question">
              <div className="chat__question__globy">
                <figure className="avatar">
                  <GlobyIcon />
                </figure>
                <div className="chat__question__globy__heading">
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
                <strong className="chat__question__globy__greeting">
                  Hi, I’m Globy 👋 We’ll begin with some relevant questions,
                  sounds good?
                </strong>
              </div>

              <div className="chat__question__customer">
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
              <p className="presentation__content">
                <strong>Globy</strong> creates professional, <br /> relevant,
                modern and completely unique websites. <br />
                You get easy help to edit the website without any prior
                knowledge.
              </p>
              <Link href="#join" className="presentation__link">
                <Button>Sign up now</Button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
