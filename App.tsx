import React from 'react';
import { Text, View } from 'react-native';

// both imports are worked
import styles from "./App.scss";
// const styles = require('./App.scss');

export default function App() {

  return (

    <View className={styles.container}>

      <Text className={styles.text}>Open up App.tsx to start working on your app!</Text>

    </View>

  );
}