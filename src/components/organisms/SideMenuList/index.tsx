import React from "react";
import * as S from "./sideMenuSection.style";

import SideProfile from "@/components/molcules/SideProfile";
import SideNavList from "@/components/molcules/SideNavList";

export default function SideMenuSection({
  toggleMenu,
  isOpen,
  openHandler,
}: any) {
  return (
    <S.SideMenuSection className={`${isOpen ? "on" : "off"}`}>
      <SideProfile />
      <S.SideNavList>
        <SideNavList openHandler={openHandler} />
      </S.SideNavList>
    </S.SideMenuSection>
  );
}
