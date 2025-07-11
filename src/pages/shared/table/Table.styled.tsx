import styled from "@emotion/styled";
import { Colors } from "../../../styles/Colors";
const {
  lightgreen,
  green,
  purple,
  bggrey,
  blue,
  lighgray,
  red,
  darkred,
  lightblue3,
  gradientone,
  gradienttwo,
  darkblue,
  lightblack,
  blueandgray,
  hover,
  thbg,
  mainbg,
  whitepurple,
} = Colors;
export const Container = styled.div`
  min-height: 72vh;
  padding: 2rem 1rem;
  background: #f3f4f6;
  display: flex;
  justify-content: center;

  @media (max-width: 600px) {
    padding: 1rem 0.5rem;
  }
`;

export const Card = styled.div`
  background: ${thbg};
  width: 100%;
  max-width: 900px;
  border-radius: 1rem;
  box-shadow: 0 10px 20px rgba(0, 0, 0, 0.05);
  padding: 2.5rem;

  @media (max-width: 600px) {
    padding: 1.5rem;
    border-radius: 0.75rem;
  }
`;

export const TableWrapper = styled.div`
  overflow-x: auto;
`;

export const Table = styled.table`
  width: 100%;
  border-collapse: collapse;
`;

export const Tr = styled.tr`
  border-bottom: 1px solid ${hover};
`;

export const Th = styled.th`
  text-align: left;
  padding: 1rem;
  font-weight: 600;
  font-size: 0.875rem;
  color: ${blueandgray};
  background: ${mainbg};
`;

export const Td = styled.td`
  padding: 1rem;
  font-size: 0.875rem;
  color: ${blueandgray};
`;

export const ActionGroup = styled.div`
  display: flex;
  gap: 0.5rem;
`;

export const PaginationContainer = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 2rem;
  align-items: center;
`;

export const PageButton = styled.button`
  padding: 0.5rem 1rem;
  background: ${(p: { disabled: any }) => (p.disabled ? "#e5e5e5" : "#4f46e5")};
  color: ${(p: { disabled: any }) => (p.disabled ? "#9ca3af" : "#ffffff")};
  cursor: ${(p: { disabled: any }) => (p.disabled ? "not-allowed" : "pointer")};
  border: none;
  border-radius: 0.5rem;
  cursor: pointer;
  font-size: 0.875rem;

  &:disabled {
    background: #d1d5db;
    cursor: not-allowed;
  }
  &:hover:not(:disabled) {
    background: ${blue};
  }
`;

export const PageIndicator = styled.span`
  font-size: 0.875rem;
  color: ${whitepurple};
`;

export const AddButton = styled.button`
  padding: 0.75rem 1.5rem;
  background: ${blue};
  color: #fff;
  border: none;
  border-radius: 9999px;
  font-weight: 500;
  cursor: pointer;
  transition: background 0.2s, transform 0.1s;

  &:hover {
    background: ${blue};
    transform: translateY(-1px);
  }

  @media (max-width: 480px) {
    padding: 0.6rem 1.2rem;
    font-size: 0.9rem;
  }
`;

const baseIconBtn = `
  width: 2.5rem;
  height: 2.5rem;
  display: flex;
  align-items: center;
  justify-content: center;
  border: none;
  border-radius: 50%;
  cursor: pointer;
  transition: background 0.2s, transform 0.1s;
`;

export const EditIconButton = styled.button`
  ${baseIconBtn}
  background: ${lightgreen};
  color: #fff;

  &:hover {
    background: ${green};
    transform: translateY(-1px);
  }
`;

export const DeleteIconButton = styled.button`
  ${baseIconBtn}
  background: ${red};
  color: #fff;

  &:hover {
    background: ${darkred};
    transform: translateY(-1px);
  }
`;

export const Overlay = styled.div`
  position: fixed;
  inset: 0;
  background: rgba(0, 0, 0, 0.4);
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 1rem;
  z-index: 1000;
`;

export const Modal = styled.div`
  background: #{thbg};
  border-radius: 1rem;
  max-width: 400px;
  width: 100%;
  padding: 2rem 1.5rem;
  box-shadow: 0 12px 24px rgba(0, 0, 0, 0.15);

  h3 {
    margin: 0 0 1.5rem;
    font-size: 1.25rem;
    font-weight: 600;
    color: ${darkblue};
    text-align: center;
  }

  @media (max-width: 480px) {
    padding: 1.5rem 1rem;

    h3 {
      font-size: 1.1rem;
      margin-bottom: 1rem;
    }
  }
`;

export const ModalField = styled.div`
  margin-bottom: 1.25rem;
`;

export const ModalLabel = styled.label`
  display: block;
  margin-bottom: 0.5rem;
  font-size: 0.875rem;
  font-weight: 600;
  color: ${lighgray};
`;

export const ModalInput = styled.input`
  width: 90%;
  padding: 0.75rem 1rem;
  border: 1px solid #d1d5db;
  border-radius: 0.75rem;
  background: ${mainbg};
  font-size: 1rem;
  transition: border-color 0.2s, box-shadow 0.2s;

  &:focus {
    outline: none;
    border-color: ${lightblue3};
    box-shadow: 0 0 0 3px rgba(79, 70, 229, 0.2);
  }
`;

export const ModalActions = styled.div`
  display: flex;
  justify-content: flex-end;
  gap: 0.75rem;
  margin-top: 1.5rem;
`;

export const SaveButton = styled.button`
  padding: 0.75rem 1.5rem;
  background: linear-gradient(135deg, ${gradientone} 0%, ${gradienttwo} 100%);
  color: #fff;
  border: none;
  border-radius: 9999px;
  font-size: 0.875rem;
  font-weight: 600;
  cursor: pointer;
  box-shadow: 0 4px 12px rgba(79, 70, 229, 0.4);
  transition: background 0.2s, transform 0.1s;

  &:hover {
    transform: translateY(-1px);
    background: linear-gradient(135deg, #5a67d8 0%, ${purple} 100%);
  }
`;

export const CancelButton = styled.button`
  padding: 0.75rem 1.5rem;
  background: ${bggrey};
  color: ${blueandgray};
  border: none;
  border-radius: 9999px;
  font-size: 0.875rem;
  font-weight: 600;
  cursor: pointer;
  transition: background 0.2s;

  &:hover {
    background: ${hover};
  }
`;

export const TitleRow = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 1.5rem;

  @media (max-width: 480px) {
    flex-direction: column;
    align-items: flex-start;
    gap: 0.75rem;
  }
`;

export const Title = styled.h2`
  margin: 0;
  font-size: 1.75rem;
  font-weight: 600;
  color: ${lightblack};

  @media (max-width: 480px) {
    font-size: 1.5rem;
  }
`;

export const Message = styled.p<{ success?: boolean }>`
  text-align: center;
  margin-top: 1.5rem;
  color: ${(p: any) => (p.success === false ? "#ef4444" : "#6b7280")};
`;

export const Thead = styled.thead`
  @media (max-width: 640px) {
    display: none;
  }
`;
