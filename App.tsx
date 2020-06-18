import React, { useState } from 'react';
import { Text, View } from 'react-native';
import { AppLoading } from 'expo';
import * as Font from 'expo-font';

// both imports are worked
import styles from "./App.scss";
// const styles = require('./App.scss');

const fetchFonts = () => {
  return Font.loadAsync({
    'MontserratRegular': require("./src/assets/fonts/Montserrat-Regular.otf"),
    'MontserratLight': require("./src/assets/fonts/Montserrat-Light.otf"),
    'MontserratSemiBold': require("./src/assets/fonts/Montserrat-SemiBold.otf"),
    'MontserratBold': require("./src/assets/fonts/Montserrat-Bold.otf"),
  });
}

export default function App() {

  const [fontLoaded, setFontLoaded] = useState(false);

  if (!fontLoaded) {

    return <AppLoading startAsync={fetchFonts} onFinish={() => {

      setFontLoaded(true);

    }} />

  }

  return (

    <View className={styles.container}>

      <Text className={styles.blue}>Open up App.tsx to start working on your app!</Text>

    </View>

  );
}