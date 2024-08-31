import React, { useContext, useState } from 'react';
import { Text, StyleSheet, View, TouchableOpacity, FlatList } from 'react-native';
import MaterialIcons from '@expo/vector-icons/MaterialIcons';
import IconButton from './IconButon';
import IconButton2 from './IconButton2';
import { Quizlist } from '../comps/store';
import Choose from './Choose';
function Radio({  chackedValue, onChange, setquiz,}) {
    const [state, setstate] = useState();
    const DATA=useContext(Quizlist);
    const options =DATA.options
    const ID =DATA.ID
    //Id !=undefined?Id:
    const Uk=new Date().toString()+Math.random().toString()
   
    return (
        <View style={styles.container}>
            {options.map((question, index) => (
                question.ID === ID &&(
                <View  key={`${Uk}`} >
                    {question.value.map((option) => {
                        let active = chackedValue === option.value;
                        return (
                            <View>
                                <Choose set={onChange} IDs={ID} setquiz={setquiz} active={active} item={option} index={index} state={"create"}/>
                           </View>
                        );
                    })}
                    
                </View>)
            ))}
        </View>
    );
}
export default Radio;
const styles = StyleSheet.create({
    container: {
        width: '100%',
    },
    questionText: {
        fontSize: 18,
        color: '#374151',
        marginBottom: 10,
    },
    radio: {
        height: 60,
        width: '100%',
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 10,
        backgroundColor: "#8da6d8",
        paddingHorizontal: 15,
        borderRadius: 15,
        justifyContent: 'space-between'
    },
    activeradio: {
        backgroundColor: "#8bdae8"
    },
    text: {
        fontSize: 16,
        marginLeft: 15,
        color: "#374151"
    },
    activetext: {
        color: '#374151'
    },
    iconstyle: {
        flexDirection: 'row'
    },
});
