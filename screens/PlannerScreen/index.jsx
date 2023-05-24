import {
  Button,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import { useHeaderHeight } from '@react-navigation/elements';
import StyledImage from '../../components/StyledImage';
import FloatingIconButton from '../../components/Button/FloatingIconButton';
import AddItemSvg from './../../assets/additem.svg';
import ArrowLeftSvg from './../../assets/arrow-left-1.svg';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import ChooseTypeScreen from '../ChooseTypeScreen';
import { BlurView } from 'expo-blur';

const Stack = createNativeStackNavigator();

const PlannerMainScreen = ({navigation}) => {
  const headerHeight = useHeaderHeight();

  return (
    <View className={`w-full h-full`}>
      <ScrollView className={`w-full bg-white`}>
        <View
          style={{
            paddingVertical: headerHeight + 20,
            paddingHorizontal: 20,
            gap: 10,
          }}
        >
          <View className={`flex-row items-center`} style={{ columnGap: 10 }}>
            <StyledImage relativeSrc={require('./../../assets/avatar.png')} />
            <View>
              <Text
                className={`text-xl text-secondary`}
                style={{ fontFamily: 'Inter-Medium' }}
              >
                Hello, 👋
              </Text>
              <Text
                className={`text-2xl`}
                style={{ fontFamily: 'Inter-SemiBold' }}
              >
                New User
              </Text>
            </View>
          </View>
        </View>
      </ScrollView>
      <FloatingIconButton
        icon={<AddItemSvg width={40} height={40} color={'white'} />}
        onPress={() => navigation.navigate('ChooseType')}
      />
    </View>
  );
};

export default function PlannerScreen() {
  return (
    <Stack.Navigator>
      <Stack.Group
        screenOptions={{ headerTransparent: true, headerBlurEffect: true }}
      >
        <Stack.Screen
          name="PlannerMain"
          component={PlannerMainScreen}
          options={{
            headerTitle: '',
            // headerBackground: () => (
            //   <BlurView
            //     tint="light"
            //     intensity={50}
            //     style={StyleSheet.absoluteFill}
            //   />
            // ),
          }}
        />
        <Stack.Screen
          name="ChooseType"
          component={ChooseTypeScreen}
          options={({ navigation }) => ({
            headerTitle: 'Choose Type',
            headerTitleStyle: {
              fontFamily: 'Inter-Bold',
              color: '#36373B',
            },
            headerTintColor: '#537FE7',
            headerLeft: () => (
              <TouchableOpacity onPress={() => navigation.goBack()}>
                <ArrowLeftSvg width={30} height={30} color={'#537FE7'} />
              </TouchableOpacity>
            ),
          })}
        />
      </Stack.Group>
    </Stack.Navigator>
  );
}
