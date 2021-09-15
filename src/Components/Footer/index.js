import React from 'react';
import { View, Text, ScrollView } from 'react-native';
import { styles } from './styles';

import { Shoes } from '../Shoes';

export function Footer(){
    return (
        <View>
            <Text style={styles.title}>VOCÊ TAMBÉM PODE GOSTAR</Text>
            <View style={{ flexDirection: 'row' }}>
                <ScrollView horizontal showsHorizontalScrollIndicator={false}>
                    <View style={{ marginHorizontal: 10 }}>
                        <Shoes img={require('../../assets/1.png')} cost='R$140,99'>Nike Air Max Dia</Shoes>
                    </View>
                    <View style={{ marginHorizontal: 10 }}>
                        <Shoes img={require('../../assets/2.png')} cost='R$199,99'>Nike Air Force</Shoes>
                    </View>
                    <View style={{ marginHorizontal: 10 }}>
                        <Shoes img={require('../../assets/3.png')} cost='R$250,00'>Nike Downshifter 10</Shoes>
                    </View>
                    <View style={{ marginHorizontal: 10 }}>
                        <Shoes img={require('../../assets/4.png')} cost='R$699,90'>Nike Jordan MA2</Shoes>
                    </View>
                </ScrollView>
            </View>
        </View>
    );
}