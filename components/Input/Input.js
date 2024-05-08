import { StyleSheet, Text, TextInput, View } from 'react-native';
import { MaskedTextInput } from 'react-native-mask-text';
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

const Input = ({
  label,
  placeholder,
  keyboardType,
  value,
  onChange,
  customStyles,
  mask,
}) => {
  const mergedStyles = StyleSheet.create({ ...inputStyles, ...customStyles });
  const isMasked = !!mask;

  return (
    <View style={mergedStyles.container}>
      <View style={mergedStyles.labelBox}>
        <Text style={mergedStyles.label}>{label}</Text>
      </View>
      {isMasked ? (
        <MaskedTextInput
          style={mergedStyles.inputBox}
          value={value}
          onChangeText={(text, rawText) => {
            onChange(rawText);
          }}
          placeholder={placeholder}
          keyboardType={keyboardType}
          mask={mask}
        />
      ) : (
        <TextInput
          style={mergedStyles.inputBox}
          value={value}
          onChangeText={onChange}
          placeholder={placeholder}
          keyboardType={keyboardType}
        />
      )}
    </View>
  );
};

const inputStyles = {
  container: {
    alignItems: 'center',
    flexDirection: 'column',
    paddingTop: 15,
    paddingBottom: 15,
  },
  labelBox: {
    width: '100%',
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
    width: '100%',
    fontSize: 18,
  },
};

export default Input;
