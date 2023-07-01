import { View, Text, StyleSheet } from "react-native";

function MealDetails({ duration, complexity, affordability, textStyle }) {
  return (
    <View style={styles.mealCardDetails}>
      <Text style={[styles.details, textStyle]}>{duration} m'</Text>
      <Text style={[styles.details, textStyle]}>
        {complexity.toUpperCase()}
      </Text>
      <Text style={[styles.details, textStyle]}>
        {affordability.toUpperCase()}
      </Text>
    </View>
  );
}

export default MealDetails;

const styles = StyleSheet.create({
  mealCardDetails: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    padding: 8,
  },
  details: {
    marginHorizontal: 4,
    marginTop: "5%",
    fontSize: 12,
  },
});
