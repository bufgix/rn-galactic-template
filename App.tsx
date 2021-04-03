import React from 'react';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { NavigationContainer } from '@react-navigation/native';
import { RootStackScreen } from '@/navigation';

const App = () => {
  return (
    <SafeAreaProvider>
      <NavigationContainer>
        <RootStackScreen />
      </NavigationContainer>
    </SafeAreaProvider>
  );
};

export default App;
