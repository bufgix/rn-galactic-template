import type { NavigatorScreenParams } from '@react-navigation/native';

declare global {
  // Navigaiton props
  type RootStackProps = {
    Main: NavigatorScreenParams<BottomBarProps>;
    Editor: undefined;
  };

  type BottomBarProps = {
    Home: undefined;
    Likes: undefined;
    Apps: undefined;
    User: undefined;
  };

  type WithChildren<T = {}> = T & { children?: React.ReactNode };
}
