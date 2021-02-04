import React, { useState } from 'react';
import { Text, View } from 'react-native';
import AppLoading from 'expo-app-loading';
import * as Font from 'expo-font';
import * as SplashScreen from "expo-splash-screen";

import styles from "./App.scss";

const fetchFonts = async () => {
  return await Font.loadAsync({
    'MontserratRegular': require("./src/assets/fonts/Montserrat-Regular.otf"),
    'MontserratLight': require("./src/assets/fonts/Montserrat-Light.otf"),
    'MontserratSemiBold': require("./src/assets/fonts/Montserrat-SemiBold.otf"),
    'MontserratBold': require("./src/assets/fonts/Montserrat-Bold.otf"),
  });
}


export default function App() {

  const [fontLoaded, setFontLoaded] = useState(false);

  SplashScreen.preventAutoHideAsync().catch(console.warn);

  if (!fontLoaded) {

    return <AppLoading
      startAsync={fetchFonts}
      onFinish={() => {
        setFontLoaded(true);
      }}
      onError={console.warn}
    />

  }

  return (

    <View className={styles.container}>

      <Text className={styles.text}>Open up App.tsx to start working on your app!</Text>

      <Text className={styles.textAlt}>Open up App.tsx to start working on your app!</Text>

    </View>

  );
}