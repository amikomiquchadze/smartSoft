import styled from "@emotion/styled";
import { Colors } from ".././/../styles/Colors";
const {
  white,
  bggrey,
  blue,
  lighgray,
  lightblack,
  blueandgray,
  lightblue2,
  trbg,
  disabledwhite,
} = Colors;

export const Container = styled.div`
  min-height: 100vh;
  padding: 2rem 1rem;
  background: ${bggrey};
  display: flex;
  justify-content: center;

  @media (max-width: 600px) {
    padding: 1rem 0.5rem;
  }
`;

export const Card = styled.div`
  background: ${white};
  width: 100%;
  max-width: 1100px;
  border-radius: 1rem;
  box-shadow: 0 10px 20px rgba(0, 0, 0, 0.05);
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
  flex-wrap: wrap;
  gap: 1rem;
  margin-bottom: 1.5rem;

  @media (max-width: 480px) {
    flex-direction: column;
    align-items: flex-start;
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

export const CheckboxLabel = styled.label`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  font-size: 0.9rem;
  color: ${blueandgray};

  input {
    width: 1rem;
    height: 1rem;
  }
`;

export const FilterLabel = styled.label`
  display: flex;
  align-items: center;
  gap: 0.25rem;
  font-size: 0.9rem;
  color: ${blueandgray};

  select {
    margin-left: 0.5rem;
  }
`;

export const Select = styled.select`
  padding: 0.5rem 0.75rem;
  border: 1px solid #d1d5db;
  border-radius: 0.5rem;
  background: #f9fafb;
  font-size: 0.875rem;
  color: ${blueandgray};

  @media (max-width: 480px) {
    font-size: 0.85rem;
  }
`;

export const TableWrapper = styled.div`
  overflow-x: auto;
  border-radius: 0.75rem;
  box-shadow: inset 0 0 0 1px #e5e7eb;
  background: ${white};
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
      box-shadow: 0 2px 8px rgba(0, 0, 0, 0.05);
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
        color: ${lighgray};
        margin-right: 1rem;
      }
    }
  }
`;

export const Tr = styled.tr`
  border-bottom: 1px solid #e5e7eb;
  &:hover {
    background: ${disabledwhite};
  }

  @media (max-width: 640px) {
    display: block;
    margin-bottom: 1rem;
    background: ${trbg};
    border-radius: 0.5rem;
    box-shadow: 0 1px 4px rgba(0, 0, 0, 0.05);
    padding: 1rem;
  }
`;

export const Td = styled.td`
  padding: 1rem;
  font-size: 0.875rem;
  color: ${blueandgray};

  @media (max-width: 640px) {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0.5rem 0;
    border-bottom: 1px solid ${white};

    &::before {
      content: attr(data-label);
      font-weight: 600;
      color: #6b7280;
      margin-right: 1rem;
    }

    &:last-of-type {
      border-bottom: none;
    }
  }
`;

export const Th = styled.th`
  text-align: left;
  padding: 1rem;
  font-weight: 600;
  font-size: 0.875rem;
  color: ${lightblue2};
  background: #f9fafb;

  @media (max-width: 640px) {
    display: none;
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
  background: ${(p: { disabled: any }) => (p.disabled ? "#e5e5e5" : "#4f46e5")};
  color: ${(p: { disabled: any }) => (p.disabled ? "#9ca3af" : "#ffffff")};
  border: none;
  border-radius: 9999px;
  font-size: 0.875rem;
  font-weight: 600;
  cursor: ${(p: { disabled: any }) => (p.disabled ? "not-allowed" : "pointer")};
  transition: background 0.2s;

  &:hover:not(:disabled) {
    background: ${blue};
  }
`;

export const PageIndicator = styled.span`
  font-size: 0.875rem;
  color: ${lighgray};

  @media (max-width: 480px) {
    font-size: 0.85rem;
  }
`;

export const Message = styled.p<{ success?: boolean }>`
  text-align: center;
  margin-top: 1.5rem;
  color: ${(p: { success: boolean }) =>
    p.success === false ? "#ef4444" : "#6b7280"};
`;
