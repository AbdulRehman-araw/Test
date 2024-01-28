import {Dimensions, StyleSheet} from 'react-native';
import {colors} from '../../../utils/colors/colors';

const {width} = Dimensions.get('window');

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: colors.primary,
  },
  logo: {width: width * 0.4, height: width * 0.4, resizeMode: 'contain'},
  heading: {
    fontSize: width * 0.08,
    color: colors.white,
    fontWeight: 'bold',
  },
});
