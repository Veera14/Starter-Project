import React from 'react';
import {Text, View, StyleSheet, Image} from 'react-native';

const ImageDetail = ({ imageSource, title, title2 }) => {
    return (
        <View>
            <Image source = {imageSource} />
            <Text>{title}</Text>
            <Text>Image Score - {title2}</Text>
        </View>
    );
};

const styles = StyleSheet.create({});

export default ImageDetail;
