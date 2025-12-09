"use client";

import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";

interface LightShuffleProps {
  text?: string;
  duration?: number;
  ease?: string;
  triggerOnHover?: boolean;
  triggerOnce?: boolean;
  className?: string;
}

const LightShuffle: React.FC<LightShuffleProps> = ({
  text = "React Native Developer",
  duration = 0.3,
  ease = "power3.out",
  triggerOnHover = true,
  triggerOnce = true,
  className = "",
}) => {
  const ref = useRef<HTMLParagraphElement | null>(null);
  const played = useRef(false);

  const shuffleText = () => {
    const el = ref.current;
    if (!el) return;

    if (triggerOnce && played.current) return;
    played.current = true;

    const chars = text.split("");
    const randomChars = "!@#$%^&*()_+-={}[]<>?/0123456789";

    let frame = 0;
    const maxFrames = 4; // super lightweight!

    const animate = () => {
      frame++;

      if (el) {
        el.textContent = chars
          .map((c, i) => {
            if (frame === maxFrames) return c; // final frame = original text
            if (Math.random() > 0.7) {
              return randomChars[Math.floor(Math.random() * randomChars.length)];
            }
            return c;
          })
          .join("");
      }

      if (frame < maxFrames) {
        requestAnimationFrame(animate);
      } else {
        gsap.fromTo(
          el,
          { opacity: 0.6 },
          { opacity: 1, duration: duration, ease }
        );
      }
    };

    animate();
  };

  useEffect(() => {
    if (!triggerOnHover) shuffleText();
  }, []);

  return (
    <p
      ref={ref}
      className={`text-white ${className}`}
      style={{ willChange: "opacity" }}
      onMouseEnter={() => triggerOnHover && shuffleText()}
    >
      {text}
    </p>
  );
};

export default LightShuffle;
