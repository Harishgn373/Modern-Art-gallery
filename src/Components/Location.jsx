import React from 'react';
import { Link } from 'react-router-dom';

export default function Location() {
    return (
        <div className='w-[100%] lg:h-[173vh]'>
            <div className='w-[100%] lg:h-[600px] h-[700px]'>
                <div className='lg:flex flex lg:justify-center lg:items-center lg:absolute lg:top-0 lg:left-[320px] absolute t-0 left-0'>
                    <Link to='/'>
                        <button type='submit' className='w-[40px] h-[50px] flex justify-center items-center  bg-[#D5966c] lg:w-[45px] lg:h-[60px] lg:flex lg:justify-center lg:items-center rotate-180'><img className='w-[15px]' src="/grater.svg" alt="click" /></button>
                    </Link>
                    <div className='w-[220px] h-[50px] flex justify-center items-center text-4xl lg:w-[200px] lg:h-[60px] bg-[#151515] text-white lg:flex lg:justify-center lg:items-center font-big lg:text-3xl'>BACK TO HOME</div>
                </div>
                <iframe className='w-[100%] lg:h-[600px] h-[700px] border-0' src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3863.684851125065!2d75.90313817484166!3d14.445316880860135!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bba2564f8a0d437%3A0x8fc2c7cd8453a9a3!2sICCA%20(Interface%20College%20of%20Computer%20Applications)!5e0!3m2!1sen!2sin!4v1727284528980!5m2!1sen!2sin" title='loc' allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
            </div>
            <div className='pl-[10px] lg:pl-0 w-[100%] h-[425px] lg:h-[430px] lg:flex lg:justify-center lg:items-center bg-[#151515]'>
               <div className='w-[100%] h-[425px]  lg:h-[350px] lg:flex lg:justify-around lg:items-center lg:flex-row bg-[#151515] flex justify-evenly items-start flex-col'>
               <div className='lg:w-[200px] w-[100%]  lg:h-[250px] lg:ml-[60px] '>
                    <h1 className='font-big text-6xl font-bold text-white'>OUR LACATION</h1>
                </div>
                <div className='w-[100%] lg:w-[570px] h-[300px] lg:h-[300px]  flex justify-evenly items-start flex-col' >
                    <h1 className='text-[#D5966c] font-big font-bold text-3xl'>99 King Street</h1>
                    <p className='text-white '>Newport <br />RI 02840 <br />United States of America</p>
                    <p className='text-white'>Our newly opened gallery is located near the Edward King House on 99 King Street, the Modern Art Gallery is free to all visitors and open seven days a week from 8am to 9pm.</p>
                </div>
               </div>
            </div>
            <div className='bg-[#D5966c] h-[330px] w-[100%] lg:h-[190px] lg:flex lg:justify-evenly lg:items-center '>
                <div className='flex px-[40px] justify-evenly h-[330px] lg:h-0 lg:justify-evenly lg:items-center items-start lg:flex-row flex-col lg:w-[100%]'>
                    <div className='lg:w-[150px] lg:h-[100px]'>
                        <h1 className='font-big text-4xl font-bold'>MODERN <br /> ART GALLERY</h1>
                    </div>
                    <div className='lg:w-[390px] lg:h-[100px]'>
                        <p >The Modern Art Gallery is free to all visitors and open seven days a week from 8am to 9pm. Find us at 99 King Street, Newport, USA.</p>
                    </div>
                    <div className='lg:w-[100px] lg:h-[100px] '>
                        <img src='/icon.png' alt='wait'/>
                    </div>
                </div>
            </div>
        </div>
    )
}
