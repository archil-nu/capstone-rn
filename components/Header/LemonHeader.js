import { Image, StyleSheet, View } from 'react-native';

const LemonHeader = () => {
  return (
    <View style={styles.container}>
      <View style={styles.space} />
      <Image source={require('../../assets/header.png')} style={styles.image} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: { height: 100, alignItems: 'center', backgroundColor: 'white' },
  space: { height: 50 },
  image: { resizeMode: 'contain', height: 50 },
});

export default LemonHeader;
