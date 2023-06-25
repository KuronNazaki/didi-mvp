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

const defaultUri = '../../assets/avatar.png';
const DEFAULT_IMAGE = Image.resolveAssetSource(require(defaultUri)).uri;

const ProfileScreen = ({ navigation }) => {
  const headerHeight = useHeaderHeight();
  const tabBarHeight = useBottomTabBarHeight();
  const [user, setUser] = useState({});

  useEffect(() => {
    const getUser = async () => {
      const stringData = await AsyncStorage.getItem('@userToken');
      const parsedData = JSON.parse(stringData);
      setUser(parsedData);
    };
    getUser();
  }, []);

  return (
    <View className={`w-full h-full bg-ink-white`}>
      <ScrollView className={`w-full h-full overflow-visible`}>
        <View
          className={`h-full flex-col w-full items-center`}
          style={{
            padding: 20,
            paddingTop: headerHeight + 20,
            paddingBottom: tabBarHeight + 20,
          }}
        >
          <View className={`w-full flex-col items-center`}>
            <StyledImage
              relativeSrc={user.imageUrl ? user.imageUrl : DEFAULT_IMAGE}
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
        </View>
      </ScrollView>
    </View>
  );
};

export default ProfileScreen;
