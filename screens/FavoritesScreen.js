import { ScrollView, Text, StyleSheet } from "react-native";
// import { useContext } from "react";
// import { FavoritesContext } from "../store/context/favorites-context";
import MealsList from "../components/MealsList/MealsList";
import { MEALS } from "../data/dummy-data";
import { useSelector } from "react-redux";

function FavoritesScreen({ navigation }) {
  // const favoriteMealsCtx = useContext(FavoritesContext);
  const favoriteMealIds = useSelector((state) => state.favoriteMeals.ids);

  const favoriteMeals = MEALS.filter((meal) =>
    favoriteMealIds.includes(meal.id)
  );

  // If there are no favoriteMeals
  if (favoriteMeals.length == 0) {
    return <Text style={styles.text}>You have no favorite meals yet.</Text>;
  }

  // Otherwise, return the favoriteMeals
  return (
    <ScrollView contentContainerStyle={styles.rootContainer}>
      <MealsList items={favoriteMeals} navigation={navigation} />;
    </ScrollView>
  );
}

export default FavoritesScreen;

const styles = StyleSheet.create({
  rootContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  text: {
    fontSize: 18,
    fontWeight: "bold",
    color: "white",
  },
});
