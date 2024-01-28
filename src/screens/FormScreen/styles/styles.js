import {Dimensions, StyleSheet} from 'react-native';
import {colors} from '../../../utils/colors/colors';
import {Fonts} from '../../../assets/Fonts';

const {width} = Dimensions.get('window');

export const styles = StyleSheet.create({
  main: {
    flex: 1,
    padding: 18,
  },
  container: {
    padding: 16,
  },
  fieldContainer: {
    marginBottom: 16,
  },
  heading: {
    fontSize: 14,
    marginBottom: 4,
    color: 'gray',
  },
  title: {
    fontSize: width * 0.08,
    color: colors.black,
    textAlign: 'center',
    marginVertical: 18,
    fontWeight: 'bold',
  },
  label: {
    fontSize: width * 0.04,
    marginVertical: 8,
    color: colors.black,
  },
  input: {
    height: 50,
    borderColor: 'gray',
    borderWidth: 1,
    borderRadius: 8,
    paddingHorizontal: 10,
    color: colors.black,
  },
  datePickerLabel: {
    fontSize: 16,
    color: 'gray',
    marginBottom: 8,
  },
  datePickerContainer: {
    marginTop: 8,
  },
  selectedDate: {
    fontSize: 16,
    color: colors.black,
  },
  pickerContainer: {
    borderWidth: 1,
    borderColor: 'gray',
    borderRadius: 8,
    marginBottom: 8,
  },
  picker: {
    height: 40,
    width: '100%',
  },
  pickerItem: {
    fontSize: 14,
  },
  btn: {
    backgroundColor: colors.primary,
    padding: 12,
    alignItems: 'center',
    borderRadius: 8,
    marginVertical: width * 0.1,
  },
  btnText: {
    fontSize: width * 0.04,
    fontFamily: Fonts.bold,
    fontWeight: 'bold',
    color: colors.white,
  },
});
