import { StyleSheet } from 'react-native';

import {
  COLORS,
  PRIMARY,
  DARK,
  SECONDARY,
  LILLY_WHITE,
  FONTS,
} from '../../styles';

import Input from './Input';

const ProfileInput = (props) => {
  return <Input {...props} customStyles={profileInputStyles} />;
};

const profileInputStyles = StyleSheet.create({
  container: {
    marginTop: 10,
    marginBottom: 15,
    width: '100%',
  },
  label: {
    fontSize: 14,
    marginBottom: 5,
    fontFamily: FONTS.KARLA_REGULAR,
  },
  inputBox: {
    borderColor: COLORS[SECONDARY][LILLY_WHITE],
    color: COLORS[PRIMARY][DARK],
    fontFamily: FONTS.KARLA_REGULAR,
    borderRadius: 10,
    borderWidth: 1,
    padding: 10,
    fontSize: 16,
  },
});

export default ProfileInput;
