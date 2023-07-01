import { StatusBar } from "expo-status-bar";
import { StyleSheet } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import CategoriesScreen from "./screens/CategoriesScreen";
import MealsOverviewScreen from "./screens/MealsOverviewScreen";
import MealDetailsScreen from "./screens/MealDetailsScreen";
import FavoritesScreen from "./screens/FavoritesScreen";
// import FavoritesContextProvider from "./store/context/favorites-context";
import { Provider } from "react-redux";
import { store } from "./store/redux/store";

// Drawer Nav
import { createDrawerNavigator } from "@react-navigation/drawer";

export default function App() {
  const Stack = createNativeStackNavigator();
  const Drawer = createDrawerNavigator();

  function DrawerNavigator() {
    return (
      <Drawer.Navigator
        screenOptions={{
          headerTintColor: "white",
          headerStyle: { backgroundColor: "#12100f" },
          sceneContainerStyle: { backgroundColor: "#12100f" },
          drawerContentStyle: { backgroundColor: "#b26f4d" },
          drawerInactiveTintColor: "white",
          drawerActiveTintColor: "rgb(86, 33, 33)",
        }}
      >
        <Drawer.Screen
          name="Categories"
          component={CategoriesScreen}
          options={{
            title: "All Categories",
            drawerIcon: ({ color, size }) => (
              <Ionicons name="list" color={color} size={size} />
            ),
          }}
        />
        <Drawer.Screen
          name="Favorites"
          component={FavoritesScreen}
          options={{
            title: "Favorites",
            drawerIcon: ({ color, size }) => (
              <Ionicons name="heart" color={color} size={size} />
            ),
          }}
        />
      </Drawer.Navigator>
    );
  }
  return (
    // <FavoritesContextProvider>
    <Provider store={store}>
      <NavigationContainer>
        <Stack.Navigator
          screenOptions={{
            headerTintColor: "white",
            headerStyle: { backgroundColor: "#12100f" },
            contentStyle: { backgroundColor: "#12100f" },
          }}
        >
          <Stack.Screen
            name="Drawer"
            // Instead of calling screen, I call function which returns Drawer Navigator Screen
            component={DrawerNavigator}
            options={{
              headerShown: false,
            }}
          />
          <Stack.Screen
            name="MealsOverview"
            component={MealsOverviewScreen}
            options={({ route, navigation }) => {
              const catName = route.params.categoryName;
              return {
                title: catName,
              };
            }}
          />
          <Stack.Screen
            name="MealDetails"
            component={MealDetailsScreen}
            options={({ route, navigation }) => {
              const mealTitle = route.params.meal.title;
              return {
                title: mealTitle,
              };
            }}
          />
        </Stack.Navigator>
      </NavigationContainer>
      {/* </FavoritesContextProvider> */}
    </Provider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#24180f",
  },
  w: {
    color: "white",
  },
});
