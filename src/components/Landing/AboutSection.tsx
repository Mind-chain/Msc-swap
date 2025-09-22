import React from 'react'
import { Play } from 'react-feather'
import styled, { keyframes } from 'styled-components'
import ey1 from '../../assets/about/BNBChain.png'
import ey2 from '../../assets/about/Bybit.png'
import ey3 from '../../assets/about/CoinGecko.png'
import ey4 from '../../assets/about/CoinMarketA1ap.png'
import ey5 from '../../assets/about/Cryptorank.png'
import ey6 from '../../assets/about/DappRadar (1).png'
import ey7 from '../../assets/about/Faraland.png'
import ey8 from '../../assets/about/Floki.png'
import ey9 from '../../assets/about/Iguverse.png'
import ey10 from '../../assets/about/Kucoin.png'
import ey11 from '../../assets/about/MathWallet.png'
import ey12 from '../../assets/about/Mexc.png'
import Binaceimg from '../../assets/img/Main Logo Multi Color-01.png'
import Aboutimg from '../../assets/img/maindswap-01.jpg'

const AboutSection: React.FC = () => {
  const images = [ey1, ey2, ey3, ey4, ey5, ey6, ey7, ey8, ey9, ey10, ey11, ey12]

  return (
    <SectionWrapper>
      {/* Left-Right Content */}
      <ContentWrapper>
        <LeftContent>
          <Heading>What Is Mindchain (MIND)?</Heading>
          <Description>
            Mindchain is a decentralized exchange (DEX) that allows users to swap tokens on the Mind Smart Chain.
            Besides having a novel referral system and low trading fees, Biswap also offers an assortment of products
            and services.
          </Description>
          <IconWrapper>
            <img src={Binaceimg} alt="Binance Icon" />
          </IconWrapper>
        </LeftContent>

        <RightContent style={{ backgroundImage: `url(${Aboutimg})` }}>
          <PlayButton href="https://youtu.be/O4Pm0LXbjHY?si=XUWgvn6r4ZIZ_IFn" target="_blank" rel="noopener noreferrer">
            <Play />
          </PlayButton>
        </RightContent>
      </ContentWrapper>

      {/* Slider Section */}
      <SliderSection>
        <Heading2>Exchanges</Heading2>
        {/* Slider Row */}
        <SliderContainer>
          <SliderRow>
            {images.map((img) => (
              <Slide key={img}>
                <img src={img} alt="Crypto Exchange" />
              </Slide>
            ))}
          </SliderRow>
        </SliderContainer>

        <Heading2>Crypto Images</Heading2>
        <SliderContainer>
          <SliderRowReverse>
            {images.map((img) => (
              <Slide key={img}>
                <img src={img} alt="Crypto Exchange" />
              </Slide>
            ))}
          </SliderRowReverse>
        </SliderContainer>
      </SliderSection>
    </SectionWrapper>
  )
}

export default AboutSection

/* ---------------- Styled Components ---------------- */

const SectionWrapper = styled.section`
  width: 100%;
  min-height: 140vh;
  background: #1f2029;
  color: #fff;
  padding: 4rem 1rem;
`

const ContentWrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 90%;
  margin: auto;
  gap: 2rem;

  @media (min-width: 1024px) {
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    // height: 60vh;
  }
`

const LeftContent = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  gap: 2rem;
`

const Heading = styled.h1`
  font-size: 2.2rem;
  font-weight: 500;
  color: #f0b90b;

  @media (min-width: 1024px) {
    font-size: 3rem;
  }
`
const Heading2 = styled.h2`
  font-size: 2rem;
  font-weight: 500;
  color: #fff;
  margin-bottom: 2rem;
  text-align: center;

  @media (min-width: 1024px) {
    font-size: 2.5rem;
    margin-bottom: 3rem;
  }
`

const Description = styled.p`
  font-size: 1rem;
  font-weight: 500;
  line-height: 1.6;
  color: #fff;
`

const IconWrapper = styled.div`
  padding: 0.5rem;
  border-radius: 1rem;
  display: inline-flex;
  justify-content: center;
  img {
    width: 140px;
    display: block;
  }
`
const RightContent = styled.div`
  flex: 1;
  aspect-ratio: 16/9; /* ensures proportional height */
  border-radius: 1rem;
  margin-top: 2rem;
  position: relative;
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  display: flex;
  justify-content: center;
  align-items: center;

  @media (min-width: 1024px) {
    aspect-ratio: auto;
    height: 500px;
    margin-top: 0;
  }
`

const PlayButton = styled.a`
  width: 50px;
  height: 50px;
  background: #f0b90b;
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  transition: all 0.3s ease;

  &:hover {
    transform: scale(1.1);
  }

  svg {
    color: #fff;
    font-size: 1.2rem;
  }

  @media (min-width: 640px) {
    width: 60px;
    height: 60px;

    svg {
      font-size: 1.5rem;
    }
  }
`

/* Slider Section */
const SliderSection = styled.div`
  background: #1f2029;
  padding: 5rem 0;
  margin-top: 5rem;
`

const SliderContainer = styled.div`
  overflow: hidden;
  position: relative;
  margin-bottom: 3rem;
`

const scroll = keyframes`
  0% { transform: translateX(0); }
  100% { transform: translateX(-50%); }
`

const scrollReverse = keyframes`
  0% { transform: translateX(-50%); }
  100% { transform: translateX(0); }
`

const SliderRow = styled.div`
  display: flex;
  gap: 2rem;
  animation: ${scroll} 30s linear infinite;

  &:hover {
    animation-play-state: paused;
  }
`

const SliderRowReverse = styled(SliderRow)`
  animation: ${scrollReverse} 30s linear infinite;
`

const Slide = styled.div`
  flex-shrink: 0;
  width: 140px;

  //   img {
  //     width: 120px;
  //     height: 40px;
  //     object-fit: contain;
  //     opacity: 0.6;
  //     transition: opacity 0.3s;

  //     &:hover {
  //       opacity: 1;
  //     }
  //   }
`
