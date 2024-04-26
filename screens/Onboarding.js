import React, { useState } from 'react';
import {
  View,
  Image,
  StyleSheet,
  Text,
  TextInput,
  Alert,
  Pressable,
} from 'react-native';
import { validateEmail } from '../utils';
import PlainButton from '../components/Button/PlainButton';
import { DARK, FONTS, LIGHT } from '../styles';

const Onboarding = () => {
  return (
    <View style={onboardingStyles.container}>
      <View style={onboardingStyles.welcome}>
        <Text style={onboardingStyles.text}>{welcomeMessage}</Text>
      </View>

      <View style={onboardingStyles.form}>
        <TextInput
          style={onboardingStyles.inputBox}
          // value={email}
          // onChangeText={(email) => emailValidation(email)}
          placeholder={'email'}
          keyboardType={'email-address'}
        />
      </View>
      <PlainButton
        // disabled={buttonDisableStatus}
        onPress={() => Alert.alert('Thanks for subscribing, stay tuned!')}
        title={nextMessage}
        type={DARK}
        customStyles={{ width: '30%' }}
      />
    </View>
  );
};

const welcomeMessage = 'Let us get to know you';
const nextMessage = 'Next';

const onboardingStyles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    flexDirection: 'column',
    paddingTop: 30,
  },
  welcome: {
    flex: 0.4,
    paddingTop: 30,
  },
  text: {
    textAlign: 'center',
    fontSize: 40,
    paddingVertical: 40,
    padding: 30,
    fontFamily: FONTS.MARKAZITEXT_REGULAR,
  },
  inputBox: {
    height: 40,
    margin: 10,
    borderWidth: 1,
    padding: 10,
    fontSize: 15,
    width: '85%',
    borderRadius: 4,
    color: 'grey',
  },
});

export default Onboarding;
