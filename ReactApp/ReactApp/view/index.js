import React from "react";
import {View, StyleSheet, Text} from 'react-native';

function Viewer(){
    return(
        <View style={style.container}>
        <Text> Hola desde mi componente </Text>
        </View>
    )
}
const style= StyleSheet.create({
    container:{
        height:'20%',
        width:'100%',
        backgroundColor:'#fff'
    }
});

export default Viewer;