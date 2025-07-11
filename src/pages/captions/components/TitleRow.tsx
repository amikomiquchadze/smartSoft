import React from "react";
import * as S from "../CaptionList.Styled";


export const TitleRow = React.memo(function TitleRow({ onAdd }: { onAdd: () => void }) {
  return (
    <S.TitleRow>
      <S.Title>Captions</S.Title>
      <S.AddButton onClick={onAdd}>+ Add </S.AddButton>
    </S.TitleRow>
  );
});