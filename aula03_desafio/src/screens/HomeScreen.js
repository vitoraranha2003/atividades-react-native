import React from 'react'
import { View, Text, StyleSheet, TouchableOpacity, Image } from 'react-native'

const HomeScreen = ({ navigation }) => {
  const users = [
    { id: 1, name: 'Vitor Aranha', age: 21, gender: 'male' },
    { id: 2, name: 'Livia Aranha', age: 18, gender: 'female' }
  ];

  return (
    <View style={styles.container}>
      {users.map((user) => (
        <TouchableOpacity
          key={user.id}
          style={styles.userCard}
          onPress={() => navigation.navigate('Details', { user })}
        >
          <Image source={{ uri: user.imageUrl }} style={styles.userImage} />
          <Text style={styles.userName}>{user.name}</Text>
        </TouchableOpacity>
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'gray',
  },
  userCard: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#fff',
    marginVertical: 10,
    padding: 10,
    borderRadius: 5,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.22,
    shadowRadius: 2.22,
    elevation: 3,
  },
  userImage: {
    width: 50,
    height: 50,
    borderRadius: 25,
    marginRight: 10,
  },
  userName: {
    fontSize: 18,
  }
});

export default HomeScreen;