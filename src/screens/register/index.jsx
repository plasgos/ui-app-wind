import { View, Text } from "react-native";
import React from "react";
import { Card, Button } from "@rneui/themed";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { FontAwesome5 } from "@expo/vector-icons";

export default function Register({ navigation }) {
  return (
    <View className="flex-1 justify-center items-center">
      <Card>
        <Card.Title>Daftar Akun</Card.Title>
        <Card.Divider />
        <View className="">
          <Text className="text-slate-400 mb-3">
            Pilih Registrasi Melalui Email / Nomor Telephone
          </Text>
          <View className="mb-3">
            <Button
              onPress={() => navigation.navigate("email")}
              size="md"
              radius={"sm"}
              type="solid"
              titleStyle={{ fontSize: 18 }}
            >
              <MaterialCommunityIcons
                name="email"
                size={18}
                color="white"
                style={{ marginRight: 6 }}
              />
              Email
            </Button>
          </View>
          <Button
            onPress={() => navigation.navigate("phone-number")}
            size="md"
            radius={"sm"}
            type="outline"
            titleStyle={{ fontSize: 18 }}
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
      </Card>
    </View>
  );
}
