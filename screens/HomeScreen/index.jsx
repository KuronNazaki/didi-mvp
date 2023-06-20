import {
  Text,
  View,
  Pressable,
  StyleSheet,
  ScrollView,
  ActivityIndicator,
} from 'react-native';
import { useHeaderHeight } from '@react-navigation/elements';
import StyledImage from '../../components/StyledImage';
import { Card } from '../../components/Card';
import PlaceModal from '../../components/PlaceModal';
import Pic from '../../assets/Pic.png';
import { useEffect, useState } from 'react';
import Halong from './../../assets/halong.png';
import { GLOBAL_TEXT_STYLES } from '../../constants/global';
import { useBottomTabBarHeight } from '@react-navigation/bottom-tabs';
import { MAYBE_YOU_LIKE, POPULAR } from '../../constants/db';

const TextStyle = StyleSheet.create(GLOBAL_TEXT_STYLES);

export default function HomeScreen({ navigation }) {
  const headerHeight = useHeaderHeight();
  const tabBarHeight = useBottomTabBarHeight();

  const [isDataLoaded, setIsDataLoaded] = useState(false);

  useEffect(() => {
    let timeout;

    const loadData = () => {
      timeout = setTimeout(() => setIsDataLoaded(true), 1500);
    };
    loadData();

    return () => {
      clearTimeout(timeout);
    };
  }, []);

  return (
    <View className={`w-full h-full bg-ink-white`} style={{}}>
      <ScrollView className={`h-full`}>
        <View
          className={`h-full p-5`}
          style={{
            paddingTop: headerHeight + 20,
            paddingBottom: tabBarHeight + 20,
          }}
        >
          <View className={`flex-row items-center`} style={{ columnGap: 10 }}>
            <StyledImage relativeSrc={'https://scontent-sin6-2.xx.fbcdn.net/v/t39.30808-6/211708785_1021110078629169_7079489300693582216_n.jpg?_nc_cat=108&ccb=1-7&_nc_sid=09cbfe&_nc_ohc=3RkIaVQQbekAX9A031I&_nc_ht=scontent-sin6-2.xx&oh=00_AfDn6s4OFGrCRppHw2-NsyxVIBLWA_p-6osUSu5XTFKMRQ&oe=64889164'} />
            <View>
              <Text
                className={`text-ink-secondary`}
                style={{ ...TextStyle.regular15 }}
              >
                Hế lô, 👋
              </Text>
              <Text
                className={`text-ink-primary`}
                style={{ ...TextStyle.semibold16 }}
              >
                Huỳnh Huy
              </Text>
            </View>
          </View>
          <View className={`mt-10`}>
            <View className={`flex-row justify-between items-end`}>
              <Text
                className={`text-ink-primary`}
                style={{ ...GLOBAL_TEXT_STYLES.bold22 }}
              >
                Nổi bật
              </Text>
              <Text
                className={`text-accent-blue100`}
                style={{ ...GLOBAL_TEXT_STYLES.regular13 }}
              >
                Xem thêm
              </Text>
            </View>
            <ScrollView horizontal={true} className={`overflow-visible`}>
              <View style={{ columnGap: 20 }} className={`flex-row`}>
                {isDataLoaded ? (
                  POPULAR.map((item, index) => (
                    <Card
                      title={item.name}
                      place={item.place}
                      image={item.imageUrl}
                      time={item.description}
                      key={index}
                    />
                  ))
                ) : (
                  <ActivityIndicator />
                )}
                {/* <Card
                  title="Hạ Long"
                  place="Quảng Ninh"
                  image={require('./../../assets/halong.png')}
                  time="Hạ Long là thành phố tỉnh lỵ của tỉnh Quảng Ninh, Việt Nam. Thành phố được đặt theo tên của vịnh Hạ Long, vịnh biển nằm ở phía nam thành phố và là một di sản thiên nhiên nổi tiếng của Việt Nam."
                ></Card>
                <Card
                  title="Hội An"
                  place="Quảng Nam"
                  image={
                    'https://cdn.vntrip.vn/cam-nang/wp-content/uploads/2017/08/hoi-an-quang-nam-vntrip.jpg'
                  }
                  time="Phố cổ Hội An từng là một thương cảng quốc tế sầm uất, gồm những di sản kiến trúc đã có từ hàng trăm năm trước, được UNESCO công nhận là di sản văn hóa thế giới từ năm 1999."
                ></Card> */}
              </View>
            </ScrollView>
            <View className={`flex-row justify-between items-end mt-10`}>
              <Text
                className={`text-ink-primary`}
                style={{ ...TextStyle.bold22 }}
              >
                Có thể bạn thích
              </Text>
              <Text
                className={`text-accent-blue100`}
                style={{ ...TextStyle.regular13 }}
              >
                Xem thêm
              </Text>
            </View>
            <ScrollView horizontal={true} className={`overflow-visible`}>
              <View style={{ columnGap: 20 }} className={`flex-row`}>
                {/* <Card
                  title="Hạ Long"
                  place="Quảng Ninh"
                  image={require('./../../assets/halong.png')}
                  time="Hạ Long là thành phố tỉnh lỵ của tỉnh Quảng Ninh, Việt Nam. Thành phố được đặt theo tên của vịnh Hạ Long, vịnh biển nằm ở phía nam thành phố và là một di sản thiên nhiên nổi tiếng của Việt Nam."
                ></Card>
                <Card
                  title="Hội An"
                  place="Quảng Nam"
                  image={
                    'https://cdn.vntrip.vn/cam-nang/wp-content/uploads/2017/08/hoi-an-quang-nam-vntrip.jpg'
                  }
                  time="Phố cổ Hội An từng là một thương cảng quốc tế sầm uất, gồm những di sản kiến trúc đã có từ hàng trăm năm trước, được UNESCO công nhận là di sản văn hóa thế giới từ năm 1999."
                ></Card> */}
                {isDataLoaded ? (
                  MAYBE_YOU_LIKE.map((item, index) => (
                    <Card
                      title={item.name}
                      place={item.place}
                      image={item.imageUrl}
                      time={item.description}
                      key={index}
                    />
                  ))
                ) : (
                  <ActivityIndicator />
                )}
              </View>
            </ScrollView>
          </View>
          {/* {isOpenModal ? (
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
          </Pressable> */}
        </View>
        {/* <BaseButton
        title={'Change to Planner'}
        onPress={() => navigation.navigate('Planner')}
      /> */}
      </ScrollView>
    </View>
  );
}
