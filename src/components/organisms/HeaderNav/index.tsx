import React from "react";
import * as S from "./headerNav.style";
import Link from "next/link";

const HeaderNav = () => {
  return (
    <>
      <S.Header>
        <S.HeaderInner>
          <S.HederBox>
            <h4>Header( maybe recent tap here )</h4>
            <Link href={"/admin"}>
              <p style={{ marginLeft: "auto" }}>edit</p>
            </Link>
          </S.HederBox>
        </S.HeaderInner>
      </S.Header>
    </>
  );
};

export default HeaderNav;
