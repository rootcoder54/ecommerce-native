import { StyleSheet, Text, View } from "react-native";
import { ThemedText } from "./global/ThemedText";
import { ThemedView } from "./global/ThemedView";
import { ReactElement } from "react";
import { Link } from "expo-router";

type props={
    titre:string,
    label?:string,
    element?:ReactElement,
    href:string
}

export function Box({titre,label,element,href}:props){
    return(
        <Link href={href}>
            <ThemedView style={styles.box}>
                <ThemedView>{element}</ThemedView>
                <View style={styles.desc}>
                    <Text>{titre}</Text>
                    <ThemedText>{label}</ThemedText>
                </View>
            </ThemedView>
        </Link>
    )
}

const styles=StyleSheet.create({
    box:{
        borderRadius:10,
        borderStyle:"dashed",
        borderColor:'white',
        padding:0,
        display:"flex",
        flexDirection:"column",
        backgroundColor:"#fff",
    },
    element:{

    },
    desc:{
        padding:5,
        alignItems:"center"
    }
})