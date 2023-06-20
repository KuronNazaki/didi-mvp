import React from 'react';
import { Text, TouchableOpacity, View } from 'react-native';
import { Image } from 'react-native';
import { GLOBAL_COLORS, GLOBAL_TEXT_STYLES } from '../../constants/global';
import StarSvg from './../../assets/star.svg';

const uri = './../../assets/avatar.png';
const DEFAULT_IMAGE = Image.resolveAssetSource(require(uri)).uri;

const PlaceCard = ({ place = {}, onPress }) => {
  const {
    name = 'N/A',
    location = 'N/A',
    openingTime = null,
    description = 'N/A',
    rating = 'N/A',
    imageUrl = DEFAULT_IMAGE,
  } = place;

  return (
    <TouchableOpacity
      className={`w-full rounded-lg bg-ink-white p-[15]`}
      style={{
        shadowOffset: {
          x: 0,
          y: 0,
        },
        shadowOpacity: 0.15,
        shadowRadius: 15,
      }}
      activeOpacity={0.8}
      onPress={onPress}
    >
      <View>
        <View className={`w-full h-[200] rounded-lg overflow-hidden`}>
          <Image
            className={`w-full h-full`}
            source={{ uri: imageUrl }}
            style={{ resizeMode: 'cover' }}
          />
        </View>
        <View className={`rounded-lg mt-3`}>
          <View className={``}>
            <View className={`w-full flex-row justify-between`}>
              <Text
                className={``}
                style={{ ...GLOBAL_TEXT_STYLES.semibold13, flexShrink: 1 }}
              >
                {name}
              </Text>
              <View
                className={`flex-row justify-end`}
                style={{ flexShrink: 0 }}
              >
                <StarSvg
                  width={15}
                  height={15}
                  color={GLOBAL_COLORS.ACCENT.yellow100}
                />
                <Text
                  className={`text-accent-yellow100`}
                  style={{ ...GLOBAL_TEXT_STYLES.semibold10 }}
                >
                  {rating}
                </Text>
              </View>
            </View>
            <Text
              style={{ ...GLOBAL_TEXT_STYLES.regular10 }}
              className={`text-ink-secondary mt-1`}
            >
              {location}
            </Text>
          </View>
          <View
            className={`w-full h-[1.5] my-3 bg-ink-senary self-center`}
          ></View>
          <View className={`flex-row`} style={{ columnGap: 4 }}>
            <Text
              style={{ ...GLOBAL_TEXT_STYLES.semibold10 }}
              className={`text-ink-secondary`}
            >
              Mở cửa
            </Text>
            <Text
              style={{ ...GLOBAL_TEXT_STYLES.regular10 }}
              className={`text-ink-secondary`}
            >
              {openingTime.close && openingTime.open
                ? `${new Date(
                    openingTime.open
                  ).toLocaleTimeString()} - ${new Date(
                    openingTime.close
                  ).toLocaleTimeString()}`
                : 'N/A'}
            </Text>
          </View>
          <Text
            className={'text-ink-secondary'}
            style={{
              marginTop: 5,
              ...GLOBAL_TEXT_STYLES.regularitalic10,
            }}
          >
            {description}
          </Text>
        </View>
      </View>
    </TouchableOpacity>
  );
};

export default PlaceCard;
