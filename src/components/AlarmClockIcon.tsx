import React from 'react'
import { motion } from 'framer-motion'

const AlarmIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
  <svg
    width="96"
    height="97"
    viewBox="0 0 96 97"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <motion.path
      d="M20 12.0259L8 24.0259M88 24.0259L76 12.0259M25.52 74.8259L16 84.0259M70.56 74.7059L80 84.0259M80 52.0259C80 69.699 65.6731 84.0259 48 84.0259C30.3269 84.0259 16 69.699 16 52.0259C16 34.3528 30.3269 20.0259 48 20.0259C65.6731 20.0259 80 34.3528 80 52.0259Z"
      stroke="#B239E8"
      strokeWidth="7.6"
      strokeLinecap="round"
      strokeLinejoin="round"
      initial={{ pathLength: 0 }}
      animate={{ pathLength: 1 }}
      transition={{ duration: 1, ease: 'easeInOut' }}
    />
    <motion.path
      d="M48 36.0259V52.0259L56 60.0259"
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

export default AlarmIcon