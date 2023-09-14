import { useMutation, useQueryClient } from "@tanstack/react-query";
import { toast } from "react-toastify";
import { request, setIp } from "./api";

export const groupBy = function (data: any, key: any) {
  if (!Array.isArray(data) || data.length === 0) {
    return { 0: [] };
  }

  return data.reduce(function (carry: any, el: any) {
    const group = el[key];
    if (carry[group] === undefined) {
      carry[group] = [];
    }

    carry[group].push(el);
    return carry;
  }, {});
};

export function usePostMutation(
  code: string,
  onSuccess: any = () => {},
  beforeSend = (data: any) => data
) {
  const queryClient = useQueryClient();

  return useMutation(
    (data: any) => {
      const sendData = beforeSend(data);
      return request({ method: "POST", url: `/${code}`, data: sendData });
    },
    {
      onSuccess: (result: any) => {
        queryClient.invalidateQueries([code]);
        onSuccess(result);
      },
      onError: mutationOnErrorFunction,
    }
  );
}

export function usePutMutation(
  code: string,
  onSuccess: any = () => {},
  beforeSend = (data: any) => data
) {
  const queryClient = useQueryClient();

  return useMutation(
    (data: any) => {
      const sendData = beforeSend(data);
      return request({ method: "PUT", url: `/${code}`, data: sendData });
    },
    {
      onSuccess: (res) => {
        queryClient.invalidateQueries([code]);
        onSuccess(res);
      },
      onError: mutationOnErrorFunction,
    }
  );
}

export function useDeleteMutation(code: string, onSuccess: any = () => {}) {
  const queryClient = useQueryClient();

  return useMutation(
    (key: any) => request({ method: "DELETE", url: `/${code}/${key}` }),
    {
      onSuccess: () => {
        queryClient.invalidateQueries([code]);
        onSuccess();
      },
      onError: mutationOnErrorFunction,
    }
  );
}

export function mutationOnErrorFunction(err: any) {
  toast.error(err?.message || "ERROR");
  console.log("[err]", err);
}

export const toAbsoluteUrl = (pathname: string) =>
  process.env.PUBLIC_URL + pathname;
