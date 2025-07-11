import { memo } from "react";
import * as S from "../CaptionList.Styled";

interface DeleteWordModalProps {
  isOpen: boolean;
  word: any;
  onCancel: () => void;
  onConfirm: () => void;
}

export const DeleteWordModal = memo(function DeleteWordModal({
  isOpen,
  word,
  onCancel,
  onConfirm,
}: DeleteWordModalProps) {
  if (!isOpen) return null;

  return (
    <S.Overlay>
      <S.Modal>
        <h3>Confirm Delete</h3>
        <p>
          Are you sure you want to delete "<strong>{word.national}</strong>"?
        </p>
        <S.ModalActions>
          <S.CancelButton onClick={onCancel}>Cancel</S.CancelButton>
          <S.deleteButton onClick={onConfirm}>Delete</S.deleteButton>
        </S.ModalActions>
      </S.Modal>
    </S.Overlay>
  );
});
