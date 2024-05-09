import React from 'react';
import { View, StyleSheet, Text, Alert } from 'react-native';

import PlainButton from '../components/Button/PlainButton';
import Banner from '../components/Banner/Banner';
import Input from '../components/Input/Input';

import { COLORS, FONTS, SECONDARY, LILLY_WHITE, YELLOW } from '../styles';

import {
  FIRST_NAME,
  EMAIL,
  IS_ONBOARDING_COMPLETE,
  validateEmail,
} from '../utils';

const isValid = (firstName, email) => {
  return !!firstName && !!validateEmail(email);
};

const onboardingSchema = [
  {
    label: 'First Name*',
    placeholder: 'Enter your first Name',
    key: FIRST_NAME,
  },
  { label: 'Email*', placeholder: 'Enter your email', key: EMAIL },
];

const OnboardingScreen = ({ preferences, savePreferences }) => {
  const [fields, setFields] = React.useState({});

  React.useEffect(() => {
    handleResetFields();
  }, []);

  const handleChanges = (key) => (value) => {
    setFields({ ...fields, [key]: value });
  };

  const handleResetFields = () => {
    const fieldPreferences = [...onboardingSchema].reduce((acc, field) => {
      return { ...acc, [field.key]: preferences[field.key] };
    }, {});

    setFields(fieldPreferences);
  };

  return (
    <View style={onboardingStyles.container}>
      <Banner />
      <View style={onboardingStyles.form}>
        {onboardingSchema.map((field) => (
          <Input
            key={field.key}
            label={field.label}
            placeholder={field.placeholder}
            keyboardType={'default'}
            value={fields[field.key]}
            onChange={handleChanges(field.key)}
          />
        ))}
      </View>
      <View style={onboardingStyles.footer}>
        <View style={onboardingStyles.buttons}>
          <PlainButton hidden={true} />
          <PlainButton
            onPress={async () => {
              if (isValid(fields[FIRST_NAME], fields[EMAIL])) {
                await savePreferences({
                  ...fields,
                  [IS_ONBOARDING_COMPLETE]: true,
                });
              }
            }}
            title={nextMessage}
            type={YELLOW}
            disabled={!isValid(fields[FIRST_NAME], fields[EMAIL])}
          />
        </View>
      </View>
    </View>
  );
};

const welcomeMessage = 'Let us get to know you';
const nextMessage = 'Next';

const onboardingStyles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    backgroundColor: 'white',
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
    paddingHorizontal: 20,
    paddingVertical: 20,
    backgroundColor: 'white',
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

export default OnboardingScreen;
