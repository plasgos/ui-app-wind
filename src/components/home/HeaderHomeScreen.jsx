import React from 'react';
import AntDesign from 'react-native-vector-icons/AntDesign';

import Ionicons from 'react-native-vector-icons/Ionicons';

import {StatusBar} from 'expo-status-bar';

import {SafeAreaView, Text, TouchableOpacity, View} from 'react-native';

const HeaderHomeScreen = ({navigation}) => {
  return (
    <SafeAreaView className="flex flex-row items-center gap-x-4 p-3 bg-white  ">
      <StatusBar translucent={false} />
      <View className="absolute left-6 text-slate-300">
        <Ionicons name="search-sharp" size={14} color="#86939E" />
      </View>

      <TouchableOpacity
        onPress={() => navigation.navigate('search')}
        className="flex-1 h-10 w-full border border-slate-300 py-2 px-4 rounded-lg flex pl-10 justify-center">
        <Text style={{color: '#86939E'}}>Cari Kebutuhan anda</Text>
      </TouchableOpacity>

      <TouchableOpacity
        onPress={() => navigation.navigate('cart')}
        className="text-slate-400">
        <AntDesign name="shoppingcart" size={26} color="#cbd2d9" />
      </TouchableOpacity>

      <TouchableOpacity
        onPress={() => navigation.navigate('message', {variantType: 'sofyan'})}
        className="text-slate-400 mt-0.5">
        <Ionicons name="chatbox-ellipses-outline" size={26} color="#cbd2d9" />
      </TouchableOpacity>
      {/* <TouchableOpacity
        onPress={() => navigation.navigate('Register')}
        className="text-slate-400 mt-0.5">
        <Ionicons name="log-in" size={26} color="#cbd2d9" />
      </TouchableOpacity> */}
    </SafeAreaView>
  );
};

export default HeaderHomeScreen;
