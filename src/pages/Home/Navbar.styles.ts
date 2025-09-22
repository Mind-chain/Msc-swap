import styled from "styled-components";

export const NavbarContainer = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 20px 60px;
  background: #131318;

  @media (max-width: 768px) {
    flex-direction: column;
    padding: 15px 30px;
    gap: 15px;
  }
`;

export const Logo = styled.h1`
  font-size: 1.5rem;
  font-weight: bold;

  @media (max-width: 768px) {
    font-size: 1.3rem;
  }
`;

export const NavLinks = styled.div`
  display: flex;
  gap: 20px;

  a {
    color: white;
    text-decoration: none;
    font-weight: 500;
    &:hover {
      color: #facc15;
    }
  }

  @media (max-width: 768px) {
    flex-direction: column;
    align-items: center;
    gap: 10px;
  }
`;

export const Button = styled.button`
  background: #facc15;
  padding: 10px 20px;
  border: none;
  border-radius: 6px;
  cursor: pointer;
  font-weight: 600;

  &:hover {
    background: #ffbb38;
  }

  @media (max-width: 768px) {
    width: 100%;
    text-align: center;
  }
`;
