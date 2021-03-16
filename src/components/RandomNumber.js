import React from 'react';
import { Text, TouchableOpacity, StyleSheet } from 'react-native';

// TouchableOpacity
// TouchableHighlight

class RandomNumber extends React.Component {
  handlePress = () => {
    console.log('hello')
    // e.preventDefault();
    // Commenting the line below this fixes the number refresh.
    this.props.onPress(this.props.id);
  }
  render() {
    return (
      <TouchableOpacity onPress={this.handlePress}>
        <Text style={[styles.choice, this.props.isSelected && styles.selected]}>{this.props.number}</Text>
      </TouchableOpacity>
    );
  }
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
  },
  selected: {
    opacity: 0.3
  }
});

export default RandomNumber;
