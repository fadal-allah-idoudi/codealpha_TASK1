import React, { useContext, useEffect } from 'react';
import { View,StyleSheet, ScrollView, Alert } from 'react-native';

import PrimaryButton from '../comps/Button';
import QuizBox from '../comps/QuizBox';
import { Quizlist } from '../comps/store';
import { insertIdata } from '../DATABASE/DataBase';
import { useSQLiteContext } from 'expo-sqlite';

function QuizSecreen({navigation,route}) {
    const DATA = useContext(Quizlist);
    const options = DATA.options;
    const db = useSQLiteContext();
    const Tests= DATA.Tests;
    const TESTid= DATA.TESTid;
    useEffect(() => {
        if( route.params)
        {data= route.params.options
             console.log("********************");
             console.log(Tests);
        }
       
    }, [route,Tests]);
    function ModalNavigation(){
        navigation.navigate('AddSecreen')
       console.log('====================================');
    //    console.log(JSON.stringify(data, null, 2));
       console.log('=======repeat====================');
    }
    function cancel(){
        navigation.navigate('MainSecreen')
    }
    function AddQuiz(){
        if(options.length !=0)
            { DATA.AddTests(options);
                navigation.navigate('MainSecreen')
                insertIdata(db,TESTid,options)
            }else{
              Alert.alert("add questios first")
            }
       
        
        
    }
    return (
        <ScrollView contentContainerStyle={styles.scrollViewContent}>
           {options.length !== 0 && ( // Check if options array is not empty
            <View>
                <QuizBox />
            </View>
        )}
        
            <View style={styles.container}>
                <PrimaryButton cliked={cancel} buttoncolor='#d66c81'  color='grey'>cancel</PrimaryButton>
                <PrimaryButton cliked={ModalNavigation} buttoncolor='#A7BEAE' color='grey'>Add Question</PrimaryButton>
            </View>
            <PrimaryButton cliked={AddQuiz} buttoncolor='#56d67d' color='grey'>Add Quiz</PrimaryButton>
        </ScrollView>
       
    );
}

export default QuizSecreen;
const styles = StyleSheet.create({
    container:{
       flexDirection:'row',
        alignItems:"flex-end",
         justifyContent:'flex-end',
         flex:1,
         marginBottom:30
    },scrollViewContent: {
        flexGrow: 1,
        alignItems: 'center',
    },
    
  });
  