"use client";
import Link from "next/link";
import * as S from "./sideNavItem.style";
import { usePathname } from "next/navigation";

export const SideNavItem = ({ data }: any) => {
  const path = usePathname();

  return (
    <S.SideNavItem
      className={`${path.includes(data.path) ? "active" : "false"}`}
    >
      <Link href={data.path}>{data.name}</Link>
    </S.SideNavItem>
  );
};
