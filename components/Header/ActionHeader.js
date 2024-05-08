import React from 'react';
import { Image, StyleSheet, View } from 'react-native';

import RoundButton from '../Button/RoundButton';

import { LEFT_ARROW } from '../../styles';
import { AVATAR_IMAGE, FIRST_NAME, LAST_NAME } from '../../utils';

const profileSchema = [{ key: FIRST_NAME }, { key: LAST_NAME }];
const avatarSchema = [{ key: AVATAR_IMAGE }];

const ActionHeader = ({ onBack, onProfile, preferences }) => {
  const initials = `${
    preferences[FIRST_NAME] ? preferences[FIRST_NAME][0] : ''
  }${preferences[LAST_NAME] ? preferences[LAST_NAME][0] : ''}`;

  const image = preferences[AVATAR_IMAGE];

  const Avatar = () =>
    image ? (
      <Image source={{ uri: image }} style={styles.avatar} />
    ) : (
      <RoundButton title={initials} onPress={onProfile} />
    );

  const hasBackButton = onBack !== undefined;

  return (
    <View style={styles.container}>
      <View style={styles.space} />
      <View style={styles.headerBar}>
        <RoundButton
          title={LEFT_ARROW}
          onPress={onBack}
          hidden={!hasBackButton}
          disabled={!hasBackButton}
        />
        <Image
          source={require('../../assets/header.png')}
          style={styles.image}
        />
        <Avatar />
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
  avatar: { height: 50, width: 50, borderRadius: 25, margin: 15 },
});

export default ActionHeader;
