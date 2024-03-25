import {View, Text, TouchableOpacity} from 'react-native';
import React from 'react';

import Ionicons from 'react-native-vector-icons/Ionicons';

import {useDispatch, useSelector} from 'react-redux';

import {
  verificationEmailMethod,
  verificationPhoneNumberMethod,
} from '../../../redux/modules/user/reducer';
import {maskingEmail} from '../../../lib/maskingEmail';
import {maskPhoneNumber} from '../../../lib/maskingPhoneNumber';

export default function MethodVerifyChangeEmail() {
  const {token} = useSelector(state => state.login);
  const {user} = useSelector(state => state.user);
  const dispatch = useDispatch();

  // const changeEmail = useSelector(state => state.changeEmail);
  const handleVerifyEmailMethod = async () => {
    await dispatch(verificationEmailMethod({token}));
  };

  const handleVerifyEmailMethodByPhoneNumber = async () => {
    await dispatch(verificationPhoneNumberMethod({token}));
  };

  return (
    <View className="p-8">
      <Text className="font-bold text-center text-lg text-slate-700 mb-2">
        Pilih Metode Verifikasi
      </Text>

      <Text className="text-center mb-4">
        Pilih metode verifikasi di bawah ini untuk mendapatkan kode verifikasi
        dan melanjutkan proses ubah email
      </Text>

      <View>
        {user.data.data.email && (
          <TouchableOpacity
            onPress={handleVerifyEmailMethod}
            className="border border-slate-300 rounded-lg p-3 mb-4 shadow-md">
            <View className="flex flex-row items-center">
              <Ionicons
                style={{marginRight: 10}}
                name="mail-outline"
                size={36}
              />

              <View className="flex-grow">
                <Text className="font-bold">Kirim email ke</Text>

                <Text>{maskingEmail(user.data.data.email)}</Text>
              </View>
            </View>
          </TouchableOpacity>
        )}

        {user.data.data.phone_number && (
          <TouchableOpacity
            onPress={handleVerifyEmailMethodByPhoneNumber}
            className="border border-slate-300 rounded-lg p-3 mb-4 shadow-md">
            <View className="flex flex-row items-center">
              <Ionicons
                style={{marginRight: 10}}
                name="chatbox-ellipses-outline"
                size={36}
              />

              <View className="flex-grow">
                <Text className="font-bold">Kirim pesan ke</Text>

                <Text>{maskPhoneNumber(user.data.data.phone_number)}</Text>
              </View>
            </View>
          </TouchableOpacity>
        )}
      </View>
    </View>
  );
}
