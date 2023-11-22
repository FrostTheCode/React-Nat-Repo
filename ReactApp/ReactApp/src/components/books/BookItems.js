import React from "react";
import { Image, StatusBar, StyleSheet, Text, View } from 'react-native';
import Icon from 'react-native-vector-icons/AntDesign';
import { TouchableOpacity } from "react-native-gesture-handler";

export default function BookItems({book, url,onPress, onDelete}){
    return(
    <TouchableOpacity onPress={onPress} style={styles.container}>
        <Image source={{uri:url+book.portada}} style={styles.image} />
        <View styles={styles.text}>
            <Text style={styles.text}>{book.titulo}</Text>
        </View>
        <View styles={styles.text}>
            <Text style={styles.text}>{book.autor}</Text>
        </View>
        <TouchableOpacity onPress={onDelete}>
            <Icon name='delete' style={styles.icon} />
        </TouchableOpacity>
            <Icon name="caretright" style={styles.icon}/>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    icon:{
        color:'#000',
        marginLeft: 'auto',
        fontSize: 20,
        marginTop: 5,
        marginBottom: 5
    },
    container:{
        flexDirection: 'row',
        flex: 1,
        borderBottomWidth: 1,
        borderBottomColor: '#EAb676',
        alignContent: 'center',
        justifyContent: 'center',
        alignItems: 'center',
    },
    image: {
        width: 100,
        height: 100,
        alignItems: 'center',
        resizeMode: 'contain',
        margin: 3
    },
    text: {
        flex: 1,
        flexDirection: 'row',
        fontSize: 20,
        color:'#000',
        margin: 3,
        padding: 3
    }
})