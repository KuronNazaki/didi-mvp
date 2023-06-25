import React, { useEffect, useState } from 'react';
import {
  Image,
  ScrollView,
  StatusBar,
  Text,
  Touchable,
  TouchableOpacity,
  View,
} from 'react-native';
import ArrowLeftSvg from './../../assets/arrow-left-1.svg';
import EditSvg from './../../assets/edit-2.svg';
import LocationSvg from './../../assets/location.svg';
import FullEditSvg from './../../assets/edit.svg';
import { useHeaderHeight } from '@react-navigation/elements';
import { SafeAreaView } from 'react-native-safe-area-context';
import { GLOBAL_COLORS, GLOBAL_TEXT_STYLES } from '../../constants/global';
import BaseText from '../../components/GlobalText/BaseText';
import DashButton from '../../components/Button/DashButton';
import PlaceCard from '../../components/PlaceCard';
import { useBottomTabBarHeight } from '@react-navigation/bottom-tabs';
import { LinearGradient } from 'expo-linear-gradient';
import { EXAMPLES } from '../../constants/db';

const defaultUri = '../../assets/avatar.png';
const DEFAULT_IMAGE = Image.resolveAssetSource(require(defaultUri)).uri;

const DateButton = ({
  keyProp,
  title,
  date,
  isActive = false,
  current,
  onPress,
}) => {
  const [keyState, setKeyState] = useState(keyProp);

  return (
    <TouchableOpacity
      activeOpacity={0.8}
      className={`rounded-xl overflow-hidden ${
        current === keyState ? '' : 'bg-ink-senary'
      }`}
      onPress={onPress}
    >
      <View className={`py-4 px-5`}>
        <Text
          style={{ ...GLOBAL_TEXT_STYLES.semibold15 }}
          className={`${
            current === keyState ? 'text-ink-white' : 'text-ink-tertiary'
          }`}
        >
          {title}
        </Text>
        <Text
          style={{ ...GLOBAL_TEXT_STYLES.regular10 }}
          className={`${
            current === keyState
              ? 'text-ink-white opacity-50'
              : 'text-ink-quaternary opacity-100'
          } mt-1 `}
        >
          {date}
        </Text>
      </View>
      {current === keyState ? (
        <LinearGradient
          // Background Linear Gradient
          colors={[
            GLOBAL_COLORS.GRADIENT.darkblue100.start,
            GLOBAL_COLORS.GRADIENT.darkblue100.end,
          ]}
          className={`w-full h-full absolute -z-10`}
        />
      ) : (
        <></>
      )}
    </TouchableOpacity>
  );
};

const PlacePanel = ({ navigation, placeArray, currentDay }) => {
  return placeArray[currentDay]?.map((item, index) => (
    <PlaceCard
      key={index}
      place={item}
      onPress={() =>
        navigation.navigate('DetailedPlace', { place: JSON.stringify(item) })
      }
    />
  ));
};

const IndividualPlanScreen = ({ navigation, route }) => {
  const { plan } = route.params;
  const deserializedPlan = JSON.parse(plan);
  const tabBarHeight = useBottomTabBarHeight();

  const [currentPlan, setCurrentPlan] = useState({});
  const [currentDay, setCurrentDay] = useState(0);
  const schedule = EXAMPLES[0].schedule;

  useEffect(() => {
    // navigation.getParent()?.setOptions({
    //   tabBarStyle: {
    //     display: 'none',
    //   },
    // });
    // return () =>
    //   navigation.getParent()?.setOptions({
    //     tabBarStyle: {
    //       display: 'flex',
    //     },
    //   });
  }, [navigation]);

  const diff =
    (new Date(deserializedPlan.endDate) -
      new Date(deserializedPlan.startDate)) /
    (1000 * 60 * 60 * 24);
  // console.log(diff + 1);

  return (
    <View className={`w-full h-full bg-white`}>
      <StatusBar hidden={true} />
      <ScrollView className={'w-full h-full'}>
        <View style={{ paddingBottom: tabBarHeight + 20 }}>
          <View
            className={'w-full h-[300]'}
            style={{ elevation: 1, zIndex: -10 }}
          >
            <Image
              source={{
                uri: deserializedPlan.imageUrl
                  ? deserializedPlan.imageUrl
                  : DEFAULT_IMAGE,
              }}
              style={{ resizeMode: 'cover' }}
              className={`w-full h-full`}
            />
            <View className={`w-full absolute bottom-0 left-0 px-5 py-8`}>
              <Text
                style={{ ...GLOBAL_TEXT_STYLES.bold28 }}
                className={`w-11/12 text-ink-white`}
              >
                {deserializedPlan.title}
              </Text>
              <Text
                style={{ ...GLOBAL_TEXT_STYLES.semibold13 }}
                className={`mt-[2%] text-ink-senary`}
              >
                {`${new Date(
                  deserializedPlan.startDate
                ).toLocaleDateString()} - ${new Date(
                  deserializedPlan.endDate
                ).toLocaleDateString()}`}
              </Text>
            </View>
          </View>
          <SafeAreaView
            className={`absolute w-full flex-row justify-between`}
            style={{ paddingHorizontal: 20 }}
          >
            <TouchableOpacity onPress={() => navigation.goBack()}>
              <ArrowLeftSvg width={30} height={30} color={'white'} />
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => navigation.navigate('EditIndividualPlan')}
            >
              <EditSvg width={30} height={30} color={'white'} />
            </TouchableOpacity>
          </SafeAreaView>
          <View className={`w-full p-5`}>
            <View>
              <Text
                style={{ ...GLOBAL_TEXT_STYLES.bold22 }}
                className={`text-ink-primary`}
              >
                Tổng quan
              </Text>
              <View style={{ rowGap: '10%' }} className={`w-full mt-[5%]`}>
                <View
                  className={`w-full flex-row items-center`}
                  style={{ columnGap: '10%' }}
                >
                  <LocationSvg
                    width={25}
                    height={25}
                    color={GLOBAL_COLORS.INK.secondary}
                  />
                  <Text
                    style={{ ...GLOBAL_TEXT_STYLES.regular13 }}
                    className={`text-ink-secondary`}
                  >
                    {deserializedPlan.location}
                  </Text>
                </View>
                <View
                  className={`w-full flex-row items-start`}
                  style={{ columnGap: '10%' }}
                >
                  <FullEditSvg
                    width={25}
                    height={25}
                    color={GLOBAL_COLORS['light-grey']}
                  />
                  <Text
                    style={{
                      ...GLOBAL_TEXT_STYLES.regular13,
                    }}
                    className={`w-11/12 text-ink-secondary`}
                  >
                    {deserializedPlan.planDescription}
                  </Text>
                </View>
              </View>
              <View
                className={`w-11/12 h-[1.5] mt-[5%] bg-ink-senary self-center`}
              ></View>
            </View>
            {/* <View className={`w-full mt-8`}>
              <Text
                style={{ ...GLOBAL_TEXT_STYLES.bold22 }}
                className={`text-ink-primary`}
              >
                Địa điểm tham quan
              </Text>
              <View>
                <View className={`mt-5`}>
                  <DashButton title={'Thêm địa điểm tham quan...'} />
                </View>
              </View>
              <View
                className={`w-11/12 h-[1.5] mt-[5%] bg-ink-senary self-center`}
              ></View>
            </View> */}
            <View className={`w-full mt-8`}>
              <Text
                style={{ ...GLOBAL_TEXT_STYLES.bold22 }}
                className={`text-ink-primary`}
              >
                Lịch trình
              </Text>
              <ScrollView
                horizontal={true}
                showsHorizontalScrollIndicator={false}
                className={`overflow-visible mt-5`}
              >
                <View className={`flex-row`} style={{ columnGap: 10 }}>
                  {Array.apply(null, Array(diff + 1)).map((item, index) => (
                    <DateButton
                      keyProp={index}
                      key={index}
                      title={'Ngày ' + (index + 1)}
                      date={(() => {
                        const date = new Date(deserializedPlan.startDate);
                        date.setDate(date.getDate() + index);
                        return date.toLocaleDateString();
                      })()}
                      current={currentDay}
                      onPress={() => setCurrentDay(index)}
                    />
                  ))}
                </View>
              </ScrollView>
              <View className={`mt-5`}>
                <DashButton
                  title={'Thêm địa điểm, khách sạn,...'}
                  onPress={() => navigation.navigate('CreateDetailedPlace')}
                />
              </View>
              <View style={{ rowGap: 20 }} className={`mt-5`}>
                <PlacePanel
                  navigation={navigation}
                  placeArray={deserializedPlan.schedule}
                  currentDay={currentDay}
                />
              </View>
            </View>
          </View>
        </View>
      </ScrollView>
    </View>
  );
};

export default IndividualPlanScreen;
