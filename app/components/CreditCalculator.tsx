"use client"

import { useState, useEffect, useRef } from "react"
import { Link as ScrollLink } from "react-scroll"
import { motion } from "framer-motion"
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Label } from "@/components/ui/label"
import { Button } from "@/components/ui/button"
import { Calculator, ArrowRight } from "lucide-react"

interface CalculatorInputProps {
  value: number
  onChange: (value: number) => void
  min: number
  max: number
  step: number
  label: string
  suffix: string
  formatValue?: (value: number) => string
}

const CalculatorInput = ({ value, onChange, min, max, step, label, suffix, formatValue }: CalculatorInputProps) => {
  const inputRef = useRef<HTMLInputElement>(null)
  const [isDragging, setIsDragging] = useState(false)

  const percentage = ((value - min) / (max - min)) * 100

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    onChange(Number(event.target.value))
  }

  const handleTouchStart = (event: React.TouchEvent<HTMLInputElement>) => {
    setIsDragging(true)
    handleTouchMove(event)
  }

  const handleTouchMove = (event: React.TouchEvent<HTMLInputElement>) => {
    if (!isDragging) return
    const touch = event.touches[0]
    const input = inputRef.current
    if (input) {
      const rect = input.getBoundingClientRect()
      const x = touch.clientX - rect.left
      const percentage = Math.max(0, Math.min(1, x / rect.width))
      const newValue = Math.round((percentage * (max - min) + min) / step) * step
      onChange(newValue)
    }
  }

  const handleTouchEnd = () => {
    setIsDragging(false)
  }

  useEffect(() => {
    const handleTouchEndGlobal = () => {
      setIsDragging(false)
    }

    document.addEventListener("touchend", handleTouchEndGlobal)
    return () => {
      document.removeEventListener("touchend", handleTouchEndGlobal)
    }
  }, [])

  return (
    <div className="space-y-4">
      <div className="flex justify-between">
        <Label className="text-sm font-medium">{label}</Label>
        <span className="text-sm font-medium">
          {formatValue ? formatValue(value) : value.toLocaleString("ru-RU")} {suffix}
        </span>
      </div>
      <div className="relative">
        <input
          ref={inputRef}
          type="range"
          min={min}
          max={max}
          step={step}
          value={value}
          onChange={handleChange}
          onTouchStart={handleTouchStart}
          onTouchMove={handleTouchMove}
          onTouchEnd={handleTouchEnd}
          className="w-full appearance-none bg-transparent cursor-pointer [&::-webkit-slider-runnable-track]:h-2 [&::-webkit-slider-runnable-track]:rounded-full [&::-webkit-slider-runnable-track]:bg-gray-200 [&::-webkit-slider-thumb]:appearance-none [&::-webkit-slider-thumb]:h-4 [&::-webkit-slider-thumb]:w-4 [&::-webkit-slider-thumb]:rounded-full [&::-webkit-slider-thumb]:bg-primary [&::-webkit-slider-thumb]:mt-[-4px] [&::-moz-range-track]:h-2 [&::-moz-range-track]:rounded-full [&::-moz-range-track]:bg-gray-200 [&::-moz-range-thumb]:h-4 [&::-moz-range-thumb]:w-4 [&::-moz-range-thumb]:rounded-full [&::-moz-range-thumb]:bg-primary [&::-moz-range-thumb]:border-0"
        />
        <div
          className="absolute top-[9px] left-0 h-2 rounded-full bg-primary transition-all duration-200"
          style={{ width: `${percentage}%` }}
        />
      </div>
    </div>
  )
}

const CreditCalculator = () => {
  const [propertyPrice, setPropertyPrice] = useState(5000000)
  const [downPayment, setDownPayment] = useState(1500000)
  const [term, setTerm] = useState(20)
  const [rate, setRate] = useState(12)
  const [monthlyPayment, setMonthlyPayment] = useState(0)
  const [totalLoan, setTotalLoan] = useState(0)
  const [totalInterest, setTotalInterest] = useState(0)

  useEffect(() => {
    // Расчет кредита
    const loan = propertyPrice - downPayment
    const monthlyRate = rate / 12 / 100
    const months = term * 12
    const monthlyPayment =
      (loan * monthlyRate * Math.pow(1 + monthlyRate, months)) / (Math.pow(1 + monthlyRate, months) - 1)
    const totalAmount = monthlyPayment * months

    setTotalLoan(loan)
    setMonthlyPayment(monthlyPayment)
    setTotalInterest(totalAmount - loan)
  }, [propertyPrice, downPayment, term, rate])

  const formatCurrency = (value: number) => {
    return new Intl.NumberFormat("ru-RU", {
      style: "currency",
      currency: "RUB",
      maximumFractionDigits: 0,
    }).format(value)
  }

  return (
    <section className="py-12 bg-gradient-to-b from-gray-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-8">
          <h2 className="text-3xl font-bold">Кредитный калькулятор</h2>
          <p className="text-gray-600 mt-2">Рассчитайте условия ипотечного кредита</p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8">
          <Card className="border-0 shadow-lg">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Calculator className="h-5 w-5" />
                Параметры кредита
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              <CalculatorInput
                label="Стоимость объекта"
                value={propertyPrice}
                onChange={setPropertyPrice}
                min={1000000}
                max={100000000}
                step={100000}
                suffix="₽"
                formatValue={formatCurrency}
              />
              <CalculatorInput
                label="Первоначальный взнос"
                value={downPayment}
                onChange={setDownPayment}
                min={propertyPrice * 0.1}
                max={100000000}
                step={100000}
                suffix="₽"
                formatValue={formatCurrency}
              />
              <CalculatorInput
                label="Срок кредита"
                value={term}
                onChange={setTerm}
                min={1}
                max={30}
                step={1}
                suffix="лет"
              />
              <CalculatorInput
                label="Процентная ставка"
                value={rate}
                onChange={setRate}
                min={12}
                max={40}
                step={0.1}
                suffix="%"
              />
            </CardContent>
          </Card>

          <Card className="border-0 shadow-lg">
            <CardHeader>
              <CardTitle>Результат расчета</CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              <motion.div
                className="grid gap-4"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.3 }}
              >
                <div className="bg-primary/5 p-4 rounded-lg">
                  <p className="text-sm text-gray-600">Ежемесячный платеж</p>
                  <p className="text-2xl font-bold text-primary">{formatCurrency(monthlyPayment)}</p>
                </div>
                <div className="bg-primary/5 p-4 rounded-lg">
                  <p className="text-sm text-gray-600">Сумма кредита</p>
                  <p className="text-2xl font-bold text-primary">{formatCurrency(totalLoan)}</p>
                </div>
                <div className="bg-primary/5 p-4 rounded-lg">
                  <p className="text-sm text-gray-600">Переплата</p>
                  <p className="text-2xl font-bold text-primary">{formatCurrency(totalInterest)}</p>
                </div>
              </motion.div>
            </CardContent>
            <CardFooter className="flex flex-col items-stretch gap-4">
              <ScrollLink to="contact" smooth={true} duration={500} offset={-100}>
                <Button className="w-full group">
                  Подать заявку
                  <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                </Button>
              </ScrollLink>
              <p className="text-xs text-center text-gray-500">
                Предварительный расчет. Суммы носят информационный характер.
              </p>
            </CardFooter>
          </Card>
        </div>
      </div>
    </section>
  )
}

export default CreditCalculator

