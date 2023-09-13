"use client";
import styled from "styled-components";

export const Header = styled.header`
  grid-area: HD;
  display: flex;
  width: 100%;
  height: 100%;
  padding: 0 10px;
  background: ${(props) => props.theme.colors.white};
  box-shadow: ${(props) => props.theme.shadow.adminHeader};
  align-items: center;
  border: 1px solid gray;
`;
