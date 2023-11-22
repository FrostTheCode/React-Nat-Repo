import React from "react";
import {Text, View,FlatList, StyleSheet, Alert} from 'react-native';
import { useMutation } from "react-query";

import BookItems from "../../components/books/BookItems";
//importa el contexto
import useLibraryContext from "../../hooks/use.LibraryContext";
    
async function deleteBook(data){
    const res= await fetch(data.url+'api/libros/'+data.id, {
        method : 'DELETE'
    });
    const json = await res.json();
    return json;
}

export default function BookList({navigation}){
    //consulta
    const {isSuccess, isLoading, data,error, url, invalidateBookListCache}=useLibraryContext();

    const { mutate, errorDelete } = useMutation(deleteBook, {
        onSuccess: ()=>{
            invalidateBookListCache();
        }
    }); //fin del usemutation 

    function handOnPress(_id){
        navigation.navigate('BookDetail',{_id,url})
    }

    function handleDelete(_id, titulo){
        console.log(_id);
        Alert.alert(
            'Eliminar Libro',
            'Realmente deseas eliminar el libro' + titulo,
            [
                {
                    text: 'OK',
                    onPress: ()=>{//console.log('eliminar')
                    mutate({url, _id})
                    }
                },
                {
                    text: 'Cancelar',
                    style: 'destructive'
                }
            ],
            { cancelable : false}
        )
    }

    return(
        <View>
            <Text>Hello there im your home page, i love u brob</Text>
            <FlatList data={isSuccess ? data.libros :[]} renderItem={({item}) => 
                <BookItems book={item} url = {url}
                onPress={()=> handOnPress(item._id)}
            onDelete={()=> handleDelete(item._id, item.titulo)}
                />} 
                    keyExtractor={item=>item._id}
                    ListHeaderComponent={<View><Text style={styles.titulo}>Listado de Libros</Text></View>}
                    ListEmptyComponent={
                        <View>{isLoading && <Text>Cargando Libros UwU...</Text>}
                              {error && <Text>Error:{error.message}</Text>}</View>
                    }
                    />
        </View>
    )
}// fin del booklist
const styles = StyleSheet.create({
    titulo: {
        fontSize:20,
        margin: 3,
        padding: 3,
        color: '#000',
        textAlign: 'center'
    }
})