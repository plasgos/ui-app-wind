import {View, Text, TouchableOpacity} from 'react-native';
import React, {useEffect} from 'react';

import Ionicons from 'react-native-vector-icons/Ionicons';

import {useDispatch, useSelector} from 'react-redux';

import {maskingEmail} from '../../../lib/maskingEmail';
import {maskPhoneNumber} from '../../../lib/maskingPhoneNumber';
import {
  verificationEmailMethod,
  verificationPhoneNumberMethod,
} from '../../../redux/modules/change-email/reducer';
import {ActivityIndicator} from 'react-native';
import InputOtpEmail from '../_components/modal/InputOtpEmail';

export default function MethodVerifyChangeEmail({navigation}) {
  const {token} = useSelector(state => state.login);
  const {user} = useSelector(state => state.user);
  const dispatch = useDispatch();

  const changeEmail = useSelector(state => state.changeEmail);

  // useEffect(() => {
  //   if (changeEmail.verificationMethod.email.data.success) {
  //     navigation.navigate('InputOtpEmail', {typeVerify: 'verifyOtpByEmail'});
  //   }
  // }, [changeEmail.verificationMethod.email.data.success, navigation]);

  // useEffect(() => {
  //   if (changeEmail.verificationMethod.phoneNumber.data.success) {
  //     navigation.navigate('InputOtpEmail', {
  //       typeVerify: 'verifyOtpByPhoneNumber',
  //     });
  //   }
  // }, [changeEmail.verificationMethod.phoneNumber.data.success, navigation]);

  const handleVerifyEmailMethod = async () => {
    await dispatch(verificationEmailMethod({token}));
  };

  const handleVerifyEmailMethodByPhoneNumber = async () => {
    await dispatch(verificationPhoneNumberMethod({token}));
  };

  return (
    <View className="p-8">
      {changeEmail.verificationMethod.email.data.success ||
      changeEmail.verificationMethod.phoneNumber.data.success ? null : (
        <>
          <View>
            <Text className="font-bold text-center text-lg text-slate-700 mb-2">
              Pilih Metode Verifikasi
            </Text>

            <Text className="text-center mb-4">
              Pilih metode verifikasi di bawah ini untuk mendapatkan kode
              verifikasi dan melanjutkan proses ubah email
            </Text>
          </View>

          {changeEmail.verificationMethod.email.loading ||
          changeEmail.verificationMethod.phoneNumber.loading ? (
            <View className="flex-1 justify-center items-center my-5">
              <ActivityIndicator size="large" color="#fa541c" />
            </View>
          ) : (
            <View>
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

                        <Text>
                          {maskPhoneNumber(user.data.data.phone_number)}
                        </Text>
                      </View>
                    </View>
                  </TouchableOpacity>
                )}
              </View>
            </View>
          )}
        </>
      )}

      {changeEmail.verificationMethod.email.data.success && (
        <InputOtpEmail typeVerify="verifyOtpByEmail" />
      )}

      {changeEmail.verificationMethod.phoneNumber.data.success && (
        <InputOtpEmail typeVerify="verifyOtpByPhoneNumber" />
      )}
    </View>
  );
}
