import {TouchableOpacity, View} from 'react-native';
import React from 'react';
import {SafeAreaView} from 'react-native-safe-area-context';
import AntDesign from 'react-native-vector-icons/AntDesign';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {Button} from '@rneui/themed';

export default function HeaderAccount({navigation}) {
  return (
    <SafeAreaView className="flex flex-row items-center justify-between bg-white">
      <View>
        <Button
          title="Buka Toko"
          icon={() => (
            <Ionicons
              style={{marginRight: 10}}
              name="storefront-outline"
              size={20}
              color="white"
            />
          )}
          iconPosition="left"
          color="#fa541c"
        />
      </View>

      <View className="flex flex-row items-center gap-x-4 p-3 bg-white">
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
      </View>
    </SafeAreaView>
  );
}
