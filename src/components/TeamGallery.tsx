'use client'

import { LayoutGrid } from './ui/layout-grid'

export function TeamGallery() {
  return (
    <div>
      <LayoutGrid cards={cards} />
    </div>
  )
}

const SkeletonOne = () => {
  return (
    <div>
      <h3 className='font-bold text-4xl text-white'>John Wiesly</h3>
      <p className='font-normal text-base text-white'></p>
      <p className='font-normal text-base my-4 max-w-lg text-neutral-200'>
        A serene and tranquil retreat, this house in the woods offers a peaceful escape from the
        hustle and bustle of city life.
      </p>
    </div>
  )
}

const SkeletonTwo = () => {
  return (
    <div>
      <h3 className='font-bold text-4xl text-white'>John Herold</h3>
      <p className='font-normal text-base text-white'></p>
      <p className='font-normal text-base my-4 max-w-lg text-neutral-200'>
        Perched high above the world, this house offers breathtaking views and a unique living
        experience. It&apos;s a place where the sky meets home, and tranquility is a way of life.
      </p>
    </div>
  )
}
const SkeletonThree = () => {
  return (
    <div>
      <h3 className='font-bold text-4xl text-white'>Jacob Williams</h3>
      <p className='font-normal text-base text-white'></p>
      <p className='font-normal text-base my-4 max-w-lg text-neutral-200'>
        A house surrounded by greenery and nature&apos;s beauty. It&apos;s the perfect place to
        relax, unwind, and enjoy life.
      </p>
    </div>
  )
}
const SkeletonFour = () => {
  return (
    <div>
      <h3 className='font-bold text-4xl text-white'>John Carter</h3>
      <p className='font-normal text-base text-white'></p>
      <p className='font-normal text-base my-4 max-w-lg text-neutral-200'>
        A house by the river is a place of peace and tranquility. It&apos;s the perfect place to
        relax, unwind, and enjoy life.
      </p>
    </div>
  )
}

const cards = [
  {
    id: 1,
    content: <SkeletonOne />,
    className: 'col-span-1',
    thumbnail: '/assets/coaches/img-1.jpg',
  },
  {
    id: 2,
    content: <SkeletonTwo />,
    className: 'col-span-1',
    thumbnail: '/assets/coaches/img-2.jpg',
  },
  {
    id: 3,
    content: <SkeletonThree />,
    className: 'col-span-1',
    thumbnail: '/assets/coaches/img-3.jpg',
  },
  {
    id: 4,
    content: <SkeletonFour />,
    className: 'col-span-1',
    thumbnail: '/assets/coaches/img-4.jpg',
  },
  {
    id: 5,
    content: <SkeletonFour />,
    className: 'col-span-1',
    thumbnail: '/assets/coaches/img-5.jpg',
  },
  {
    id: 6,
    content: <SkeletonFour />,
    className: 'col-span-1',
    thumbnail: '/assets/coaches/img-7.jpg',
  },
]
