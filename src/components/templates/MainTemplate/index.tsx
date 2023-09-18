"use client";
import React from "react";
import * as S from "./mainTemplate.style";
import { TypeAnimation } from "react-type-animation";

const MainTemplate = () => {
  return (
    <S.MainTemplate>
      <S.MainImage>
        <S.MainContainer>
          <S.MainTit>
            <div className="p1">I' AM</div>
            <TypeAnimation
              sequence={[
                // Same substring at the start will only be typed out once, initially
                "FRONT-END",
                1000, // wait 1s before replacing "Mice" with "Hamsters"
                "ENGINEER",
                1000,
                "IRONMAN",
                1000,
                "DEVELOPER",
                1000,
              ]}
              wrapper="span"
              speed={20}
              style={{
                display: "inline-block",
                fontSize: "1em",
                fontWeight: 600,
                margin: 0,
                lineHeight: 1,
                color: "#d35c65",
              }}
              repeat={3}
            />
          </S.MainTit>
        </S.MainContainer>
      </S.MainImage>
      <div>hello!!</div>
      <div>hello!!</div>
      <div>hello!!</div>
      <div>hello!!</div>
      <div>hello!!</div>
      <div>hello!!</div>
      <div>hello!!</div>
      <div>hello!!</div>
      <div>hello!!</div>
      <div>hello!!</div>
      <div>hello!!</div>
    </S.MainTemplate>
  );
};

export default MainTemplate;
