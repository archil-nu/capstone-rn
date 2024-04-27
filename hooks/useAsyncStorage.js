import { useState, useEffect } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';

export const useAsyncStorage = (key, initialValue) => {
  const [storedValue, setStoredValue] = useState(initialValue);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const getFromStorage = async () => {
      try {
        const item = await AsyncStorage.getItem(key);
        item !== null ? setStoredValue(JSON.parse(item)) : initialValue;
        setIsLoading(false);
      } catch (error) {
        console.log(error);
        setIsLoading(false);
      }
    };
    getFromStorage();
  }, []);

  const setValue = async (value) => {
    try {
      const valueToStore =
        value instanceof Function ? value(storedValue) : value;
      setStoredValue(valueToStore);
      await AsyncStorage.setItem(key, JSON.stringify(valueToStore));
    } catch (error) {
      console.log(error);
    }
  };

  return [storedValue, setValue, isLoading];
};
