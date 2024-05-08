import { Image, View, StyleSheet, Text } from 'react-native';
import * as ImagePicker from 'expo-image-picker';

import PlainButton from '../Button/PlainButton';
import RoundButton from '../Button/RoundButton';
import {
  COLORS,
  PRIMARY,
  SECONDARY,
  GONDOLA,
  FONTS,
  DARK,
  LIGHT,
} from '../../styles';

const Avatar = ({ label, firstName, lastName, image, updateImage }) => {
  const pickImage = async () => {
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.All,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    });

    if (!result.canceled) {
      updateImage(result.assets[0].uri);
    }
  };

  const initials = `${firstName ? firstName[0] : ''}${
    lastName ? lastName[0] : ''
  }`;

  const Avatar = () =>
    image ? (
      <Image source={{ uri: image }} style={avatarStyles.image} />
    ) : (
      <RoundButton
        title={initials}
        overrideButtonStyles={avatarStyles.initialsButton}
      />
    );

  return (
    <View style={avatarStyles.container}>
      <View style={avatarStyles.labelBox}>
        <Text style={avatarStyles.label}>{label}</Text>
      </View>
      <View style={avatarStyles.saveDiscardSection}>
        <Avatar />
        <PlainButton
          type={DARK}
          title={'Change'}
          overrideButtonStyles={avatarStyles.saveDiscardButton}
          overrideLabelStyles={avatarStyles.saveDiscardButtonLabel}
          onPress={pickImage}
        />
        <PlainButton
          type={LIGHT}
          title={'Reset'}
          overrideButtonStyles={avatarStyles.saveDiscardButton}
          overrideLabelStyles={avatarStyles.saveDiscardButtonLabel}
          onPress={() => updateImage(null)}
        />
      </View>
    </View>
  );
};

const avatarStyles = StyleSheet.create({
  container: {
    paddingTop: 15,
    paddingBottom: 15,
  },
  labelBox: {
    width: '100%',
  },
  label: {
    fontSize: 14,
    marginBottom: 5,
    fontFamily: FONTS.KARLA_REGULAR,
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
  image: {
    width: 70,
    height: 70,
    borderRadius: 35,
    marginRight: 10,
  },
  initialsButton: {
    width: 70,
    minHeight: 70,
    borderRadius: 35,
    margin: 0,
    marginRight: 10,
  },
  saveDiscardButton: {
    height: 40,
    borderRadius: 5,
  },
  saveDiscardButtonLabel: {
    fontSize: 14,
  },
  saveDiscardSection: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: 10,
  },
});

export default Avatar;
