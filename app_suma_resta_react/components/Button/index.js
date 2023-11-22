import { Component } from "react";
import { TouchableOpacity,StyleSheet,Text } from "react-native";
import PropTypes from "prop-types";

class boton extends Component {
constructor(props){
    super(props);
    console.log('constructor hijo')
}//fin del construction

componentDidMount() {
    console.log('DidMount hijo')
}

shouldComponentUpdate() {
  //  console.log(nextProps,stateProps);
    console.log('ShouldComponentUpdate hijo')
    return true
}

    static defaultprops = {
        label: 'Boton'
    }
    static propTypes={
        label: PropTypes.string.isRequired,
        action: PropTypes.func
    }
    render() {  
        console.log('Render hijo')
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