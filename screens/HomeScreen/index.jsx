import { StatusBar, Text, View, Pressable } from "react-native";
import { useHeaderHeight } from "@react-navigation/elements";
import StyledImage from "../../components/StyledImage";
import Card from "../../components/Card";
import PlaceModal from "../../components/PlaceModal";
import Pic from "../../assets/Pic.png";

import { useState } from "react";

import Halong from "./../../assets/halong.png";

export default function HomeScreen({ navigation }) {
  const headerHeight = useHeaderHeight();
  const [isOpenModal, setIsOpenModal] = useState(false);
  const [modalInfo, setModalInfo] = useState({
    image: Pic,
    title: "Thác Datanla",
    description:
      "Relaxed pick serving spring rolls, pho, banh mi & other Vietnamese staples, alongside beer.",
    rate: 4.5,
    rateNumber: 402,
  });

  const toggleModal = () => {
    setIsOpenModal(!isOpenModal);
  };

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
      {isOpenModal ? (
        <PlaceModal
          image={modalInfo.image}
          title={modalInfo.title}
          description={modalInfo.description}
          rate={modalInfo.rate}
          rateNumber={modalInfo.rateNumber}
        />
      ) : (
        <></>
      )}
      <Pressable
        className="bg-[#537FE7] w-80 h-10 rounded-xl justify-center"
        onPress={toggleModal}
      >
        <Text className="text-center text-white font-semibold text-base">
          Open Modal
        </Text>
      </Pressable>
      {/* <BaseButton
        title={'Change to Planner'}
        onPress={() => navigation.navigate('Planner')}
      /> */}
    </View>
  );
}
