import React from "react";
import {Text, View, TouchableHighlight,FlatList} from 'react-native';
import Book_List_Items from "../components/books/BookItem";

const Book_List =[
    {
    id:1,
    titulo: 'Pedro Paramo',
    autor: 'Juan Rulfo',
    portada: 'https://loresumo.com/wp-content/uploads/2019/08/pedro-p%C3%A1ramo-24.jpg'
},
{
    id:2,
    titulo: 'Don Quijote de la Mancha',
    autor: 'Miguel de servantees Sagun',
    portada: 'https://jooinn.com/images/don-quijote-8.jpg'
},
{
    id:3,
    titulo: 'El Titulo',
    autor: 'Antoine de Saint-Exupéry',
    portada: 'https://imagessl2.casadellibro.com/a/l/t0/92/9788416795192.jpg'
}
]
export default function BookList({navigation}){
    function handleOnPress(){
        navigation.navigate('BookDetail')
    }
    return(
        <View>
            <Text>Hello there im your home page, i love u brob</Text>
            <FlatList data={Book_List} renderItem={({item}) => 
                <Book_List_Items book={item} OnPress={handleOnPress}/>}
                    keyExtractor={item=>item.id}
                    ListHeaderComponent={<View><Text>Listado de Libros</Text></View>}/>
        </View>
    )
}