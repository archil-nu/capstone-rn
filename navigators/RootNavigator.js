import * as React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import usePreferences from '../hooks/usePreferences';

import OnboardingScreen from '../screens/Onboarding';
import Profile from '../screens/Profile';
import HomeScreen from '../screens/Home';

const Stack = createNativeStackNavigator();

const RootNavigator = () => {
  const [
    preferences,
    loading,
    updatePreferences,
    savePreferences,
    clearPreferences,
  ] = usePreferences();

  // React.useEffect(() => {
  //   clearPreferences();
  // }, []);

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
        <Stack.Screen name="Profile">
          {(props) => (
            <Profile
              {...props}
              preferences={preferences}
              updatePreferences={updatePreferences}
              savePreferences={savePreferences}
              clearPreferences={clearPreferences}
            />
          )}
        </Stack.Screen>
      ) : (
        <Stack.Screen name="Onboarding" options={{ headerShown: false }}>
          {(props) => (
            <OnboardingScreen
              {...props}
              preferences={preferences}
              updatePreferences={updatePreferences}
              savePreferences={savePreferences}
            />
          )}
        </Stack.Screen>
      )}
    </Stack.Navigator>
  );
};

export default RootNavigator;
