import { View, Text, StyleSheet } from 'react-native';
import MenuList from '../components/Menu/MenuList';

const HomeScreen = ({ preferences }) => {
  return (
    <View style={homeStyles.container}>
      <Text>Home Screen</Text>
      <MenuList />
    </View>
  );
};

const homeStyles = StyleSheet.create({
  container: { flex: 1, alignItems: 'center', backgroundColor: 'white' },
});

export default HomeScreen;
