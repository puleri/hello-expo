import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default function App(props) {
  const randomNumbers = Array
    .from({ length: props.randomNumberCount })
    .map(() => 1 + Math.floor(10 * Math.random()));
  const target = randomNumbers
    .slice(0, props.randomNumberCount - 2)
    .reduce((acc, curr) => acc + curr, 0);

  return (
    <View style={styles.container}>
      <Text style={styles.target}>{target}</Text>
      {randomNumbers.map((randomNumber, index) =>
        <Text style={styles.choice} key={index}>{randomNumber}</Text>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'pink',
    alignItems: 'center',
    justifyContent: 'center'
  },
  target: {
    fontSize: 60,
    color: 'cornflowerblue'
  },
  choice: {
    marginTop: 60,
    fontSize: 29,
    color: 'cornflowerblue'
  }
});
