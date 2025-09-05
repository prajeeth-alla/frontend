export interface SideMenuItem {
  label: string;
  routerLink: string;
  icon?: string;
  roles?: string[]; // For role-based access
  isVisible?: boolean;
}
