"use client";
import React from "react";
import * as S from "./mainTemplate.style";
import { TypeAnimation } from "react-type-animation";
import { BannerSection } from "../../organisms/BannerSection";
import { SkillSection } from "@/components/organisms/SkillSection";
import { ProjectSection } from "@/components/organisms/ProjectSection";
import { ContactSection } from "@/components/organisms/ContactSection";
import { Footer } from "@/components/organisms/Footer";

const MainTemplate = () => {
  return (
    <S.MainTemplate>
      <BannerSection />
      <SkillSection />
      <ProjectSection />
      <ContactSection />
      <Footer />
    </S.MainTemplate>
  );
};

export default MainTemplate;
