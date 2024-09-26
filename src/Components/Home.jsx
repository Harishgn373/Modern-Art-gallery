import React from 'react';
import 'D:\\figma_p2\\figma_clone2\\src\\index.css';
import {Link} from 'react-router-dom';

export default function Home() {
  return (
    <>
       <header>
          <div>
            <div className="lg:py-[60px] lg:px-[110px] lg:h-[130vh] lg:w-[100%] lg:flex lg:justify-start lg:items-start">
                <div className=' lg:w-[40%] lg:h-[100%] hidden bg-[#151515] lg:block'></div>
                <div className='w-[100%] h-[335px] lg:w-[43%] lg:h-[100%]'>
                    <img className='lg:h-full h-[330px] w-[100%] object-cover' src="/Rectangle.svg" alt="man_img" />
                </div>
            </div>
            <div className='lg:p-[0px] pl-[15px] flex flex-col w-[100%] h-[494px] lg:flex lg:flex-row lg:justify-around lg:items-center lg:absolute lg:top-[255px] lg:w-[100%] lg:h-[270px]'>
              <div className='h-[155px] lg:w-[400px] lg:h-[270px] lg:ml-[285px] flex justify-start items-center'>
                <h1 className='lg:text-8xl text-6xl font-big mix-blend-difference lg:text-white font-bold'>MODERN <br />ART GALLERY</h1>
              </div>
              <div className='h-[330px] lg:w-[320px] lg:h-[270px] flex flex-col justify-evenly lg:justify-between lg:items-start lg:flex-col lg:ml-[132px] '>
                <p className='lg:text-xl text-[25px]'>The arts in the collection of the Modern Art Gallery all started from a spark of inspiration. Will these pieces inspire you? Visit us and find out.</p>
                 <div className='lg:flex flex lg:justify-center lg:items-center'>
                  <div className='w-[220px] h-[70px] flex justify-center items-center text-4xl lg:w-[200px] lg:h-[60px] bg-[#151515] text-white lg:flex lg:justify-center lg:items-center font-big lg:text-3xl'>OUR LOCATION</div>
                  <Link to='/Location'>
                   <button type='submit' className='w-[60px] h-[70px] flex justify-center items-center  bg-[#D5966c] lg:w-[45px] lg:h-[60px] lg:flex lg:justify-center lg:items-center' ><img className='w-[15px]' src="/grater.svg" alt="click" /></button>
                   </Link>
                 </div>
              </div>
            </div>
          </div>
       </header> 
    </>
  )
}
