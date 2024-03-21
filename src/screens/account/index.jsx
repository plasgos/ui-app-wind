import {View, Text, TouchableOpacity} from 'react-native';
import React from 'react';
import {useSelector} from 'react-redux';
import {Avatar} from '@rneui/themed';
import {ScrollView} from 'react-native';
import {StatusBar} from 'expo-status-bar';

import AntDesign from 'react-native-vector-icons/AntDesign';

export default function Account({navigation}) {
  const login = useSelector(state => state.login);
  console.log('🚀 ~ Account ~ login:', login);

  return (
    <ScrollView
      contentContainerStyle={{
        paddingBottom: 50,
      }}>
      <StatusBar translucent={true} />

      <View className="m-4 flex flex-row justify-between items-center ">
        <Avatar size={64} rounded source={{uri: login.user.avatar_img}} />

        <View className="flex-grow mx-3">
          <Text>{login.user.name}</Text>
          <Text className="my-1">Rp 0</Text>
          <Text>Rp 0</Text>
        </View>

        <TouchableOpacity
          onPress={() => navigation.navigate('AccountSettings')}>
          <AntDesign name="setting" size={24} />
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
}
