import React, { useEffect, useState } from 'react';
import { View, Text, TextInput, StyleSheet, TouchableOpacity, Image } from 'react-native';
import *as Font from 'expo-font';

//import{ImageComponent,ImageBackground}from 'react-native';
//import { Image } from 'react-native-web';

export default function App() {
  const [inputValue, setInputValue] = useState(''); //輸入框
  const [error, setError] = useState('');


  const handleSubmit = () => {
    const phone = /^09\d{8}$/;//^09為開頭+後面要8碼
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
  //require('./assets/images/coffee.png')
  useEffect(() => {
    async function loadFonts() {
      await Font.loadAsync({
        'jf-font': require('./assets/fonts/jf-openhuninn-1.1.ttf'),
      });
    }
    loadFonts();
  }, []);

  return (
    <View style={styles.container}>
      <Image style={styles.image} source={{ uri: 'https://images.plurk.com/3v2pCeK4ABEs7wg3dPjZwI.png' }}></Image>

      <Text style={[styles.h2Text, { fontFamily: 'jf-font' }]}>來一杯咖啡吧</Text>
      <Text style={[styles.pText, { fontFamily: 'jf-font' }]}>歡迎光臨，來一杯咖啡吧</Text>
      <Text style={[styles.pText, { fontFamily: 'jf-font' }]}>如要預約請填寫您的手機號碼，謝謝您</Text>
      <TextInput
        title='手機號碼'
        style={styles.inputText}
        value={inputValue}
        onChangeText={(text) => setInputValue(text)}
        defaultValue='輸入手機號碼'
      //keyboardType="numeric"
      />

      <Text style={[styles.pText, { fontFamily: 'jf-font' }]}>您的手機號碼:{inputValue}</Text>

      <TouchableOpacity
        style={styles.button}
        title="確認"
        onPress={handleSubmit}>
        <Text style={styles.buttonText}>確認</Text>

      </TouchableOpacity>

      {error ? <Text style={styles.error}>{error}</Text> : null}

    </View>
  );

};

//style 外觀
const styles = StyleSheet.create({
  container: {
    //width: 300,
    flex: 1,
    //flexDirection: 'row',
    backgroundColor: '#FFF',
    alignItems: 'center',
    justifyContent: 'center',
    fontSize: '20px',
    //borderColor:'#555',
  },
  h2Text: { //標題字
    color: '#A6695F',
    fontSize: 30,
    fontFamily: '',
    marginBottom: 5,

  },
  pText: { //內文文章
    color: '#7F4F21',
    fontSize: 18,
  },

  image: {
    width: 240,
    height: 180,
    resizeMode: 'stretch',
    marginLeft: 20,
  },
  inputText: {   //輸入框
    borderWidth: 1,
    margin: 10,
    marginTop: 20,
    height: 30,
    //width:10,
    border: '1px solid #555',
    borderRadius: 4,
    width: '60%', // 設定輸入框寬度為父容器的80%
    marginBottom: 10, // 設定輸入框和按鈕之間的間距
  },
  button: {
    textAlign: 'center',
    padding: 5,
    marginTop: 10,
    height: 40,
    width: 100,
    borderRadius: 8,
    marginHorizontal: 20, // 設定按鈕間的間距
    //borderRadius: '4px',
    backgroundColor: '#A6695F',
  },
  buttonText: {
    textAlign: 'center',
    color: '#FFF',
    fontSize: 20,
    //lineHeight: 18,//設定文字格線
  },
  error: {
    color: 'red',
    marginBottom: 20,
  },
});