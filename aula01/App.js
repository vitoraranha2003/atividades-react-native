import { StyleSheet, View } from 'react-native';
import Exercicio1 from './src/components/Exercicio1';
import Counter from './src/components/Exercicio2';
import Exercicio3 from './src/components/Exercicio3';
import Exercicio4 from './src/components/Exercicio4';

export default function App() {

  const itens = ['Computador', 'Mouse', 'Teclado', 'CPU'];
  
  return (
    <View style={styles.container}>
      <Exercicio1 nome="Vitor"/>
      <Counter/>
      <Exercicio3/>
      <Exercicio4 itens={itens}/>
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