import React from 'react';
import { View, TouchableOpacity, Image, Text } from 'react-native';
import { styles } from './styles';

export function Shoes(props){
    function filterDesc(desc){
        if(desc.length < 27){
            return desc;
        }
        return `${desc.substring(0,22)}...`;
    }

    return (
        <TouchableOpacity style={styles.container} onPress={props.onClick}>
            <Image 
                source={props.img}
                style={styles.shoesImg}
            />
            <Text style={styles.shoesText}>
                {filterDesc(props.children)}
            </Text>
            <View style={{ opacity: 0.4}}>
                <Text style={styles.shoesText}>{props.cost}</Text>
            </View>
        </TouchableOpacity>
    );
}