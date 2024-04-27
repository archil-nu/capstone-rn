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
  PEACH_PUFF,
} from '../../styles';

const PlainButton = ({
  title,
  onPress,
  disabled,
  hidden,
  type,
  customStyles = { text: {} },
}) => {
  const currentType = type || DARK;

  const mergedButtonStyles = {
    ...buttonStyles[currentType],
    ...buttonStyles.shared,
    ...customStyles,
    ...(disabled && { ...buttonStyles.disabled }),
    ...(hidden && { ...buttonStyles.hidden }),
  };

  const mergedLabelStyles = {
    ...buttonStyles[currentType],
    ...labelStyles.text,
    ...(disabled && { ...labelStyles.disabled }),
    ...(hidden && { ...labelStyles.hidden }),
  };

  return (
    <Pressable style={mergedButtonStyles} onPress={onPress} disabled={disabled}>
      <Text style={mergedLabelStyles}>{title}</Text>
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
  hidden: {
    backgroundColor: 'transparent',
  },
  disabled: {
    opacity: 0.5,
  },
  shared: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 10,
    margin: 15,
    borderRadius: 10,
    minWidth: 100,
    maxHeight: 50,
  },
});

const labelStyles = StyleSheet.create({
  text: {
    textAlign: 'center',
    fontSize: 20,
    fontFamily: FONTS.KARLA_REGULAR,
  },
  disabled: {
    opacity: 0.5,
  },
  hidden: {
    backgroundColor: 'transparent',
  },
});

export default PlainButton;
