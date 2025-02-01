"use client"

import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"

const faqItems = [
  {
    question: "Как забронировать квартиру?",
    answer:
      "Чтобы забронировать квартиру, вы можете оставить заявку на нашем сайте или позвонить нам. Наш менеджер свяжется с вами для уточнения деталей и поможет оформить бронирование.",
  },
  {
    question: "Какие документы нужны для покупки квартиры?",
    answer:
      "Для покупки квартиры вам потребуется паспорт, СНИЛС, и документы, подтверждающие вашу платежеспособность (справка о доходах, выписка с банковского счета). Если вы планируете использовать ипотеку, также понадобится одобрение от банка.",
  },
  {
    question: "Какие способы оплаты доступны?",
    answer:
      "Мы предлагаем несколько способов оплаты: полная оплата, ипотека, рассрочка от застройщика. Наши специалисты помогут вам выбрать наиболее подходящий вариант.",
  },
  {
    question: "Когда я смогу получить ключи от квартиры?",
    answer:
      "Сроки получения ключей зависят от выбранного вами жилого комплекса и стадии его готовности. Точную дату мы сообщаем при заключении договора, и строго соблюдаем установленные сроки.",
  },
  {
    question: "Есть ли гарантия на квартиру после сдачи дома?",
    answer:
      "Да, мы предоставляем гарантию на квартиру в течение 5 лет после сдачи дома. В этот период мы устраняем любые выявленные строительные дефекты за свой счет.",
  },
]

const FAQ = () => {
  return (
    <section id="faq" className="py-12 bg-white">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-2xl sm:text-3xl font-extrabold text-gray-900 mb-8 text-center">Часто задаваемые вопросы</h2>
        <Accordion type="single" collapsible className="space-y-4">
          {faqItems.map((item, index) => (
            <AccordionItem key={index} value={`item-${index}`} className="bg-gray-100 rounded-lg">
              <AccordionTrigger className="text-left font-semibold p-4 text-sm sm:text-base">
                {item.question}
              </AccordionTrigger>
              <AccordionContent className="p-4 pt-0 text-sm sm:text-base">{item.answer}</AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  )
}

export default FAQ

