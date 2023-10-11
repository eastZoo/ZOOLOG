import React from "react";
import * as S from "./empty.style";
import projImg3 from "@/styles/assets/images/13525-empty.gif";

const EmptyList = () => (
  <S.EmptyWrapper>
    <img
      src={projImg3.src}
      alt="empty"
      style={{ maxWidth: "250px", width: "100%" }}
    />
  </S.EmptyWrapper>
);

export default EmptyList;
