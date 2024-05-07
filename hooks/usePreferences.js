import React from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { Alert } from 'react-native';

import {
  IS_ONBOARDING_COMPLETE,
  FIRST_NAME,
  EMAIL,
  LAST_NAME,
  PHONE,
  ORDER_STATUSES,
  PASSWORD_CHANGES,
  SPECIAL_OFFERS,
  NEWSLETTER,
} from '../utils/constants';

const defaultPreferences = {
  [IS_ONBOARDING_COMPLETE]: false,
  [FIRST_NAME]: '',
  [LAST_NAME]: '',
  [EMAIL]: '',
  [PHONE]: '',
  [ORDER_STATUSES]: false,
  [PASSWORD_CHANGES]: false,
  [SPECIAL_OFFERS]: false,
  [NEWSLETTER]: false,
};

const ALL_KEYS = [
  IS_ONBOARDING_COMPLETE,
  FIRST_NAME,
  LAST_NAME,
  EMAIL,
  PHONE,
  ORDER_STATUSES,
  PASSWORD_CHANGES,
  SPECIAL_OFFERS,
  NEWSLETTER,
];

const usePreferences = () => {
  const [preferences, setPreferences] = React.useState(defaultPreferences);
  const [isLoading, setIsLoading] = React.useState(true);
  const saveRef = React.useRef(null);

  React.useEffect(() => {
    const fetchStorage = async () => {
      try {
        const results = await AsyncStorage.multiGet(ALL_KEYS);
        setIsLoading(false);
        let loadedPreferences = { ...defaultPreferences };
        results.forEach(([key, value]) => {
          if (value) {
            loadedPreferences[key] = JSON.parse(value);
          }
        });
        setPreferences(loadedPreferences);
      } catch (e) {
        Alert.alert(`An error occurred: ${e.message}`);
        setIsLoading(false);
      }
    };
    fetchStorage();
  }, []);

  React.useEffect(() => {
    if (saveRef.current) {
      savePreferences();
      saveRef.current = false;
    }
  }, [saveRef.current]);

  const markForSave = () => {
    saveRef.current = true;
  };

  const savePreferences = async () => {
    const entries = Object.entries(preferences).map(([key, value]) => [
      key,
      JSON.stringify(value),
    ]);
    try {
      console.log(entries);
      await AsyncStorage.multiSet(entries);
      Alert.alert('Preferences saved!');
    } catch (e) {
      Alert.alert(`An error occurred: ${e.message}`);
    }
  };

  const clearPreferences = async () => {
    try {
      await AsyncStorage.clear();
    } catch (e) {
      Alert.alert(`An error occurred: ${e.message}`);
    }
  };

  const updatePreferences = (key) => (value) => {
    console.log(key, value);
    setPreferences((prevState) => ({
      ...prevState,
      key: value,
    }));
  };

  return [
    preferences,
    isLoading,
    updatePreferences,
    markForSave,
    clearPreferences,
  ];
};

export default usePreferences;
