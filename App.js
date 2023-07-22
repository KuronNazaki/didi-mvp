import { StatusBar } from 'expo-status-bar';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from './screens/HomeScreen';
import PlannerScreen from './screens/PlannerScreen';
import {
  createBottomTabNavigator,
  useBottomTabBarHeight,
} from '@react-navigation/bottom-tabs';
import { BlurView } from 'expo-blur';
import { StyleSheet, Text, View } from 'react-native';
import Svg from './constants/svg';
import ProfileScreen from './screens/ProfileScreen';
import {
  GLOBAL_COLORS,
  GLOBAL_TEXT_STYLES,
  fontOffset,
} from './constants/global';
import CommunityScreen from './screens/CommunityScreen';
import SettingScreen from './screens/SettingScreen';
import GetStartedScreen from './screens/GetStartedScreen';
import LoginScreen from './screens/LoginScreen';
import SignupScreen from './screens/SignupScreen';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { createContext, useEffect, useMemo, useReducer, useState } from 'react';
import AuthContext from './misc/AuthContext';
import NavigationHeightContext from './misc/NavigationHeightContext';
import { useHeaderHeight } from '@react-navigation/elements';
import { ToastAndroid } from 'react-native';
import { BASE_URL } from './constants/api';
// import { BASE_URL } from '@env';
// console.log(process.env);

const Tab = createBottomTabNavigator();
const Stack = createNativeStackNavigator();

export default function App() {
  const [state, dispatch] = useReducer(
    (prevState, action) => {
      switch (action.type) {
        case 'RESTORE_TOKEN':
          return {
            ...prevState,
            userToken: action.token,
            isLoading: false,
            user: action.user,
          };
        case 'SIGN_IN':
          return {
            ...prevState,
            isSignout: false,
            userToken: action.token,
            user: action.user,
          };
        case 'SIGN_OUT':
          return {
            ...prevState,
            isSignout: true,
            userToken: null,
            user: null,
          };
        case 'UPDATE':
          return {
            ...prevState,
            isSignout: false,
            userToken: action.token,
            user: action.user,
          };
        case 'ERROR':
          return {
            ...prevState,
          };
      }
    },
    {
      isLoading: true,
      isSignout: false,
      userToken: null,
      user: null,
    }
  );

  useEffect(() => {
    const bootstrapAsync = async () => {
      let userToken;
      let user;
      let fetchedUser;

      try {
        userToken = await AsyncStorage.getItem('@userToken');
        user = JSON.parse(userToken);
        const promise = await fetch(`${BASE_URL}/user/${user._id}`);
        fetchedUser = await promise.json();
      } catch (exception) {
        console.log(exception);
      }

      dispatch({
        type: 'RESTORE_TOKEN',
        token: fetchedUser?._id,
        user: fetchedUser,
      });
    };

    bootstrapAsync();
  }, []);

  // useEffect(() => {
  //   authContext.reload();
  // }, [state.user, state.userToken])

  const authContext = {
    state: state,
    reload: async () => {
      const promise = await fetch(`${BASE_URL}/user/${state.userToken}`);
      const user = await promise.json();
      dispatch({
        type: 'RESTORE_TOKEN',
        token: user?._id,
        user: user,
      });
    },
    signIn: async (data) => {
      const promise = await fetch(`${BASE_URL}/user/auth`, {
        method: 'POST',
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          email: data.email,
          password: data.password,
        }),
      });
      const dataPromise = await promise.json();
      if (dataPromise) {
        await AsyncStorage.setItem('@userToken', JSON.stringify(dataPromise));
        dispatch({
          type: 'SIGN_IN',
          token: dataPromise._id,
          user: dataPromise,
        });
      } else {
        dispatch({ type: 'ERROR' });
        ToastAndroid.show('Error while login', ToastAndroid.SHORT);
      }
    },
    signOut: async () => {
      await AsyncStorage.clear();
      dispatch({ type: 'SIGN_OUT' });
    },
    signUp: async (userToken) => {
      const promise = await fetch(`${BASE_URL}/user/auth`, {
        method: 'POST',
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          email: data.email,
          password: data.password,
        }),
      });
      const dataPromise = await promise.json();
      if (dataPromise) {
        await AsyncStorage.setItem('@userToken', JSON.stringify(dataPromise));
        dispatch({
          type: 'SIGN_UP',
          token: dataPromise._id,
          user: dataPromise,
        });
      } else {
        dispatch({ type: 'ERROR' });
        ToastAndroid.show('Error while login', ToastAndroid.SHORT);
      }
      // await AsyncStorage.setItem('@userToken', JSON.stringify(data));
      // dispatch({ type: 'SIGN_IN', token: 'signup', user: data });
    },
    update: async (newData) => {
      const promise = await fetch(`${BASE_URL}/user/${state.userToken}`, {
        method: 'PUT',
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(newData),
      });
      const newUser = await promise.json();
      // console.log(newUser);
      await AsyncStorage.setItem('@userToken', JSON.stringify(newUser));
      dispatch({ type: 'UPDATE', token: newUser._id, user: newUser });
    },
  };

  return (
    <AuthContext.Provider value={authContext}>
      <NavigationContainer>
        <StatusBar style="auto" />
        {state.userToken == null ? (
          <Stack.Navigator>
            <Stack.Screen
              name="GetStarted"
              component={GetStartedScreen}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="Login"
              component={LoginScreen}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="Signup"
              component={SignupScreen}
              options={{ headerShown: false }}
            />
          </Stack.Navigator>
        ) : (
          <Tab.Navigator
            screenOptions={({ route }) => ({
              // tabBarStyle: { position: 'absolute' },
              // tabBarBackground: () => (
              //   <BlurView
              //     tint="light"
              //     intensity={80}
              //     style={{ ...StyleSheet.absoluteFill }}
              //   />
              // ),
              tabBarIcon: ({ focused, size, color }) => {
                return Svg[route.name] && Svg[route.name](size, color);
              },
              tabBarLabelStyle: {
                ...GLOBAL_TEXT_STYLES.semibold10,
                fontSize: fontOffset + 6,
              },
              tabBarActiveTintColor: GLOBAL_COLORS.ACCENT.blue100 + '99',
              tabBarInactiveTintColor: GLOBAL_COLORS.ACCENT.blue50 + '99',
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
                options={({ route }) => {
                  return {
                    title: 'Lịch trình',
                    headerBackground: () => (
                      <BlurView
                        tint="light"
                        intensity={20}
                        style={StyleSheet.absoluteFill}
                      />
                    ),
                    headerTransparent: true,
                    headerShown: false,
                    headerTitle: '',
                  };
                }}
              />
              <Tab.Screen
                name="Community"
                component={CommunityScreen}
                options={{
                  title: 'Cộng đồng',
                  headerTitle: '',
                  headerBackground: () => (
                    <BlurView
                      tint="light"
                      intensity={20}
                      style={StyleSheet.absoluteFill}
                    />
                  ),
                  headerTransparent: true,
                  headerShown: false,
                  headerTitle: '',
                }}
              />
              <Tab.Screen
                name="Setting"
                component={SettingScreen}
                options={{
                  title: 'Tuỳ chỉnh',
                  headerTitle: 'Tuỳ chỉnh',
                  headerTitleStyle: {
                    ...GLOBAL_TEXT_STYLES.semibold13,
                  },
                  // headerBackground: () => (
                  //   <BlurView
                  //     tint="light"
                  //     intensity={20}
                  //     style={StyleSheet.absoluteFill}
                  //   />
                  // ),
                  headerTransparent: true,
                  headerShown: false,
                }}
              />
            </Tab.Group>
          </Tab.Navigator>
        )}
      </NavigationContainer>
    </AuthContext.Provider>
  );
}
