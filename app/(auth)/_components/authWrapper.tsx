'use client'
import React, { FC, ReactNode } from "react";
import Image from "next/image";
import { motion } from 'framer-motion'

interface InterfaceLayoutProps {
  children: ReactNode;
}
const AuthWrapper: FC<InterfaceLayoutProps> = ({ children }) => {
  return (
    <div className='md:grid grid-cols-2 bg-[#E1F7FF] w-full h-screen'>
      <div className="hidden md:block md:col-span-1 h-full max-h-screen">
        <Image src='/landing.png' alt="" className="w-full h-full" width={300} height={300} />
      </div>
      <motion.div
      initial={{opacity: 0}}
      animate={{opacity: 2}}
      transition={{duration: 1}}
      className='col-span-2 md:col-span-1 w-full h-full flex items-center justify-center px-6'>
        {children}
      </motion.div>
    </div>
  )
}

export default AuthWrapper