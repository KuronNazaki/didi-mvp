import { Text, View, Image, StyleSheet } from "react-native";
import RouteSvg from '../../assets/route-square.svg';
import { GLOBAL_TEXT_STYLES } from '../../constants/global';

const TextStyle = StyleSheet.create(GLOBAL_TEXT_STYLES);

export default function Card({ title, place, image, time, fullWidth = false }) {
  const styles = StyleSheet.create({
    container: {
      shadowColor: '#000000',
      shadowOffset: {
        width: 0,
        height: 3,
      },
      shadowRadius: 15,
      shadowOpacity: 0.15,
    },
  });
  return (
    <View
      className={`${fullWidth ? 'w-full' : 'w-[300]'} p-[15] rounded-lg bg-white shadow-2xl mt-5 overflow-visible`}
      style={styles.container}
    >
      <Image
        source={typeof image === 'string' ? { uri: image } : image}
        style={{ width: '100%', resizeMode: 'cover' }}
        className={`rounded-lg h-[150]`}
      />
      <View className="items-center mt-[10]" style={{ flexDirection: 'row' }}>
        <Text
          className="font-semibold text-xl"
          style={{ ...TextStyle.semibold17 }}
        >
          {title}
        </Text>
        <View style={{ marginLeft: 'auto' }}>
          <View className="items-end" style={{ flexDirection: 'row' }}>
            <RouteSvg width={22} height={22} />
            <Text className="ml-1" style={{ ...TextStyle.semibold10 }}>
              {place}
            </Text>
          </View>
        </View>
      </View>
      <Text
        className="text-ink-secondary mt-[5]"
        style={{ ...TextStyle.regular10 }}
      >
        {time}
      </Text>
    </View>
  );
}
