'use client'
import React from 'react'
import Image from 'next/image'
import { ArrowLeft, CircleQuestionMark, GraduationCap, School2Icon, Users2 } from 'lucide-react'
import { motion } from 'framer-motion'
import { useRouter } from 'next/navigation'

const Page = ()=> {
    const router = useRouter()
  return (
    <div className='px-4'>
        <div className='w-full flex items-center relative justify-center mt-14 mb-10'>
            <ArrowLeft className='text-primary3 absolute top-1/4 left-0' onClick={()=> router.push('/auth')}/>
            <Image src='/logo.png' alt='' height={200} width={200} className='h-16 w-32'/>
        </div>
        <div>
            <h1 className='text-2xl'>Get started as:</h1>
            <div>
                <motion.button
                initial={{x: 100, opacity: 0}}
                animate={{x: 0, opacity: 2}}
                transition={{duration: 0.5}}
                className="text-primary2 my-5 border border-primary2 rounded-2xl flex items-center justify-center gap-2 px-8 w-full py-3">
                    <GraduationCap/> Student
                </motion.button>
                <motion.button
                initial={{x: 100, opacity: 0}}
                animate={{x: 0, opacity: 2}}
                transition={{duration: 1}}
                className="text-primary2 my-5 border border-primary2 rounded-2xl flex items-center justify-center gap-2 px-8 w-full py-3">
                    <Users2/> Parent
                </motion.button>
                <motion.button
                initial={{x: 100, opacity: 0}}
                animate={{x: 0, opacity: 2}}
                transition={{duration: 1.5}}
                className="text-primary2 my-5 border border-primary2 rounded-2xl flex items-center justify-center gap-2 px-8 w-full py-3">
                    <School2Icon/> School
                </motion.button>
                <motion.button
                initial={{x: 100, opacity: 0}}
                animate={{x: 0, opacity: 2}}
                transition={{duration: 2}}
                className="text-primary2 my-5 border border-primary2 rounded-2xl flex items-center justify-center gap-2 px-8 w-full py-3">
                    <CircleQuestionMark/> Guest
                </motion.button>
            </div>
        </div>
    </div>
  )
}

export default Page;