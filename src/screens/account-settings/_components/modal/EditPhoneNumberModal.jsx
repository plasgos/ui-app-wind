import {View, Text, TouchableOpacity, Platform} from 'react-native';
import React, {useEffect, useState} from 'react';

import {Dialog, Input} from '@rneui/themed';
import AntDesign from 'react-native-vector-icons/AntDesign';
import {Controller, useForm} from 'react-hook-form';

import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import {useDispatch, useSelector} from 'react-redux';
import {checkPassword} from '../../../../redux/modules/user/reducer';

export default function EditPhoneNumberModal({
  openModal,
  toggleModal,
  user,
  token,
  navigation,
  type,
}) {
  const [showPassword, setShowPassword] = useState(false);

  const {checkPassword: check} = useSelector(state => state.user);

  const dispatch = useDispatch();

  const {
    control,
    handleSubmit,

    formState: {isValid},
  } = useForm({
    defaultValues: {
      password: '',
    },
  });

  useEffect(() => {
    if (check.data.success && type === 'changePhoneNumber') {
      navigation.navigate('MethodVerifyChangePhoneNumber');
      toggleModal();
    }
  }, [check, navigation, toggleModal, type]);

  const onSubmit = async ({password}) => {
    try {
      await dispatch(
        checkPassword({
          data: {
            account: user.data.data.email,
            password,
          },
          token,
        }),
      );
    } catch (error) {
      console.log(error);
    }
  };

  const toggleShowPassword = () => {
    setShowPassword(prev => !prev);
  };

  const defaultStyle = {};
  if (Platform.OS === 'web') {
    defaultStyle.outlineStyle = 'none';
  }
  return (
    <View>
      <Dialog isVisible={openModal} onBackdropPress={toggleModal}>
        <View className="flex flex-row justify-between items-center mb-3">
          <Dialog.Title
            titleStyle={{marginBottom: 0}}
            title={'Ubah Nomor Ponsel'}
          />
          <TouchableOpacity onPress={toggleModal}>
            <AntDesign name="close" size={24} />
          </TouchableOpacity>
        </View>

        <View className="my-3">
          <Text className="font-bold px-[10px] ">Nomor ponsel saat ini :</Text>
          <Text className="mb-3 px-[10px]">
            {user?.data?.data?.phone_number}
          </Text>

          <View className="">
            <Controller
              control={control}
              rules={{
                required: true,
                minLength: 6,
              }}
              render={({field: {onChange, onBlur, value}}) => (
                <Input
                  // errorMessage={errors.password && 'Password harus di isi'}
                  errorMessage={
                    check.data?.success === false &&
                    check.data?.message &&
                    check.data?.message
                  }
                  onBlur={onBlur}
                  onChangeText={onChange}
                  value={value}
                  style={defaultStyle}
                  secureTextEntry={showPassword ? false : true}
                  inputContainerStyle={{
                    marginBottom: Platform.OS === 'web' && 12,
                    // borderColor: "transparent",
                  }}
                  inputStyle={{
                    fontSize: 16,

                    borderWidth: 0,
                  }}
                  label="Kata Sandi"
                  labelStyle={{fontSize: 14}}
                  // eslint-disable-next-line react/no-unstable-nested-components
                  rightIcon={() => (
                    <MaterialIcons
                      onPress={toggleShowPassword}
                      name={showPassword ? 'visibility' : 'visibility-off'}
                      size={18}
                      color="gray"
                    />
                  )}
                />
              )}
              name="password"
            />
          </View>
        </View>

        <Dialog.Actions>
          <Dialog.Button
            loading={check.loading}
            disabled={!isValid || check.loading}
            title="Lanjutkan"
            type="solid"
            radius={'md'}
            color="#fa541c"
            containerStyle={{flex: 1}}
            onPress={handleSubmit(onSubmit)}
          />
        </Dialog.Actions>
      </Dialog>
    </View>
  );
}
