import { View, Text, ScrollView, Image } from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import images from "../../constants/images";

const Home = () => {
  return (
    <SafeAreaView className="bg-[#FFF7F7] h-full px-[14px] pt-6 flex-1">
      <ScrollView
        contentContainerStyle={{
          minHeight: "100%",
        }}
      >
        <View className="h-16 bg-[#F0CBCB] relative">
          <Image
            source={images.logo}
            className="h-[72px] w-[72px] absolute left-10"
          />
        </View>
        <View className="flex-row items-center justify-between px-4 mt-4">
          <View className="">
            <Text className="text-4xl text-[#A06262] font-black">
              Hello, Amy
            </Text>
            <Text className="text-base text-[#A06262]">
              Welcome to beautiful you.
            </Text>
          </View>
          <Image source={images.profile} />
        </View>
        <View className="h-24  mt-16 bg-[#CB7679] flex-row relative items-center ">
          <Text className="max-w-[155px] pl-4 text-base text-white font-black text-center">
            Get awesome discount this holiday season!
          </Text>
          <Image source={images.sale} className="absolute -top-10 right-3" />
        </View>
        <View className="mt-[100px] flex-row flex-wrap justify-center mb-4">
          <View className="items-center flex-1 basis-1/3">
            <Image source={images.makeUp} />
            <Text className="font-black text-lg ">Make Up</Text>
          </View>
          <View className="items-center flex-1 basis-1/3">
            <Image source={images.hairCare} />
            <Text className="font-black text-lg">Hair Care</Text>
          </View>
          <View className="items-center flex-1 basis-1/3">
            <Image source={images.skinCare} />
            <Text className="font-black text-lg">Skin Care</Text>
          </View>
          <View className="items-center  flex-1 basis-1/3">
            <Image source={images.shop} />
            <Text className="font-black text-lg">Shop</Text>
          </View>
          <View className="items-center flex-1 basis-1/3">
            <Image source={images.nail} />
            <Text className="font-black text-lg">Nail Care</Text>
          </View>
          <View className="items-center flex-1 basis-1/3">
            <Image source={images.pallettePicker} />
            <Text className="font-black text-lg">Pallete Picker</Text>
          </View>
        </View>
        <View className="h-10 bg-[#CB7679] relative justify-center items-center">
          <Text className="font-black text-xl text-center text-white">Beauty Specialist</Text>
        </View>
        <View className="flex-row justify-around mt-3 mb-8">
          <Image source={images.specialist1} />
          <Image source={images.specialist2} />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default Home;
