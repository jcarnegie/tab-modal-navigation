# Tabs with Bottom Sheet

This makes use of two things:

1. [https://github.com/expo/router/discussions/760: shows how to hijack the tab button tap to open a modal](https://github.com/expo/router/discussions/760)
2. [https://github.com/gorhom/react-native-bottom-sheet: shows how to use the bottom sheet modal](https://gorhom.dev/react-native-bottom-sheet/)

Notes:
- Make sure to add <GestureHandlerRootView> and <BottomSheetModalProvider> to the root layout
- app/(tabs)/_layout.tsx: shows how to configure the tabs and hijack the tab button tap to open a modal
- app/(tabs)/transact: is a dummy screen that's ignored since we hijack the tab button tap to open the bottom sheet
- Bottom sheet is nested inside the tabs layout
- snapPoints are the points that the bottom sheet will snap to. Note that to set the initial snap point, you need to set the index prop to 1 (not 0)
- Changing the tab bar height in Android is discouraged, so you'll have to set styles explicitly for each tab. See app/(tabs)/_layout.tsx for more details.

To run:

```
npm install
npm run start
```
