import styled from "styled-components";

export const HeroSection = styled.section`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 60px;
  background: #1a1a22;
`;

export const HeroText = styled.div`
  max-width: 50%;

  h2 {
    font-size: 2.5rem;
    margin-bottom: 20px;
  }

  p {
    font-size: 1.2rem;
    margin-bottom: 30px;
  }

  .cta {
    display: flex;
    gap: 15px;
  }
`;

export const HeroStats = styled.div`
  display: flex;
  gap: 20px;
  margin-top: 30px;

  .card {
    background: #131318;
    padding: 20px;
    border-radius: 12px;
    min-width: 200px;
    text-align: center;
  }
`;
