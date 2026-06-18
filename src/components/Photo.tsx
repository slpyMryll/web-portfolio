"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export default function Photo() {
  return (
    <div className="w-full h-full relative flex justify-center items-center">

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{
          delay: 0.2,
          duration: 0.4,
          ease: "easeIn",
        }}
        className="relative flex items-center justify-center"
      >

        {/* IMAGE CONTAINER (RESPONSIVE FIX) */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{
            delay: 0.3,
            duration: 0.6,
            ease: "easeInOut",
          }}
          className="relative w-[180px] h-[180px] sm:w-[220px] sm:h-[220px] md:w-[260px] md:h-[260px] xl:w-[320px] xl:h-[320px]"
        >
          <Image
            src="/profile-nobg.png"
            fill
            priority
            quality={100}
            alt="Profile"
            className="object-contain rounded-full"
          />
        </motion.div>

        {/* SVG BORDER */}
        <motion.svg
          className="absolute  w-[180px] h-[180px] sm:w-[220px] sm:h-[220px] md:w-[260px] md:h-[260px] xl:w-[320px] xl:h-[320px]"
          fill="transparent"
          viewBox="0 0 506 506"
          xmlns="http://www.w3.org/2000/svg"
        >
          <motion.circle
            cx="253"
            cy="253"
            r="250"
            stroke="currentColor"
            strokeWidth="4"
            strokeLinecap="round"
            strokeLinejoin="round"
            initial={{ strokeDasharray: "24 10 0 0" }}
            animate={{
              strokeDasharray: ["15 120 25 25", "16 25 92 72", "4 250 22 22"],
              rotate: [120, 360],
            }}
            transition={{
              duration: 20,
              repeat: Infinity,
              repeatType: "reverse",
            }}
          />
        </motion.svg>

      </motion.div>
    </div>
  );
}