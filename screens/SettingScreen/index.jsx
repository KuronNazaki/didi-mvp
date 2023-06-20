import { useHeaderHeight } from '@react-navigation/elements';
import React, { useContext } from 'react';
import { ScrollView, Text, TouchableOpacity, View } from 'react-native';
import { BaseButton } from '../../components/Button';
import AuthContext, { useAuthContext } from '../../misc/AuthContext';
import LogoutSvg from '../../assets/logout.svg';
import { GLOBAL_COLORS, GLOBAL_TEXT_STYLES } from '../../constants/global';

const SettingScreen = () => {
  const headerHeight = useHeaderHeight();
  const { signOut } = useAuthContext();

  return (
    <View className={`p-5`} style={{ paddingTop: headerHeight + 20 }}>
      <TouchableOpacity
        className={`flex-row items-center`}
        style={{ columnGap: 20 }}
        activeOpacity={0.8}
        onPress={() => signOut()}
      >
        <LogoutSvg width={30} height={30} color={GLOBAL_COLORS.INK.primary} />
        <Text style={{ ...GLOBAL_TEXT_STYLES.semibold13 }} className={`text-ink-primary`}>Đăng xuất</Text>
      </TouchableOpacity>
    </View>
  );
};

export default SettingScreen;
