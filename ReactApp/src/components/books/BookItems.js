import React from "react";
import { Image, StatusBar, StyleSheet, Text, View } from 'react-native';
import Icon from 'react-native-vector-icons/AntDesign';
import { TouchableOpacity } from "react-native-gesture-handler";

export default function Book_List_Items({book, url, onPress}){
    return(
    <TouchableOpacity onPress={onPress}>
        <View styles={styles.container}>
            <Image source={{uri:url+book.portada}}
                    style={styles.image}
            />
            <Text>{book.titulo}</Text>
            <Text>{book.autor}</Text>
            <Icon name="right"
                style={styles.icon}
            />
        </View>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    icon:{
        color:'#000',
        marginLeft: 'auto',
        fontSize: 25
    },
    container:{
        flexDirection: 'row',
        paddingVertical: 15,
        paddingLeft: 15,
        borderBottomWidth: 1,
        borderBottomColor: '#E0E0E0E0'
    },
    image: {
        width: 50,
        height: 50,
        marginRight: 10
    }
})