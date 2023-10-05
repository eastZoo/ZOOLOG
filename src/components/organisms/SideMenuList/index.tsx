import React, { useState } from "react";
import * as S from "./sideMenuSection.style";

import SideProfile from "@/components/molcules/SideProfile";
import SideNavList from "@/components/molcules/SideNavList";

function SideMenuSection() {
  const [isOpen, setOpen] = useState(true);

  const openHandler = () => {
    setOpen((prev) => !prev);
  };

  const toggleMenu = () => {
    if (window.innerWidth <= 600) {
      setOpen(!isOpen);
    } else {
      setOpen(!isOpen);
    }
  };

  return (
    <S.SideMenuSection className={`${isOpen ? "on" : "off"}`}>
      <SideProfile />
      <S.SideNavList>
        <SideNavList openHandler={openHandler} />
      </S.SideNavList>
    </S.SideMenuSection>
  );
}

export default SideMenuSection;
