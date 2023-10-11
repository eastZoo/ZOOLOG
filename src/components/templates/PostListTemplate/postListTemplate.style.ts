"use client";
import styled, { keyframes } from "styled-components";

export const PostListTemplate = styled.div`
  max-width: 56rem /* 896px */;
  margin-left: auto;
  margin-right: auto;
`;

export const CategoryTit = styled.h1`
  text-align: center;
  font-size: 1.5rem /* 24px */;
  line-height: 2rem /* 32px */;
  margin-top: 1.25rem /* 20px */;
  margin-bottom: 1.25rem /* 20px */;
  text-decoration-line: underline;
  font-weight: 800;
`;

export const PaginationContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-top: 1.25rem /* 20px */;
  margin-bottom: 1.25rem /* 20px */;
`;
