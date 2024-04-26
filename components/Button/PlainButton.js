import { Pressable, StyleSheet, Text } from 'react-native';
import {
  COLORS,
  PRIMARY,
  SECONDARY,
  LIGHT,
  DARK,
  LILLY_WHITE,
} from '../../styles';

const PlainButton = ({ title, onPress, disabled, type, customStyles }) => {
  return (
    <Pressable
      style={{
        ...buttonStyles[type || DARK],
        ...buttonStyles.shared,
        ...customStyles,
      }}
      onPress={onPress}
      disabled={disabled}
    >
      <Text style={{ ...buttonStyles[type || DARK], ...buttonStyles.text }}>
        {title}
      </Text>
    </Pressable>
  );
};

const buttonStyles = StyleSheet.create({
  [LIGHT]: {
    backgroundColor: COLORS[PRIMARY][DARK],
    color: COLORS[SECONDARY][LILLY_WHITE],
  },
  [DARK]: {
    backgroundColor: COLORS[PRIMARY][DARK],
    color: COLORS[SECONDARY][LILLY_WHITE],
  },
  text: {
    textAlign: 'center',
    fontSize: 15,
    fontFamily: 'Karla-Regular',
  },
  shared: {
    padding: 10,
    margin: 10,
    borderRadius: 10,
    minWidth: 150,
  },
});

export default PlainButton;
