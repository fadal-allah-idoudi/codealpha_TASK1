import React, { useContext, useEffect, useRef } from 'react';
import { View,StyleSheet,Text } from 'react-native';
import IconButton from '../comps/IconButon';
import { Quizlist } from '../comps/store';
import TestBox from '../comps/TestBox';
import { useSQLiteContext } from 'expo-sqlite';
import { fetchdata } from '../DATABASE/DataBase';
function MainSecreen({navigation,route}) {
    const db = useSQLiteContext();
    const DATA = useContext(Quizlist);
    const options = DATA.options;
    const fetchedRef = useRef(false);
    const Tests= DATA.Tests
    if(route.params)
    {var score= route.params.score
        console.log('====================================')
        console.log(score)
        console.log('====================================')
    }
   
    useEffect(() => {
        if (fetchedRef.current) return; // Prevent fetching again if already fetched

        async function fetchDataAndInitialize() {
            try {
                const result = await fetchdata(db);
                console.log('====================================');
                console.log(result);
                console.log('============vrrg=================');
                DATA.AddTestInital(result);
                fetchedRef.current = true; // Mark as fetched
            } catch (error) {
                console.error('Error initializing data:', error);
            }
        }

        fetchDataAndInitialize();
    }, [db]); 
    function Navigation(){
        navigation.navigate('QuizSecreen')
    }
    return (
        <View style={styles.container}>
        {Tests.length > 0 && (
                <View>
                    <TestBox score={score}/>
                </View>
            )}
        <View style={styles.buttoncontainer}>
            <View style={styles.button}>
                <IconButton onPress={Navigation} icon="add-outline" size={40} color="black" />
            </View>
        </View>
        </View>
    );
}

export default MainSecreen;
const styles = StyleSheet.create({
    container:{
        flex: 1,
        
        
    },
    buttoncontainer: {
      flex:1,
      alignItems:"flex-end",
       justifyContent:'flex-end'
      
    },button:{
        backgroundColor:'#A7BEAE',
        borderRadius:24,
        margin:16
        
    }
  });
  