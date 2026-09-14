import { motion } from 'framer-motion'

const fadeInUp = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease: [0.25, 0.1, 0.25, 1] }
  }
}

const fadeIn = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { duration: 0.6, ease: 'easeOut' }
  }
}

const staggerContainer = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.1
    }
  }
}

export function FadeIn({ children, delay = 0, className = '', ...props }) {
  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: '-60px' }}
      variants={{
        hidden: { opacity: 0, y: 30 },
        visible: {
          opacity: 1,
          y: 0,
          transition: { duration: 0.7, delay, ease: [0.25, 0.1, 0.25, 1] }
        }
      }}
      className={className}
      {...props}
    >
      {children}
    </motion.div>
  )
}

export function FadeInLeft({ children, delay = 0, className = '', ...props }) {
  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: '-60px' }}
      variants={{
        hidden: { opacity: 0, x: -40 },
        visible: {
          opacity: 1,
          x: 0,
          transition: { duration: 0.7, delay, ease: [0.25, 0.1, 0.25, 1] }
        }
      }}
      className={className}
      {...props}
    >
      {children}
    </motion.div>
  )
}

export function FadeInRight({ children, delay = 0, className = '', ...props }) {
  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: '-60px' }}
      variants={{
        hidden: { opacity: 0, x: 40 },
        visible: {
          opacity: 1,
          x: 0,
          transition: { duration: 0.7, delay, ease: [0.25, 0.1, 0.25, 1] }
        }
      }}
      className={className}
      {...props}
    >
      {children}
    </motion.div>
  )
}

export function StaggerContainer({ children, className = '', ...props }) {
  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: '-60px' }}
      variants={staggerContainer}
      className={className}
      {...props}
    >
      {children}
    </motion.div>
  )
}

export function StaggerItem({ children, className = '', ...props }) {
  return (
    <motion.div
      variants={fadeInUp}
      className={className}
      {...props}
    >
      {children}
    </motion.div>
  )
}

export function PageTransition({ children }) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.3, ease: 'easeInOut' }}
    >
      {children}
    </motion.div>
  )
}