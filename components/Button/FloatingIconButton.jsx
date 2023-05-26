import { useBottomTabBarHeight } from '@react-navigation/bottom-tabs';
import React from 'react';
import { TouchableOpacity, View } from 'react-native';

const FloatingIconButton = ({ icon, onPress, padding = 20 }) => {
  const tabBarHeight = useBottomTabBarHeight();

  return (
    <View
      style={{
        shadowOffset: {
          width: 0,
          height: 0,
        },
        shadowRadius: 15,
        shadowOpacity: 0.15,
      }}
    >
      <TouchableOpacity
        onPress={onPress}
        className={`absolute rounded-full bg-accent-blue flex justify-center items-center`}
        activeOpacity={0.8}
        style={{ bottom: tabBarHeight + 20, right: 20, padding: padding }}
      >
        {icon}
      </TouchableOpacity>
    </View>
  );
};

export default FloatingIconButton;
