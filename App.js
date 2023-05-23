import { StatusBar } from 'expo-status-bar';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from './screens/HomeScreen';
import PlannerScreen from './screens/PlannerScreen';
import { useFonts } from 'expo-font';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { BlurView } from 'expo-blur';
import { StyleSheet } from 'react-native';
import { SvgFromUri } from 'react-native-svg';
import BoxSvg from './assets/box-1.svg';
import Svg from './constants/svg';
import ProfileScreen from './screens/ProfileScreen';

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

export default function App() {
  const [loaded] = useFonts({
    'Inter-Black': require('./assets/fonts/Inter/Inter_Black.ttf'),
    'Inter-Bold': require('./assets/fonts/Inter/Inter_Bold.ttf'),
    'Inter-ExtraBold': require('./assets/fonts/Inter/Inter_ExtraBold.ttf'),
    'Inter-ExtraLight': require('./assets/fonts/Inter/Inter_ExtraLight.ttf'),
    'Inter-Light': require('./assets/fonts/Inter/Inter_Light.ttf'),
    'Inter-Medium': require('./assets/fonts/Inter/Inter_Medium.ttf'),
    'Inter-Regular': require('./assets/fonts/Inter/Inter_Regular.ttf'),
    'Inter-SemiBold': require('./assets/fonts/Inter/Inter_SemiBold.ttf'),
    'Inter-Thin': require('./assets/fonts/Inter/Inter_Thin.ttf'),
  });

  if (!loaded) {
    return <></>;
  }

  return (
    <>
      <NavigationContainer>
        <StatusBar style="auto" />
        <Tab.Navigator
          screenOptions={({ route }) => ({
            tabBarStyle: { position: 'absolute', paddingTop: 10 },
            tabBarBackground: () => (
              <BlurView
                tint="light"
                intensity={80}
                style={StyleSheet.absoluteFill}
              />
            ),
            tabBarIcon: ({ focused, size, color }) => {
              console.log(route);
              return Svg[route.name](size, color);
            },
            tabBarLabelStyle: {
              fontSize: 14,
              fontFamily: 'Inter-SemiBold',
            },
            tabBarActiveTintColor: '#537FE7',
            tabBarInactiveTintColor: '#537FE74D',
            headerTransparent: true,
          })}
        >
          <Tab.Group>
            <Tab.Screen
              name="Home"
              component={HomeScreen}
              options={{
                headerTitle: '',
                headerBackground: () => (
                  <BlurView
                    tint="light"
                    intensity={50}
                    style={StyleSheet.absoluteFill}
                  />
                ),
              }}
            />
            <Tab.Screen
              name="Planner"
              component={PlannerScreen}
              options={{
                headerTitle: '',
                headerBackground: () => (
                  <BlurView
                    tint="light"
                    intensity={50}
                    style={
                      StyleSheet.absoluteFill
                    }
                  />
                ),
              }}
            />
            <Tab.Screen
              name="Profile"
              component={ProfileScreen}
              options={{
                headerTitle: '',
                headerBackground: () => (
                  <BlurView
                    tint="light"
                    intensity={50}
                    style={
                      StyleSheet.absoluteFill
                    }
                  />
                ),
              }}
            />
          </Tab.Group>
        </Tab.Navigator>
      </NavigationContainer>
    </>
  );
}
