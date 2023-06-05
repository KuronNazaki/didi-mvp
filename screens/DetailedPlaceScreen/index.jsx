import React, { useState } from 'react';
import {
  Image,
  Keyboard,
  Pressable,
  ScrollView,
  Text,
  TouchableWithoutFeedback,
  View,
} from 'react-native';
import { TextInputWithLabel } from '../../components/Input';
import { BaseButton } from '../../components/Button';
import { GLOBAL_COLORS, GLOBAL_TEXT_STYLES } from '../../constants/global';
import StarSvg from '../../assets/star.svg';

const uri = './../../assets/avatar.png';
const DEFAULT_IMAGE = Image.resolveAssetSource(require(uri)).uri;

const DetailedPlaceScreen = ({ navigation, route }) => {
  const { place } = route.params;
  let deserializedPlace = {};
  if (typeof place === 'string') {
    deserializedPlace = JSON.parse(place);
  }
  const {
    name,
    placeDescription,
    placeLocation,
    phoneNumber,
    rating,
    openingTime,
    planningTime,
    imageUrl,
  } = deserializedPlace;

  const [nameState, setNameState] = useState(name);
  const [placeLocationState, setPlaceLocationState] = useState(placeLocation);
  const [phoneNumberState, setPhoneNumberState] = useState(phoneNumber);
  const [descriptionState, setDescriptionState] = useState(placeDescription);

  return (
    <ScrollView className={'h-full w-full'}>
      <TouchableWithoutFeedback
        className={`w-full h-full`}
        onPress={Keyboard.dismiss}
        accessible={false}
      >
        <View className="h-full w-full">
          <View className="z-50">
            <View className={`w-full h-[300]`}>
              <Image
                className={`w-full h-full`}
                source={{ uri: imageUrl ? imageUrl : DEFAULT_IMAGE }}
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
                <TextInputWithLabel
                  label={'Ghi chú'}
                  multiline={true}
                  placeholder="Ghi chú ở đây"
                />
              </View>
              <View className="w-full mt-6">
                <BaseButton title={'Lưu'} />
              </View>
            </View>
          </View>
        </View>
      </TouchableWithoutFeedback>
    </ScrollView>
  );
};

export default DetailedPlaceScreen;
