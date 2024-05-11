import React from 'react';
import { View, StyleSheet } from 'react-native';

import { Banner, MenuList } from '../components';

const HomeScreen = ({ preferences }) => {
  const [searchText, setSearchText] = React.useState('');

  return (
    <View style={homeStyles.container}>
      <Banner onSearch={setSearchText} />
      <MenuList searchText={searchText} />
    </View>
  );
};

const homeStyles = StyleSheet.create({
  container: { flex: 1, alignItems: 'center', backgroundColor: 'white' },
});

export default HomeScreen;
