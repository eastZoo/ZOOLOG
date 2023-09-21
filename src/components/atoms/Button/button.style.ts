"use client";
import styled from "styled-components";

interface ButtonProps {
  width?: string;
  height?: number;
  size?: string;
  color: string;
  rotate?: string;
}
export const Button = styled.button<ButtonProps>`
  display: flex;
  width: ${(props) => (props.width ? props.width : "auto")};
  height: ${(props) => (props.height ? props.height + "px" : "initial")};
  color: ${(props) => props.color || "white"};
  font-size: ${(props) => props.size || "0.8rem"};
  padding: 10px 20px;
  border-radius: 20px;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  border: 1px solid gray;
  transition: background 0.1s ease-in-out;
  box-sizing: border-box;
  &:hover {
    background: ${(props) => props.color};
  }
`;
