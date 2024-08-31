import React, { useState } from "react";
import { useContext } from "react";
import { useEffect } from "react";
import { View, Text, ScrollView, StyleSheet } from "react-native";
import { Quizlist } from "../comps/store";
import TestBox from "../comps/TestBox";
import Choose from "../comps/Choose";
import QuizBox from "../comps/QuizBox";
import PrimaryButton from "../comps/Button";

function TestScreen({ route,navigation }) {
  const DATA = useContext(Quizlist);
  const options = DATA.options;
  const Quesse = DATA.Quess;
  const [QuessArray, setQuessArray] = useState([]);
  const [State, setState] = useState(false);

     const Tests= DATA.Tests

      const testId=route.params.TESTid

console.log("dd",QuessArray);

 
  const handleSelect = (optionValue, questionId,Corect) => {
    
    setQuessArray((current) => [
      ...current.filter((item) => item.id !== questionId),
      { quess: optionValue, id: questionId,Corect:Corect },
    ]);
  };

  useEffect(() => {
    console.log(Tests);
  }, [Tests, route]);

  return (
    <ScrollView contentContainerStyle={styles.inputContainer} key={testId}>
      <Text>{testId}</Text>
      {Tests.map((current) =>
        testId === current.TESTid
          ? current.options.map((value) => (
              <View key={value.ID} style={styles.quetionContainer}>
                <View style={{ flexDirection: "row" }}>
                  <Text style={styles.questionText}>{value.Question}</Text>
                </View>
                {value.value.map((option, index) => {
                  const active = QuessArray.find(
                    (arrayItem) =>
                      arrayItem.id === value.ID && arrayItem.quess === option.value
                  );
                  return (
                    <View key={option.key}>
                      <Text>{option.value}</Text>
                      <Choose
                        index={index}
                        active={!!active}
                        set={() => handleSelect(option.value, value.ID,value.Corect)}
                        item={option}
                        id={value.ID}
                        State={State}
                      />
                    </View>
                  );
                })}
              </View>
            ))
          : null
      )}
      <View style={{alignItems:'center'}}>
            <PrimaryButton color='grey' cliked={()=>{
              DATA.AddQuess(QuessArray)
              navigation.navigate('CoreectAnswerdSecreen',
              {
                testId:testId
              })}} buttoncolor='#A7BEAE'>Finsh</PrimaryButton>
      </View>
    </ScrollView>
  );
}

export default TestScreen;
const styles = StyleSheet.create({
  inputContainer: {
    backgroundColor: "#E7E8D1",
    margin: 10,
    borderRadius: 10,
    padding: 10,
    width: 370,
  },
  text: {
    fontSize: 20,
    color: "#8bdae8",
    padding: 5,
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
  text: {
    fontSize: 16,
    marginLeft: 15,
    color: "#374151",
  },
  activetext: {
    color: "#374151",
  },
  iconstyle: {
    flexDirection: "row",
  },
  questionText: {
    fontSize: 18,
    color: "#374151",
    marginBottom: 10,
  },
  quetionContainer: {
    backgroundColor: "#bcc24d",
    margin: 4,
    elevation: 2,
    borderRadius: 10,
  },
});
