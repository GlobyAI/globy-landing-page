import React, { useEffect, useState } from 'react'
import Message from './Message'
import TypingAnimation from './TypingAnimation'

type ChatHistoryProps = {
  isGreetingAnimationDone: boolean
  isInView: boolean
  FirstMessageDone?: boolean
}

export default function ChatHistory({
  isGreetingAnimationDone,
  isInView,
}: ChatHistoryProps) {
  const [startChatAnimation, setStartChatAnimation] = useState(false)
  const [firstMessageDone, setFirstMessageDone] = useState(false)
  const [secondMessageDone, setSecondMessageDone] = useState(false)
  const [thirdMessageDone, setThirdMessageDone] = useState(false)

  useEffect(() => {
    if (isGreetingAnimationDone && isInView && !startChatAnimation) {
      setStartChatAnimation(true)
    }
  }, [isGreetingAnimationDone, isInView, startChatAnimation])

  return (
    <ul className="chat__history">
      <li className="chat__history__quote-message">
        {startChatAnimation && !firstMessageDone && (
          <Message>
            <TypingAnimation
              message="  Congratulations on starting your own business! 🎉 "
              boldPart=" What business should you start?"
              onComplete={() => setFirstMessageDone(true)}
              delay={0}
            />
          </Message>
        )}

        {firstMessageDone && (
          <Message>
            Congratulations on starting your own business! 🎉{' '}
            <span className="bold">What business should you start?</span>
          </Message>
        )}

        {firstMessageDone && !secondMessageDone && (
          <Message isCustomer>
            <TypingAnimation
              message=" I want to create a hair salon that focuses on various beauty products."
              onComplete={() => setSecondMessageDone(true)}
              delay={0}
            />
          </Message>
        )}

        {secondMessageDone && (
          <Message isCustomer>
            I want to create a hair salon that focuses on various beauty
            products.
          </Message>
        )}
      </li>

      <li className="chat__history__quote-message">
        {firstMessageDone && secondMessageDone && !thirdMessageDone && (
          <Message>
            <TypingAnimation
              message="  Hair salon is a great business! We’ve analyzed thousands of webpages in this domain and are ready to provide you with the best practices. "
              boldPart=" Do you have a website already?"
              onComplete={() => setThirdMessageDone(true)}
              delay={0}
            />
          </Message>
        )}

        {thirdMessageDone && (
          <>
            <Message>
              Hair salon is a great business! We’ve analyzed thousands of
              webpages in this domain and are ready to provide you with the best
              practices.{' '}
              <span className="bold">Do you have a website already? </span>
            </Message>

            <Message isCustomer>
              <p>Type here...</p>
              <div className="alternatives">
                <span className="option">Yes, I do actually</span>
                <span className="option">
                  No, I don’t, this is why I’m here
                </span>
              </div>
            </Message>
          </>
        )}
      </li>
      <li className="chat__history__quote-message">
        <Message isTyping={true} />
        <Message isCustomer />
      </li>
    </ul>
  )
}
