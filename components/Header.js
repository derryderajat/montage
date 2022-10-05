import React from 'react';
import { SocialIcon } from 'react-social-icons';
import { motion } from 'framer-motion';
function Header() {
  return (
    <header className='bg-[#24292B] sticky top-0 flex items-start justify-evenly w-full mx-auto z-20 xl:items-center'>
      <motion.div
        initial={{
          x: -500,
          opacity: 0,
          scale: 0.5,
        }}
        animate={{
          x: 0,
          opacity: 1,
          scale: 1,
        }}
        transition={{ duration: 1.5 }}
        className='flex flex-row items-center text-justify mx-auto ml-4'
      >
        {/* Social Icons */}
        <SocialIcon
          className='cursor-pointer hover:text-[#00DEE6] text-[#d4d4d4]'
          url='https://www.instagram.com/__derryd__/'
          fgColor='currentColor'
          bgColor='transparent'
        />
        {/* Social Icons */}
        <SocialIcon
          className='cursor-pointer hover:text-[#00DEE6] text-[#d4d4d4]'
          url='https://github.com/derryderajat/'
          fgColor='currentColor'
          bgColor='transparent'
        />
        {/* Social Icons */}
        <SocialIcon
          className='cursor-pointer hover:text-[#00DEE6] text-[#d4d4d4]'
          url='https://www.linkedin.com/in/derryderajat/'
          fgColor='currentColor'
          bgColor='transparent'
        />
        {/* Social Icons */}
        <SocialIcon
          className='cursor-pointer hover:text-[#00DEE6] text-[#d4d4d4]'
          url='https://www.instagram.com/__derryd__/'
          fgColor='currentColor'
          bgColor='transparent'
        />
      </motion.div>
      <motion.div
        initial={{
          x: 500,
          opacity: 0,
          scale: 0.5,
        }}
        animate={{
          x: 0,
          opacity: 1,
          scale: 1,
        }}
        transition={{ duration: 1 }}
        className='flex flex-row items-center '
      >
        <SocialIcon
          className='cursor-pointer hover:text-[#00DEE6] text-[#d4d4d4]'
          network='email'
          fgColor='currentColor'
          bgColor='transparent'
        />
        <p className='uppercase hidden md:block text-sm text-[#d4d4d4]  hover:text-[#00DEE6] hover:cursor-pointer'>
          get in touch
        </p>
      </motion.div>
    </header>
  );
}

export default Header;
