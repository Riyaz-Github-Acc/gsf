const WhyUs = () => {
  return (
    <div className='flex flex-col gap-8'>
      <div className='flex items-center gap-8 mt-3'>
        <div className='rounded-full border-2 border-[#f8821e] p-4'>
          <img src={'/assets/about/benefit.png'} alt='benefit' width={100} height={100}/>
        </div>
        <div className='flex flex-col gap-2'>
          <h4 className='text-xl font-medium text-[#1d013b]'>Open Door Policy</h4>
          <p className='text-slate-500'>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio, in nobis ratione quasi
            doloremque eveniet.
          </p>
        </div>
      </div>

      <div className='flex items-center gap-8'>
        <div className='rounded-full border-2 border-[#f8821e] p-4'>
          <img src={'/assets/about/insurance.png'} alt='insurance' width={100} height={100}/>
        </div>
        <div className='flex flex-col gap-2'>
          <h4 className='text-xl font-medium text-[#1d013b]'>Fully Insured</h4>
          <p className='text-slate-500'>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio, in nobis ratione quasi
            doloremque eveniet.
          </p>
        </div>
      </div>

      <div className='flex items-center gap-8'>
        <div className='rounded-full border-2 border-[#f8821e] p-4'>
          <img src={'/assets/about/coach.png'} alt='coach' width={100} height={100}/>
        </div>
        <div className='flex flex-col gap-2'>
          <h4 className='text-xl font-medium text-[#1d013b]'>Personal Trainer</h4>
          <p className='text-slate-500'>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio, in nobis ratione quasi
            doloremque eveniet.
          </p>
        </div>
      </div>
    </div>
  )
}

export default WhyUs