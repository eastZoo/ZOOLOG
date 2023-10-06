"use client";
import Pagination from "@/components/molcules/Pagination";
import PostList from "@/components/organisms/PostList";
import { ClipLoader } from "react-spinners";
import React, { useState } from "react";
import { useQuery } from "@tanstack/react-query";
import { getPostList } from "@/api/api";

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
  // const [currentPage, setCurrentPage] = useState(1);

  // const { data, isLoading, isError, error, isFetching, isPreviousData }: any =
  //   useQuery({
  //     queryKey: ["posts", currentPage],
  //     queryFn: () => getPostList(currentPage),
  //     keepPreviousData: true,
  //   });

  if (isLoading) return "Loading...";
  if (isError) return `Error: ${error.message}`;

  return (
    <div className="max-w-4xl mx-auto">
      <h1 className="text-center text-2xl my-5 underline font-bold">
        Pagination
      </h1>
      <PostList postList={data.postList} />
      <div className="flex items-center justify-between my-5">
        <Pagination
          currentPage={currentPage}
          totalItems={data.totalData}
          onPageChange={(page: any) => setCurrentPage(page)}
          isPreviousData={isPreviousData}
        />
        {isFetching ? <ClipLoader color="#36d7b7" /> : null}
      </div>
    </div>
  );
};

export default PostListTemplate;
