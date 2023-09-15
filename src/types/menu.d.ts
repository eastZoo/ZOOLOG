export interface Menu {
  is_open: number;
  id: number;
  level: number;
  menu_type: number;
  name: string;
  parrent_id: number;
  path: string;
  // component: JSX.Element;
}

export interface Tab {
  id: string;
  menuName: string;
  isSelected: boolean;
  component: JSX.Element;
}

export interface TabSelect {
  id: string;
  isClose?: boolean;
}
