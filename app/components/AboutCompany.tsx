"use client"

import { motion } from "framer-motion"
import { Building2, Users, MapPin, Phone } from "lucide-react"

const AboutCompany = () => {
  const fadeInUp = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6 },
  }

  return (
    <section id="about" className="py-16 bg-gradient-to-b from-gray-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.h2
          className="text-3xl sm:text-4xl font-extrabold text-gray-900 mb-8 text-center"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          О нашей компании
        </motion.h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <motion.div {...fadeInUp}>
            <p className="text-lg text-gray-600 mb-6">
              ГСК - это компания, объединившая в единый отдел продаж всех застройщиков г. Воронеж, Москва,
              Санкт-Петербург. Мы специализируемся на продаже новостроек, предоставляя нашим клиентам широкий выбор
              качественного жилья от ведущих застройщиков.
            </p>
            <p className="text-lg text-gray-600 mb-6">
              Наша миссия - помочь каждому клиенту найти идеальное жилье, соответствующее его потребностям и бюджету,
              обеспечивая профессиональное сопровождение на всех этапах сделки.
            </p>
          </motion.div>
          <motion.div
            className="grid grid-cols-2 gap-6"
            variants={{
              initial: { opacity: 0 },
              animate: { opacity: 1, transition: { staggerChildren: 0.1 } },
            }}
            initial="initial"
            animate="animate"
          >
            {[
              { icon: Building2, title: "Широкий выбор", description: "Новостройки от всех ведущих застройщиков" },
              {
                icon: Users,
                title: "Экспертная команда",
                description: "Профессиональные консультанты по недвижимости",
              },
              { icon: MapPin, title: "Города присутствия", description: "Воронеж, Москва, Санкт-Петербург" },
              { icon: Phone, title: "Поддержка 24/7", description: "Всегда на связи с нашими клиентами" },
            ].map((item, index) => (
              <motion.div
                key={index}
                className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300"
                variants={fadeInUp}
              >
                <item.icon className="h-8 w-8 text-primary mb-4" />
                <h3 className="text-xl font-semibold text-gray-900 mb-2">{item.title}</h3>
                <p className="text-gray-600">{item.description}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default AboutCompany

