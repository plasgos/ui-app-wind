import React from "react";
import { View, Text } from "react-native";
import { Button } from "@rneui/themed";

export default function Message() {
  return (
    <View className="flex-1">
      <Text>Message</Text>
      <Text>Message</Text>

      <Text>Message</Text>
      <View>
        <Button title="State" size="lg" radius={"xl"} />
      </View>
      <Button title="Outline" type="outline" />
      <Button title="Clear" type="clear" />
    </View>
  );
}
