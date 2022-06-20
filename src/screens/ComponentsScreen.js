import React from 'react';
import { Text, StyleSheet, View } from 'react-native';

const ComponentsScreen = () => {
const name = 'Veera';

    return (
         <View>
            <Text style = {styles.textStyle}>A very Good Morning {name} </Text>
            <Text style = {styles.subHeader}> Have a Good Start </Text>
            <Text style = {styles.subHeader}> Continue with your learning </Text>
            <Text style = {styles.subHeader}> You can do this all day.... </Text>
         </View>
    );
};

 const styles = StyleSheet.create({
    textStyle : {
        fontSize: 45
    },
    subHeader: {
    fontSize: 20
    }
 });

export default ComponentsScreen;