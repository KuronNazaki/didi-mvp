import { Picker } from '@react-native-picker/picker';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import RNPickerSelect from 'react-native-picker-select';
import { GLOBAL_COLORS } from '../../constants/global';

const PickerWithLabel = ({ label, items, placeholder }) => {
  return (
    <View style={{ flex: 1 }}>
      <Text className={`text-xl font-[Inter-Bold] text-primary`}>{label}</Text>
      <RNPickerSelect
        style={pickerSelectStyles}
        onValueChange={(value) => console.log(value)}
        items={items}
        placeholder={placeholder}
      />
    </View>
  );
};

const pickerSelectStyles = StyleSheet.create({
  inputIOS: {
    marginTop: 12,
    backgroundColor: '#EFF3F4',
    fontSize: 18,
    paddingVertical: 16,
    paddingHorizontal: 20,
    borderRadius: 8,
    color: GLOBAL_COLORS['grey'],
    paddingRight: 30, // to ensure the text is never behind the icon
    fontFamily: 'Inter-Regular',
  },
  inputAndroid: {
    fontSize: 16,
    paddingHorizontal: 10,
    paddingVertical: 8,
    borderWidth: 0.5,
    borderColor: 'purple',
    borderRadius: 8,
    color: 'black',
    paddingRight: 30, // to ensure the text is never behind the icon
  },
});

export default PickerWithLabel;
