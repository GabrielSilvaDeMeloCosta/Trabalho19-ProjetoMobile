import React from "react";
import { Text, View, TouchableOpacity } from "react-native";
import estiloItem from './estiloItem';

function Item({ navigation }) {

    const voltar = () => {
        navigation.goBack();
    }
    return (
        <View style={estiloItem.container}>
            <View style={estiloItem.borda}>

                <Text style={estiloItem.texto}>Detalhes</Text>
                <Text style={estiloItem.texto}>O Projeto tem como principal objetivo mostrar as localidades e as estatisticas dos
                 restaurantes de campinas!!!</Text>
                <TouchableOpacity style={estiloItem.botaoContainer} onPress={voltar}>
                    <Text style={estiloItem.botaoTexto}>Voltar</Text>
                </TouchableOpacity>

            </View>
        </View>
    )
}
export default Item;