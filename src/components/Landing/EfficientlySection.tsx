import { Effient } from 'context/allAsset'
import styled from 'styled-components'

const EfficientlySection = () => {
  return (
    <Wrapper>
      {/* Left Column */}
      <Column>
        <div style={{ height: '110px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
          <h2>Earn Crypto Efficiently</h2>
        </div>

        <Card variant="large">
          <ImageWrapper>
            <img src={Effient.eff1} alt="MIND Investment Pool" />
            <Badge>New</Badge>
          </ImageWrapper>

          <Info>
            <h2>MIND Investment Pool</h2>
            <p>Enjoy an inflow of MIND rewards, Real Yields in USDT, and voting power</p>
          </Info>
        </Card>
      </Column>

      {/* Center Column */}
      <Column>
        <Card variant="small">
          <Info>
            <h2>SWAP</h2>
            <p>Enjoy an inflow of MIND rewards, Real Yields in USDT, and voting power</p>
          </Info>
          <ImageWrapper variant="small">
            <img src={Effient.eff2} alt="Farm Small" />
          </ImageWrapper>
        </Card>

        <Card variant="large">
          <ImageWrapper>
            <img src={Effient.eff4} alt="Analytics" />
          </ImageWrapper>
          <Info>
            <h2>Farm</h2>
            <p>Automatically participate in V3 farming with high APY</p>
          </Info>
        </Card>
      </Column>

      {/* Right Column */}
      <Column>
        <Card variant="large">
          <ImageWrapper>
            <img src={Effient.eff3} alt="Liquidity" />
          </ImageWrapper>
          <Info>
            <h2>Analytics</h2>
            <p>Automatically participate in V3 farming with high APY</p>
          </Info>
        </Card>
        <Card variant="small">
          <Info>
            <h2>Liquidity</h2>
            <p>Enjoy an inflow of MIND rewards, Real Yields in USDT, and voting power</p>
          </Info>
          <ImageWrapper variant="small">
            <img src={Effient.eff5} alt="Farm Small" />
          </ImageWrapper>
        </Card>
      </Column>
    </Wrapper>
  )
}

export default EfficientlySection

// Styled Components
const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
  gap: 1rem;
  padding: 2rem;
  background: #0f0f10;

  @media (max-width: 1024px) {
    flex-direction: column;
    align-items: center;
  }
`

const Column = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  flex: 1;
`
const Card = styled.div<{ variant: 'large' | 'small' }>`
  background: #1f2029;
  border-radius: 1rem;
  overflow: hidden;
  display: flex;
  flex-direction: ${({ variant }) => (variant === 'large' ? 'column' : 'row')};
  align-items: center;
  justify-content: ${({ variant }) => (variant === 'small' ? 'space-between' : 'stretch')};
  padding: 12px;
  transition: transform 0.3s;
  height: ${({ variant }) => (variant === 'large' ? 'auto' : '120px')};
  gap: ${({ variant }) => (variant === 'small' ? '1rem' : '0')};

  &:hover {
    transform: translateY(-5px);
  }
`
const ImageWrapper = styled.div<{ variant?: 'large' | 'small' }>`
  position: relative;
  width: ${({ variant }) => (variant === 'small' ? '100px' : '100%')};
  height: ${({ variant }) => (variant === 'small' ? '100px' : 'auto')};
  aspect-ratio: ${({ variant }) => (variant === 'small' ? '1/1' : '16/9')}; // Large card: 16:9
  overflow: hidden;
  border-radius: ${({ variant }) => (variant === 'small' ? '0.5rem' : '1rem')};

  img {
    width: 100%;
    height: 100%;
    object-fit: contain; // cover → contain, যাতে full image দেখা যায়
    display: block;
  }
`

const Badge = styled.span`
  position: absolute;
  top: 10px;
  left: 10px;
  background: #22c55e;
  color: white;
  font-size: 10px;
  font-weight: bold;
  padding: 2px 6px;
  border-radius: 999px;
`

const Info = styled.div`
  padding: 1rem;
  display: flex;
  flex-direction: column;
  justify-content: center;

  h2 {
    font-size: 1.2rem;
    font-weight: bold;
    color: white;
    margin-bottom: 0.5rem;
  }

  p {
    font-size: 0.875rem;
    color: #fabf22;
  }
`
