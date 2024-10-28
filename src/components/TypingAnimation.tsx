import React, { useState, useEffect } from 'react';

type TypingAnimationProps = {
  message: string; // Regular part of the message
  boldPart?: string; // Part of the message to type in bold
  delay?: number; // Optional delay before typing starts
  onComplete?: () => void; // Callback for when typing completes
};

export default function TypingAnimation({
  message,
  boldPart = '',
  delay = 0,
  onComplete,
}: TypingAnimationProps) {
  const [displayedText, setDisplayedText] = useState<string[]>([]);
  const fullText = message + boldPart; // Full message including bold part
  const boldStartIndex = message.length; // Start index for bold part

  useEffect(() => {
    let index = 0;
    let animationFrameId: number;

    // Function to add one character at a time to displayedText
    const typeCharacter = () => {
      if (index < fullText.length) {
        setDisplayedText((prevText) => [...prevText, fullText[index]]);
        index++;
        animationFrameId = requestAnimationFrame(typeCharacter);
      } else {
        cancelAnimationFrame(animationFrameId); // Clean up
        if (onComplete) onComplete();
      }
    };

    // Start typing after optional delay
    const startTypingWithDelay = setTimeout(() => {
      animationFrameId = requestAnimationFrame(typeCharacter);
    }, delay);

    return () => {
      clearTimeout(startTypingWithDelay);
      cancelAnimationFrame(animationFrameId); // Clean up on unmount
    };
  }, [fullText, delay, onComplete]);

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
  );
}
