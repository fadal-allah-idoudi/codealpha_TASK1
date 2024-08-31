import React, { useContext, useState } from "react";
import { StyleSheet, View,Text, Pressable } from 'react-native';
import { Quizlist } from './store';
import { useNavigation } from "@react-navigation/native";

export default function TestBox({score}) {
    const DATA = useContext(Quizlist);
    const Tests = DATA.Tests;
    const navigation=useNavigation()
    return (
        <View style={styles.inputContainer}>
      {Tests.map((test, index) => {
        const nbrQuestions = test.options.length;
        console.log('**********************************')
        console.log(test.score)
        console.log('**********************************')
        return (
          <View style={styles.quetionContainer} key={index}>
            <Pressable
              onPress={() => {
                navigation.navigate("TestScreen", {
                  TESTid: test.TESTid
                });
              }}
              android_ripple={{ color: 'gray' }}
            >
              <Text style={styles.quizNumberText}>Quiz Number: {test.TESTid}</Text>
              <Text style={styles.detailText}>
                Number of Questions: {nbrQuestions}
              </Text>
               
                <Text style={styles.detailText}>
                  Your Score: {test.score} %
                </Text>
              
            </Pressable>
          </View>
        );
      })}
    </View>
    );
}

const styles = StyleSheet.create({
    inputContainer: {
    backgroundColor: "#E7E8D1",
    margin: 10,
    borderRadius: 10,
    padding: 10,
   width:370,
  },quetionContainer:{
    backgroundColor: "#DDCDAF",
    margin:4,
     elevation:2,
  borderRadius:10
}, quizNumberText: {
  fontSize: 22,
  fontWeight: 'bold',
  color: '#333',
  marginBottom: 8,
},
detailText: {
  fontSize: 16,
  color: '#555',
  marginLeft: 24,
  marginBottom: 4,
}
})



