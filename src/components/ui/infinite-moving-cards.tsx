'use client'

import { cn } from '@/lib/utils'
import Image from 'next/image'
import React, { useEffect, useState } from 'react'

export const InfiniteMovingCards = ({
  items,
  direction,
  speed,
  pauseOnHover = true,
  className,
}: {
  items: {
    image: string
    name: string
    position: string
    review: string
  }[]
  direction?: 'left' | 'right'
  speed?: 'fast' | 'normal' | 'slow'
  pauseOnHover?: boolean
  className?: string
}) => {
  const containerRef = React.useRef<HTMLDivElement>(null)
  const scrollerRef = React.useRef<HTMLUListElement>(null)

  useEffect(() => {
    addAnimation()
  }, [])
  const [start, setStart] = useState(false)
  function addAnimation() {
    if (containerRef.current && scrollerRef.current) {
      const scrollerContent = Array.from(scrollerRef.current.children)

      scrollerContent.forEach((item) => {
        const duplicatedItem = item.cloneNode(true)
        if (scrollerRef.current) {
          scrollerRef.current.appendChild(duplicatedItem)
        }
      })

      getDirection()
      getSpeed()
      setStart(true)
    }
  }
  const getDirection = () => {
    if (containerRef.current) {
      if (direction === 'left') {
        containerRef.current.style.setProperty('--animation-direction', 'forwards')
      } else {
        containerRef.current.style.setProperty('--animation-direction', 'reverse')
      }
    }
  }
  const getSpeed = () => {
    if (containerRef.current) {
      if (speed === 'fast') {
        containerRef.current.style.setProperty('--animation-duration', '20s')
      } else if (speed === 'normal') {
        containerRef.current.style.setProperty('--animation-duration', '40s')
      } else {
        containerRef.current.style.setProperty('--animation-duration', '80s')
      }
    }
  }
  return (
    <div
      ref={containerRef}
      className={cn('scroller relative z-8  max-w-7xl overflow-hidden', className)}
    >
      <ul
        ref={scrollerRef}
        className={cn(
          'flex min-w-[500px] shrink-0 gap-4 py-4 w-max flex-nowrap',
          start && 'animate-scroll ',
          pauseOnHover && 'hover:[animation-play-state:paused]'
        )}
      >
        {items.map((item, idx) => (
          <li
            className='w-[500px] min-w-[500px] relative rounded-[8px] border border-b-0 flex-shrink-0 border-slate-700 px-0 py-0 md:w-[450px] overflow-hidden'
            style={{
              background: '#0F172A',
            }}
            key={item.name}
          >
            <blockquote className='flex items-start justify-start gap-2'>
              <div className='testimonial'>
                <img src={item.image} alt={item.name} />
              </div>

              <div className='p-4'>
                <div
                  aria-hidden='true'
                  className='user-select-none -z-1 pointer-events-none absolute -left-0.5 -top-0.5 h-[calc(100%_+_4px)] w-[calc(100%_+_4px)]'
                ></div>
                <div className='relative z-8 flex flex-row items-center'>
                  <span className='flex flex-col gap-0.5'>
                    <span className=' text-lg leading-[1.6] text-[#fff] font-semibold'>
                      {item.name}
                    </span>
                    <span className='text-base leading-[1.6] text-[#fff] font-medium mb-4'>
                      {item.position}
                    </span>
                  </span>
                </div>

                <span className='absolute top-2 right-2 text-7xl text-slate-700'>"</span>
                <span className=' relative z-8 text-base text-slate-300 font-normal'>
                  {item.review}
                </span>
              </div>
            </blockquote>
          </li>
        ))}
      </ul>
    </div>
  )
}
