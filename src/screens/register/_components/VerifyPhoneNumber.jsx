import { View, Text, Platform, TouchableOpacity } from "react-native";
import React, { useEffect, useRef, useState } from "react";
import { Input } from "@rneui/themed";
import { Button } from "@rneui/themed";
import { useDispatch, useSelector } from "react-redux";
import {
  requestOtpPhoneNumber,
  resetOtp,
  resetVerifyOtp,
  setVerifyOtp,
} from "../../../redux/modules/register/reducer";
import { useForm, Controller } from "react-hook-form";
import Toast from "react-native-toast-message";

import * as SecureStore from "expo-secure-store";

export default function VerifyPhoneNumber({ navigation }) {
  const {
    control,
    handleSubmit,
    formState: { isValid },
    getValues,
    reset,
  } = useForm({
    defaultValues: {
      "input-0": "",
      "input-1": "",
      "input-2": "",
      "input-3": "",
      "input-4": "",
      "input-5": "",
    },
  });

  const { check } = useSelector((state) => state.register);
  const { verifyOtp } = useSelector((state) => state.register);
  const dispatch = useDispatch();

  const inputs = Array(6)
    .fill(null)
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
      event.nativeEvent.key === "Backspace" &&
      index > 0 &&
      !event.target.value
    ) {
      inputs[index - 1].current.focus();
    }
  };

  useEffect(() => {
    if (verifyOtp.data.success) {
      Toast.show({
        type: "success",
        text1: "Verifikasi Berhasil",
        visibilityTime: 1000,
      });
      setTimeout(() => {
        navigation.navigate("complete-register");
      }, 1000);
    } else if (verifyOtp.data?.success === false) {
      Toast.show({
        type: "error",
        text1: verifyOtp.data.message,
      });
    }
  }, [verifyOtp]);

  const handleRegister = async () => {
    try {
      const allValues = getValues();

      const combinedValue = Object.keys(allValues)
        .map((key) => allValues[key])
        .join("");

      await dispatch(resetVerifyOtp());
      await dispatch(
        setVerifyOtp({
          phone_number: check?.data?.data.phone_number,
          otp_code: combinedValue,
        })
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
        requestOtpPhoneNumber({ phone_number: check?.data?.data.phone_number })
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
  if (Platform.OS === "web") {
    defaultStyle.outlineStyle = "none";
    defaultStyle.width = "30px";
    defaultStyle.textAlign = "center";
    defaultStyle.flexGrow = 1;
  }

  // const handleGetItem = async () => {
  //   try {
  //     const storedValue = await SecureStore.getItemAsync("register");
  //     if (storedValue !== null) {
  //       console.log("Stored value:", storedValue);
  //     } else {
  //       console.log("No data stored under the key.");
  //     }
  //   } catch (error) {
  //     console.error("Error retrieving data from SecureStore:", error);
  //   }
  // };

  return (
    <View className="flex-1 justify-center items-center p-10 overflow-x-hidden">
      <Text className="text-xl mb-3">Verifikasi No Telephone</Text>
      <Text className="text-sm text-center text-slate-400 mb-3">
        Silahkan Masukan Kode Otp yang sudah di kirim melalui pesan ke :
        <Text className="font-semibold text-black">
          {" "}
          {check?.data?.data.phone_number}
        </Text>
      </Text>

      <View
        style={{ overflow: "hidden" }}
        className="w-full  flex-row justify-center gap-x-3 "
      >
        {inputs.map((input, index) => (
          <Controller
            key={index}
            control={control}
            name={`input-${index}`}
            defaultValue=""
            rules={{ required: true }}
            render={({ field }) => (
              <Input
                ref={inputs[index]}
                style={defaultStyle}
                containerStyle={{ width: 50 }}
                maxLength={1}
                inputStyle={{
                  textAlign: Platform.OS === "android" && "center",
                }}
                keyboardType="number-pad"
                onChangeText={(text) => {
                  field.onChange(text);
                  handleTextChange(text, index);
                }}
                onKeyPress={(event) => {
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
          backgroundColor: "#fa541c",
          borderRadius: 8,
        }}
        containerStyle={{
          width: 200,
          marginHorizontal: 50,
          marginVertical: 10,
        }}
      />

      <View className="mt-3 flex-row ">
        <Text className="text-slate-400 ">Tidak Menerima Kode ? </Text>
        <TouchableOpacity onPress={handleVerify}>
          <Text className="underline text-blue-500">Kirim Ulang</Text>
        </TouchableOpacity>
      </View>

      {/* <Button
        onPress={handleGetItem}
        title="get item secure"
        buttonStyle={{
          backgroundColor: "#fa541c",
          borderRadius: 8,
        }}
        containerStyle={{
          width: 200,
          marginHorizontal: 50,
          marginVertical: 10,
        }}
      /> */}
    </View>
  );
}
