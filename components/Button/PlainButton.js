import { Pressable, StyleSheet, Text } from 'react-native';
import {
  COLORS,
  PRIMARY,
  SECONDARY,
  LIGHT,
  DARK,
  LILLY_WHITE,
  GONDOLA,
  FONTS,
} from '../../styles';

const PlainButton = ({ title, onPress, disabled, type, customStyles }) => {
  const currentType = type || DARK;

  return (
    <Pressable
      style={{
        ...buttonStyles[currentType],
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
    backgroundColor: COLORS[PRIMARY][LIGHT],
    color: COLORS[SECONDARY][GONDOLA],
  },
  [DARK]: {
    backgroundColor: COLORS[PRIMARY][DARK],
    color: COLORS[SECONDARY][LILLY_WHITE],
  },
  text: {
    textAlign: 'center',
    fontSize: 20,
    fontFamily: FONTS.KARLA_REGULAR,
  },
  shared: {
    padding: 10,
    margin: 10,
    borderRadius: 10,
    minWidth: 150,
  },
});

export default PlainButton;
