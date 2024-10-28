'use client'
import React, { useState, useEffect } from 'react'

type TypingAnimationProps = {
  message: string
  delay?: number
  onComplete?: () => void
}

export default function TypingAnimation({
  message,
  delay = 0,
  onComplete,
}: TypingAnimationProps) {
  const [displayedText, setDisplayedText] = useState('')

  useEffect(() => {
    let index = 0
    let intervalId: NodeJS.Timeout

    const startTyping = () => {
      setDisplayedText('')

      intervalId = setInterval(() => {
        if (index < message.length) {
          setDisplayedText((prevText) => prevText + message.charAt(index))
          index++
        } else {
          clearInterval(intervalId)
          if (onComplete) onComplete()
        }
      }, 16)
    }
    const timerId = setTimeout(startTyping, delay)

    return () => {
      clearTimeout(timerId)
      clearInterval(intervalId)
    }
  }, [message, delay, onComplete])

  return <span>{displayedText}</span>
}
