import React from 'react';
import { StyleSheet, View, ViewStyle } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

type Props = WithChildren<{
  style?: ViewStyle;
  contentStyle?: ViewStyle;
}>;

export default function Page({ children, style, contentStyle }: Props) {
  return (
    <SafeAreaView style={[styles.container, style]} edges={['top']}>
      <View style={[styles.contentStyle, contentStyle]}>{children}</View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  contentStyle: {
    flex: 1,
  },
});
