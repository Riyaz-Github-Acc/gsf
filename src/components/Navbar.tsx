import Image from 'next/image'
import Link from 'next/link'
import { motion, useScroll, useMotionValueEvent, AnimatePresence } from 'framer-motion'
import { useEffect, useState } from 'react'
import useMenuAnimation from './animations/useMenuAnimation'
import { MenuToggle } from './MenuToggle'
import useLockBodyScroll from '@/hooks/useLockBodyScroll'
import menu from '@/constants/menu'

export const Navbar = () => {
  return (
    <nav
      className={
        'container absolute top-0 left-[50%] translate-x-[-50%] w-full flex items-center justify-between gap-12 bg-[#ffffff12] text-white z-[12] px-10 py-3 shadow-xl hideOnMobile'
      }
    >
      <div className='w-[250px] h-[65px]'>
        <Link href='/'>
          <Image src='/assets/logos/logo.jpg' alt='logo' width={250} height={65} priority />
        </Link>
      </div>

      <div className='nav-links'>
        {menu.map((link) => (
          <Link href={link.href} key={link.name}>
            {link.name}
          </Link>
        ))}
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
        'sticky top-0 left-0 mx-auto flex items-center justify-between gap-12 bg-[#000] text-white z-[12] px-10 py-3 shadow-2xl hideOnMobile'
      }
      variants={{
        visible: { y: 0, opacity: 1 },
        hidden: { y: ' -100%', opacity: 0 },
      }}
      animate={isHidden ? 'hidden' : 'visible'}
      transition={{ duration: 0.75, ease: 'easeInOut' }}
    >
      <div className='w-[250px] h-[65px] flex items-center justify-center p-2 bg-white'>
        <Link href='/'>
          <Image src='/assets/logos/logo.png' alt='logo' width={250} height={65} priority />
        </Link>
      </div>

      <div className='nav-links'>
        <div className='nav-links'>
          {menu.map((link) => (
            <Link href={link.href} key={link.name}>
              {link.name}
            </Link>
          ))}
        </div>
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

  useLockBodyScroll(isOpen)

  return (
    <motion.nav
      className={
        'sticky top-0 right-0 mx-auto flex items-center justify-between gap-12 bg-[#ffffff] text-white z-[12] shadow-2xl p-4 mobileNav'
      }
      variants={{
        visible: { y: 0, opacity: 1 },
        hidden: { y: ' -100%', opacity: 0 },
      }}
      animate={isHidden ? 'hidden' : 'visible'}
      transition={{ duration: 0.75, ease: 'easeInOut' }}
    >
      <div className='w-[180px] h-[45px] flex items-center justify-center '>
        <Link href='/'>
          <Image src='/assets/logos/logo.png' alt='logo' width={180} height={45} priority />
        </Link>
      </div>

      <div ref={scope}>
        <nav className='menu'>
          <ul>
            {menu.map((link) => (
              <Link href={link.href} key={link.name}>
                <li>{link.name}</li>
              </Link>
            ))}
          </ul>
        </nav>
        <div style={{ marginTop: '-10px' }}>
          <MenuToggle toggle={() => setIsOpen(!isOpen)} />
        </div>
      </div>
    </motion.nav>
  )
}
