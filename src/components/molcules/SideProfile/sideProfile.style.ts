"use client";
import styled from "styled-components";

export const SideProfile = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border: 1px solid red;
  padding: 30px 0;
`;

export const SideProfileImg = styled.div`
  display: flex;
  justify-content: center;
  width: 120px;
  height: 120px;
  margin-top: 10px;

  border-radius: 70%;
  overflow: hidden;
`;

export const ProfileNameTit = styled.div`
  text-align: center;
  font-size: 1.8rem;
  margin: 10px 0;
`;

export const ProfileNav = styled.div`
  border-radius: 15px;
  border: 1px solid gray;
  display: flex;
  padding: 10px;
  gap: 15px;
`;
