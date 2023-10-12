import React from 'react';
import Position from './screens/Position';
import { View, StyleSheet, Text } from 'react-native';

// the main component of the application
export default function App() {
  return (
    <View style={styles.container}>
      <Text style={styles.heading}>Current weather</Text>
      <Position />
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
  heading: {
      fontWeight: 'bold',
      marginTop: 50,
  }
});