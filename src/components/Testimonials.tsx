'use client'

import React, { useEffect, useState } from 'react'
import { InfiniteMovingCards } from '../components/ui/infinite-moving-cards'

export function Testimonials() {
  return (
    <div className='rounded-md flex flex-col antialiased bg-white dark:bg-black dark:bg-grid-white/[0.05] items-center justify-center relative overflow-hidden'>
      <InfiniteMovingCards items={testimonials} direction='right' speed='slow' />
      <InfiniteMovingCards items={testimonials} direction='left' speed='slow' />
    </div>
  )
}

const testimonials = [
  {
    review:
      'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ipsa nostrum labore dolor facilis, nesciunt facere!',
    name: 'Charles Dickens',
    position: 'National Gold Medalist',
    image: '/assets/profile/profile-1.jpg'
  },
  {
    review:
      'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ipsa nostrum labore dolor facilis, nesciunt facere!',
    name: 'William Shakespeare',
    position: 'State Level Player',
    image: '/assets/profile/profile-2.jpg'
  },
  {
    review:
      'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ipsa nostrum labore dolor facilis, nesciunt facere!',
    name: 'Edgar Allan Poe',
    position: 'District Jonal Champion',
    image: '/assets/profile/profile-3.jpg'
  },
  {
    review:
      'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ipsa nostrum labore dolor facilis, nesciunt facere!',
    name: 'Jane Austen',
    position: 'New Joinee',
    image: '/assets/profile/profile-4.jpg'
  },
  {
    review:
      'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ipsa nostrum labore dolor facilis, nesciunt facere!',
    name: 'Herman Melville',
    position: 'International Player',
    image: '/assets/profile/profile-5.jpg'
  },
]
