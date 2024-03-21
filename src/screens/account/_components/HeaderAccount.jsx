import {TouchableOpacity} from 'react-native';
import React from 'react';
import {SafeAreaView} from 'react-native-safe-area-context';
import {StatusBar} from 'expo-status-bar';
import AntDesign from 'react-native-vector-icons/AntDesign';
import Ionicons from 'react-native-vector-icons/Ionicons';

export default function HeaderAccount({navigation}) {
  return (
    <SafeAreaView className="flex flex-row items-center gap-x-4 p-3 bg-white  ">
      <StatusBar translucent={false} />

      <TouchableOpacity
        onPress={() => navigation.navigate('cart')}
        className="text-slate-400">
        <AntDesign name="shoppingcart" size={26} color="#cbd2d9" />
      </TouchableOpacity>

      <TouchableOpacity
        onPress={() => navigation.navigate('message', {name: 'sofyan'})}
        className="text-slate-400 mt-0.5">
        <Ionicons name="chatbox-ellipses-outline" size={26} color="#cbd2d9" />
      </TouchableOpacity>
    </SafeAreaView>
  );
}
