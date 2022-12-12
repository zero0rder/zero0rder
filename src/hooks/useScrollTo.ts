import { useLayoutEffect } from 'react'
import { useSpring } from 'framer-motion'

export function useScrollTo(){
  const spring = useSpring(0, { damping: 300, stiffness: 200 })

  useLayoutEffect(() => {
    spring.onChange(latest => {
      window.scrollTo(0, latest)
    })
    return () => spring.clearListeners()
  }, [spring])
  
  const moveTo = (to: number) => {
    spring.set(window.pageYOffset, false)
    setTimeout(() => {
      spring.set(to)
    }, 50)
  }

  return { moveTo }

}