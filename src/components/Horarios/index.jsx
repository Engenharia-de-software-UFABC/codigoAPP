import { View, Text, TouchableOpacity } from "react-native";
import { styles } from "./style";

export function Horarios(){
    return(
        <View>
            <TouchableOpacity>
                <Text style={styles.buttonText2}>
                    Ver meus horários
                </Text>  
            </TouchableOpacity>
        </View>
    )
}