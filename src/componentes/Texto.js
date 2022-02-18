import React from 'react';
import { StyleSheet, Text } from 'react-native';

export default function Texto({ children, style }) {
    let estilo = estilos.regular;

    if (style?.fontWeight === 'bold') {
        estilo = estilos.negrito;
    }

    return <Text style={[style, estilo]}>{ children }</Text>
}

const estilos = StyleSheet.create({
    regular: {
        fontFamily: 'MontserratRegular',
        fontWeight: 'normal'
    },
    negrito: {
        fontFamily: 'MontserratBold',
        // isto é colocado para ignorar o fontWeight que será aplicado como CSS,
        // se não a fonte não é aplicada corretamente por ela já ser bold
        fontWeight: 'normal'
    }
});
