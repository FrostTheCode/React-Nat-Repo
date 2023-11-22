import React,{userState} from 'react';
import { Text,View, SafeAreaView,Button, TextInput } from 'react-native';
import * as ImagePicker from 'react-native-image-picker';

export default function AddBook(){
    const onButtonPress = React.useCallback( (options) => {
        ImagePicker.launchImageLibrary(options, image);
    });
    const options = {
        title: 'selecciona la portada del libro',
        type : 'library',
        storageOptions : { skipBackup : true,path: 'images', selectionLimit: 0,mediaType : 'photo',includeBase64 : false, includeExtra: true},
    };
    const {titulo,autor} = userState('');

    function submit(){
        console.log(titulo);
        console.log(autor);
    }
    function setTitulo(text){
        titulo = text;
    }
    function setAutor(text){
        autor = text;
    }
    return(
        <SafeAreaView>
        <View style={styles.form}>
            <Text>Titulo</Text>
            <TextInput onChangeText={text= setTitulo(text)} style={styles.textInput} value={titulo}/>
            <Text>Autor</Text>
            <TextInput onChangeText={text=setAutor(text)} style={styles.textInput} value={autor}/>
        </View>
        <View>
        <Button onPress={ ()=> onButtonPress(options)} title="Seleccionar Portada"/>
        </View>
        <View>
            <Button onPress={submit} title='Añadir Libro'></Button>
        </View>
        </SafeAreaView>
    )
}
const styles = StyleSheet.create({
    form:{paddingHorizontal:16,},
    textInput:{heigth:40, borderColor: 'gray', borderWidth:1, margin:5}
})