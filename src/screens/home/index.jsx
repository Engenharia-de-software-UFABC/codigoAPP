import { Text, View, TextInput, TouchableOpacity } from "react-native";
import { styles } from "./style";
import { Horarios } from "../../components/Horarios";
import { useNavigation } from '@react-navigation/native';
import React from 'react';

export function Home(){

    function HandlePesquisaRA(){
        console.log("Você clicou no botão Buscar");
    }
    const navigation = useNavigation()   

  return (
    //pode usar view ou fragment dentro das tags
    
    <View style={styles.container}> 
    
    <TextInput 
        style={styles.input}
        placeholder="Insira o seu RA"
        placeholderTextColor="#6B6B6B"
        keyboardType="numeric"
    />

    <TouchableOpacity style={styles.button} onPress={HandlePesquisaRA}>
        <Text style={styles.buttonText}>
            Buscar
        </Text>
    </TouchableOpacity>
    <TouchableOpacity onPress={()=> navigation.navigate('AddMateria')}>
        <Text style={styles.buttonText2}>
            Adicionar horários de aula manualmente
        </Text>
    </TouchableOpacity>
    <Horarios/>
    </View>
  )
}