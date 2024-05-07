import React from 'react';
import { StyleSheet } from 'react-native';
import BouncyCheckbox from 'react-native-bouncy-checkbox';
import { COLORS, PRIMARY, DARK, FONTS } from '../../styles';

const Checkbox = ({ label, onChange, value }) => (
  <BouncyCheckbox
    size={20}
    fillColor={COLORS[PRIMARY][DARK]}
    unFillColor={'transparent'}
    text={label}
    style={checkboxStyles.container}
    iconStyle={checkboxStyles.icon}
    innerIconStyle={checkboxStyles.innerIcon}
    textStyle={checkboxStyles.label}
    onPress={(isChecked) => {
      onChange(isChecked);
    }}
    isChecked={!!value}
  />
);

const checkboxStyles = StyleSheet.create({
  container: {
    width: '100%',
    marginBottom: 10,
  },
  label: {
    textDecorationLine: 'none',
    fontFamily: FONTS.KARLA_REGULAR,
    fontSize: 13,
  },
  icon: {
    borderRadius: 5,
    marginRight: 0,
  },
  innerIcon: {
    borderRadius: 5,
    borderColor: COLORS[PRIMARY][DARK],
    borderWidth: 2,
  },
});

export default Checkbox;
