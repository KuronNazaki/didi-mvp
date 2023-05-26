import DatePicker from '@dietime/react-native-date-picker';
import DateTimePicker from '@react-native-community/datetimepicker';
import React, { useState } from 'react';
import {
  Button,
  Modal,
  Platform,
  Pressable,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import { GLOBAL_COLORS } from '../../constants/global';
import { useBottomTabBarHeight } from '@react-navigation/bottom-tabs';
import { BlurView } from 'expo-blur';

const DateInputWithLabel = ({ label }) => {
  const tabBarHeight = useBottomTabBarHeight();

  const [date, setDate] = useState(new Date());
  const [mode, setMode] = useState('date');
  const [show, setShow] = useState(true);
  const [modalVisible, setModalVisible] = useState(false);

  const onChange = (event, selectedDate) => {
    const currentDate = selectedDate;
    setDate(currentDate);
  };

  const showMode = (currentMode) => {
    if (Platform.OS === 'android') {
      setShow(false);
      // for iOS, add a button that closes the picker
    }
    setMode(currentMode);
  };

  return (
    <View style={{ flex: 1 }}>
      <Text className={`text-xl font-[Inter-Bold] text-primary`}>{label}</Text>
      <Pressable
        className={`mt-3 py-4 px-5 rounded-lg bg-[#EFF3F4]`}
        onPress={() => setModalVisible(true)}
      >
        <Text
          className={`text-lg font-[Inter-Regular]`}
          style={{ lineHeight: 20 }}
        >
          {date.toLocaleDateString()}
        </Text>
      </Pressable>
      <Modal
        animationType="fade"
        transparent={true}
        su
        visible={modalVisible}
        onRequestClose={() => {
          Alert.alert('Modal has been closed.');
          setModalVisible(!modalVisible);
        }}
      >
        <BlurView
          className={`w-full h-full bg-[#00000020]`}
          tint="light"
          intensity={20}
          style={StyleSheet.absoluteFill}
        >
          <View
            style={{
              flex: 1,
              marginBottom: tabBarHeight + 20,
            }}
            className={`justify-end items-center`}
          >
            <View
              style={{
                borderRadius: 20,
                shadowColor: '#000',
                shadowOffset: {
                  width: 0,
                  height: 2,
                },
                shadowOpacity: 0.1,
                shadowRadius: 10,
                elevation: 5,
              }}
              className={`bg-white items-end p-5`}
            >
              <Pressable
                style={{
                  paddingHorizontal: 10,
                  paddingVertical: 5,
                  elevation: 2,
                }}
                onPress={() => setModalVisible(!modalVisible)}
              >
                <Text
                  className={`text-lg font-[Inter-Medium] text-accent-blue`}
                >
                  Hide
                </Text>
              </Pressable>
              {show && (
                <DateTimePicker
                  testID="dateTimePicker"
                  value={date}
                  mode={mode}
                  is24Hour={true}
                  onChange={onChange}
                  display={'inline'}
                  themeVariant={'light'}
                  accentColor={GLOBAL_COLORS['accent-blue']}
                />
              )}
            </View>
          </View>
        </BlurView>
      </Modal>
    </View>
  );
};

export default DateInputWithLabel;
