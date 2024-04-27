import * as React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import WelcomeScreen from '../screens/WelcomeScreen';
import SubscribeScreen from '../screens/SubscribeScreen';

import OnboardingScreen from '../screens/Onboarding';
import HomeScreen from '../screens/Home';

import LemonHeader from '../components/Header/LemonHeader';

const Stack = createNativeStackNavigator();

const RootNavigator = () => {
  return (
    <Stack.Navigator
    // screenOptions={{
    //   header: ({ options }) => <LemonHeader {...options} />,
    // }}
    >
      <Stack.Screen name="Home" component={HomeScreen} />
      <Stack.Screen
        name="Onboarding"
        component={OnboardingScreen}
        options={{ headerShown: false }}
      />
    </Stack.Navigator>
  );
};

export default RootNavigator;
