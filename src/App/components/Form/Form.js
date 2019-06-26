import React from 'react';
import {View, StyleSheet, Text} from 'react-native';
import color from '../../Config/colors'
import colors from '../../Config/colors';


const styles = StyleSheet.create({
    container:{marginHorizontal:20,
    flex:1},
    headerText: {
        color: colors.primary,
        fontWeight:'600',
        fontSize:32,
        marginBottom:12
    },
    topRow: {
        marginBottom:28
    },
    subHeaderText: {
        color:color.gray,
        fontSize:20,
        marginBottom:12
    }
})

//header $$ <Text>{header}</Text> ---> if header === true then render the text
export default ({children, header,subheader}) => (
    <View style={styles.container}>
    {(header || subheader) && 
    <View style={styles.topRow} >
    {header && <Text style={styles.headerText}>{header}
    </Text>}
    {subheader && <Text style={styles.subHeaderText}>{subheader}
    </Text>}
    </View>}
    
    {children}
    </View>
);