"use client";
import styled, { keyframes } from "styled-components";

export const PostItemWrapper = styled.div`
  display: flex;
  flex-direction: column;
`;

export const PostItemCoverImg = styled.img`
  width: 100%;
  height: 250px;
  object-fit: cover;
  border-radius: 20px;
  margin-bottom: 0.5rem;
`;

export const PostItemDescription = styled.p`
  position: relative;
  max-height: 50px;
  overflow: hidden;
  padding-right: 0.6rem;
  font-size: 0.8rem;
  color: #a9a9a9;
`;

export const PostItemFooter = styled.footer`
  display: flex;
  align-items: center;
  margin-top: 1rem;
  justify-content: space-between;
`;

export const AuthorImg = styled.img`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  object-fit: cover;
  margin-right: 0.5rem;
`;

export const AuthorPtag = styled.p`
  font-size: 0.6rem;
  color: #a9a9a9;
  font-weight: 600;
`;
