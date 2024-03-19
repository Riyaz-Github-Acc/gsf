'use client'

import Image from 'next/image'
import { motion } from 'framer-motion'
import { useEffect, useState } from 'react'

import { ImagesSlider } from '../components/ui/images-slider'
import { GhostBtn, PrimaryBtn } from '@/components/Button'
import { FloatNavbar, MobileFloatNavbar, Navbar } from '@/components/Navbar'
import Benefits from '@/components/Benefits'
import Heading from '@/components/Heading'
import WhyUs from '@/components/WhyUs'
import { Testimonials } from '@/components/Testimonials'
import BlogCard from '@/components/BlogCard'
import Experience from '@/components/Experience'

const Home = () => {
  const images = [
    '/assets/slider-images/img-1.jpg',
    '/assets/slider-images/img-2.jpg',
    '/assets/slider-images/img-3.jpg',
    '/assets/slider-images/img-4.jpg',
  ]

  const [isScrolling, setIsScrolling] = useState(false)

  const handleScroll = () => {
    if (window.scrollY > window.innerHeight) {
      setIsScrolling(true)
    } else {
      setIsScrolling(false)
    }
  }

  useEffect(() => {
    window.addEventListener('scroll', handleScroll)
    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [])

  return (
    <main>
      {/* Navbar */}
      {isScrolling ? <FloatNavbar /> : <Navbar />}
      <MobileFloatNavbar />

      {/* Hero Section */}
      <section>
        <ImagesSlider className='h-[40rem]' images={images}>
          <motion.div
            initial={{
              opacity: 0,
              y: -80,
            }}
            animate={{
              opacity: 1,
              y: 0,
            }}
            transition={{
              duration: 0.6,
            }}
            className='z-50 flex flex-col'
          >
            <motion.p className='text-lg sm:xl md:text-2xl text-center text-white py-1 md:mt-10'>
              The Beginning of Sports
            </motion.p>
            <motion.h2 className='font-[display] font-bold text-3xl sm:text-4xl md:text-6xl text-center text-white tracking-wider py-2 md:py-4'>
              GENESIS SPORTS <br /> <div className='mt-1 md:mt-4'>FOUNDATION</div>
            </motion.h2>

            <motion.div className='flex items-center justify-center gap-5 md:gap-10 mt-8'>
              <PrimaryBtn label='READ MORE' />
              <GhostBtn label='CONTACT US' />
            </motion.div>
          </motion.div>
          {/* <Pattern /> */}
        </ImagesSlider>
      </section>

      {/* Benefits Section */}
      <section className='container my-14'>
        <Benefits />
      </section>

      {/* Why Us Section */}
      <section className='container md:flex md:flex-row flex flex-col items-center gap-12 my-14 '>
        <div
          className='flex-1 flex items-center justify-center'
          style={{
            backgroundImage: 'url(/assets/patterns/pattern-1.png)',
            backgroundRepeat: 'no-repeat',
            backgroundPosition: 'right -10px top -80px',
            backgroundSize: '300px 300px',
          }}
        >
          <Image src='/assets/about/about-1.png' alt='about-img' height={450} width={405} />
        </div>

        <div className='flex-1'>
          <Heading title='Why Choose Us' />
          <p className='text-justify text-slate-500'>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nostrum recusandae voluptates
            molestias exercitationem ratione, nobis dolore, beatae corporis sapiente
            autem? Iste, maxime sapiente at nostrum ipsa commodi dolor praesentium.
          </p>

          <WhyUs />
        </div>
      </section>

      {/* Experience */}
      <section className='container my-14'>
        <Experience />
      </section>

      {/* Team */}
      <section className='container my-14'>
        <Heading title='Our Team' />
         <p className='text-slate-500 pr-0 md:pr-60 lg:pr-96 mt-2 mb-10'>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nostrum recusandae voluptates
          molestias exercitationem ratione, nobis dolore.
        </p>
      </section>

      {/* Gallery */}
      <section className='container my-14'>
        <Heading title='Gallery' />
         <p className='text-slate-500 pr-0 md:pr-60 lg:pr-96 mt-2 mb-10'>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nostrum recusandae voluptates
          molestias exercitationem ratione, nobis dolore.
        </p>
      </section>

      {/* Athletes */}
      <section className='container my-14'>
        <Heading title='Our Athletes' />
         <p className='text-slate-500 pr-0 md:pr-60 lg:pr-96 mt-2 mb-10'>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nostrum recusandae voluptates
          molestias exercitationem ratione, nobis dolore.
        </p>
      </section>

      {/* Instgram */}
      <section className='container my-14'>
        <Heading title='Instgram' />
         <p className='text-slate-500 pr-0 md:pr-60 lg:pr-96 mt-2 mb-10'>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nostrum recusandae voluptates
          molestias exercitationem ratione, nobis dolore.
        </p>
      </section>

      {/* Testimonials */}
      <section className='container my-14'>
        <Heading title='Testimonials' />
        <p className='text-slate-500 pr-0 md:pr-60 lg:pr-96 mt-2 mb-10'>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nostrum recusandae voluptates
          molestias exercitationem ratione, nobis dolore.
        </p>
        <Testimonials />
      </section>

      {/* Blog */}
      <section className='container my-14'>
        <Heading title='Blog Posts' />
        <p className='text-slate-500 pr-0 md:pr-60 lg:pr-96 mt-2 mb-10'>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nostrum recusandae voluptates
          molestias exercitationem ratione, nobis dolore.
        </p>
        <BlogCard />
        <div className='flex items-center justify-center mt-7'>
          <PrimaryBtn label='View More'/>
        </div>
      </section>

      {/* Footer */}
      <footer className='container my-14'>
        <Heading title='Footer' />
      </footer>
    </main>
  )
}

export default Home
