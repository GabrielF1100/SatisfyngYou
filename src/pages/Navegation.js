import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";

import DrawerNavigation from "../components/DrawerNavigation";
import Home from "./Home";
import App from "../../App";

const Stack = createStackNavigator()

const Navigation = () => {

    return (

        <NavigationContainer>

            <Stack.Navigator initialRouteName='App' screenOptions={{ headerShown: false , headerStyle:{ backgroundColor: '#2B1D62' }}}>

                <Stack.Screen name="App" component={App} options={{headerShown: false}}/>
                <Stack.Screen name="Home" component={Home} options={{headerShown: false}}/>
                <Stack.Screen name="DrawerNavigation" component={DrawerNavigation} />

            </Stack.Navigator>

        </NavigationContainer>
    )
};

export default Navigation