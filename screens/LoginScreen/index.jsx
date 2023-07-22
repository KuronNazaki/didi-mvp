import React, { useContext, useEffect, useState } from 'react';
import {
  Keyboard,
  SafeAreaView,
  Text,
  ToastAndroid,
  TouchableOpacity,
  TouchableWithoutFeedback,
  View,
} from 'react-native';
import { TextInputWithLabel } from '../../components/Input';
import { GLOBAL_TEXT_STYLES } from '../../constants/global';
import { BaseButton } from '../../components/Button';
import LineSeparator from '../../components/Separator';
import AsyncStorage from '@react-native-async-storage/async-storage';
import AuthContext, { useAuthContext } from '../../misc/AuthContext';
import { BASE_URL } from '../../constants/api';

const LoginScreen = ({ navigation }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const { signIn } = useAuthContext();

  const onSignIn = async () => {
    if (!(email && password)) {
      ToastAndroid.show(
        'Hãy điền tất cả những thông tin cần thiết',
        ToastAndroid.SHORT
      );
    } else {
      if (
        !String(email)
          .toLowerCase()
          .match(
            /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
          )
      ) {
        ToastAndroid.show('Email không hợp lệ', ToastAndroid.SHORT);
      } else {
        await signIn({
          email: email,
          password: password,
        });
      }
    }
  };

  return (
    <SafeAreaView className={`w-full h-full bg-ink-white`}>
      <TouchableWithoutFeedback onPress={Keyboard.dismiss} accessible={false}>
        <View className={`h-full p-5`} style={{ rowGap: 40 }}>
          <View className={`mt-10 items-center`}>
            <Text
              style={{ ...GLOBAL_TEXT_STYLES.bold28 }}
              className={`text-ink-primary`}
            >
              Chào mừng quay lại
            </Text>
            <Text
              style={{ ...GLOBAL_TEXT_STYLES.regular13 }}
              className={`text-ink-secondary mt-2 text-center`}
            >
              Tiếp tục lên lịch cho chuyến đi tiếp theo nào
            </Text>
          </View>
          <View style={{ rowGap: 20 }}>
            <TextInputWithLabel
              label="Email"
              placeholder="jane.doe@gmail.com"
              value={email}
              onValueChange={setEmail}
              type={'email'}
            />
            <TextInputWithLabel
              label="Mật khẩu"
              placeholder="Mật khẩu"
              type={'password'}
              value={password}
              onValueChange={setPassword}
            />
            <BaseButton title={'Đăng nhập'} onPress={onSignIn} />
            <View className={`w-full flex-row items-center justify-center`}>
              <Text
                style={{ ...GLOBAL_TEXT_STYLES.regular10 }}
                className={'text-ink-secondary'}
              >
                Quên mật khẩu?
              </Text>
              <TouchableOpacity activeOpacity={0.8}>
                <Text
                  style={{ ...GLOBAL_TEXT_STYLES.semibold10 }}
                  className={`text-accent-blue100 px-1`}
                >
                  Lấy lại mật khẩu
                </Text>
              </TouchableOpacity>
            </View>
            <LineSeparator />
            <View className={`w-full flex-row items-center justify-center`}>
              <Text
                style={{ ...GLOBAL_TEXT_STYLES.regular10 }}
                className={'text-ink-secondary'}
              >
                Bạn chưa có tài khoản?
              </Text>
              <TouchableOpacity
                onPress={() => navigation.navigate('Signup')}
                activeOpacity={0.8}
              >
                <Text
                  style={{ ...GLOBAL_TEXT_STYLES.semibold10 }}
                  className={`text-accent-blue100 px-1`}
                >
                  Đăng ký ngay
                </Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </TouchableWithoutFeedback>
    </SafeAreaView>
  );
};

export default LoginScreen;
