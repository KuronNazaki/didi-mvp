import {
  Text,
  View,
  Pressable,
  StyleSheet,
  ScrollView,
  ActivityIndicator,
  FlatList,
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
import AsyncStorage from '@react-native-async-storage/async-storage';
import { DEFAULT_AVATAR_IMAGE, DEFAULT_IMAGE } from '../../constants/images';
import { useAuthContext } from '../../misc/AuthContext';

const TextStyle = StyleSheet.create(GLOBAL_TEXT_STYLES);

export default function HomeScreen({ navigation }) {
  const headerHeight = useHeaderHeight();
  const tabBarHeight = useBottomTabBarHeight();
  const { state } = useAuthContext();
  const { user } = state;

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
            paddingTop: 100,
            paddingBottom: 20,
          }}
        >
          <View className={`flex-row items-center`} style={{ columnGap: 10 }}>
            <StyledImage
              relativeSrc={user.avatar ? user.avatar : DEFAULT_AVATAR_IMAGE}
            />
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
                {user?.name}
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
            {isDataLoaded ? (
              <FlatList
                style={{ overflow: 'visible' }}
                data={POPULAR}
                renderItem={({ item }) => (
                  <Card
                    title={item.name}
                    place={item.place}
                    image={item.imageUrl}
                    time={item.description}
                  />
                )}
                keyExtractor={(item) => item.name}
                horizontal
                showsHorizontalScrollIndicator={false}
                ItemSeparatorComponent={() => <View style={{ width: 20 }} />}
              />
            ) : (
              <ActivityIndicator />
            )}
            {/* <ScrollView horizontal={true} className={`overflow-visible`}>
              <View
                style={{ columnGap: 20 }}
                className={`flex-row overflow-visible p-5`}
              >
                {isDataLoaded ? (
                  POPULAR.map((item, index) => (
                    
                  ))
                ) : (
                  <ActivityIndicator />
                )}
              </View>
            </ScrollView> */}
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
            {isDataLoaded ? (
              <FlatList
                style={{ overflow: 'visible' }}
                data={MAYBE_YOU_LIKE}
                renderItem={({ item }) => (
                  <Card
                    title={item.name}
                    place={item.place}
                    image={item.imageUrl}
                    time={item.description}
                  />
                )}
                keyExtractor={(item) => item.name}
                horizontal
                showsHorizontalScrollIndicator={false}
                ItemSeparatorComponent={() => <View style={{ width: 20 }} />}
              />
            ) : (
              <ActivityIndicator />
            )}
            {/* <ScrollView horizontal={true} className={`overflow-visible`}>
              <View style={{ columnGap: 20 }} className={`flex-row`}>
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
            </ScrollView> */}
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
            className="bg-[#98B2F1] w-80 h-10 rounded-xl justify-center"
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
