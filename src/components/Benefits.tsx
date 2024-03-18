import Image from 'next/image'

const Benefits = () => {
  return (
    <div
      className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 items-center justify-between flex-wrap gap-10 bg-gradient-to-t from-[#fcc175] to-[#f8821e] md:bg-gradient-to-r md:from-[#f8821e] md:to-[#fcc175] text-white py-6 px-6 md:py-6 md:px-12 lg:py-10 lg:px-20'
      style={{ borderRadius: '10px' }}
    >
      <div className='flex items-center justify-center gap-6'>
        <div className='bg-white p-3' style={{ borderRadius: '10px' }}>
          <Image src='/assets/benefits/yoga.png' alt='benefits' height={60} width={60} />
        </div>
        <div className='flex flex-col gap-1'>
          <h4 className='text-lg font-medium'>Happy Life</h4>
          <p className='text-sm leading-5'>
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
          </p>
        </div>
      </div>

      <div className='flex items-center justify-center gap-6'>
        <div className='bg-white p-3' style={{ borderRadius: '10px' }}>
          <Image src='/assets/benefits/running.png' alt='benefits' height={60} width={60} />
        </div>
        <div className='flex flex-col gap-1'>
          <h4 className='text-lg font-medium'>Increased Flexibility</h4>
          <p className='text-sm leading-5'>
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
          </p>
        </div>
      </div>

      <div className='flex items-center justify-center gap-6'>
        <div className='bg-white p-3' style={{ borderRadius: '10px' }}>
          <Image src='/assets/benefits/extended.png' alt='benefits' height={60} width={60} />
        </div>
        <div className='flex flex-col gap-1'>
          <h4 className='text-lg font-medium'>Reducing Blood Pressure</h4>
          <p className='text-sm leading-5'>
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
          </p>
        </div>
      </div>
    </div>
  )
}

export default Benefits
