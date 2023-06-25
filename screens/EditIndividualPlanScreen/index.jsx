import React, { useState } from 'react';
import PickerWithLabel from '../../components/Picker';
import { DateInputWithLabel, TextInputWithLabel } from '../../components/Input';
import {
  Keyboard,
  ScrollView,
  TouchableWithoutFeedback,
  View,
} from 'react-native';
import { Image } from 'react-native';
import { BaseButton } from '../../components/Button';
import { PROVINCES } from '../../constants/province';

const uri = './../../assets/avatar.png';
const DEFAULT_IMAGE = Image.resolveAssetSource(require(uri)).uri;

const EditIndividualPlanScreen = () => {
  const [titleState, setTitleState] = useState('');
  const [locationState, setLocationState] = useState('');
  const [descriptionState, setDescriptionState] = useState('');
	const [imageUrl, setImageUrl] = useState('');

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
                source={{ uri: DEFAULT_IMAGE }}
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
              <View className={`justify-start`} style={{ rowGap: 20 }}>
                {/* <TextInputWithLabel
                  label={'Tên'}
                  placeholder={'Tên'}
                  value={titleState}
                  onValueChange={setTitleState}
                  multiline
                />
                <TextInputWithLabel
                  label={'Mô tả'}
                  placeholder="Mô tả"
                  value={descriptionState}
                  onValueChange={setDescriptionState}
                  multiline
                />
                <TextInputWithLabel
                  label={'Địa điểm'}
                  placeholder="Địa điểm"
                  value={locationState}
                  onValueChange={setLocationState}
                  multiline
                /> */}

                <TextInputWithLabel
                  label={'Đường dẫn ảnh'}
                  placeholder={'Đường dẫn ảnh'}
									value={imageUrl}
									onValueChange={setImageUrl}
									multiline
                />
                <TextInputWithLabel
                  label={'Tiêu đề'}
                  placeholder={'Nhập tiêu đề vào nè'}
									value={titleState}
									onValueChange={setTitleState}
									multiline
                />
                <View
                  className={`flex-row justify-between`}
                  style={{ columnGap: 20 }}
                >
                  <View className={`flex-1`}>
                    <DateInputWithLabel label={'Ngày bắt đầu'}  />
                  </View>
                  <View className={`flex-1`}>
                    <DateInputWithLabel label={'Ngày kết thúc'} />
                  </View>
                </View>
                <PickerWithLabel
                  label={'Địa điểm'}
                  items={Object.keys(PROVINCES).map((code) => ({
                    label: PROVINCES[code].name,
                    value: PROVINCES[code].name,
                  }))}
									value={locationState}
									onValueChange={setLocationState}
                  placeholder={{ label: 'Chọn thành phố', value: null }}
                />
                <TextInputWithLabel
                  label={'Mô tả'}
                  placeholder={'Mô tả nhập ở đây nè'}
									value={descriptionState}
									onValueChange={setDescriptionState}
                  multiline={true}
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

export default EditIndividualPlanScreen;
