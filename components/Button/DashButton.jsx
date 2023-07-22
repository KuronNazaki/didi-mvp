import React from 'react';
import { Text, TouchableOpacity } from 'react-native';
import { GLOBAL_COLORS, GLOBAL_TEXT_STYLES } from '../../constants/global';
import AddSquareSvg from './../../assets/add-square.svg';

const DashButton = ({ title, onPress }) => {
  return (
    <TouchableOpacity
      onPress={onPress}
      className={`w-full flex-row py-4 rounded-xl bg-ink-senary flex justify-center items-center overflow-hidden`}
      activeOpacity={0.8}
      style={{
        borderStyle: 'dashed',
        borderWidth: 2,
        borderColor: GLOBAL_COLORS.INK.secondary,
        columnGap: 5,
      }}
    >
      <AddSquareSvg width={25} height={25} color={GLOBAL_COLORS.INK.secondary} />
      <Text
        className={`text-center text-ink-secondary`}
        style={{...GLOBAL_TEXT_STYLES.semibold13}}
      >
        {title}
      </Text>
    </TouchableOpacity>
  );
};

export default DashButton;
