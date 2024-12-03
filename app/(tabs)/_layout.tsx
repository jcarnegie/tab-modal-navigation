import { Tabs } from 'expo-router';
import React, { useRef } from 'react';
import { Platform, Text, StyleSheet } from 'react-native';
import {
  BottomSheetModal,
  BottomSheetView,
} from '@gorhom/bottom-sheet';
import { FontAwesome6 } from '@expo/vector-icons';

import { HapticTab } from '@/components/HapticTab';
import { IconSymbol } from '@/components/ui/IconSymbol';
import TabBarBackground from '@/components/ui/TabBarBackground';
import { Colors } from '@/constants/Colors';
import { useColorScheme } from '@/hooks/useColorScheme';

export default function TabLayout() {
  const bottomSheetModalRef = useRef<BottomSheetModal>(null);
  const colorScheme = useColorScheme();

  return (
    <>
      <BottomSheetModal
        index={1}
        ref={bottomSheetModalRef}
        snapPoints={['33%']}
      >
        <BottomSheetView style={styles.contentContainer}>
          <Text>Awesome 🎉</Text>
        </BottomSheetView>
      </BottomSheetModal>
      <Tabs
        screenOptions={{
          tabBarActiveTintColor: Colors[colorScheme ?? 'light'].tint,
          headerShown: false,
          tabBarButton: HapticTab,
          tabBarBackground: TabBarBackground,
          tabBarStyle: Platform.select({
            android: {
              height: 60,
            },
            ios: {
              // Use a transparent background on iOS to show the blur effect
              position: 'absolute',
            },
            default: {},
          }),
        }}>
        <Tabs.Screen
          name="index"
          options={{
            title: 'Home',
            tabBarIcon: ({ color }) => <IconSymbol size={28} name="house.fill" color={color} />,
            tabBarItemStyle: { paddingTop: 10 },
          }}
        />
        <Tabs.Screen
          name="transact"
          listeners={{
            tabPress: (e) => {
              e.preventDefault();
              bottomSheetModalRef.current?.present();
            },
          }}
          options={{
            tabBarIcon: ({ color }) => <FontAwesome6 size={45} name="gear" color={color} />,
            tabBarIconStyle: { height: 60, width: 60 },
            title: "",
          }}
        />
        <Tabs.Screen
          name="explore"
          options={{
            title: 'Explore',
            tabBarIcon: ({ color }) => <IconSymbol size={28} name="paperplane.fill" color={color} />,
            tabBarItemStyle: { paddingTop: 10 },
          }}
        />
      </Tabs>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    flex: 1,
    padding: 24,
    justifyContent: 'center',
    backgroundColor: 'grey',
  },
  contentContainer: {
    flex: 1,
    alignItems: 'center',
  },
});