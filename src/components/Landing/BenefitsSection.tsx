import styled from 'styled-components'
import BFit1 from '../../assets/img/1-01.png'
import BFit4 from '../../assets/img/2-01.png'
import BFit2 from '../../assets/img/3-01.png'
import BFit3 from '../../assets/img/4-01.png'

const Benefitdata = [
  {
    id: 1,
    title: '80% Reward for LPs',
    text: 'Provide liquidity to earn from trading and limit order fees',
    img: `${BFit1}`,
  },
  {
    id: 2,
    title: 'Flexible Trading & Low Slippage',
    text: 'Trading from 0.015% fee along with lower slippage and optimized routes',
    img: `${BFit2}`,
  },
  {
    id: 3,
    title: 'Limit Order with 0% Fee',
    text: 'Make a limit order no trading fee and slippage',
    img: `${BFit3}`,
  },
  {
    id: 4,
    title: 'One-transaction V3 Farms',
    text: 'Automatically participate in an active V3 Farms by getting into price range as LP.',
    img: `${BFit4}`,
  },
]

const BenefitsSection = () => {
  return (
    <Container>
      {Benefitdata.map((data) => (
        <Card key={data.id}>
          <ImgWrapper>
            <img src={data.img} alt={data.title} />
          </ImgWrapper>
          <TextWrapper>
            <Title>{data.title}</Title>
            <Description>{data.text}</Description>
          </TextWrapper>
        </Card>
      ))}
    </Container>
  )
}

export default BenefitsSection

/* ---------- Styled Components ---------- */
const Container = styled.div`
  display: grid;
  gap: 1.5rem;
  padding: 0 1rem;
  margin: 1rem 0 4rem 0;
  grid-template-columns: repeat(1, 1fr);

  @media (min-width: 768px) {
    grid-template-columns: repeat(2, 1fr);
  }
  @media (min-width: 1024px) {
    grid-template-columns: repeat(4, 1fr);
  }
`

const Card = styled.div`
  background: #fff;
  border-radius: 0.75rem;
  width: 90%;
  margin: 0 auto;
  padding: 1.5rem 0;
  text-align: center;
  transition: background 0.3s;

  &:hover {
    background: #f2f6fc;
  }
`

const ImgWrapper = styled.div`
  margin-bottom: 1rem;

  img {
    width: 200px;
    margin: 0 auto;
  }
`

const TextWrapper = styled.div`
  text-align: center;
`

const Title = styled.h1`
  font-weight: bold;
  font-size: 16px;
  color: #000;
`

const Description = styled.p`
  font-weight: 500;
  font-size: 12px;
  line-height: 1.2;
  color: #708db7;
  width: 70%;
  margin: 0.5rem auto 0 auto;
`
