"use client";
import { SideNavItem } from "@/components/atoms/SideNavItem";
import * as S from "./sideNavList.style";
import React, { useState, useEffect, useCallback } from "react";
import { useRecoilState, useRecoilValue, useSetRecoilState } from "recoil";
import { useQuery } from "@tanstack/react-query";
import { request } from "@/lib/api";
import { menuListState, selecteMenuState } from "@/recoil/menu";
import { groupBy } from "@/lib/common.fn";
import { Menu } from "@/types/menu";
import Link from "next/link";
// import D02Icon from "@/styles/assets/svg/File.svg";
// import D01Icon from "@/styles/assets/svg/Group-folders.svg";
// import MovePageIcon from "@/styles/assets/svg/Angle-right.svg";

function SideNavList({ openHandler }: any) {
  const [menuList, setMenuList] = useRecoilState(menuListState);
  const [menuParent, setMenuParent] = useState<number>();
  const [menuGroup, setMenuGroup] = useState(groupBy(menuList, "depth"));
  const selectedMenuId = useRecoilValue(selecteMenuState);
  // const setMenu = useSetRecoilState(selectedMenuSelector);

  const { data: MenuListData } = useQuery(["menu-list"], () =>
    request({
      method: "GET",
      url: `menu/menu-list`,
    }).then((res) => {
      return res;
    })
  );

  // recoil에 메뉴 리스트 저장
  useEffect(() => {
    if (Array.isArray(MenuListData) && MenuListData.length !== 0) {
      setMenuList(MenuListData);
    }
  }, [MenuListData]);

  // 메뉴 그룹 분류
  useEffect(() => {
    setMenuGroup(groupBy(menuList, "level"));
  }, [menuList]);

  function toggleMenu(id: number, isOpen: number) {
    setMenuList(
      menuList.map((menu: any) => {
        if (menu.id === id) {
          return { ...menu, is_open: !isOpen };
        }
        return menu;
      })
    );
  }

  // 토글 메뉴 렌더링 함수 부분
  const renderMenu = useCallback(
    (list: Menu[], level: number = 0, parrent_id: number | null) => {
      const mList =
        list?.filter((menu: Menu) => menu.parrent_id === parrent_id) || [];

      const resultComponent = [];
      for (const menu of mList) {
        if (menuGroup[level + 1] && menu.menu_type === 0) {
          // 0 or 1
          resultComponent.push(
            <div key={menu.id}>
              <div
                className={`m-dept01 ${
                  menuParent === menu.id ? "page-now" : ""
                } ${menu.is_open ? "open" : ""}`}
                onClick={() => toggleMenu(menu.id, menu.is_open)}
              >
                <span>
                  {[...Array(level)].map((num: any) => {
                    return <>&nbsp;&nbsp;&nbsp;</>;
                  })}
                  {/* <D01Icon className="d01-icon" /> */}
                  <span>{menu.name}</span>
                </span>
                {/* <MovePageIcon className="move-page-icon" /> */}
              </div>
              <div className={`m-dept02-list ${menu.is_open ? "open" : ""}`}>
                {renderMenu(menuGroup[level + 1], level + 1, menu.id)}
              </div>
            </div>
          );
        } else {
          resultComponent.push(
            <Link href={"/post"}>
              <div
                key={menu.id}
                className={`m-dept02 ${
                  menu.id === selectedMenuId ? "page-now" : ""
                }`}
                onClick={(is_open: any) => {
                  if (window.innerWidth <= 600) {
                    // setMenu({ id: menu.id });
                    setMenuParent(menu.parrent_id);
                    openHandler(!is_open);
                  } else {
                    // setMenu({ id: menu.id });
                    setMenuParent(menu.parrent_id);
                  }
                }}
              >
                <span>
                  {[...Array(level)].map((num: any) => {
                    return <>&nbsp;&nbsp;&nbsp;</>;
                  })}
                  {/* <D02Icon className="d02-icon" /> */}
                  <span>- {menu.name}</span>
                </span>
              </div>
            </Link>
          );
        }
      }
      return resultComponent;
    },
    [menuGroup]
  );

  return <S.SideNavList>{renderMenu(menuGroup[0], 0, 0)}</S.SideNavList>;
}

export default React.memo(SideNavList);
