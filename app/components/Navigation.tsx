"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { motion, AnimatePresence } from "framer-motion"
import { Link as ScrollLink } from "react-scroll"
import { Menu, X } from "lucide-react"
import Image from "next/image"

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false)

  const navItems = [
    { name: "ЖК", href: "complexes" },
    { name: "Квартиры", href: "apartments" },
    { name: "О компании", href: "about" },
    { name: "FAQ", href: "faq" },
    { name: "Контакты", href: "contact" },
  ]

  return (
    <nav className="bg-black text-white sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <div className="flex-shrink-0">
              <Image
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/GSK-logo-white-hor@0.5x-boEGIx2GxIfJjqYX5aIjDZQUTAcfFK.png"
                alt="GSK Logo"
                width={120}
                height={40}
                className="h-8 w-auto"
              />
            </div>
          </div>
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-4">
              {navItems.map((item) => (
                <ScrollLink
                  key={item.name}
                  to={item.href}
                  smooth={true}
                  duration={500}
                  offset={-64}
                  className="text-gray-300 hover:text-white px-3 py-2 rounded-md text-sm font-medium cursor-pointer"
                >
                  <motion.span whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                    {item.name}
                  </motion.span>
                </ScrollLink>
              ))}
            </div>
          </div>
          <div className="md:hidden">
            <Button onClick={() => setIsOpen(!isOpen)} variant="ghost" className="text-white md:hidden">
              <Menu className="h-6 w-6" />
            </Button>
          </div>
        </div>
      </div>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            className="md:hidden fixed inset-0 z-50 bg-black bg-opacity-50"
            initial={{ opacity: 0 }}
            animate={{ opacity: isOpen ? 1 : 0 }}
            exit={{ opacity: 0 }}
          >
            <motion.div
              className="bg-white h-full w-64 p-4"
              initial={{ x: "-100%" }}
              animate={{ x: isOpen ? 0 : "-100%" }}
              exit={{ x: "-100%" }}
              transition={{ type: "spring", stiffness: 300, damping: 30 }}
            >
              <div className="flex justify-end mb-4">
                <Button onClick={() => setIsOpen(false)} variant="ghost">
                  <X className="h-6 w-6" />
                </Button>
              </div>
              {navItems.map((item) => (
                <ScrollLink
                  key={item.name}
                  to={item.href}
                  smooth={true}
                  duration={500}
                  offset={-64}
                  className="block py-2 text-lg font-medium text-gray-900 hover:text-primary"
                  onClick={() => setIsOpen(false)}
                >
                  {item.name}
                </ScrollLink>
              ))}
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  )
}

export default Navigation

