import React from 'react';
import { useState } from 'react';
import { styles } from "./style";
import { View, Text, ScrollView, TextInput,TouchableOpacity } from "react-native";
import { useNavigation } from '@react-navigation/native';

export function AddMateria() {  
    const navigation = useNavigation();

    function handleVoltar() {
        navigation.goBack();
      }

    return(
        <ScrollView style={styles.container}>
            <Text style={styles.titulo}>Nome da Matéria</Text>
            <TextInput 
            style={styles.input}
            placeholder="Insira o Nome da Matéria"
            placeholderTextColor="#6B6B6B"> </TextInput>

            <Text style={styles.titulo}>Campus</Text>
            <TextInput 
            style={styles.input}
            placeholder="SA/SBC"
            placeholderTextColor="#6B6B6B"> </TextInput>

            <Text style={styles.titulo}>Nome do(a) Professor(a)</Text>
            <TextInput 
            style={styles.input}
            placeholder="Insira o nome do professor"
            placeholderTextColor="#6B6B6B"> </TextInput>

            <Text style={styles.titulo}>Dia da Semana </Text>
            <TextInput 
            style={styles.input}
            placeholder="Segunda/Terça..."
            placeholderTextColor="#6B6B6B"> </TextInput>

            <Text style={styles.titulo}>Quinzenal </Text>
            <TextInput 
            style={styles.input}
            placeholder="Quinzenal 1 ou 2"
            placeholderTextColor="#6B6B6B"> </TextInput>

            <Text style={styles.titulo}>Hora de Início</Text>
            <TextInput 
            style={styles.input}
            placeholder="08:00/10:00"
            placeholderTextColor="#6B6B6B"> </TextInput>

            <Text style={styles.titulo}>Hora de Término</Text>
            <TextInput 
            style={styles.input}
            placeholder="10:00/12:00"
            placeholderTextColor="#6B6B6B"> </TextInput>

            <TouchableOpacity style={styles.button}>
                <Text style={styles.buttonText}>
                    Adicionar Matéria
                </Text>
            </TouchableOpacity>
            
            <TouchableOpacity style={styles.button2} onPress={handleVoltar}>
                <Text style={styles.buttonText}>
                    Cancelar
                </Text>
            </TouchableOpacity>

        </ScrollView>
    )
}
