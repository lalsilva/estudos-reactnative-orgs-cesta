import React from 'react';
import { StyleSheet, Image, Dimensions } from 'react-native';

import Texto from '../../../componentes/Texto';

import topo from '../../../../assets/topo.png';

const width = Dimensions.get('screen').width;

export default function Topo() {
    return (
        <>
            <Image source={topo} style={estilos.imagemTopo} />
            <Texto style={estilos.titulo}>Detalhes da Cesta</Texto>
        </>
    )
}

const estilos = StyleSheet.create({
    imagemTopo: {
        width: '100%',
        height: 578 / 768 * width
    },
    titulo: {
        position: 'absolute',
        width: '100%',
        textAlign: 'center',
        fontSize: 16,
        fontWeight: 'bold',
        lineHeight: 26,
        color: '#FFFFFF',
        padding: 16
    }
});
