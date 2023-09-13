import { SideNavItem } from "@/components/atoms/SideNavItem";
import * as S from "./sideNavList.style";

export const SideNavList = () => {
  const menus = [
    {
      id: 1,
      name: "Language",
      path: "/admin/store",
    },
    {
      id: 2,
      name: "Library",
      path: "/admin/ads",
    },
    {
      id: 3,
      name: "Mark Up",
      path: "/admin/users",
    },
  ];

  return (
    <S.SideNavList>
      {menus.map((menu, idx) => {
        return <SideNavItem data={menu} key={idx} />;
      })}
    </S.SideNavList>
  );
};
