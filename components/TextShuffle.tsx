import Shuffle from "@/components/Shuffle";
import React from 'react'

const TextShuffle = () => {
  return (
    <div className="flex items-center bg-black text-white  justify-center h-[40]">
      <Shuffle
        text="Full Stack Developer"
        shuffleDirection="right"
        duration={0.35}
        animationMode="evenodd"
        shuffleTimes={1}
        ease="power3.out"
        stagger={0.03}
        threshold={0.1}
        triggerOnce={true}
        triggerOnHover={true}
        respectReducedMotion={true}
      />
    </div>
  )
}

export default TextShuffle

