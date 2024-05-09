import { View, Text, StyleSheet, Image } from 'react-native';
import {
  COLORS,
  SECONDARY,
  LILLY_WHITE,
  FONTS,
  PRIMARY,
  DARK,
} from '../../styles';

const MenuItem = ({ name, description, image, price }) => {
  const imageSource = `https://github.com/Meta-Mobile-Developer-PC/Working-With-Data-API/blob/main/images/${image}?raw=true`;

  return (
    <View style={menuItemStyles.container}>
      <View style={menuItemStyles.nameAndDesc}>
        <Text style={menuItemStyles.name}>{name}</Text>
        <Text style={menuItemStyles.description} numberOfLines={3}>
          {description}
        </Text>
        <Text style={menuItemStyles.price}>${price}</Text>
      </View>
      <View style={menuItemStyles.thumbnail}>
        <Image style={menuItemStyles.image} source={{ uri: imageSource }} />
      </View>
    </View>
  );
};

const menuItemStyles = StyleSheet.create({
  container: {
    marginHorizontal: 16,
    flexDirection: 'row',
    flex: 1,
    borderBottomColor: COLORS[SECONDARY][LILLY_WHITE],
    borderBottomWidth: 1,
    marginVertical: 2,
    paddingVertical: 4,
  },
  nameAndDesc: {
    flex: 0.7,
    marginVertical: 10,
  },
  thumbnail: {
    flex: 0.3,
    justifyContent: 'center',
    alignItems: 'center',
  },
  name: {
    fontSize: 16,
    flex: 0.3,
    maxHeight: '20%',
    fontFamily: FONTS.KARLA_BOLD,
    fontWeight: 'bold',
  },
  description: {
    fontSize: 14,
    flex: 0.4,
    marginVertical: 10,
    fontFamily: FONTS.KARLA_REGULAR,
  },
  price: {
    fontSize: 16,
    fontWeight: 'bold',
    flex: 0.3,
    maxHeight: '20%',
    color: COLORS[PRIMARY][DARK],
    fontFamily: FONTS.KARLA_REGULAR,
  },
  image: {
    width: 100,
    height: 100,
    borderRadius: 5,
  },
});

export default MenuItem;
