import { StyleSheet, TouchableOpacity } from "react-native";
import { ThemedView } from "../global/ThemedView";
import { ThemedText } from "../global/ThemedText";
import { Ionicons } from "@expo/vector-icons";

export function Header() {
  return (
    <ThemedView style={styles.ligne}>
      <ThemedText style={styles.logo}>MyShop</ThemedText>

      <ThemedView style={styles.notice}>
        <TouchableOpacity>
          <ThemedText>
            <Ionicons size={25} name="notifications" />
          </ThemedText>
        </TouchableOpacity>
        <TouchableOpacity>
          <ThemedText>
            <Ionicons size={25} name="search" />
          </ThemedText>
        </TouchableOpacity>
      </ThemedView>
    </ThemedView>
  );
}

const styles = StyleSheet.create({
  ligne: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    padding: 12,
    paddingTop: 12,
  },
  notice: {
    display: "flex",
    flexDirection: "row",
    gap:10
  },
  logo:{
    fontSize:25,
    fontWeight:"bold"
  }
});
