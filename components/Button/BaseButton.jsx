import { Text, TouchableOpacity, View } from 'react-native';

export default function BaseButton({ title, onPress }) {
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
    >
      <TouchableOpacity
        onPress={onPress}
        className={`w-full py-8 rounded-2xl bg-accent-blue flex justify-center items-center overflow-hidden`}
        activeOpacity={0.8}
      >
        <Text
          className={`text-center text-white font-bold text-xl font-[Inter-Bold]`}
        >
          {title}
        </Text>
      </TouchableOpacity>
    </View>
  );
}
