import React, {Component} from 'react';
import {View, Text, StyleSheet} from 'react-native';

export default class Header extends Component{
    render(){
        return(
            <View style={style.viewContainer}>
                <Text style={style.textStyle}>{this.props.title}</Text>
            </View>
        )
    }
}
const style = StyleSheet.create({
    viewContainer:{
        justifyContent: 'center',
        alignItems: 'center',
        height: 60,
        backgroundColor: '#d3d3d3',
        width: '100%',
        elevation: 10,
    },
    textStyle:{
        fontSize: 20,
        textTransform: 'uppercase',
        fontWeight: 'bold'
    }
})