import { StatusBar, Text, View } from 'react-native';
import BaseLayout from '../../layouts/BaseLayout';
import { BaseButton } from '../../components/Button';
import { useHeaderHeight } from '@react-navigation/elements';
import StyledImage from '../../components/StyledImage';

export default function HomeScreen({ navigation }) {
  const headerHeight = useHeaderHeight();

  return (
    <View
      className={`w-full h-full p-5 bg-white`}
      style={{
        paddingTop: headerHeight + 20,
        height: '100%',
      }}
    >
      <View className={`flex-row items-center`} style={{ columnGap: 10 }}>
        <StyledImage
          relativeSrc={require('./../../assets/avatar.png')}
        />
        <View>
          <Text
            className={`text-xl text-secondary`}
            style={{ fontFamily: 'Inter-Medium' }}
          >
            Hello, 👋
          </Text>
          <Text className={`text-2xl`} style={{ fontFamily: 'Inter-SemiBold' }}>
            New User
          </Text>
        </View>
      </View>
      {/* <BaseButton
        title={'Change to Planner'}
        onPress={() => navigation.navigate('Planner')}
      /> */}
    </View>
  );
}
