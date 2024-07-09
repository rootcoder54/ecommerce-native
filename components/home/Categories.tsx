import { StyleSheet } from "react-native";
import { ThemedView } from "../global/ThemedView";
import { Categorie } from "./categorie";
import { ThemedText } from "../global/ThemedText";

const listes = [
  {
    href: "/panier",
    color: "#f97316",
    text: "Toutes",
  },
  {
    href: "/panier",
    color: "#166534",
    text: "Fiction",
  },
  {
    href: "/panier",
    color: "#1d4ed8",
    text: "Roman",
  },
  {
    href: "/panier",
    color: "#831843",
    text: "Drame",
  },
  {
    href: "/panier",
    color: "#831843",
    text: "Thriller",
  },
];

export function Categories() {
  return (
    <ThemedView style={styles.col}>
      <ThemedText type="defaultSemiBold"> Les Categories</ThemedText>
      <ThemedView style={styles.ligne}>
        {listes.map((item) => (
          <Categorie
            key={item.text}
            href={item.href}
            color={item.color}
            text={item.text}
          />
        ))}
      </ThemedView>
    </ThemedView>
  );
}

const styles = StyleSheet.create({
  col:{
    display:"flex",
    flexDirection:"column",
    gap:18
  },
  ligne: {
    display: "flex",
    flexDirection: "row",
    justifyContent:"center",
    alignItems: "center",
    gap: 5,
  },
});
