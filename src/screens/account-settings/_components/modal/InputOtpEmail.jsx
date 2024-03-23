import {View, Text, Platform} from 'react-native';
import React, {useEffect, useRef} from 'react';
import {Input} from '@rneui/themed';
import {Button} from '@rneui/themed';
import {useDispatch, useSelector} from 'react-redux';

import {useForm, Controller} from 'react-hook-form';
import Toast from 'react-native-toast-message';
import {TouchableOpacity} from 'react-native';

import Ionicons from 'react-native-vector-icons/Ionicons';
import {maskingEmail} from '../../../../lib/maskingEmail';

export default function InputOtpEmail({navigation}) {
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
  //   const {verifyOtp} = useSelector(state => state.register);
  const dispatch = useDispatch();

  const handleRegister = async ({otp}) => {
    console.log('🚀 ~ handleRegister ~ otp:', otp);
    // try {
    //   const allValues = getValues();
    //   const combinedValue = Object.keys(allValues)
    //     .map(key => allValues[key])
    //     .join('');
    //   await dispatch(resetVerifyOtp());
    //   await dispatch(
    //     setVerifyOtp({
    //       email: check?.data?.data.email,
    //       otp_code: combinedValue,
    //     }),
    //   );
    // } catch (error) {
    //   console.log(error);
    // }
  };

  const handleVerify = async () => {
    // try {
    //   await dispatch(resetOtp());
    //   await dispatch(resetVerifyOtp());
    //   await dispatch(requestOtpEmail({email: check?.data?.data.email}));
    //   reset();
    //   if (inputs[0].current) {
    //     inputs[0].current.focus();
    //   }
    // } catch (error) {
    //   console.log(error);
    // }
  };

  const defaultStyle = {};
  if (Platform.OS === 'web') {
    defaultStyle.outlineStyle = 'none';
    defaultStyle.width = '30px';
    defaultStyle.textAlign = 'center';
    defaultStyle.flexGrow = 1;
  }

  return (
    <View
      style={{overflow: 'hidden'}}
      className="flex-1 justify-center items-center p-10 overflow-x-hidden">
      <Text className="text-xl text-center mb-3">Masukan Kode Verifikasi</Text>
      <Ionicons
        style={{marginBottom: 10}}
        name="mail"
        size={36}
        color="black"
      />
      <Text className="text-sm text-center text-slate-400 mb-3">
        Kode Verifikasi Sudah Di Kirim Melalui Email Ke :
        <Text className="font-semibold text-black">
          {' '}
          {maskingEmail(user?.data?.data.email)}
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
              style={defaultStyle}
              maxLength={6}
              inputStyle={{
                textAlign: Platform.OS === 'android' && 'center',
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
        disabled={!isValid}
        onPress={handleSubmit(handleRegister)}
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

      <View className="mt-3 flex-row ">
        <Text className="text-slate-400 ">
          Tidak Menerima Kode Verifikasi ?{' '}
        </Text>
        <TouchableOpacity onPress={handleVerify}>
          <Text className="underline text-[#fa541c]">Kirim Ulang</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}
