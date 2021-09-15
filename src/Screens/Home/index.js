import React from 'react';
import { View, Image, Text, TouchableOpacity, ScrollView } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { MaterialIcons } from '@expo/vector-icons';
import { styles } from './styles';

import { Shoes } from '../../Components/Shoes';

export function Home(){
    const navigation = useNavigation();

    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <Image 
                    source={require('../../assets/banner.png')} 
                    style={styles.image}
                />

                <View style={styles.textContainer}>
                    <Text style={styles.text}>TÊNIS</Text>
                    <Text style={[styles.text, { color: '#CECECF' }]}>-</Text>
                    <Text style={[styles.text, { color: '#CECECF' }]}>MASCULINO</Text>
                    <TouchableOpacity style={{ position: 'absolute', right: 0, alignSelf: 'center' }}>
                        <MaterialIcons 
                            name='filter-list'
                            size={24}
                            color='#000'
                        />
                    </TouchableOpacity>

                </View>
            </View>

            <View style={styles.line} />

            <ScrollView>
                <Text style={styles.text}>LANÇAMENTOS</Text>

                <View style={{ flexDirection: 'row', justifyContent: 'space-around'}}>
                    <Shoes img={require('../../assets/1.png')} cost='R$140,99' onClick={() => navigation.navigate('Detail')}>
                        Nike Air Max Dia
                    </Shoes>
                    <Shoes img={require('../../assets/2.png')} cost='R$199,90' onClick={() => navigation.navigate('Detail')}>
                        Nike Air Force 
                    </Shoes>
                </View>
                <View style={{ flexDirection: 'row', justifyContent: 'space-around'}}>
                    <Shoes img={require('../../assets/3.png')} cost='R$250,00' onClick={() => navigation.navigate('Detail')}>
                        Nike Downshifter 10
                    </Shoes>
                    <Shoes img={require('../../assets/4.png')} cost='R$699,90' onClick={() => navigation.navigate('Detail')}>
                        Nike Jordan MA2 
                    </Shoes>
                </View>
                <View style={{ flexDirection: 'row', justifyContent: 'space-around'}}>
                    <Shoes img={require('../../assets/5.png')} cost='R$250,99' onClick={() => navigation.navigate('Detail')}>
                        Nike Revolution 5
                    </Shoes>
                    <Shoes img={require('../../assets/6.png')} cost='R$339,90' onClick={() => navigation.navigate('Detail')}>
                        Nike Court Vision Low 
                    </Shoes>
                </View>
            </ScrollView>
        </View>
    ); 
}