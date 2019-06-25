import React from 'react';
import {View, StyleSheet, Text} from 'react-native';
import color from '../../Config/colors'


const styles = StyleSheet.create({
    marginHorizontal:20,
    flex:1
})

export default ({children, header,subheader}) => (
    <View style={styles}>{children}</View>
);