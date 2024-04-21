import { DrawerContentScrollView, DrawerItemList, DrawerItem } from '@react-navigation/drawer';
import { Text, View, StyleSheet, TouchableOpacity } from 'react-native';
import { Divider } from 'react-native-paper';
import Icon from 'react-native-vector-icons/FontAwesome';

const MinhaDrawer = (props) => {

    return (

        <DrawerContentScrollView 
            {...props}
            style={estilos.Container} 
            contentContainerStyle={{ 
                display: 'flex',
                flex: 1, 
                }}>
            
            <View style={estilos.ContainerEmail}>
                <View>
                    <Text style={estilos.textos}>batata@alunos.utfpr.edu.br</Text>
                </View>

                <View style={estilos.containerDivider}>    
                    <Divider style={estilos.divider} />
                </View>

            </View>

            <View style={estilos.containerBotoes}>
                    
                <DrawerItem label= 'Pesquisas'
                    labelStyle= {{
                        color: 'white',
                        fontSize: 20,
                        fontFamily: 'AveriaLibre-Regular'
                    }} 
                    onPress={() => console.log("Adios muchacho")}
                    icon={() => <Icon 
                        name="file" 
                        size={20} 
                        color="white" />}/>

            </View>

            <View style={estilos.containerSair}>
                <DrawerItem label="Sair" labelStyle={{ 
                        color: 'white', 
                        fontSize: 20, 
                        fontFamily: 'AveriaLibre-Regular'
                    }} 
                    onPress={() => console.log("Adios muchacho")} 
                    icon={() => <Icon 
                        name="sign-out" 
                        size={20} 
                        color="white" />}
                />
            </View>
        </DrawerContentScrollView>
    );
}

const estilos = StyleSheet.create ({

    Container: {
        backgroundColor: '2B1F5C',
    },

    ContainerEmail: {
        flex: 2,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
    },
        containerDivider: {
            paddingHorizontal: 10,
            paddingTop: 15
        },
            divider: {
                borderWidth: 0.5,
                width: 250,
                borderColor: 'white',
                justifyContent: 'center',
                alignItems: 'center'
                
            },

    containerBotoes: {
        flex: 6,
        width: '100%',
        height: '100%',
    },
            btnPesquisas: {
                alignItems: 'start',
                justifyContent: 'space-evenly',
                width: '100%',
                height: '100%',
                paddingHorizontal: 10,
            },

    containerSair: {
        flex: 2,
        alignItems: 'start',
        justifyContent: 'space-evenly',
        width: '100%',
        height: '100%',
        paddingHorizontal: 10
    },
    
    textos: {
        fontSize: 20,
        fontFamily: 'AveriaLibre-Regular',
        color: 'white',
    }
})

export default MinhaDrawer