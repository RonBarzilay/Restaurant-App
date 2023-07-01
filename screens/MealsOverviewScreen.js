import { ScrollView, Text, StyleSheet } from "react-native";
import { MEALS } from "../data/dummy-data";
import MealsList from "../components/MealsList/MealsList";

// pass data between screens: get the data - route
function MealsOverviewScreen({ route, navigation }) {
  // log to the devtools
  console.log(route.params.categoryName);

  const displayedMeals = MEALS.filter((mealItem) => {
    return mealItem.categoryIds.indexOf(route.params.categoryId) >= 0;
  });

  return (
    <ScrollView>
      <Text style={styles.title}>
        Meals screen within {route.params.categoryName} Category
      </Text>
      <MealsList items={displayedMeals} navigation={navigation} />
    </ScrollView>
  );
}

export default MealsOverviewScreen;

const styles = StyleSheet.create({
  title: {
    marginHorizontal: "8%",
    textAlign: "center",
    color: "white",
    fontSize: 24,
    fontWeight: "bold",
  },
});
