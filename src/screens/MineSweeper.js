/* @flow */

import React from 'react';
import {Alert, View, Text, TextInput, StyleSheet } from 'react-native';
import {Button} from '../components/Button';
import Square from '../components/Square';

type Props = {};
type State = {
  showRow: boolean,
  numberOfSquares: string,
};

export default class MineSweeper extends React.Component<Props, State> {
    static navigationOptions = {
      title: 'MineSweeper',
    };

    constructor(){
      super()
    
      this.state = {
          showRow: false,
          numberOfSquares: 5,
          randomSq: 1,   
        }
    }
            
    createArray = (arraySize: number) => {
        return Array.apply(null, new Array(parseInt(arraySize))).map(Number.call, Number);
    }

    onTextChanged = (text: string) => {
      let nbr = text.replace(/[^0-9]/g, '');
      if (nbr === '') { 
        Alert.alert('MineSweeper', 'please enter numeric value')
      } else {
        this.setState({numberOfSquares: nbr});
      };
    };

    onShowPress = () => {
        const {numberOfSquares} = this.state;
        if (numberOfSquares < 5 || numberOfSquares > 25) {
            Alert.alert('MineSweeper', 'please enter a number between 5 and 25')
            this.setState({numberOfSquares: 5});
            return;
        }
        this.setState({randomSq: Math.floor(Math.random() * numberOfSquares) + 1});
        this.setState({showRow: true});
    };

    renderSquares = () => {
        const {numberOfSquares, randomSq} = this.state; 

        let squares = this.createArray(numberOfSquares);

        const displaySQs = squares.map((sq, i) => {
            const distance = (i + 1) == randomSq ? "X" : Math.abs(i - randomSq).toString();
            return (
                <Square mineDistance={distance} mine={(i + 1) == randomSq}></Square>
            );
        });

        return displaySQs;
      };
     
    render() {
        const {showRow, numberOfSquares} = this.state;
        
        return (
        <View style={styles.pageContainer}>
            {!showRow ? (
                <View>
                    <View style={styles.inputContainer}>
                        <Text style={styles.textLabel}>Squares:</Text>
                        <TextInput maxLength={3} keyboardType='numeric' style={styles.textInput} placeholder="nbr" 
                            onChangeText={(text)=> this.onTextChanged(text)}
                        />
                    </View>
                    <View style={styles.inputContainer}>
                        <Button onPress={this.onShowPress}>Play</Button>
                    </View>
                </View>
            ) : ( 
                <View style={styles.squaresContainer}>
                    {this.renderSquares()}
                </View>
            )}
        </View>
        );
  }
}

const styles = StyleSheet.create({
  pageContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  },
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    width: '90%',
  },
  textLabel: {
    width: 80,
  },
  textInput: {
    width: 30,
    borderWidth: 1,
    borderColor: 'black'
  },
  squaresContainer: {
    flex: 1,
    flexDirection: 'row',
    flexWrap: 'wrap'
  }
});
