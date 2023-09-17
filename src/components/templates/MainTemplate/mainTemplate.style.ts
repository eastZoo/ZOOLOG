"use client";
import styled from "styled-components";
import BackImg1 from "@/styles/assets/images/back1.gif";
import BackImg2 from "@/styles/assets/images/back2.gif";
import BackImg3 from "@/styles/assets/images/back3.gif";

export const MainTemplate = styled.main`
  width: 100%;
  margin: 0 auto;
`;

export const MainImage = styled.div`
  position: relative;
  background-image: url(${BackImg1?.src});
  width: 100%;
  height: calc(100vh - 60px);
  background-size: cover;
  background-position: 50% 50%;
  z-index: 1;
`;

export const MainContainer = styled.div`
  margin-top: 0;
  width: 100%;
  box-sizing: inherit;
  font-size: 60px;
  text-align: center;

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

export const MainTit = styled.div`
  align-items: center;
  height: calc(100vh - 500px);
  border: 1px solid red;
  justify-content: center;
  display: flex;
  margin: auto;
`;
