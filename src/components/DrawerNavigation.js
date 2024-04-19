import { TouchableOpacity } from "react-native";
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
                    backgroundColor: '2B1F5C' 
                },

                headerStyle:{ 
                    backgroundColor: '#C1E7E3' 
                }, 
                headerLeft: () =>{
                    
                    const navigation = useNavigation();
                    
                    const openMenu = () =>{
                        navigation.toggleDrawer();
                    } 

                    return (

                        <TouchableOpacity onPress={() => openMenu()}>
                            <Icon name='bars' color='white'/>
                        </TouchableOpacity>
                    );
                },

                headerTitleStyle: {
                    color: '#419ED7',
                    fontSize: 28,
                    fontFamily: 'AveriaLibre-Regular',
                }, 
                drawerLabelStyle:{
                    fontFamily: 'AveriaLibre-Regular',
                    color: '#419ED7',
                    fontSize: 18
                }
                }}

                initialRouteName='home' 

                drawerContent = {(props) => <MinhaDrawer {...props} />}>

                <Drawer.Screen name="Home" component = {Home} />
                
            </Drawer.Navigator>
    )
}

export default DrawerNavigation