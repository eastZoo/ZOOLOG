"use client";
import React from "react";
import * as S from "./mainTemplate.style";
import { TypeAnimation } from "react-type-animation";
import { BannerSection } from "../../organisms/BannerSection";
import { SkillSection } from "@/components/organisms/SkillSection";
import { ProjectSection } from "@/components/organisms/ProjectSection";
import { ContactSection } from "@/components/organisms/ContactSection";

const MainTemplate = () => {
  return (
    <S.MainTemplate>
      <BannerSection />
      <SkillSection />
      <ProjectSection />
      <ContactSection />
    </S.MainTemplate>
  );
};

export default MainTemplate;
