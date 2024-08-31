import React, { useContext, useState } from "react";
import { Text, StyleSheet, View, TouchableOpacity, Animated } from "react-native";
import MaterialIcons from "@expo/vector-icons/MaterialIcons";

import { Quizlist } from "./store";
import { useNavigation } from "@react-navigation/native";
import Choose from "./Choose";

function QuizBox() {
   const navigation= useNavigation()
  const [Quess, setQuess] = useState("");
  const DATA = useContext(Quizlist);
  const options = DATA.options;
  const Uk=new Date().toString()+Math.random().toString()
  
  return (
    <View style={styles.inputContainer}>
      {options.map((option) => {
        Corect=option.Corect;
        return(
            <View style={styles.quetionContainer} key={option.ID}>
            <View style={{flexDirection:'row',padding:3}}>
                <Text style={styles.questionText}>{option.Question}</Text>
            </View>
          {Array.isArray(option.value) ? (
            option.value.map((item, index) => {
              let active = Corect === item.value;
              return (
                <>
                  <Choose set={setQuess} active={active} item={item} index={index} />
                 
                </>
              );
            })
          ) : (
            <Text style={styles.optionText}>{option.value}</Text>
          )}
        </View>)
      })}
    </View>
  );
}

export default QuizBox;

const styles = StyleSheet.create({
  inputContainer: {
    backgroundColor: "#E7E8D1",
    margin: 10,
    borderRadius: 10,
    padding: 10,
   width:370,
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
    color: '#374151',
    marginBottom: 10,
},
quetionContainer:{backgroundColor: "#bcc24d",margin:4, elevation:2,
  borderRadius:10}
});
