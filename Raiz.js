import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createDrawerNavigator } from '@react-navigation/drawer';
import App from './App';
import Login from './src/pages/Drawer/Drawer.js'
import Icon from 'react-native-vector-icons/FontAwesome'


// const Stack = createNativeStackNavigator()
const Drawer = createDrawerNavigator()

const Raiz = () => {
    return (
        <NavigationContainer>

            {/* <Drawer.Navigator screenOptions={{ drawerLabelStyle: { color: 'white' }, drawerStyle: {} }} initialRouteName='App' drawerContent={(props) => <MeuDrawer {...props} />} >
                <Drawer.Screen name="App" component={App} options={{ drawerIcon: () => <Icon color="white" size={20} name="home" /> }} />
                <Drawer.Screen name="MusicDetail" component={MusicDetail} options={{ drawerIcon: () => <Icon color="white" size={20} name="music" /> }} />
            </Drawer.Navigator> */}


            <Stack.Navigator initialRouteName='App' >
                <Stack.Screen name="App" component={App} />
            </Stack.Navigator>
        </NavigationContainer>
    )
}

export default Raiz