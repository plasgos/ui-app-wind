import {View, Text, ScrollView, TouchableOpacity} from 'react-native';
import React from 'react';
import {Avatar} from '@rneui/themed';
import {useSelector} from 'react-redux';
import Octicons from 'react-native-vector-icons/Octicons';

export default function AccountSettings({navigation}) {
  const login = useSelector(state => state.login);
  const user = useSelector(state => state.user);
  console.log('🚀 ~ AccountSettings ~ user:', user);
  return (
    <ScrollView
      contentContainerStyle={{
        paddingBottom: 50,
      }}>
      <View className="m-4 flex flex-row justify-between items-center ">
        <Avatar size={64} rounded source={{uri: login.user.avatar_img}} />

        <View className="flex-grow mx-3">
          <Text>{login.user.name}</Text>
          <Text className="my-1">Rp 0</Text>
          <Text>Rp 0</Text>
        </View>

        <TouchableOpacity
          onPress={() => navigation.navigate('AccountSettings')}>
          <Octicons name="pencil" size={24} />
        </TouchableOpacity>
      </View>

      <View className="bg-white p-3">
        <Text className="mb-5 font-semibold text-sm">Pengaturan Akun</Text>

        <TouchableOpacity
          onPress={() => navigation.navigate('ManageSecurity')}
          className="flex flex-col ">
          <View className="w-full flex flex-row items-center p-3">
            <Octicons style={{marginRight: 10}} name="shield-check" size={24} />
            <View className="flex-grow">
              <Text className="font-semibold">Login Dan Keamanan</Text>
              <Text className="text-xs">
                Ubah email, kata sandi dan nomer ponsel
              </Text>
            </View>
          </View>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
}
