"use client";
import Pagination from "@/components/molcules/Pagination";
import PostList from "@/components/organisms/PostList";
import { ClipLoader } from "react-spinners";
import React, { useState } from "react";
import EmptyList from "@/components/atoms/EmptyList";
import * as S from "./postListTemplate.style";
interface PostListTemplateProps {
  data: any;
  isLoading: any;
  isError: any;
  error: any;
  isFetching: any;
  isPreviousData: any;
  setCurrentPage: any;
  currentPage: any;
}
const PostListTemplate = ({
  data,
  isLoading,
  isError,
  error,
  isFetching,
  isPreviousData,
  setCurrentPage,
  currentPage,
}: PostListTemplateProps) => {
  if (isLoading) return "Loading...";
  if (isError) return `Error: ${error.message}`;

  console.log(data);
  return (
    <S.PostListTemplate>
      <S.CategoryTit>Pagination</S.CategoryTit>
      {!data.postList.length ? (
        <EmptyList />
      ) : (
        <>
          <PostList postList={data.postList} />
          <S.PaginationContainer>
            <Pagination
              currentPage={currentPage}
              totalItems={data.totalData}
              onPageChange={(page: any) => setCurrentPage(page)}
              isPreviousData={isPreviousData}
            />
            {isFetching ? <ClipLoader color="#36d7b7" /> : null}
          </S.PaginationContainer>
        </>
      )}
    </S.PostListTemplate>
  );
};

export default PostListTemplate;
