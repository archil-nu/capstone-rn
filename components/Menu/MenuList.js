import { useEffect, useState, useCallback, useMemo } from 'react';
import { Text, View, StyleSheet, SafeAreaView, FlatList } from 'react-native';
import debounce from 'lodash.debounce';

import useMenuItems from '../../hooks/useMenuItems';

import Filters from './Filters';
import MenuItem from './MenuItem';
import { COLORS, FONTS, GONDOLA, SECONDARY, LILLY_WHITE } from '../../styles';

const menuTitle = 'Order for delivery!';

const MenuList = () => {
  const [searchBarText, setSearchBarText] = useState('');

  const {
    menuItems,
    itemsQuery,
    setItemsQuery,
    sections,
    filterSelections,
    setFilterSelections,
  } = useMenuItems();

  const lookup = useCallback((q) => {
    setItemsQuery(q);
  }, []);

  const debouncedLookup = useMemo(() => debounce(lookup, 500), [lookup]);

  // const handleSearchChange = (text) => {
  //   setSearchBarText(text);
  //   debouncedLookup(text);
  // };

  const handleFiltersChange = async (index) => {
    const arrayCopy = [...filterSelections];
    arrayCopy[index] = !filterSelections[index];
    setFilterSelections(arrayCopy);
  };

  return (
    <SafeAreaView style={menuStyles.container}>
      {/* <Searchbar
        placeholder="Search"
        placeholderTextColor="white"
        onChangeText={handleSearchChange}
        value={searchBarText}
        style={styles.searchBar}
        iconColor="white"
        inputStyle={{ color: 'white' }}
        elevation={0}
  /> */}
      <View style={menuStyles.header}>
        <Text style={menuStyles.title}>{menuTitle}</Text>
      </View>
      <Filters
        selections={filterSelections}
        onChange={handleFiltersChange}
        sections={sections}
      />
      <View style={menuStyles.separator} />
      <FlatList
        style={menuStyles.sectionList}
        data={menuItems}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => <MenuItem {...item} />}
      />
    </SafeAreaView>
  );
};

const menuStyles = StyleSheet.create({
  container: {
    flex: 1,
    // paddingTop: StatusBar.currentHeight,
    // backgroundColor: 'red',
    width: '100%',
  },
  header: {
    padding: 10,
    paddingHorizontal: 20,
  },
  separator: {
    height: 1,
    marginHorizontal: 15,
    // padding: 10,
    backgroundColor: COLORS[SECONDARY][LILLY_WHITE],
  },
  title: {
    fontSize: 20,
    fontFamily: FONTS.KARLA_BOLD,
    fontWeight: 'bold',
    textTransform: 'uppercase',
    color: COLORS[SECONDARY][GONDOLA],
  },
  sectionList: {},
  searchBar: {
    marginBottom: 24,
    backgroundColor: '#495E57',
    shadowRadius: 0,
    shadowOpacity: 0,
  },
  item: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
});

export default MenuList;
