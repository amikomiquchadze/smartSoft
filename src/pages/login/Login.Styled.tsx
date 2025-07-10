
import { Link } from "react-router-dom";
import styled from "@emotion/styled";


export const Container = styled.div`
  min-height: 82vh;
  display: flex;
  align-items: center;
  justify-content: center;
  background: radial-gradient(circle at top left, #a8c0ff, #3f2b96);
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
  color: #667eea;
  margin-bottom: 1rem;
  /* if you have an SVG or icon component, drop it in here */
`;

export const Title = styled.h2`
 
  margin-bottom: 1rem;
  color: #111827;
  font-size: 1.5rem;
`;

export const Subtitle = styled.p`
  margin: 0 0 2rem;
  color: #6b7280;
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
  color: #4b5563;
`;

export const Input = styled.input<{ hasError?: boolean }>`
  width: 90%;
  padding: 0.75rem 1rem;
  border: 1px solid ${(p: { hasError: any; }) => (p.hasError ? "#ef4444" : "#d1d5db")};
  border-radius: 0.75rem;
  font-size: 1rem;
  background: #f9fafb;
  &::placeholder {
    color: #9ca3af;
  }
  &:focus {
    outline: none;
    border-color: #667eea;
    box-shadow: 0 0 0 2px rgba(102, 126, 234, 0.3);
  }
`;

export const Button = styled.button`
  margin-top: 1rem;
  padding: 0.75rem;
  background: #667eea;
  color: #fff;
  border: none;
  border-radius: 0.75rem;
  font-size: 1rem;
  font-weight: 600;
  cursor: pointer;
  transition: background 0.2s, transform 0.1s;
  &:hover:not(:disabled) {
    background: #5a67d8;
    transform: translateY(-1px);
  }
  &:disabled {
    background: #cbd5e0;
    cursor: not-allowed;
  }
`;

export const ErrorText = styled.p`
  margin: 0.5rem 0 0;
  color: #ef4444;
  font-size: 0.875rem;
  text-align: left;
`;

export const Footer = styled.p`
  margin-top: 1.5rem;
  font-size: 0.875rem;
  color: #6b7280;
`;

export const FooterLink = styled(Link)`
  color: #667eea;
  text-decoration: none;
  font-weight: 600;
  &:hover {
    text-decoration: underline;
  }
`;