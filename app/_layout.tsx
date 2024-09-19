import { Stack } from 'expo-router';
import React from 'react';
import * as QuickActions from 'expo-quick-actions';
import { useQuickActionRouting } from 'expo-quick-actions/router';
import { Platform } from 'react-native';

// SplashScreen.preventAutoHideAsync();

export default function RootLayout() {
  useQuickActionRouting();

  React.useEffect(() => {
    QuickActions.setItems([
      {
        id: '0',
        title: 'Add a plant',
        icon: Platform.OS === 'ios' ? 'symbol:leaf' : 'leaf',
        params: { href: '/new' },
      },
    ]);
  }, []);

  return (
    <Stack>
      <Stack.Screen
        name="(tabs)"
        options={{ headerShown: false, animation: 'default' }}
      />
      <Stack.Screen
        name="onboarding"
        options={{
          presentation: 'modal',
          headerShown: false,
        }}
      />
      <Stack.Screen
        name="new"
        options={{
          presentation: 'modal',
          title: 'New Plant',
        }}
      />
    </Stack>
  );
}
