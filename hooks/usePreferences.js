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
  AVATAR_IMAGE,
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
  [AVATAR_IMAGE]: null,
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
  AVATAR_IMAGE,
];

const usePreferences = () => {
  const [preferences, setPreferences] = React.useState(defaultPreferences);
  const [isLoading, setIsLoading] = React.useState(true);

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

  const savePreferences = async (updates) => {
    console.log('updates', updates);
    const mergedPreferences = { ...preferences, ...updates };
    const entries = Object.entries(mergedPreferences).map(([key, value]) => [
      key,
      JSON.stringify(value),
    ]);
    try {
      await AsyncStorage.multiSet(entries);
      Alert.alert('Preferences saved!');
      setPreferences(mergedPreferences);
    } catch (e) {
      Alert.alert(`An error occurred: ${e.message}`);
    }
  };

  const clearPreferences = async () => {
    try {
      await AsyncStorage.clear();
      Alert.alert('Preferences cleared!');
      setPreferences(defaultPreferences);
    } catch (e) {
      Alert.alert(`An error occurred: ${e.message}`);
    }
  };

  return [preferences, isLoading, savePreferences, clearPreferences];
};

export default usePreferences;
