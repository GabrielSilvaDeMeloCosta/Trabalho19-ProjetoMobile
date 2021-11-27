import React from 'react';
import { Text, View, TouchableOpacity } from 'react-native';
import estiloPerfil from './estiloPerfil';

function Perfil ({ navigation }) {
    const voltar = () => {
        navigation.goBack();
    }


return (
    <View style={estiloPerfil.container}>
        <View style={estiloPerfil.borda}>
            <Text style={estiloPerfil.texto}> Sobre nós </Text>
            <Text style={estiloPerfil.texto}> Aluno: Gabriel Silva De Melo Costa </Text>
            <Text style={estiloPerfil.texto}> Turma: 2MDSA-A2 </Text>
            <Text style={estiloPerfil.texto}> O objetivo desse projeto é apresentar </Text>
            <Text style={estiloPerfil.texto}> os melhores restaurantes da região de campinas! </Text>
            <TouchableOpacity style={estiloPerfil.botaoContainer} onPress={voltar}>
                <Text style={estiloPerfil.botaoTexto}>Voltar </Text> 
            </TouchableOpacity>
            </View>

    </View>
)
}
export default Perfil;
