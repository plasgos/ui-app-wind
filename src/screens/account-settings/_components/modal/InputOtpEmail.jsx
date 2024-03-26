import {View, Text, Platform} from 'react-native';
import React, {useEffect, useState} from 'react';
import {Input} from '@rneui/themed';
import {Button} from '@rneui/themed';
import {useDispatch, useSelector} from 'react-redux';

import {useForm, Controller} from 'react-hook-form';
import {TouchableOpacity} from 'react-native';

import Ionicons from 'react-native-vector-icons/Ionicons';
import {maskingEmail} from '../../../../lib/maskingEmail';

import InputNewEmail from './InputNewEmail';
import {maskPhoneNumber} from '../../../../lib/maskingPhoneNumber';
import {
  verificationEmailMethod,
  verificationPhoneNumberMethod,
  verifyOtpCheckEMail,
} from '../../../../redux/modules/change-email/reducer';

export default function InputOtpEmail({typeVerify}) {
  // const {typeVerify} = route.params;

  const [remainingSeconds, setRemainingSeconds] = useState(30);
  const [countdownActive, setCountdownActive] = useState(false);

  useEffect(() => {
    let timer;
    if (countdownActive) {
      timer = setInterval(() => {
        if (remainingSeconds <= 0) {
          clearInterval(timer);
          setCountdownActive(false); // Menandakan countdown telah selesai
        } else {
          setRemainingSeconds(prevSeconds => prevSeconds - 1);
        }
      }, 1000);
    }

    return () => clearInterval(timer);
  }, [countdownActive, remainingSeconds]);

  useEffect(() => {
    setCountdownActive(true);
  }, []);

  const {
    control,
    handleSubmit,
    formState: {isValid},
  } = useForm({
    defaultValues: {
      otp: '',
    },
  });

  const {user} = useSelector(state => state.user);
  const {verifyOtpCheckEmail: checkEmail} = useSelector(
    state => state.changeEmail,
  );

  const {token} = useSelector(state => state.login);

  const dispatch = useDispatch();

  const handleVerifyOtp = async ({otp}) => {
    await dispatch(
      verifyOtpCheckEMail({
        data: {
          otp_code: otp,
        },
        token,
      }),
    );
  };

  const resendOtp = async () => {
    setRemainingSeconds(30);
    setCountdownActive(true);

    if (typeVerify === 'verifyOtpByEmail') {
      await dispatch(verificationEmailMethod({token}));
    } else {
      await dispatch(verificationPhoneNumberMethod({token}));
    }
  };

  const defaultStyle = {};
  if (Platform.OS === 'web') {
    defaultStyle.outlineStyle = 'none';
    defaultStyle.width = '30px';
    defaultStyle.textAlign = 'center';
    defaultStyle.flexGrow = 1;
  }

  return (
    <View className="">
      {checkEmail.data.success ? (
        <InputNewEmail user={user} />
      ) : (
        <View
          style={{overflow: 'hidden'}}
          className="flex-1 justify-center items-center  overflow-x-hidden">
          <Text className="text-xl text-center mb-3">
            Masukan Kode Verifikasi
          </Text>

          {typeVerify === 'verifyOtpByEmail' ? (
            <Ionicons
              style={{marginBottom: 10}}
              name="mail-outline"
              size={36}
              color="black"
            />
          ) : (
            <Ionicons
              style={{marginBottom: 10}}
              name="chatbox-ellipses-outline"
              size={36}
              color="black"
            />
          )}

          <Text className="text-sm text-center text-slate-400 mb-3">
            Kode Verifikasi Sudah Di Kirim Melalui{' '}
            {typeVerify === 'verifyOtpByEmail' ? 'email' : 'pesan'} Ke :
            <Text className="font-semibold text-black">
              {' '}
              {typeVerify === 'verifyOtpByEmail'
                ? maskingEmail(user?.data?.data.email)
                : maskPhoneNumber(user?.data?.data.phone_number)}
            </Text>
          </Text>

          <View
            style={{overflow: 'hidden'}}
            className="w-full  flex-row justify-center gap-x-3 ">
            <Controller
              control={control}
              name="otp"
              rules={{required: true, minLength: 6, maxLength: 6}}
              render={({field: {onChange, onBlur, value}}) => (
                <Input
                  errorMessage={checkEmail.message && checkEmail.message}
                  style={defaultStyle}
                  maxLength={6}
                  inputStyle={{
                    textAlign: Platform.OS === 'android' && 'center',
                  }}
                  inputContainerStyle={{
                    borderColor: '#fa541c',
                  }}
                  keyboardType="number-pad"
                  onBlur={onBlur}
                  onChangeText={onChange}
                  value={value}
                />
              )}
            />
          </View>
          <Button
            loading={checkEmail.loading}
            disabled={!isValid || checkEmail.loading}
            onPress={handleSubmit(handleVerifyOtp)}
            title="Verifikasi"
            buttonStyle={{
              backgroundColor: '#fa541c',
              borderRadius: 8,
            }}
            containerStyle={{
              width: 200,
              marginHorizontal: 50,
              marginVertical: 10,
            }}
          />

          <View className="mt-3  ">
            {remainingSeconds <= 0 ? (
              <View className="flex-row">
                <Text className="text-slate-400 ">
                  Tidak Menerima Kode Verifikasi ?{' '}
                </Text>
                <TouchableOpacity onPress={resendOtp}>
                  <Text className="underline text-[#fa541c]">Kirim Ulang</Text>
                </TouchableOpacity>
              </View>
            ) : (
              <View>
                <Text className="text-slate-400 ">
                  Mohon tunggu
                  <Text className="text-slate-600 font-semibold mx-1">
                    {remainingSeconds} detik
                  </Text>
                  untuk mengirim ulang
                </Text>
              </View>
            )}
          </View>
        </View>
      )}
    </View>
  );
}
