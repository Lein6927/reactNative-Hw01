import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, TextInput, TouchableOpacity } from 'react-native';
import React, { useState } from 'react';
//import { Button } from 'react-native-web';

export default function App() {
  const [phone, setphone] = useState('');

  const btnConfirm = () => {
    alert(`您輸入的電話是:${phone}`)
    console.log('確認')
  }


  const btnCancle = () => {
    setphone('')
    console.log('取消')
  }

  return (
    <View style={styles.container}>
      <Text>請輸入您的電話號碼?</Text>

      <TextInput
        maxLength={10}
        style={styles.inputText}
        placeholder="請輸入電話..."
        onChangeText={() => setphone()}>
      </TextInput>

       <View style={styles.buttonsContainer}>
        <TouchableOpacity style={styles.button} onPress={btnConfirm}>
          <Text style={styles.buttonText} >確認</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.button} onPress={btnCancle}>
          <Text style={styles.buttonText} >取消</Text>
        </TouchableOpacity>
      </View>

        {/*備註寫法*/ }

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
    backgroundColor:'#10a2c7',
  },
  buttonText: {
    color: '#FFF',
    fontSize:'',
  },
});
