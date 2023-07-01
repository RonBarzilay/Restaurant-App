import { View, Text, StyleSheet } from "react-native";
function List({ data }) {
  return data.map((dataPoint) => (
    <View key={dataPoint} style={styles.listItem}>
      <Text style={styles.itemText} key={dataPoint}>
        {dataPoint}
      </Text>
    </View>
  ));
}

export default List;

const styles = StyleSheet.create({
  itemText: {
    color: "black",
    textAlign: "center",
  },
  listItem: {
    borderRadius: 6,
    paddingHorizontal: 8,
    paddingVertical: 12,
    marginVertical: 4,
    marginHorizontal: "11%",
    backgroundColor: "rgba(255, 239, 239, 0.81)",
  },
});
