import { View, Text } from "react-native";
import React, { useEffect, useState } from "react";
import { Card, Button, Input, Dialog } from "@rneui/themed";
import Toast from "react-native-toast-message";
import { MaterialIcons } from "@expo/vector-icons";
import { useDispatch, useSelector } from "react-redux";
import {
  getCheckEmail,
  resetCheckRegister,
} from "../../../redux/modules/register/reducer";

import { useForm, Controller } from "react-hook-form";

export default function EmailRegister({ navigation }) {
  const {
    control,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({
    defaultValues: {
      email: "",
    },
  });

  const { check } = useSelector((state) => state.register);
  console.log("🚀 ~ EmailRegister ~ register:", check);

  const dispatch = useDispatch();

  const validateEmail = (email) => {
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return regex.test(email);
  };

  const onSubmitEmail = async ({ email }) => {
    try {
      if (!validateEmail(email)) {
        Toast.show({
          type: "error",
          text1: "Format Tidak Sesuai",
          text2: "Silahkan Masukan Email Dengan Format Yang Sesuai",
        });
      }

      await dispatch(getCheckEmail({ email }));
    } catch (error) {
      console.error("Error:", error);
    }
  };

  const handleCancel = () => {
    dispatch(resetCheckRegister());
  };

  return (
    <View className="flex-1 justify-center items-center">
      <Card containerStyle={{ width: "90%" }}>
        <View>
          <Controller
            control={control}
            rules={{
              required: true,
            }}
            render={({ field: { onChange, onBlur, value } }) => (
              <Input
                errorMessage={errors.email && "Email Harus Di Isi."}
                onBlur={onBlur}
                onChangeText={onChange}
                value={value}
                style={{ outlineStyle: "none" }}
                keyboardType="email-address"
                placeholder="Masukan Email Anda"
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
                  <MaterialIcons name="email" size={24} color="#fa541c" />
                )}
              />
            )}
            name="email"
          />

          <Button
            onPress={handleSubmit(onSubmitEmail)}
            size="sm"
            radius={"sm"}
            type="solid"
            color="#fa541c"
            titleStyle={{ fontSize: 16 }}
          >
            Submit
          </Button>
        </View>
      </Card>

      {check && check.data && check.data.registered && (
        <Dialog>
          <Dialog.Title
            titleStyle={{ textAlign: "center" }}
            title={`Email Sudah Terdaftar`}
          />
          <Text className="my-3">
            Masuk dengan email ini{" "}
            <Text className="font-bold">{check?.data?.data.email}</Text> ?
          </Text>
          <Dialog.Actions>
            <Dialog.Button
              title="Ya"
              type="solid"
              radius={"md"}
              color="#fa541c"
              containerStyle={{ flex: 1 }}
              onPress={() => {
                // toggleDialog5();
              }}
            />
            <Dialog.Button
              type="outline"
              radius={"md"}
              title="Tidak"
              titleStyle={{ color: "#fa541c" }}
              buttonStyle={{ borderColor: "#fa541c" }}
              containerStyle={{ flex: 1 }}
              onPress={handleCancel}
            />
          </Dialog.Actions>
        </Dialog>
      )}

      {check && check.data && check.data.registered === false && (
        <Dialog>
          <Dialog.Title
            titleStyle={{ textAlign: "center" }}
            title={check?.data?.data.email}
          />
          <Text className="my-3">
            Apakah email yang anda masukan sudah benar ?
          </Text>
          <Dialog.Actions>
            <Dialog.Button
              title="Ya, Benar"
              type="solid"
              radius={"md"}
              color="#fa541c"
              containerStyle={{ flex: 1 }}
              onPress={() => {
                // toggleDialog5();
              }}
            />
            <Dialog.Button
              type="outline"
              radius={"md"}
              title="Ubah"
              titleStyle={{ color: "#fa541c" }}
              buttonStyle={{ borderColor: "#fa541c" }}
              containerStyle={{ flex: 1 }}
              onPress={handleCancel}
            />
          </Dialog.Actions>
        </Dialog>
      )}
    </View>
  );
}
