import React from 'react';
import { TouchableOpacity, Image, StyleSheet, View } from 'react-native';

import Texto from '../../../componentes/Texto';

export default function Detalhes({ nome, logoFazenda, nomeFazenda, descricao, preco, botao }) {
    return (
        <>
            <Texto style={estilos.nome}>{ nome }</Texto>
            <View style={estilos.fazenda}>
                <Image source={logoFazenda} style={estilos.imagemFazenda} />
                <Texto style={estilos.nomeFazenda}>{ nomeFazenda }</Texto>
            </View>
            <Texto style={estilos.descricao}>{ descricao }</Texto>
            <Texto style={estilos.preco}>{ preco }</Texto>

            <TouchableOpacity style={estilos.botao} onPress={() => {}}>
                <Texto style={estilos.textoBotao}>{ botao }</Texto>
            </TouchableOpacity>
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
    },
    botao: {
        marginTop: 16,
        paddingVertical: 16,
        borderRadius: 6,
        backgroundColor: '#2A9F85'
    },
    textoBotao: {
        fontSize: 16,
        lineHeight: 26,
        fontWeight: 'bold',
        textAlign: 'center',
        color: '#FFFFFF'
    }
});
