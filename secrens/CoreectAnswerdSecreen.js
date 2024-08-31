import React, { useContext, useEffect, useState } from "react";
import { View, Text, ScrollView, StyleSheet } from "react-native";
import { Quizlist } from "../comps/store";
import MaterialIcons from "@expo/vector-icons/MaterialIcons";
import PrimaryButton from "../comps/Button";
import { useSQLiteContext } from "expo-sqlite";
import { insertscore } from "../DATABASE/DataBase";

export default function CoreectAnswerdSecreen({ route,navigation }) {
  const DATA = useContext(Quizlist);
  const Quesse = DATA.Quess;
  const db = useSQLiteContext();
  const testId = route.params.testId; // Assuming the testId is 1 for demonstration
  const Tests= DATA.Tests
const [corectnumber, setcorectnumber] = useState(0);
useEffect(() => {
    let correctCount = 0;
    
    Quesse.forEach((data) => {
      if (data.quess === data.Corect) {
        correctCount++;
      }
    });
    setcorectnumber(correctCount);
    const score =  correctCount * 100 /Quesse.length ;
    DATA.AddTestsScore(score, testId);
    insertscore(db,score,testId)
    console.log("corectnumber",corectnumber,"score",score);
  }, [Quesse]);

  
  
console.log('====================================');

console.log('====================================');
  return (
    <ScrollView contentContainerStyle={styles.inputContainer} key={testId}>
      <Text>{testId}</Text>
      {Tests.map((current) =>
        testId === current.TESTid
          ? current.options.map((value) => {
            
            return(
              <View key={value.ID} style={styles.quetionContainer}>
                <View style={{ flexDirection: "row" }}>
                  <Text style={styles.questionText}>{value.Question}</Text>
                </View>
                {value.value.map((option, index) => {
                  const active = Quesse.find(
                    (arrayItem) =>
                      arrayItem.id === value.ID &&
                      arrayItem.quess === option.value
                  );
                  const isCorrect = Quesse.find(
                    (arrayItem) =>
                      arrayItem.id === value.ID &&
                      (arrayItem.quess === arrayItem.Corect 

                      
                      )
                  );
                 
                  return (
                    <View key={option.key}>
                      <Text>{option.value}</Text>
                      <View
                        style={[
                          styles.radio,
                           active ? isCorrect? styles.activeradio: styles.wrongeradio
                            : null,
                        ]}
                        key={`${option.ID}-${index}`}
                      >
                        <View style={{ flexDirection: "row" }}>
                          <MaterialIcons
                            name={
                              active
                                ? "radio-button-checked"
                                : "radio-button-unchecked"
                            }
                            size={24}
                            color="#64748b"
                          />
                          <Text
                            style={
                              active
                                ? [styles.text, styles.activetext]
                                : [styles.text]
                            } >
                            {option.label}
                          </Text>
                        </View>
                      </View>
                    </View>
                  );
                })}
              </View>
            )})
          : null
      )}
      <View style={{ alignItems: "center" }}>
      <PrimaryButton
          color="grey"
          cliked={() => {
            
            navigation.navigate("MainSecreen",
            {score:true});
          }}
          buttoncolor="#A7BEAE"
        >
          Finsh
        </PrimaryButton>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  inputContainer: {
    backgroundColor: "#E7E8D1",
    margin: 10,
    borderRadius: 10,
    padding: 10,
    width: 370,
  },
  questionText: {
    fontSize: 18,
    color: "#374151",
    marginBottom: 10,
  },
  radio: {
    height: 60,
    width: "100%",
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 10,
    backgroundColor: "#8da6d8",
    paddingHorizontal: 15,
    borderRadius: 15,
    justifyContent: "space-between",
  },
  activeradio: {
    backgroundColor: "#8bdae8",
  },
  wrongeradio: {
    backgroundColor: "#d45a56",
  },
  text: {
    fontSize: 16,
    marginLeft: 15,
    color: "#374151",
  },
  activetext: {
    color: "#374151",
  },
});
