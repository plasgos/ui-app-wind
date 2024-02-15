import { View, Text, TouchableOpacity } from "react-native";
import React, { useState } from "react";
import { Card, Button, Icon } from "@rneui/themed";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { FontAwesome5 } from "@expo/vector-icons";
import { AntDesign } from "@expo/vector-icons";
import { Input } from "@rneui/themed";
import axios from "axios";
import Toast from "react-native-toast-message";

export default function Register() {
  const [isEmailSelected, setIsEmailSelected] = useState(false);
  const [isPhoneNumberSelected, setIsPhoneNumberSelected] = useState(false);
  const [email, setEmail] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");

  const onEmailSelected = () => {
    setIsEmailSelected(true);
  };

  const onPhoneNumberSelected = () => {
    setIsPhoneNumberSelected(true);
  };

  const handleBack = () => {
    setIsEmailSelected(false);
    setIsPhoneNumberSelected(false);
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
      }

      console.log(data);
    } catch (error) {
      console.error("Error:", error);
    }
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

  const validateEmail = (email) => {
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return regex.test(email);
  };

  const validatePhoneNumber = (phoneNumber) => {
    const regex =
      /^[\+]?([0-9][\s]?|[0-9]?)([(][0-9]{3}[)][\s]?|[0-9]{3}[-\s\.]?)[0-9]{3}[-\s\.]?[0-9]{4,6}$/im;
    return regex.test(phoneNumber);
  };

  return (
    <View className="flex-1 justify-center items-center">
      <Card>
        {isEmailSelected && !isPhoneNumberSelected && (
          <TouchableOpacity onPress={handleBack}>
            <AntDesign name="arrowleft" size={24} color="black" />
          </TouchableOpacity>
        )}
        {isPhoneNumberSelected && !isEmailSelected && (
          <TouchableOpacity onPress={handleBack}>
            <AntDesign name="arrowleft" size={24} color="black" />
          </TouchableOpacity>
        )}
        <Card.Title>Registrasi Akun</Card.Title>
        <Card.Divider />

        {!isEmailSelected && !isPhoneNumberSelected ? (
          <View className="flex-col gap-3">
            <Text className="text-slate-400 mb-3">
              Pilih Registrasi Melalui Email / Nomor Telephone
            </Text>
            <Button
              onPress={onEmailSelected}
              size="sm"
              radius={"sm"}
              type="solid"
              titleStyle={{ fontSize: 16 }}
            >
              <MaterialCommunityIcons
                name="email"
                size={18}
                color="white"
                style={{ marginRight: 6 }}
              />
              Email
            </Button>
            <Button
              onPress={onPhoneNumberSelected}
              size="sm"
              radius={"sm"}
              type="outline"
              titleStyle={{ fontSize: 16 }}
            >
              <FontAwesome5
                name="phone-alt"
                size={18}
                color="#2089DC"
                style={{ marginRight: 6 }}
              />
              Nomor Telephone
            </Button>
          </View>
        ) : null}

        {isEmailSelected && (
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
        )}

        {isPhoneNumberSelected && (
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
        )}
      </Card>
      <Toast />
    </View>
  );
}
