import { View, TouchableOpacity, Text, StyleSheet } from 'react-native';
import {
  COLORS,
  GONDOLA,
  PRIMARY,
  SECONDARY,
  DARK,
  LILLY_WHITE,
  DARK_SALMON,
  FONTS,
} from '../../styles';

const Filters = ({ onChange, selections, sections }) => {
  return (
    <View style={filterStyles(sections, selections).filtersContainer}>
      {sections.map((section, index) => {
        const mergedStyles = {
          ...filterStyles(sections).touchable,
          backgroundColor: selections[index]
            ? COLORS[SECONDARY][DARK_SALMON]
            : COLORS[SECONDARY][LILLY_WHITE],
        };

        const mergedTextStyles = {
          ...filterStyles(sections).label,
          color: selections[index] ? 'black' : COLORS[PRIMARY][DARK],
        };

        return (
          <TouchableOpacity
            key={index}
            onPress={() => {
              onChange(index);
            }}
            style={mergedStyles}
          >
            <View>
              <Text style={mergedTextStyles}>{section}</Text>
            </View>
          </TouchableOpacity>
        );
      })}
    </View>
  );
};

const filterStyles = (sections) =>
  StyleSheet.create({
    filtersContainer: {
      flexDirection: 'row',
      alignItems: 'center',
    },
    touchable: {
      justifyContent: 'center',
      alignItems: 'center',
      padding: 10,
      margin: 15,
      borderRadius: 15,

      // borderWidth: 1,
      // borderColor: 'white',
    },
    label: {
      fontSize: 16,
      fontFamily: FONTS.KARLA_BOLD,
      fontWeight: 'bold',
      textTransform: 'capitalize',
    },
  });

export default Filters;
