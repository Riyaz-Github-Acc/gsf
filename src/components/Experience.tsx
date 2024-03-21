import experienceDetails from '@/constants/experience'
import { ExperienceProps } from '@/constants/types'
import { motion } from 'framer-motion'
import { useEffect, useState, useRef, MutableRefObject, RefObject } from 'react'

const Counter = ({ value, field }: ExperienceProps) => {
  const [count, setCount] = useState(0)
  const duration = 500 // Total duration in milliseconds
  const inViewRef: RefObject<HTMLDivElement> = useRef(null)

  const startCountAnimation = () => {
    const startTime = Date.now()
    const endTime = startTime + duration
    let animationFrameId: any

    const animate = () => {
      const now = Date.now()
      const progress = Math.min(1, (now - startTime) / duration)

      setCount(Math.floor(progress * value))

      if (now < endTime) {
        animationFrameId = requestAnimationFrame(animate)
      }
    }

    animationFrameId = requestAnimationFrame(animate)

    return () => cancelAnimationFrame(animationFrameId)
  }

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          startCountAnimation()
        }
      },
      { rootMargin: '0px 0px -100px 0px' } // Adjust this margin as needed to trigger the animation
    )

    if (inViewRef.current) {
      observer.observe(inViewRef.current)
    }

    return () => observer.disconnect()
  }, [inViewRef])

  return (
    <div ref={inViewRef} className='space-y-2 sm:space-y-3 md:space-y-4 lg:space-y-5'>
      <motion.div>
        {count} +
      </motion.div>
      <div>{field}</div>
    </div>
  )
}

const Experience = () => {
  return (
    <h3 className={`experience grid grid-cols-2 md:grid-cols-4 gap-10 items-center text-2xl sm:text-3xl md:text-4xl lg:text-5xl text-white text-center`}>
    {experienceDetails.map((details) => (
      <Counter key={details.field} value={details.value} field={details.field} />
    ))}
  </h3>
  )
}

export default Experience
