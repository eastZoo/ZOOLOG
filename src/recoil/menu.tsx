import { atom, selector } from "recoil";
import { Menu, Tab, TabSelect } from "../types/menu";
import { v1 } from "uuid";

export const menuListState = atom<Menu[]>({
  key: `menuList/${v1()}`,
  default: [],
});

export const openTabsState = atom<Tab[]>({
  key: `openTabs/${v1()}`,
  default: [],
});

export const selecteCategoryState = atom<number>({
  key: `selectedCategory/${v1()}`,
  default: 0,
});

export const selectCategorySelector = selector({
  key: `selectedCategorySelectoy/${v1()}`,
  get: ({ get }) => {
    return get(selecteCategoryState);
  },
  set: ({ set }, categoryId: any) => {
    console.log("set", categoryId);
    set(selecteCategoryState, categoryId);
  },
});

// export const selectedMenuSelector = selector({
//   key: `selectedMenuSelector/${v1()}`,
//   get: ({ get }) => {
//     return get(selecteMenuState);
//   },
//   set: ({ get, set }, newValue: Object) => {
//     const { id, isClose } = newValue as TabSelect;
//     const openTabs: Tab[] = get(openTabsState);
//     const menuList: Menu[] = get(menuListState);
//     const preMenuId: number = get(selecteMenuState);

//     if (isClose) {
//       const { chagedId, deletedMenuList } = closeTab(openTabs, id, preMenuId);
//       set(selecteMenuState, chagedId);
//       set(openTabsState, deletedMenuList);
//     } else {
//       const tmpOpenTabs = openTab(menuList, openTabs, id);
//       set(selecteMenuState, id);
//       set(openTabsState, tmpOpenTabs);
//     }
//   },
// });

// function closeTab(openTabs: Tab[], id: string, preMenuId: string) {
//   let chagedId = preMenuId;
//   let deletedMenuList = openTabs.filter((menu: Tab) => {
//     return menu.id !== id;
//   });

//   if (id === preMenuId && deletedMenuList.length > 0) {
//     chagedId = deletedMenuList[deletedMenuList.length - 1].id;
//     deletedMenuList[deletedMenuList.length - 1] = {
//       ...deletedMenuList[deletedMenuList.length - 1],
//       isSelected: true,
//     };
//   }

//   if (deletedMenuList.length === 0) chagedId = "";

//   return { chagedId, deletedMenuList };
// }

// function openTab(menuList: Menu[], openTabs: Tab[], id: number) {
//   let isUse: boolean = false;
//   const selectedMenu: Menu | undefined = menuList.find(
//     (menu: Menu) => menu.id === id
//   );

//   let tmpOpenTabs = openTabs.map((tab: Tab) => {
//     const tmpTab = { ...tab };
//     if (tmpTab.id === id) {
//       isUse = true;
//       return { ...tab, isSelected: true };
//     }
//     tmpTab.isSelected = false;
//     return { ...tab, isSelected: false };
//   });

//   if (!isUse) {
//     tmpOpenTabs = [
//       ...tmpOpenTabs,
//       {
//         id: id,
//         menuName: selectedMenu!.menuName,
//         isSelected: true,
//         component: menuComponent.find((menu: MenuComponent) => menu.id === id)
//           ?.component || <></>,
//       },
//     ];
//   }
//   return tmpOpenTabs;
// }
