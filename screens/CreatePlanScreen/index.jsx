import { useHeaderHeight } from '@react-navigation/elements';
import React, { useState } from 'react';
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
import { PROVINCES } from '../../constants/province';
import { BASE_URL } from '../../constants/api';
import { useAuthContext } from '../../misc/AuthContext';
import { SafeAreaView } from 'react-native';

const CreatePlanScreen = ({ navigation }) => {
  const headerHeight = useHeaderHeight();

  const [title, setTitle] = useState('');
  const [startDate, setStartDate] = useState(new Date());
  const [endDate, setEndDate] = useState(new Date());
  const [place, setPlace] = useState(null);
  const [description, setDescription] = useState('');

  const { state, reload } = useAuthContext();

  const createNew = async () => {
    try {
      const promise = await fetch(`${BASE_URL}/plan`, {
        method: 'POST',
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          title: title,
          startDate: startDate.toString(),
          endDate: endDate.toString(),
          location: place,
          planDescription: description,
          imageUrl: null,
        }),
      });
      const data = await promise.json();
      if (data) {
        const changePlanListPromise = await fetch(
          `${BASE_URL}/user/${state.user._id}/changePlanList`,
          {
            method: 'POST',
            headers: {
              Accept: 'application/json',
              'Content-Type': 'application/json',
            },
            body: JSON.stringify([...state.user.plans, data.id]),
          }
        );
        const temp = await changePlanListPromise.json();
        await reload();
        navigation.goBack();
      }
    } catch (e) {
      console.log(e);
    }
  };

  return (
    <SafeAreaView className={`w-full h-full bg-ink-white`}>
      <TouchableWithoutFeedback onPress={Keyboard.dismiss} accessible={false}>
        <ScrollView
          className={`bg-white w-full h-full`}
          style={{ paddingTop: headerHeight + 20, paddingHorizontal: 20 }}
        >
          <View className={`justify-start`} style={{ rowGap: 20 }}>
            <TextInputWithLabel
              value={title}
              onValueChange={setTitle}
              label={'Tiêu đề'}
              placeholder={'Nhập tiêu đề vào nè'}
            />
            <View
              className={`flex-row justify-between`}
              style={{ columnGap: 20 }}
            >
              <View className={`flex-1`}>
                <DateInputWithLabel
                  value={startDate}
                  onValueChange={setStartDate}
                  label={'Ngày bắt đầu'}
                />
              </View>
              <View className={`flex-1`}>
                <DateInputWithLabel
                  value={endDate}
                  onValueChange={setEndDate}
                  label={'Ngày kết thúc'}
                />
              </View>
            </View>
            <PickerWithLabel
              value={place}
              onValueChange={setPlace}
              label={'Địa điểm'}
              items={Object.keys(PROVINCES).map((code) => ({
                label: PROVINCES[code].name,
                value: PROVINCES[code].name,
              }))}
              placeholder={{ label: 'Chọn thành phố', value: null }}
            />
            <TextInputWithLabel
              value={description}
              onValueChange={setDescription}
              label={'Mô tả'}
              placeholder={'Mô tả nhập ở đây nè'}
              multiline={true}
            />
            <BaseButton title={'Tạo mới'} onPress={createNew} />
          </View>
        </ScrollView>
      </TouchableWithoutFeedback>
    </SafeAreaView>
  );
};

export default CreatePlanScreen;
