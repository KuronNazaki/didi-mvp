import { useHeaderHeight } from '@react-navigation/elements';
import React from 'react';
import {
  Keyboard,
  ScrollView,
  TouchableWithoutFeedback,
  View,
} from 'react-native';
import { TextInputWithLabel } from '../../components/Input';
import DateInputWithLabel from '../../components/Input/DateInputWithLabel';
import PickerWithLabel from '../../components/Picker';
import BaseButton from '../../components/Button/BaseButton';
import { FIRST_PLAN } from '../../constants/db';

const CreatePlanScreen = ({ navigation }) => {
  const headerHeight = useHeaderHeight();

  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss} accessible={false}>
      <ScrollView
        className={`bg-white w-full h-full`}
        style={{ paddingTop: headerHeight + 20, paddingHorizontal: 20 }}
      >
        <View className={`justify-start`} style={{ rowGap: 20 }}>
          <TextInputWithLabel
            label={'Tiêu đề'}
            placeholder={'Nhập tiêu đề vào nè'}
          />
          <View
            className={`flex-row justify-between`}
            style={{ columnGap: 20 }}
          >
            <View className={`flex-1`}>
              <DateInputWithLabel label={'Ngày bắt đầu'} />
            </View>
            <View className={`flex-1`}>
              <DateInputWithLabel label={'Ngày kết thúc'} />
            </View>
          </View>
          <PickerWithLabel
            label={'Địa điểm'}
            items={[
              { label: 'Hội An', value: 'football' },
              { label: 'TP. Hồ Chí Minh', value: 'baseball' },
              { label: 'Lâm Đồng', value: 'hockey' },
            ]}
            placeholder={{ label: 'Chọn thành phố', value: null }}
          />
          <TextInputWithLabel
            label={'Mô tả'}
            placeholder={'Mô tả nhập ở đây nè'}
            multiline={true}
          />
          <BaseButton
            title={'Tạo mới'}
            onPress={() =>
              navigation.navigate('IndividualPlan', {
                plan: JSON.stringify(FIRST_PLAN),
              })
            }
          />
        </View>
      </ScrollView>
    </TouchableWithoutFeedback>
  );
};

export default CreatePlanScreen;
