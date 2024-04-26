import React from 'react';
import { View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';

import useCustomFonts from './hooks/useCustomFonts';
import RootNavigator from './navigators/RootNavigator';

const App = () => {
  const [fontsLoaded, fontError, onLayoutRootView] = useCustomFonts();

  if (!fontsLoaded && !fontError) {
    return null;
  }

  return (
    <View style={{ flex: 1 }} onLayout={onLayoutRootView}>
      <NavigationContainer>
        <RootNavigator />
      </NavigationContainer>
    </View>
  );
};

export default App;
