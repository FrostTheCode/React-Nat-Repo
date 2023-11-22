import React from "react";
import { Text, View,StyleSheet,Image } from 'react-native';
import { TouchableOpacity } from "react-native-gesture-handler";
//libreria para iconos

export default function Book_List_Items({book,onPress}){
    return(
        <TouchableOpacity onPress={onPress}>
        <View style={styles.container}>
            <Image source={{uri:book.portada}} style={styles.Image}></Image>
            <Text style={styles.Text}>{book.titulo}</Text>
            <Text style={styles.Text}>{book.autor}</Text>
        </View>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    container: {flexDirection:'row',paddingVertical:15,paddingLeft:15,borderBottomWidth:1,borderBottomColor: '#E0E0E0',},
    Text:{margin:10,color:'green',fontSize:20},
    Image: {width:50,height:50,marginRight:5,marginLeft:5},
    Icon: {color:'#5b92e5',marginLeft:'auto',fontSize:25},
})
