import AboutSection from 'components/Landing/AboutSection'
import BenefitsSection from 'components/Landing/BenefitsSection'
import CryptoTicker from 'components/Landing/CryptoTicker'
import EfficientlySection from 'components/Landing/EfficientlySection'
import Footer from 'components/Landing/Footer'
import HeroSection from 'components/Landing/HeroSection'
import Navbar from 'components/Landing/Navbar'
import SliderSection from 'components/Landing/SliderSection'

const Landing = () => {
  return (
    <div
      style={{
        background: '#0f0f14',
        color: '#fff',
        fontFamily: "'Poppins', sans-serif",
        lineHeight: '1.3',
      }}
    >
      {/* Navbar */}

      <Navbar />

      <HeroSection />

      <CryptoTicker />

      <SliderSection />

      <EfficientlySection />

      <BenefitsSection />

      <AboutSection />
      <Footer />
      {/*  */}
    </div>
  )
}

export default Landing
