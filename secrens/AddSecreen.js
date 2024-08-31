import React, { useContext, useEffect, useState } from 'react';
import { View, StyleSheet, TextInput,Text, ScrollView, Alert, } from 'react-native';

import Radio from '../comps/Radio';
import PrimaryButton from '../comps/Button';
import { Quizlist } from '../comps/store';
import { Title } from 'react-native-paper';

function AddSecreen({navigation}) {
  const [Corect, setCorect] = useState("");
const [Question, setQuestion] = useState();
const [quiz, setquiz] = useState();
const DATA=useContext(Quizlist);
useEffect(()=>{
  DATA.AddID()
},[])
  function InputHundler(enteredtext){
    setQuestion(enteredtext)
  }function textHundler(enteredtext){
    setquiz(enteredtext)
  }
  function StateAdd(){
    DATA.AddAnswer(quiz,);
    setquiz("");
    
  }

  function StateSubmit(){
    if(Corect=="")
    {
      Alert.alert('Mising Data',"choose the correct answerd")
    }
    else{DATA.Submit(Question,Corect)
    navigation.navigate('QuizSecreen')
    setCorect("")}
  }
  
  return (
    <ScrollView>
    <Text style={styles.text}>Quetion:</Text>
    <TextInput value={Question} onChangeText={InputHundler} style={styles.inputcontainair}/>
    <View style={{borderBottomWidth:3,width:'80%',marginLeft:35}}>
    </View>
    <Text style={styles.text}>Aswerds</Text>
    <TextInput value={quiz} onChangeText={textHundler} style={styles.inputcontainair}/>
        <Radio 
        setquiz={setquiz}
        onChange={setCorect}
        chackedValue={Corect}
           
        />
        <View style={{alignItems:'center'}}>
        <View style={{flexDirection:'row',}}>
            <PrimaryButton cliked={StateSubmit} buttoncolor='#A7BEAE' color='grey'>Submit</PrimaryButton>
            <PrimaryButton cliked={StateAdd} buttoncolor='#A7BEAE' color='grey'>Add</PrimaryButton>
        </View>
        </View>
     </ScrollView>

  );
}

export default AddSecreen;
const styles = StyleSheet.create({
    inputcontainair:{
       backgroundColor:"#c1cadc",
       margin:10,
       borderRadius:10,
       padding:10
    },
    text:{
        fontSize:20,
        color:"#8bdae8",
        padding:5
    }
    
  });
