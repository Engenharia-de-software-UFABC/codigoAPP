import * as React from 'react'

import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'

const Stack = createNativeStackNavigator()

import {Home} from '../screens/home';
import { AddMateria } from '../components/AddMateria';


export function AppRoutes(){
    
    return(
        <NavigationContainer>
            <Stack.Navigator initialRouteName='Home'>
                
                <Stack.Screen name='home' component={Home} options={{
                title: 'UFABC FLOW',  
                headerStyle: {
                    backgroundColor: '#006633'},
                    headerTintColor: '#fff'
                    }}/>
                <Stack.Screen name='AddMateria' component={AddMateria} options={{
                title: 'Adicionar Matérias',
                headerStyle: {
                    backgroundColor: '#006633'},
                    headerTintColor: '#fff'
                    }}/>
                
            </Stack.Navigator>
        </NavigationContainer>
    )
}