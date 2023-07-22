import { useHeaderHeight } from '@react-navigation/elements';
import React, { useEffect, useState } from 'react';
import {
  Alert,
  Button,
  SafeAreaView,
  ScrollView,
  Text,
  View,
} from 'react-native';
import StyledImage from '../../components/StyledImage';
import { Image } from 'react-native';
import { GLOBAL_COLORS, GLOBAL_TEXT_STYLES } from '../../constants/global';
import CommunityPost from '../../components/CommunityPost';
import { POSTS } from '../../constants/db';
import { useBottomTabBarHeight } from '@react-navigation/bottom-tabs';
import CrownSvg from '../../assets/crown-1.svg';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useAuthContext } from '../../misc/AuthContext';
import { ActivityIndicator } from 'react-native';
import { useIsFocused } from '@react-navigation/native';
import { BASE_URL } from '../../constants/api';
import { PlannerCard } from '../../components/Card';
import { DEFAULT_AVATAR_IMAGE } from '../../constants/images';

const defaultUri = '../../assets/avatar.png';
const DEFAULT_IMAGE = Image.resolveAssetSource(require(defaultUri)).uri;

const ProfileScreen = ({ navigation }) => {
  const headerHeight = useHeaderHeight();
  const tabBarHeight = useBottomTabBarHeight();
  const { state } = useAuthContext();
  const { user } = state;

  // useEffect(() => {
  //   const getUser = async () => {
  //     const stringData = await AsyncStorage.getItem('@userToken');
  //     const parsedData = JSON.parse(stringData);
  //     setUser(parsedData);
  //   };
  //   getUser();
  // }, []);

  const [modalVisible, setModalVisible] = useState(false);
  const [listOfPlans, setListOfPlans] = useState([]);
  const [isDataLoaded, setIsDataLoaded] = useState(false);
  const isFocused = useIsFocused();

  useEffect(() => {
    // console.log(state.user);
    const fetchListOfPlans = async () => {
      try {
        const response = await fetch(
          `${BASE_URL}/plan/user/${state.user?._id}`
        );
        const data = await response.json();
        console.log(data);
        // console.log(data);
        setListOfPlans(data);
        setIsDataLoaded(true);
      } catch (e) {
        console.log(e);
      }
    };
    fetchListOfPlans();
  }, [state.user, state.userToken, isFocused]);

  return (
    <View className={`w-full h-full bg-ink-white`}>
      <ScrollView className={`w-full h-full`}>
        <View
          className={`h-full flex-col w-full items-center`}
          style={{
            padding: 20,
            paddingTop: 150,
            paddingBottom: tabBarHeight + 20,
          }}
        >
          <View className={`absolute w-full h-[300] mt-[80]`}>
            <Image
              source={
                user.image
                  ? typeof user.image === 'string'
                    ? { uri: user.image }
                    : user.image
                  : {
                      uri: 'https://images.unsplash.com/photo-1476514525535-07fb3b4ae5f1?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8dHJhdmVsfGVufDB8fDB8fHww&w=1000&q=80',
                    }
              }
              style={{ width: '100%', resizeMode: 'cover' }}
              className={`rounded-lg h-[200]`}
            />
          </View>
          <View className={`w-full flex-col items-center`}>
            <StyledImage
              relativeSrc={user.avatar ? user.avatar : DEFAULT_AVATAR_IMAGE}
              size={200}
            />
            <View
              className={`flex-row mt-5 items-center`}
              style={{ columnGap: 5 }}
            >
              <Text
                className={`text-ink-primary`}
                style={{ ...GLOBAL_TEXT_STYLES.bold22 }}
              >
                {user.name}
              </Text>
              {user?.isPremium ? (
                <CrownSvg
                  width={20}
                  height={20}
                  color={GLOBAL_COLORS.ACCENT.yellow100}
                />
              ) : (
                <></>
              )}
            </View>
            <Text
              className={`text-ink-primary mt-2 text-center w-4/5`}
              style={{ ...GLOBAL_TEXT_STYLES.regular10 }}
            >
              {user.bio}
            </Text>
            <View style={{ rowGap: 20 }} className={`mt-10`}>
              {/* <CommunityPost post={POSTS[0]} navigation={navigation} /> */}
            </View>
          </View>
          <View style={{ rowGap: 10 }} className={`mt-5`}>
            <Text
              className={`text-ink-primary`}
              style={{ ...GLOBAL_TEXT_STYLES.bold22 }}
            >
              Lịch trình của bạn
            </Text>
            <View className={`mt-[10]`} style={{ rowGap: 10 }}>
              {isDataLoaded ? (
                listOfPlans.map((item, index) => (
                  <PlannerCard
                    key={index}
                    title={item.title}
                    location={item.location}
                    image={item?.imageUrl}
                    startDate={new Date(item.startDate)}
                    endDate={new Date(item.endDate)}
                    description={item.planDescription}
                    fullWidth
                  />
                ))
              ) : (
                <ActivityIndicator />
              )}
            </View>
          </View>
        </View>
      </ScrollView>
    </View>
  );
};

export default ProfileScreen;
