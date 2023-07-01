import { View, FlatList, StyleSheet } from "react-native";
import MealItem from "./MealItem";

function MealsList({ navigation, items }) {
  function renderMealItem(itemData) {
    const item = itemData.item;

    function pressHandler() {
      // like: render('list', {})
      // pass data between screens: post the data - navigation.navigate("", {})
      navigation.navigate("MealDetails", {
        meal: item,
      });
    }
    const mealItemProps = {
      title: item.title,
      imageUrl: item.imageUrl,
      duration: item.duration,
      complexity: item.complexity,
      affordability: item.affordability,
    };
    return <MealItem {...mealItemProps} onPress={pressHandler} />;
  }

  return (
    <View style={styles.container}>
      {/* Meal Options with renderItem={renderMealItem} which create few MealItem*/}
      <FlatList
        data={items}
        keyExtractor={(item) => item.id}
        renderItem={renderMealItem}
      />
    </View>
  );
}

export default MealsList;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
  },
});
