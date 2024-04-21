import { StyleSheet, TouchableOpacity, View, Text, FlatList } from 'react-native';
//import { ScrollView } from 'react-native-gesture-handler';
import { Searchbar } from 'react-native-paper';
import { useState } from 'react';
//import { SafeAreaView } from 'react-native';
//import MinhaDrawer from '../components/MinhaDrawer.js';
//import Icon from 'react-native-vector-icons/FontAwesome';
import {CardPesquisas} from '../components/CardPesquisas.js';

const Pesquisas = [
    {
        icon: "fa-solid fa-laptop-code",
        title: "SECOMP 2023",
        date: "10/10/2023",
        id: 1
    },
    {
        icon: "fa-solid fa-laptop-code",
        title: "UBUNTU 2022",
        date: "06/05/2022",
        id: 2
    },
    {
        icon: "fa-solid fa-laptop-code",
        title: "MENINAS CPU",
        date: "01/04/2022",
        id: 3
    },
    {
        icon: "",
        title: "",
        date: ""
    }
]

/*const Item = ({icon, title, date}) => (

        <TouchableOpacity style={estilos.container}>
            
            <View style={estilos.containerIcon}>
                <Icon style={estilos.icon} name = {icon} />
            </View>

            <View style={estilos.containerTexto}>
                <Text style={estilos.titulo} > {title} </Text>
                <Text style={estilos.data} > {date} </Text>
            </View>

        </TouchableOpacity>

);*/

const Home = (props) => {
    
    const [searchQuery, setSearchQuery] = useState('')

    return (
        
        <View style={estilos.container}>

            <View style={estilos.containerPesquisa}>
                
                <Searchbar 
                    mode= 'view'
                    style={estilos.barraPesquisa}
                    inputStyle={estilos.textoPesquisa}
                    placeholder="Insira o termo de busca..."
                    onChangeText={setSearchQuery}
                    value={searchQuery} 
                />

            </View>

            <View style={estilos.containerCard}>

                <Text>Bom dia</Text>

            </View>

            <View style={estilos.containerBotao}>

                <TouchableOpacity style={estilos.botao}>
                    <Text style={estilos.textoNovaPesquisa}>NOVA PESQUISA</Text>
                </TouchableOpacity>

            </View>
                

        </View>
    )
};

const estilos = StyleSheet.create({
    
    container: {
        flex: 1,
        alignItems: 'center',
        backgroundColor: '#372775',
        justifyContent: 'space-between'
    },

    containerPesquisa: {
        flex: 2,
        height: '100%',
        width: '80%',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: 'black'
    },
        barraPesquisa: {
            width: '100%',
            height: '100%',

        },
        textoPesquisa: {
            fontSize: 20,
            fontFamily: 'AveriaLibre-Regular',
            color: 'white',
        },

    containerCard: {
        flex: 8,
        height: '100%',
        width: '100%',
        alignItems: 'center',
        justifyContent: 'center',
    },

    containerBotao: {
        flex: 2,
        alignItems: 'center',
        justifyContent: 'center',
        width: '100%',
        height: '100%',
        paddingBottom: 10
    },

    botao: {
        borderRadius: 1,
        backgroundColor: '#49B976',
        width: '90%',
        height: '60%',
        alignItems: 'center',
        justifyContent: 'center'
    },

    

    textoNovaPesquisa: {
        fontSize: 19,
        fontFamily: 'AveriaLibre-Regular',
        color: '#FFF',
    }

})

export default Home