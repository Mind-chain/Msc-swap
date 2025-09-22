import { useState } from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <NavbarContainer>
      <Logo>MindChainSwap</Logo>
      <Hamburger onClick={() => setIsOpen(!isOpen)}>
        <span />
        <span />
        <span />
      </Hamburger>
      <NavLinks isOpen={isOpen}>
        <Link to="/swap">swap</Link>
        <Link to="/">Trade</Link>
        <Link to="/earn">Earn</Link>
        <Link to="/win">Win</Link>
        <Button>Connect Wallet</Button>
      </NavLinks>
    </NavbarContainer>
  )
}

export default Navbar

// Styled Components
export const NavbarContainer = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 20px 60px;
  background: #131318;
  position: relative;

  @media (max-width: 768px) {
    flex-direction: row;
  }
`

export const Logo = styled.h1`
  font-size: 1.5rem;
  font-weight: bold;
  color: white;
  z-index: 2;
`

export const NavLinks = styled.div<{ isOpen: boolean }>`
  display: flex;
  gap: 20px;
  align-items: center;

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
    background: #131318;
    position: absolute;
    top: ${({ isOpen }) => (isOpen ? '60px' : '-40px')};
    right: 0;
    width: 100%;
    padding: 20px 0;
    transition: all 0.3s ease;
    max-height: ${({ isOpen }) => (isOpen ? '300px' : '0')};
    overflow: hidden;
  }
`

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
    // width: 90%;
    margin: 10px 0;
  }
`

export const Hamburger = styled.div`
  display: none;
  flex-direction: column;
  cursor: pointer;
  gap: 5px;

  span {
    width: 25px;
    height: 3px;
    background: white;
    border-radius: 2px;
  }

  @media (max-width: 768px) {
    display: flex;
    z-index: 2;
  }
`
