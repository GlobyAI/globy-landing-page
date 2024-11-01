import React, { useState, useEffect } from 'react'

type TypingAnimationProps = {
  message: string 
  boldPart?: string 
  delay?: number 
  typingSpeed?: number 
  onComplete?: () => void 
}

export default function TypingAnimation({
  message,
  boldPart = '',
  delay = 0,
  typingSpeed = 18, 
  onComplete,
}: TypingAnimationProps) {
  const [displayedText, setDisplayedText] = useState<string[]>([])
  const fullText = message + boldPart 
  const boldStartIndex = message.length 

  useEffect(() => {
    let index = 0
    let typingTimeoutId: NodeJS.Timeout

   
    const typeCharacter = () => {
      if (index < fullText.length) {
        setDisplayedText((prevText) => [...prevText, fullText[index]])
        index++
        typingTimeoutId = setTimeout(typeCharacter, typingSpeed) 
      } else {
        if (onComplete) onComplete()
      }
    }

    const startTypingWithDelay = setTimeout(() => {
      typeCharacter()
    }, delay)

    return () => {
      clearTimeout(startTypingWithDelay)
      clearTimeout(typingTimeoutId) 
    }
  }, [fullText, delay, typingSpeed, onComplete])

  return (
    <span>
      {displayedText.map((char, idx) => (
        <span
          key={idx}
          style={{
            fontWeight: idx >= boldStartIndex ? 'bold' : 'normal',
          }}
        >
          {char}
        </span>
      ))}
    </span>
  )
}
