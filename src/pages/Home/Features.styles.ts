import styled from "styled-components";

export const FeaturesSection = styled.section`
  padding: 80px 60px;
  background: #0f0f14;
  color: #fff;

  h3 {
    font-size: 2rem;
    margin-bottom: 40px;
    text-align: center;
  }
`;

export const FeatureGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 30px;
`;

export const FeatureCard = styled.div`
  background: #1f1f26;
  padding: 30px;
  border-radius: 12px;
  text-align: center;
`;
