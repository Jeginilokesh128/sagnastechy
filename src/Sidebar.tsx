// SidebarMenu.tsx
import React, { useState } from "react";
import {
  Sidebar,
  Menu,
  MenuItem,
  SubMenu,
  sidebarClasses,
  menuClasses,
} from "react-pro-sidebar";
import { useNavigate, useLocation } from "react-router-dom";

export type MenuItemType = {
  label: string;
  path?: string;
  icon?: React.ReactNode;
  children?: MenuItemType[];
  suffix?: React.ReactNode;
};

interface SidebarMenuProps {
  menuItems: MenuItemType[];
  defaultCollapsed?: boolean;
  toggled?: boolean;
  setToggled?: React.Dispatch<React.SetStateAction<boolean>>;
}

const SidebarMenu: React.FC<SidebarMenuProps> = ({
  menuItems,
  defaultCollapsed = false,
  toggled,
  setToggled,
}) => {
  const [collapsed, setCollapsed] = useState(defaultCollapsed);
  const navigate = useNavigate();
  const location = useLocation();

  // Check if any child in submenu matches current path
  const isSubMenuActive = (children?: MenuItemType[]): boolean => {
    if (!children) return false;
    return children.some(
      (child) =>
        child.path === location.pathname || isSubMenuActive(child.children)
    );
  };

  const renderMenuItems = (items: MenuItemType[]) =>
    items.map((item, index) =>
      item.children ? (
        <SubMenu
          key={index}
          label={item.label}
          icon={item.icon}
          defaultOpen={isSubMenuActive(item.children)}
          className={
            isSubMenuActive(item.children)
              ? "bg-slate-700 text-white"
              : "text-slate-300 hover:bg-slate-700 hover:text-white"
          }
        >
          {renderMenuItems(item.children)}
        </SubMenu>
      ) : (
        <MenuItem
          key={index}
          icon={item.icon}
          suffix={item.suffix}
          onClick={() => item.path && navigate(item.path)}
          className={
             "text-slate-300 hover:bg-slate-700 hover:text-white"
          }
        >
          {item.label}
        </MenuItem>
      )
    );

  return (
    <Sidebar
      collapsed={collapsed}
      toggled={toggled}
      onBackdropClick={() => setToggled?.(true)}
      breakPoint="md"
      className="shadow-md asidebar"
      rootStyles={{
        [`.${sidebarClasses.container}`]: {
          backgroundColor: "#191e4d !important",
          color: "white",
        },
        [`.${menuClasses.subMenuContent}`]: {
          backgroundColor: "#191e4d !important",
        },
      }}
    >
      {/* Header */}
      <div className="flex items-center justify-between p-4">
        {!collapsed && <h2 className="text-lg font-bold">Sagnas Tecjy</h2>}
        <button
          onClick={() =>{
           setToggled?.(!collapsed); // safe
           setCollapsed(!collapsed);
          }}
          className="text-white text-sm px-2 py-1 rounded bg-slate-600"
        >
          {collapsed ? "»" : "«"}
        </button>
      </div>

      {/* Menu */}
      <Menu>{renderMenuItems(menuItems)}</Menu>

      {/* Footer */}
      {/* <div className="p-4 mt-auto">
        <button className="w-full rounded-lg bg-gradient-to-r from-blue-400 to-blue-600 py-2 text-white font-semibold">
          View Code
        </button>
      </div> */}
    </Sidebar>
  );
};

export default SidebarMenu;
