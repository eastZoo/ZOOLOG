import React from "react";
import * as S from "./postList.style";
import PostItem from "@/components/molcules/PostItem";

const PostList = ({ postList }: any) => {
  return (
    <S.PaginationWrapper>
      {postList?.map((post: any) => (
        <PostItem post={post} />
      ))}
    </S.PaginationWrapper>
  );
};

export default PostList;
