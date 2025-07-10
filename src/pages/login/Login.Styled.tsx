import { Link } from "react-router-dom";
import styled from "@emotion/styled";
import { Colors } from ".././/../styles/Colors";
const {
  lighgray,
  red,
  lightblue,
  gradientone,
  darkblue,

  whitepurple,
  gradientmain,
  gradientmain2,
  mainbg,
  mainplaceholder,
  disabled,
} = Colors;

export const Container = styled.div`
  min-height: 88vh;
  display: flex;
  align-items: center;
  justify-content: center;
  background: radial-gradient(
    circle at top left,
    ${gradientmain},
    ${gradientmain2}
  );
  padding: 1rem;
`;

export const Card = styled.div`
  position: relative;
  background: #fff;
  width: 360px;
  max-width: 100%;
  padding: 3rem 2rem 2rem;
  border-radius: 1rem;
  box-shadow: 0 10px 25px rgba(0, 0, 0, 0.1);
  text-align: center;
`;

export const Logo = styled.div`
  font-size: 1.5rem;
  font-weight: 700;
  color: ${gradientone};
  margin-bottom: 1rem;
`;

export const Title = styled.h2`
  margin-bottom: 1rem;
  color: ${darkblue};
  font-size: 1.5rem;
`;

export const Subtitle = styled.p`
  margin: 0 0 2rem;
  color: ${whitepurple};
  font-size: 0.875rem;
`;

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;

export const Field = styled.div`
  text-align: left;
`;

export const Label = styled.label`
  display: block;
  margin-bottom: 0.25rem;
  font-size: 0.875rem;
  color: ${lighgray};
`;

export const Input = styled.input<{ hasError?: boolean }>`
  width: 90%;
  padding: 0.75rem 1rem;
  border: 1px solid
    ${(p: { hasError: any }) => (p.hasError ? "#ef4444" : "#d1d5db")};
  border-radius: 0.75rem;
  font-size: 1rem;
  background: ${mainbg};
  &::placeholder {
    color: ${mainplaceholder};
  }
  &:focus {
    outline: none;
    border-color: ${gradientone};
    box-shadow: 0 0 0 2px rgba(102, 126, 234, 0.3);
  }
`;

export const Button = styled.button`
  margin-top: 1rem;
  padding: 0.75rem;
  background: ${gradientone};
  color: #fff;
  border: none;
  border-radius: 0.75rem;
  font-size: 1rem;
  font-weight: 600;
  cursor: pointer;
  transition: background 0.2s, transform 0.1s;
  &:hover:not(:disabled) {
    background: ${lightblue};
    transform: translateY(-1px);
  }
  &:disabled {
    background: ${disabled};
    cursor: not-allowed;
  }
`;

export const ErrorText = styled.p`
  margin: 0.5rem 0 0;
  color: ${red};
  font-size: 0.875rem;
  text-align: left;
`;

export const Footer = styled.p`
  margin-top: 1.5rem;
  font-size: 0.875rem;
  color: ${whitepurple};
`;

export const FooterLink = styled(Link)`
  color: ${gradientone};
  text-decoration: none;
  font-weight: 600;
  &:hover {
    text-decoration: underline;
  }
`;
