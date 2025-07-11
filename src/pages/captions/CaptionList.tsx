import {
  fetchWords,
  selectWords,
  selectWordsLoading,
  selectWordsError,
} from "../../store/wordsSlice";
import { useAppDispatch, useAppSelector } from "../../store/hooks";
import * as S from "./CaptionList.Styled";
import { useCallback, useEffect, useState, useTransition } from "react";
import api from "../../api";
import { TitleRow } from "./components/TitleRow";
import { WordsTable } from "./components/WordsTable";
import { AddWordModal } from "./components/AddCaptionModal";
import { EditWordModal } from "./components/EditCaptionModal";
import { DeleteWordModal } from "./components/DeleteCaptionModal";

export default function WordsList() {
  const dispatch = useAppDispatch();
  const words = useAppSelector(selectWords);
  const loading = useAppSelector(selectWordsLoading);
  const error = useAppSelector(selectWordsError);

  const [page, setPage] = useState(1);
  const itemsPerPage = 15;

  const [isAddOpen, setAddOpen] = useState(false);
  const [addForm, setAddForm] = useState({ national: "", foreign: "" });

  const [editWordData, setEditWordData] = useState<null | (typeof words)[0]>(
    null
  );
  const [editForm, setEditForm] = useState({ national: "", foreign: "" });

  const [isPending, startTransition] = useTransition();

  useEffect(() => {
    if (words.length === 0 )
    dispatch(fetchWords());
  }, [dispatch]);

  const openAdd = useCallback(() => {
    setAddForm({ national: "", foreign: "" });
    setAddOpen(true);
  }, []);

  const closeAdd = useCallback(() => {
    setAddOpen(false);
  }, []);

  const handleAddChange = useCallback(
    (field: "national" | "foreign", value: string) => {
      setAddForm((prev) => ({ ...prev, [field]: value }));
    },
    []
  );

  const handleAddSave = useCallback(async () => {
    await api.client.addWord(addForm);
    closeAdd();
    startTransition(() => {
      dispatch(fetchWords());
    });
  }, [addForm, closeAdd, dispatch]);

  const openEdit = useCallback((word: (typeof words)[0]) => {
    setEditWordData(word);
    setEditForm({ national: word.national, foreign: word.foreign });
  }, []);

  const closeEdit = useCallback(() => {
    setEditWordData(null);
  }, []);

  const handleEditChange = useCallback(
    (field: "national" | "foreign", value: string) => {
      setEditForm((prev) => ({ ...prev, [field]: value }));
    },
    []
  );

  const handleEditSave = useCallback(async () => {
    if (!editWordData) return;
    await api.client.editWord(editWordData.id, editForm);
    closeEdit();
    startTransition(() => {
      dispatch(fetchWords());
    });
  }, [editWordData, editForm, closeEdit, dispatch]);

  const [deleteWordData, setDeleteWordData] = useState<
    null | (typeof words)[0]
  >(null);

  const openDelete = useCallback((word: (typeof words)[0]) => {
    setDeleteWordData(word);
  }, []);

  const closeDelete = useCallback(() => {
    setDeleteWordData(null);
  }, []);

  const handleDeleteConfirm = useCallback(async () => {
    if (!deleteWordData) return;
    await api.client.deleteWord(deleteWordData.id);
    closeDelete();
    startTransition(() => {
      dispatch(fetchWords());
    });
  }, [deleteWordData, closeDelete, dispatch]);

  return (
    <S.Container>
      <S.Card>
        <TitleRow onAdd={openAdd} />

        {loading || isPending ? (
          <S.Message>Loading…</S.Message>
        ) : error ? (
          <S.Message success={false}>{error}</S.Message>
        ) : (
          <WordsTable
            words={words}
            page={page}
            setPage={setPage}
            itemsPerPage={itemsPerPage}
            onEdit={openEdit}
            onDelete={openDelete}
          />
        )}
      </S.Card>

      <AddWordModal
        isOpen={isAddOpen}
        form={addForm}
        onChange={handleAddChange}
        onCancel={closeAdd}
        onSave={handleAddSave}
      />

      {editWordData && (
        <EditWordModal
          isOpen={!!editWordData}
          form={editForm}
          onChange={handleEditChange}
          onCancel={closeEdit}
          onSave={handleEditSave}
        />
      )}

      {deleteWordData && (
        <DeleteWordModal
          isOpen={!!deleteWordData}
          word={deleteWordData}
          onCancel={closeDelete}
          onConfirm={handleDeleteConfirm}
        />
      )}
    </S.Container>
  );
}
