import { View, Text } from "react-native";
import React from "react";
import { Card, Button, Input } from "@rneui/themed";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { FontAwesome5 } from "@expo/vector-icons";
import { Image } from "@rneui/themed";

import { MaterialIcons } from "@expo/vector-icons";

import { useForm, Controller } from "react-hook-form";
import Toast from "react-native-toast-message";
import { useDispatch, useSelector } from "react-redux";
import {
  getCheckEmail,
  getCheckPhoneNumber,
} from "../../redux/modules/register/reducer";

export default function Register({ navigation }) {
  const {
    control,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({
    defaultValues: {
      value: "",
    },
  });

  const { check } = useSelector((state) => state.register);
  console.log("🚀 ~ EmailRegister ~ register:", check);

  const dispatch = useDispatch();

  const validateEmail = (email) => {
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return regex.test(email);
  };

  const validatePhoneNumber = (phoneNumber) => {
    const regex =
      /^[\+]?([0-9][\s]?|[0-9]?)([(][0-9]{3}[)][\s]?|[0-9]{3}[-\s\.]?)[0-9]{3}[-\s\.]?[0-9]{4,6}$/im;
    return regex.test(phoneNumber);
  };

  const onSubmit = async ({ value }) => {
    console.log(value);

    if (validateEmail(value)) {
      await dispatch(getCheckEmail({ email: value }));

      // navigation.navigate("email");
    } else if (validatePhoneNumber(value)) {
      await dispatch(getCheckPhoneNumber({ phoneNumber: value }));

      // navigation.navigate("phone-number");
    } else {
      Toast.show({
        type: "error",
        text1: "Format Tidak Sesuai",
        text2: "Silahkan Masukan Email Dengan Format Yang Sesuai",
      });
    }
  };

  return (
    <>
      {/* <Image
        containerStyle={{ width: "100%", height: 50 }}
        source={require("../../../assets/images/plasgos.png")}
      /> */}

      <View className="flex-1 justify-center items-center bg-white">
        <Card>
          <Card.Title>Daftar Akun</Card.Title>
          <Card.Divider />
          <View className="">
            {/* <Text className="text-slate-400 mb-3">
              Silhakan Masukan Email / Nomor Telephone
            </Text> */}

            <View>
              <Controller
                control={control}
                rules={{
                  required: true,
                }}
                render={({ field: { onChange, onBlur, value } }) => (
                  <Input
                    errorMessage={errors.value && "Form Harus Di Isi."}
                    onBlur={onBlur}
                    onChangeText={onChange}
                    value={value}
                    style={{ outlineStyle: "none" }}
                    keyboardType="email-address"
                    placeholder="Email  / No Telephone"
                    inputContainerStyle={{
                      paddingVertical: 10,
                      borderColor: "transparent",
                    }}
                    inputStyle={{
                      fontSize: 16,
                      paddingHorizontal: 10,
                      borderWidth: 0,
                    }}
                    leftIcon={() => (
                      <MaterialIcons
                        name="contact-phone"
                        size={24}
                        color="#fa541c"
                      />
                    )}
                  />
                )}
                name="value"
              />

              <Button
                onPress={handleSubmit(onSubmit)}
                size="sm"
                radius={"sm"}
                type="solid"
                color="#fa541c"
                titleStyle={{ fontSize: 16 }}
              >
                Submit
              </Button>
            </View>
          </View>
        </Card>
      </View>
    </>
  );
}
