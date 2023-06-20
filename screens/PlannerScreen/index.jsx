import {
  ActivityIndicator,
  Button,
  Modal,
  Pressable,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import { useHeaderHeight } from '@react-navigation/elements';
import StyledImage from '../../components/StyledImage';
import FloatingIconButton from '../../components/Button/FloatingIconButton';
import AddItemSvg from './../../assets/additem.svg';
import ArrowLeftSvg from './../../assets/arrow-left-1.svg';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import ChooseTypeScreen from '../ChooseTypeScreen';
import { BlurView } from 'expo-blur';
import CreatePlanScreen from '../CreatePlanScreen';
import IndividualPlanScreen from '../IndividualPlanScreen';
import { Card, PlannerCard } from '../../components/Card';

import { GLOBAL_COLORS, GLOBAL_TEXT_STYLES } from '../../constants/global';
import { useEffect, useState } from 'react';
import { useBottomTabBarHeight } from '@react-navigation/bottom-tabs';
import DetailedPlaceScreen from '../DetailedPlaceScreen';

const Stack = createNativeStackNavigator();

const PlannerMainScreen = ({ navigation }) => {
  const headerHeight = useHeaderHeight();
  const tabBarHeight = useBottomTabBarHeight();
  const [modalVisible, setModalVisible] = useState(false);
  const [listOfPlans, setListOfPlans] = useState([]);
  const [isDataLoaded, setIsDataLoaded] = useState(false);

  useEffect(() => {
    const fetchListOfPlans = async () => {
      const response = await fetch('https://didimvp.wiremockapi.cloud/plans');
      const data = await response.json();
      setListOfPlans(data);
      setIsDataLoaded(true);
    };
    fetchListOfPlans();
  }, []);

  return (
    <View className={`w-full h-full bg-ink-white`}>
      <ScrollView className={`h-full overflow-visible`}>
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
                style={{ ...GLOBAL_TEXT_STYLES.regular15 }}
              >
                Hế lô, 👋
              </Text>
              <Text
                className={`text-ink-primary`}
                style={{ ...GLOBAL_TEXT_STYLES.semibold16 }}
              >
                Huỳnh Huy
              </Text>
            </View>
          </View>
          <View style={{ rowGap: 10 }} className={`mt-10`}>
            <Text
              className={`text-ink-primary`}
              style={{ ...GLOBAL_TEXT_STYLES.bold22 }}
            >
              Lịch trình của bạn
            </Text>
            <View className={`mt-[10]`}>
              {isDataLoaded ? listOfPlans.map((item, index) => (
                <PlannerCard
                  key={index}
                  title={item.title}
                  location={item.location}
                  image={item?.imageUrl}
                  startDate={new Date(item.startDate)}
                  endDate={new Date(item.endDate)}
                  description={item.planDescription}
                  fullWidth
                  onPress={() => {
                    navigation.navigate('IndividualPlan', {
                      plan: JSON.stringify(item),
                    });
                  }}
                />
              )) : <ActivityIndicator />}
            </View>
          </View>
        </View>
      </ScrollView>
      <View
        className={`absolute`}
        style={{ bottom: tabBarHeight + 20, right: 20 }}
      >
        <View>
          <FloatingIconButton
            icon={<AddItemSvg width={40} height={40} color={'white'} />}
            onPress={() => setModalVisible(true)}
          />
        </View>
        <Modal
          animationType="fade"
          transparent={true}
          visible={modalVisible}
          onRequestClose={() => {
            Alert.alert('Modal has been closed.');
            setModalVisible(!modalVisible);
          }}
        >
          <BlurView
            className={`w-full h-full bg-[#00000090]`}
            tint="light"
            intensity={10}
            style={StyleSheet.absoluteFill}
          >
            <View
              style={{
                right: 20,
                bottom: tabBarHeight + 20,
              }}
              className={`justify-end items-center absolute`}
            >
              <View
                style={{
                  elevation: 5,
                  rowGap: 10,
                }}
                className={`items-end`}
              >
                <Pressable
                  style={{
                    padding: 10,
                    elevation: 2,
                  }}
                  onPress={() => setModalVisible(!modalVisible)}
                >
                  <Text
                    className={`text-ink-white`}
                    style={{ ...GLOBAL_TEXT_STYLES.semibold13 }}
                  >
                    Ẩn
                  </Text>
                </Pressable>
                {/* <View
                  className={`flex-row items-center`}
                  style={{ columnGap: 10 }}
                >
                  <Text
                    className={`text-ink-white`}
                    style={{ ...GLOBAL_TEXT_STYLES.semibold15 }}
                  >
                    Sử dụng mẫu có sẵn
                  </Text>
                  <FloatingIconButton
                    icon={<AddItemSvg width={40} height={40} color={'white'} />}
                    onPress={() => {}}
                  />
                </View> */}
                <View
                  className={`flex-row items-center`}
                  style={{ columnGap: 10 }}
                >
                  <Text
                    className={`text-ink-white`}
                    style={{ ...GLOBAL_TEXT_STYLES.semibold15 }}
                  >
                    Tạo lịch trình trống
                  </Text>
                  <FloatingIconButton
                    icon={<AddItemSvg width={40} height={40} color={'white'} />}
                    onPress={() => {
                      setModalVisible(false);
                      navigation.navigate('CreatePlan');
                    }}
                  />
                </View>
              </View>
            </View>
          </BlurView>
        </Modal>
      </View>
    </View>
  );
};

export default function PlannerScreen() {
  return (
    <Stack.Navigator>
      <Stack.Group
        screenOptions={{
          headerTransparent: true,
        }}
      >
        <Stack.Screen
          name="PlannerMain"
          component={PlannerMainScreen}
          options={{
            headerTitle: '',
            headerBlurEffect: true,
          }}
        />
        <Stack.Screen
          name="ChooseType"
          component={ChooseTypeScreen}
          options={({ navigation }) => ({
            headerTitle: 'Choose Type',
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
          })}
        />
        <Stack.Screen
          name="CreatePlan"
          component={CreatePlanScreen}
          options={({ navigation }) => ({
            headerTitle: 'Tạo Lịch Trình Mới',
            headerTitleStyle: {
              ...GLOBAL_TEXT_STYLES.semibold10,
              color: GLOBAL_COLORS.INK.primary,
            },
            headerBlurEffect: true,
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
      </Stack.Group>
    </Stack.Navigator>
  );
}
