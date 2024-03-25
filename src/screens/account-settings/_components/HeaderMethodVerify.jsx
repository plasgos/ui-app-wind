import {Text, SafeAreaView, TouchableOpacity, View} from 'react-native';
import React from 'react';
import AntDesign from 'react-native-vector-icons/AntDesign';
import {useDispatch} from 'react-redux';

import {StatusBar} from 'expo-status-bar';
import {resetCheckPasswordChangeEmail} from '../../../redux/modules/change-email/reducer';

export default function HeaderMethodVerify({navigation}) {
  const dispatch = useDispatch();

  const handleBackButton = async navigationBack => {
    navigationBack.navigate('ManageSecurity');
    await dispatch(resetCheckPasswordChangeEmail());
  };

  return (
    <SafeAreaView className=" h-[64px] bg-white shadow-sm  p-3 flex flex-row gap-x-3 items-center">
      <StatusBar translucent={false} />
      <TouchableOpacity
        onPress={() => handleBackButton(navigation)}
        className="mr-1">
        <AntDesign name="arrowleft" size={24} />
      </TouchableOpacity>

      <View className="flex-grow ">
        <Text className="text-lg font-semibold ">Metode Verifikasi</Text>
      </View>
    </SafeAreaView>
  );
}
