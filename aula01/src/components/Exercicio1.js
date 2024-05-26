import { StyleSheet, Text, View } from 'react-native';

export default function Exercicio1({nome}) {
  return (
    <View style={styles.container}>
      <Text>Olá, {nome}!</Text>
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