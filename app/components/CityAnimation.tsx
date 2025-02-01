"use client"

import type React from "react"
import { useRef, useEffect } from "react"

const CityAnimation: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext("2d")
    if (!ctx) return

    let animationFrameId: number

    // Set canvas size
    const resizeCanvas = () => {
      canvas.width = window.innerWidth
      canvas.height = 300 // Fixed height, adjust as needed
    }

    window.addEventListener("resize", resizeCanvas)
    resizeCanvas()

    // Particle class
    class Particle {
      x: number
      y: number
      height: number
      width: number
      speed: number
      color: string

      constructor(x: number, y: number) {
        this.x = x
        this.y = y
        this.height = Math.random() * 100 + 50
        this.width = Math.random() * 30 + 10
        this.speed = Math.random() * 0.2 + 0.1
        this.color = `rgba(${Math.random() * 50 + 150}, ${Math.random() * 50 + 150}, ${Math.random() * 50 + 150}, 0.7)`
      }

      draw() {
        if (!ctx) return
        ctx.fillStyle = this.color
        ctx.fillRect(this.x, canvas.height - this.height, this.width, this.height)
      }

      update() {
        this.height += this.speed
        if (this.height > canvas.height) {
          this.height = Math.random() * 100 + 50
        }
      }
    }

    // Create particles
    const particleCount = Math.floor(canvas.width / 30) // Adjust for density
    const particles: Particle[] = []

    for (let i = 0; i < particleCount; i++) {
      particles.push(new Particle(i * 30, canvas.height))
    }

    // Animation loop
    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height)
      particles.forEach((particle) => {
        particle.update()
        particle.draw()
      })
      animationFrameId = requestAnimationFrame(animate)
    }

    animate()

    // Cleanup
    return () => {
      window.removeEventListener("resize", resizeCanvas)
      cancelAnimationFrame(animationFrameId)
    }
  }, [])

  return <canvas ref={canvasRef} className="w-full h-[300px]" />
}

export default CityAnimation

