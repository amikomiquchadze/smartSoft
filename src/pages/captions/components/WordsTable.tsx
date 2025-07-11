import { Table } from "../../shared/table/Table";
import * as S from "../CaptionList.Styled";
import { FiEdit, FiTrash2 } from "react-icons/fi";

export function WordsTable({
  words,
  page,
  setPage,
  itemsPerPage,
  onEdit,
  onDelete,
}: {
  words: any[];
  page: number;
  setPage: (p: number) => void;
  itemsPerPage: number;
  onEdit: (word: any) => void;
  onDelete: (word: any) => void;
}) {
  const headers = ["ID", "National", "Capital", "Actions"];

  return (
 <Table
      headers={headers}
      rows={words}
      page={page}
      itemsPerPage={itemsPerPage}
      setPage={setPage}
      renderRow={(w) => (
        <S.Tr key={w.id}>
          <S.Td data-label="ID">{w.id}</S.Td>
          <S.Td data-label="National">{w.national}</S.Td>
          <S.Td data-label="Foreign">{w.foreign}</S.Td>
          <S.Td data-label="Actions">
            <S.ActionGroup>
              <S.EditIconButton onClick={() => onEdit(w)}>
                <FiEdit size={18} />
              </S.EditIconButton>
              <S.DeleteIconButton onClick={() => onDelete(w)}>
                <FiTrash2 size={18} />
              </S.DeleteIconButton>
            </S.ActionGroup>
          </S.Td>
        </S.Tr>
      )}
    />

  );
}