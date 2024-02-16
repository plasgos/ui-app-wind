import { View, Text } from "react-native";
import React, { useState } from "react";
import { Card, Button, Input } from "@rneui/themed";
import Toast from "react-native-toast-message";
import axios from "axios";

export default function PhoneNumberRegister() {
  const [phoneNumber, setPhoneNumber] = useState("");

  const validatePhoneNumber = (phoneNumber) => {
    const regex =
      /^[\+]?([0-9][\s]?|[0-9]?)([(][0-9]{3}[)][\s]?|[0-9]{3}[-\s\.]?)[0-9]{3}[-\s\.]?[0-9]{4,6}$/im;
    return regex.test(phoneNumber);
  };

  const onSubmitPhoneNumber = async () => {
    try {
      if (!validatePhoneNumber(phoneNumber)) {
        Toast.show({
          type: "error",
          text1: "Format Tidak Sesuai",
          text2: "Silahkan Masukan Nomor Telephone Dengan Format Yang Sesuai",
        });
      }

      const response = await axios.post(
        "http://46.28.44.41:3001/v2/register/check/phone",
        { phone_number: phoneNumber }
      );

      const data = response.data;

      if (data.registered) {
        Toast.show({
          type: "error",
          text1: "Nomor Telephone Sudah Terdaftar",
          text2: "Silahkan Masukan Nomor Telephone Lain Yang Belum Terdaftar",
        });
        setPhoneNumber("");
      }

      console.log(data);
    } catch (error) {
      console.error("Error:", error);
    }
  };

  return (
    <View className="flex-1 justify-center items-center">
      <Card containerStyle={{ width: "90%" }}>
        <View>
          <Input
            value={phoneNumber}
            keyboardType="number-pad"
            onChangeText={(inputValue) => setPhoneNumber(inputValue)}
            placeholder="Masukan Nomor Telephone Anda"
            inputContainerStyle={{ paddingVertical: 10 }}
            inputStyle={{
              fontSize: 16,
              paddingHorizontal: 10,
            }}
            leftIcon={{
              type: "material-community-icons",
              name: "phone",
              iconStyle: { marginRight: 6, color: "#2089DC" },
            }}
          />

          <Button
            onPress={onSubmitPhoneNumber}
            size="sm"
            radius={"sm"}
            type="solid"
            titleStyle={{ fontSize: 16 }}
          >
            Submit
          </Button>
        </View>
      </Card>
    </View>
  );
}
