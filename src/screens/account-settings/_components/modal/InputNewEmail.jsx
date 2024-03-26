import {View, Text, Platform} from 'react-native';
import React from 'react';
import {Controller, useForm} from 'react-hook-form';
import {Button, Input} from '@rneui/themed';
import {useDispatch, useSelector} from 'react-redux';
import {changeNewEmail} from '../../../../redux/modules/change-email/reducer';

export default function InputNewEmail({user}) {
  const {
    control,
    handleSubmit,
    formState: {errors, isValid},
  } = useForm({
    defaultValues: {
      currentEmail: user?.data?.data?.email || '',
      newEmailValue: '',
    },
  });

  const {token} = useSelector(state => state.login);
  const {newEmail} = useSelector(state => state.changeEmail);

  const dispatch = useDispatch();

  const onSubmit = async ({newEmailValue}) => {
    await dispatch(
      changeNewEmail({
        data: {
          new_email: newEmailValue,
        },
        token,
      }),
    );
  };

  const defaultStyle = {};
  if (Platform.OS === 'web') {
    defaultStyle.outlineStyle = 'none';
  }

  return (
    <View>
      <Text className="mb-3 font-bold text-lg ">Ubah Email</Text>

      <Text className="mb-3 text-center">
        Pastikan email kamu aktif untuk keamanan akun
      </Text>

      <View className="">
        <Controller
          control={control}
          render={({field: {onChange, onBlur, value}}) => (
            <Input
              editable={false}
              onBlur={onBlur}
              onChangeText={onChange}
              value={user?.data?.data?.email}
              style={defaultStyle}
              inputContainerStyle={{
                marginVertical: Platform.OS === 'web' && 12,
                borderColor: 'transparent',
              }}
              inputStyle={{
                fontSize: 16,
                backgroundColor: '#CBD5E1',
                borderRadius: 8,
                padding: 10,
                borderWidth: 0,
                color: 'grey',
              }}
              label="Email saat ini"
              labelStyle={{fontSize: 14}}
            />
          )}
          name="currentEmail"
        />
      </View>

      <View className="">
        <Controller
          control={control}
          rules={{
            required: true,
          }}
          render={({field: {onChange, onBlur, value}}) => (
            <Input
              errorMessage={errors.newEmail && 'Email harus di isi'}
              onBlur={onBlur}
              onChangeText={onChange}
              value={value}
              style={defaultStyle}
              inputContainerStyle={{
                marginBottom: Platform.OS === 'web' && 12,
                // borderColor: "transparent",
              }}
              inputStyle={{
                fontSize: 16,
                padding: 10,
                borderWidth: 0,
              }}
              label="Email baru"
              labelStyle={{fontSize: 14}}
            />
          )}
          name="newEmail"
        />
      </View>
      <Text className="mb-3 text-xs text-center text-slate-400 ml-3">
        Kami akan mengirim kode verifikasi melalui email
      </Text>

      <Button
        disabled={!isValid || newEmail.loading}
        loading={newEmail.loading}
        onPress={handleSubmit(onSubmit)}
        title="Selanjutnya"
        buttonStyle={{
          backgroundColor: '#fa541c',
          borderRadius: 8,
        }}
      />
    </View>
  );
}
