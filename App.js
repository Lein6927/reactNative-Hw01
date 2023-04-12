import React, { useState } from 'react';
import { View, Text, TextInput, StyleSheet,TouchableOpacity } from 'react-native';
//import { Button } from 'react-native-web';

const InputLengthCheck = () => {
  const [inputValue, setInputValue] = useState('');
  const [error, setError] = useState('');

  const handleInputChange = (text) => {
    setInputValue(text);
  };

  const handleSubmit = () => {
    if (inputValue.length !== 10) {
      setError('請輸入正確的電話號碼');
      alert('請輸入正確的電話號碼');
    } else {
      setError('');
      alert('註冊成功');
      // 在這裡執行表單提交的相關邏輯
    }
  };

  return (
    <View style={styles.container}>
      <Text>請輸入您的電話號碼?</Text>
      <TextInput style={styles.inputText} onChangeText={handleInputChange}
        value={inputValue}
        keyboardType="numeric"
      />
      <TouchableOpacity style={styles.button} title="送出" onPress={handleSubmit}>送出</TouchableOpacity>
      {/*<Button style={styles.button} title="送出" onPress={handleSubmit} >*/}
      
      {error ? <Text style={{ color: 'red' }}>{error}</Text> : null}
    </View>
  );
};

export default InputLengthCheck;
//style 外觀
const styles = StyleSheet.create({
  container: {
    flex: 1,
    //flexDirection: 'row',
    backgroundColor: '#FFF',
    alignItems: 'center',
    justifyContent: 'center',
    fontSize: '20px',
    //borderColor:'#555',
  },
  //輸入框
  inputText: {
    borderWidth: 1,
    margin: '10px',
    height: '20px',
    border: '1px solid #555',
    borderRadius: '4px',
    width: '25%', // 設定輸入框寬度為父容器的80%
    marginBottom: 10, // 設定輸入框和按鈕之間的間距
  },
  button: {
    fontSize:20,
    color:'#FFF',
    textAlign:'center',
    //verticalAlign:'middle',
    lineHeight:10,
    padding: 10,
    height: '30px',
    borderRadius: 5,
    marginHorizontal: 20, // 設定按鈕間的間距
    borderRadius: '4px',
    backgroundColor: '#10a2c7',
    
  },
})