import React from "react";

const PostList = ({ products }: any) => {
  return (
    <div className="grid gap-4 md:grid-cols-3">
      {products?.map((product: any) => (
        <div className="card w-full bg-base-200 shadow-xl">
          <div className="card-body">
            <p>#post{product.id}</p>
            <h2 className="card-title">{product.title}</h2>
            <p>{product.body}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default PostList;
