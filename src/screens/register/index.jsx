import { View, Text, Platform } from "react-native";
import React, { useState } from "react";
import { Card, Button, Input, Dialog } from "@rneui/themed";
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
import EmailRegister from "./email";
import PhoneNumberRegister from "./phone-number";

export default function Register({ navigation }) {
  const [isEmailVisible, setIsEmailVisible] = useState(false);
  const [isPhoneNumberVisible, setIsPhoneNumberVisible] = useState(false);
  const {
    control,
    handleSubmit,
    formState: { errors, isValid },
  } = useForm({
    defaultValues: {
      value: "",
    },
  });

  const { check } = useSelector((state) => state.register);
  const { otp } = useSelector((state) => state.register);
  console.log("🚀 ~ Register ~ otp:", otp);

  const GLOBALSTORE = useSelector((state) => state.register);
  console.log("🚀 ~ Register ~ GLOBALSTORE:", GLOBALSTORE);

  const dispatch = useDispatch();

  const validateEmail = (email) => {
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return regex.test(email);
  };

  const validatePhoneNumber = (phoneNumber) => {
    const regex = /^(08|628)\d{5,15}$/;
    return regex.test(phoneNumber);
  };

  const onSubmit = async ({ value }) => {
    if (validateEmail(value)) {
      await dispatch(getCheckEmail({ email: value }));
      setIsEmailVisible(true);
      setIsPhoneNumberVisible(false);
    } else if (validatePhoneNumber(value)) {
      await dispatch(getCheckPhoneNumber({ phoneNumber: value }));
      setIsPhoneNumberVisible(true);
      setIsEmailVisible(false);
    } else {
      Toast.show({
        type: "error",
        text1: "Format Tidak Sesuai",
        text2:
          "Silahkan Masukan Email / No Telephone Dengan Format Yang Sesuai",
      });
    }
  };

  const defaultStyle = {};
  if (Platform.OS === "web") {
    defaultStyle.outlineStyle = "none";
  }

  return (
    <>
      <View className="flex-1  justify-center items-center bg-white p-10">
        <Image
          containerStyle={{
            width: "100%",
            height: 50,
            marginHorizontal: "auto",
          }}
          source={require("../../../assets/images/plasgos.png")}
        />
        <Card containerStyle={{ width: "100%", borderRadius: 10 }}>
          <Card.Title>Daftar Akun</Card.Title>
          <Card.Divider />
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
                render={({ field: { onChange, onBlur, value } }) => (
                  <Input
                    errorMessage={errors.value && "Form Harus Di Isi."}
                    onBlur={onBlur}
                    onChangeText={onChange}
                    value={value}
                    style={defaultStyle}
                    placeholder="Email  / No Telephone"
                    inputContainerStyle={{
                      paddingVertical: 10,
                      marginBottom: Platform.OS === "web" && 12,
                      // borderColor: "transparent",
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
                disabled={!isValid}
                onPress={handleSubmit(onSubmit)}
                size="md"
                radius={"sm"}
                type="solid"
                color="#fa541c"
                titleStyle={{ fontSize: 16 }}
              >
                Daftar
              </Button>
            </View>
          </View>
        </Card>

        <EmailRegister
          isEmailVisible={isEmailVisible}
          setIsEmailVisible={setIsEmailVisible}
          check={check}
          navigation={navigation}
        />
        <PhoneNumberRegister
          isPhoneNumberVisible={isPhoneNumberVisible}
          setIsPhoneNumberVisible={setIsPhoneNumberVisible}
          check={check}
          navigation={navigation}
        />
      </View>
    </>
  );
}
