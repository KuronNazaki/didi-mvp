import { LinearGradient } from 'expo-linear-gradient';
import { Text, TouchableOpacity, View } from 'react-native';
import { GLOBAL_COLORS, GLOBAL_TEXT_STYLES } from '../../constants/global';

export default function BaseButton({
  title,
  onPress,
  padding = 32,
  color = 'transparent',
  textColor = 'white',
  disabled = false,
  variant = 'blue100',
  icon,
}) {
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
        onPress={disabled ? () => {} : onPress}
        className={`w-full flex justify-center items-center overflow-hidden`}
        activeOpacity={disabled ? 1 : 0.8}
        style={{
          backgroundColor: color,
          paddingVertical: padding,
        }}
      >
        <Text
          className={`text-center`}
          style={{ ...GLOBAL_TEXT_STYLES.semibold15, color: textColor }}
        >
          {title}
        </Text>
      </TouchableOpacity>
      {color === 'transparent' ? (
        <LinearGradient
          // Background Linear Gradient
          colors={[
            GLOBAL_COLORS.GRADIENT[variant].start,
            GLOBAL_COLORS.GRADIENT[variant].end,
          ]}
          className={`w-full h-full absolute -z-10`}
        />
      ) : (
        <></>
      )}
      <View className={`absolute -bottom-2 -right-2 opacity-50 -z-[5]`}>{icon}</View>
    </View>
  );
}
