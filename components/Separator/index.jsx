import React from 'react';
import { View } from 'react-native';

const LineSeparator = ({
  margin = 10,
  fullWidth = false,
  color = 'bg-ink-senary',
  strokeWidth = 1.5,
}) => {
  return (
    <View
      className={`${fullWidth ? 'w-full' : 'w-11/12'} ${color} self-center`}
      style={{ marginVertical: margin, height: strokeWidth }}
    ></View>
  );
};

export default LineSeparator;
