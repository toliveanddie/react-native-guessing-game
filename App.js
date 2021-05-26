import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, Button, TextInput, TouchableOpacity, ScrollView, SafeAreaView } from 'react-native';

export default function App() {

  return (
    <View style={styles.container}>
      <Text style={styles.text}>Welcome to the Game!</Text>
      <Text style={styles.text}>Pick a number from 1 - 10</Text>
      <Myinputs />
    </View>
  );
}

const rando = Math.floor(Math.random() * 10) + 1;

class Myinputs extends React.Component {
  constructor() {
    super();
    this.state = {
      guess: null,
      result: '',
      random: rando
    };
  }

  pressHandler = () => {
    var rand = Math.floor(Math.random() * 10) + 1;
    this.setState({random: rand});
  }

  clickHandler = () => {
    var g = this.state.guess;
    var r = this.state.random;
    if (g == r) {
      this.setState({result: g + " is Correct!"});
    } else if (g > rando) {
      this.setState({result: g + " is too high, try again"});
    } else {
      this.setState({result: g + ' is too low, try again'});
    }
  }

  render() {
    var number;
    return(
      <View>
        <TextInput style={styles.inputs} onChangeText={(text) => this.setState({guess: text})} />
        <Button title={'Enter'} onPress={this.clickHandler} />
        <Text style={styles.result}>{this.state.result}</Text>
        <TouchableOpacity style={styles.newNumber} onPress={this.pressHandler}>
          <Text style={styles.text}>Pick a new Number</Text>
        </TouchableOpacity>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  inputs: {
    borderColor: 'black',
    margin: 10,
    height: 50,
    borderWidth: 2,
    textAlign: 'center',
    fontSize: 20,
  },
  text: {
    fontSize: 30,
    textAlign: 'center',
  },
  result:{
    fontSize: 30,
    color: 'red',
    paddingTop: 30,
  },
  newNumber: {
    backgroundColor: 'green',
    padding: 10,
    fontSize: 20,
  },
});
