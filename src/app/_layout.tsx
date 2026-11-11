
import { Stack } from 'expo-router';
import { createContext, useState } from 'react';
import type { MenuItem } from '../data/menuData';

type MenuContextType = {
  menuItems: MenuItem[];
  addMenuItem: (item: MenuItem) => void;
  updateMenuItem: (updatedItem: MenuItem) => void;
  deleteMenuItem: (id: string) => void;
};

export const MenuContext = createContext<MenuContextType | undefined>(
  undefined
);

export default function RootLayout() {
  const [menuItems, setMenuItems] = useState<MenuItem[]>([]);

  const addMenuItem = (item: MenuItem) => {
    setMenuItems((currentItems) => [...currentItems, item]);
  };

  const updateMenuItem = (updatedItem: MenuItem) => {
    setMenuItems((currentItems) =>
      currentItems.map((item) =>
        item.id === updatedItem.id ? updatedItem : item
      )
    );
  };

  const deleteMenuItem = (id: string) => {
    setMenuItems((currentItems) =>
      currentItems.filter((item) => item.id !== id)
    );
  };

  return (
    <MenuContext.Provider
      value={{
        menuItems,
        addMenuItem,
        updateMenuItem,
        deleteMenuItem,
      }}
    >
      <Stack />
    </MenuContext.Provider>
  );
}
