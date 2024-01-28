import {
  View,
  Text,
  FlatList,
  TouchableOpacity,
  ActivityIndicator,
} from 'react-native';
import React, {useEffect, useState} from 'react';
import {styles} from './styles/styles';
import Card from '../../components/Card';
import {apiCall} from '../../Services/apiCall/index';
import {useIsFocused} from '@react-navigation/native';
import {colors} from '../../utils/colors/colors';

const HomeScreen = ({navigation}) => {
  const isFocused = useIsFocused();
  const [posts, setPosts] = useState([]);
  const [loader, setLoader] = useState(false);

  // get all post from jsonplaceholder api
  async function getPosts() {
    setLoader(true);
    try {
      let result = await apiCall.getPosts();
      setPosts(result);
    } catch (error) {
      console.log('🚀 ~ getPosts ~ error:', error);
    } finally {
      setLoader(false);
    }
  }

  // useEffect to call api
  useEffect(() => {
    if (isFocused) {
      getPosts();
    }
  }, [isFocused]);

  return (
    <View style={styles.container}>
      {loader ? (
        <View>
          <ActivityIndicator size={'small'} color={colors.primary} />
        </View>
      ) : (
        <FlatList
          contentContainerStyle={{flexGrow: 1, paddingBottom: 80}}
          data={posts}
          keyExtractor={item => item.id}
          renderItem={({item}) => (
            <Card key={item?.id} title={item.title} body={item.body} />
          )}
        />
      )}

      <TouchableOpacity
        style={styles.btn}
        onPress={() => navigation.navigate('addPost')}>
        <Text style={styles.btnText}>Add Post</Text>
      </TouchableOpacity>
    </View>
  );
};

export default HomeScreen;
