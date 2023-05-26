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

const CreatePlanScreen = () => {
  const headerHeight = useHeaderHeight();

  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss} accessible={false}>
      <ScrollView
        className={`bg-white w-full h-full`}
        style={{ paddingTop: headerHeight + 20, paddingHorizontal: 20 }}
      >
        <View className={`justify-start`} style={{ rowGap: 20 }}>
          <TextInputWithLabel label={'Name'} placeholder={'Enter name'} />
          <View
            className={`flex-row justify-between`}
            style={{ columnGap: 20 }}
          >
            <View className={`flex-1`}>
              <DateInputWithLabel label={'From'} />
            </View>
            <View className={`flex-1`}>
              <DateInputWithLabel label={'To'} />
            </View>
          </View>
          <PickerWithLabel
            label={'Place'}
            items={[
              { label: 'Football', value: 'football' },
              { label: 'Baseball', value: 'baseball' },
              { label: 'Hockey', value: 'hockey' },
            ]}
            placeholder={{ label: 'Choose city', value: null }}
          />
          <TextInputWithLabel
            label={'Description'}
            placeholder={'Description goes here'}
            multiline={true}
          />
          <BaseButton title={'Create'} />
        </View>
      </ScrollView>
    </TouchableWithoutFeedback>
  );
};

export default CreatePlanScreen;
