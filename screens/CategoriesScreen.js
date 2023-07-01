import { FlatList } from "react-native";
import { CATEGORIES } from "../data/dummy-data";
import CategoryGridTile from "../components/CategoryGridTile";

function renderCategoryItem(itemData, navigation) {
  function pressHandler() {
    // like: render('list', {})
    // pass data between screens: post the data - navigation.navigate("", {})
    navigation.navigate("MealsOverview", {
      categoryName: itemData.item.title,
      categoryId: itemData.item.id,
    });
  }
  return (
    <CategoryGridTile
      title={itemData.item.title}
      color={itemData.item.color}
      onPress={pressHandler}
    />
  );
}

function CategoriesScreen({ navigation }) {
  return (
    <FlatList
      data={CATEGORIES}
      keyExtractor={(item) => item.id}
      renderItem={(itemData) => renderCategoryItem(itemData, navigation)}
      numColumns={2}
    />
  );
}

export default CategoriesScreen;
