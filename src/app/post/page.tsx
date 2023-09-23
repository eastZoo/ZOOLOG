import PostList from "@/components/organisms/PostList";
import PostListTemplate from "@/components/templates/PostListTemplate";
import SideMenuLayout from "@/components/templates/SideMenuLayout";
import React from "react";

const Post = () => {
  return (
    <SideMenuLayout>
      <PostListTemplate />
    </SideMenuLayout>
  );
};

export default Post;
