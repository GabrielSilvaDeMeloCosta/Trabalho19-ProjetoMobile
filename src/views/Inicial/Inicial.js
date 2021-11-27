import React from 'react';
import { Text, View, TouchableOpacity } from 'react-native';
import estiloInicial from './estiloInicial';

function Inicial({ navigation }) {

    const abrirColecao = () => {
        navigation.navigate('Restaurantes')
    }

    const abrirItem = () => {
        navigation.navigate('Detalhes')
    }

    return (
        <View style={estiloInicial.container}>
            <View style={estiloInicial.borda}>

                <Text style={estiloInicial.texto}>Inicial</Text>

                <TouchableOpacity style={estiloInicial.botaoContainer} onPress={abrirColecao}>
                    <Text style={estiloInicial.botaoTexto}>Restaurantes</Text>
                </TouchableOpacity>

                <TouchableOpacity style={estiloInicial.botaoContainer} onPress={abrirItem}>
                    <Text style={estiloInicial.botaoTexto}>Detalhes</Text>
                </TouchableOpacity>

            </View>
        </View>
    )
}
export default Inicial;