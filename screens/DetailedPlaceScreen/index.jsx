import React, { useState } from 'react';
import {
  Image,
  Keyboard,
  Pressable,
  SafeAreaView,
  ScrollView,
  Text,
  TouchableOpacity,
  TouchableWithoutFeedback,
  View,
} from 'react-native';
import { TextInputWithLabel } from '../../components/Input';
import { BaseButton } from '../../components/Button';
import ArrowLeftSvg from './../../assets/arrow-left-1.svg';
import { GLOBAL_COLORS, GLOBAL_TEXT_STYLES } from '../../constants/global';
import TrashSvg from '../../assets/trash.svg';
import { BASE_URL } from '../../constants/api';

const uri = './../../assets/avatar.png';
const DEFAULT_IMAGE = Image.resolveAssetSource(require(uri)).uri;

const DetailedPlaceScreen = ({ navigation, route }) => {
  const { place, planId, dayIndex } = route.params;
  let plan = {};
  if (typeof place === 'string') {
    plan = JSON.parse(place);
  }
  const {
    _id,
    name,
    placeDescription,
    placeLocation,
    phoneNumber,
    rating,
    openingTime,
    planningTime,
    imageUrl,
  } = plan;

  const [nameState, setNameState] = useState(name);
  const [placeLocationState, setPlaceLocationState] = useState(placeLocation);
  const [phoneNumberState, setPhoneNumberState] = useState(phoneNumber);
  const [descriptionState, setDescriptionState] = useState(placeDescription);
  const [imageUrlState, setImageUrlState] = useState(imageUrl);

  const onUpdate = async () => {
    try {
      const promise = await fetch(`${BASE_URL}/attraction/${_id}`, {
        method: 'PUT',
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          name: nameState,
          placeLocation: placeLocationState,
          placeDescription: descriptionState,
          phoneNumber: phoneNumberState,
          imageUrl: imageUrlState,
        }),
      });
      navigation.goBack();
    } catch (err) {
      console.log(err);
    }
  };

  const onDelete = async () => {
    try {
      const promise = await fetch(`${BASE_URL}/attraction/${_id}`, {
        method: 'DELETE',
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          planId,
          dayIndex,
        }),
      });
      navigation.goBack();
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <ScrollView className={'h-full w-full'}>
      <TouchableWithoutFeedback
        className={`w-full h-full`}
        onPress={Keyboard.dismiss}
        accessible={false}
      >
        <View className="h-full w-full">
          <View
            className={`absolute w-full flex-row justify-between items-center z-50`}
            style={{ padding: 20 }}
          >
            <TouchableOpacity onPress={() => navigation.goBack()}>
              <ArrowLeftSvg width={30} height={30} color={'white'} />
            </TouchableOpacity>
            <TouchableOpacity onPress={onDelete}>
              <TrashSvg width={28} height={28} color={'white'} />
            </TouchableOpacity>
          </View>
          <View className="z-40">
            <View className={`w-full h-[300]`}>
              <Image
                className={`w-full h-full`}
                source={{ uri: imageUrlState }}
                style={{ resizeMode: 'cover' }}
              />
            </View>
            <View className="bg-ink-white p-5">
              {/* <View className="flex-row items-end">
                <Text className="text-[#55555e] text-3xl font-bold">
                  {name}
                </Text>
              </View> */}
              {/* <View className={`w-full flex-row justify-between items-center`}>
                <Text
                  className={`text-ink-primary`}
                  style={{ ...GLOBAL_TEXT_STYLES.semibold17, flexShrink: 1 }}
                >
                  {name}
                </Text>
                <View
                  className={`flex-row justify-end`}
                  style={{ flexShrink: 0 }}
                >
                  <StarSvg
                    width={15}
                    height={15}
                    color={GLOBAL_COLORS.ACCENT.yellow100}
                  />
                  <Text
                    className={`text-accent-yellow100`}
                    style={{ ...GLOBAL_TEXT_STYLES.semibold10 }}
                  >
                    {rating}
                  </Text>
                </View>
              </View> */}
              {/* <Text
                className="mt-3 text-ink-secondary"
                style={{ ...GLOBAL_TEXT_STYLES.regular10 }}
              >
                {descriptionState}
              </Text> */}
              <View className={``} style={{ rowGap: 20 }}>
                <TextInputWithLabel
                  label={'Đường dẫn ảnh'}
                  placeholder={'Đường dẫn ảnh'}
                  value={imageUrlState}
                  onValueChange={setImageUrlState}
                  multiline
                />
                <TextInputWithLabel
                  label={'Tên'}
                  placeholder={'Tên'}
                  value={nameState}
                  onValueChange={setNameState}
                />
                <TextInputWithLabel
                  label={'Mô tả'}
                  placeholder="Mô tả"
                  value={descriptionState}
                  onValueChange={setDescriptionState}
                  multiline
                />
                <TextInputWithLabel
                  label={'Địa chỉ'}
                  placeholder="Địa chỉ"
                  value={placeLocationState}
                  onValueChange={setPlaceLocationState}
                  multiline
                />
                <TextInputWithLabel
                  label={'Số điện thoại'}
                  placeholder="Số điện thoại"
                  value={phoneNumberState}
                  onValueChange={setPhoneNumberState}
                />
                {/* <TextInputWithLabel
                  label={'Ghi chú'}
                  multiline={true}
                  placeholder="Ghi chú ở đây"
                /> */}
              </View>
              <View className="w-full mt-6">
                <BaseButton title={'Lưu'} onPress={onUpdate} />
              </View>
            </View>
          </View>
        </View>
      </TouchableWithoutFeedback>
    </ScrollView>
  );
};

export default DetailedPlaceScreen;
