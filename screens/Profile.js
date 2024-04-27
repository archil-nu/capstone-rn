import { View, Text, StyleSheet } from 'react-native';

const Profile = () => {
  return (
    <View style={homeStyles.container}>
      <Text>Profile page</Text>
    </View>
  );
};

const homeStyles = StyleSheet.create({
  container: { flex: 1, alignItems: 'center', justifyContent: 'center' },
});

export default Profile;
