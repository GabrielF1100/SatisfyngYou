import { StyleSheet, TouchableOpacity } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { createDrawerNavigator } from '@react-navigation/drawer';
import Icon from 'react-native-vector-icons/FontAwesome'

import MinhaDrawer from './MinhaDrawer.js';
import Home from '../pages/Home.js';


const Drawer = createDrawerNavigator()

const DrawerNavigation = (props) => {
    return (
            <Drawer.Navigator screenOptions={
                {drawerStyle: { 
                    backgroundColor: '#2B1D62' 
                },

                headerStyle:{ 
                    backgroundColor: '#2B1D62' 
                }, 
                headerLeft: () =>{
                    
                    const navigation = useNavigation();
                    
                    const openMenu = () =>{
                        navigation.toggleDrawer();
                    } 

                    return (

                        <TouchableOpacity onPress={() => openMenu()}>
                            <Icon name='bars' color='white' size={20} style={estilos.iconeMenu}/>
                        </TouchableOpacity>
                    );
                },

                headerTitleStyle: {
                    color: 'white',
                    fontSize: 28,
                    fontFamily: 'AveriaLibre-Regular'
                }, 
                drawerLabelStyle:{
                    fontFamily: 'AveriaLibre-Regular',
                    color: 'white',
                    fontSize: 18
                }
                }}

                initialRouteName='home' 

                drawerContent = {(props) => <MinhaDrawer {...props} />}>

                <Drawer.Screen name="Home" component = {Home} />
                
            </Drawer.Navigator>
    )
}

const estilos = StyleSheet.create({
    iconeMenu: {
        paddingHorizontal: 10
    }
})

export default DrawerNavigation