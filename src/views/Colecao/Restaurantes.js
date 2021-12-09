import { Link } from '@react-navigation/native';
import React from 'react';
import { Text, Linking, Image, View, TouchableOpacity} from 'react-native';
import estiloColecao from './estiloRestaurantes';

function Colecao({ navigation }) {

    const voltar =  () => {
        navigation.goBack();
    }
    const Restaurante1 =  () =>{
        open(URL="https://www.google.com/search?client=opera-gx&q=restaurantes%20perto%20de%20mim%20campinas&sourceid=opera&ie=UTF-8&oe=UTF-8&hs=38M&tbs=lf:1,lf_ui:9&tbm=lcl&sxsrf=AOaemvJCxR39B3SNvn9sX51gwvDE46E3EA:1639055982168&rflfq=1&num=10&rldimm=13417379750959864414&lqi=CiJyZXN0YXVyYW50ZXMgcGVydG8gZGUgbWltIGNhbXBpbmFzWioiInJlc3RhdXJhbnRlcyBwZXJ0byBkZSBtaW0gY2FtcGluYXMqBAgDEACSARFidWZmZXRfcmVzdGF1cmFudKoBIRABKh0iGXJlc3RhdXJhbnRlcyBwZXJ0byBkZSBtaW0oDA&phdesc=o81m4CYArMk&ved=2ahUKEwiYgtWs59b0AhXCIbkGHZQOCDUQvS56BAgKEEU&rlst=f#rlfi=hd:;si:13417379750959864414,l,CiJyZXN0YXVyYW50ZXMgcGVydG8gZGUgbWltIGNhbXBpbmFzWioiInJlc3RhdXJhbnRlcyBwZXJ0byBkZSBtaW0gY2FtcGluYXMqBAgDEACSARFidWZmZXRfcmVzdGF1cmFudKoBIRABKh0iGXJlc3RhdXJhbnRlcyBwZXJ0byBkZSBtaW0oDA,y,o81m4CYArMk;mv:[[-22.8371051,-47.040484299999996],[-22.949963999999998,-47.193030099999994]];tbs:lrf:!1m4!1u3!2m2!3m1!1e1!1m4!1u2!2m2!2m1!1e1!1m4!1u1!2m2!1m1!1e1!1m4!1u1!2m2!1m1!1e2!2m1!1e2!2m1!1e1!2m1!1e3!3sIAE,lf:1,lf_ui:9")
    }
    const Restaurante2 =  () =>{
        open(URL="https://www.google.com/search?client=opera-gx&q=restaurantes%20perto%20de%20mim%20campinas&sourceid=opera&ie=UTF-8&oe=UTF-8&hs=38M&tbs=lf:1,lf_ui:9&tbm=lcl&sxsrf=AOaemvJCxR39B3SNvn9sX51gwvDE46E3EA:1639055982168&rflfq=1&num=10&rldimm=13417379750959864414&lqi=CiJyZXN0YXVyYW50ZXMgcGVydG8gZGUgbWltIGNhbXBpbmFzWioiInJlc3RhdXJhbnRlcyBwZXJ0byBkZSBtaW0gY2FtcGluYXMqBAgDEACSARFidWZmZXRfcmVzdGF1cmFudKoBIRABKh0iGXJlc3RhdXJhbnRlcyBwZXJ0byBkZSBtaW0oDA&phdesc=o81m4CYArMk&ved=2ahUKEwiYgtWs59b0AhXCIbkGHZQOCDUQvS56BAgKEEU&rlst=f#rlfi=hd:;si:15789961598375651563,a;mv:[[-22.8371051,-47.040484299999996],[-22.949963999999998,-47.193030099999994]]")
    }
    const Restaurante3 =  () =>{
        open(URL="https://www.google.com/search?client=opera-gx&q=restaurantes%20perto%20de%20mim%20campinas&sourceid=opera&ie=UTF-8&oe=UTF-8&hs=38M&tbs=lf:1,lf_ui:9&tbm=lcl&sxsrf=AOaemvJCxR39B3SNvn9sX51gwvDE46E3EA:1639055982168&rflfq=1&num=10&rldimm=13417379750959864414&lqi=CiJyZXN0YXVyYW50ZXMgcGVydG8gZGUgbWltIGNhbXBpbmFzWioiInJlc3RhdXJhbnRlcyBwZXJ0byBkZSBtaW0gY2FtcGluYXMqBAgDEACSARFidWZmZXRfcmVzdGF1cmFudKoBIRABKh0iGXJlc3RhdXJhbnRlcyBwZXJ0byBkZSBtaW0oDA&phdesc=o81m4CYArMk&ved=2ahUKEwiYgtWs59b0AhXCIbkGHZQOCDUQvS56BAgKEEU&rlst=f#rlfi=hd:;si:14662284936428295621,a;mv:[[-22.8371051,-47.040484299999996],[-22.949963999999998,-47.193030099999994]]")
    }
    const Restaurante4 =  () =>{
        open(URL="https://www.google.com/search?client=opera-gx&q=restaurantes%20perto%20de%20mim%20campinas&sourceid=opera&ie=UTF-8&oe=UTF-8&hs=38M&tbs=lf:1,lf_ui:9&tbm=lcl&sxsrf=AOaemvJCxR39B3SNvn9sX51gwvDE46E3EA:1639055982168&rflfq=1&num=10&rldimm=13417379750959864414&lqi=CiJyZXN0YXVyYW50ZXMgcGVydG8gZGUgbWltIGNhbXBpbmFzWioiInJlc3RhdXJhbnRlcyBwZXJ0byBkZSBtaW0gY2FtcGluYXMqBAgDEACSARFidWZmZXRfcmVzdGF1cmFudKoBIRABKh0iGXJlc3RhdXJhbnRlcyBwZXJ0byBkZSBtaW0oDA&phdesc=o81m4CYArMk&ved=2ahUKEwiYgtWs59b0AhXCIbkGHZQOCDUQvS56BAgKEEU&rlst=f#rlfi=hd:;si:8336395557628574784,l,CiJyZXN0YXVyYW50ZXMgcGVydG8gZGUgbWltIGNhbXBpbmFzSIX46KzmgICACFo4EAAQARACEAMQBBgAGAQiInJlc3RhdXJhbnRlcyBwZXJ0byBkZSBtaW0gY2FtcGluYXMqBAgDEACSARNiYXJiZWN1ZV9yZXN0YXVyYW50mgEjQ2haRFNVaE5NRzluUzBWSlEwRm5TVVJaYUZCdWMwcG5FQUWqASEQASodIhlyZXN0YXVyYW50ZXMgcGVydG8gZGUgbWltKAw,y,MMoH0GmR4F0;mv:[[-22.8371051,-47.040484299999996],[-22.949963999999998,-47.193030099999994]]")
    }
    return (
        <View style={estiloColecao.container}>
            <View style={estiloColecao.borda}>

                <Text style={estiloColecao.texto}>Restaurantes</Text>
                <TouchableOpacity style={estiloColecao.botaoContainer} onPress={Restaurante1}>
                    <Text style={estiloColecao.botaoTexto}>Donna Paula ⭐⭐⭐⭐</Text>
                </TouchableOpacity>
                <TouchableOpacity style={estiloColecao.botaoContainer} onPress={Restaurante2}>
                    <Text style={estiloColecao.botaoTexto}>Fogão Mineiro ⭐⭐⭐⭐</Text>
                </TouchableOpacity>
                <TouchableOpacity style={estiloColecao.botaoContainer} onPress={Restaurante3}>
                    <Text style={estiloColecao.botaoTexto}>Muqueca Barão ⭐⭐⭐⭐</Text>
                </TouchableOpacity>
                <TouchableOpacity style={estiloColecao.botaoContainer} onPress={Restaurante4}>
                    <Text style={estiloColecao.botaoTexto}>Rã-Chu | Churrascaria ⭐⭐⭐⭐</Text>
                </TouchableOpacity>
                
                <TouchableOpacity style={estiloColecao.botaoContainer} onPress={voltar}>
                    <Text style={estiloColecao.botaoTexto}>Voltar</Text>
                </TouchableOpacity>

            </View>
        </View>
    )
}
export default Colecao;