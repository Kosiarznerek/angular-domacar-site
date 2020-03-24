// Navbar base item interface
export interface INavbarBaseItem {
  displayName: string;
  href: string;
}

// Navbar item interface
export interface INavbarItem {
  displayName: string;
  isExpanded?: boolean;
  children: INavbarBaseItem[];
}

// Navbar item type
export type TNavbarItem = INavbarBaseItem | INavbarItem;
