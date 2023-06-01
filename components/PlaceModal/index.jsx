import { View, Pressable, Text, Image } from "react-native";
import Star from "../../assets/svg/star";
import Location from "../../assets/svg/location";
import Call from "../../assets/svg/call";
import DocumentText from "../../assets/svg/documentText";
import { TextInputWithLabel } from "../Input";

const PlaceModal = ({ image, title, description, rate, rateNumber }) => {
  return (
    <View className="h-screen w-screen z-10 absolute">
      <View className="h-full w-full bg-black opacity-80 absolute"></View>
      <View className="h-full w-full flex-col">
        <View className="mt-auto w-11/12 mx-auto z-50">
          <Image
            source={image}
            style={{ width: "100%" }}
            className="rounded-t-xl"
          />

          <View className="bg-white p-4">
            <View className="flex-row items-end h-8">
              <Text className="text-[#55555e] text-3xl font-bold">{title}</Text>
              <View className="ml-auto flex-row items-center">
                <Star />
                <Text className="text-[#FFCC00]">{rate}/5 </Text>
                <Text className="text-[#FFE580]">({rateNumber})</Text>
              </View>
            </View>
            <Text className="mt-3 text-[#8A8A8E]">{description}</Text>
            <View className="flex-row items-center">
              <Location className="mt-8 mr-2" />
              <TextInputWithLabel placeholder="Address" />
            </View>
            <View className="flex-row items-center">
              <Call className="mt-8 mr-2" />
              <TextInputWithLabel placeholder="Phone number" />
            </View>
            <View className="flex-row items-center">
              <DocumentText className="mt-8 mr-2" />
              <TextInputWithLabel
                multiline={true}
                placeholder="Notes goes here"
              />
            </View>
            <View className="mx-auto mt-6">
              <Pressable className="bg-[#537FE7] w-80 h-10 rounded-xl justify-center">
                <Text className="text-center text-white font-semibold text-base">
                  Save
                </Text>
              </Pressable>
            </View>
          </View>
        </View>
      </View>
    </View>
  );
};

export default PlaceModal;
