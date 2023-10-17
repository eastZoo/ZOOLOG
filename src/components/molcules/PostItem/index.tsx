import React from "react";
import Link from "next/link";
import Chip from "@/components/atoms/Chip";
import PostCover from "@/styles/assets/images/sample-post.jpg";
import Profile from "@/styles/assets/images/profile.png";

import * as S from "./postItem.style";

const PostItem = ({ post: { category_id, id, name, post, title } }: any) => {
  return (
    <S.PostItemWrapper>
      <Link href={`/post/${id}/${category_id}`}>
        <S.PostItemCoverImg src={PostCover.src} alt="cover" />
      </Link>

      <Chip label={name} />
      <Link href={`/post/${id}/${category_id}`}>
        <h3>{title}</h3>
      </Link>
      <S.PostItemDescription>
        {post.substring(0, 25) + "..."}
      </S.PostItemDescription>
      <footer>
        <S.PostItemFooter>
          <S.AuthorImg src={Profile.src} alt="avatar" />
          <div>
            <h6>eastzoo</h6>
            <S.AuthorPtag>2023.09.25</S.AuthorPtag>
          </div>
        </S.PostItemFooter>
        <Link className="blogItem-link" href={`/blog`}>
          ➝
        </Link>
      </footer>
    </S.PostItemWrapper>
  );
};

export default PostItem;
