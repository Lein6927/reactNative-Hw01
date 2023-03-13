import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View ,TextInput} from 'react-native';
import React,{useState} from 'react';
import { Button } from 'react-native-web';

export default function App() {
  
  const [flower,chFlower]=useState('rose');
  const [count,setCount]=useState(0);

  const changeFlower=()=>{
    chFlower('lily')
    console.log('變為另外一種花') 
  }

  return (
    <View style={styles.container}>
      <Text>名字:{flower}</Text>
      <Text style={styles.wrongText}>Oops~出現錯誤了</Text>
      <Text style={styles.mainText}>我是內文</Text>
      <Button title='Change flower' onPress={changeFlower}></Button>
      <Text>計數器:{count}</Text>
      <Button title='加1'onPress={()=>setCount(count+1)}></Button>
    {/*備註寫法*/ }
      
    </View>
  );
}
//style 外觀
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFF',
    alignItems: 'center',
    justifyContent: 'center',
    fontSize:'20px',
  },
  wrongText:{
    textAlign:'center',
    fontSize:'18px',
    color:'red',
  },
  mainText:{
    textAlign:'center',
    fontSize:'20px',
  }
});
