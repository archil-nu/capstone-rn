import { StyleSheet } from 'react-native';

import PlainButton from './PlainButton';

const RoundButton = (props) => (
  <PlainButton {...props} customStyles={customStyles} />
);

const customStyles = StyleSheet.create({
  flex: 0,
  padding: 0,
  borderRadius: 25,
  height: 50,
  minWidth: 50,
});

export default RoundButton;