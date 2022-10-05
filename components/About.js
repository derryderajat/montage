import React from 'react';
import { motion } from 'framer-motion';
// https://res.cloudinary.com/dwlyoi4wy/image/upload/v1664624382/private/IMG_20221001_183854_etzd5n.jpg
function About() {
  return (
    <div
      style={{
        backgroundImage:
          "url('https://www.toweroffantasy-global.com/images/p3-bg-r.png')",
      }}
      className=' flex flex-col text-center md:text-left md:flex-row  px-10 justify-evenly mx-auto items-center relative h-screen bg-no-repeat bg-cover  w-full'
    >
      <h3 className='absolute  top-24 uppercase tracking-[20px= text-[#444444] text-2xl'>
        About
      </h3>
    </div>
  );
}

export default About;
// initial={{ opacity: 0 }}
// whileInView={{ opacity: 1 }}
// transition={{ duration: 1.5 }}
// <div className='space-y-10 px-10 md:px-10'>
//   <h4 className='text-3xl font-semibold'>
//     Here is a
//     <span className='underline decoration-[#F7Ab0a]/50'> little </span>
//     background
//   </h4>
//   <p className='text-base'>
//     Hello... How&#39;s it going. My name Derry.I am studying at Serang
//     Raya University (unsera) and this is my last year(2023) being in here
//     with IT subject. I&#39;ve been coding for 3 years now. As a Full Stack
//     developer I&#39;ve some projects that I&#39;ve done. And I&#39;ve
//     experiences in intership at several state-owned enterprise (BUMN) like
//     PT. PLN UPT Cilegon and Power Plant Suralaya. I really love how to
//     solve challenge. And I&#39;ve some Data experience such as cleansing,
//     visualization and build a model ML
//   </p>
// </div>
