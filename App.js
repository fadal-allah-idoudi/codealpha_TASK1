import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native';
import MainSecreen from './secrens/MainSecreen';
import QuizSecreen from './secrens/QuizSecreen';
import AddSecreen from './secrens/AddSecreen';
import QuizProvider from './comps/store';
import TestScreen from './secrens/TestScreen';
import CoreectAnswerdSecreen from './secrens/CoreectAnswerdSecreen';
import { SQLiteProvider, useSQLiteContext } from 'expo-sqlite';
import { init } from './DATABASE/DataBase';
const Stack = createNativeStackNavigator();

export default function App() {
 
  return (
    <SQLiteProvider databaseName="database1.db" onInit={init}>
      <QuizProvider>
        <StatusBar style="auto" />
        <NavigationContainer>
          <Stack.Navigator screenOptions={{
              headerStyle:{backgroundColor:'#d1978f',},
              animation:'flip'
              ,headerTitleAlign:'center',
              contentStyle:{backgroundColor:'#B85042'},
            }}>
            <Stack.Screen options={{
              title:'Your Recent Quis'
              ,}} name='MainSecreen' component={MainSecreen}/>
            <Stack.Screen 
            ptions={{
              title:'Add Quis'
              ,}} name='QuizSecreen' component={QuizSecreen}/>
              <Stack.Screen options={{
              title:'AddSecreen'
              ,}} name='AddSecreen' component={AddSecreen}/>
              <Stack.Screen 
            ptions={{
              title:'TestScreen'
              ,}} name='TestScreen' component={TestScreen}/> 
              <Stack.Screen 
            options={{
              title:'CoreectAnswerdSecreen'
              ,}} name='CoreectAnswerdSecreen' component={CoreectAnswerdSecreen}/>
              
          </Stack.Navigator>
        </NavigationContainer>
      </QuizProvider>
    </SQLiteProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
