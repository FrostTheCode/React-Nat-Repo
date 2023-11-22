import {FlatList, StyleSheet, Text, View} from 'react-native';

import BookItems from "../../components/books/BookItems";
import useLibraryContext from "../../hooks/use.LibraryContext";

export default function BookList({navigation}){
    const {isSuccess, isLoading, data, error, url}=useLibraryContext();

    function handOnPress(book){
        navigation.navigate('BookDetail', {book, url})
    }

    return(
        <View style={styles.container}>
            <FlatList 
                data={isSuccess ? data.Libros :[]}
                renderItem={
                    ({item})=> <BookItems book={item} url={url} 
                                    onPress={()=>handOnPress({book:item})}
                                />
                }
                
                keyExtractor={item=>item._id}
                ListHeaderComponent={
                    <View style={styles.header}>
                        <Text style={styles.title}>
                            Listado de Libros
                        </Text>
                    </View>
                }
                
                ListEmptyComponent={
                    <View style={styles.empty}>
                        { isLoading && <Text>Cargando Libros...</Text>}
                        { error && <Text>Error: {error.message}</Text>}
                    </View>
                }
            />
        </View>  
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        paddingHorizontal: 10,
    },
    header: {
        paddingVertical: 10,
        borderBottomWidth: 1,
        borderBottomColor: '#ccc',
        marginBottom: 10,
    },
    title: {
        fontSize: 18,
        fontWeight: 'bold',
    },
    empty: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
});