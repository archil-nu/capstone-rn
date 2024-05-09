import React from 'react';
import { Alert } from 'react-native';

import {
  createTable,
  getMenuItems,
  saveMenuItems,
  filterByQueryAndCategories,
  dropTable,
} from '../utils/database';
import useUpdate from './useUpdate';

import { DEFAULT_SECTIONS, MENU_ITEMS_URL } from '../utils';

const fetchMenuAPI = async () => {
  try {
    const { menu } = await (await fetch(MENU_ITEMS_URL)).json();
    return (
      menu.map((item, index) => ({
        ...item,
        id: index,
      })) || []
    );
  } catch (e) {
    Alert.alert(e.message);
  }
  return [];
};

const createMenuListWithSections = (data) => {
  // Get all unique sections
  const sections = data.map((item) => item.category);
  const uniqueSections = Array.from(new Set(sections));

  return { menuListWithSections: data, uniqueSections };
};

const useMenuItems = () => {
  const [menuItems, setMenuItems] = React.useState([]);
  const [itemsQuery, setItemsQuery] = React.useState('');
  const [sections, setSections] = React.useState(DEFAULT_SECTIONS);
  const [filterSelections, setFilterSelections] = React.useState(
    sections.map(() => false)
  );

  React.useEffect(() => {
    (async () => {
      try {
        await dropTable();

        await createTable();
        let menu = await getMenuItems();

        if (!menu.length) {
          menu = await fetchMenuAPI();
          console.log('menu', menu);
          await saveMenuItems(menu);
        }
        const { menuListWithSections, uniqueSections } =
          createMenuListWithSections(menu);

        console.log('menuListWithSections', menuListWithSections);

        setMenuItems(menuListWithSections);
        setSections(uniqueSections);
      } catch (e) {
        // Handle error
        Alert.alert(e.message);
      }
    })();
  }, []);

  useUpdate(() => {
    (async () => {
      const activeCategories = sections.filter((s, i) => {
        // If all filters are deselected, all categories are active
        if (filterSelections.every((item) => item === false)) {
          return true;
        }
        return filterSelections[i];
      });
      try {
        const menuItems = await filterByQueryAndCategories(
          itemsQuery,
          activeCategories
        );
        const { menuListWithSections } = createMenuListWithSections(menuItems);
        console.log('menuListWithSections', menuListWithSections);
        setMenuItems(menuListWithSections);
      } catch (e) {
        Alert.alert(e.message);
      }
    })();
  }, [filterSelections, itemsQuery]);

  return {
    menuItems,
    itemsQuery,
    setItemsQuery,
    sections,
    filterSelections,
    setFilterSelections,
  };
};

export default useMenuItems;
