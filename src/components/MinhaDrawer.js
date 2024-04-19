import { DrawerContentScrollView, DrawerItemList, DrawerItem } from '@react-navigation/drawer';
import { Text, View, StyleSheet } from 'react-native';
import { Divider } from 'react-native-paper';
import Icon from 'react-native-vector-icons/FontAwesome';

const MinhaDrawer = (props) => {

    return (

        <DrawerContentScrollView {...props} contentContainerStyle={{ display: 'flex', flex: 1, justifyContent: 'space-between' }} style={estilos.Container}>
            
            <View>
                <View style={estilos.ContainerEmail}>
                    <Text style={{ color: 'white' }}>batata@alunos.utfpr.edu.br</Text>
                </View>
                <Divider style={estilos.Divider} />
                <DrawerItemList {...props} />
            </View>

            <DrawerItem labelStyle={{ color: 'white' }} label="Sair" icon={() => <Icon name="sign-out-alt" size={20} color="white" />} onPress={() => console.log("Adios muchacho")} />
        </DrawerContentScrollView>
    );
}

const estilos = StyleSheet.create ({

    ContainerEmail: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'center',
        paddingVertical: 10
    },
    Container: {
        backgroundColor: '2B1F5C'
    },
    Divider: {
        borderWidth: 1.5,
        borderColor: 'white'
    }
})

export default MinhaDrawer