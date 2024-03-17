import Image from 'next/image'
import Link from 'next/link'
import { motion, useScroll, useMotionValueEvent } from 'framer-motion'
import { useState } from 'react'
import useMenuAnimation from './animations/useMenuAnimation'
import { MenuToggle } from './MenuToggle'

export const Navbar = () => {
  return (
    <nav
      className={
        'absolute top-0 left-[50%] translate-x-[-50%] flex items-center justify-center gap-12 text-white z-[12] mb-12 hideOnMobile'
      }
    >
      <div className='nav-links'>
        <Link href='#'>Home</Link>
        <Link href='#'>About</Link>
        <Link href='#'>Members</Link>
      </div>
      <div className='w-[110px] h-[110px] flex items-center justify-center'>
        <Link href='/'>
          <Image src='/assets/logos/navbar-logo.png' alt='logo' width={110} height={110} priority />
        </Link>
      </div>
      <div className='nav-links'>
        <Link href='#'>Events</Link>
        <Link href='#'>Gallery</Link>
        <Link href='#'>Contact</Link>
      </div>
    </nav>
  )
}

export const FloatNavbar = () => {
  const [isHidden, setIsHidden] = useState(false)
  const { scrollY } = useScroll()

  useMotionValueEvent(scrollY, 'change', (latestValue: number) => {
    const previousValue = scrollY.getPrevious()
    if (previousValue && latestValue > previousValue) {
      setIsHidden(true)
    } else {
      setIsHidden(false)
    }
  })

  return (
    <motion.nav
      className={
        'sticky top-0 left-0 mx-auto flex items-center justify-center gap-12 bg-[#000] text-white z-[12] mb-12 shadow-2xl hideOnMobile'
      }
      variants={{
        visible: { y: 0, opacity: 1 },
        hidden: { y: ' -100%', opacity: 0 },
      }}
      animate={isHidden ? 'hidden' : 'visible'}
      transition={{ duration: 0.5, type: 'spring' }}
    >
      <div className='nav-links'>
        <Link href='#'>Home</Link>
        <Link href='#'>About</Link>
        <Link href='#'>Members</Link>
      </div>
      <div className='w-[100px] h-[83px] flex items-center justify-center p-2 bg-white'>
        <Link href='/'>
          <Image src='/assets/logos/logo.png' alt='logo' width={100} height={83} priority />
        </Link>
      </div>
      <div className='nav-links'>
        <Link href='#'>Events</Link>
        <Link href='#'>Gallery</Link>
        <Link href='#'>Contact</Link>
      </div>
    </motion.nav>
  )
}

export const MobileFloatNavbar = () => {
  const [isHidden, setIsHidden] = useState(false)
  const [isOpen, setIsOpen] = useState(false)

  const { scrollY } = useScroll()
  const scope = useMenuAnimation(isOpen)

  useMotionValueEvent(scrollY, 'change', (latestValue: number) => {
    const previousValue = scrollY.getPrevious()
    if (previousValue && latestValue > previousValue) {
      setIsHidden(true)
    } else {
      setIsHidden(false)
    }
  })

  return (
    <motion.nav
      className={
        'sticky top-0 left-0 mx-auto flex items-center justify-between gap-12 bg-[#fff] text-white z-[12] shadow-2xl mobileNav p-4'
      }
      variants={{
        visible: { y: 0, opacity: 1 },
        hidden: { y: ' -100%', opacity: 0 },
      }}
      animate={isHidden ? 'hidden' : 'visible'}
      transition={{ duration: 0.5, type: 'spring' }}
    >
      <div ref={scope}>
        <nav className='menu'>
          <ul>
            <li>Home</li>
            <li>About</li>
            <li>Members</li>
            <li>Events</li>
            <li>Gallery</li>
            <li>Contact</li>
          </ul>
        </nav>
        <div style={{marginTop: '-10px'}}>
          <MenuToggle toggle={() => setIsOpen(!isOpen)} />
        </div>
      </div>

      <div className='w-[75px] h-[42px] flex items-center justify-center bg-white'>
        <Link href='/'>
          <Image src='/assets/logos/logo.png' alt='logo' width={75} height={61} priority />
        </Link>
      </div>
    </motion.nav>
  )
}
