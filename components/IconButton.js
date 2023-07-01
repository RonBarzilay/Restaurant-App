import { Pressable, View, StyleSheet } from "react-native";
import { Ionicons } from "@expo/vector-icons";
function IconButton({ icon, color, onPress }) {
  return (
    <View style={styles.buttonContainer}>
      <Pressable
        onPress={onPress}
        style={({ pressed }) => pressed && styles.pressed}
      >
        <Ionicons name={icon} size={26} color={color} />
      </Pressable>
    </View>
  );
}
export default IconButton;

const styles = StyleSheet.create({
  buttonContainer: {
    marginHorizontal: "2%",
  },
  pressed: {
    opacity: 0.7,
  },
});
