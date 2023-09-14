export interface Menu {
  id: number;
  level: number;
  menu_type: number;
  name: string;
  parrent_id: number;
  path: string;
  is_open: number;
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
