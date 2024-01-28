import {View, Text} from 'react-native';
import React from 'react';
import {styles} from './styles/styles';

const Card = ({title, body}) => {
  return (
    <View style={styles.card}>
      <Text style={styles.title}>{title}</Text>
      <Text style={styles.body}>{body}</Text>
    </View>
  );
};

export default Card;
