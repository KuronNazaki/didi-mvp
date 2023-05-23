import { useHeaderHeight } from '@react-navigation/elements';
import React from 'react';
import { Text } from 'react-native';

const ProfileScreen = () => {
  const headerHeight = useHeaderHeight();

  return (
    <Text
      style={{
        paddingVertical: headerHeight + 20,
        paddingHorizontal: 20,
        gap: 10,
      }}
    >
      ProfileScreen
    </Text>
  );
};

export default ProfileScreen;
