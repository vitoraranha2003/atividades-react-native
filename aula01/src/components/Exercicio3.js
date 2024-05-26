import { useState } from 'react';
import { StyleSheet, Text, View, TextInput } from 'react-native';

export default function Exercicio3() {

    const [texto,setTexto] = useState('');
    
  return (
    <View style={styles.container}>
      <TextInput
        value={texto}
        onChangeText={setTexto}
        placeholder="Digite Aqui"
        style={styles.TextInput}
      />
      <Text>Seu texto: {texto}</Text>
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
  TextInput: {
    backgroundColor: "cyan",
    borderRadius: 5,
  }
});