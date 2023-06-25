import React from 'react';
import { StyleSheet, TouchableOpacity } from 'react-native';
import { Text, View } from 'react-native';
import AwardSvg from '../../assets/award.svg';
import CrownSvg from '../../assets/crown-1.svg';
import { GLOBAL_COLORS, GLOBAL_TEXT_STYLES } from '../../constants/global';
import LineSeparator from '../Separator';
import VerifySvg from '../../assets/verify.svg';
import { BaseButton } from '../Button';

const PremiumCard = ({
  fullWidth = false,
  isPremiumCard = false,
  isCurrentPremium = false,
  onPress,
  variant = 'large',
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

  return variant === 'large' ? (
    <TouchableOpacity
      className={`${
        fullWidth ? 'w-full' : 'w-[300]'
      }  rounded-lg bg-ink-white overflow-visible`}
      activeOpacity={0.8}
      style={styles.container}
      onPress={onPress}
    >
      {isPremiumCard ? (
        <View className={`w-full p-5`}>
          <CrownSvg
            width={40}
            height={40}
            color={GLOBAL_COLORS.ACCENT.yellow100}
          />
          <Text
            style={{ ...GLOBAL_TEXT_STYLES.bold20 }}
            className={`text-accent-yellow100 mt-5`}
          >
            Cao cấp
          </Text>
          <Text
            style={{ ...GLOBAL_TEXT_STYLES.semibold10 }}
            className={`text-ink-secondary`}
          >
            Cho những người thích khám phá
          </Text>
          <LineSeparator fullWidth margin={20} />
          <Text
            style={{ ...GLOBAL_TEXT_STYLES.bold22 }}
            className={`text-ink-primary`}
          >
            54.000đ/tháng
          </Text>
          <View className={`mt-5`} style={{ rowGap: 5 }}>
            {[
              'Tất cả mọi thứ trong "Cơ bản"',
              'Tạo và sử dụng lên đến 13 lịch trình',
              'Xem chi tiết những lịch trình của người khác',
            ].map((item, index) => (
              <View
                key={index}
                className={`flex-row items-center`}
                style={{ columnGap: 5 }}
              >
                <VerifySvg
                  width={20}
                  height={20}
                  color={GLOBAL_COLORS.INK.secondary}
                />
                <Text style={{ ...GLOBAL_TEXT_STYLES.regular10 }}>{item}</Text>
              </View>
            ))}
            <View className={`mt-5`}>
              <BaseButton
                title={isCurrentPremium ? 'Đang kích hoạt' : 'Nâng cấp'}
                color={isCurrentPremium ? GLOBAL_COLORS.INK.senary : undefined}
                textColor={
                  isCurrentPremium ? GLOBAL_COLORS.INK.secondary : undefined
                }
                padding={20}
                disabled={isCurrentPremium}
                onPress={() => {
                  if (onPress) {
                    onPress();
                  }
                }}
              />
            </View>
          </View>
        </View>
      ) : (
        <View className={`w-full p-5`}>
          <AwardSvg
            width={40}
            height={40}
            color={GLOBAL_COLORS.ACCENT.blue100}
          />
          <Text
            style={{ ...GLOBAL_TEXT_STYLES.bold20 }}
            className={`text-accent-blue100 mt-5`}
          >
            Cơ bản
          </Text>
          <Text
            style={{ ...GLOBAL_TEXT_STYLES.semibold10 }}
            className={`text-ink-secondary`}
          >
            Cho tất cả mọi người
          </Text>
          <LineSeparator fullWidth margin={20} />
          <Text
            style={{ ...GLOBAL_TEXT_STYLES.bold22 }}
            className={`text-ink-primary`}
          >
            Miễn phí trọn đời
          </Text>
          <View className={`mt-5`} style={{ rowGap: 5 }}>
            {[
              'Tạo và sử dụng 3 lịch trình',
              'Chỉnh sửa lịch trình cá nhân',
              'Tham khảo lịch trình của bạn bè',
            ].map((item, index) => (
              <View
                key={index}
                className={`flex-row items-center`}
                style={{ columnGap: 5 }}
              >
                <VerifySvg
                  width={20}
                  height={20}
                  color={GLOBAL_COLORS.INK.secondary}
                />
                <Text style={{ ...GLOBAL_TEXT_STYLES.regular10 }}>{item}</Text>
              </View>
            ))}
            <View className={`mt-5`}>
              {isCurrentPremium ? (
                <></>
              ) : (
                <BaseButton
                  title={'Đang kích hoạt'}
                  color={GLOBAL_COLORS.INK.senary}
                  textColor={GLOBAL_COLORS.INK.secondary}
                  padding={20}
                  disabled
                />
              )}
            </View>
          </View>
        </View>
      )}
    </TouchableOpacity>
  ) : (
    <TouchableOpacity
      className={`${
        fullWidth ? 'w-full' : 'w-[300]'
      }  rounded-lg bg-ink-white overflow-visible`}
      activeOpacity={0.8}
      style={styles.container}
      onPress={onPress}
    >
      {isPremiumCard ? (
        <View className={`w-full p-5 flex-row justify-between`}>
          <View className={`flex-row items-center`} style={{ columnGap: 10 }}>
            <CrownSvg
              width={30}
              height={30}
              color={GLOBAL_COLORS.ACCENT.yellow100}
            />
            <View style={{ rowGap: 2 }}>
              <Text
                style={{ ...GLOBAL_TEXT_STYLES.bold20, fontSize: 24 }}
                className={`text-accent-yellow100`}
              >
                Tiết kiệm
              </Text>
              <Text
                style={{ ...GLOBAL_TEXT_STYLES.semibold10, fontSize: 16 }}
                className={`text-ink-secondary`}
              >
                Phiên bản tiêu chuẩn
              </Text>
            </View>
          </View>
          <View className={`items-end`}>
            <Text
              style={{ ...GLOBAL_TEXT_STYLES.semibold10, fontSize: 14 }}
              className={`text-ink-secondary`}
            >
              499.000đ/ mỗi 1 năm
            </Text>
            <Text
              style={{
                ...GLOBAL_TEXT_STYLES.semibold10,
                fontSize: 14,
                fontWeight: 700,
              }}
              className={`text-accent-green100`}
            >
              Tiết kiệm 23%
            </Text>
          </View>
        </View>
      ) : (
        <View className={`w-full p-5 flex-row justify-between`}>
          <View className={`flex-row items-center`} style={{ columnGap: 10 }}>
            <AwardSvg
              width={30}
              height={30}
              color={GLOBAL_COLORS.ACCENT.blue100}
            />
            <View style={{ rowGap: 2 }}>
              <Text
                style={{ ...GLOBAL_TEXT_STYLES.bold20, fontSize: 24 }}
                className={`text-accent-blue100`}
              >
                Tối ưu
              </Text>
              <Text
                style={{ ...GLOBAL_TEXT_STYLES.semibold10, fontSize: 16 }}
                className={`text-ink-secondary`}
              >
                Phiên bản cơ bản
              </Text>
            </View>
          </View>
          <Text
            style={{ ...GLOBAL_TEXT_STYLES.semibold10, fontSize: 14 }}
            className={`text-ink-secondary`}
          >
            162.000đ/mỗi 3 tháng
          </Text>
        </View>
      )}
    </TouchableOpacity>
  );
};

export default PremiumCard;
