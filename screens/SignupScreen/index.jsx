import React, { useState } from 'react';
import {
  Keyboard,
  SafeAreaView,
  Text,
  TouchableOpacity,
  TouchableWithoutFeedback,
  View,
} from 'react-native';
import { TextInputWithLabel } from '../../components/Input';
import { GLOBAL_TEXT_STYLES } from '../../constants/global';
import { BaseButton } from '../../components/Button';
import LineSeparator from '../../components/Separator';

const SignupScreen = ({ navigation }) => {
	const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
	const [retypedPassword, setRetypedPassword] = useState('');

  return (
    <SafeAreaView className={`w-full h-full bg-ink-white`}>
      <TouchableWithoutFeedback onPress={Keyboard.dismiss} accessible={false}>
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
              placeholder="Lê Trần Hữu Phước"
              value={name}
              onValueChange={setName}
            />
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
            <TextInputWithLabel
              label="Nhập lại mật khẩu"
              placeholder="Nhập lại mật khẩu"
              type={'password'}
              value={retypedPassword}
              onValueChange={setRetypedPassword}
            />
            <BaseButton title={'Đăng ký'} />
						<View className={`w-full flex-row items-center justify-center`}>
              <Text style={{ ...GLOBAL_TEXT_STYLES.regular10 }} className={'text-ink-secondary'}>
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
      </TouchableWithoutFeedback>
    </SafeAreaView>
  );
};

export default SignupScreen;