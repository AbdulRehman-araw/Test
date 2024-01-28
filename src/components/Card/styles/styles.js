import {Dimensions, StyleSheet} from 'react-native';
import {colors} from '../../../utils/colors/colors';

const {width} = Dimensions.get('window');

export const styles = StyleSheet.create({
  card: {
    backgroundColor: '#fff',
    padding: 16,
    borderRadius: 8,
    margin: 8,
    elevation: 3,
    shadowColor: '#333',
    shadowOpacity: 0.3,
    shadowOffset: {width: 1, height: 1},
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 8,
    color: colors.black,
  },
  postImage: {
    width: '100%',
    height: 200,
    borderRadius: 8,
    marginBottom: 8,
  },
  body: {
    fontSize: 16,
    color: '#555',
  },
});
