import { StyleSheet } from 'react-native';

import PlainButton from './PlainButton';

const RoundButton = ({
  overrideButtonStyles,
  overrideLabelStyles,
  ...props
}) => {
  const mergedStyles = StyleSheet.create({
    ...roundButtonStyles,
    ...overrideButtonStyles,
  });

  return (
    <PlainButton
      {...props}
      overrideButtonStyles={mergedStyles}
      overrideLabelStyles={overrideLabelStyles}
    />
  );
};

const roundButtonStyles = StyleSheet.create({
  flex: 0,
  padding: 0,
  borderRadius: 20,
  height: 40,
  minWidth: 40,
});

export default RoundButton;
