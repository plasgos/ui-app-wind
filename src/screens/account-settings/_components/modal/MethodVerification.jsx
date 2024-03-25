import {View, Text, TouchableOpacity} from 'react-native';
import React from 'react';

import Ionicons from 'react-native-vector-icons/Ionicons';

import {useDispatch, useSelector} from 'react-redux';
import {verificationEmailMethod} from '../../../../redux/modules/user/reducer';
import {maskingEmail} from '../../../../lib/maskingEmail';
import {maskPhoneNumber} from '../../../../lib/maskingPhoneNumber';
import InputOtpEmail from './InputOtpEmail';

export default function MethodVerification({user, type}) {
  const {token} = useSelector(state => state.login);
  const {verificationMethod} = useSelector(state => state.user);
  console.log(
    '🚀 ~ MethodVerification ~ verificationMethod:',
    verificationMethod,
  );
  const dispatch = useDispatch();

  const handleVerifyEmailMethod = async () => {
    if (type === 'changeEmail') {
      await dispatch(verificationEmailMethod({token}));
    }
  };

  return (
    <View>
      {verificationMethod.email.data.success ||
      verificationMethod.phoneNumber.data.success ? (
        <InputOtpEmail
          typeVerify={
            verificationMethod.email.data.success
              ? 'verifyEmail'
              : 'verifyPhoneNumber'
          }
        />
      ) : (
        <View>
          <Text className="font-bold text-center mb-2">
            Pilih Metode Verifikasi
          </Text>

          <Text className="text-center mb-2">
            Pilih metode verifikasi di bawah ini untuk mendapatkan kode
            verifikasi dan melanjutkan proses ubah{' '}
            {type === 'changePhoneNumber' ? 'nomor ponsel' : 'email'}
          </Text>
          {!verificationMethod.email.loading &&
          !verificationMethod.phoneNumber.loading ? (
            <View>
              {user.data.data.email && (
                <TouchableOpacity
                  onPress={handleVerifyEmailMethod}
                  className="border border-slate-300 rounded-lg p-3 mb-3">
                  <View className="flex flex-row items-center">
                    <Ionicons
                      style={{marginRight: 10}}
                      name="mail"
                      size={36}
                      color="black"
                    />

                    <View className="flex-grow">
                      <Text className="font-bold">Kirim email ke</Text>

                      <Text>{maskingEmail(user.data.data.email)}</Text>
                    </View>
                  </View>
                </TouchableOpacity>
              )}

              {user.data.data.phone_number && (
                <TouchableOpacity className="border border-slate-300 rounded-lg p-3 mb-3">
                  <View className="flex flex-row items-center">
                    <Ionicons
                      style={{marginRight: 10}}
                      name="mail"
                      size={36}
                      color="black"
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
          ) : null}
        </View>
      )}
    </View>
  );
}
