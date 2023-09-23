import "@uiw/react-md-editor/markdown-editor.css";
import "@uiw/react-markdown-preview/markdown.css";
import dynamic from "next/dynamic";
import { useState } from "react";
import { request } from "@/lib/api";
import { useMutation, useQuery } from "@tanstack/react-query";
import * as S from "./adminTemplate.style";
import { Button } from "@/components/atoms/Button";
import { InputSelect } from "@/components/atoms/Input/InputSelect";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";

const MDEditor = dynamic(() => import("@uiw/react-md-editor"), { ssr: false });

const AdminTemplate = () => {
  const [post, setPost] = useState<any>("**Hello world!!!**");
  const [category, setCategory] = useState<any>();
  const [title, setTitle] = useState<any>();
  const schema = yup.object({
    categoryId: yup.string().nullable().required("카테고리를 선택해주세요"),
    title: yup.string().nullable().required("제목을 입력해주세요"),
  });

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({ resolver: yupResolver(schema) });

  // 카테고리 변경 핸들러
  const getCategoryOption = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setCategory(e.target.value);
  };
  // 카테고리 변경 핸들러
  const getTitleHandler = (e: any) => {
    setTitle(e.target.value);
  };

  /** 글등록 함수 */
  const { mutateAsync: postSubmit } = useMutation(
    (data: any) =>
      request<any>({
        method: "POST",
        url: `post/create`,
        data: data,
      }),
    {
      onSuccess: () => {},
    }
  );

  const { data: categoryList, refetch: categoryRefetch } = useQuery(
    ["get-category-all"],
    () =>
      request<any>({
        method: "GET",
        url: `menu/post/category`,
      }).then((res) => {
        return res;
      })
  );

  const onSubmit = (data: any) => {
    console.log(data);
    const dataSource = {
      ...data,
      categoryId: Number(data.categoryId),
      post: post,
    };

    console.log(dataSource);
    postSubmit(dataSource);
  };

  console.log(category);
  console.log(title);
  return (
    <S.AdminTemplate onSubmit={handleSubmit(onSubmit)}>
      <S.PostTitWrapper>
        <InputSelect
          layout="columns"
          size="sm"
          width="150px"
          themeType="admin"
          options={categoryList}
          register={register("categoryId")}
          onChange={getCategoryOption}
          value={category}
        />

        <S.PostTitle>
          <S.TitTextArea
            placeholder="제목을 입력하세요"
            value={title}
            {...register("title")}
            onChange={getTitleHandler}
          />
        </S.PostTitle>
      </S.PostTitWrapper>
      <S.MarkdownContainer>
        <div data-color-mode="light">
          <MDEditor
            height={650}
            value={post}
            onChange={setPost}
            fullscreen={false}
          />
        </div>

        {/* 버튼그룹 */}
        <S.ButtonWrapper>
          <Button color="submit" label="완료" type="submit" />
          <Button color="primary" label="임시저장" type="submit" />
        </S.ButtonWrapper>
      </S.MarkdownContainer>
    </S.AdminTemplate>
  );
};

export default AdminTemplate;
