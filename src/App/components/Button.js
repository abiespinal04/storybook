
import React, { Component } from 'react';
import {View, Text, TouchableOpacity, StyleSheet} from 'react-native';
import color from '../Config/colors'

const styles = StyleSheet.create({
    container:{
        backgroundColor:color.primary,
        paddingVertical:14,
        borderRadius:6,
        borderWidth:1,
        borderColor:color.primary,
        marginVertical:7
    },
    text:{
        color:color.white,
        alignSelf:'center',
        fontSize:18,
        fontWeight:'500'

    },
    containerOutline:{
        backgroundColor:'transparent',
        borderColor:color.border
    },
    textOutline: {
        color:color.primary
    }
})

export const Button = ({onPress = () =>{}, children ="", outline=false}) => {
    const containerStyles = [styles.container];
    const textStyles = [styles.text];
    if(outline) {
        containerStyles.push(styles.containerOutline)
        textStyles.push(styles.textOutline)
    }
    return(<TouchableOpacity  style={containerStyles} onPress={onPress}>
        <Text style={textStyles}>{children}</Text>
    </TouchableOpacity>)
};