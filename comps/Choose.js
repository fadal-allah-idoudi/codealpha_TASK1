import React, { useContext, useEffect, useState } from "react";
import {
  Text,
  StyleSheet,
  View,
  TouchableOpacity,
  Animated,
} from "react-native";
import MaterialIcons from "@expo/vector-icons/MaterialIcons";
import IconButton from "./IconButon";
import IconButton2 from "./IconButton2";
import { Quizlist } from "./store";
export default function Choose({ active, item, set, index, state, setquiz, IDs,  }) {
  const DATA = useContext(Quizlist);
  const Tests = DATA.Tests;
  const [state2, setstate2] = useState('');
    return (
      <TouchableOpacity
        style={active ? [styles.radio, styles.activeradio] : [styles.radio]}
        onPress={() => set(item.value)}
        key={`${item.ID}-${index}`}
      >
        <View style={{ flexDirection: "row" }}>
          <MaterialIcons
            name={active ? "radio-button-checked" : "radio-button-unchecked"}
            size={24}
            color="#64748b"
          />
          <Text style={active ? [styles.text, styles.activetext] : [styles.text]}>
            {item.label}
          </Text>
        </View>
        {state === "create" && (
          <View style={styles.iconstyle}>
            <IconButton2
              onPress={() => setquiz(item.label)}
              icon="update"
              size={30}
              color="black"
            />
            <IconButton
              onPress={() => DATA.Delete(item.key, IDs)}
              icon="trash-outline"
              size={30}
              color="red"
            />
          </View>
        )}
      </TouchableOpacity>
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
  },wrongeradio: {
    backgroundColor: "#d45a56",
  },

});
