import { Text, View, Image, StyleSheet } from "react-native";

import Route from "../../assets/svg/route";

export default function Card({ title, place, image, time }) {
  const styles = StyleSheet.create({
    container: {
      shadowColor: "#000000",
      shadowOffset: {
        width: 0,
        height: 3,
      },
      shadowRadius: 5,
      shadowOpacity: 0.5,
    },
  });
  return (
    <View
      className={`w-full p-5 rounded-lg bg-white shadow-2xl mt-5`}
      style={styles.container}
    >
      <Image
        source={image}
        style={{ width: "100%", resizeMode: "contain" }}
        className={`rounded-lg`}
      />
      <View className="items-center my-3" style={{ flexDirection: "row" }}>
        <Text className="font-semibold text-lg">{title}</Text>
        <View style={{ marginLeft: "auto" }}>
          <View className="items-center" style={{ flexDirection: "row" }}>
            <Route />
            <Text className="ml-1">{place}</Text>
          </View>
        </View>
      </View>
      <Text className="text-[#9DA0A5]">{time}</Text>
    </View>
  );
}
