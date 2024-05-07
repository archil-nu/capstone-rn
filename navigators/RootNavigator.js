import * as React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import usePreferences from '../hooks/usePreferences';

import OnboardingScreen from '../screens/OnboardingScreen';
import ProfileScreen from '../screens/ProfileScreen';
import HomeScreen from '../screens/Home';

import ProfileHeader from '../components/Header/ProfileHeader';

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
    //   headerTitle: () => <LemonHeader />,
    // }}
    >
      {isOnboardingComplete ? (
        <Stack.Screen
          name="Profile"
          options={({ navigation, route }) => ({
            header: () => (
              <ProfileHeader
                onBack={() => console.log('back')}
                onProfile={() => console.log('sign out')}
              />
            ),
          })}
        >
          {(props) => (
            <ProfileScreen
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
