import { FC } from 'react'

interface HeadingProps {
  title: string
}

const Heading: FC<HeadingProps> = ({ title }) => {
  return (
    <h2 className='uppercase text-3xl lg:text-4xl text-[#1d013b] leading-normal md:leading-normal lg:leading-normal'>
      {title}
    </h2>
  )
}

export default Heading
