import {
  View,
  Text,
  Image,
  Pressable,
  StyleSheet,
  Platform,
} from "react-native";
import MealDetails from "../MealDetails";

function MealItem({
  title,
  imageUrl,
  duration,
  complexity,
  affordability,
  onPress,
}) {
  return (
    <View style={styles.mealCard}>
      <Pressable
        android_ripple={{ color: "#ccc" }}
        style={({ pressed }) => (pressed ? styles.buttonPressed : null)}
        onPress={onPress}
      >
        <View style={styles.innerContainer}>
          <View>
            <View>
              <Image source={{ uri: imageUrl }} style={styles.image} />
            </View>
            <Text style={styles.title}>{title}</Text>
          </View>
          <MealDetails
            duration={duration}
            affordability={affordability}
            complexity={complexity}
          />
        </View>
      </Pressable>
    </View>
  );
}

export default MealItem;

const styles = StyleSheet.create({
  mealCard: {
    margin: 16,
    borderRadius: 8,
    overflow: "hidden",
    backgroundColor: "white",
    marginHorizontal: "6%",
    // elvation for android & ios & web
    elevation: 4,
    backgroundColor: "white",
    shadowColor: "grey",
    shadowOpacity: 0.35,
    shadowOffset: { width: 0, height: 1 },
    // shadowRadius: 8,
    overflow:
      Platform.OS == "android" || Platform.OS == "web" ? "hidden" : "visible",
  },

  innerContainer: {
    margin: 16,
    borderRadius: 8,
    overflow: "hidden",
  },
  buttonPressed: {
    opacity: 0.5,
    backgroundColor: "rgb(222, 216, 216)",
  },
  image: {
    width: "100%",
    height: 300,
  },
  title: {
    marginVertical: "4%",
    marginHorizontal: "20%",
    fontWeight: "bold",
    textAlign: "center",
    fontSize: 18,
  },
});
