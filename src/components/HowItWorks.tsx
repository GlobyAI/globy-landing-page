'use client'
import React, { useEffect, useRef, useState } from 'react'
import GlobyIcon from 'public/icons/globy.svg'
import ArrowUpIcon from 'public/icons/circle-arrow-up.svg'
import Message from './Message'
import ChatHistory from './ChatHistory'
import Button from './Button'
import Link from 'next/link'
import Image from 'next/image'
import TypingAnimation from './TypingAnimation'

export default function HowItWorks() {
  const greetingRef = useRef<HTMLDivElement | null>(null)
  const [isInView, setIsInView] = useState(false)
  const [isGreetingAnimationDone, setIsGreetingAnimationDone] = useState(false)
  const [FirstMessageDone, setFirstMessageDone] = useState(false)
  const [globyQuestionIndex, setGlobyQuestionIndex] = useState(1) // Track Globy's current question progress

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsInView(true)
          observer.disconnect()
        }
      },
      { threshold: 0.1 },
    )

    if (greetingRef.current) {
      observer.observe(greetingRef.current)
    }

    return () => {
      observer.disconnect()
    }
  }, [])

  return (
    <section className="globy__how-it-works divider">
      <div className="circle"></div>
      <div className="circle"></div>
      <h2 className="heading">How it works</h2>
      <div className="globy__how-it-works__chat-history">
        <div className="how-to-work__bg">
          <Image
            src="/images/how-it-works-grid.png"
            alt="how-it-works-bg"
            fill
            sizes="(min-width: 768px) 1100px 900px"
            loading="lazy"
          />
        </div>
        <div className="conversation">
          <div className="conversation__screen-bg">
            <Image
              src="/images/how-it-works-screen.png"
              alt="chat-history-screen"
              fill
              sizes="(min-width: 768px) 1100px 900px"
              loading="lazy"
            />
          </div>
          <div className="chat">
            <div className="chat__question">
              <div className="chat__question__globy">
                <figure className="avatar">
                  <GlobyIcon />
                </figure>
                <div className="chat__question__globy__heading">
                  <strong>QUESTION {globyQuestionIndex} OF 10</strong>
                  <ul className="dot-process-bar">
                    {[...Array(10)].map((_, index) => (
                      <li
                        key={index}
                        className={`dot-process-bar__dots ${
                          index < globyQuestionIndex ? 'done' : ''
                        }`}
                      ></li>
                    ))}
                  </ul>
                </div>
                <strong
                  className="chat__question__globy__greeting"
                  ref={greetingRef}
                >
                  Hi, I’m Globy 👋 We’ll begin with some relevant questions,
                  sounds good?
                </strong>
              </div>

              <div className="chat__question__customer">
                <Message isCustomer icon={<ArrowUpIcon />}>
                  {isInView && !FirstMessageDone && (
                    <TypingAnimation
                      message="  Yes, sure thing, please guide me. I’m about to start my business."
                      delay={0}
                      onComplete={() => {
                        setFirstMessageDone(true)
                        setIsGreetingAnimationDone(true)
                      }}
                    />
                  )}
                  {FirstMessageDone && (
                    <span>
                      Yes, sure thing, please guide me. I’m about to start my
                      business.
                    </span>
                  )}
                </Message>
              </div>
            </div>
            <ChatHistory
              isGreetingAnimationDone={isGreetingAnimationDone}
              isInView={isInView}
              FirstMessageDone={FirstMessageDone}
              setGlobyQuestionIndex={setGlobyQuestionIndex} // Pass setGlobyQuestionIndex to update the question index
            />

            <div className="presentation">
              <p className="presentation__content">
                <strong>Globy</strong> creates professional, <br /> relevant,
                modern, and completely unique websites. <br />
                <span>
                  You get easy help to edit the website without any prior
                  knowledge.
                </span>
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
