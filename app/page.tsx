import Navigation from "./components/Navigation"
import Banner from "./components/Banner"
import HousingComplexes from "./components/HousingComplexes"
import Apartments from "./components/Apartments"
import CreditCalculator from "./components/CreditCalculator"
import AboutCompany from "./components/AboutCompany"
import FAQ from "./components/FAQ"
import ContactForm from "./components/ContactForm"
import Footer from "./components/Footer"
import BuildingAnimation from "./components/BuildingAnimation"
import SectionSeparator from "./components/SectionSeparator"

export default function Home() {
  return (
    <div className="min-h-screen bg-white">
      <Navigation />
      <Banner />
      <main>
        <div className="bg-gray-50">
          <HousingComplexes />
        </div>
        <SectionSeparator />
        <div className="bg-white">
          <BuildingAnimation />
        </div>
        <SectionSeparator />
        <Apartments />
        <CreditCalculator />
        <AboutCompany />
        <FAQ />
        <ContactForm />
      </main>
      <Footer />
    </div>
  )
}

