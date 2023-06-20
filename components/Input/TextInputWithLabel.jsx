import React, { useState } from 'react';
import {
  Keyboard,
  StyleSheet,
  Text,
  TextInput,
  TouchableWithoutFeedback,
  View,
} from 'react-native';
import { GLOBAL_TEXT_STYLES } from '../../constants/global';

const TextStyle = StyleSheet.create(GLOBAL_TEXT_STYLES);

const TextInputWithLabel = ({
  type = 'default',
  label,
  placeholder = '',
  multiline = false,
  value,
  onValueChange,
}) => {
  // const [value, onValueChange] = useState('');

  return (
    <View>
      <Text className={`text-ink-primary`} style={{ ...TextStyle.semibold15 }}>
        {label}
      </Text>
      <View className={`mt-3 py-4 px-5 rounded-lg bg-ink-senary`}>
        <TextInput
          value={value}
          onChangeText={onValueChange}
          placeholder={placeholder}
          keyboardType={type === 'email' ? 'email-address' : 'default'}
          secureTextEntry={type === 'password'}
          className={`text-ink-primary`}
          style={{ ...TextStyle.regular10 }}
          multiline={multiline}
        />
      </View>
    </View>
  );
};

export default TextInputWithLabel;
