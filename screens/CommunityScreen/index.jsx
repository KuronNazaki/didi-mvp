import { useBottomTabBarHeight } from '@react-navigation/bottom-tabs';
import { useHeaderHeight } from '@react-navigation/elements';
import React from 'react';
import {
  SafeAreaView,
  ScrollView,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import StyledImage from '../../components/StyledImage';
import { GLOBAL_COLORS, GLOBAL_TEXT_STYLES } from '../../constants/global';
import CommunityPost from '../../components/CommunityPost';
import { POSTS } from '../../constants/db';
import DetailedPlaceScreen from '../DetailedPlaceScreen';
import IndividualPlanScreen from '../IndividualPlanScreen';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import ArrowLeftSvg from './../../assets/arrow-left-1.svg';

const Stack = createNativeStackNavigator();

const CommunityMainScreen = ({ navigation }) => {
  const headerHeight = useHeaderHeight();
  const tabBarHeight = useBottomTabBarHeight();

  return (
    <View className={`w-full h-full bg-ink-white`}>
      <ScrollView className={`h-full`}>
        <View
          className={`h-full p-5`}
          style={{
            paddingTop: headerHeight + 20,
            paddingBottom: tabBarHeight + 20,
          }}
        >
          <View className={`flex-row items-center`} style={{ columnGap: 10 }}>
            <StyledImage
              size={50}
              relativeSrc={
                'https://scontent-sin6-2.xx.fbcdn.net/v/t39.30808-6/211708785_1021110078629169_7079489300693582216_n.jpg?_nc_cat=108&ccb=1-7&_nc_sid=09cbfe&_nc_ohc=3RkIaVQQbekAX9A031I&_nc_ht=scontent-sin6-2.xx&oh=00_AfDn6s4OFGrCRppHw2-NsyxVIBLWA_p-6osUSu5XTFKMRQ&oe=64889164'
              }
            />
            <View>
              <Text
                className={`text-ink-primary`}
                style={{ ...GLOBAL_TEXT_STYLES.bold28 }}
              >
                Bản tin
              </Text>
            </View>
          </View>
          <View style={{ rowGap: 20 }} className={`mt-5`}>
            <CommunityPost post={POSTS[0]} navigation={navigation} />
            {/* <CommunityPost />
            <CommunityPost />
            <CommunityPost /> */}
          </View>
        </View>
      </ScrollView>
    </View>
  );
};

const CommunityScreen = ({ navigation }) => {
  return (
    <Stack.Navigator>
      <Stack.Group
        screenOptions={{
          headerTransparent: true,
        }}
      >
        <Stack.Screen
          name="CommunityMain"
          component={CommunityMainScreen}
          options={{
            headerTitle: '',
            headerBlurEffect: true,
          }}
        />
        <Stack.Screen
          name="IndividualPlan"
          component={IndividualPlanScreen}
          options={({ navigation }) => ({
            headerTitle: '',
            presentation: 'fullScreenModal',
            headerTitleStyle: {
              ...GLOBAL_TEXT_STYLES.semibold10,
              color: GLOBAL_COLORS.INK.primary,
            },
            headerTintColor: GLOBAL_COLORS.INK.primary,
            headerShown: false,
            headerLeft: () => (
              <TouchableOpacity onPress={() => navigation.goBack()}>
                <ArrowLeftSvg
                  width={30}
                  height={30}
                  color={GLOBAL_COLORS.ACCENT.blue100}
                />
              </TouchableOpacity>
            ),
          })}
        />
        <Stack.Screen
          name="DetailedPlace"
          component={DetailedPlaceScreen}
          options={({ navigation }) => ({
            presentation: 'modal',
            headerTitle: '',
            headerTitleStyle: {
              ...GLOBAL_TEXT_STYLES.semibold10,
              color: GLOBAL_COLORS.INK.primary,
            },
            headerTintColor: GLOBAL_COLORS.INK.primary,
            headerLeft: () => (
              <TouchableOpacity onPress={() => navigation.goBack()}>
                <ArrowLeftSvg
                  width={30}
                  height={30}
                  color={GLOBAL_COLORS.ACCENT.blue100}
                />
              </TouchableOpacity>
            ),
            headerShown: false,
          })}
        />
      </Stack.Group>
    </Stack.Navigator>
  );
};

export default CommunityScreen;
