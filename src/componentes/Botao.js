import React from 'react';
import { StyleSheet, TouchableOpacity } from 'react-native';

import Texto from './Texto';

export default function Botao({ texto, onPress, style }) {
    return (
        <>
            <TouchableOpacity style={[estilos.botao, style]} onPress={onPress}>
                <Texto style={estilos.textoBotao}>{ texto }</Texto>
            </TouchableOpacity>
        </>
    )
}

const estilos = StyleSheet.create({
    botao: {
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
