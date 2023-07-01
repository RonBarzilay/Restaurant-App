import { View, Text, StyleSheet } from "react-native";

function Subtitle({ title }) {
  return (
    <View style={styles.subtitleContainer}>
      <Text style={styles.subtitle}>{title}</Text>
    </View>
  );
}

export default Subtitle;

const styles = StyleSheet.create({
  subtitle: {
    color: "rgb(245, 192, 143)",
    fontSize: 18,
    fontWeight: "bold",
    textAlign: "center",
  },
  subtitleContainer: {
    padding: 6,
    marginHorizontal: "10%",
    marginVertical: 4,
    borderBottomColor: "rgb(245, 192, 143)",
    borderBottomWidth: 2,
  },
});
