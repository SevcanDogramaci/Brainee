import React, { useState } from 'react';
import { View, StyleSheet, TextInput, Keyboard } from 'react-native';
import Button from './Button';

const AnswerContainer = ({onAnswer}) => {
  const [text, setText] = useState('');
  const [disabled, setDisabled] = useState(false);

  const handleInputChange = (inputText) => {
    if (inputText != '') setText(inputText);
  };

  const handleButtonPress = () => {
    console.log('Input Text:', text);
    setDisabled(true)
    Keyboard.dismiss();
    onAnswer(text);
  };

  return (
    <View style={{marginVertical: 20, justifyContent: 'center', alignItems: 'center'}}>
        <TextInput
            style={styles.input}
            onChangeText={handleInputChange}
            value={text}
            placeholder="Write your answer"
            placeholderTextColor='#ccc'
            keyboardType='numeric'
            editable={!disabled}
        />
        <Button title="Answer" onPress={handleButtonPress} disabled={disabled}/>
    </View> 
  );
};

const styles = StyleSheet.create({
  input: {
    width: 200,
    height: 40,
    borderBottomWidth: 1,
    borderColor: '#ccc',
    borderRadius: 5,
    paddingHorizontal: 10,
    marginBottom: 20,
    textAlign: 'center',
    color: '#ccc',
    fontSize: 20,
    fontWeight: 'bold'
  },
});

export default AnswerContainer;
