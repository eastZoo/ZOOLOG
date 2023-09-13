import React from "react";
import * as S from "./sideMenuSection.style";
import { SideNavList } from "@/components/molcules/SideNavList";
import SideProfile from "@/components/molcules/SideProfile";

const SideMenuSection = () => {
  return (
    <S.SideMenuSection>
      <SideProfile />
      <SideNavList />
    </S.SideMenuSection>
  );
};

export default SideMenuSection;
