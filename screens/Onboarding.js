import React from 'react';
import { View, StyleSheet, Text, Alert } from 'react-native';

import PlainButton from '../components/Button/PlainButton';
import {
  COLORS,
  DARK,
  DARK_SALMON,
  FONTS,
  LIGHT,
  PEACH_PUFF,
  SECONDARY,
  LILLY_WHITE,
  PRIMARY,
} from '../styles';
import {
  FIRST_NAME,
  EMAIL,
  IS_ONBOARDING_COMPLETE,
  validateEmail,
} from '../utils';
import Input from '../components/Input/Input';
import LemonHeader from '../components/Header/LemonHeader';

const isValid = (firstName, email) => {
  return !!firstName && !!validateEmail(email);
};

const Onboarding = ({ preferences, updatePreferences, savePreferences }) => {
  const { firstName, email } = preferences;

  return (
    <>
      <LemonHeader />
      <View style={onboardingStyles.container}>
        <View style={onboardingStyles.welcome}>
          <Text style={onboardingStyles.welcomeText}>{welcomeMessage}</Text>
        </View>
        <View style={onboardingStyles.form}>
          <Input
            label={'First Name*'}
            placeholder={'First Name'}
            keyboardType={'default'}
            value={firstName}
            onChange={updatePreferences(FIRST_NAME)}
          />
          <Input
            label={'Email*'}
            placeholder={'Email'}
            keyboardType={'email-address'}
            value={email}
            onChange={updatePreferences(EMAIL)}
          />
        </View>
        <View style={onboardingStyles.footer}>
          <View style={onboardingStyles.buttons}>
            <PlainButton hidden={true} />
            <PlainButton
              onPress={() => {
                if (isValid(firstName, email)) {
                  updatePreferences(IS_ONBOARDING_COMPLETE)(true);
                  savePreferences();
                }
              }}
              title={nextMessage}
              type={DARK}
              disabled={!isValid(firstName, email)}
            />
          </View>
        </View>
      </View>
    </>
  );
};

const welcomeMessage = 'Let us get to know you';
const nextMessage = 'Next';

const onboardingStyles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    backgroundColor: COLORS[SECONDARY][LILLY_WHITE],
  },
  welcome: {
    flex: 0.25,
    justifyContent: 'center',
  },
  welcomeText: {
    textAlign: 'center',
    fontSize: 32,
    fontFamily: FONTS.MARKAZI_TEXT_REGULAR,
  },
  form: {
    flex: 0.4,
    width: '100%',
    justifyContent: 'center',
    backgroundColor: COLORS[SECONDARY][PEACH_PUFF],
  },
  buttons: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    width: '90%',
  },
  footer: {
    flex: 0.35,
    alignItems: 'center',
  },
});

export default Onboarding;
