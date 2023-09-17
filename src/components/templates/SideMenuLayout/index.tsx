"use client";
import * as S from "./sideMenuTemplate.styles";
import MainContentSection from "@/components/organisms/MainContentSection";
import HeaderNav from "@/components/organisms/HeaderNav";
import SideMenuSection from "@/components/organisms/SideMenuList";
import { useState } from "react";

interface MainProps {
  children?: React.ReactElement;
}

export default function SideMenuLayout({ children }: MainProps) {
  const [isOpen, setOpen] = useState(true);

  const openHandler = () => {
    console.log("openHandler");
    setOpen((prev) => !prev);
  };

  const toggleMenu = () => {
    if (window.innerWidth <= 600) {
      setOpen(!isOpen);
    } else {
      setOpen(!isOpen);
    }
  };

  console.log("isOpen", isOpen);

  return (
    <S.SideMenuTemplate>
      <SideMenuSection
        toggleMenu={toggleMenu}
        isOpen={isOpen}
        openHandler={openHandler}
      />
      <MainContentSection>
        <HeaderNav />
        {children}
      </MainContentSection>
    </S.SideMenuTemplate>
  );
}
