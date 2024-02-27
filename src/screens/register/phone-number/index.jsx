import { View, Text } from "react-native";
import React, { useEffect } from "react";
import { Dialog } from "@rneui/themed";
import { useDispatch, useSelector } from "react-redux";
import {
  requestOtpPhoneNumber,
  resetCheckRegister,
  resetOtp,
  resetVerifyOtp,
} from "../../../redux/modules/register/reducer";

export default function PhoneNumberRegister({
  isPhoneNumberVisible,
  setIsPhoneNumberVisible,
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
    setIsPhoneNumberVisible(false);
  };

  useEffect(() => {
    if (otp?.data?.phoneNumber?.success) {
      navigation.navigate("verify-phone-number");
      setIsPhoneNumberVisible(false);
    }
  }, [otp]);

  const handleVerify = async () => {
    try {
      await dispatch(resetOtp());
      await dispatch(resetVerifyOtp());
      await dispatch(
        requestOtpPhoneNumber({ phone_number: check?.data?.data?.phone_number })
      );
    } catch (error) {
      console.log(error);
    }
  };

  if (!isPhoneNumberVisible) {
    return null;
  }

  return (
    <View>
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
