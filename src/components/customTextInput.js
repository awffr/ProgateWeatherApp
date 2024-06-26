import React from 'react'
import { TextInput, StyleSheet, View } from 'react-native'

const CustomTextInput = ({
  text,
  onChange,
  multiline = false,
  placeholder,
  numberOfLines,
}) => (
  <View style={styles.container}>
    <TextInput
      multiline={multiline}
      numberOfLines={numberOfLines}
      style={styles.input}
      placeholder={placeholder}
      placeholderTextColor="#81C784"
      onChangeText={onChange}
      defaultValue={text}
    />
  </View>
)

const styles = StyleSheet.create({
  input: {
    borderWidth: 2,
    borderColor: '#81C784', 
    padding: 10,
    fontFamily: 'monospace', 
    fontSize: 16,
    color: '#388E3C', 
    backgroundColor: '#E8F5E9', 
  },
  container: {
    marginTop: 20,
    padding: 10,
    borderRadius: 10,
    backgroundColor: '#E8F5E9', 
  },
})

export default CustomTextInput;