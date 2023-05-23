import { Text, View, StyleSheet } from 'react-native';

export default function Header({ title, leftIcon }) {
  return (
    <View className={`w-full p-3 justify-between items-center flex-row`}>
      <View className={`flex-1`}>{leftIcon}</View>
      <Text className={`font-bold text-2xl flex-2 text-primary`}>{title}</Text>
      <View className={`basis-1/3 flex-1`}></View>
    </View>
  );
}
