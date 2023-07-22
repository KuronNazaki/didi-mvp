import DatePicker from '@dietime/react-native-date-picker';
import DateTimePicker from '@react-native-community/datetimepicker';
import React, { useState } from 'react';
import {
  Alert,
  Button,
  Modal,
  Platform,
  Pressable,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import { GLOBAL_COLORS, GLOBAL_TEXT_STYLES } from '../../constants/global';
import { useBottomTabBarHeight } from '@react-navigation/bottom-tabs';
import { BlurView } from 'expo-blur';

const TextStyle = StyleSheet.create(GLOBAL_TEXT_STYLES);

const DateInputWithLabel = ({
  label,
  value,
  onValueChange,
  disabled = false,
}) => {
  const tabBarHeight = useBottomTabBarHeight();

  // const [date, setDate] = useState(value);
  const [mode, setMode] = useState('date');
  const [show, setShow] = useState(false);
  // const [modalVisible, setModalVisible] = useState(false);

  const onChange = (event, selectedDate) => {
    const currentDate = selectedDate;
    setShow(false);
    onValueChange(currentDate);
  };

  return (
    <View style={{ flex: 1 }}>
      <Text className={`text-ink-primary`} style={{ ...TextStyle.semibold15 }}>
        {label}
      </Text>
      <Pressable
        className={`mt-3 py-4 px-5 rounded-lg bg-ink-senary`}
        onPress={() => {
          if (!disabled) setShow(true);
        }}
      >
        <Text className={`text-ink-primary`} style={{ ...TextStyle.regular10 }}>
          {value.toLocaleDateString('vi-VN')}
        </Text>
      </Pressable>
      {/* <Modal
        animationType="fade"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => {
          Alert.alert('Modal has been closed.');
          setModalVisible(!modalVisible);
        }}
      > */}
      {/* <BlurView
          className={`w-full h-full bg-[#00000020]`}
          tint="light"
          intensity={20}
          style={StyleSheet.absoluteFill}
        > */}
      {/* <View
            style={{
              flex: 1,
              marginBottom: tabBarHeight + 20,
            }}
            className={`justify-end items-center`}
          > */}
      {/* <View
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
              className={`bg-ink-white items-end p-5`}
            > */}
      {/* <Pressable
                style={{
                  paddingHorizontal: 10,
                  paddingVertical: 5,
                  elevation: 2,
                }}
                onPress={() => setModalVisible(!modalVisible)}
              >
                <Text
                  className={`text-accent-blue100`}
                  style={{ ...GLOBAL_TEXT_STYLES.regular15 }}
                >
                  Hide
                </Text>
              </Pressable> */}
      {show && (
        <DateTimePicker
          testID="dateTimePicker"
          value={value}
          mode={mode}
          is24Hour={true}
          onChange={onChange}
          display={'inline'}
          themeVariant={'light'}
          accentColor={GLOBAL_COLORS.ACCENT.blue100}
          disabled={disabled}
        />
      )}
    </View>
    //     </View>
    //   </BlurView>
    // </Modal>
    // </View>
  );
};

export default DateInputWithLabel;
