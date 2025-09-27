'use client'
import { ArrowRightIcon, Loader2Icon } from "lucide-react";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { motion } from "framer-motion";
import { useState, useEffect, useCallback, useMemo } from 'react';
import { AnimatePresence, Variants } from 'framer-motion';

export default function Home() {
  const [loading, setLoading] = useState(true)
  useEffect(() => {
    setTimeout(() => {
      setLoading(false)
    }, 4000);
  }, [])
  return loading ? <Loader /> : <Onboarding />
}

const Loader = () => {
  return (
    <div className="h-[100dvh] w-full flex flex-col items-center justify-center bg-[#DAF1FA]">
      <div className="">
        <Image src='/logo.png' className="w-32 h-16" width={300} height={300} alt="logo" />
      </div>
      <Loader2Icon className="h-12 w-12 animate-spin text-primary3 " />
    </div>
  )
}

const details = [
  {
    header: "Smart Prep",
    description:
      "Stop paying full price for outdated books. Get unlimited, current exam practice and savings.",
    img: "/img.png",
  },
  {
    header: "Ready to Top the Exam?",
    description:
      "Engage students in learning with leaderboards, rewards and dynamic question.",
    img: "/img2.png",
  },
  {
    header: "Feedback Built for Growth",
    description:
      "Move beyond simple scores. Our platform provides detailed performance tracking.",
    img: "/img3.png",
  },
];

const Onboarding = () => {
  const router = useRouter();
  const [state, setState] = useState(0);
  const [loaded, setLoaded] = useState<Record<number, boolean>>({});

  // Preload images once
  useEffect(() => {
    if (typeof window === "undefined") return;

    const preloadImages = async () => {
      const loadPromises = details.map((item) => {
        return new Promise<void>((resolve) => {
          const img = new window.Image(); // 👈 important
          img.onload = () => resolve();
          img.onerror = () => resolve();
          img.src = item.img;
        });
      });

      await Promise.all(loadPromises);
    };

    preloadImages();
  }, [details]);

  const handleNextPage = () => router.push("/auth");

  const handleNext = () => {
    if (state < details.length - 1) setState((s) => s + 1);
  };

  return (
    <div className="flex flex-col items-center justify-between h-[100dvh] overflow-hidden bg-white">
      {/* Skip button */}
      <div
        onClick={() => setState(details.length - 1)}
        className={`absolute top-4 right-4 z-50 text-primary flex items-center justify-center bg-theme-primary bg-opacity-30 h-12 w-20 rounded-full cursor-pointer ${state === details.length - 1 ? "hidden" : ""
          }`}
      >
        Skip
      </div>

      {/* Image slideshow */}
      <div className="relative w-full min-h-[70%] bg-gradient-to-t from-white/90 to-transparent pb-6">
        <AnimatePresence mode="wait">
          <motion.div
            key={state}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.8 }}
            className="absolute inset-0 bg-cover bg-center"
            style={{
              backgroundImage: `url(${details[state].img})`,
            }}
          />
        </AnimatePresence>
        <div className="absolute inset-x-0 bottom-0 h-10 bg-gradient-to-t from-white/90 to-transparent" />
      </div>

      {/* Text + Controls */}
      <div className="w-full flex items-center justify-center h-[30%]">
        <div className="px-4 w-full">
          <motion.h1
            key={details[state].header}
            initial={{ x: 100, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.8 }}
            className="text-primary3 text-3xl font-bold"
          >
            {details[state].header}
          </motion.h1>

          <motion.h3
            key={details[state].description}
            initial={{ x: 100, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 1 }}
            className="mt-2"
          >
            {details[state].description}
          </motion.h3>

          {/* Dots */}
          <div className="mt-4 mb-8 flex items-center">
            {details.map((_, key) => (
              <div
                key={key}
                onClick={() => setState(key)}
                className={`rounded-full h-1.5 cursor-pointer transition-all ${key === state
                  ? "bg-primary3 w-8"
                  : "bg-primary-ghost w-5"
                  }`}
              />
            ))}
          </div>

          {/* Button */}
          <motion.button
            initial={{ y: 40, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8 }}
            onClick={
              state === details.length - 1
                ? handleNextPage
                : handleNext
            }
            className="bg-primary2 text-white rounded-2xl flex items-center justify-center gap-2 px-8 w-full py-3"
          >
            {state === details.length - 1 ? "Get Started" : "Next"}{" "}
            <ArrowRightIcon />
          </motion.button>
        </div>
      </div>
    </div>
  )
};
