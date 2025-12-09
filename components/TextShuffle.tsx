import LightShuffle  from "@/components/Shuffle";
import React from 'react'

const TextShuffle = () => {
  return (
<div className="flex items-center bg-black text-white justify-center h-[40px]">
  <LightShuffle
    text="Full Stack Developer"
    duration={0.3}
    triggerOnHover={true}
    triggerOnce={true}
    className="text-xl md:text-2xl font-semibold"
  />
</div>

  )
}

export default TextShuffle

