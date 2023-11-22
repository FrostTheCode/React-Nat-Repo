import React, { useLayoutEffect } from "react";
import {ActivityIndicator, Image, Text, View, StyleSheet, Button} from 'react-native';

import getBook from "../../hooks/getBook";

export default function BookDetail({navigation,route}){
    const {_id,url}=route.params
    //console.log(_id);

    const {data, isLoading, isSuccess} = getBook({_id,url});

        useLayoutEffect(function(){
            if(isSuccess){
                navigation.setOptions({
                    headerRight:()=>(
                        <Button onPress={()=> navigation.navigate('BookEdit', {_id,url})} title="Editar"/>
                    ),
                    title: data.libro.titulo,
                })
            }
        })

        if(isLoading) {
            return(
                <View>
                    <ActivityIndicator>
                        <Text>Cargando Libro......</Text>
                    </ActivityIndicator>
                </View>
            );
        }

    return(
        <View style={styles.container}>
            <View style={styles.row}>
                <Image source={{uri:url+data.libro.portada}} style={styles.image}/>
            </View>
            <Text style={styles.TextTitles}>Titulo</Text>
            <Text style={styles.text}>{data.libro.titulo}</Text>
            <Text style={styles.TextTitles}>Autor</Text>
            <Text style={styles.text}>{data.libro.autor}</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        paddingVertical: 15,
        paddingLeft: 15,
        borderBottomWidth: 1,
        borderBottomColor: '#e0e0e0'
    },
    row:{
        marginBottom: 10
    },
    TextTitles: {
        textDecorationColor: '#5B92E5',
        fontSize: 20,
        color: 'blue',
        marginTop: 10        
    },
    text:{
        fontSize: 18,
        textAlign: 'center'
    },image: {
        width: 200,
        height: 200,
        alignItems: 'center',
        resizeMode: 'contain',
        marginRight: 10,
        marginBottom: 10
    },


})