import React, { useState } from "react";
import {SafeAreaView, Button, TextInput, Text, View, StyleSheet, Image } from 'react-native';
import * as ImagePicker from 'react-native-image-picker';
import { useMutation } from "react-query";
import useLibraryContext from "../../hooks/use.LibraryContext";

const options={
    title: 'Selecciona la portada',
    type: 'library',
    storageOptions:{
        skipBackup: true,
        path: 'images',
        selectionLimit:0,
        mediaType: 'photo',
        includeBase64: false,
        includeExtra: true
    }
}

async function postBook(data) {
    const res = await fetch(data.url+'api/libros/',{
        method: 'POST',
        headers: {
            Accept: 'application/json','Content-Type': 'application/json',
        },
        body: JSON.stringify({
            titulo: data.titulo,
            autor: data.autor,
            portada: data.portada
        })
    })
console.log(res);
const json = await res.json();
return json;
}

export default function AddBook({navigation}){
    //contexto
    const {invalidateBookListCach, url} = useLibraryContext();

    //estado de la peticion para guardar
    const {mutate, isLoading, error} = useMutation(postBook,{onSuccess: ()=>{
        invalidateBookListCach()
        navigation.navigate('BookList')
    }});

    const onButtonPress=React.useCallback((options)=>{
        ImagePicker.launchImageLibrary(options,image);
    })

    const[titulo, setTitulo] = useState('');
    const[autor, setAutor] = useState('');
    const[image, setImage] = useState(null);
    const[portada, setPortada] = useState('');

    function submit(){
        mutate({titulo,autor,portada,url})
    }

   

    return(
        <SafeAreaView>
            <View>
                <Text>Titulo</Text>
                <TextInput onChangeText={text=> setTitulo(text)}
                style={styles.TextInput}
                value={titulo}
                />
                <Text>Autor</Text>
                <TextInput onChangeText={text=> setAutor(text)}
                style={styles.TextInput}
                value={autor}
                />
                <Text>Portada</Text>
                <TextInput onChangeText={text=> setPortada(text)}
                style={styles.TextInput}
                value={portada}
                />
                <View>
                {image && <Image source={{uri:image}} style={styles.image} />}
                    <Button
                        title="Seleccionar Portada"
                        onPress={()=>onButtonPress(options)}
                    />
                </View>
                <Button onPress={submit} title="Agregar Libro"/>
                {isLoading && <Text>Agregando libro a la biblioteca</Text>}
                {error && <Text>Error al agregar libro a la biblioteca</Text>}
            </View>
        </SafeAreaView>
    )
}

const styles=StyleSheet.create({
    form: {
        paddingHorizontal: 16,
    },
    TextInput:{
        height:40,
        borderColor: 'gray',
        borderWidth:1,
        margin:5,
    }
})

