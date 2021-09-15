import React from 'react';
import { View, Text, Image, ScrollView, TouchableOpacity } from 'react-native';
import { styles } from './styles';

import { Dot } from '../../Components/Dot';
import { SizeButton } from '../../Components/SizeButton';
import { Button } from '../../Components/Button';
import { Footer } from '../../Components/Footer';

export function Detail( { navigation } ){
    navigation.setOptions({
        headerTitle: 'Nike Air Force'
    })

    return (
        <ScrollView>
            <Image 
                source={require('../../assets/detail.png')}
                style={styles.image}
                resizeMode='cover'
            />

            <View>
                <View>
                    <Text style={[styles.title, { fontSize: 24 }]}>R$ 200,00</Text>
                </View>
                <View style={{ opacity: 0.4 }}>
                    <Text style={[styles.title, { fontSize: 30 }]}>Nike Air Force</Text>
                </View>

                <View style={styles.dotContainer}>
                    <Dot color='#2379f4'/>
                    <Dot color='#fb6e53'/>
                    <Dot color='#ddd'/>
                    <Dot color='#000'/>
                </View>

                <View style={{ flexDirection: 'row', width: '100%' }}>
                    <ScrollView horizontal showsHorizontalScrollIndicator={false}>
                       <SizeButton bgColor='#17181a' color='#FFF'>40</SizeButton>
                       <SizeButton>39</SizeButton>
                       <SizeButton>38</SizeButton>
                       <SizeButton>37</SizeButton>
                    </ScrollView> 
                </View>

                <View style={styles.textContent}>
                    <Text style={styles.textTitle}>
                        Nike Air Force
                    </Text>
                    <Text style={styles.textContent}>
                        O legado permanece no Nike Air Force 1' 07. Mantendo os detalhes do modelo original de 1982, esta versão tem um toque renovado da 3M™ no que você conhece bem. 
                        Ele apresenta couro viçoso, cores ousadas e a quantidade perfeita de brilho para você se destacar.
                    </Text>
                    <Text style={styles.textList}>
                        - Categoria: Masculino
                    </Text>
                    <Text style={styles.textList}>
                        - Material: Couro
                    </Text>
                </View>

                <Button />

                <View style={styles.line}/>

                <Footer />
                
            </View>
        </ScrollView>
    ); 
}