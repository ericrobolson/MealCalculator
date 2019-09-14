import React, { Component } from 'react';
import { Text, TextInput, View } from 'react-native';

export default class PizzaTranslator extends Component {
  constructor(props) {
    super(props);
    this.state = { myNum: '' };
  }
  render() {
    return (
    <View  style={{ flexDirection: 'row' }}>        
      <TextInput 
      keyboardType='number-pad' 
      placeholder="Enter in weight for today" 
      onChangeText={(text) => this.onTextChanged(text)}
      value={this.state.myNum} 
      />
      
      <Text> lbs</Text>
    </View>
    );
  }

  onTextChanged(text: string){
    //TODO: strip out non characters and convert to number?

    this.setState({ myNum: text });
    } 
}

