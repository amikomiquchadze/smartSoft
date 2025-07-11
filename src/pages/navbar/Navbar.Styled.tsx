import styled from "@emotion/styled";
import { Link } from "react-router-dom";
import { Colors } from ".././/../styles/Colors";
const { lighgray, red, lightblue3, blueandgray, darkred, bggrey } = Colors;
export const Nav = styled.header`
  position: relative;
  background: #fff;
  padding: 0.75rem 2rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
`;

export const Left = styled.div`
  display: flex;
  align-items: center;
  gap: 1.5rem;
  @media (max-width: 768px) {
    flex-direction: row-reverse;
  }
`;

export const Logo = styled(Link)`
  font-size: 1.25rem;
  font-weight: 700;
  color: ${lightblue3};
  text-decoration: none;
`;

export const Hamburger = styled.button`
  display: none;
  background: none;
  border: none;
  cursor: pointer;

  svg {
    width: 1.5rem;
    height: 1.5rem;
    color: ${lighgray};
  }

  @media (max-width: 768px) {
    display: block;
  }
`;

export const Menu = styled.nav`
  display: flex;
  align-items: center;
  gap: 1.5rem;

  @media (max-width: 768px) {
    display: none;
    flex-direction: column;
    background: #fff;
    position: absolute;
    top: 100%;
    left: 0;
    right: 0;
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
    padding: 1rem 0;
    z-index: 10;
  }

  &.open {
    @media (max-width: 768px) {
      display: flex;
    }
  }
`;

export const NavLink = styled(Link)`
  font-size: 1rem;
  font-weight: 600;
  color: ${blueandgray};
  text-decoration: none;
  transition: color 0.2s;

  &:hover {
    color: ${lightblue3};
  }
`;

export const UserSection = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
`;

export const Username = styled.span`
  font-size: 1rem;
  font-weight: 600;
  color: ${blueandgray};

  @media (max-width: 768px) {
    padding-right: 15px;
  }
`;

export const LogoutButton = styled.button`
  padding: 0.5rem 1rem;
  background: ${red};
  color: #fff;
  border: none;
  border-radius: 0.5rem;
  cursor: pointer;
  font-size: 0.875rem;
  font-weight: 600;
  transition: background 0.2s;

  &:hover {
    background: ${darkred};
  }

  @media (max-width: 768px) {
    display: none;
  }
`;

export const LogoutMenuItem = styled.button`
  display: none;
  background: none;
  border: none;
  width: 100%;
  text-align: center;
  padding: 0.75rem 1rem;
  font-size: 1rem;
  font-weight: 600;
  color: ${red};
  cursor: pointer;
  border-radius: 0.5rem;
  transition: background 0.2s;

  &:hover {
    background: ${bggrey};
  }

  @media (max-width: 768px) {
    display: block;
  }
`;
