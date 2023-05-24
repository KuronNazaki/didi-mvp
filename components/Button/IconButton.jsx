import React from 'react';
import { Text, TouchableOpacity, View } from 'react-native';

const IconButton = ({ title, onPress, icon }) => {
  return (
    <View
      style={{
        shadowOffset: {
          width: 0,
          height: 20,
        },
        shadowRadius: 10,
        shadowOpacity: 0.10,
      }}
    >
      <TouchableOpacity
        onPress={onPress}
        className={`w-full py-8 rounded-2xl bg-accent-blue flex justify-center items-center overflow-hidden`}
        activeOpacity={0.8}
      >
        <Text className={`text-center text-white font-bold text-xl font-[Inter-Bold]`}>
          {title}
        </Text>
        <View className={`absolute w-20 h-20 -bottom-2 right-5 opacity-50`}>
          {icon}
        </View>
      </TouchableOpacity>
    </View>
  );
};

export default IconButton;
