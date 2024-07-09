import { Link } from "expo-router";
import { StyleSheet, Text } from "react-native";

type Props = {
  color: string;
  text: string;
  href: string;
};

export function Categorie({ color, text, href }: Props) {
  return (
    <Link style={[{ backgroundColor: color }, styles.lien]} href={href}>
      <Text style={styles.text}>{text}</Text>
    </Link>
  );
}

const styles = StyleSheet.create({
  lien: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    padding:9,
    borderRadius: 4,
  },
  text:{
    fontSize:15,
    fontWeight:"bold"
  }
});
