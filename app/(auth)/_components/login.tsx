import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardHeader } from '@/components/ui/card'
import { Input } from '@/components/ui/input'
import Image from 'next/image'
import React from 'react'

function Login() {
    return (
        <Card className='w-full md:max-w-xl bg-ruby'>
            <CardHeader className='flex items-center justify-center w-full'>
                <Image src='/logo.png' alt='' width={300} height={300} className='w-32 h-16' />
            </CardHeader>
            <CardDescription className='text-center'>
                <h1 className='text-[#167396] font-semibold text-2xl'>Welcome back</h1>
                <p className='text-xs text-[#212121]'>Welcome back please login with the required information </p>
            </CardDescription>
            <CardContent className='space-y-6'>
                <Input className='placeholder:text-xs h-10 lg:h-14' placeholder='Email' />
                <Input className='placeholder:text-xs h-10 lg:h-14' placeholder='Password' />
                <div className='w-full flex items-center justify-end'>
                    <p className='text-xs text-[#E53935]'>Forget Password ?</p>
                </div>
                <div className='grid grid-cols-8 items-center justify-between gap-4'>
                    <Button className='col-span-6 bg-[#167396] h-10 lg:h-14 text-white w-full'>Login</Button>
                    <div className='col-span-2 flex items-center justify-end'>
                        <div className='h-10 lg:h-14 w-10 lg:w-14 flex items-center justify-center rounded-md col-span-1 bg-transparent border-2'>
                            <Image className='w-6 lg:w-9 h-6 lg:h-9' src='/googleIcon.svg' alt='' width={300} height={300} />
                        </div>
                    </div>
                </div>
            </CardContent>
        </Card>
    )
}

export default Login