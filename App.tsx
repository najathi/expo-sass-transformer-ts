import React from 'react';
import { Text, View } from 'react-native';

// both imports are worked
// import styles from "./App.scss"; // it is not working, error occurred
const styles = require('./App.scss'); // it works fine

export default function App() {

  return (

    <View style={styles.container}>

      <Text style={styles.blue}>Open up App.tsx to start working on your app!</Text>

    </View>

  );
}