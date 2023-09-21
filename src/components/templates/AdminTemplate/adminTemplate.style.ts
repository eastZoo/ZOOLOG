"use client";
import styled from "styled-components";

export const AdminTemplate = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
`;

export const PostTitWrapper = styled.div`
  display: flex;
  flex-direction: column;
  padding: 35px 60px 10px;
  background: ${(props) => props.theme.colors.adminInputBg};
  border-radius: 3px;
  align-items: left;
  gap: 15px;
`;

export const PostTitle = styled.div`
  border-bottom: 1px solid rgba(0, 0, 0, 0.1);
`;

export const TitTextArea = styled.textarea`
  display: block;
  width: 100%;
  height: 56px;
  font-weight: 500;
  border: none;
  font-size: 25px;
  resize: none;
  outline: 0 none;
  line-height: 40px;
  overflow: hidden;
  background-color: #f8f8f8;
`;
export const MarkdownContainer = styled.div`
  display: flex;
  flex-direction: column;
  padding: 0 60px 0;
`;

export const ButtonWrapper = styled.div`
  display: flex;
  flex-direction: row-reverse;
  align-items: right;
  margin: 33px 0;
  gap: 10px;
`;
