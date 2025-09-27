'use client'
import { ArrowRightIcon, Loader2Icon } from "lucide-react";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";

export default function Home() {
  const [loading, setLoading] = useState(true)
  useEffect(()=>{
    setTimeout(() => {
      setLoading(false)
    }, 4000);
  }, [])
  return loading ? <Loader/> : <Onboarding/>
}

const Loader = ()=>{
  return(
    <div className="h-screen w-full flex flex-col items-center justify-center bg-[#DAF1FA]">
      <div className="">
        <Image src='/logo.png' className="w-32 h-16" width={300} height={300} alt="logo"/>
      </div>
      <Loader2Icon className="h-12 w-12 animate-spin text-primary3 "/>
    </div>
  )
}

const Onboarding = ()=>{
  const router = useRouter()
  const [state, setState] = useState(0);
  const handleNextPage = ()=>{
    router.push('/auth')
  }
  const details = [
    {
      header: 'Smart Prep',
      description: 'Stop paying full price for outdated books. Get unlimited, current exam practice and savings.',
      img: '/img.png'
    },
    {
      header: 'Ready to Top the Exam?',
      description: 'Engage students in learning with leaderboards, rewards and dynamic question.',
      img: '/img2.png'
    },
    {
      header: 'Feedback Built for Growth',
      description: `Move beyond simple scores. Our platform provides detailed performancee tracking.`,
      img: '/img3.png'
    },
  ]

  const handleNext = ()=>{
    if(state !== details.length-1){
      setState(state + 1)
    }
  }
  return(
    <div className="flx flex-col items-center justify-between h-screen">
      <div onClick={()=> setState(details.length-1)} className={`absolute top-4 right-4 z-50 text-primary flex items-center justify-center bg-theme-primary bg-opacity-30 h-12 w-20 rounded-full ${state === details.length-1 && 'hidden'}`}>Skip</div>
      {/* <Loader/> */}
      <motion.div
      initial={{opacity: 0}}
      animate={{opacity: 2}}
      transition={{duration: 2}}
      className="bg-cover relative bg-center w-full min-h-[70%]"
        style={{ backgroundImage: `url(${details[state].img})` }}>
          <div className="absolute inset-x-0 bottom-0 h-10 
              bg-gradient-to-t from-white/90 to-transparent"></div>
      </motion.div>
      {/* <Image alt="" src={details[state].img} width={300} height={300} className="h-[80%] w-full rounded-b-[40%]"/> */}
      <div className="w-full h-fit flex items-center justify-center pt-4">
        <div className="px-4 w-full">
          <motion.h1 
          initial={{x: 100, opacity: 0}}
          animate={{x: 0, opacity: 2}}
          transition={{duration: 1}}
          className="text-primary3 text-3xl font-bold">{details[state].header}</motion.h1>
          <motion.h3
          initial={{x: 100, opacity: 0}}
          animate={{x: 0, opacity: 2}}
          transition={{duration: 2}}
          className="">{details[state].description}</motion.h3>
          <motion.div
          initial={{opacity: 0}}
          animate={{opacity: 2}}
          transition={{duration: 2}}
          className="mt-2 mb-8">
             <div className="flex items-center">
                {
                  details.map((item, key)=>{
                    return(
                      <div onClick={()=> setState(key)} key={key} className={`rounded-full py-[2px] h-1.5 ${key === state ? 'bg-primary3 w-8' : 'bg-primary-ghost w-5'}`} ></div>
                    )
                  })
                }
              </div>
          </motion.div>
          <div className="flex items-center justify-between mb-8 w-full">
            <motion.button
            initial={{y: 100, opacity: 0}}
            animate={{y: 0, opacity: 2}}
            transition={{duration: 2}}
            onClick={state === details.length-1 ? handleNextPage : handleNext} className="bg-primary2 text-white rounded-2xl flex items-center justify-center gap-2 px-8 w-full py-3">
              {state === details.length-1 ? 'Get Started' : 'Next'} <ArrowRightIcon />
            </motion.button>
          </div>
        </div>
      </div>
    </div>
  )
}