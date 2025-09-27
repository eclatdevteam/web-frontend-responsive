'use client'
import React from 'react'


// eslint-disable-next-line @typescript-eslint/no-unsafe-function-type
const Dialog: React.FC<{children: React.ReactNode, state: boolean, handleState: Function}> = (
  {children, state, handleState}) => {
  return (
    <>
      {
        state && (
          <div className='fixed top-0 left-0 w-full h-screen z-50 flex items-center justify-center'>
              <div onClick={()=> handleState(false)} className='absolute top-0 left-0 w-full h-screen z-20 bg-[#A3A3A399] bg-opacity-60'></div>
              <div className='z-30'>
                {children}
              </div>
          </div>
        )
      }
    </>
  )
}

export default Dialog