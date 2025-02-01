"use client"

import Image from "next/image"
import { Button } from "@/components/ui/button"
import Modal from "./Modal"
import { useState } from "react"

const complexes = [
  {
    id: 1,
    name: "ЖК Маяковский",
    image:
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/PHOTO-2024-12-10-17-49-25.jpg-1VOcUiAKkDejkEkNB6wp86myfPhuTf.jpeg",
    description: "Современный монолитно-кирпичный комплекс с просторными квартирами",
    fullDescription:
      "Жилой комплекс «Маяковский» представляет собой четыре монолитно-кирпичных здания. Застройщиком спроектированы квартиры с различными планировками: от студий до трехкомнатных, общей площадью от 25 до 92.77 кв. м. Доступны варианты как с отделкой, так и без нее.",
    images: [
      {
        url: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/PHOTO-2024-12-10-17-49-25.jpg-1VOcUiAKkDejkEkNB6wp86myfPhuTf.jpeg",
        alt: "Общий вид ЖК Маяковский",
      },
      {
        url: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/PHOTO-2024-12-10-17-49-16.jpg-85zMJC1Kdenr4nEWxvL8HpgMpuTZm4.jpeg",
        alt: "Фасад здания ЖК Маяковский",
      },
      {
        url: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/PHOTO-2024-12-10-17-48-41.jpg-zEVjwAByp7ZH53jNaFF7fwYGaM3i0g.jpeg",
        alt: "Детская площадка ЖК Маяковский",
      },
      {
        url: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/PHOTO-2024-12-10-17-48-47.jpg-stjF3mKbjquOqw0PnQuUI4O64qyzsg.jpeg",
        alt: "Входная группа ЖК Маяковский",
      },
    ],
    details: {
      "О комплексе": "Четыре монолитно-кирпичных здания с современной архитектурой",
      Квартиры: "От студий до трехкомнатных квартир площадью от 25 до 92.77 кв. м",
      Благоустройство: [
        "Детские игровые площадки",
        "Спортивные площадки",
        "Зоны отдыха",
        "Озеленение территории",
        "Открытые гостевые парковки",
      ],
      Инфраструктура: [
        "Смарт-парк «Дельфин» перед жилым комплексом",
        "Детские сады в шаговой доступности",
        "Школы поблизости",
        "Медицинские учреждения",
        "Аптеки",
        "Продовольственные магазины",
      ],
    },
  },
  {
    id: 2,
    name: "Z-town",
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/IMG_6026.jpg-1oaF6YhJEhntQrshxrgdx6DKJV7l1p.jpeg",
    description: "Первый в России ЖК с отельным сервисом на берегу воронежского водохранилища",
    fullDescription: "Первый в России ЖК с отельным сервисом на берегу воронежского водохранилища",
    images: [
      {
        url: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/IMG_6026.jpg-1oaF6YhJEhntQrshxrgdx6DKJV7l1p.jpeg",
        alt: "Входная группа Z-town",
      },
      {
        url: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/IMG_6029.jpg-crkzOOQzer3a69LmuP9MYatfiaQQk5.jpeg",
        alt: "Стильная стойка ресепшн Z-town",
      },
      {
        url: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/IMG_6027.jpg-IdvfbcIbKcXj50HMqMduq5ZQVOAGDV.jpeg",
        alt: "Терраса на крыше Z-town",
      },
      {
        url: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/IMG_6090.jpg-4F9xqx5ANSvsBKQE4gfGkXpj4yYf3g.jpeg",
        alt: "Детская площадка Z-town",
      },
    ],
    details: {
      "О проекте": [
        "№1 в ТОПе новостроек Воронежской области по данным ЕРЗ",
        "Два корпуса этажностью 23 и 21",
        "Класс энергоэффективности А++",
        "Авторские фасады с архитектурной подсветкой",
        "Панорамное и теплое остекление с повышенной шумоизоляцией",
        "Французские балконы",
        "Безбарьерная среда",
      ],
      "Уникальная локация": [
        "Тихий спальный район экологически чистого Железнодорожного района города",
        "На берегу Воронежского водохранилища (50 метров) с потрясающими видами из окон",
        "В непосредственной близости с естественной лесной зоной",
        "Вдали от шума, больших транспортных потоков",
        "До центра города 15 минут на машине",
      ],
      Отделка: [
        "Предчистовая отделка White box с розетками, выключателями и кондиционерами",
        "Чистовая отделка по индивидуальным дизайнерским проектам",
        "4 типа отделки 'под ключ' на выбор от Light до Cool",
        "Квартиры без отделки (со свободной планировкой)",
      ],
      Инфраструктура: [
        "Подземный паркинг с доступом на лифте",
        "Зарядки для электромобилей",
        "Мойка самообслуживания",
        "Кладовые помещения",
      ],
      "Элементы отельного сервиса": [
        "Консьерж-служба",
        "Комьюнити центр с коворкинг-зоной",
        "Фитнес-зал только для жителей",
        "Душевая для собак",
        "Колясочная",
        "Прачечная и гладильная самообслуживания",
        "Дополнительные услуги: клининг, глажка, стирка, выгул собак",
      ],
    },
  },
  {
    id: 3,
    name: "45 Квартал",
    image:
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/PHOTO-2024-11-25-16-14-25.jpg-gYTtYOpkZySXffDC5T9zJTqgir4Ghu.jpeg",
    description: "Современный жилой проект с комфортным и удобным жильем для семей",
    fullDescription:
      "Жилой комплекс '45 Квартал' — это современный жилой проект, предлагающий комфортное и удобное жилье для семей и индивидуальных жителей. Комплекс включает в себя многоэтажные дома с разнообразными планировками квартир, от студий до трехкомнатных.",
    images: [
      {
        url: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/PHOTO-2024-11-25-16-03-44.jpg-FiPCrj8H2Rzow0tO33uWJapi8wPJDO.jpeg",
        alt: "Входная группа ЖК 45 Квартал",
      },
      {
        url: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/PHOTO-2024-11-25-16-14-25.jpg-gYTtYOpkZySXffDC5T9zJTqgir4Ghu.jpeg",
        alt: "Фасад здания ЖК 45 Квартал",
      },
      {
        url: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/PHOTO-2024-11-25-16-14-31.jpg-SuDq6DIuRgF7ZK6Ww6UVxUxOvnLmJ9.jpeg",
        alt: "Детская площадка ЖК 45 Квартал",
      },
      {
        url: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/PHOTO-2024-11-25-16-14-29.jpg-tAOTXfIfx8HU3zV4gT5Ce34Aqmzgqz.jpeg",
        alt: "Игровая зона ЖК 45 Квартал",
      },
      {
        url: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/PHOTO-2024-11-25-16-03-45.jpg-Xzz6JPCvwc0eNO2gRgFTH9htTxjc5f.jpeg",
        alt: "Панорамный вид ЖК 45 Квартал",
      },
      {
        url: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/PHOTO-2024-11-25-16-14-21.jpg-Kh3Y9qZesGHGcEDr9VzKz9y23AYsun.jpeg",
        alt: "Вход в подъезд ЖК 45 Квартал",
      },
    ],
    details: {
      Инфраструктура: ["Внутренние дворы", "Детские площадки", "Зоны для отдыха", "Спортивные площадки"],
      Расположение: [
        "Близость к общественному транспорту",
        "Магазины в шаговой доступности",
        "Школы поблизости",
        "Медицинские учреждения рядом",
      ],
      Технологии: ["Энергоэффективные системы", "Системы безопасности", "Умные технологии для управления жильем"],
      Благоустройство: ["Ландшафтный дизайн", "Парки и скверы для прогулок", "Зоны отдыха", "Озеленение территории"],
    },
  },
  {
    id: 4,
    name: "Ключи Club",
    image:
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/PHOTO-2024-12-09-20-07-50.jpg-DA7Ut21wbXDsLCnFdginNaX41WkmLJ.jpeg",
    description: "Современный жилой комплекс на въезде в Воронеж по тамбовской трассе",
    fullDescription:
      "Жилой комплекс «Ключи Club» является частью жилого квартала «Ключи» – масштабного проекта развития территории площадью 28,6 га, расположенной на въезде в Воронеж по тамбовской трассе (ул. Остужева, д 52/5).",
    images: [
      {
        url: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/PHOTO-2024-12-09-20-07-50.jpg-DA7Ut21wbXDsLCnFdginNaX41WkmLJ.jpeg",
        alt: "Фасад ЖК Ключи Club",
      },
      {
        url: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/PHOTO-2024-12-09-20-07-53.jpg-qxUndJRawCaEKxlqQlqrjupjZdNnKY.jpeg",
        alt: "Интерьер квартиры в ЖК Ключи Club",
      },
      {
        url: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/PHOTO-2024-12-09-20-08-09.jpg-xz7ovAJLY5ptf7jktwNHXtiBY8qd9y.jpeg",
        alt: "Холл ЖК Ключи Club",
      },
      {
        url: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/PHOTO-2024-12-09-20-05-54.jpg-wsHUc1iK5wQj3meuRKjS9xe774NA9D.jpeg",
        alt: "Территория ЖК Ключи Club",
      },
      {
        url: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/PHOTO-2024-12-09-20-08-08.jpg-ZhhtD3wJmevW0blfbdXziHrj82KCFu.jpeg",
        alt: "Дизайн этажа ЖК Ключи Club",
      },
      {
        url: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/PHOTO-2024-12-09-20-05-55.jpg-I7fYQFo0RIkxVFkyTyVqDSiJ3uH4IA.jpeg",
        alt: "Строительство ЖК Ключи Club",
      },
      {
        url: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/PHOTO-2024-12-09-20-05-53.jpg-N0MHpbE8lN43Srzzof6idUAghDYeYi.jpeg",
        alt: "Архитектурные детали ЖК Ключи Club",
      },
    ],
    details: {
      "Расположение и транспорт": [
        "5 минут до Остужевского кольца",
        "15 минут до центра",
        "Новая транспортная развязка",
        "Школа в 3 минутах пешком",
        "Детский сад в 1 минуте пешком",
        "Стадион в 7 минутах пешком",
      ],
      "Особенности комплекса": [
        "Собственный подземный паркинг со спуском на лифте",
        "Все квартиры оборудованы кондиционерами (в каждой комнате и на кухне)",
        "Бесплатная детская игровая комната",
        "Все квартиры сдаются с качественной отделкой White box",
        "Возможно выполнение чистовой отделки",
      ],
      Территория: [
        "Закрытый двор без машин",
        "Современные детские площадки",
        "Зоны отдыха",
        "Ландшафтный дизайн",
        "Видеонаблюдение территории",
      ],
      Инфраструктура: [
        "Коммерческие помещения на первых этажах",
        "Подземный паркинг",
        "Колясочные",
        "Современные входные группы",
        "Высокоскоростные лифты",
      ],
    },
  },
  {
    id: 5,
    name: "Яблоневые сады",
    image:
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/PHOTO-2024-12-10-09-33-23.jpg-9CmzPvAfPzmEAxkIO78ihYV8o2ny5Y.jpeg",
    description: "«Город-парк» на территории 52 га с развитой инфраструктурой (Застройщик «ДСК»)",
    fullDescription:
      "Жилой комплекс «Яблоневые сады» (Застройщик «ДСК») находится в границах улиц Ломоносова, Загоровского и Московского проспекта. Это «город-парк» на территории 52 га земли, в котором будут возведены жилые дома высотой от 12 до 22 этажей.",
    images: [
      {
        url: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/PHOTO-2024-12-10-09-33-23.jpg-9CmzPvAfPzmEAxkIO78ihYV8o2ny5Y.jpeg",
        alt: "Входная группа ЖК Яблоневые сады",
      },
      {
        url: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/PHOTO-2024-12-10-09-33-16.jpg-Ta0zfsk0lVxl9aTDxJaijYAhtNH2lc.jpeg",
        alt: "Территория ЖК Яблоневые сады",
      },
      {
        url: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/PHOTO-2024-12-10-09-33-14.jpg-ghKtGM2A5P2CoZagvTi7XINLGlX9eB.jpeg",
        alt: "Подъезд ЖК Яблоневые сады",
      },
      {
        url: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/PHOTO-2024-12-10-09-33-29.jpg-WWtHVXj4ADcTwXxgM2TGsK9Jgle6KT.jpeg",
        alt: "Кухня в ЖК Яблоневые сады",
      },
      {
        url: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/PHOTO-2024-12-10-09-33-45.jpg-DyqAgcDc1JeY9vZCjUyD269ireevdT.jpeg",
        alt: "Гостиная в ЖК Яблоневые сады",
      },
      {
        url: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/PHOTO-2024-12-10-09-33-18.jpg-GuyrMjJWRbFHc6yB7JbDGtUlZx9lOY.jpeg",
        alt: "Фасад ЖК Яблоневые сады",
      },
      {
        url: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/PHOTO-2024-12-10-09-33-22.jpg-8varT9cVRjPfJ1crLkslCo2IocJfmM.jpeg",
        alt: "Детская площадка ЖК Яблоневые сады",
      },
    ],
    details: {
      Образование: [
        "Самая большая в России школа на 2 860 мест",
        "Детский сад на 600 мест",
        "Детская школа искусств на 1 400 мест с инновационной библиотекой",
      ],
      Инфраструктура: [
        "Поликлиника с подстанцией скорой помощи",
        "Спортивный комплекс для 42 видов спорта",
        "25 спортивных залов",
        "Деловые центры",
        "Торгово-развлекательные комплексы",
        "2 действующие школы",
        "4 действующих детских сада",
        "Церковь",
      ],
      "Транспортная доступность": [
        "Строительство 4-полосной дороги по ул. Загоровского",
        "Расширение ул. Ломоносова (2,6 км)",
        "Развитая дорожно-транспортная инфраструктура",
      ],
      Безопасность: [
        "Домофоны при входе в подъезды",
        "Система видеонаблюдения в местах общего пользования",
        "Система противодымной вентиляции",
        "Автоматическая система пожаротушения",
        "Пожарная сигнализация",
        "Бытовые пожарные краны в каждой квартире",
      ],
    },
  },
  {
    id: 6,
    name: "Финский квартал",
    image:
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/PHOTO-2024-12-09-20-08-57.jpg-UDcnB6b88rTGPuiJn5dTn8wOuAIS2D.jpeg",
    description: "Новый формат городского жилья с финской философией домостроения",
    fullDescription:
      "«Финский квартал» — это новый формат городского жилья, с впечатляющей территорией и продуманной философией жилья. В основе проекта — финская философия домостроения. Жилой комплекс расположен в экологически чистом районе - Яменском сельском поселении, в пяти минутах езды от города, напротив Сити-парка «Град».",
    images: [
      {
        url: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/PHOTO-2024-12-09-20-08-57.jpg-UDcnB6b88rTGPuiJn5dTn8wOuAIS2D.jpeg",
        alt: "Фасад ЖК Финский квартал",
      },
      {
        url: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/PHOTO-2024-12-09-20-08-40.jpg-pdauNnCkHIGldg7hIACxQSwLXt4EcH.jpeg",
        alt: "Интерьер квартиры в ЖК Финский квартал",
      },
      {
        url: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/PHOTO-2024-12-09-20-08-39.jpg-OstyImRzdiSSfOZtmSYcU8qHIQogEj.jpeg",
        alt: "Детская площадка ЖК Финский квартал",
      },
      {
        url: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/PHOTO-2024-12-09-20-08-54.jpg-RYaugrgXt4TkAVxsjnLEZLK8MBnCAK.jpeg",
        alt: "Коридор ЖК Финский квартал",
      },
      {
        url: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/PHOTO-2024-12-09-20-08-47.jpg-nxWZvHDVoIbafyj4U71aes9RY8Vcvd.jpeg",
        alt: "Дизайн холла ЖК Финский квартал",
      },
      {
        url: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/PHOTO-2024-12-09-20-08-56.jpg-OarEtUvUch5b0TlaRdQ1SNtp6qvWNL.jpeg",
        alt: "Технологии ЖК Финский квартал",
      },
      {
        url: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/PHOTO-2024-12-09-20-08-55.jpg-a7EAwdvQxNxTy8W7VOkdPMnar1YM2A.jpeg",
        alt: "Навигация ЖК Финский квартал",
      },
    ],
    details: {
      "О проекте": [
        "Кирпичное домостроение с монолитным плитным фундаментом",
        "Финская философия домостроения",
        "Расположен в экологически чистом районе",
        "5 минут езды от города",
        "Напротив Сити-парка «Град»",
      ],
      "Концепция безопасности": [
        "Двор без машин",
        "Территория огорожена по периметру",
        "Безопасная среда для детей",
        "Высокая обеспеченность парковочными местами",
      ],
      Инфраструктура: [
        "Велодорожки, соединяющие объекты комплекса",
        "Современные детские игровые комплексы",
        "Площадки с уличными тренажёрами",
        "Зоны воркаута",
        "Места для отдыха",
      ],
      Благоустройство: [
        "Три функциональные зоны в каждом дворе",
        "Детская зона с развивающими комплексами",
        "Активная зона для занятий спортом",
        "Зона отдыха для всех возрастов",
        "Современное озеленение территории",
      ],
    },
  },
  {
    id: 7,
    name: "Яблоневые сады (Выбор)",
    image:
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/PHOTO-2024-12-09-19-26-30.jpg-LklBE7eOLW32su11N0VRPzhsqYxdpo.jpeg",
    description: "Город-парк с многофункциональной инфраструктурой и выгодной локацией (застройщик «Выбор»)",
    fullDescription:
      "ЖК «Яблоневые сады» (застройщик «Выбор») – город-парк с многофункциональной инфраструктурой и выгодной локацией. В жилом комплексе проектом предусмотрено 11 жилых домов (2 уже сданы) с использованием технологий монолитного и объемно-блочного домостроения.",
    images: [
      {
        url: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/PHOTO-2024-12-09-19-26-30.jpg-LklBE7eOLW32su11N0VRPzhsqYxdpo.jpeg",
        alt: "Территория ЖК Яблоневые сады от застройщика Выбор",
      },
      {
        url: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/PHOTO-2024-12-09-19-26-01.jpg-okvNocsHNH6rtsPB021zUe42UApoeV.jpeg",
        alt: "Фасад здания ЖК Яблоневые сады от застройщика Выбор",
      },
    ],
    details: {
      "О проекте": [
        "Комплекс из 17/21 этажных жилых домов",
        "11 жилых домов (2 уже сданы)",
        "Технологии монолитного и объемно-блочного домостроения",
        "Большой выбор просторных и функциональных планировок",
      ],
      Инфраструктура: [
        "Современный образовательный комплекс",
        "Мега-школа",
        "Школы и детские сады",
        "Поликлиника",
        "Детская школа искусств на 1400 мест",
        "Спорткомплекс для занятий 42 видами спорта",
      ],
      "Безопасность и комфорт": [
        "Уютные дворовые пространства без машин",
        "Система видеонаблюдения",
        "Возможность дистанционного управления домофоном со смартфона",
      ],
      Расположение: ["Рядом лесопарк", "Ботанический сад", "Центральный парк", "15 минут до центра города"],
    },
  },
  {
    id: 8,
    name: 'ЖК "Ю"',
    image:
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/PHOTO-2024-12-12-18-08-07.jpg-DU5pyHEfhkcur9nkba2St1QgVWUtlM.jpeg",
    description: "Современный жилой комплекс в Левобережном районе с развитой инфраструктурой",
    fullDescription:
      "Жилoй комплeкс «Ю» располoжeн в Левобеpежнoм районе Boронежа пo ул. Цимлянскaя, 10В, в 15 минутах езды от центра города, в районе со сложившейся, максимально развитой инфраструктурой. Во дворе разместятся детские площадки с современным игровым оборудованием и безопасным усовершенствованным покрытием.",
    images: [
      {
        url: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/PHOTO-2024-12-12-18-08-07.jpg-DU5pyHEfhkcur9nkba2St1QgVWUtlM.jpeg",
        alt: "Фасад ЖК Ю",
      },
      {
        url: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/PHOTO-2024-12-12-18-08-05.jpg-hZ2fKInOLKJDHYUrgfk7AZ3aMlEa0d.jpeg",
        alt: "Территория ЖК Ю",
      },
      {
        url: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/PHOTO-2024-12-12-18-08-08.jpg-RTWnFsmOqp440UcS2xajit2VrQd87O.jpeg",
        alt: "Интерьер квартиры в ЖК Ю",
      },
      {
        url: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/PHOTO-2024-12-12-18-08-13.jpg-ToUEhnLHyum6Gn7L7sdxJclEiTPuu9.jpeg",
        alt: "Вид из окна ЖК Ю",
      },
      {
        url: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/PHOTO-2024-12-12-18-13-52.jpg-RjHo4vjzqD7xTgGcqzjiPLTd5skzo6.jpeg",
        alt: "Балкон в ЖК Ю",
      },
      {
        url: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/PHOTO-2024-12-12-18-13-55.jpg-beWiRGonOu4EN8WLi9LkC4nduDYZqK.jpeg",
        alt: "Планировка квартиры в ЖК Ю",
      },
      {
        url: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/PHOTO-2024-12-12-18-13-48.jpg-X1jjHB9428mKfg8LBc1uKHYne8Xsvv.jpeg",
        alt: "Внутренняя отделка в ЖК Ю",
      },
    ],
    details: {
      Расположение: [
        "15 минут езды от центра города",
        "Левобережный район Воронежа",
        "ул. Цимлянская, 10В",
        "Рядом парк «Южный»",
        "Современный плавательный бассейн «Волна»",
      ],
      Территория: [
        "Детские площадки с современным оборудованием",
        "Безопасное усовершенствованное покрытие",
        "Зонирование по возрастам",
        "Места для отдыха взрослых",
      ],
      Инфраструктура: ["Развитая инфраструктура района", "Прогулочные зоны", "Спортивные объекты", "Места для отдыха"],
      "Особенности проекта": [
        "Продуманное зонирование территории",
        "Комфортная среда для всех возрастов",
        "Современные планировочные решения",
        "Качественные строительные материалы",
      ],
    },
  },
]

const HousingComplexes = () => {
  const [selectedComplex, setSelectedComplex] = useState<(typeof complexes)[0] | null>(null)
  const [fullSizeImage, setFullSizeImage] = useState<string | null>(null)

  const handleImageClick = (imageUrl: string) => {
    setFullSizeImage(imageUrl)
  }

  return (
    <section id="complexes" className="py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-extrabold text-gray-900 mb-8">Наши жилые комплексы</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {complexes.map((complex) => (
            <div
              key={complex.id}
              className="bg-white rounded-lg overflow-hidden shadow-lg transition-transform duration-300 hover:scale-105 flex flex-col"
            >
              <Image
                src={complex.image || "/placeholder.svg"}
                alt={complex.name}
                width={400}
                height={300}
                className="w-full h-48 sm:h-56 object-cover"
              />
              <div className="p-4 sm:p-6 flex-grow flex flex-col">
                <h3 className="text-lg sm:text-xl font-semibold text-gray-900 mb-2">{complex.name}</h3>
                <p className="text-sm sm:text-base text-gray-600 mb-4 flex-grow">{complex.description}</p>
                <Button variant="outline" onClick={() => setSelectedComplex(complex)} className="mt-auto">
                  Подробнее
                </Button>
              </div>
            </div>
          ))}
        </div>
      </div>
      {selectedComplex && (
        <Modal
          isOpen={!!selectedComplex}
          onClose={() => setSelectedComplex(null)}
          title={selectedComplex.name}
          description={selectedComplex.fullDescription}
          images={selectedComplex.images}
          details={selectedComplex.details}
          fullSizeImage={fullSizeImage || ""}
          handleImageClick={handleImageClick}
        />
      )}
    </section>
  )
}

export default HousingComplexes

