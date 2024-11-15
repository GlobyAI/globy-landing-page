import React from 'react'
import { motion } from 'framer-motion'

interface AnimatedIconProps {
  Icon: React.FC<React.SVGProps<SVGSVGElement>>
  isVisible: boolean
}

const AnimatedIcon: React.FC<AnimatedIconProps> = ({ Icon, isVisible }) => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: isVisible ? 1 : 0 }}
      transition={{ duration: 2 }}
    >
      <Icon />
    </motion.div>
  )
}

export default AnimatedIcon
