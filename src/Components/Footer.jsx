import React from 'react'

export default function Footer() {
  return (
     <footer>
        <div className='w-[100%] h-[450px] lg:h-[300px] lg:flex lg:justify-center lg:items-end flex justify-center items-end'>
            <div className='bg-[#151515] h-[330px] w-[100%] lg:h-[190px] lg:flex lg:justify-evenly lg:items-center '>
                <div className='flex px-[40px] justify-evenly h-[330px] lg:h-0 lg:justify-evenly lg:items-center items-start lg:flex-row flex-col lg:w-[100%]'>
                    <div className='lg:w-[150px] lg:h-[100px]'>
                        <h1 className='font-big text-4xl font-bold text-white'>MODERN <br /> ART GALLERY</h1>
                    </div>
                    <div className='lg:w-[390px] lg:h-[100px]'>
                        <p className='text-white '>The Modern Art Gallery is free to all visitors and open seven days a week from 8am to 9pm. Find us at 99 King Street, Newport, USA.</p>
                    </div>
                    <div className='lg:w-[100px] lg:h-[100px] flex justify-center items-center'>
                        <img src='/Group9.svg' alt='wait'/>
                    </div>
                </div>
            </div>
        </div>
     </footer>
  )
}
