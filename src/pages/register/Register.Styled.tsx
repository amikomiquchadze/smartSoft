import styled from "@emotion/styled";

// Full‐screen blue→purple gradient background, no horizontal scroll
export const Container = styled.div`
  overflow-x: hidden;
  min-height: 82vh;
  display: flex;
  align-items: center;
  justify-content: center;
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  padding: 1rem;
`;

// White card with rounded corners and drop shadow
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

// Title above form
export const Title = styled.h2`
  margin-bottom: 2rem;
  color: #111827;
`;

// Stack inputs and button with consistent gap
export const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;
export const Label = styled.label`
  display: flex;
  position: flex-start;
  margin-bottom: -10px;
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


// Pill‐shaped submit button with hover lift
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

// Inline error message
export const ErrorText = styled.p`
  margin: 0;
  color: #ef4444;
  font-size: 0.875rem;
  text-align: left;
`;

// Success or error message below form
export const Message = styled.p<{ success?: boolean }>`
  margin-top: 1rem;
  color: ${(p: { success: any; }) => (p.success ? "#10b981" : "#ef4444")};
  font-weight: 600;
`;
