import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Ionic from 'react-native-vector-icons/Ionicons';
import Home from '../screens/Home';
import Search from '../screens/Search';
import Profile from '../screens/Profile';
import Activity from '../screens/Activity';
import Feeds from '../screens/Feeds';
import { COLORS } from '../constants/colors';


const AppNavigation = () => {
  const Stack = createNativeStackNavigator();
  const Tab = createBottomTabNavigator();

  const BottomTabScreen = () => {
    return (
      <Tab.Navigator
      initialRouteName='Profile'
        screenOptions={({route}) => ({
          tabBarHideOnKeyboard: true,
          tabBarShowLabel: false,
          headerShown: false,
          tabBarStyle: {
            height: 80,
          },

          tabBarIcon: ({focused, size, color}) => {
            let iconName;
            size = focused ? size + 8 : size + 2;
            color = COLORS.black;
            if (route.name === 'Home') {
              iconName = focused ? 'home-sharp' : 'home-outline';
            } else if (route.name === 'Search') {
              iconName = focused ? 'search-sharp' : 'search-outline';
            } else if (route.name === 'Feeds') {
              iconName = focused
                ? 'add-circle-sharp'
                : 'add-sharp';
            } else if (route.name === 'Activity') {
              iconName = focused ? 'heart-sharp' : 'heart-outline';
            } else if (route.name === 'Profile') {
              iconName = focused ? 'person-sharp' : 'person-outline';
            }

            return <Ionic name={iconName} size={size} color={color} />;
          },
        })}>
        <Tab.Screen name="Home" component={Home} />
        <Tab.Screen name="Search" component={Search} />
        <Tab.Screen name="Feeds" component={Feeds} />
        <Tab.Screen name="Activity" component={Activity} />
        <Tab.Screen name="Profile" component={Profile} />
      </Tab.Navigator>
    );
  };

  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerShown: false,
        }}>
        <Stack.Screen name="Bottom" component={BottomTabScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default AppNavigation;
