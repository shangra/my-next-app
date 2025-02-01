"use client"

import { useEffect, useState } from "react"
import { useInView } from "react-intersection-observer"
import { useAnimation, type AnimationControls } from "framer-motion"

export const useScrollAnimation = (threshold = 0.1): [boolean, AnimationControls] => {
  const controls = useAnimation()
  const [ref, inView] = useInView({ threshold })
  const [hasAnimated, setHasAnimated] = useState(false)

  useEffect(() => {
    if (inView && !hasAnimated) {
      controls.start("visible")
      setHasAnimated(true)
    }
  }, [controls, inView, hasAnimated])

  return [inView, controls]
}

