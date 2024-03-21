import {View, Image, Platform, Text, TouchableOpacity} from 'react-native';
import React, {useEffect, useState} from 'react';
import {Controller, useForm} from 'react-hook-form';
import {Button, Card, Input} from '@rneui/themed';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import {useDispatch, useSelector} from 'react-redux';
import {getLogin, resetMessageLogin} from '../../redux/modules/login/reducer';
import Toast from 'react-native-toast-message';

export default function Login({navigation}) {
  const [showPassword, setShowPassword] = useState(false);

  const login = useSelector(state => state.login);
  const dispatch = useDispatch();

  useEffect(() => {
    if (login.message) {
      Toast.show({
        type: 'error',
        text1: login.message,
      });
    }
    dispatch(resetMessageLogin());
  }, [dispatch, login.message]);

  const {
    control,
    handleSubmit,
    formState: {errors, isValid},
  } = useForm({
    defaultValues: {
      emailOrPhoneNumber: '',
      password: '',
    },
  });

  const toggleShowPassword = () => {
    setShowPassword(prev => !prev);
  };

  const onSubmit = async ({emailOrPhoneNumber, password}) => {
    try {
      await dispatch(
        getLogin({
          account: emailOrPhoneNumber,
          password,
        }),
      );
    } catch (error) {}
  };

  const defaultStyle = {};
  if (Platform.OS === 'web') {
    defaultStyle.outlineStyle = 'none';
  }

  return (
    <View className="flex-1  justify-center items-center bg-white p-10">
      {/* <Image
        style={{width: 150, height: 60, objectFit: 'contain'}}
        source={require('../../../assets/images/plasgos.png')}
      /> */}
      <Card
        containerStyle={{
          width: '100%',
          borderRadius: 10,
          padding: 20,
        }}>
        <Card.Title style={{textAlign: 'left', fontSize: 24}}>Masuk</Card.Title>
        <View className="">
          {/* <Text className="text-slate-400 mb-3">
              Silhakan Masukan Email / Nomor Telephone
            </Text> */}

          <View className="">
            <Controller
              control={control}
              rules={{
                required: true,
              }}
              render={({field: {onChange, onBlur, value}}) => (
                <Input
                  errorMessage={
                    errors.emailOrPhoneNumber &&
                    'Email Atau No Ponsel Harus Di Isi.'
                  }
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

                    borderWidth: 0,
                  }}
                  label="Email Atau No Ponsel"
                  labelStyle={{fontSize: 14}}
                />
              )}
              name="emailOrPhoneNumber"
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
                  errorMessage={errors.password && 'Password harus di isi'}
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
                      size={24}
                      color="gray"
                    />
                  )}
                />
              )}
              name="password"
            />
          </View>

          <TouchableOpacity>
            <Text className="text-right text-xs mb-4 text-[#fa541c]">
              Lupa Kata Sandi ?
            </Text>
          </TouchableOpacity>
          <Button
            loading={login.isLoadingLogin}
            disabled={!isValid || login.isLoadingLogin}
            onPress={handleSubmit(onSubmit)}
            size="md"
            radius={'sm'}
            type="solid"
            color="#fa541c"
            titleStyle={{fontSize: 16}}>
            Masuk
          </Button>
        </View>

        <View className="flex-row items-center justify-between my-8">
          <View className="flex-grow flex-shrink h-[1px] bg-slate-300" />
          <Text className="mx-3">atau masuk dengan</Text>
          <View className="flex-grow flex-shrink h-[1px] bg-slate-300" />
        </View>

        <View className="mb-8">
          <Button
            icon={() => (
              <Image
                style={{width: 30, height: 30, objectFit: 'contain'}}
                source={require('../../../assets/images/google.png')}
              />
            )}
            iconPosition="left"
            radius={'sm'}
            size="md"
            title="Google"
            buttonStyle={{
              borderColor: '#CBD5E1',
              borderWidth: 1,
            }}
            type="outline"
            titleStyle={{color: 'black', fontSize: 16}}
            containerStyle={{
              width: '100%',
            }}
          />
        </View>

        <View className="flex-row items-center justify-center">
          <Text className="mr-1">Pengguna baru di Plasgos?</Text>
          <TouchableOpacity onPress={() => navigation.navigate('Register')}>
            <Text className=" text-[#fa541c]">Daftar</Text>
          </TouchableOpacity>
        </View>
      </Card>
    </View>
  );
}
