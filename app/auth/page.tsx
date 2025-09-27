'use client'
import React from 'react'
import Image from 'next/image'
import { useRouter } from 'next/navigation'
import { motion } from 'framer-motion'

function Page() {
    const router = useRouter()
    return (
        <div className='h-screen w-full bg-theme-primary flex flex-col px-4 items-center justify-between pb-10 pt-28'>
            <motion.h1
                initial={{ y: -100, opacity: 0 }}
                animate={{ y: 0, opacity: 2 }}
                transition={{ duration: 2 }}
                className='text-3xl font-bold text-primary-dark'>
                Welcome to
            </motion.h1>
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 2 }}
                transition={{ duration: 2 }}>
                <Image src='/logooo.png' alt='' height={200} width={200} className='w-48 h-60' />
            </motion.div>
            <div>
                <motion.button
                    initial={{ x: 100, opacity: 0 }}
                    animate={{ x: 0, opacity: 2 }}
                    transition={{ duration: 0.5 }}
                    onClick={() => router.push('/auth/login')} className="bg-primary2 hover:bg-theme-primary text-white rounded-2xl flex items-center justify-center gap-2 px-8 w-full py-3">
                    Login
                </motion.button>
                <motion.button
                    initial={{ x: 100, opacity: 0 }}
                    animate={{ x: 0, opacity: 2 }}
                    transition={{ duration: 1 }}
                    onClick={() => router.push('/auth/user')} className="text-primary2 my-5 border border-primary2 rounded-2xl flex items-center justify-center gap-2 px-8 w-full py-3">
                    Get Started
                </motion.button>
                <p className='text-sm text-center'>By continuing, you confirm that you&apos;ve read and accepted our <span className='font-semibold'>Terms</span> and <span className='font-semibold'>Privacy Policy</span></p>
            </div>
        </div>
    )
}

export default Page