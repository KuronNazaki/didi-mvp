import { useHeaderHeight } from '@react-navigation/elements';
import React, { useContext, useEffect, useState } from 'react';
import { ScrollView, Text, TouchableOpacity, View } from 'react-native';
import { BaseButton } from '../../components/Button';
import AuthContext, { useAuthContext } from '../../misc/AuthContext';
import LogoutSvg from '../../assets/logout.svg';
import ProfileSvg from '../../assets/profile.svg';
import CrownSvg from '../../assets/crown-1.svg';
import ArrowLeftSvg from './../../assets/arrow-left-1.svg';
import { GLOBAL_COLORS, GLOBAL_TEXT_STYLES } from '../../constants/global';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import ProfileScreen from '../ProfileScreen';
import AsyncStorage from '@react-native-async-storage/async-storage';
import FullEditSvg from '../../assets/edit-2.svg';
import GlobalSvg from '../../assets/global.svg';
import EditSvg from '../../assets/edit.svg';
import BuildingSvg from '../../assets/building.svg';
import IndividualPlanScreen from '../IndividualPlanScreen';
import DetailedPlaceScreen from '../DetailedPlaceScreen';
import EditProfileScreen from '../EditProfileScreen';
import PremiumScreen from '../PremiumScreen';
import PaymentScreen from '../PaymentScreen';
import StyledImage from '../../components/StyledImage';
import { DEFAULT_AVATAR_IMAGE, DEFAULT_IMAGE } from '../../constants/images';
import { LinearGradient } from 'expo-linear-gradient';
import RouteSvg from '../../assets/route-square.svg';

const SettingScreen = ({ navigation }) => {
  const headerHeight = useHeaderHeight();
  const { signOut } = useAuthContext();
  const { state } = useAuthContext();
  const { user } = state;

  return (
    <>
      <View
        className={`bg-ink-white w-full h-full`}
        style={{ paddingTop: headerHeight, rowGap: 20 }}
      >
        <View className={`w-full relative`}>
          <View
            className={`flex-row items-center p-5 pt-10`}
            style={{ columnGap: 10 }}
          >
            <StyledImage
              relativeSrc={user.avatar ? user.avatar : DEFAULT_AVATAR_IMAGE}
            />
            <View style={{ rowGap: 2 }}>
              <Text
                className={`text-ink-white`}
                style={{ ...GLOBAL_TEXT_STYLES.semibold16 }}
              >
                {user?.name} 👋
              </Text>
              <Text
                className={`text-ink-senary`}
                style={{ ...GLOBAL_TEXT_STYLES.regular13 }}
              >
                {user?.email}
              </Text>
            </View>
          </View>
          <LinearGradient
            // Background Linear Gradient
            colors={[
              GLOBAL_COLORS.GRADIENT.darkblue100.start,
              GLOBAL_COLORS.GRADIENT.darkblue100.end,
            ]}
            className={`w-full h-full absolute -z-10`}
          />
        </View>
        <View className={`px-5`} style={{ rowGap: 10 }}>
          <View className={`flex-row w-full`} style={{ columnGap: 10 }}>
            <View className={`basis-1/2`}>
              <BaseButton
                title={'FAQ'}
                variant={'darkblue100'}
                icon={
                  <BuildingSvg
                    width={80}
                    height={80}
                    color={GLOBAL_COLORS.INK.white + '99'}
                  />
                }
              />
            </View>
            <View className={`basis-1/2`}>
              <BaseButton
                title={'Đánh giá'}
                variant={'darkblue100'}
                icon={
                  <EditSvg
                    width={80}
                    height={80}
                    color={GLOBAL_COLORS.INK.white + '99'}
                  />
                }
              />
            </View>
          </View>
          <Text
            style={{ ...GLOBAL_TEXT_STYLES.bold20 }}
            className={`mt-5 mb-2`}
          >
            Cá nhân hoá
          </Text>
          <TouchableOpacity
            className={`flex-row items-center`}
            style={{ columnGap: 20 }}
            activeOpacity={0.8}
            onPress={() => navigation.navigate('ProfileScreen')}
          >
            <ProfileSvg
              width={30}
              height={30}
              color={GLOBAL_COLORS.INK.primary + '99'}
            />
            <Text
              style={{ ...GLOBAL_TEXT_STYLES.semibold13 }}
              className={`text-ink-primary`}
            >
              Trang cá nhân
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            className={`flex-row items-center`}
            style={{ columnGap: 20 }}
            activeOpacity={0.8}
            onPress={() => {
              navigation.navigate('Premium');
            }}
          >
            <CrownSvg
              width={30}
              height={30}
              color={GLOBAL_COLORS.INK.primary + '99'}
            />
            <Text
              style={{ ...GLOBAL_TEXT_STYLES.semibold13 }}
              className={`text-ink-primary`}
            >
              Nâng cấp
            </Text>
          </TouchableOpacity>
          <Text
            style={{ ...GLOBAL_TEXT_STYLES.bold20 }}
            className={`mt-5 mb-2`}
          >
            Cài đặt
          </Text>
          <TouchableOpacity
            className={`flex-row items-center`}
            style={{ columnGap: 20 }}
            activeOpacity={0.8}
            onPress={() => {}}
          >
            <GlobalSvg
              width={30}
              height={30}
              color={GLOBAL_COLORS.INK.primary + '99'}
            />
            <Text
              style={{ ...GLOBAL_TEXT_STYLES.semibold13 }}
              className={`text-ink-primary`}
            >
              Ngôn ngữ
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            className={`flex-row items-center`}
            style={{ columnGap: 20 }}
            activeOpacity={0.8}
            onPress={() => {}}
          >
            <EditSvg width={30} height={30} color={GLOBAL_COLORS.INK.primary + '99'} />
            <Text
              style={{ ...GLOBAL_TEXT_STYLES.semibold13 }}
              className={`text-ink-primary`}
            >
              Đổi mật khẩu
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            className={`flex-row items-center`}
            style={{ columnGap: 20 }}
            activeOpacity={0.8}
            onPress={() => {}}
          >
            <RouteSvg
              width={30}
              height={30}
              color={GLOBAL_COLORS.INK.primary + '99'}
            />
            <Text
              style={{ ...GLOBAL_TEXT_STYLES.semibold13 }}
              className={`text-ink-primary`}
            >
              Hướng dẫn sử dụng
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            className={`flex-row items-center`}
            style={{ columnGap: 20 }}
            activeOpacity={0.8}
            onPress={() => signOut()}
          >
            <LogoutSvg
              width={30}
              height={30}
              color={GLOBAL_COLORS.INK.primary + '99'}
            />
            <Text
              style={{ ...GLOBAL_TEXT_STYLES.semibold13 }}
              className={`text-ink-primary`}
            >
              Đăng xuất
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </>
  );
};

const Stack = createNativeStackNavigator();

const SettingStack = () => {
  return (
    <Stack.Navigator>
      <Stack.Group
        screenOptions={{
          headerTransparent: true,
        }}
      >
        <Stack.Screen
          name="SettingMain"
          component={SettingScreen}
          options={{
            headerTitle: 'Tuỳ chỉnh',
            headerBlurEffect: true,
            headerShown: false,
          }}
        />
        <Stack.Screen
          name="ProfileScreen"
          component={ProfileScreen}
          options={({ navigation }) => ({
            headerTitle: '',
            headerBlurEffect: true,
            headerLeft: () => (
              <TouchableOpacity onPress={() => navigation.goBack()}>
                <ArrowLeftSvg
                  width={30}
                  height={30}
                  color={GLOBAL_COLORS.ACCENT.blue100}
                />
              </TouchableOpacity>
            ),
            headerRight: () => (
              <TouchableOpacity
                onPress={() => navigation.navigate('EditProfile')}
              >
                <FullEditSvg
                  width={30}
                  height={30}
                  color={GLOBAL_COLORS.ACCENT.blue100}
                />
              </TouchableOpacity>
            ),
            headerShown: true,
          })}
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
        <Stack.Screen
          name="EditProfile"
          component={EditProfileScreen}
          options={({ navigation }) => ({
            presentation: 'modal',
            headerTitle: 'Chỉnh sửa thông tin',
            headerTitleStyle: {
              ...GLOBAL_TEXT_STYLES.semibold10,
              color: GLOBAL_COLORS.INK.primary,
            },
            headerTintColor: GLOBAL_COLORS.INK.primary,
          })}
        />
        <Stack.Screen
          name="Premium"
          component={PremiumScreen}
          options={({ navigation }) => ({
            headerTitle: 'Nâng cấp',
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
            headerBlurEffect: true,
          })}
        />
        <Stack.Screen
          name="Payment"
          component={PaymentScreen}
          options={({ navigation }) => ({
            headerTitle: 'Thông tin thanh toán',
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
            headerBlurEffect: true,
          })}
        />
      </Stack.Group>
    </Stack.Navigator>
  );
};

export default SettingStack;
