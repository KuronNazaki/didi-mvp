import React from 'react';
import { ScrollView, Text, View } from 'react-native';
import { useHeaderHeight } from '@react-navigation/elements';
import { useBottomTabBarHeight } from '@react-navigation/bottom-tabs';
import PremiumCard from '../../components/PremiumCard';
import PremiumIllustration from '../../assets/premium.svg';
import { GLOBAL_COLORS, GLOBAL_TEXT_STYLES } from '../../constants/global';
import VerifySvg from '../../assets/verify.svg';
import PadlockSvg from '../../assets/padlock-f.svg';

const PremiumScreen = ({ navigation }) => {
  const headerHeight = useHeaderHeight();
  const tabBarHeight = useBottomTabBarHeight();

  return (
    <View className={`w-full h-full bg-ink-white`}>
      <ScrollView className={`h-full overflow-visible`}>
        <View
          className={'h-full w-full p-5'}
          style={{
            paddingTop: headerHeight + 20,
            paddingBottom: tabBarHeight + 20,
          }}
        >
          <View className={`items-center`}>
            <Text
              className={`w-10/12 text-center`}
              style={{ ...GLOBAL_TEXT_STYLES.semibold15 }}
            >
              Lưu lại những kỉ niệm đáng nhớ của chuyến đi cùng với DiDi 🔥
            </Text>
            <Text
              className={`text-center mt-2 text-ink-secondary`}
              style={{ ...GLOBAL_TEXT_STYLES.regular10 }}
            >
              Tìm kiếm, cập nhập và chia sẻ lịch trình.
            </Text>
            <PremiumIllustration width={300} height={300} />
            <Text
              className={`w-10/12 text-center mt-2 mb-5`}
              style={{ ...GLOBAL_TEXT_STYLES.semibold15 }}
            >
              Chọn gói giá phù hợp với bạn
            </Text>
          </View>
          <View style={{ rowGap: 20 }}>
            <PremiumCard
              fullWidth
              variant={'small'}
              onPress={() => navigation.navigate('Payment')}
            />
            <PremiumCard
              fullWidth
              isPremiumCard
              variant={'small'}
              onPress={() => navigation.navigate('Payment')}
            />
          </View>
          <View className={`w-full flex-row mt-10 rounded-md overflow-hidden`}>
            <View className={`basis-6/12 items-center`}>
              <View className={`bg-accent-blue25 w-full p-2`}>
                <Text
                  style={{ ...GLOBAL_TEXT_STYLES.semibold10 }}
                  className={`text-center`}
                >
                  Chức năng
                </Text>
              </View>
              <View className={`items-start mt-2`} style={{ rowGap: 5 }}>
                {[
                  'Truy cập offline',
                  'Xóa quảng cáo',
                  'Tệp đính kèm không giới hạn',
                  'Tự tạo template cá nhân',
                  'Ghi chú không giới hạn',
                  'Chế độ ban đêm',
                  'Đề xuất cá nhân hóa nâng cao',
                  'Hỗ trợ cộng đồng DiDi và giúp DiDi ngày càng phát triển',
                ].map((item, index) => (
                  <Text
                    key={index}
                    style={{ ...GLOBAL_TEXT_STYLES.regular10, fontSize: 15 }}
                  >
                    {item}
                  </Text>
                ))}
              </View>
            </View>
            <View className={`basis-3/12 items-center`}>
              <View className={`bg-accent-yellow25 w-full p-2`}>
                <Text
                  style={{ ...GLOBAL_TEXT_STYLES.semibold10 }}
                  className={`text-center`}
                >
                  Miễn phí
                </Text>
              </View>
              <View className={`items-center mt-2`} style={{ rowGap: 5 }}>
                {[
                  'none',
                  'none',
                  'none',
                  'checked',
                  'checked',
                  'none',
                  'none',
                  'none',
                ].map((item, index) =>
                  item === 'checked' ? (
                    <View key={index}>
                      <VerifySvg
                        width={17}
                        height={17}
                        color={GLOBAL_COLORS.ACCENT.green100}
                      />
                    </View>
                  ) : (
                    <View key={index}>
                      <PadlockSvg
                        width={16}
                        height={16}
                        color={GLOBAL_COLORS.INK.secondary}
                      />
                    </View>
                  )
                )}
              </View>
            </View>
            <View className={`basis-3/12 items-center`}>
              <View className={`bg-accent-green25 w-full p-2`}>
                <Text
                  style={{ ...GLOBAL_TEXT_STYLES.semibold10 }}
                  className={`text-center`}
                >
                  Cao cấp
                </Text>
              </View>
              <View className={`items-center mt-2`} style={{ rowGap: 5 }}>
                {[
                  'checked',
                  'checked',
                  'checked',
                  'checked',
                  'checked',
                  'checked',
                  'checked',
                  'checked',
                ].map((item, index) =>
                  item === 'checked' ? (
                    <View key={index}>
                      <VerifySvg
                        width={17}
                        height={17}
                        color={GLOBAL_COLORS.ACCENT.green100}
                      />
                    </View>
                  ) : (
                    <View className={`h-[17]`}>
                      <Text key={index}>-</Text>
                    </View>
                  )
                )}
              </View>
            </View>
          </View>
        </View>
      </ScrollView>
    </View>
  );
};

export default PremiumScreen;
