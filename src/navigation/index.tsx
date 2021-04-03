import React from 'react';

import { createStackNavigator } from '@react-navigation/stack';
import {
  createMaterialTopTabNavigator,
  MaterialTopTabBarProps,
} from '@react-navigation/material-top-tabs';

// Views
import EditorScreen from '@/views/Editor';
import { AppsScreen, HomeScreen, UserScreen, LikesScreen } from '@/views/Main';

import { Tabbar } from '@/components';

const RootStack = createStackNavigator<RootStackProps>();
const BottomBar = createMaterialTopTabNavigator<BottomBarProps>();

export const RootStackScreen = () => {
  return (
    <RootStack.Navigator headerMode="none">
      <RootStack.Screen name="Main" component={BottomBarScreen} />
      <RootStack.Screen name="Editor" component={EditorScreen} />
    </RootStack.Navigator>
  );
};

export const BottomBarScreen = () => {
  return (
    <BottomBar.Navigator
      tabBar={(props: MaterialTopTabBarProps) => <Tabbar {...props} />}
      tabBarPosition="bottom">
      <BottomBar.Screen name="Home" component={HomeScreen} />
      <BottomBar.Screen name="Likes" component={LikesScreen} />
      <BottomBar.Screen name="Apps" component={AppsScreen} />
      <BottomBar.Screen name="User" component={UserScreen} />
    </BottomBar.Navigator>
  );
};
