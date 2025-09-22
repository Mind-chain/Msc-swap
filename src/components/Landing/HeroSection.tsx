import styled from 'styled-components'
import image from '../../assets/MIND-01-01.png'
import { Button } from './Navbar' // reuse button from navbar

const HeroSection = () => {
  return (
    <Section>
      <HeroText>
        <h2>Swap and Earn With Your Favorite Assets</h2>
        <p>Together we can make the MindChainSwap community stronger.</p>

        {/* CTA Buttons */}
        <div className="cta">
          <Button>Trade Now</Button>
          <Button>Join DeFi</Button>
        </div>

        <HeroStats>
          <StatCard>
            <h4>
              LP rewards from <br /> trading & limit orders
            </h4>
            <p>80%</p>
          </StatCard>

          <StatCard>
            <h4>fee for limit orders</h4>
            <p>0%</p>
          </StatCard>
        </HeroStats>
      </HeroText>

      {/* Hero Image */}
      <ImageContainer>
        <img src={image} alt="Hero" />
        <CardsContainer>
          <GlassyCard>
            <div>
              <h4>Total Value Locked</h4>
              <p>$35,244,761</p>
            </div>
            <div>
              <h4>Total Trading Volume</h4>
              <p>$48,671,134,802</p>
            </div>
          </GlassyCard>
        </CardsContainer>
      </ImageContainer>
    </Section>
  )
}

export default HeroSection

// Styled Components
const Section = styled.section`
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  background: #1a1a1f;
  color: white;
  flex-wrap: wrap;
  padding: 60px;

  @media (max-width: 1024px) {
    padding: 40px;
  }

  @media (max-width: 768px) {
    flex-direction: column;
    padding: 30px 20px;
  }
`

const HeroText = styled.div`
  flex: 1;
  min-width: 280px;
  padding-right: 40px;

  h2 {
    font-size: 2.5rem;
    margin-bottom: 20px;

    @media (max-width: 768px) {
      font-size: 2rem;
    }
  }

  p {
    font-size: 1.1rem;
    margin-bottom: 30px;
    max-width: 500px;
    color: #facc15;
  }

  .cta {
    display: flex;
    gap: 15px;
    flex-wrap: wrap;
    margin-bottom: 30px;
  }
`

const HeroStats = styled.div`
  display: flex;
  gap: 20px;
  flex-wrap: wrap;
`

const StatCard = styled.div`
  background: #131318;
  padding: 20px;
  border-radius: 10px;
  min-width: 150px;
  text-align: center;

  h4 {
    font-size: 0.9rem;
    // margin-bottom: 10px;
    color: #facc15;
  }

  p {
    font-size: 1.2rem;
    font-weight: bold;
    margin-bottom: 0px;
  }

  @media (max-width: 768px) {
    flex: 1 1 45%;
  }
`

const HeroImage = styled.div`
  flex: 1;
  display: flex;
  justify-content: flex-end;
  align-items: flex-start;

  img {
    width: 100%;
    height: auto;
  }

  @media (max-width: 768px) {
    display: none; /* hide image on mobile */
  }
`

// Styled Components
const ImageContainer = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  position: relative;

  img {
    width: 100%;
    height: auto;
    display: block;
    border-radius: 10px;
  }

  @media (max-width: 768px) {
    display: none; /* hide image and cards on mobile */
  }
`

const CardsContainer = styled.div`
  display: flex;
  gap: 20px;
  margin-top: -50px; /* overlap image slightly */
  z-index: 2;
`

const GlassyCard = styled.div`
  background: rgba(255, 255, 255, 0.1);
  backdrop-filter: blur(10px);
  padding: 20px 25px;
  border-radius: 8px;
  min-width: 150px;
  text-align: center;
  color: white;
  display: flex;
  gap: 30px;
  h4 {
    font-size: 0.9rem;
    margin-bottom: 10px;
    color: #f9a826;
  }

  p {
    font-size: 1.2rem;
    font-weight: bold;
  }
`
