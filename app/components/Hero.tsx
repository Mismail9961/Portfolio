'use client';

import { motion } from 'framer-motion';
import { ArrowDown } from 'lucide-react';
import AvailabilityStatus from './AvailabilityStatus';
import DownloadCV from './DownloadCV';
import MagneticButton from './MagneticButton';
import settings from '@/settings.json';

export default function Hero() {
  const textVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: i * 0.1,
        duration: 0.8,
        ease: [0.6, -0.05, 0.01, 0.99],
      },
    }),
  };

  const letterVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: 0.5 + i * 0.03,
        duration: 0.5,
        ease: [0.6, -0.05, 0.01, 0.99],
      },
    }),
  };

  const { title, tagline, description } = settings.personal;

  return (
    <section
      id="hero"
      className="min-h-screen flex items-center justify-center relative px-4 sm:px-6 md:px-12 overflow-hidden"
    >
      <div className="max-w-[1400px] w-full mx-auto">

        {/* NAME */}
        <motion.div
          initial={{ opacity: 0, scale: 0.85 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, ease: [0.6, -0.05, 0.01, 0.99] }}
          className="mb-6 sm:mb-8"
        >
          <div className="font-bold tracking-tight leading-[0.9]">

            {/* Line 1 */}
            <div className="
              text-3xl xs:text-4xl sm:text-5xl md:text-7xl lg:text-[8rem]
              xl:text-[9rem]
              leading-tight
              break-words
              flex flex-wrap
            ">
              {'Sheikh Muhammad'.split('').map((char, i) => (
                <motion.span
                  key={`line1-${i}`}
                  custom={i}
                  initial="hidden"
                  animate="visible"
                  variants={letterVariants}
                  className="inline-block"
                >
                  {char === ' ' ? '\u00A0' : char}
                </motion.span>
              ))}
            </div>

            {/* Line 2 */}
            <div className="
              text-3xl xs:text-4xl sm:text-5xl md:text-7xl lg:text-[8rem]
              xl:text-[9rem]
              leading-tight
              break-words
              flex flex-wrap
            ">
              {'Ismail'.split('').map((char, i) => (
                <motion.span
                  key={`line2-${i}`}
                  custom={i + 20}
                  initial="hidden"
                  animate="visible"
                  variants={letterVariants}
                  className="inline-block"
                >
                  {char}
                </motion.span>
              ))}
            </div>

          </div>
        </motion.div>

        {/* TITLE */}
        <motion.h2
          custom={1}
          initial="hidden"
          animate="visible"
          variants={textVariants}
          className="
            text-lg sm:text-2xl md:text-3xl lg:text-5xl
            font-medium mb-4 sm:mb-6 text-muted
            leading-snug
          "
        >
          {title}
        </motion.h2>

        {/* TAGLINE */}
        <motion.p
          custom={2}
          initial="hidden"
          animate="visible"
          variants={textVariants}
          className="
            text-base sm:text-xl md:text-2xl lg:text-3xl
            mb-4 max-w-3xl leading-relaxed
          "
        >
          {tagline}
        </motion.p>

        {/* DESCRIPTION */}
        <motion.p
          custom={2.5}
          initial="hidden"
          animate="visible"
          variants={textVariants}
          className="
            text-sm sm:text-lg md:text-xl
            text-muted mb-6 sm:mb-8 max-w-2xl leading-relaxed
          "
        >
          {description}
        </motion.p>

        {/* AVAILABILITY */}
        <motion.div
          custom={2.8}
          initial="hidden"
          animate="visible"
          variants={textVariants}
          className="mb-6 sm:mb-8"
        >
          <AvailabilityStatus
            available={settings.personal.availability.status}
            message={settings.personal.availability.message}
          />
        </motion.div>

        {/* BUTTONS */}
        <motion.div
          custom={3}
          initial="hidden"
          animate="visible"
          variants={textVariants}
          className="flex flex-col sm:flex-row gap-3 sm:gap-6"
        >
          <MagneticButton
            href="#projects"
            className="px-6 py-3 sm:px-8 sm:py-4 bg-accent text-background font-medium text-center"
          >
            View Work
          </MagneticButton>

          <MagneticButton
            href="#contact"
            className="px-6 py-3 sm:px-8 sm:py-4 border border-accent text-accent font-medium hover:bg-accent hover:text-background transition-all duration-300 text-center"
          >
            Get in Touch
          </MagneticButton>

          <DownloadCV />
        </motion.div>
      </div>

      {/* SCROLL INDICATOR */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2, duration: 1 }}
        className="absolute bottom-6 sm:bottom-12 left-1/2 -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 1.5, repeat: Infinity }}
        >
          <ArrowDown className="w-5 h-5 sm:w-6 sm:h-6 text-muted" />
        </motion.div>
      </motion.div>
    </section>
  );
}