import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import PizzaTranslator from './PizzaComponent';

export default function App() {
  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
    <Text>Hello, world!</Text>

    <PizzaTranslator></PizzaTranslator>

  </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

