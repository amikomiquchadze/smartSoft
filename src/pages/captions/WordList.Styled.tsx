import styled from "@emotion/styled";

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
  background: #ffffff;
  width: 100%;
  max-width: 900px;
  border-radius: 1rem;
  box-shadow: 0 10px 20px rgba(0,0,0,0.05);
  padding: 2.5rem;

  @media (max-width: 600px) {
    padding: 1.5rem;
    border-radius: 0.75rem;
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
  color: #111827;

  @media (max-width: 480px) {
    font-size: 1.5rem;
  }
`;

export const AddButton = styled.button`
  padding: 0.75rem 1.5rem;
  background: #4f46e5;
  color: #fff;
  border: none;
  border-radius: 9999px;
  font-weight: 500;
  cursor: pointer;
  transition: background 0.2s, transform 0.1s;

  &:hover {
    background: #4338ca;
    transform: translateY(-1px);
  }

  @media (max-width: 480px) {
    padding: 0.6rem 1.2rem;
    font-size: 0.9rem;
  }
`;

export const TableWrapper = styled.div`
  overflow-x: auto;
  border-radius: 0.75rem;
  box-shadow: inset 0 0 0 1px #e5e7eb;
  background: #ffffff;
  margin-top: 1rem;
`;

export const Table = styled.table`
  width: 100%;
  border-collapse: collapse;

  @media (max-width: 770px) {
    border: 0;

    thead {
      display: none;
    }
    tr {
      display: block;
      margin-bottom: 1rem;
      background: #fff;
      box-shadow: 0 2px 8px rgba(0,0,0,0.05);
      border-radius: 0.5rem;
      padding: 0.75rem 1rem;
    }
    td {
      display: flex;
      justify-content: space-between;
      padding: 0.5rem 0;
      border: none;
      font-size: 0.9rem;
      &::before {
        content: attr(data-label);
        font-weight: 600;
        color: #4b5563;
        margin-right: 1rem;
      }
    }
  }
`;

export const Th = styled.th`
  text-align: left;
  padding: 1rem 1.5rem;
  font-size: 0.875rem;
  font-weight: 500;
  color: #6b7280;
  border-bottom: 1px solid #e5e7eb;
  background: #ffffff;
`;

export const Tr = styled.tr`
  &:nth-of-type(even) {
    background: #fafafc;
  }
  &:hover {
    background: #f5f5ff;
  }
`;

export const Td = styled.td`
  padding: 1rem 1.5rem;
  font-size: 0.9375rem;
  color: #374151;
  border-bottom: 1px solid #e5e7eb;

  @media (max-width: 480px) {
    padding: 0.5rem 0.75rem;
    font-size: 0.8rem;
    border-bottom: none;
  }
`;

export const ActionGroup = styled.div`
  display: flex;
  gap: 0.5rem;
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
  background: #10b981;
  color: #fff;

  &:hover {
    background: #059669;
    transform: translateY(-1px);
  }
`;

export const DeleteIconButton = styled.button`
  ${baseIconBtn}
  background: #ef4444;
  color: #fff;

  &:hover {
    background: #dc2626;
    transform: translateY(-1px);
  }
`;

export const Message = styled.p<{ success?: boolean }>`
  text-align: center;
  margin-top: 1.5rem;
  color: ${(p: { success: boolean; }) => (p.success === false ? "#ef4444" : "#6b7280")};
`;

export const Overlay = styled.div`
  position: fixed;
  inset: 0;
  background: rgba(0,0,0,0.4);
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 1rem;
  z-index: 1000;
`;

export const Modal = styled.div`
  background: #ffffff;
  border-radius: 1rem;
  max-width: 400px;
  width: 100%;
  padding: 2rem 1.5rem;
  box-shadow: 0 12px 24px rgba(0,0,0,0.15);

  h3 {
    margin: 0 0 1.5rem;
    font-size: 1.25rem;
    font-weight: 600;
    color: #111827;
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
  color: #4b5563;
`;

export const ModalInput = styled.input`
  width: 90%;
  padding: 0.75rem 1rem;
  border: 1px solid #d1d5db;
  border-radius: 0.75rem;
  background: #f9fafb;
  font-size: 1rem;
  transition: border-color 0.2s, box-shadow 0.2s;

  &:focus {
    outline: none;
    border-color: #4f46e5;
    box-shadow: 0 0 0 3px rgba(79,70,229,0.2);
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
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  color: #fff;
  border: none;
  border-radius: 9999px;
  font-size: 0.875rem;
  font-weight: 600;
  cursor: pointer;
  box-shadow: 0 4px 12px rgba(79,70,229,0.4);
  transition: background 0.2s, transform 0.1s;

  &:hover {
    transform: translateY(-1px);
    background: linear-gradient(135deg, #5a67d8 0%, #6b46c1 100%);
  }
`;

export const CancelButton = styled.button`
  padding: 0.75rem 1.5rem;
  background: #f3f4f6;
  color: #374151;
  border: none;
  border-radius: 9999px;
  font-size: 0.875rem;
  font-weight: 600;
  cursor: pointer;
  transition: background 0.2s;

  &:hover {
    background: #e5e7eb;
  }
`;

export const PaginationContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 0.75rem;
  margin-top: 1.5rem;

  @media (max-width: 480px) {
    flex-direction: column;
    gap: 0.5rem;
  }
`;

export const PageButton = styled.button<{ disabled?: boolean }>`
  padding: 0.5rem 1rem;
  background: ${(p: { disabled: any; }) => (p.disabled ? "#e5e5e5" : "#4f46e5")};
  color: ${(p: { disabled: any; }) => (p.disabled ? "#9ca3af" : "#ffffff")};
  border: none;
  border-radius: 9999px;
  font-size: 0.875rem;
  font-weight: 600;
  cursor: ${(p: { disabled: any; }) => (p.disabled ? "not-allowed" : "pointer")};
  transition: background 0.2s;

  &:hover:not(:disabled) {
    background: #4338ca;
  }
`;

export const PageIndicator = styled.span`
  font-size: 0.875rem;
  color: #4b5563;

  @media (max-width: 480px) {
    font-size: 0.85rem;
  }
`;
