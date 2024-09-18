import {
  View,
  Text,
  ScrollView,
  TextInput,
  TouchableOpacity,
  Image,
} from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { router } from "expo-router";
import images from "../../constants/images";

const SignUp = () => {
  return (
    <SafeAreaView className="bg-[#CB7679] h-full px-[14px] pt-6 flex-1">
      <ScrollView
        contentContainerStyle={{
          minHeight: "100%",
        }}
      >
        <Text className="text-center text-black font-black text-3xl mb-[72px]">
          Signup
        </Text>
        <View className="space-y-10">
          <TextInput
            className="w-full bg-white h-16 p-4 text-xl border-2"
            placeholder="Email"
          />
          <TextInput
            className="w-full bg-white h-16 p-4 pr-0 text-xl border-2"
            placeholder="Create Password"
            secureTextEntry={true}
          />
          <TextInput
            className="w-full bg-white h-16 p-4 pr-0 text-xl border-2"
            placeholder="Confirm Password"
            secureTextEntry={true}
          />
        </View>

        <View className="items-center mt-20">
          <TouchableOpacity
            className="bg-[#ffffff] px-10 py-3 rounded-full border"
            activeOpacity={0.7}
            onPress={() => {
              router.replace("/home");
            }}
          >
            <Text className="text-xl font-black">SIGN-UP</Text>
          </TouchableOpacity>
        </View>
        <View className="flex-row gap-2 items-center justify-center mt-20 mb-10">
          <Text className="text-base font-black">Already Have an account?</Text>
          <TouchableOpacity className="">
            <Text className="text-blue-500 font-black text-base">Log-in</Text>
          </TouchableOpacity>
        </View>
        <View className="items-center mb-40">
          <Image source={images.logoSignIn} />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default SignUp;
