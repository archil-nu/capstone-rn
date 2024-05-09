import React from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';

import { TextInput } from 'react-native-paper';
import {
  PRIMARY,
  DARK,
  COLORS,
  YELLOW,
  FONTS,
  SECONDARY,
  LILLY_WHITE,
} from '../../styles';

const headline = 'Little Lemon';
const location = 'Chicago';
const description =
  'We are a family owned Mediterranean restaurant, focused on traditional recipes served with a modern twist.';

const Banner = ({ onSearch }) => {
  const [expandSearch, setExpandSearch] = React.useState(false);

  const searchStyles = {
    ...bannerStyles.search,
    ...(!expandSearch && bannerStyles.searchOnBlur),
  };

  const roundness = expandSearch ? 10 : 25;

  const hasSearch = onSearch !== undefined;

  return (
    <View style={bannerStyles.container}>
      <Text style={bannerStyles.header}>{headline}</Text>
      <View style={bannerStyles.body}>
        <View style={bannerStyles.subHeadingAndDesc}>
          <Text style={bannerStyles.subHeading}>{location}</Text>
          <Text style={bannerStyles.description}>{description}</Text>
        </View>
        <View style={bannerStyles.thumbnail}>
          <Image
            style={bannerStyles.image}
            source={require('../../assets/SmallPlates_small.png')}
          />
        </View>
      </View>
      {hasSearch && (
        <View style={bannerStyles.footer}>
          <TextInput
            theme={{ roundness }}
            style={searchStyles}
            onFocus={() => setExpandSearch(true)}
            onBlur={() => setExpandSearch(false)}
            onChangeText={onSearch}
            mode="outlined"
            activeOutlineColor={COLORS[PRIMARY][DARK]}
            left={<TextInput.Icon icon="magnify" />}
          />
        </View>
      )}
    </View>
  );
};

const bannerStyles = StyleSheet.create({
  container: {
    paddingVertical: 10,
    paddingHorizontal: 20,
    width: '100%',
    backgroundColor: COLORS[PRIMARY][DARK],
  },
  header: {
    fontSize: 56,
    fontFamily: FONTS.MARKAZI_TEXT_REGULAR,
    color: COLORS[PRIMARY][YELLOW],
    fontWeight: 'bold',
  },
  body: {
    flexDirection: 'row',
  },
  footer: {},
  search: {
    height: 45,
    marginTop: 10,
    backgroundColor: COLORS[SECONDARY][LILLY_WHITE],
  },
  searchOnBlur: {
    width: 52,
    height: 45,
  },

  subHeadingAndDesc: {
    maxWidth: '70%',
  },
  subHeading: {
    fontSize: 32,
    fontFamily: FONTS.MARKAZI_TEXT_REGULAR,
    color: COLORS[SECONDARY][LILLY_WHITE],
    fontWeight: 'bold',
  },
  description: {
    fontSize: 18,
    fontFamily: FONTS.KARLA_REGULAR,
    color: COLORS[SECONDARY][LILLY_WHITE],
    marginVertical: 10,
    marginRight: 10,
  },
  thumbnail: {
    marginTop: 40,
    justifyContent: 'center',
    alignItems: 'center',
  },
  image: {
    width: 120,
    height: 120,
    borderRadius: 20,
  },
});

export default Banner;
