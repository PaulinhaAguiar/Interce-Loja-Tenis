import React from 'react';
import { View, Text } from 'react-native';
import { styles } from './styles';

export function Dot(props){
    return (
        <View style={[styles.container, { backgroundColor: props.color }]} />
    );
}