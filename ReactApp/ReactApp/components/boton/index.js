import { Component } from "react";
import { TouchableOpacity,StyleSheet,Text } from "react-native";
import propTypes from "prop-types";

class boton extends Component {
    static defaultprops = {
        label: 'Boton'
    }
    static propTypes={
        label: propTypes.string.isRequired,
        action: propTypes.func
    }
    render() {  
        const {label,action}=this.props;
        return (
            <TouchableOpacity style={styles.bnt} onPress={action}>
            <Text style={styles.bntTxt}> {label} </Text>
        </TouchableOpacity>
        )
    }
}

const styles = StyleSheet.create({
    bnt: {width:50, height:50,backgroundColor:'#ecf0f1',alignItems:'center'},
    bntTxt: {fontSize:40 ,color:'#7f8c8d',fontWeight:'bold'},
});

export default boton;