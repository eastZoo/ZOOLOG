import React from "react";

const PostList = ({ postList }: any) => {
  console.log("postList  :", postList);
  return (
    <div className="grid gap-4 md:grid-cols-3">
      {postList?.map((post: any) => (
        <div className="card w-full bg-base-200 shadow-xl">
          <div className="card-body">
            <p>#post{post.id}</p>
            <h2 className="card-title">{post.title}</h2>
            <p>{post.post.substring(0, 25) + "..."}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default PostList;
