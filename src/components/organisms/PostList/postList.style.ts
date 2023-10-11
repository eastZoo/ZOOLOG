"use client";
import styled, { keyframes } from "styled-components";

export const PaginationWrapper = styled.div`
  display: grid;
  gap: 1rem /* 16px */;

  @media (min-width: 768px) {
    grid-template-columns: repeat(3, minmax(0, 1fr));
  }
`;

export const PostCardWrapper = styled.div`
  display: flex;
  flex-direction: column;
`;

export const CardBody = styled.div`
  display: flex;
  flex: 1 1 auto;
  flex-direction: column;
  padding: var(--padding-card, 2rem /* 32px */);
  gap: 0.5rem /* 8px */;
`;
