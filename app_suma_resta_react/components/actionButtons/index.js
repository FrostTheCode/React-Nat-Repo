import React, {Component,Fragment} from "react";
import {TouchableOpacity,Text,StyleSheet} from 'react-native'

class ActionButtons extends Component {
render() {
    const {reset,mas10}=this.props;
    return (
        <Fragment>
            <TouchableOpacity style={styles.botonReset} onPress={reset}>
                        <Text style={styles.bntTxt}> Reset </Text></TouchableOpacity>
                    <TouchableOpacity style={styles.botonReset} onPress={mas10}>
                        <Text style={styles.bntTxt}> +10 </Text></TouchableOpacity>
        </Fragment>
    )};
    
}
const styles = StyleSheet.create({
    bntTxt: {fontSize:40 ,color:'#7f8c8d',fontWeight:'bold'},
    subcontainerReset:{height: 50,width:'100%',paddingHorizontal:10,flexDirection:'row',justifyContent: 'center',alignItems: 'center',marginTop:20},
    botonReset:{height:50,width:'40%',backgroundColor:'#ecf0f1', justifyContent: 'center',alignContent: 'center',margin:10,alignItems:'center'},
})
export default ActionButtons;