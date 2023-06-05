import { StatusBar } from 'expo-status-bar';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from './screens/HomeScreen';
import PlannerScreen from './screens/PlannerScreen';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { BlurView } from 'expo-blur';
import { StyleSheet } from 'react-native';
import Svg from './constants/svg';
import ProfileScreen from './screens/ProfileScreen';
import {
  GLOBAL_COLORS,
  GLOBAL_TEXT_STYLES,
  fontOffset,
} from './constants/global';

const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <>
      <NavigationContainer>
        <StatusBar style="auto" />
        <Tab.Navigator
          screenOptions={({ route }) => ({
            tabBarStyle: { position: 'absolute' },
            tabBarBackground: () => (
              <BlurView
                tint="light"
                intensity={80}
                style={{ ...StyleSheet.absoluteFill }}
              />
            ),
            tabBarIcon: ({ focused, size, color }) => {
              return Svg[route.name] && Svg[route.name](size, color);
            },
            tabBarLabelStyle: {
              ...GLOBAL_TEXT_STYLES.semibold10,
              fontSize: fontOffset + 6,
            },
            tabBarActiveTintColor: GLOBAL_COLORS.ACCENT.blue100,
            tabBarInactiveTintColor: GLOBAL_COLORS.ACCENT.blue50,
          })}
        >
          <Tab.Group>
            <Tab.Screen
              name="Home"
              component={HomeScreen}
              options={{
                title: 'Trang chủ',
                headerTitle: '',
                headerBackground: () => (
                  <BlurView
                    tint="light"
                    intensity={20}
                    style={StyleSheet.absoluteFill}
                  />
                ),
                headerTransparent: true,
              }}
            />
            <Tab.Screen
              name="Planner"
              component={PlannerScreen}
              options={{
                title: 'Lịch trình',
                headerShown: false,
                headerTransparent: true,
                headerTitle: '',
              }}
            />
            <Tab.Screen
              name="Profile"
              component={ProfileScreen}
              options={{
                title: 'Hồ sơ',
                headerTitle: '',
                headerBackground: () => (
                  <BlurView
                    tint="light"
                    intensity={20}
                    style={StyleSheet.absoluteFill}
                  />
                ),
                headerTransparent: true,
              }}
            />
          </Tab.Group>
        </Tab.Navigator>
      </NavigationContainer>
    </>
  );
}
