import { useCallback } from 'react';
import { useFonts } from 'expo-font';
import * as SplashScreen from 'expo-splash-screen';
import { FONTS } from '../styles';

SplashScreen.preventAutoHideAsync();

const useCustomFonts = () => {
  const [fontsLoaded, fontError] = useFonts({
    [FONTS.KARLA_REGULAR]: require('../assets/fonts/Karla-Regular.ttf'),
    [FONTS.MARKAZI_TEXT_REGULAR]: require('../assets/fonts/MarkaziText-Regular.ttf'),
  });

  const onLayoutAppView = useCallback(async () => {
    if (fontsLoaded || fontError) {
      await SplashScreen.hideAsync();
    }
  }, [fontsLoaded, fontError]);

  return [fontsLoaded, fontError, onLayoutAppView];
};

export default useCustomFonts;
