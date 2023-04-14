import React, { useState } from 'react';
import { View, Text, TextInput, StyleSheet, TouchableOpacity, } from 'react-native';
//import { Button } from 'react-native-web';

export default function App() {
  const [inputValue, setInputValue] = useState(''); //輸入框
  const [error, setError] = useState('');

  const handleSubmit = () => {
    const phone=/^09\d{8}$/;//^09為開頭+後面要8碼
    if (!phone.test(inputValue)) {
      setError('請輸入正確的手機號碼');
      alert('請輸入正確的手機號碼');
      console.log('錯誤，請輸入正確的電話資訊')
    } else {
      setError('');
      alert('預約成功');
      // 在這裡執行表單提交的相關邏輯
      console.log('成功')
    }
  };


  return (
    <View style={styles.container}>
      <Text>請輸入您的手機號碼?</Text>
      <TextInput
        style={styles.inputText}
        value={inputValue}
        onChangeText={(text) => setInputValue(text)}
      //keyboardType="numeric"
      />
      
      {error ? <Text style={styles.error}>{error}</Text> : null}
      
      <TouchableOpacity
        style={styles.button}
        title="送出"
        onPress={handleSubmit}>
        <Text style={styles.buttonText}>送出</Text>

      </TouchableOpacity>



    </View>
  );

};

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
    margin: 10,
    height: 20,
    border: '1px solid #555',
    borderRadius: '4px',
    width: '25%', // 設定輸入框寬度為父容器的80%
    marginBottom: 10, // 設定輸入框和按鈕之間的間距
  },
  button: {
    textAlign: 'center',
    padding: 10,
    height: '30px',
    borderRadius: '5',
    marginHorizontal: 20, // 設定按鈕間的間距
    borderRadius: '4px',
    backgroundColor: '#10a2c7',

  },
  buttonText: {
    color: '#FFF',
    fontSize: 20,
    lineHeight: 10,//設定文字格線
  },
  error: {
    color: 'red',
    marginBottom: 20,
  },
});