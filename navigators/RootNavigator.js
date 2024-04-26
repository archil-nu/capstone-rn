import * as React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import WelcomeScreen from '../screens/WelcomeScreen';
import SubscribeScreen from '../screens/SubscribeScreen';
import Onboarding from '../screens/Onboarding';

import LemonHeader from '../components/Header/LemonHeader';

const Stack = createNativeStackNavigator();

const RootNavigator = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        header: ({ options }) => <LemonHeader {...options} />,
      }}
    >
      <Stack.Screen name="Onboarding" component={Onboarding} />
      {/* <Stack.Screen name="Welcome" component={WelcomeScreen} />
      <Stack.Screen name="Subscribe" component={SubscribeScreen} /> */}
    </Stack.Navigator>
  );
};

export default RootNavigator;
