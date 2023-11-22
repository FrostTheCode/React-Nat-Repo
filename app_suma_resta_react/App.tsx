import React, { Component, PureComponent } from "react";
import { View, StyleSheet, TouchableOpacity, Text } from "react-native";
import CustomButton from './components/Button';
import ActionButtons from './components/actionButtons';

class App extends PureComponent{
    state = {contador: 0,muestra:false};

    constructor(props:any){
        super(props);//llama al constructor padre component
        this.state = {
        contador: 0,
        muestra:false
        };
        this.incrementar = this.incrementar.bind(this);
        this.decrementar = this.decrementar.bind(this);
        this.bntReset = this.bntReset.bind(this);
        this.bntmas10 = this.bntmas10.bind(this);
        this.btndelete = this.btndelete.bind(this);
        console.log('llamada al constructor padre');
    }
   /* shouldComponentUpdate(nextProps: any, nextState: any,){
        const{contador}= this.state;
        if(nextState.contador==contador){
            console.log('No se senderiza')
            return false;
        }
        return true;
    }*/
    componentDidMount(): void {
        console.log('Componente montado padre')
    }     
    
    incrementar(){
    this.setState({contador: this.state.contador + 1});
    }

    decrementar(){
        this.setState({contador: this.state.contador - 1});
        }
    bntReset(){
        this.setState({contador: 0})
    }  
    bntmas10(){
        this.setState({contador: this.state.contador + 10});
    }  
    btndelete(){
        this.setState({muestra: true})
    }

    render(): React.ReactNode {
        console.log('component rendered padre')
        const {contador} = this.state;
        const {muestra} = this.state;

    //al inicio de la app muestra = false, se renderiza
    //si muestra = false, se renderizan los componentes
    // si muestra = true, 

        if(muestra) return null;

    return(
        <View style={styles.container}>
            <View style={styles.subcontainer}>
                <CustomButton  label ='-' action={this.decrementar}/>

                <View style={styles.counterContainer}>
                    <Text style={styles.counter}> {contador} </Text>
                </View>
                <CustomButton label ='+' action={this.incrementar}/>
            </View>
            <View style={styles.subcontainerReset}>
                    <CustomButton label ='D' action={this.btndelete}/>
                </View>
            <View style={styles.subcontainerReset}>
                    <ActionButtons reset={this.bntReset}/>
                    <ActionButtons mas10={this.bntmas10}/>
                </View>
        </View>
    )
    }
}

const styles = StyleSheet.create({
    container: {flex:1, backgroundColor:'#2c3e50',justifyContent: 'center',alignItems:'center'},
    subcontainer: {height:50, width:'100%',paddingHorizontal:10, flexDirection:'row',justifyContent:'center',alignItems:'center',marginTop:20},
    bnt: {width:50, height:50,backgroundColor:'#ecf0f1',alignItems:'center'},
    bntTxt: {fontSize:40 ,color:'#7f8c8d',fontWeight:'bold'},
    counter: {fontSize:40, color:'#ffffff', fontWeight:'bold'},
    counterContainer: {justifyContent: 'center',alignItems: 'center'},
    subcontainerReset:{height: 50,width:'100%',paddingHorizontal:10,flexDirection:'row',justifyContent: 'center',alignItems: 'center',marginTop:20},
    botonReset:{height:50,width:'40%',backgroundColor:'#ecf0f1', justifyContent: 'center',alignContent: 'center',margin:10,alignItems:'center'},
})

export default App;