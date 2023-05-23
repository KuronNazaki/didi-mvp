import { Text, TouchableOpacity } from 'react-native';

export default function BaseButton({ title, onPress }) {
  return (
    <TouchableOpacity
      onPress={onPress}
      className={`w-full py-6 rounded-2xl bg-accent-blue flex justify-center items-center`}
			activeOpacity={0.8}
    >
      <Text className={`text-center text-white font-bold text-xl`}>{title}</Text>
    </TouchableOpacity>
  );
}