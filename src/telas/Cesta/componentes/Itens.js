import React from 'react';
import { StyleSheet, View, Image } from 'react-native';

import Texto from '../../../componentes/Texto';

export default function Itens({ titulo, lista }) {
    return (
        <>
            <Texto style={estilos.titulo}>{ titulo }</Texto>
            {
                lista.map(({ nome, imagem }) => {
                    return (
                        <View style={estilos.item} key={nome}>
                            <Image style={estilos.imagem} source={imagem} />
                            <Texto style={estilos.nome}>{ nome }</Texto>
                        </View>
                    )
                })
            }
        </>
    )
}

const estilos = StyleSheet.create({
    titulo: {
        marginTop: 32,
        marginBottom: 8,
        fontSize: 20,
        fontWeight: 'bold',
        lineHeight: 32,
        color: '#464646'
    },
    item: {
        flexDirection: 'row',
        paddingVertical: 16,
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