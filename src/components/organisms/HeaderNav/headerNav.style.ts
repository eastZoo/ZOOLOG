"use client";
import styled from "styled-components";

export const Header = styled.header`
  position: fixed;
  display: block;
  height: 60px;
  top: 0;
  width: 100%;
  z-index: 10;
  border-bottom: 1px solid #efefef;
  background-color: ${(props) => props.theme.colors.mainBg};
  color: ${(props) => props.theme.colors.white};
  font-size: 1.8rem;
  transition: top 0.2s ease-in-out;
  border: 1px solid gray;
  font-weight: 500;
`;

export const HeaderInner = styled.div`
  position: relative;
  padding: 16px 24px;
  margin: 0 auto;
`;

export const HederBox = styled.div`
  width: calc(100% - 300px);
  display: flex;
`;
