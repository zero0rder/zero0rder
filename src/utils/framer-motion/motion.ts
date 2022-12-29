import type {Variants} from 'framer-motion'

export const staggerContainer = (staggerChildren?: number, delayChildren?: number): Variants | undefined => ({
    hidden: {},
    show: {
      transition: {
        staggerChildren,
        delayChildren,
      },
    },
})

export const textVariant = (delay: number, y: number = 50) => ({
    hidden: {
      y: y,
      opacity: 0,
    },
    show: {
      y: 0,
      opacity: 1,
      transition: {
        type: 'spring',
        duration: 1.25,
        delay,
      },
    },
})

export const fadeIn = (direction: string, type: string, delay: number, duration: number) => ({
  hidden: {
    x: direction === 'left' ? 100 : direction === 'right' ? -100 : 0,
    y: direction === 'up' ? 100 : direction === 'down' ? -100 : 0,
    opacity: 0,
  },
  show: {
    x: 0,
    y: 0,
    opacity: 1,
    transition: {
      type,
      delay,
      duration,
      ease: 'easeOut',
    },
  },
})

export const textContainer = {
    hidden: {
      opacity: 0,
    },
    show: {
      opacity: 1,
      transition: { 
        staggerChildren: 0.1, 
        delayChildren: 0.1 
      },
  },
}

export const textVariant2 = {
    hidden: {
      opacity: 0,
      x: 20,
    },
    show: {
      opacity: 1,
      x: 0,
      transition: {
        type: 'tween',
        ease: 'easeIn',
      },
    },
}

export const sidebarVariant = {
  open: {
      x: 0,
      opacity: 1,
      transition: {
          type: "tween",
          stiffness: 20,
          when: 'beforeChildren',
      }
  },
  closed: {
      x: '-100%',
      zIndex: -1,
      opacity: 1,
      transition: {
          delay: 0.05,
          type: "tween",
          stiffness: 300,
          damping: 40,
          when: 'afterChildren',
          ease: 'easeOut'
      }
  }
}

export const navListVariant = {
  open: {
    transition: { 
      staggerChildren: 0.07, 
      delayChildren: 0.2
      }
  },
  closed: {
    transition: { 
      staggerChildren: 0.05, 
      staggerDirection: -1
    }
  }
}

export const navItemsVariant = {
  open: {
    y: 0,
    opacity: 1,
    transition: {
      y: { stiffness: 900, velocity: -100 }
    }
  },
  closed: {
    y: 50,
    opacity: 0,
    transition: {
      y: { stiffness: 900 }
    }
  }
}