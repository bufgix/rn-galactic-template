import React from 'react';
import { View, TouchableOpacity, Platform, StyleSheet } from 'react-native';
import { MaterialTopTabBarProps } from '@react-navigation/material-top-tabs';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { Colors, Helpers } from '@/styles';
import { User, Apps, Like, Home } from '@/components/icons';

export const TABBAR_HEIGHT = Platform.OS === 'ios' ? 90 : 60;

function TabBar({ state, descriptors, navigation }: MaterialTopTabBarProps) {
  const insets = useSafeAreaInsets();
  return (
    <View style={[styles.container, { paddingBottom: insets.bottom }]}>
      {state.routes.map((route, index) => {
        const { options } = descriptors[route.key];

        let Icon: React.ElementType = User;
        switch (route.name as keyof BottomBarProps) {
          case 'Home':
            Icon = Home;
            break;
          case 'Likes':
            Icon = Like;
            break;
          case 'Apps':
            Icon = Apps;
            break;
          case 'User':
            Icon = User;
            break;
        }

        const isFocused = state.index === index;

        const onPress = () => {
          const event = navigation.emit({
            type: 'tabPress',
            target: route.key,
            canPreventDefault: true,
          });

          if (!isFocused && !event.defaultPrevented) {
            navigation.navigate(route.name);
          }
        };

        const onLongPress = () => {
          navigation.emit({
            type: 'tabLongPress',
            target: route.key,
          });
        };

        return (
          <TouchableOpacity
            key={index}
            accessibilityRole="button"
            accessibilityState={isFocused ? { selected: true } : {}}
            accessibilityLabel={options.tabBarAccessibilityLabel}
            testID={options.tabBarTestID}
            onPress={onPress}
            onLongPress={onLongPress}
            style={styles.item}>
            {route.name === 'Arena' ? (
              <View style={styles.arenaWrapper}>
                <Icon height={30} width={30} color={Colors.White} />
              </View>
            ) : (
              <Icon
                height={24}
                width={24}
                color={isFocused ? Colors.Primary : Colors.PrimaryDisable}
              />
            )}
          </TouchableOpacity>
        );
      })}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    ...Helpers.row,
    paddingTop: Platform.OS === 'ios' ? 20 : 0,
    borderTopWidth: 1,
    borderTopColor: Colors.Dark20,
    backgroundColor: Colors.White,
    height: TABBAR_HEIGHT,
  },
  item: {
    ...Helpers.fill,
    ...Helpers.center,
  },
  arenaWrapper: {
    ...Helpers.center,
    height: 50,
    width: 50,
    backgroundColor: Colors.Primary,
    borderRadius: 99,
  },
});

export default TabBar;
