import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';

const DetailsScreen = ({ route }) => {
  const { user } = route.params;

  const profileImage = user.gender === 'male'
    ? require('../../assets/profile_man.png')
    : require('../../assets/profile_woman.png');

  return (
    <View style={styles.container}>
      <Image source={profileImage} style={styles.profileImage} />
      <Text style={styles.name}>Name: {user.name}</Text>
      <Text style={styles.detail}>Age: {user.age}</Text>
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
  profileImage: {
    width: 100,
    height: 100,
    borderRadius: 50,
    marginBottom: 20,
  },
  name: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  detail: {
    fontSize: 16,
  }
});

export default DetailsScreen;