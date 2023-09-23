import { ITEM_PER_PAGE } from "@/lib/utils/constants";

export const getPostList = async (page: any) => {
  const response = await fetch(
    `https://jsonplaceholder.typicode.com/posts?_page=${page}&_limit=${ITEM_PER_PAGE}`
  );
  const totalData = response.headers.get("X-Total-Count");
  const data = await response.json();

  return {
    products: data,
    totalData,
  };
};
