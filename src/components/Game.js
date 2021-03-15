import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

import RandomNumber from './RandomNumber';

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
      <View style={styles.choiceContainer}>
        {randomNumbers.map((randomNumber, index) =>
          <RandomNumber key={index} number={randomNumber} />
        )}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'pink',
  },
  target: {
    fontSize: 60,
    color: 'cornflowerblue',
    textAlign: 'center',
    margin: 50
  },
  choiceContainer: {
    flex: 1,
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-around'
  },
  choice: {
    width: 100,
    textAlign: 'center',
    marginHorizontal: 15,
    marginVertical: 50,
    fontSize: 29,
    color: 'cornflowerblue',
  }
});
