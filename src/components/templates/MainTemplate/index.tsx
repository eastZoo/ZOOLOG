"use client";
import React from "react";
import * as S from "./mainTemplate.style";
import { TypeAnimation } from "react-type-animation";
import { BannerSection } from "../BannerSection";
import { SkillSection } from "../SkillSection";
import { ProjectSection } from "../ProjectSection";

const MainTemplate = () => {
  return (
    <S.MainTemplate>
      <BannerSection />
      <SkillSection />
      <ProjectSection />
      {/* <Contact /> */}
      {/* <Footer /> */}
    </S.MainTemplate>
  );
};

export default MainTemplate;
