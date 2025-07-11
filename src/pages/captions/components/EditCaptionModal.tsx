import { memo } from "react";
import * as S from "../CaptionList.Styled";

interface EditWordModalProps {
  isOpen: boolean;
  form: {
    national: string;
    foreign: string;
  };
  onChange: (field: "national" | "foreign", value: string) => void;
  onCancel: () => void;
  onSave: () => void;
}

export const EditWordModal = memo(function EditWordModal({
  isOpen,
  form,
  onChange,
  onCancel,
  onSave,
}: EditWordModalProps) {
  if (!isOpen) return null;

  return (
    <S.Overlay>
      <S.Modal>
        <h3>Edit Word</h3>

        <S.ModalField>
          <S.ModalLabel>National</S.ModalLabel>
          <S.ModalInput
            value={form.national}
            onChange={(e: any) => onChange("national", e.target.value)}
          />
        </S.ModalField>

        <S.ModalField>
          <S.ModalLabel>Foreign</S.ModalLabel>
          <S.ModalInput
            value={form.foreign}
            onChange={(e: any) => onChange("foreign", e.target.value)}
          />
        </S.ModalField>

        <S.ModalActions>
          <S.CancelButton onClick={onCancel}>Cancel</S.CancelButton>
          <S.SaveButton onClick={onSave}>Save</S.SaveButton>
        </S.ModalActions>
      </S.Modal>
    </S.Overlay>
  );
});
