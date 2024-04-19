import { StyleSheet, Text, TouchableOpacity, View } from "react-native"
import Icon from 'react-native-vector-icons/FontAwesome';

const CardPesquisas = (props) => {
    return (

        <TouchableOpacity style={estilos.container}>
            
            <View style={estilos.containerIcon}>
                <Icon style={estilos.icon} name={props.icon} />
            </View>

            <View style={estilos.containerTexto}>
                <Text style={estilos.titulo}>{props.title}</Text>
                <Text style={estilos.data}>{props.date}</Text>
            </View>

        </TouchableOpacity>

    )
}

const estilos = StyleSheet.create({
    container: {
        display: 'flex',
        flexDirection: 'row',
        backgroundColor: '#444444',
        width: '48%',
        marginVertical: 5,
        borderRadius: 10,
        minHeight: 70,
        maxHeight: 100,
    },
    containerIcon: {
        display: 'flex',
        flex: 40
    },
    containerTexto: {
        display: 'flex',
        justifyContent: 'center',
        flexDirection: 'column',
        paddingHorizontal: 10,
        flex: 60,
        backgroundColor: '#333333',
        borderTopEndRadius: 10,
        borderBottomEndRadius: 10,
    },
    titulo: {
        fontSize: 14,
        color: 'white',
    },
    icon: {
        borderTopLeftRadius: 10,
        borderBottomLeftRadius: 10,
        display: 'flex',
        flex: 1,
    },
    data: {

    }
})

export default CardPesquisas