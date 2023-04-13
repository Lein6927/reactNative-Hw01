import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, TextInput, TouchableOpacity } from 'react-native';
import React, { useState } from 'react';
//import { Button } from 'react-native-web';

export default function App() {
  const [phone, setphone] = useState('');//輸入的電話號碼
  const [error, setError] = useState('');//若不符合條件用error參數

  const inputChange = (text) => {
    setInputValue(text);
  }
  const inputSubmit = () => {
    if (phone.length !== 10) {
      setError('請輸入電話號碼');
      console.log('不等於10碼');
    } else {
      setError('');
      console.log('符合規則');
    }
  }

  /*
    const btnConfirm = () => {
      //alert(`您輸入的電話是:${phone}`)
      console.log('確認')
  
    }*/
  //
  //
  //
  return (
    <View style={styles.container}>
      <Text>請輸入您的電話號碼?</Text>

      <TextInput
        maxLength={10}
        style={styles.inputText}
        placeholder="請輸入電話..."
        onChangeText={(value) => setphone(value)}>
      </TextInput>

      <View style={styles.buttonsContainer}>
        <TouchableOpacity style={styles.button} onPress={inputSubmit}>
          <Text style={styles.buttonText} >確認</Text>
        </TouchableOpacity>
        {error ? <Text style={{ color: 'red' }}>{error}</Text> : null}
      </View>

      {/*備註寫法*/}

    </View>
  );
}


//style 外觀
const styles = StyleSheet.create({
  container: {
    flex: 1,
    //flexDirection: 'row',
    backgroundColor: '#FFF',
    alignItems: 'center',
    justifyContent: 'center',
    fontSize: '20px',
  },
  //輸入框
  inputText: {
    borderWidth: 1,
    margin: '10px',
    border: '1px solid #555',
    borderRadius: '4px',
    width: '25%', // 設定輸入框寬度為父容器的80%
    marginBottom: 10, // 設定輸入框和按鈕之間的間距
  },
  //按鈕區塊
  buttonsContainer: {
    flexDirection: 'row',
  },
  //按鈕
  button: {
    padding: 10,
    borderRadius: 5,
    marginHorizontal: 20, // 設定按鈕間的間距
    backgroundColor: '#10a2c7',
  },
  buttonText: {
    color: '#FFF',
    fontSize: '',
  },
});
