import React, { useState } from 'react';
import {
  Keyboard,
  SafeAreaView,
  ScrollView,
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
import { BASE_URL } from '../../constants/api';

const SignupScreen = ({ navigation }) => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [retypedPassword, setRetypedPassword] = useState('');

  const onRegister = async () => {
    if (name && email && password && retypedPassword) {
      if (
        !String(email)
          .toLowerCase()
          .match(
            /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
          )
      ) {
        ToastAndroid.show('Email không hợp lệ', ToastAndroid.SHORT);
        return;
      }
      if (password === retypedPassword) {
        const promise = await fetch(`${BASE_URL}/user`, {
          method: 'POST',
          headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            name: name,
            age: null,
            gender: 'Male',
            email: email,
            password: password,
            avatar: null,
            bio: null,
            plans: [],
          }),
        });
        const result = await promise.json();
        if (result && result.id) {
          ToastAndroid.show(
            'Tài khoản của bạn đã được tạo. Hãy đăng nhập',
            ToastAndroid.SHORT
          );
          navigation.navigate('Login');
        }
      } else {
        ToastAndroid.show('Mật khẩu không khớp', ToastAndroid.SHORT);
      }
    } else {
      ToastAndroid.show(
        'Hãy điền tất cả những thông tin cần thiết',
        ToastAndroid.SHORT
      );
    }
  };

  return (
    <SafeAreaView className={`w-full h-full bg-ink-white`}>
      <TouchableWithoutFeedback onPress={Keyboard.dismiss} accessible={false}>
        <ScrollView>
          <View className={`h-full p-5`} style={{ rowGap: 40 }}>
            <View className={`mt-10`}>
              <Text
                style={{ ...GLOBAL_TEXT_STYLES.bold28 }}
                className={`w-10/12 text-ink-primary`}
              >
                Khám phá những vẻ đẹp của thế giới
              </Text>
              <Text
                style={{ ...GLOBAL_TEXT_STYLES.regular13 }}
                className={`w-8/12 text-ink-secondary mt-2`}
              >
                Cùng DiDi kiến tạo những trải nghiệm không thể nào quên.
              </Text>
            </View>
            <View style={{ rowGap: 20 }}>
              <TextInputWithLabel
                label="Tên hoặc biệt danh"
                placeholder="Nhập tên vào đây"
                value={name}
                onValueChange={setName}
              />
              <TextInputWithLabel
                label="Email"
                placeholder="Nhập email"
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
              <TextInputWithLabel
                label="Nhập lại mật khẩu"
                placeholder="Nhập lại mật khẩu"
                type={'password'}
                value={retypedPassword}
                onValueChange={setRetypedPassword}
              />
              <BaseButton title={'Đăng ký'} onPress={onRegister} />
              <View className={`w-full flex-row items-center justify-center`}>
                <Text
                  style={{ ...GLOBAL_TEXT_STYLES.regular10 }}
                  className={'text-ink-secondary'}
                >
                  Bạn đã có tài khoản?
                </Text>
                <TouchableOpacity
                  activeOpacity={0.8}
                  onPress={() => navigation.navigate('Login')}
                >
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
        </ScrollView>
      </TouchableWithoutFeedback>
    </SafeAreaView>
  );
};

export default SignupScreen;
