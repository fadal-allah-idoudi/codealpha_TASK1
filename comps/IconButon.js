import React from 'react';
import { Pressable, View,StyleSheet,Text } from 'react-native';
import {Ionicons} from '@expo/vector-icons'
import MaterialIcons from '@expo/vector-icons/MaterialIcons';
function IconButton({icon,color,size,onPress,style,}) {
    return (
        <View style={[{borderRadius:40,overflow:'hidden',},style]}>
            <Pressable android_ripple={{color:'grey'}} style={({pressed})=>[styles.button,styles.pressed]}
             onPress={onPress}>
                <Ionicons name={icon} size={size} color={color}/>
            </Pressable>
        </View>
    );
}

export default IconButton;
const styles = StyleSheet.create({
    button:{
        padding:4,
        margin:1,
        justifyContent:'center',
        alignItems:'center',
    },
    pressed:{
        opacity:0.7,
    }
}) 