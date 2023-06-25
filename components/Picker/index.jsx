import { Picker } from '@react-native-picker/picker';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import RNPickerSelect from 'react-native-picker-select';
import { GLOBAL_COLORS, GLOBAL_TEXT_STYLES } from '../../constants/global';

const TextStyle = StyleSheet.create(GLOBAL_TEXT_STYLES);

const PickerWithLabel = ({ label, items, placeholder, value , onValueChange}) => {
  return (
    <View style={{ flex: 1 }}>
      <Text className={`text-ink-primary`} style={{ ...TextStyle.semibold15 }}>
        {label}
      </Text>
      <RNPickerSelect
        value={value}
        style={pickerSelectStyles}
        onValueChange={onValueChange}
        items={items}
        placeholder={placeholder}
      />
    </View>
  );
};

const pickerSelectStyles = StyleSheet.create({
  inputIOS: {
    marginTop: 12,
    backgroundColor: GLOBAL_COLORS.INK.senary,
    paddingVertical: 16,
    paddingHorizontal: 20,
    borderRadius: 8,
    color: GLOBAL_COLORS.INK.primary,
    paddingRight: 30, // to ensure the text is never behind the icon
    ...GLOBAL_TEXT_STYLES.regular10,
  },
  inputAndroid: {
    ...GLOBAL_TEXT_STYLES.regular10,
    paddingHorizontal: 10,
    paddingVertical: 8,
    borderWidth: 0.5,
    borderColor: 'purple',
    borderRadius: 8,
    color: GLOBAL_COLORS.INK.primary,
    paddingRight: 30, // to ensure the text is never behind the icon
  },
});

export default PickerWithLabel;
