/* eslint-disable prettier/prettier */
import {View, Text, Platform, TouchableOpacity} from 'react-native';
import React, {useEffect, useRef} from 'react';
import {Input} from '@rneui/themed';
import {Button} from '@rneui/themed';
import {useDispatch, useSelector} from 'react-redux';
import {
  requestOtpPhoneNumber,
  resetOtp,
  resetVerifyOtp,
  setVerifyOtp,
} from '../../../redux/modules/register/reducer';
import {useForm, Controller} from 'react-hook-form';
import Toast from 'react-native-toast-message';

import Ionicons from 'react-native-vector-icons/Ionicons';

export default function VerifyPhoneNumber({navigation}) {
  const {
    control,
    handleSubmit,
    formState: {isValid},
    getValues,
    reset,
  } = useForm({
    defaultValues: {
      'input-0': '',
      'input-1': '',
      'input-2': '',
      'input-3': '',
      'input-4': '',
      'input-5': '',
    },
  });

  const {check} = useSelector(state => state.register);
  const {verifyOtp} = useSelector(state => state.register);
  const dispatch = useDispatch();

  const inputs = Array(6)
    .fill(null)
    // eslint-disable-next-line react-hooks/rules-of-hooks
    .map(() => useRef(null));

  const handleTextChange = (text, index) => {
    if (text.length === 1 && index < 5) {
      inputs[index + 1].current.focus();
    } else if (text.length === 0 && index > 0) {
      inputs[index - 1].current.focus();
    }
  };

  const handleKeyPress = (event, index) => {
    if (
      event.nativeEvent.key === 'Backspace' &&
      index > 0 &&
      !event.target.value
    ) {
      inputs[index - 1].current.focus();
    }
  };

  const maskPhoneNumber = phoneNumber => {
    if (!phoneNumber || phoneNumber.length < 10) {
      return '';
    }

    // Bagian pertama
    const firstPart = phoneNumber.substring(0, phoneNumber.length - 8);
    // Bagian kedua
    const secondPart = phoneNumber.substring(
      phoneNumber.length - 8,
      phoneNumber.length - 4,
    );
    // Bagian ketiga
    const thirdPart = phoneNumber.substring(
      phoneNumber.length - 4,
      phoneNumber.length - 2,
    );
    // Bagian keempat
    const fourthPart = phoneNumber.substring(phoneNumber.length - 2);

    // Gabungkan semua bagian dengan bintang di antaranya
    return `${'*'.repeat(firstPart.length)}_${'*'.repeat(
      secondPart.length,
    )}_${'*'.repeat(thirdPart.length)}${fourthPart}`;
  };

  useEffect(() => {
    if (verifyOtp.data.success) {
      Toast.show({
        type: 'success',
        text1: 'Verifikasi Berhasil',
        visibilityTime: 1000,
      });
      setTimeout(() => {
        navigation.navigate('complete-register');
      }, 1000);
    } else if (verifyOtp.data?.success === false) {
      Toast.show({
        type: 'error',
        text1: verifyOtp.data.message,
      });
    }
  }, [navigation, verifyOtp]);

  const handleRegister = async () => {
    try {
      const allValues = getValues();

      const combinedValue = Object.keys(allValues)
        .map(key => allValues[key])
        .join('');

      await dispatch(resetVerifyOtp());
      await dispatch(
        setVerifyOtp({
          phone_number: check?.data?.data?.phone_number,
          otp_code: combinedValue,
        }),
      );
    } catch (error) {
      console.log(error);
    }
  };

  const handleVerify = async () => {
    try {
      await dispatch(resetOtp());
      await dispatch(resetVerifyOtp());
      await dispatch(
        requestOtpPhoneNumber({phone_number: check?.data?.data?.phone_number}),
      );
      reset();
      if (inputs[0].current) {
        inputs[0].current.focus();
      }
    } catch (error) {
      console.log(error);
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
    <View className="flex-1 justify-center items-center p-10 overflow-x-hidden">
      <Text className="text-xl mb-3">Masukan Kode Verifikasi</Text>
      <Ionicons
        style={{marginBottom: 10}}
        name="chatbox-ellipses-outline"
        size={36}
        color="black"
      />

      <Text className="text-sm text-center text-slate-400 mb-3">
        Kode Verifikasi Sudah Di Kirim Melalui Pesan Ke :
        <Text className="font-semibold text-black">
          {' '}
          {maskPhoneNumber(check?.data?.data.phone_number)}
        </Text>
      </Text>

      <View
        style={{overflow: 'hidden'}}
        className="w-full  flex-row justify-center gap-x-3 ">
        {inputs.map((input, index) => (
          <Controller
            key={index}
            control={control}
            name={`input-${index}`}
            defaultValue=""
            rules={{required: true}}
            render={({field}) => (
              <Input
                ref={inputs[index]}
                style={defaultStyle}
                containerStyle={{width: 50}}
                maxLength={1}
                inputStyle={{
                  textAlign: Platform.OS === 'android' && 'center',
                }}
                keyboardType="number-pad"
                onChangeText={text => {
                  field.onChange(text);
                  handleTextChange(text, index);
                }}
                onKeyPress={event => {
                  field.onBlur();
                  handleKeyPress(event, index);
                }}
                value={field.value}
              />
            )}
          />
        ))}
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
