import { View, Text, ScrollView, Image, TouchableOpacity } from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import images from "../constants/images";
import { router } from "expo-router";

const index = () => {
  return (
    <SafeAreaView className="bg-[#FFF7F7] h-full px-[14px] pt-6 flex-1">
      <ScrollView
        contentContainerStyle={{
          minHeight: "100%",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Image source={images.logo} />
        <TouchableOpacity
          className="bg-[#CB7679] px-10 py-3 rounded-full"
          activeOpacity={0.7}
          onPress={() => {
            router.push("/sign-in");
          }}
        >
          <Text className="text-xl font-black">LOG-IN</Text>
        </TouchableOpacity>
      </ScrollView>
    </SafeAreaView>
  );
};

export default index;
