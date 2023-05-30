import { StatusBar, Text, View } from "react-native";
import { useHeaderHeight } from "@react-navigation/elements";
import StyledImage from "../../components/StyledImage";
import Card from "../../components/Card";
import PlaceModal from "../../components/PlaceModal";

import Halong from "./../../assets/halong.png";

export default function HomeScreen({ navigation }) {
  const headerHeight = useHeaderHeight();

  return (
    <View
      className={`w-full h-full p-5 bg-white`}
      style={{
        paddingTop: headerHeight + 20,
        height: "100%",
      }}
    >
      <View className={`flex-row items-center mt-5`} style={{ columnGap: 10 }}>
        <StyledImage relativeSrc={require("./../../assets/avatar.png")} />
        <View>
          <Text
            className={`text-xl text-secondary`}
            style={{ fontFamily: "Inter-Medium" }}
          >
            Hello, 👋
          </Text>
          <Text className={`text-2xl`} style={{ fontFamily: "Inter-SemiBold" }}>
            New User
          </Text>
        </View>
      </View>
      <View>
        <Card
          title="Hạ Long trong tôi"
          place="Hạ Long"
          image={Halong}
          time="Feb 23, 2023 → Feb 25, 2023"
        ></Card>
        <Card
          title="Hạ Long trong tôi"
          place="Hạ Long"
          image={Halong}
          time="Feb 23, 2023 → Feb 25, 2023"
        ></Card>
      </View>
      <PlaceModal />
      {/* <BaseButton
        title={'Change to Planner'}
        onPress={() => navigation.navigate('Planner')}
      /> */}
    </View>
  );
}
