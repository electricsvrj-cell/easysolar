"use client"

import { useState, useEffect } from "react"
import { Lock } from "lucide-react"
import Image from "next/image"

interface RebateCountdownBannerProps {
  onOpenModal: () => void
}

export function RebateCountdownBanner({ onOpenModal }: RebateCountdownBannerProps) {
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0
  })

  useEffect(() => {
    // Target date: April 30, 2026
    const targetDate = new Date("2026-04-30T23:59:59").getTime()

    const updateTimer = () => {
      const now = new Date().getTime()
      const difference = targetDate - now

      if (difference <= 0) {
        setTimeLeft({ days: 0, hours: 0, minutes: 0, seconds: 0 })
        return
      }

      setTimeLeft({
        days: Math.floor(difference / (1000 * 60 * 60 * 24)),
        hours: Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
        minutes: Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60)),
        seconds: Math.floor((difference % (1000 * 60)) / 1000)
      })
    }

    updateTimer()
    const timer = setInterval(updateTimer, 1000)

    return () => clearInterval(timer)
  }, [])

  const TimerUnit = ({ value, label }: { value: number; label: string }) => (
    <div className="flex flex-col items-center min-w-[2.5rem] md:min-w-[3.5rem]">
      <div className="bg-[#001540] text-white w-9 h-9 md:w-12 md:h-12 rounded-lg flex items-center justify-center text-base md:text-xl font-bold shadow-[inset_0_2px_4px_rgba(0,0,0,0.3)] border border-white/10">
        {value.toString().padStart(2, '0')}
      </div>
      <span className="text-[9px] md:text-[11px] text-white/80 font-medium mt-1">{label}</span>
    </div>
  )

  return (
    <div className="fixed bottom-0 left-0 right-0 z-[50] pointer-events-none">
      <div className="w-full pointer-events-auto">
        <div className="relative overflow-hidden bg-gradient-to-r from-[#001540] via-[#4c214d] to-[#e11d48] p-3 md:px-8 md:py-4 shadow-[0_-10px_30px_rgba(0,0,0,0.3)] border-t border-white/20">
          {/* Subtle Shine Effect */}
          <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/5 to-transparent pointer-events-none" />
          
          <div className="flex flex-col md:flex-row items-center justify-between gap-4 md:gap-2">
            
            {/* Left Side: Hurry Up! + Images */}
            <div className="flex items-center gap-4 lg:gap-8">
              <div className="flex flex-col whitespace-nowrap">
                <span className="text-[#FFD700] font-black text-2xl md:text-3xl lg:text-4xl leading-none italic tracking-tighter drop-shadow-[0_2px_2px_rgba(0,0,0,0.5)] uppercase">
                  HURRY UP!
                </span>
              </div>
              
              <div className="hidden sm:flex items-center gap-4 lg:gap-6 h-12 md:h-16">
                 {/* Panel stack equivalent */}
                 <div className="relative w-16 md:w-20 h-full">
                    <Image 
                      src="/images/panels-10kw.png" 
                      alt="Solar Panels" 
                      fill 
                      className="object-contain drop-shadow-lg scale-150"
                    />
                 </div>
                 {/* Battery unit equivalent */}
                 <div className="relative w-12 md:w-16 h-full">
                    <Image 
                      src="/images/inverter-10kw.png" 
                      alt="Solar Battery" 
                      fill 
                      className="object-contain drop-shadow-lg scale-110"
                    />
                 </div>
              </div>
            </div>

            {/* Middle: Text Content */}
            <div className="text-center md:text-left flex-grow px-2 md:px-4">
              <p className="text-white text-xs md:text-base lg:text-lg font-medium leading-tight">
                Time left until rebate reduces <br className="hidden lg:block" />
                Higher rebates available only until <span className="font-bold text-[#FFD700]">30 April 2026</span>
              </p>
            </div>

            {/* Right: Timer + Call to Action */}
            <div className="flex flex-wrap md:flex-nowrap items-center justify-center gap-3 lg:gap-8">
              <div className="flex items-center gap-2 md:gap-3 lg:gap-4">
                <TimerUnit value={timeLeft.days} label="Days" />
                <TimerUnit value={timeLeft.hours} label="Hours" />
                <TimerUnit value={timeLeft.minutes} label="Mins" />
                <TimerUnit value={timeLeft.seconds} label="Secs" />
              </div>

              <button 
                onClick={onOpenModal}
                className="bg-[#001540] hover:bg-black text-white px-4 py-2.5 md:px-8 md:py-4 rounded-full font-bold flex items-center gap-2 md:gap-3 transition-all hover:scale-105 active:scale-95 shadow-[0_8px_20px_rgba(0,0,0,0.3)] group border border-white/10"
              >
                <div className="bg-white rounded-full p-1.5 md:p-2 group-hover:bg-[#FFD700] transition-colors">
                  <Lock className="w-3 h-3 md:w-4 md:h-4 text-[#001540]" />
                </div>
                <span className="text-[10px] md:text-xs lg:text-sm uppercase tracking-wider whitespace-nowrap font-black">
                  Don&apos;t lose your rebate!
                </span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
