import { DarkTheme, DefaultTheme, ThemeProvider } from '@react-navigation/native';
import { useFonts } from 'expo-font';
import { Slot, Stack } from 'expo-router';
import * as SplashScreen from 'expo-splash-screen';
import { useEffect } from 'react';
import 'react-native-reanimated';

import { useColorScheme } from '@/hooks/useColorScheme';

// Prevent the splash screen from auto-hiding before asset loading is complete.
SplashScreen.preventAutoHideAsync();

 const  RootLayout = () =>  {
  const colorScheme = useColorScheme();
  
  const [fontsLoaded, error] = useFonts({
    "Poppins-Black": require("../assets/fonts/fonts/Poppins-Black.ttf"),
    "Poppins-Bold": require("../assets/fonts/fonts/Poppins-Bold.ttf"),
    "Poppins-ExtraBold": require("../assets/fonts/fonts/Poppins-ExtraBold.ttf"),
    "Poppins-ExtraLight": require("../assets/fonts/fonts/Poppins-ExtraLight.ttf"),
    "Poppins-Light": require("../assets/fonts/fonts/Poppins-Light.ttf"),
    "Poppins-Medium": require("../assets/fonts/fonts/Poppins-Medium.ttf"),
    "Poppins-Regular": require("../assets/fonts/fonts/Poppins-Regular.ttf"),
    "Poppins-SemiBold": require("../assets/fonts/fonts/Poppins-SemiBold.ttf"),
    "Poppins-Thin": require("../assets/fonts/fonts/Poppins-Thin.ttf"),
  });

  useEffect(() => {
    if (error) throw error;

    if (fontsLoaded) {
      SplashScreen.hideAsync();
    }
  }, [fontsLoaded, error]);

  if (!fontsLoaded) {
    return null;
  }

  if (!fontsLoaded && !error) {
    return null;
  }

  return (
    <Slot/>
  );
}

export default RootLayout;
