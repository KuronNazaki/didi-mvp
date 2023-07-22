import { useBottomTabBarHeight } from '@react-navigation/bottom-tabs';
import React from 'react';
import { TouchableOpacity, View } from 'react-native';

const FloatingIconButton = ({ icon, onPress, padding = 20 }) => {
  const tabBarHeight = useBottomTabBarHeight();

  return (
    <View >
      <TouchableOpacity
        onPress={onPress}
        className={`rounded-full bg-accent-blue100 flex justify-center items-center`}
        activeOpacity={0.8}
        style={{
          padding: padding,
          shadowOffset: {
            width: 0,
            height: 0,
          },
          shadowRadius: 15,
          shadowOpacity: 0.15,
        }}
      >
        {icon}
      </TouchableOpacity>
    </View>
  );
};

export default FloatingIconButton;
