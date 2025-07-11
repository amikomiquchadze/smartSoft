import type { ReactNode } from "react";
import * as S from "../table/Table.styled";

type TableProps<T> = {
  headers: string[];
  rows: T[];
  renderRow: (row: T, index: number) => ReactNode;
  page: number;
  itemsPerPage: number;
  setPage: (page: number) => void;
};

export function Table<T>({
  headers,
  rows,
  renderRow,
  page,
  itemsPerPage,
  setPage,
}: TableProps<T>) {
  const totalPages = Math.ceil(rows.length / itemsPerPage);
  const startIndex = (page - 1) * itemsPerPage;
  const pageRows = rows.slice(startIndex, startIndex + itemsPerPage);

  return (
    <>
      <S.TableWrapper>
        <S.Table>
          <S.Thead>
            <S.Tr>
              {headers.map((header) => (
                <S.Th key={header}>{header}</S.Th>
              ))}
            </S.Tr>
          </S.Thead>

          <tbody>
            {pageRows.map((row, index) => renderRow(row, startIndex + index))}
          </tbody>
        </S.Table>
      </S.TableWrapper>

      <S.PaginationContainer>
        <S.PageButton disabled={page <= 1} onClick={() => setPage(page - 1)}>
          Previous
        </S.PageButton>
        <S.PageIndicator>
          Page {page} of {totalPages}
        </S.PageIndicator>
        <S.PageButton
          disabled={page >= totalPages}
          onClick={() => setPage(page + 1)}
        >
          Next
        </S.PageButton>
      </S.PaginationContainer>
    </>
  );
}
