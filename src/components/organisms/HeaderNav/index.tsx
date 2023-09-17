import React from "react";
import * as S from "./headerNav.style";

const HeaderNav = () => {
  return (
    <>
      <S.Header>
        <S.HeaderInner>
          <S.HederBox>
            <h4>Header( maybe recent tap here )</h4>
            <p style={{ marginLeft: "auto" }}>hello</p>
          </S.HederBox>
        </S.HeaderInner>
      </S.Header>
    </>
  );
};

export default HeaderNav;
