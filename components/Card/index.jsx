import { Text, View, Image, StyleSheet } from "react-native";

import StyledImage from "../StyledImage";
import Svg from "../../constants/svg";

export default function Card({ title, subtitle, image, onPress }) {
  return (
    <View className={`w-full p-5 rounded-lg bg-[#DEDEDE] drop-shadow-xl`}>
      <Image
        source={require("./../../assets/halong.png")}
        style={{ width: "100%", resizeMode: "contain" }}
        className={`rounded-lg`}
      />
      <View className={`flex`}>
        <Text>Hạ Long trong tôi</Text>
        <View>
          <Text>Ha Long</Text>
        </View>
      </View>
    </View>
  );
}
