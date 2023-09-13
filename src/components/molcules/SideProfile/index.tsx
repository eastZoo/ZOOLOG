import React from "react";
import * as S from "./sideProfile.style";
import Image from "next/image";
import Profile from "@/styles/assets/images/profile.png";

const SideProfile = () => {
  return (
    <S.SideProfile>
      <S.SideProfileImg>
        <Image alt="profile" src={Profile} />
      </S.SideProfileImg>
      <S.ProfileNameTit>
        <div>#nickname</div>
        <div>name</div>
      </S.ProfileNameTit>
      <S.ProfileNav>
        <div>setting</div>
        <div>profile</div>
        <div>search</div>
      </S.ProfileNav>
    </S.SideProfile>
  );
};

export default SideProfile;
