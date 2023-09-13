"use client";
import { request } from "@/lib/api";
import { useQuery } from "@tanstack/react-query";
import React, { useState } from "react";

const admin = () => {
  const [inputCount, setInputCount] = useState<any>(0);
  const [inputElements, setInputElements] = useState<any>([]);

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

  return (
    <div>
      <div>카테고리 관리</div>
      <div>
        {category?.map((item: string) => {
          return <div>item</div>;
        })}
      </div>
      <div style={{ display: "flex", flexDirection: "column" }}>
        {inputElements.map((index: any) => (
          <div>
            <input key={index} type="text" placeholder={`Input ${index}`} />
            <button onClick={addCategoryHandler}>저장</button>
          </div>
        ))}
      </div>
      <div>
        <button onClick={addCategoryHandler}>카테고리 추가</button>
      </div>
    </div>
  );
};

export default admin;
