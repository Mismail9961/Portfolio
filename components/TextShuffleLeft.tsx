import Shuffle from "@/components/Shuffle";
import React from 'react'

const TextShuffleLeft = () => {
  return (
    <div className="flex items-center mt-2 bg-black text-white  justify-center h-[40]">
      <Shuffle
        text="React Native Developer"
        shuffleDirection="left"
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

export default TextShuffleLeft

