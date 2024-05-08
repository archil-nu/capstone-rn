import { View, Text, StyleSheet } from 'react-native';

const Home = () => {
  return (
    <View style={homeStyles.container}>
      <Text>Home Screen</Text>
    </View>
  );
};

const homeStyles = StyleSheet.create({
  container: { flex: 1, alignItems: 'center', justifyContent: 'center' },
});

export default Home;
