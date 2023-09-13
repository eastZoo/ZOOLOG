"use client";
import styled from "styled-components";

export const SideMenuTemplate = styled.div`
  display: grid;
  width: 100vw;
  height: 100vh;
  background: ${(props) => props.theme.colors.adminBg};
  grid-template-areas:
    "AS HD"
    "AS CT";
  /* 사이드바 넓이 250px, 메인컨테츠 1fr */
  grid-template-columns: 250px 1fr;
  grid-template-rows: 50px 1fr;
  align-items: center;
  justify-content: center;
`;
