import { Image, StyleSheet, Platform, Text } from "react-native";

import ParallaxScrollView from "@/components/global/ParallaxScrollView";
import { ThemedText } from "@/components/global/ThemedText";
import { ThemedView } from "@/components/global/ThemedView";
import { Header } from "@/components/home/Header";
import { Categorie } from "@/components/home/categorie";
import { Categories } from "@/components/home/Categories";

export default function HomeScreen() {
  return (
    <ParallaxScrollView
      headerBackgroundColor={{ light: "#A1CEDC", dark: "#1D3D47" }}
      header={<Header />}
    >
      <ThemedView style={styles.titleContainer}>
        <ThemedText type="title">Hello User!</ThemedText>
      </ThemedView>
      <Categories />
    </ParallaxScrollView>
  );
}

const styles = StyleSheet.create({
  titleContainer: {
    flexDirection: "row",
    alignItems: "center",
    gap: 8,
  },
  stepContainer: {
    gap: 8,
    marginBottom: 8,
  },
  reactLogo: {
    height: 178,
    width: 290,
    bottom: 0,
    left: 0,
    position: "absolute",
  },
});
