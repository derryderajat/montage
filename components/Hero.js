import Link from 'next/link';
import React from 'react';
import { Cursor, useTypewriter } from 'react-simple-typewriter';
import BackgroundCircle from './BackgroundCircle';
import Image from 'next/image';
function Hero() {
  const [text, count] = useTypewriter({
    words: [
      'Hi, I am the man who called Derry',
      'Guy-who-loves-you.js',
      '<AndLove2Code />',
    ],
    loop: true,
    delaySpeed: 1820,
  });
  return (
    <div className='bg-[#24292B] h-screen flex flex-col space-y-8 items-center justify-center text-center overflow-hidden z-0'>
      <BackgroundCircle />
      <div className='relative w-44 h-44 md:w-52 md:h-52'>
        <Image
          layout='fill'
          className='relative rounded-full h-32 w-32 mx-auto object-cover'
          src='https://res.cloudinary.com/dwlyoi4wy/image/upload/v1664621184/private/IMG_20221001_124612_nwuhff.jpg'
          alt=''
        />
      </div>
      <div className='z-20'>
        <h2 className='text-sm uppercase text-[#444444] pb-2 tracking-[15px]'>
          Software Engineer
        </h2>
        <h2 className='text-sm uppercase text-[#444444] pb-2 tracking-[12px]'>
          data enthusiast
        </h2>
        <h1 className='text-5xl lg:text-6xl font-semibold px-10'>
          <span>{text}</span>
          <Cursor cursorColor='#00DEE6' />
        </h1>
        <div className='pt-5'>
          <Link href='#about'>
            <button className='heroButton'>About</button>
          </Link>
          <Link href='#experience'>
            <button className='heroButton'>Experience</button>
          </Link>
          <Link href='#skills'>
            <button className='heroButton'>Skills</button>
          </Link>
          <Link href='#projects'>
            <button className='heroButton'>Projects</button>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Hero;
