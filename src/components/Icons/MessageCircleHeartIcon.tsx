import React from 'react'
import { motion } from 'framer-motion'

const MessageCircleHeartIcon: React.FC<React.SVGProps<SVGSVGElement>> = (
  props,
) => (
  <svg
    width="96"
    height="97"
    viewBox="0 0 96 97"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <motion.path
      d="M31.6 80.0261C39.2343 83.9423 48.0163 85.003 56.3635 83.0172C64.7108 81.0313 72.0742 76.1294 77.127 69.1948C82.1798 62.2602 84.5897 53.7489 83.9223 45.1947C83.255 36.6405 79.5543 28.6059 73.4872 22.5388C67.4201 16.4717 59.3855 12.7711 50.8314 12.1037C42.2772 11.4364 33.7659 13.8463 26.8313 18.8991C19.8967 23.9519 14.9948 31.3153 13.0089 39.6625C11.023 48.0097 12.0838 56.7918 16 64.4261L8 88.0261L31.6 80.0261Z"
      stroke="#B239E8"
      strokeWidth="7.6"
      strokeLinecap="round"
      strokeLinejoin="round"
      initial={{ pathLength: 0 }}
      animate={{ pathLength: 1 }}
      transition={{ duration: 1, ease: 'easeInOut', delay: 0.1 }}
    />
    <motion.path
      d="M63.2001 36.8259C61.3308 34.9936 58.8176 33.9673 56.2001 33.9673C53.5825 33.9673 51.0693 34.9936 49.2001 36.8259L48.0001 38.4259L46.6001 37.2259C45.6831 36.2333 44.5684 35.4438 43.3278 34.908C42.0873 34.3723 40.7483 34.1022 39.397 34.1152C38.0458 34.1282 36.7122 34.4239 35.4822 34.9834C34.2522 35.5429 33.1529 36.3537 32.2551 37.3637C31.3574 38.3737 30.681 39.5604 30.2696 40.8476C29.8582 42.1347 29.7208 43.4938 29.8664 44.8372C30.0119 46.1807 30.4371 47.4788 31.1146 48.648C31.7921 49.8172 32.7069 50.8315 33.8001 51.6259L48.2001 65.6259L62.6001 51.6259C67.4001 46.8259 67.0001 40.8259 63.4001 36.8259"
      stroke="white"
      strokeWidth="7.6"
      strokeLinecap="round"
      strokeLinejoin="round"
      initial={{ pathLength: 0 }}
      animate={{ pathLength: 1 }}
      transition={{ duration: 1, ease: 'easeInOut', delay: 0.2 }}
    />
  </svg>
)

export default MessageCircleHeartIcon