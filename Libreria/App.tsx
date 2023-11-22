import React, { Component } from "react";
import { View, StyleSheet, TouchableOpacity, Text } from "react-native";
import {NavigationContainer} from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

import BookList from './src/Views/BookList'
import BookDetail from "./src/Views/BookDetail";
import AddBook from "./src/Views/AddBook/AddBook";
import BookCategory from "./src/Views/BookCategory";

const LibraryStack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

function LibraryStackScreen(){
    return(
        <LibraryStack.Navigator>
    <LibraryStack.Screen name="Listado de Libros" component={BookList} options={{title: 'inicio'}}/>
    <LibraryStack.Screen name="Detalle de libro" component={BookDetail} />
    </LibraryStack.Navigator>
    )}
 class App extends Component{
    
    render(): React.ReactNode {
    return(
       <NavigationContainer>
        <Tab.Navigator>
        <Tab.Screen name='Libreria' component={LibraryStackScreen} />
        <Tab.Screen name='Add Libro' component={AddBook} />
        </Tab.Navigator>
       </NavigationContainer>
        )
    }
}

const styles = StyleSheet.create({
    container: {flex:1, backgroundColor:'#2c3e50',justifyContent: 'center',alignItems:'center'},
    
})

export default App;