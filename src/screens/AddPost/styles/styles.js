import {Dimensions, StyleSheet} from 'react-native';
import {colors} from '../../../utils/colors/colors';
import {Fonts} from '../../../assets/Fonts';

const {width} = Dimensions.get('window');

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    padding: 16,
    // backgroundColor: colors.white,
  },
  cardContainer: {
    backgroundColor: colors.white,
    elevation: 6,
    padding: 12,
    borderRadius: 8,
  },
  input: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    marginBottom: width * 0.06,
    paddingHorizontal: 8,
    borderRadius: 8,
    color:colors.black
  },
  heading: {
    fontSize: width * 0.1,
    color: colors.black,
    textAlign: 'center',
    // fontWeight: 'bold',
    marginVertical: width * 0.1,
    fontFamily: Fonts.bold,
  },
  btn: {
    backgroundColor: colors.primary,
    padding: 8,
    alignItems: 'center',
    borderRadius: 8,
  },
  btnText: {
    fontSize: 16,
    color: colors.white,
    fontFamily: Fonts.regular,
  },
});
