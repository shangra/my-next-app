"use client"

import type React from "react"
import { useEffect, useRef } from "react"
import { motion, useAnimation } from "framer-motion"

const BuildingAnimation: React.FC = () => {
  const controls = useAnimation()
  const containerRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const handleScroll = () => {
      if (containerRef.current) {
        const { top } = containerRef.current.getBoundingClientRect()
        const isVisible = top < window.innerHeight && top > -containerRef.current.offsetHeight

        if (isVisible) {
          controls.start("visible")
        } else {
          controls.start("hidden")
        }
      }
    }

    window.addEventListener("scroll", handleScroll)
    handleScroll() // Initial check

    return () => window.removeEventListener("scroll", handleScroll)
  }, [controls])

  const buildingVariants = {
    hidden: { height: 0 },
    visible: { height: "100%", transition: { duration: 1.5, ease: "easeInOut" } },
  }

  const windowVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { duration: 0.5, staggerChildren: 0.1 } },
  }

  const textVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } },
  }

  return (
    <div ref={containerRef} className="py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-extrabold text-gray-900 mb-8 text-center">Ваш путь к новому дому</h2>
        <div className="flex flex-col md:flex-row justify-between items-center space-y-8 md:space-y-0 md:space-x-4">
          <motion.div
            className="w-full md:w-1/4 text-center md:text-right"
            variants={textVariants}
            initial="hidden"
            animate={controls}
          >
            <h3 className="text-xl font-semibold text-primary mb-2">Широкий выбор</h3>
            <p className="text-gray-600">Подберем идеальную квартиру, соответствующую вашим потребностям и бюджету</p>
          </motion.div>

          <div className="flex justify-center items-end space-x-2 sm:space-x-4 h-48 sm:h-64 md:h-80 w-full md:w-1/2">
            {[1, 2, 3].map((building) => (
              <motion.div
                key={building}
                className="w-16 sm:w-24 md:w-32 bg-primary rounded-t-lg overflow-hidden"
                variants={buildingVariants}
                initial="hidden"
                animate={controls}
                style={{ originY: 1 }}
              >
                <motion.div
                  className="h-full w-full grid grid-cols-2 gap-1 p-1 sm:gap-2 sm:p-2"
                  variants={windowVariants}
                >
                  {[...Array(8)].map((_, index) => (
                    <motion.div
                      key={index}
                      className="bg-white rounded-sm relative overflow-hidden"
                      variants={{
                        hidden: { opacity: 0 },
                        visible: { opacity: 1 },
                      }}
                    >
                      <div className="absolute inset-0 flickering-light" />
                      <div className="absolute inset-0 moving-shadow" />
                    </motion.div>
                  ))}
                </motion.div>
              </motion.div>
            ))}
          </div>

          <motion.div
            className="w-full md:w-1/4 text-center md:text-left"
            variants={textVariants}
            initial="hidden"
            animate={controls}
          >
            <h3 className="text-xl font-semibold text-primary mb-2">Выгодные условия</h3>
            <p className="text-gray-600">Предлагаем лучшие цены и помощь в оформлении ипотеки на выгодных условиях</p>
          </motion.div>
        </div>
      </div>
      <style jsx>{`
        @keyframes flicker {
          0%, 100% { opacity: 0.8; }
          50% { opacity: 1; }
        }
        @keyframes move-shadow {
          0%, 100% { transform: translateX(-100%); }
          50% { transform: translateX(100%); }
        }
        .flickering-light {
          background: rgba(255, 255, 200, 0.5);
          animation: flicker 3s infinite;
          animation-delay: calc(var(--window-index) * 0.5s);
        }
        .moving-shadow {
          background: linear-gradient(90deg, transparent, rgba(0, 0, 0, 0.1), transparent);
          animation: move-shadow 8s infinite;
          animation-delay: calc(var(--window-index) * 1s);
        }
      `}</style>
    </div>
  )
}

export default BuildingAnimation

