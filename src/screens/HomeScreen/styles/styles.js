import {Dimensions, StyleSheet} from 'react-native';
import {colors} from '../../../utils/colors/colors';
import {Fonts} from '../../../assets/Fonts';

const {width} = Dimensions.get('window');

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    padding: width * 0.02,
  },
  btn: {
    position: 'absolute',
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: colors.primary,
    padding: 8,
    alignItems: 'center',
    borderRadius: 8,
    margin: width * 0.04,
  },
  btnText: {
    fontSize: 16,
    color: colors.white,
    fontFamily: Fonts.bold,
  },
});
