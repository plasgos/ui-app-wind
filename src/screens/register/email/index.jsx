import { View, Text } from "react-native";
import React, { useState } from "react";
import { Card, Button, Input } from "@rneui/themed";
import Toast from "react-native-toast-message";
import axios from "axios";

export default function EmailRegister({ navigation }) {
  const [email, setEmail] = useState("");

  const validateEmail = (email) => {
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return regex.test(email);
  };

  const onSubmitEmail = async () => {
    try {
      if (!validateEmail(email)) {
        Toast.show({
          type: "error",
          text1: "Format Tidak Sesuai",
          text2: "Silahkan Masukan Email Dengan Format Yang Sesuai",
        });
      }

      const response = await axios.post(
        "http://46.28.44.41:3001/v2/register/check/email",
        { email }
      );

      const data = response.data;

      if (data.registered) {
        Toast.show({
          type: "error",
          text1: "Email Sudah Terdaftar",
          text2: "Silahkan Masukan Email Lain Yang Belum Terdaftar",
        });
        setEmail("");
      } else {
        const verify = await axios.post(
          "http://46.28.44.41:3001/v2/register/otp/request/email",
          { email }
        );
        console.log("🚀 ~ onSubmitEmail ~ verify:", verify);

        if (verify.data.success) {
          navigation.navigate("verify-email", { email: email });
        }
      }
    } catch (error) {
      console.error("Error:", error);
    }
  };

  return (
    <View className="flex-1 justify-center items-center">
      <Card containerStyle={{ width: "90%" }}>
        <View>
          <Input
            keyboardType="email-address"
            value={email}
            onChangeText={(inputValue) => setEmail(inputValue)}
            placeholder="Masukan Email Anda"
            inputContainerStyle={{ paddingVertical: 10 }}
            inputStyle={{
              fontSize: 16,
              paddingHorizontal: 10,
            }}
            leftIcon={{
              type: "material-community-icons",
              name: "email",
              iconStyle: { marginRight: 6, color: "#2089DC" },
            }}
          />

          <Button
            onPress={onSubmitEmail}
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
