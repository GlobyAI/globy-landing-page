import React, { useEffect, useState, Dispatch, SetStateAction } from 'react'
import Message from './Message'
import TypingAnimation from './TypingAnimation'

type ChatHistoryProps = {
  isGreetingAnimationDone: boolean
  isInView: boolean
  FirstMessageDone?: boolean
  setGlobyQuestionIndex: Dispatch<SetStateAction<number>> // Set function for updating the question index
}

export default function ChatHistory({
  isGreetingAnimationDone,
  isInView,
  setGlobyQuestionIndex,
}: ChatHistoryProps) {
  const [startChatAnimation, setStartChatAnimation] = useState(false)
  const [firstGlobyMessageDone, setFirstGlobyMessageDone] = useState(false)
  const [secondGlobyMessageDone, setSecondGlobyMessageDone] = useState(false)
  const [thirdGlobyMessageDone, setThirdGlobyMessageDone] = useState(false)

  useEffect(() => {
    // Start chat animation when greeting animation is done and component is in view
    if (isGreetingAnimationDone && isInView && !startChatAnimation) {
      setStartChatAnimation(true)
    }
  }, [isGreetingAnimationDone, isInView, startChatAnimation])

  useEffect(() => {
    if (firstGlobyMessageDone) setGlobyQuestionIndex(2)
    if (thirdGlobyMessageDone) setGlobyQuestionIndex(3)
  }, [
    firstGlobyMessageDone,
    secondGlobyMessageDone,
    thirdGlobyMessageDone,
    setGlobyQuestionIndex,
  ])

  return (
    <ul className="chat__history">
      <li className="chat__history__quote-message">
        {/* First Globy Message */}
        {startChatAnimation && !firstGlobyMessageDone && (
          <Message>
            <TypingAnimation
              message="  Congratulations on starting your own business! 🎉"
              boldPart="What business should you start?"
              onComplete={() => setFirstGlobyMessageDone(true)}
              delay={0}
            />
          </Message>
        )}

        {firstGlobyMessageDone && (
          <Message>
            Congratulations on starting your own business! 🎉{' '}
            <span className="bold">What business should you start?</span>
          </Message>
        )}

        {/* First Customer Response */}
        {firstGlobyMessageDone && !secondGlobyMessageDone && (
          <Message isCustomer>
            <TypingAnimation
              message="  I want to create a hair salon that focuses on various beauty products."
              onComplete={() => setSecondGlobyMessageDone(true)} // Only marks customer response as done, does not affect Globy's progress
              delay={0}
            />
          </Message>
        )}

        {secondGlobyMessageDone && (
          <Message isCustomer>
            I want to create a hair salon that focuses on various beauty
            products.
          </Message>
        )}
      </li>

      <li className="chat__history__quote-message">
        {/* Second Globy Message */}
        {firstGlobyMessageDone &&
          secondGlobyMessageDone &&
          !thirdGlobyMessageDone && (
            <Message>
              <TypingAnimation
                message="  Hair salon is a great business! We’ve analyzed thousands of webpages in this domain and are ready to provide you with the best practices."
                boldPart="Do you have a website already?"
                onComplete={() => setThirdGlobyMessageDone(true)}
                delay={0}
              />
            </Message>
          )}

        {thirdGlobyMessageDone && (
          <>
            <Message>
              Hair salon is a great business! We’ve analyzed thousands of
              webpages in this domain and are ready to provide you with the best
              practices.{' '}
              <span className="bold">Do you have a website already?</span>
            </Message>

            {/* Second Customer Response */}
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
