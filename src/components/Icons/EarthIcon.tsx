import React from 'react'
import { motion } from 'framer-motion'

const EarthIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
  <svg
    width="96"
    height="97"
    viewBox="0 0 96 97"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <motion.path
      d="M29 17.1167V23.4247C29 26.4482 30.2011 29.3478 32.339 31.4857C34.4769 33.6236 37.3765 34.8247 40.4 34.8247C42.4156 34.8247 44.3487 35.6254 45.774 37.0507C47.1993 38.4759 48 40.409 48 42.4247C48 46.6047 51.42 50.0247 55.6 50.0247C57.6156 50.0247 59.5487 49.2239 60.974 47.7987C62.3992 46.3734 63.2 44.4403 63.2 42.4247C63.2 38.2447 66.6199 34.8247 70.7999 34.8247H82.8459"
      stroke="#B239E8"
      strokeWidth="7.6"
      strokeLinecap="round"
      strokeLinejoin="round"
      initial={{ pathLength: 0 }}
      animate={{ pathLength: 1 }}
      transition={{ duration: 1, ease: 'easeInOut' }}
    />
    <motion.path
      d="M44.1989 87.8355V72.8256C44.1989 70.8099 43.3982 68.8768 41.9729 67.4515C40.5477 66.0263 38.6146 65.2256 36.5989 65.2256C34.5833 65.2256 32.6502 64.4248 31.2249 62.9996C29.7997 61.5743 28.9989 59.6412 28.9989 57.6256V53.8256C28.9989 51.8099 28.1982 49.8768 26.773 48.4516C25.3477 47.0263 23.4146 46.2256 21.399 46.2256H10.189"
      stroke="#B239E8"
      strokeWidth="7.6"
      strokeLinecap="round"
      strokeLinejoin="round"
      initial={{ pathLength: 0 }}
      animate={{ pathLength: 1 }}
      transition={{ duration: 1, ease: 'easeInOut', delay: 0.1 }}
    />
    <motion.path
      d="M85.7578 54.3385C85.9177 52.9229 85.9999 51.4837 85.9999 50.0253C85.9999 29.0385 68.9867 12.0254 47.9999 12.0254C27.0132 12.0254 10 29.0385 10 50.0253C10 71.0121 27.0132 88.0253 47.9999 88.0253C49.5338 88.0253 51.0464 87.9344 52.5326 87.7577"
      stroke="#B239E8"
      strokeWidth="7.6"
      strokeLinecap="round"
      strokeLinejoin="round"
      initial={{ pathLength: 0 }}
      animate={{ pathLength: 1 }}
      transition={{ duration: 1, ease: 'easeInOut', delay: 0.2 }}
    />
    <motion.path
      d="M70.7999 84.2253C77.0959 84.2253 82.1999 79.1213 82.1999 72.8253C82.1999 66.5292 77.0959 61.4253 70.7999 61.4253C64.5038 61.4253 59.3999 66.5292 59.3999 72.8253C59.3999 79.1213 64.5038 84.2253 70.7999 84.2253Z"
      stroke="white"
      strokeWidth="7.6"
      strokeLinecap="round"
      strokeLinejoin="round"
      initial={{ pathLength: 0 }}
      animate={{ pathLength: 1 }}
      transition={{ duration: 1, ease: 'easeInOut', delay: 0.3 }}
    />
    <motion.path
      d="M86.0003 88.0257L80.3003 82.3257"
      stroke="white"
      strokeWidth="7.6"
      strokeLinecap="round"
      strokeLinejoin="round"
      initial={{ pathLength: 0 }}
      animate={{ pathLength: 1 }}
      transition={{ duration: 1, ease: 'easeInOut', delay: 0.4 }}
    />
  </svg>
)

export default EarthIcon