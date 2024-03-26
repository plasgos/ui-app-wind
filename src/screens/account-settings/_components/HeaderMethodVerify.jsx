import {
  Text,
  SafeAreaView,
  TouchableOpacity,
  View,
  BackHandler,
} from 'react-native';
import React, {useCallback} from 'react';
import AntDesign from 'react-native-vector-icons/AntDesign';
import {useDispatch} from 'react-redux';
import {useFocusEffect} from '@react-navigation/native';

import {StatusBar} from 'expo-status-bar';
import {
  resetChangeEmail,
  resetCheckPasswordChangeEmail,
} from '../../../redux/modules/change-email/reducer';
import {resetCheckPasswordChangePhoneNumber} from '../../../redux/modules/change-phone-number/reducer';

export default function HeaderMethodVerify({navigation}) {
  const dispatch = useDispatch();

  // Function to handle back button press
  const handleBackButton = useCallback(() => {
    navigation.navigate('ManageSecurity');
    dispatch(resetCheckPasswordChangeEmail());
    dispatch(resetCheckPasswordChangePhoneNumber());
    dispatch(resetChangeEmail());
    return true; // Prevent default behavior (exit app)
  }, [dispatch, navigation]);

  // Effect to add event listener when screen gets focused
  useFocusEffect(
    useCallback(() => {
      const backHandler = BackHandler.addEventListener(
        'hardwareBackPress',
        handleBackButton,
      );

      // Clean up event listener on component unmount
      return () => backHandler.remove();
    }, [handleBackButton]),
  );

  return (
    <SafeAreaView className=" h-[64px] bg-white shadow-sm  p-3 flex flex-row gap-x-3 items-center">
      <StatusBar translucent={false} />
      <TouchableOpacity onPress={handleBackButton} className="mr-1">
        <AntDesign name="arrowleft" size={24} />
      </TouchableOpacity>

      <View className="flex-grow">
        <Text className="text-lg font-semibold">Metode Verifikasi</Text>
      </View>
    </SafeAreaView>
  );
}
