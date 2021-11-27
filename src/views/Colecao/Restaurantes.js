import React from 'react';
import { Text, View, TouchableOpacity} from 'react-native';
import estiloColecao from './estiloRestaurantes';

function Colecao({ navigation }) {

    const voltar = () => {
        navigation.goBack();
    }
    return (
        <View style={estiloColecao.container}>
            <View style={estiloColecao.borda}>

                <Text style={estiloColecao.texto}>Restaurantes</Text>

                <TouchableOpacity style={estiloColecao.botaoContainer} onPress={voltar}>
                    <Text style={estiloColecao.botaoTexto}>Voltar</Text>
                </TouchableOpacity>

            </View>
        </View>
    )
}
export default Colecao;