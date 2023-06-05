import React from 'react';
import { Text } from 'react-native';

const FONT_WEIGHTS_MAPPING = {
  100: 'Inter-Thin',
  200: 'Inter-ExtraLight',
  300: 'Inter-Light',
  400: 'Inter-Regular',
  500: 'Inter-Medium',
  600: 'Inter-SemiBold',
  700: 'Inter-Bold',
  800: 'Inter-ExtraBold',
  900: 'Inter-Black',
};

const BaseText = ({ fontWeight = 500, children, style, ...props }) => {
  return (
    <Text
      {...props}
      style={{ ...style, fontFamily: FONT_WEIGHTS_MAPPING[fontWeight] }}
    >
      {children}
    </Text>
  );
};

export default BaseText;
