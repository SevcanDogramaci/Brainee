import React from 'react';
import { TouchableOpacity, Text, StyleSheet } from 'react-native';
import style from '../../styles/style';

const Button = ({ onPress, title, disabled=false }) => (
  <TouchableOpacity style={[styles.button, style.button]} onPress={onPress} disabled={disabled}>
    <Text style={style.buttonText}>{title}</Text>
  </TouchableOpacity>
);

const styles = StyleSheet.create({
    button: {
      padding: 15,
      paddingHorizontal: 30,
      borderRadius: 20,
      alignItems: 'center',
    }
  });

export default Button;
