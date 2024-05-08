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
  DARK_SALMON,
  YELLOW,
} from '../../styles';

const PlainButton = ({
  title,
  onPress,
  disabled,
  hidden,
  type,
  overrideButtonStyles = {},
  overrideLabelStyles = {},
}) => {
  const currentType = type || DARK;

  const mergedButtonStyles = {
    ...buttonStyles[currentType],
    ...buttonStyles.shared,
    ...overrideButtonStyles,
    ...(disabled && { ...buttonStyles.disabled }),
    ...(hidden && { ...buttonStyles.hidden }),
  };

  const mergedLabelStyles = {
    ...buttonStyles[currentType],
    ...labelStyles.text,
    ...overrideLabelStyles,
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
    backgroundColor: COLORS[SECONDARY][LILLY_WHITE],
    color: COLORS[SECONDARY][GONDOLA],
    borderColor: COLORS[SECONDARY][GONDOLA],
  },
  [YELLOW]: {
    backgroundColor: COLORS[PRIMARY][YELLOW],
    color: COLORS[SECONDARY][GONDOLA],
    borderColor: COLORS[SECONDARY][PEACH_PUFF],
  },
  [DARK]: {
    backgroundColor: COLORS[PRIMARY][DARK],
    color: COLORS[SECONDARY][LILLY_WHITE],
  },
  hidden: {
    backgroundColor: 'transparent',
    borderColor: 'transparent',
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
    borderWidth: 1,
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
    color: 'transparent',
    borderColor: 'transparent',
  },
});

export default PlainButton;
