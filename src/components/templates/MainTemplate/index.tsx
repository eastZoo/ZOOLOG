import React from "react";
import * as S from "./mainTemplate.style";

const MainTemplate = () => {
  return (
    <S.MainTemplate>
      <S.MainTitContainer>
        <p className="p1">WEB</p>
        <p className="p2">DEVELOPER</p>
      </S.MainTitContainer>
      <S.RecentPostSection>hello</S.RecentPostSection>
    </S.MainTemplate>
  );
};

export default MainTemplate;
