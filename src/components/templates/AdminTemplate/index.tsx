import "@uiw/react-md-editor/markdown-editor.css";
import "@uiw/react-markdown-preview/markdown.css";
import dynamic from "next/dynamic";
import { useState } from "react";
import { request } from "@/lib/api";
import { useQuery } from "@tanstack/react-query";
import * as S from "./adminTemplate.style";
import { Button } from "@/components/atoms/Button";
import { InputSelect } from "@/components/atoms/Input/InputSelect";

const MDEditor = dynamic(() => import("@uiw/react-md-editor"), { ssr: false });

const AdminTemplate = () => {
  const [inputCount, setInputCount] = useState<any>(0);
  const [inputElements, setInputElements] = useState<any>([]);

  const [value, setValue] = useState<any>("**Hello world!!!**");

  const addCategoryHandler = () => {
    setInputCount(inputCount + 1);
    setInputElements([...inputElements, inputCount]);
  };

  const { data: category, refetch: categoryRefetch } = useQuery(
    ["get-category-all"],
    () =>
      request<any>({
        method: "GET",
        url: `category`,
      }).then((res) => {
        console.log(res);
        return res;
      })
  );

  const categoryItem = [
    { id: 1, name: "Javascript" },
    { id: 2, name: "TypeScript" },
    { id: 3, name: "Python" },
  ];

  return (
    <S.AdminTemplate>
      <S.PostTitWrapper>
        <InputSelect
          layout="columns"
          size="sm"
          width="150px"
          themeType="admin"
          options={categoryItem}
          // onChange={getCategoryOption}
          // value={categoryInput}
        />

        <S.PostTitle>
          <S.TitTextArea placeholder="제목을 입력하세요" />
        </S.PostTitle>
      </S.PostTitWrapper>
      <S.MarkdownContainer>
        <div data-color-mode="light">
          <MDEditor height={650} value={value} onChange={setValue} />
        </div>

        {/* 버튼그룹 */}
        <S.ButtonWrapper>
          <Button color="primary" label="완료" type="submit" />
          <Button color="primary" label="임시저장" type="submit" />
        </S.ButtonWrapper>
      </S.MarkdownContainer>
    </S.AdminTemplate>
  );
};

export default AdminTemplate;
