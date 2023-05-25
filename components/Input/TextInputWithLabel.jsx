import React, { useState } from 'react';
import {
  Keyboard,
  Text,
  TextInput,
  TouchableWithoutFeedback,
  View,
} from 'react-native';
import DismissKeyboardView from '../DismissKeyboardView';

const TextInputWithLabel = ({ label, placeholder = '', multiline = false }) => {
  const [value, onValueChange] = useState('');

  return (
    <View style={{ flex: 1 }}>
      <Text className={`text-xl font-[Inter-Bold] text-primary`}>{label}</Text>
      <View className={`mt-3 py-4 px-5 rounded-lg bg-[#EFF3F4]`}>
        <TextInput
          value={value}
          onChangeText={onValueChange}
          placeholder={placeholder}
          keyboardType="default"
          className={`text-lg font-[Inter-Regular]`}
          style={{ lineHeight: 20 }}
          multiline={multiline}
        />
      </View>
    </View>
  );
};

export default TextInputWithLabel;
