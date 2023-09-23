import React from "react";
import MarkdownPreview from "@uiw/react-markdown-preview";
import { postDataType } from "@/app/post/[id]/page";

interface PostTemplateProps {
  postData?: postDataType;
}
const PostTemplate = ({ postData }: PostTemplateProps) => {
  return (
    <div>
      <div>
        <div>제목</div>
        <h2>{postData?.title}</h2>
        <hr />
      </div>

      <MarkdownPreview
        style={{ padding: 100 }}
        source={postData?.post}
        wrapperElement={{
          "data-color-mode": "light",
        }}
      />
    </div>
  );
};

export default PostTemplate;
