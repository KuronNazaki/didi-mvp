import React from 'react';
import {
  Button,
  Image,
  SafeAreaView,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import { BaseButton } from '../../components/Button';
import { GLOBAL_TEXT_STYLES } from '../../constants/global';

const defaultUri = '../../assets/avatar.png';
const DEFAULT_IMAGE = Image.resolveAssetSource(require(defaultUri)).uri;

const GetStartedScreen = ({ navigation }) => {
  return (
    <SafeAreaView className={`bg-ink-white`}>
      <View
        className={`p-5 h-full w-full justify-between items-center`}
        style={{ rowGap: 20 }}
      >
        <View className={`h-1/2 w-full rounded-xl overflow-hidden`}>
          <Image
            source={{ uri: 'https://res.cloudinary.com/gwatco/image/upload/dpr_auto/t_image-card/f_auto/v1685602800/new-website/static/homepage/global-travel-cover/banner.webp' }}
            resizeMode={'cover'}
            className={`h-full w-full`}
          />
        </View>
        <View className={`w-full grow justify-between items-center`}>
          <View style={{ rowGap: 10 }}>
            <Text
              style={{ ...GLOBAL_TEXT_STYLES.bold28 }}
              className={`text-center text-ink-primary`}
            >
              Thế giới đang chờ bạn khám phá
            </Text>
            <Text
              style={{ ...GLOBAL_TEXT_STYLES.regular13 }}
              className={`text-center text-ink-secondary`}
            >
              Tuổi trẻ hãy trải nghiệm cùng DiDi nào
            </Text>
          </View>
          <View
            className={`w-full items-center justify-center`}
            style={{ rowGap: 20 }}
          >
            <View className={`w-full`}>
              <BaseButton
                title={'Tham gia ngay'}
                onPress={() => navigation.navigate('Signup')}
              />
            </View>
            <View className={`w-full flex-row items-center justify-center`}>
              <Text style={{ ...GLOBAL_TEXT_STYLES.regular10 }}>
                Bạn đã có tài khoản?
              </Text>
              <TouchableOpacity activeOpacity={0.8} onPress={() => navigation.navigate('Login')}>
                <Text
                  style={{ ...GLOBAL_TEXT_STYLES.semibold10 }}
                  className={`text-accent-blue100 px-1`}
                >
                  Đăng nhập
                </Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default GetStartedScreen;
