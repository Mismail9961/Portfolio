import LightShuffle from "@/components/Shuffle";
import React from 'react'

const TextShuffleLeft = () => {
  return (

    <div className="flex justify-center bg-black text-white">
      <LightShuffle
        text="React Native Developer"
        triggerOnHover={true}
        duration={0.35}
      />
    </div>
  )
}

export default TextShuffleLeft

