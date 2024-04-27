import { StyleSheet, Text, TextInput, View } from 'react-native';
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

const Input = ({ label, placeholder, keyboardType, value, onChange }) => {
  return (
    <View style={inputStyles.container}>
      <View style={inputStyles.labelBox}>
        <Text style={inputStyles.label}>{label}</Text>
      </View>
      <TextInput
        style={inputStyles.inputBox}
        value={value}
        onChangeText={onChange}
        placeholder={placeholder}
        keyboardType={keyboardType}
      />
    </View>
  );
};

const inputStyles = StyleSheet.create({
  container: {
    alignItems: 'center',
    flexDirection: 'column',
    paddingTop: 15,
    paddingBottom: 15,
  },
  labelBox: {
    width: '85%',
  },
  label: {
    textAlign: 'center',
    fontSize: 20,
    fontFamily: FONTS.KARLA_REGULAR,
    marginBottom: 10,
    color: COLORS[SECONDARY][GONDOLA],
  },
  inputBox: {
    borderColor: COLORS[PRIMARY][DARK],
    color: COLORS[SECONDARY][GONDOLA],
    borderRadius: 10,
    borderWidth: 2,
    padding: 12,
    width: '85%',
    fontSize: 18,
  },
});

export default Input;
