"use client";
import styled from "styled-components";

export const SideMenuSection = styled.section`
  grid-area: AS;
  display: grid;
  width: 100%;
  height: 100%;
  background: ${(props) => props.theme.colors.white};
  border-right: 1px solid ${(props) => props.theme.colors.adminBorder};
  grid-template-areas:
    "TP"
    "NV";
  grid-template-columns: 1fr;
  /* 사이드바 프로필 부분( 200px ), 카테고리 리스트 부분 ( 1fr ) */
  grid-template-rows: 300px 1fr;
`;
