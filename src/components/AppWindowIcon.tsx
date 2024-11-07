import React from 'react'
import { motion } from 'framer-motion'

const AppWindowIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
  <svg
    width="96"
    height="97"
    viewBox="0 0 96 97"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <motion.path
      d="M80 16.0259H16C11.5817 16.0259 8 19.6076 8 24.0259V72.0259C8 76.4442 11.5817 80.0259 16 80.0259H80C84.4183 80.0259 88 76.4442 88 72.0259V24.0259C88 19.6076 84.4183 16.0259 80 16.0259Z"
      stroke="#B239E8"
      strokeWidth="7.6"
      strokeLinecap="round"
      strokeLinejoin="round"
      initial={{ pathLength: 0 }}
      animate={{ pathLength: 1 }}
      transition={{ duration: 1, ease: 'easeInOut', delay: 0.2 }}
    />
    <motion.path
      d="M24 32.0259H24.04M40 32.0259H40.04M56 32.0259H56.04"
      stroke="white"
      strokeWidth="8"
      strokeLinecap="round"
      strokeLinejoin="round"
      initial={{ pathLength: 0 }}
      animate={{ pathLength: 1 }}
      transition={{ duration: 2, ease: 'easeInOut', delay: 0.3 }}
    />
  </svg>
)

export default AppWindowIcon
