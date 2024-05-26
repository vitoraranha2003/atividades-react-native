import { StyleSheet, View } from 'react-native';

export default function Exercicio1() {
  return (
    <View style={styles.container}>
      <View style={[styles.box, {backgroundColor:'black'},{flexDirection:'column'}]}/>
      <View style={[styles.box, {backgroundColor:'red'},{flexDirection:'column'}]}/>
      <View style={[styles.box, {backgroundColor:'yellow'},{flexDirection:'column'}]}/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  box: {
    height: 100,
    width: "100%"
  }
});