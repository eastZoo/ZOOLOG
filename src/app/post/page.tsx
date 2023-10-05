"use client";
import PostListTemplate from "@/components/templates/PostListTemplate";
import SideMenuLayout from "@/components/templates/SideMenuLayout";
import { request } from "@/lib/api";
import { selecteCategoryState } from "@/recoil/menu";
import { useQuery } from "@tanstack/react-query";
import React, { useEffect } from "react";
import { useRecoilValue } from "recoil";

const Post = () => {
  const categoryId = useRecoilValue(selecteCategoryState);

  /** 카테고리별 게시글 목록 가져오기 Get */
  const { refetch: postDataRefetch } = useQuery(["list-by-category"], () =>
    request<any>({
      method: "GET",
      url: `post/${categoryId}`,
    }).then((res) => {
      console.log(res);
      return res;
    })
  );

  useEffect(() => {
    postDataRefetch();
  }, [categoryId]);
  return (
    <SideMenuLayout>
      <PostListTemplate />
    </SideMenuLayout>
  );
};

export default Post;
