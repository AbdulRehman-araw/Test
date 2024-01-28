import {View, Text, Button, Image} from 'react-native';
import React, {useEffect} from 'react';
import {styles} from './styles/styles';
import {Images} from '../../assets/Images';
import {useSelector} from 'react-redux';
import {StackActions} from '@react-navigation/native';

const SplashScreen = ({navigation}) => {
  const formData = useSelector(state => state.userDataReducer.updateFormData);
  useEffect(() => {
    setTimeout(() => {
      if (formData?.email) {
        navigation.dispatch(StackActions.replace('home'));
      } else {
        navigation.dispatch(StackActions.replace('form'));
      }
    }, 3000);
  }, []);

  return (
    <View style={styles.container}>
      <Image source={Images.logo} style={styles.logo} />
      <Text style={styles.heading}>GRIDIZEN</Text>
    </View>
  );
};

export default SplashScreen;
