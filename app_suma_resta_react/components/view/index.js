import React from "react";
import { View, StyleSheet,Text} from "react-native";

function Viewer(){
    return(
        <View style={styles.container}>
            <Text>Hola desde mi componente TXT</Text>
            </View>
    )
}

const styles = StyleSheet.create({
    constainer:{
        height: '20%',
        width: '100%',
        backgroundColor:'white' 
    }
});

export default Viewer;

