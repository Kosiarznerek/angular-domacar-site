// Navbar base item interface
interface INavbarBaseItem {
  displayName: string;
  href: string;
}

// Navbar item interface
interface INavbarItem {
  displayName: string;
  isExpanded?: boolean;
  children: INavbarBaseItem[];
}

// Navbar item type
export type TNavbarItem = INavbarBaseItem | INavbarItem;
