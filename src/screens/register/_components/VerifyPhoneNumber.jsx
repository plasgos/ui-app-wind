import { View, Text } from "react-native";
import React, { useEffect, useRef, useState } from "react";
import { Input } from "@rneui/themed";
import { Button } from "@rneui/themed";
import { useDispatch, useSelector } from "react-redux";
import { setVerifyOtp } from "../../../redux/modules/register/reducer";
import { useForm, Controller } from "react-hook-form";
import Toast from "react-native-toast-message";

export default function VerifyPhoneNumber({ navigation }) {
  const { control, handleSubmit, getValues } = useForm();

  const { check } = useSelector((state) => state.register);
  console.log("🚀 ~ VerifyPhoneNumber ~ check:", check);
  const { verifyOtp } = useSelector((state) => state.register);
  const { otp } = useSelector((state) => state.register);
  console.log("🚀 ~ VerifyPhoneNumber ~ otp:", otp);
  console.log("🚀 ~ VerifyPhoneNumber ~ verifyOtp:", verifyOtp);

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
    }
  }, [verifyOtp]);

  const handleRegister = async () => {
    try {
      const allValues = getValues();

      const combinedValue = Object.keys(allValues)
        .map((key) => allValues[key])
        .join("");

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

      <View className="w-full  flex-row gap-x-3 overflow-x-hidden">
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
                style={{ outlineStyle: "none" }}
                containerStyle={{ width: 50 }}
                maxLength={1}
                inputStyle={{ textAlign: "center" }}
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
    </View>
  );
}
