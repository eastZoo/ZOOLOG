"use client";
import PostDetailTemplate from "@/components/templates/PostDetailTemplate";
import SideMenuLayout from "@/components/templates/SideMenuLayout";
import { request } from "@/lib/api";
import { useQuery } from "@tanstack/react-query";
import { useEffect, useState } from "react";
import { PropagateLoader } from "react-spinners";

export interface postDataType {
  id: number;
  category_id: string;
  title: string;
  post: string;
}

export default function PostDetail({ params }: { params: { id: string } }) {
  const [dataSource, setDataSource] = useState();
  const [isLoading, setIsLoading] = useState(false);

  /** 게시글 디테일 Get */
  const { refetch: postDataRefetch } = useQuery(["post-findOne"], () =>
    request<postDataType | any>({
      method: "GET",
      url: `post/${params.id}`,
    }).then((res) => {
      setDataSource(res);
      setIsLoading(false);
      return res;
    })
  );

  useEffect(() => {
    setIsLoading(true);
    setDataSource(undefined);
    postDataRefetch();
  }, [params.id]);

  return (
    <SideMenuLayout>
      {isLoading ? (
        <PropagateLoader color="#3697d7" />
      ) : (
        <PostDetailTemplate postData={dataSource} />
      )}
    </SideMenuLayout>
  );
}
