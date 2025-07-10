import  { useEffect, useState } from "react";
import * as S from "./WordList.Styled";
import { FiEdit, FiTrash2 } from "react-icons/fi";
import {
  fetchWords,
  selectWords,
  selectWordsLoading,
  selectWordsError,
} from "../../store/wordsSlice";
import { useAppDispatch, useAppSelector } from "../../store/hooks";
import { editWord, addWord, deleteWord } from "../../api/client";

export default function WordsList() {
  const dispatch = useAppDispatch();
  const words    = useAppSelector(selectWords);
  const loading  = useAppSelector(selectWordsLoading);
  const error    = useAppSelector(selectWordsError);

  // pagination
  const itemsPerPage = 15;
  const [page, setPage] = useState(1);
  const totalPages = Math.ceil(words.length / itemsPerPage);
  const pageRows   = words.slice((page - 1) * itemsPerPage, page * itemsPerPage);

  // edit state
  const [editWordData, setEditWordData] = useState<null | typeof words[0]>(null);
  const [editForm, setEditForm]         = useState({ national: "", foreign: "" });

  // add state
  const [isAddOpen, setAddOpen] = useState(false);
  const [addForm,   setAddForm] = useState({ national: "", foreign: "" });

  // delete state
  const [deleteWordData, setDeleteWordData] = useState<null | typeof words[0]>(null);

  useEffect(() => {
    dispatch(fetchWords());
  }, [dispatch]);

  // ── Edit handlers
  const openEdit = (w: typeof words[0]) => {
    setEditWordData(w);
    setEditForm({ national: w.national, foreign: w.foreign });
  };
  const closeEdit = () => setEditWordData(null);
  const handleEditSave = async () => {
    if (!editWordData) return;
    await editWord(editWordData.id, editForm);
    dispatch(fetchWords());
    closeEdit();
  };

  // ── Add handlers
  const openAdd = () => {
    setAddForm({ national: "", foreign: "" });
    setAddOpen(true);
  };
  const closeAdd = () => setAddOpen(false);
  const handleAddSave = async () => {
    await addWord(addForm);
    dispatch(fetchWords());
    closeAdd();
  };

  // ── Delete handlers
  const openDelete = (w: typeof words[0]) => setDeleteWordData(w);
  const closeDelete = () => setDeleteWordData(null);
  const handleDeleteConfirm = async () => {
    if (!deleteWordData) return;
    await deleteWord(deleteWordData.id);
    dispatch(fetchWords());
    closeDelete();
  };

  if (loading) {
    return (
      <S.Container>
        <S.Card>
          <S.Message>Loading…</S.Message>
        </S.Card>
      </S.Container>
    );
  }

  if (error) {
    return (
      <S.Container>
        <S.Card>
          <S.Message success={false}>{error}</S.Message>
        </S.Card>
      </S.Container>
    );
  }

  return (
    <S.Container>
      <S.Card>
        <S.TitleRow>
          <S.Title>All Words</S.Title>
          <S.AddButton onClick={openAdd}>+ Add Word</S.AddButton>
        </S.TitleRow>

        <S.TableWrapper>
          <S.Table>
            <thead>
              <tr>
                <S.Th>ID</S.Th>
                <S.Th>National</S.Th>
                <S.Th>Foreign</S.Th>
                <S.Th>Actions</S.Th>
              </tr>
            </thead>
            <tbody>
              {pageRows.map((w) => (
                <S.Tr key={w.id}>
                  <S.Td data-label="ID">{w.id}</S.Td>
                  <S.Td data-label="National">{w.national}</S.Td>
                  <S.Td data-label="Foreign">{w.foreign}</S.Td>
                  <S.Td data-label="Actions">
                    <S.ActionGroup>
                      <S.EditIconButton onClick={() => openEdit(w)}>
                        <FiEdit size={18} />
                      </S.EditIconButton>
                      <S.DeleteIconButton onClick={() => openDelete(w)}>
                        <FiTrash2 size={18} />
                      </S.DeleteIconButton>
                    </S.ActionGroup>
                  </S.Td>
                </S.Tr>
              ))}
            </tbody>
          </S.Table>
        </S.TableWrapper>

        {/* pagination */}
        <S.PaginationContainer>
          <S.PageButton
            disabled={page <= 1}
            onClick={() => setPage((p) => Math.max(1, p - 1))}
          >
            Previous
          </S.PageButton>
          <S.PageIndicator>
            Page {page} of {totalPages}
          </S.PageIndicator>
          <S.PageButton
            disabled={page >= totalPages}
            onClick={() => setPage((p) => Math.min(totalPages, p + 1))}
          >
            Next
          </S.PageButton>
        </S.PaginationContainer>
      </S.Card>

      {/* Edit Modal */}
      {editWordData && (
        <S.Overlay>
          <S.Modal>
            <h3>Edit Word</h3>
            <S.ModalField>
              <S.ModalLabel>National</S.ModalLabel>
              <S.ModalInput
                value={editForm.national}
                onChange={(e: { target: { value: any; }; }) =>
                  setEditForm((f) => ({ ...f, national: e.target.value }))
                }
              />
            </S.ModalField>
            <S.ModalField>
              <S.ModalLabel>Foreign</S.ModalLabel>
              <S.ModalInput
                value={editForm.foreign}
                onChange={(e: { target: { value: any; }; }) =>
                  setEditForm((f) => ({ ...f, foreign: e.target.value }))
                }
              />
            </S.ModalField>
            <S.ModalActions>
              <S.CancelButton onClick={closeEdit}>Cancel</S.CancelButton>
              <S.SaveButton onClick={handleEditSave}>Save</S.SaveButton>
            </S.ModalActions>
          </S.Modal>
        </S.Overlay>
      )}

      {/* Add Modal */}
      {isAddOpen && (
        <S.Overlay>
          <S.Modal>
            <h3>New Word</h3>
            <S.ModalField>
              <S.ModalLabel>National</S.ModalLabel>
              <S.ModalInput
                value={addForm.national}
                onChange={(e: { target: { value: any; }; }) =>
                  setAddForm((f) => ({ ...f, national: e.target.value }))
                }
              />
            </S.ModalField>
            <S.ModalField>
              <S.ModalLabel>Foreign</S.ModalLabel>
              <S.ModalInput
                value={addForm.foreign}
                onChange={(e: { target: { value: any; }; }) =>
                  setAddForm((f) => ({ ...f, foreign: e.target.value }))
                }
              />
            </S.ModalField>
            <S.ModalActions>
              <S.CancelButton onClick={closeAdd}>Cancel</S.CancelButton>
              <S.SaveButton onClick={handleAddSave}>Create</S.SaveButton>
            </S.ModalActions>
          </S.Modal>
        </S.Overlay>
      )}

      {/* Delete Confirmation Modal */}
      {deleteWordData && (
        <S.Overlay>
          <S.Modal>
            <h3>Confirm Delete</h3>
            <p>
              Are you sure you want to delete “
              <strong>{deleteWordData.national}</strong>”?
            </p>
            <S.ModalActions>
              <S.CancelButton onClick={closeDelete}>Cancel</S.CancelButton>
              <S.DeleteIconButton onClick={handleDeleteConfirm}>
                Delete
              </S.DeleteIconButton>
            </S.ModalActions>
          </S.Modal>
        </S.Overlay>
      )}
    </S.Container>
  );
}
