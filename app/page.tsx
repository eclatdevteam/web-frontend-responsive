'use client'
import { Loader2Icon } from "lucide-react";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

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
    <div className="h-screen w-full flex flex-col items-center justify-center">
      <div className="">
        <Image src='/logo.png' className="w-32 h-16" width={300} height={300} alt="logo"/>
      </div>
      <Loader2Icon className="h-12 w-12 animate-spin text-theme-primary "/>
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
      header: 'Start Learning Today',
      description: 'Create, share and play quizzes whenever you want.',
      img: '/landing.png'
    },
    {
      header: 'Learn Anywhere, Anytime',
      description: 'Find fun and interesting quizzes to boost up your knowledge.',
      img: '/landing.png'
    },
    {
      header: 'Quizzes with Friends',
      description: `Play quiz together with your friends.`,
      img: '/landing.png'
    },
  ]

  const handleNext = ()=>{
    if(state !== details.length-1){
      setState(state + 1)
    }
  }
  return(
    <div className="flex flex-col items-center justify-between h-screen">
      <h1 onClick={()=> setState(details.length-1)} className={`absolute top-4 right-4 text-theme-primary ${state === details.length-1 && 'hidden'}`}>Skip</h1>
      {/* <Loader/> */}
      <div className="bg-cover bg-center w-full min-h-[70%] rounded-b-full"
        style={{ backgroundImage: `url(${details[state].img})` }}>

      </div>
      {/* <Image alt="" src={details[state].img} width={300} height={300} className="h-[80%] w-full rounded-b-[40%]"/> */}
      <div className="w-full h-full flex items-center justify-center">
        <div className="px-6 w-full">
          <h1 className="text-theme-primary text-2xl font-bold">{details[state].header}</h1>
          <h3 className="w-3/4">{details[state].description}</h3>
          <div className="flex items-center justify-between my-8 w-full">
            <div className="flex items-center gap-2">
              {
                details.map((item, key)=>{
                  return(
                    <div onClick={()=> setState(key)} key={key} className={`rounded-full p-1 ${key === state ? 'bg-theme-primary' : 'bg-gray-500'}`} ></div>
                  )
                })
              }
            </div>
            <button onClick={state === details.length-1 ? handleNextPage : handleNext} className="bg-theme-primary text-white rounded-lg px-8 w-44 py-3">
              {state === details.length-1 ? 'Get Started' : 'Next'}
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}