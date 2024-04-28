import * as React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import usePreferences from '../hooks/usePreferences';

import OnboardingScreen from '../screens/Onboarding';
import HomeScreen from '../screens/Home';

const Stack = createNativeStackNavigator();

const RootNavigator = () => {
  const [preferences, updatePreferences, loading] = usePreferences();

  if (loading) {
    return null;
  }

  const { isOnboardingComplete } = preferences;

  console.log(preferences);
  console.log(isOnboardingComplete);

  return (
    <Stack.Navigator
    // screenOptions={{
    //   header: ({ options }) => <LemonHeader {...options} />,
    // }}
    >
      {isOnboardingComplete ? (
        <Stack.Screen name="Home">
          {(props) => <HomeScreen {...props} />}
        </Stack.Screen>
      ) : (
        <Stack.Screen name="Onboarding" options={{ headerShown: false }}>
          {(props) => (
            <OnboardingScreen
              {...props}
              preferences={preferences}
              updatePreferences={updatePreferences}
            />
          )}
        </Stack.Screen>
      )}
    </Stack.Navigator>
  );
};

export default RootNavigator;
