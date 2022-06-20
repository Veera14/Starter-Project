import React from 'react';
import {Text, View, StyleSheet} from 'react-native';
import ImageDetail from '../components/ImageDetail';

const ImageScreen = () => {
    return (
    <View>
        <ImageDetail title = 'Forest' imageSource = {require('../../assets/forest.jpg')} title2 = {9} />
        <ImageDetail title = 'Beach' imageSource = {require('../../assets/beach.jpg')} title2 = {7} />
        <ImageDetail title = 'Mountain' imageSource = {require('../../assets/mountain.jpg')} title2 = {6} />
    </View>
    );
};

const styles = StyleSheet.create({});

export default ImageScreen;