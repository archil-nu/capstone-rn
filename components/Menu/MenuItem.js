import { View, Text, StyleSheet } from 'react-native';

const MenuItem = ({ title, price }) => (
  <View style={menuItemstyles.item}>
    <Text style={menuItemstyles.title}>{title}</Text>
    <Text style={menuItemstyles.title}>${price}</Text>
  </View>
);

const menuItemstyles = StyleSheet.create({
  item: {
    backgroundColor: 'white',
    padding: 20,
    marginVertical: 8,
    marginHorizontal: 16,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  title: {
    fontSize: 16,
  },
});

export default MenuItem;
