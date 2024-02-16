import { View, Text } from "react-native";
import React, { useRef } from "react";
import { Input } from "@rneui/themed";
import { Button } from "@rneui/themed";

export default function VerifyEmail({ route }) {
  const { email } = route.params;
  console.log("🚀 ~ VerifyEmail ~ email:", route);

  const inputs = Array(5)
    .fill(null)
    .map(() => useRef(null));

  const handleTextChange = (text, index) => {
    if (text.length === 1 && index < 4) {
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

  return (
    <View className="flex-1 justify-center items-center p-10">
      <Text className="text-xl">Verifikasi Email</Text>
      <Text className="text-sm text-center text-slate-400 mb-3">
        Silahkan Masukan Kode Otp yang sudah di kirim melalui email anda
      </Text>
      <View className="flex-row gap-x-3">
        {inputs.map((input, index) => (
          <Input
            containerStyle={{ width: 50 }}
            key={index}
            ref={inputs[index]}
            maxLength={1}
            keyboardType="number-pad"
            onChangeText={(text) => handleTextChange(text, index)}
            onKeyPress={(event) => handleKeyPress(event, index)}
          />
        ))}
      </View>

      <Button
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
