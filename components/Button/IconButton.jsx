import React from 'react';
import { Text, TouchableOpacity, View } from 'react-native';
import { GLOBAL_COLORS, GLOBAL_TEXT_STYLES } from '../../constants/global';
import { LinearGradient } from 'expo-linear-gradient';

const IconButton = ({ title, onPress, icon }) => {
  return (
    <View
      style={{
        shadowOffset: {
          width: 0,
          height: 20,
        },
        shadowRadius: 10,
        shadowOpacity: 0.1,
      }}
      className={`overflow-hidden rounded-2xl`}
    >
      <TouchableOpacity
        onPress={onPress}
        className={`w-full py-8 rounded-2xl flex justify-center items-center overflow-hidden`}
        activeOpacity={0.8}
      >
        <Text
          className={`text-center text-white`}
          style={{ ...GLOBAL_TEXT_STYLES.semibold15 }}
        >
          {title}
        </Text>
        <View className={`absolute w-20 h-20 -bottom-2 right-5 opacity-50`}>
          {icon}
        </View>
      </TouchableOpacity>
      <LinearGradient
        // Background Linear Gradient
        colors={[
          GLOBAL_COLORS.GRADIENT.blue100.start,
          GLOBAL_COLORS.GRADIENT.blue100.end,
        ]}
        className={`w-full h-full absolute -z-10`}
      />
    </View>
  );
};

export default IconButton;
