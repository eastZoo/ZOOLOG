"use client";
import PostListTemplate from "@/components/templates/PostListTemplate";
import SideMenuLayout from "@/components/templates/SideMenuLayout";
import { request } from "@/lib/api";
import { ITEM_PER_PAGE } from "@/lib/utils/constants";
import { selecteCategoryState } from "@/recoil/menu";
import { useQuery } from "@tanstack/react-query";
import React, { useEffect, useState } from "react";
import { useRecoilValue } from "recoil";

const Post = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const categoryId = useRecoilValue(selecteCategoryState);

  /** 카테고리별 게시글 목록 가져오기 Get */
  const {
    data,
    refetch: postDataRefetch,
    isLoading,
    isError,
    error,
    isFetching,
    isPreviousData,
  } = useQuery(
    ["list-by-category", categoryId, currentPage],
    () =>
      request<any>({
        method: "GET",
        url: `post/${categoryId}?_page=${currentPage}&_limit=${ITEM_PER_PAGE}`,
      }).then((res) => {
        return res;
      }),
    { keepPreviousData: true }
  );

  console.log("data  :", data);
  useEffect(() => {
    postDataRefetch();
    setCurrentPage(1);
  }, [categoryId]);
  return (
    <SideMenuLayout>
      <PostListTemplate
        data={data}
        isLoading={isLoading}
        isError={isError}
        error={error}
        isFetching={isFetching}
        isPreviousData={isPreviousData}
        setCurrentPage={setCurrentPage}
        currentPage={currentPage}
      />
    </SideMenuLayout>
  );
};

export default Post;
