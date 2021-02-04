import React, { useState } from 'react';
import { Button, Text, View } from 'react-native';
import AppLoading from 'expo-app-loading';
import * as Font from 'expo-font';
import * as SplashScreen from "expo-splash-screen";

import styles from "./App.scss";

const fetchFonts = async () => {

  try {
    await SplashScreen.preventAutoHideAsync();

    return await Font.loadAsync({
      'MontserratRegular': require("./src/assets/fonts/Montserrat-Regular.otf"),
      'MontserratLight': require("./src/assets/fonts/Montserrat-Light.otf"),
      'MontserratSemiBold': require("./src/assets/fonts/Montserrat-SemiBold.otf"),
      'MontserratBold': require("./src/assets/fonts/Montserrat-Bold.otf"),
    });

  } catch (e) {
    console.warn(e);
    await SplashScreen.hideAsync();
  }
}


export default function App() {

  const [fontLoaded, setFontLoaded] = useState(false);

  const [defaultBackground, setDefaultBackGround] = useState(true);

  if (!fontLoaded) {

    return <AppLoading
      startAsync={fetchFonts}
      onFinish={() => {
        setFontLoaded(true);
      }}
      onError={console.warn}
    />

  }

  const classes: any = [styles.container];

  if (!defaultBackground) {
    classes.push(styles['containerAlt']);
  }

  return (

    <View className={classes}>

      <Text className={styles.text}>Open up App.tsx</Text>

      <Text className={styles.textAlt}>start working on your app!</Text>

      <Button title="Change BG" onPress={() => setDefaultBackGround(prevSate => !prevSate)} />

    </View>

  );
}