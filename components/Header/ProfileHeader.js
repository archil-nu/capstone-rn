import { Image, StyleSheet, View } from 'react-native';
import RoundButton from '../Button/RoundButton';
import { LEFT_ARROW } from '../../styles';

const ProfileHeader = ({ onBack, onProfile }) => {
  return (
    <View style={styles.container}>
      <View style={styles.space} />
      <View style={styles.headerBar}>
        <RoundButton title={LEFT_ARROW} onPress={onBack} />
        <Image
          source={require('../../assets/header.png')}
          style={styles.image}
        />
        <RoundButton title={'AD'} onPress={onProfile} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: { height: 120, alignItems: 'center', backgroundColor: 'white' },
  space: { height: 50 },
  headerBar: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '100%',
    alignItems: 'center',
  },
  image: { resizeMode: 'contain', height: 50, width: 200 },
});

export default ProfileHeader;
