"use client"

import Image from "next/image"
import { motion } from "framer-motion"

const Banner = () => {
  return (
    <div className="relative h-[40vh] sm:h-[50vh] md:h-[60vh] w-full overflow-hidden bg-gradient-to-b from-black via-gray-900 to-transparent">
      <Image
        src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/PHOTO-2024-12-10-17-49-24.jpg-kZbM8cAtL3kvVAq5tCbU5fSHbcw4Fl.jpeg"
        alt="Современный жилой комплекс с фасадом из серого и коричневого кирпича"
        layout="fill"
        objectFit="cover"
        priority
        className="object-center brightness-75"
      />
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-black/50 to-black/70 flex items-center justify-center">
        <div className="text-center max-w-4xl px-4">
          <motion.h1
            className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4 sm:mb-6 drop-shadow-lg"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            Ваш новый дом ждет вас
          </motion.h1>
          <motion.p
            className="text-lg sm:text-xl md:text-2xl text-white drop-shadow-lg"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            Современные квартиры в лучших районах города
          </motion.p>
        </div>
      </div>
    </div>
  )
}

export default Banner

