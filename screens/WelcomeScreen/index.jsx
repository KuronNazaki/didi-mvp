import { Text, View, Image, Pressable } from "react-native";
import Halong from "./../../assets/welcome.png";

const WelcomeScreen = () => {
  return (
    <View
      className={`w-full h-full p-5 bg-white items-center`}
      style={{
        height: "100%",
      }}
    >
      <Image source={Halong} className={`rounded-lg w-96 h-96 object-cover`} />
      <Text className="text-center font-semibold text-4xl mt-4">
        Discover the beauty of the world
      </Text>
      <Text className="font-normal text-base text-[#8A8A8E] mt-3">
        Explore all the most exciting places
      </Text>

      <View className="mx-auto mt-auto">
        <Pressable className="bg-[#537FE7] w-80 h-12 rounded-xl justify-center">
          <Text className="text-center text-white font-semibold text-base">
            Get started
          </Text>
        </Pressable>
      </View>
      <Text className="mt-2">
        Already have an account?{" "}
        <Text onPress={() => {}} className="text-[#2A66F2] font-medium">
          Login
        </Text>
      </Text>
    </View>
  );
};

export default WelcomeScreen;
