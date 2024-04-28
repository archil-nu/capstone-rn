import React from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { Alert } from 'react-native';

import useUpdate from './useUpdate';
import { IS_ONBOARDING_COMPLETE, FIRST_NAME, EMAIL } from '../utils/constants';

const defaultPreferences = {
  [IS_ONBOARDING_COMPLETE]: false,
  [FIRST_NAME]: '',
  [EMAIL]: '',
};

const usePreferences = () => {
  const [preferences, setPreferences] = React.useState(defaultPreferences);
  const [loading, setLoading] = React.useState(true);

  React.useEffect(() => {
    // AsyncStorage.clear();
    const fetchStorage = async () => {
      try {
        const results = await AsyncStorage.multiGet([
          IS_ONBOARDING_COMPLETE,
          FIRST_NAME,
          EMAIL,
        ]);
        setLoading(false);
        let loadedPreferences = { ...defaultPreferences };
        results.forEach(([key, value]) => {
          if (value) {
            loadedPreferences[key] = JSON.parse(value);
          }
        });
        setPreferences(loadedPreferences);
      } catch (e) {
        Alert.alert(`An error occurred: ${e.message}`);
        setLoading(false);
      }
    };
    fetchStorage();
  }, []);

  useUpdate(() => {
    const updateStorage = async () => {
      const entries = Object.entries(preferences).map(([key, value]) => [
        key,
        JSON.stringify(value),
      ]);
      try {
        await AsyncStorage.multiSet(entries);
      } catch (e) {
        Alert.alert(`An error occurred: ${e.message}`);
      }
    };
    updateStorage();
  }, [preferences]);

  const updatePreferences = (key) => (value) =>
    setPreferences((prevState) => ({
      ...prevState,
      [key]: value,
    }));

  return [preferences, updatePreferences, loading];
};

export default usePreferences;
