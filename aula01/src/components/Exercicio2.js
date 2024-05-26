import { useState } from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';

export default function Counter() {

    const [numero,setNumero] = useState(0);

    function aumentar(){
        setNumero(numero+1);
    }

    function diminuir(){
        setNumero(numero-1);
    }

  return (
    <View style={styles.container}>
      <Text>O contador está em: {numero}</Text>
      <Button onPress={aumentar} title="Aumentar"/>
      <Button onPress={diminuir} title="Diminuir"/>
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