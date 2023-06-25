import { useBottomTabBarHeight } from '@react-navigation/bottom-tabs';
import { useHeaderHeight } from '@react-navigation/elements';
import React from 'react';
import { Image, ScrollView, Text, View } from 'react-native';
import { GLOBAL_TEXT_STYLES } from '../../constants/global';

const uri = './../../assets/momo.jpg';
const MOMO_URI = Image.resolveAssetSource(require(uri)).uri;

const PaymentScreen = () => {
  const headerHeight = useHeaderHeight();
  const tabBarHeight = useBottomTabBarHeight();

  return (
    <View className={`w-full h-full bg-ink-white`}>
      <ScrollView className={`h-full overflow-visible`}>
        <View
          className={`h-full w-full p-5`}
          style={{
            paddingTop: headerHeight + 20,
            paddingBottom: tabBarHeight + 20,
          }}
        >
          <View className={`items-center`} style={{ rowGap: 10 }}>
            <Text
              className={`text-ink-primary text-center w-11/12`}
              style={{ ...GLOBAL_TEXT_STYLES.semibold10 }}
            >
              Hãy sử dụng mã QR bên dưới và chuyển tiền theo cú pháp sau:
            </Text>
            <Text
              className={`text-ink-primary`}
              style={{ ...GLOBAL_TEXT_STYLES.bold20, fontSize: 25 }}
            >
              [Email] Didi Premium
            </Text>
            <Text
              className={`text-ink-primary text-center w-4/5`}
              style={{ ...GLOBAL_TEXT_STYLES.regular10, fontSize: 16 }}
            >
						Sau khi chuyển tiền, hệ thống sẽ xác nhận thông tin và nâng cấp tài khoản cho bạn
            </Text>

          </View>
          <View className={`h-[600] w-full mt-5`}>
            <Image
              className={`h-full w-full`}
              source={{ uri: MOMO_URI }}
              resizeMode={'cover'}
            />
          </View>
        </View>
      </ScrollView>
    </View>
  );
};

export default PaymentScreen;
