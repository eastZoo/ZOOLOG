"use client";
import styled from "styled-components";
import BackImg1 from "@/styles/assets/images/back1.gif";
import BackImg2 from "@/styles/assets/images/back2.gif";
import BackImg3 from "@/styles/assets/images/back3.gif";

export const MainTemplate = styled.section`
  grid-area: CT;
  display: flex;
  flex-direction: row;
  width: calc(100%- 150px);
  height: 100%;
  background-image: url(${BackImg1?.src});
  background-color: rgba(0, 0, 0, 0.25);
  background-blend-mode: multiply;
  background-size: cover;
`;

export const MainTitContainer = styled.div`
  position: relative;
  display: flex;
  top: 80%;
  left: 25%;
  width: 100%;
  transform: translateY(-60%);
  font-size: 60px;
  @media only screen and (min-width: 320px) {
    padding-left: 15px;
    padding-right: 15px;
  }
  @media only screen and (min-width: 400px) {
    padding-left: 40px;
    padding-right: 40px;
  }
  @media only screen and (min-width: 680px) {
    font-size: 75px;
  }
  @media only screen and (min-width: 950px) {
    font-size: 100px;
  }

  & .p1 {
    display: inline-block;
    font-size: 1em;
    font-weight: 900;
    margin: 0;
    color: #fff;
    line-height: 1;
    @media only screen and (max-width: 465px) {
      display: block;
      position: absolute;
      top: -25%;
      left: 50%;
      transform: translateX(-50%);
    }
  }

  & .p2 {
    display: inline-block;
    font-size: 1em;
    font-weight: 600;
    margin: 0;
    line-height: 1;
    color: #d35c65;
    @media only screen and (max-width: 465px) {
      position: relative;
      top: 0.6em;
    }
  }
`;

export const RecentPostSection = styled.section`
  display: block;
`;
