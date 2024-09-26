import React from 'react'

export default function Content() {
  return (
    <main>
        <div className='w-[100%] lg:h-[1210px] lg:px-[150px] lg:py-[30px] pt-[35px] px-[10px]'>
            <div className='w-[100%] lg:h-[450px] lg:flex lg:justify-evenly lg:items-center lg:flex-row flex justify-evenly items-center flex-col-reverse'>
                <div className='w-[100%] h-[300px] lg:w-[43%] lg:h-[410px] lg:pr-[130px] flex justify-evenly flex-col items-start lg:flex lg:justify-evenly lg:items-start lg:flex-col '>
                    <h1 className='font-big lg:text-7xl font-bold text-6xl '>YOUR DAY AT THE GALLERY</h1>
                    <p className='lg:text-2xl text-[21px] '>Wander through our distinct collections and find new insights about our artists. Dive into the details of their creative process.</p>
                </div>
                <div className=' lg:w-[57%] lg:h-[410px] '>
                    <img src="/Mainrect.svg" alt="wait" />
                </div>
            </div>
            <div className=' w-[100%] lg:h-[726px] lg:flex lg:justify-between '>
                <div className=' lg:w-[54%] lg:h-[725px] '>
                    <img src="/RectangleCopy.svg" alt="wait"/>
                </div>
                <div className=' lg:w-[44%] lg:h-[725px] lg:flex lg:justify-between lg:items-start lg:flex-col'>
                    <div className='lg:w-[90%] lg:h-[300px] mt-[10px] mb-[10px] '>
                        <img src="/RectangleCopy1.svg" alt="wait" className='lg:w-[100%] lg:h-[290px] lg:object-cover'/>
                    </div>
                    <div className='lg:w-[90%] lg:h-[400px] '>
                        <img src="/Group.svg" alt="wait"className='lg:w-[100%] lg:h-[395px] lg:object-cover'/>
                    </div>
                </div>
            </div>
        </div>
    </main>
  )
}
