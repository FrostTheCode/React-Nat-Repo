import React from "react";
import { StyleSheet } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { QueryClient, QueryClientProvider } from "react-query";

import { LibraryContextProvider } from "./src/context/LibraryContext";

import BookList from "./src/Views/Libreria/BookList";
import BookDetail from "./src/Views/Libreria/BookDetail";
import AddBook from "./src/Views/AddBook/AddBook";

const LibraryStack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();
const queryClient = new QueryClient();

function LibraryStackScreen() {
return (
    <LibraryStack.Navigator>
        <LibraryStack.Screen
        name="Listado de Libros"
        component={BookList}
        options={{ title: "Inicio" }}
        />
        <LibraryStack.Screen
        name="Detalles de Libro"
        component={BookDetail}
        />
    </LibraryStack.Navigator>
    );
}

function App(): React.ReactNode {
    return (
        <QueryClientProvider client={queryClient}>
            <LibraryContextProvider>
                <NavigationContainer>
                    <Tab.Navigator>
                        <Tab.Screen name="Libreria" component={LibraryStackScreen} />
                        <Tab.Screen name="Agregar Libro" component={AddBook} />
                    </Tab.Navigator>
                </NavigationContainer>
            </LibraryContextProvider>
        </QueryClientProvider>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
            backgroundColor: "#2c3e50",
            justifyContent: "center",
            alignItems: "center",
    },
});

export default App;