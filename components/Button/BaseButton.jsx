import { LinearGradient } from 'expo-linear-gradient';
import { Text, TouchableOpacity, View } from 'react-native';
import { GLOBAL_COLORS, GLOBAL_TEXT_STYLES } from '../../constants/global';

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
      className={`overflow-hidden rounded-2xl`}
    >
      <TouchableOpacity
        onPress={onPress}
        className={`w-full py-8 flex justify-center items-center overflow-hidden`}
        activeOpacity={0.8}
      >
        <Text
          className={`text-center text-white`}
          style={{...GLOBAL_TEXT_STYLES.semibold15}}
        >
          {title}
        </Text>
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
}
