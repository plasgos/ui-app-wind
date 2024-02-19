import { View, Text } from "react-native";
import React from "react";
import Toast from "react-native-toast-message";
import { FontAwesome } from "@expo/vector-icons";
import { Card, Button, Input, Dialog } from "@rneui/themed";
import { useForm, Controller } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";
import {
  getCheckPhoneNumber,
  resetCheckRegister,
} from "../../../redux/modules/register/reducer";

export default function PhoneNumberRegister() {
  const {
    control,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({
    defaultValues: {
      phoneNumber: "",
    },
  });

  const { check } = useSelector((state) => state.register);
  console.log("🚀 ~ PhoneNumberRegister ~ check:", check);
  const dispatch = useDispatch();

  const validatePhoneNumber = (phoneNumber) => {
    const regex =
      /^[\+]?([0-9][\s]?|[0-9]?)([(][0-9]{3}[)][\s]?|[0-9]{3}[-\s\.]?)[0-9]{3}[-\s\.]?[0-9]{4,6}$/im;
    return regex.test(phoneNumber);
  };

  const onSubmitPhoneNumber = async ({ phoneNumber }) => {
    try {
      if (!validatePhoneNumber(phoneNumber)) {
        Toast.show({
          type: "error",
          text1: "Format Tidak Sesuai",
          text2: "Silahkan Masukan Nomor Telephone Dengan Format Yang Sesuai",
        });
      }

      await dispatch(getCheckPhoneNumber({ phoneNumber }));
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
                errorMessage={
                  errors.phoneNumber && "Nomor Telephone Harus Di Isi."
                }
                onBlur={onBlur}
                onChangeText={onChange}
                value={value}
                style={{ outlineStyle: "none" }}
                keyboardType="number-pad"
                placeholder="Masukan Nomor Telephone Anda"
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
                  <FontAwesome name="phone" size={24} color="#fa541c" />
                )}
              />
            )}
            name="phoneNumber"
          />

          <Button
            onPress={handleSubmit(onSubmitPhoneNumber)}
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
            title={`No Telephone Sudah Terdaftar`}
          />
          <Text className="my-3">
            Masuk dengan No Telephone ini{" "}
            <Text className="font-bold">{check?.data?.data.phone_number}</Text>{" "}
            ?
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
            title={check?.data?.data.phone_number}
          />
          <Text className="my-3">
            Apakah No Telephone yang anda masukan sudah benar ?
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
