import * as React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import usePreferences from '../hooks/usePreferences';

import OnboardingScreen from '../screens/OnboardingScreen';
import ProfileScreen from '../screens/ProfileScreen';
import HomeScreen from '../screens/HomeScreen';

import ActionHeader from '../components/Header/ActionHeader';
import SimpleHeader from '../components/Header/SimpleHeader';

const Stack = createNativeStackNavigator();

const RootNavigator = () => {
  const [preferences, loading, savePreferences, clearPreferences] =
    usePreferences();

  // React.useEffect(() => {
  //   clearPreferences();
  // }, []);

  if (loading) {
    return null;
  }

  const { isOnboardingComplete } = preferences;

  return (
    <Stack.Navigator>
      {isOnboardingComplete ? (
        <>
          <Stack.Screen
            name="Home"
            options={({ navigation, route }) => ({
              header: () => (
                <ActionHeader
                  preferences={preferences}
                  onProfile={() => console.log('sign out')}
                />
              ),
            })}
          >
            {(props) => <HomeScreen {...props} preferences={preferences} />}
          </Stack.Screen>
          <Stack.Screen
            name="Profile"
            options={({ navigation, route }) => ({
              header: () => (
                <ActionHeader
                  preferences={preferences}
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
                savePreferences={savePreferences}
                clearPreferences={clearPreferences}
              />
            )}
          </Stack.Screen>
        </>
      ) : (
        <Stack.Screen
          name="Onboarding"
          options={() => ({
            header: () => <SimpleHeader />,
          })}
        >
          {(props) => (
            <OnboardingScreen
              {...props}
              preferences={preferences}
              savePreferences={savePreferences}
            />
          )}
        </Stack.Screen>
      )}
    </Stack.Navigator>
  );
};

export default RootNavigator;
