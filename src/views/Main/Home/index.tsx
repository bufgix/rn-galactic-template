import React from 'react';
import { Text } from 'react-native';
import { Page } from '@/components';
import { useStatusBar } from '@/utils/hooks';

export default function Index() {
  useStatusBar('dark-content', true);
  return (
    <Page>
      <Text>Home</Text>
      <Text>Bottom</Text>
    </Page>
  );
}
