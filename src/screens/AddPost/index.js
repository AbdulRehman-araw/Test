import {
  View,
  Text,
  TextInput,
  Button,
  Alert,
  TouchableOpacity,
  ToastAndroid,
  ActivityIndicator,
} from 'react-native';
import React, {useState} from 'react';
import {styles} from './styles/styles';
import {colors} from '../../utils/colors/colors';
import {apiCall} from '../../Services/apiCall/index';

const AddPost = ({navigation}) => {
  const [title, setTitle] = useState('');
  const [body, setBody] = useState('');
  const [loader, setLoader] = useState(false);

  const handlePost = async () => {
    // Basic validation
    if (!title || !body) {
      ToastAndroid.show('Please fill in all fields.', ToastAndroid.SHORT);
      return;
    }

    fetch('https://jsonplaceholder.typicode.com/posts', {
      method: 'POST',
      body: JSON.stringify({
        title: 'foo',
        body: 'bar',
        userId: 1,
      }),
      headers: {
        'Content-type': 'application/json; charset=UTF-8',
      },
    })
      .then(response => response.json())
      .then(() => navigation.goBack())
      .catch(err => console.log(err))
      .finally(setLoader(false));
  };

  return (
    <View style={styles.container}>
      <View style={styles.cardContainer}>
        <Text style={styles.heading}>ADD POST</Text>
        <TextInput
          style={styles.input}
          placeholder="Title"
          placeholderTextColor={'grey'}
          value={title}
          onChangeText={text => setTitle(text)}
        />
        <TextInput
          style={styles.input}
          placeholder="Body"
          placeholderTextColor={'grey'}
          value={body}
          onChangeText={text => setBody(text)}
        />
        <TouchableOpacity style={styles.btn} onPress={handlePost}>
          {loader ? (
            <View style={{alignItems: 'center', justifyContent: 'center'}}>
              <ActivityIndicator size={'small'} color={colors.white} />
            </View>
          ) : (
            <Text style={styles.btnText}>Add Post</Text>
          )}
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default AddPost;
