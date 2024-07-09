import { Image, StyleSheet } from "react-native";
import { ThemedText } from "../global/ThemedText";
import { ThemedView } from "../global/ThemedView";
import { Box } from "../Box";
import { Ionicons } from "@expo/vector-icons";

const listes=[
    {
        element:<Ionicons size={190} name="book" style={{color:"#fff"}} />,
        titre:"Dune",
        label:"Fiction",
        href:"/panier"
    },
    {
        element:<Ionicons size={190} name="bookmark" style={{color:"#2563eb"}} />,
        titre:"Foundation",
        label:"Fiction",
        href:"/panier"
    },
]

export function Nouveautes(){
    return(
        <ThemedView>
            <ThemedText type="defaultSemiBold">Les nouveautés</ThemedText>
            <ThemedView style={styles.nouveaute}>
                {listes.map((item)=>(
                    <Box 
                        element={item.element}
                        titre={item.titre}
                        label={item.label}
                        href={item.href}
                    />
                ))}
                
            </ThemedView>
            
        </ThemedView>
    )
}

const styles=StyleSheet.create({
    nouveaute:{
        display:"flex",
        flexDirection:"row",
        gap:5,
    }
})