"use client";
import * as S from "./sideMenuTemplate.styles";
import MainContentSection from "@/components/organisms/MainContentSection";
import HeaderNav from "@/components/organisms/HeaderNav";
import SideMenuSection from "@/components/organisms/SideMenuList";
import React, { useState } from "react";
import { Footer } from "@/components/organisms/Footer";

interface MainProps {
  children?: React.ReactElement;
}
export default function SideMenuLayout({ children }: MainProps) {
  return (
    <S.SideMenuTemplate>
      <SideMenuSection />
      <MainContentSection>
        <HeaderNav />
        {children}
      </MainContentSection>
    </S.SideMenuTemplate>
  );
}
