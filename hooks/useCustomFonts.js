import { useCallback } from 'react';
import { useFonts } from 'expo-font';
import * as SplashScreen from 'expo-splash-screen';
import { FONTS } from '../styles';

SplashScreen.preventAutoHideAsync();

const useCustomFonts = () => {
  const [fontsLoaded, fontError] = useFonts({
    [FONTS.KARLA_REGULAR]: require('../assets/fonts/Karla-Regular.ttf'),
    [FONTS.MARKAZITEXT_REGULAR]: require('../assets/fonts/MarkaziText-Regular.ttf'),
  });

  const onLayoutRootView = useCallback(async () => {
    if (fontsLoaded || fontError) {
      await SplashScreen.hideAsync();
    }
  }, [fontsLoaded, fontError]);

  return [fontsLoaded, fontError, onLayoutRootView];
};

export default useCustomFonts;
