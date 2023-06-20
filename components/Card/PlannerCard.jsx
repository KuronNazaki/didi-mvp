import React from 'react';
import LineSeparator from '../Separator';
import { GLOBAL_COLORS, GLOBAL_TEXT_STYLES } from '../../constants/global';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { Image } from 'react-native';
import RouteSvg from '../../assets/route-square.svg';
import LocationSvg from '../../assets/location.svg';
import FullEditSvg from '../../assets/edit.svg';
import { LinearGradient } from 'expo-linear-gradient';

const defaultUri = '../../assets/avatar.png';
const DEFAULT_IMAGE = Image.resolveAssetSource(require(defaultUri)).uri;

const PlannerCard = ({
  title,
  location,
  image,
  startDate,
  endDate,
  fullWidth = false,
  description,
  onPress,
  isIncludedInPost = false,
}) => {
  const styles = StyleSheet.create({
    container: {
      shadowColor: '#000000',
      shadowOffset: {
        width: 0,
        height: 3,
      },
      shadowRadius: 10,
      shadowOpacity: 0.1,
    },
  });

  return (
    <TouchableOpacity
      className={`${fullWidth ? 'w-full' : 'w-[300]'}  rounded-lg ${
        isIncludedInPost ? '' : 'bg-ink-white'
      } overflow-visible`}
      activeOpacity={0.8}
      style={styles.container}
      onPress={onPress}
    >
      <View className={`p-[15] bg-transparent`}>
        <Image
          source={
            image
              ? typeof image === 'string'
                ? { uri: image }
                : image
              : { uri: DEFAULT_IMAGE }
          }
          style={{ width: '100%', resizeMode: 'cover' }}
          className={`rounded-lg h-[150]`}
        />
        <View className="items-center mt-[10]" style={{ flexDirection: 'row' }}>
          <Text
            className={`${
              isIncludedInPost ? 'text-ink-white' : 'text-ink-primary'
            }`}
            style={{ ...GLOBAL_TEXT_STYLES.semibold17 }}
          >
            {title}
          </Text>
          {/* <View style={{ marginLeft: 'auto' }}>
          <View className="items-end" style={{ flexDirection: 'row' }}>
            <RouteSvg width={22} height={22} />
            <Text className="ml-1" style={{ ...GLOBAL_TEXT_STYLES.semibold10 }}>
              {location}
            </Text>
          </View>
        </View> */}
        </View>
        <Text
          className={`${
            isIncludedInPost
              ? 'text-ink-white opacity-75'
              : 'text-ink-secondary'
          } mt-[5]`}
          style={{ ...GLOBAL_TEXT_STYLES.regular10 }}
        >
          {`${startDate.toLocaleDateString()} - ${endDate.toLocaleDateString()}`}
        </Text>
        <LineSeparator
          color={
            isIncludedInPost ? 'bg-ink-white opacity-50' : 'bg-ink-quinary'
          }
          fullWidth
          strokeWidth={1}
        />
        <View style={{ rowGap: '10%' }} className={`w-full`}>
          <View
            className={`w-full flex-row items-center`}
            style={{ columnGap: '10%' }}
          >
            <LocationSvg
              width={22}
              height={22}
              color={
                isIncludedInPost
                  ? GLOBAL_COLORS.INK.white + '75'
                  : GLOBAL_COLORS.INK.primary
              }
            />
            <Text
              style={{ ...GLOBAL_TEXT_STYLES.regular10 }}
              className={`${
                isIncludedInPost
                  ? 'text-ink-white opacity-75'
                  : 'text-ink-secondary'
              }`}
            >
              {location}
            </Text>
          </View>
          <View
            className={`w-full flex-row items-start`}
            style={{ columnGap: '10%' }}
          >
            <FullEditSvg
              width={22}
              height={22}
              color={
                isIncludedInPost
                  ? GLOBAL_COLORS.INK.white + '75'
                  : GLOBAL_COLORS.INK.primary
              }
            />
            <Text
              style={{
                ...GLOBAL_TEXT_STYLES.regular10,
              }}
              className={`w-11/12 ${
                isIncludedInPost
                  ? 'text-ink-white opacity-75'
                  : 'text-ink-secondary'
              }`}
            >
              {description}
            </Text>
          </View>
        </View>
      </View>
      {isIncludedInPost && (
        <View
          className={`w-full h-full rounded-lg overflow-hidden absolute -z-10`}
        >
          <LinearGradient
            colors={[
              GLOBAL_COLORS.GRADIENT.darkblue100.start,
              GLOBAL_COLORS.GRADIENT.darkblue100.end,
            ]}
            className={`w-full h-full`}
          />
        </View>
      )}
    </TouchableOpacity>
  );
};

export default PlannerCard;
