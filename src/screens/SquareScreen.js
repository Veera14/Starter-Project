import React, { useState } from 'react';
import {View, Text, StyleSheet, Button, FlatList} from 'react-native';
import ColorCounter from '../components/ColorCounter';

const SquareScreen = () => {
  const [red, setRed] = useState(0);
  const [blue, setBlue] = useState(0);
  const [green, setGreen] = useState(0);

  return (
  <View>
    <ColorCounter color ="Red"
      onIncrease = {() => setRed(red+100)}
      onDecrease = {() => setRed(red-100)} />

    <ColorCounter color = "Blue"
     onIncrease = {() => setBlue(blue+100)}
     onDecrease = {() => setBlue(blue-100)}/>

    <ColorCounter color = "Green"
     onIncrease = {() => setGreen(green+100)}
     onDecrease = {() => setGreen(green-100)}/>

     <View style = {{
       height: 150,
       width: 150,
       backgroundColor: `rgb(${red}, ${blue}, ${green})` }}
     />
  </View>
  );
};

const styles = StyleSheet.create({});

export default SquareScreen;

