import { StyleSheet, View } from 'react-native';

export default function Exercicio2() {
  return (
    <View style={styles.container}>
      <View style={styles.centeredBox} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  centeredBox: {
    height: 50,
    width: 50,
    backgroundColor: 'blue',
    marginBottom: "-200%"
  },
});
