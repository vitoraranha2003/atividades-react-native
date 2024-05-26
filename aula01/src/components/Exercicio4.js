import { StyleSheet, Text, View } from 'react-native';
import React from 'react';

export default function Exercicio4({itens}) {
  return (
    <View style={styles.container}>
        <Text>Itens:</Text>
      {itens.map((item, index) => (
        <Text key={index}>
          {item}
        </Text>
      ))}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  }
});