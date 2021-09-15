import React from 'react';
import { View, Text } from 'react-native';
import { styles } from './styles';

export function SizeButton(props){
    return (
        <View style={[styles.container, { backgroundColor: props.bgColor || '#FFF' }]}>
            <Text style={[styles.text, { color: props.color || '#c9c' }]}>
                {props.children}
            </Text>
        </View>
    );
}