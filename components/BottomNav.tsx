import { Ionicons } from "@expo/vector-icons";
import { StyleSheet, View } from "react-native";

const BottomNav = () => {
  return (
    <View style={styles.container}>
      <Ionicons name="home" size={24} color="white" />
      <Ionicons name="search" size={24} color="white" />
      <Ionicons name="heart" size={24} color="white" />
      <Ionicons name="person" size={24} color="white" />
    </View>
  );
};

export default BottomNav;

const styles = StyleSheet.create({
  container: {
    position: "absolute",
    bottom: 20,
    left: 20,
    right: 20,
    backgroundColor: "#2A2A2A",
    borderRadius: 30,
    padding: 15,
    flexDirection: "row",
    justifyContent: "space-around",
  },
});
