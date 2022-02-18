import React from 'react';
import { Image, StyleSheet, View } from 'react-native';

import Texto from '../../../componentes/Texto';

import logo from '../../../../assets/logo.png';

export default function Detalhes() {
    return (
        <>
            <Texto style={estilos.nome}>Cesta de Verduras</Texto>
            <View style={estilos.fazenda}>
                <Image source={logo} style={estilos.imagemFazenda} />
                <Texto style={estilos.nomeFazenda}>Jenny Jack Farm</Texto>
            </View>
            <Texto style={estilos.descricao}>Uma cesta com produtos selecionados cuidadosamente da fazendo direto para a cozinha</Texto>
            <Texto style={estilos.preco}>R$ 40,00</Texto>
        </>
    )
}

const estilos = StyleSheet.create({
    nome: {
        fontSize: 26,
        fontWeight: 'bold',
        lineHeight: 42,
        color: '#464646'
    },
    fazenda: {
        flexDirection: 'row',
        paddingVertical: 12
    },
    imagemFazenda: {
        width: 32,
        height: 32
    },
    nomeFazenda: {
        marginLeft: 12,
        fontSize: 16,
        lineHeight: 26
    },
    descricao: {
        fontSize: 16,
        lineHeight: 26,
        color: '#A3A3A3'
    },
    preco: {
        marginTop: 8,
        fontSize: 26,
        fontWeight: 'bold',
        lineHeight: 42,
        color: '#2A9F85'
    }
});
