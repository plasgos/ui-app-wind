import { View, Text } from "react-native";
import React, { useState } from "react";
import { Card, Button, Input, Dialog } from "@rneui/themed";
import { useForm, Controller } from "react-hook-form";
import { MaterialIcons } from "@expo/vector-icons";
import { useDispatch, useSelector } from "react-redux";
import { register } from "../../../redux/modules/register/reducer";

export default function CompleteRegister() {
  const [showPassword, setShowPassword] = useState(false);

  const { verifyOtp } = useSelector((state) => state.register);
  console.log("🚀 ~ CompleteRegister ~ verifyOtp:", verifyOtp);

  const { register: redux } = useSelector((state) => state.register);
  console.log("🚀 ~ CompleteRegister ~ verifyOtp:", redux);

  const dispatch = useDispatch();

  const {
    control,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({
    defaultValues: {
      name: "",
      password: "",
    },
  });

  const onSubmit = async ({ name, password }) => {
    console.log(name);
    await dispatch(
      register({ name, password, token_reg: verifyOtp.data.token_reg })
    );
  };

  const toggleShowPassword = () => {
    setShowPassword((prev) => !prev);
  };

  return (
    <View className="flex-1 justify-center items-center w-full p-10">
      <Card containerStyle={{ width: "100%", borderRadius: 10 }}>
        <View className="">
          <Controller
            control={control}
            rules={{
              required: true,
            }}
            render={({ field: { onChange, onBlur, value } }) => (
              <Input
                errorMessage={errors.name && "Nama harus di isi"}
                onBlur={onBlur}
                onChangeText={onChange}
                value={value}
                // style={{ outlineStyle: "none" }}
                placeholder="Nama"
                inputStyle={{
                  fontSize: 16,
                  paddingHorizontal: 10,
                  borderWidth: 0,
                }}
                leftIcon={() => (
                  <MaterialIcons name="person" size={24} color="#fa541c" />
                )}
              />
            )}
            name="name"
          />
        </View>
        <View className="">
          <Controller
            control={control}
            rules={{
              required: true,
            }}
            render={({ field: { onChange, onBlur, value } }) => (
              <Input
                errorMessage={errors.password && "Password harus di isi"}
                onBlur={onBlur}
                onChangeText={onChange}
                value={value}
                secureTextEntry={showPassword ? false : true}
                // style={{ outlineStyle: "none" }}
                placeholder="Password"
                inputStyle={{
                  fontSize: 16,
                  paddingHorizontal: 10,
                  borderWidth: 0,
                }}
                leftIcon={() => (
                  <MaterialIcons name="lock" size={24} color="#fa541c" />
                )}
                rightIcon={() => (
                  <MaterialIcons
                    onPress={toggleShowPassword}
                    name={showPassword ? "visibility" : "visibility-off"}
                    size={24}
                    color="gray"
                  />
                )}
              />
            )}
            name="password"
          />
        </View>

        <Button
          onPress={handleSubmit(onSubmit)}
          size="sm"
          radius={"sm"}
          type="solid"
          color="#fa541c"
          titleStyle={{ fontSize: 16 }}
        >
          Submit
        </Button>
      </Card>
    </View>
  );
}
