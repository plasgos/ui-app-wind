import { View, Text } from "react-native";
import React, { useEffect } from "react";
import { Dialog } from "@rneui/themed";
import { useDispatch, useSelector } from "react-redux";
import {
  requestOtpEmail,
  resetCheckRegister,
  resetOtp,
  resetVerifyOtp,
} from "../../../redux/modules/register/reducer";

export default function EmailRegister({
  isEmailVisible,
  setIsEmailVisible,
  check,
  navigation,
}) {
  const { otp } = useSelector((state) => state.register);
  const dispatch = useDispatch();

  const handleCancel = () => {
    dispatch(resetCheckRegister());
  };

  const handleLogin = () => {
    navigation.navigate("Login");
    setIsEmailVisible(false);
  };

  useEffect(() => {
    if (otp.data?.email?.success) {
      navigation.navigate("verify-email");
      setIsEmailVisible(false);
    }
  }, [otp]);

  const handleVerify = async () => {
    try {
      await dispatch(resetOtp());
      await dispatch(resetVerifyOtp());
      await dispatch(requestOtpEmail({ email: check?.data?.data.email }));
    } catch (error) {
      console.log(error);
    }
  };

  if (!isEmailVisible) {
    return null;
  }

  return (
    <View>
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
              onPress={handleLogin}
            />
            <Dialog.Button
              type="outline"
              radius={"md"}
              title="Tidak"
              titleStyle={{ color: "#fa541c" }}
              buttonStyle={{ borderColor: "#fa541c" }}
              containerStyle={{ flex: 1, marginRight: 10 }}
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
              onPress={handleVerify}
            />
            <Dialog.Button
              type="outline"
              radius={"md"}
              title="Ubah"
              titleStyle={{ color: "#fa541c" }}
              buttonStyle={{ borderColor: "#fa541c" }}
              containerStyle={{ flex: 1, marginRight: 10 }}
              onPress={handleCancel}
            />
          </Dialog.Actions>
        </Dialog>
      )}
    </View>
  );
}
