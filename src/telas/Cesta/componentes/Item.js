import React from 'react';
import { StyleSheet, View, Image } from 'react-native';

import Texto from '../../../componentes/Texto';

export default function Item({ item: { nome, imagem } }) {
    return (
        <View style={estilos.item}>
            <Image style={estilos.imagem} source={imagem} />
            <Texto style={estilos.nome}>{nome}</Texto>
        </View>
    )
}

const estilos = StyleSheet.create({
    item: {
        flexDirection: 'row',
        paddingVertical: 16,
        marginHorizontal: 16,
        alignItems: 'center',
        borderBottomWidth: 1,
        borderBottomColor: '#ECECEC'
    },
    imagem: {
        width: 46,
        height: 46
    },
    nome: {
        marginLeft: 11,
        fontSize: 16,
        lineHeight: 26,
        color: '#464646'
    }
});