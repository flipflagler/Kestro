import { Image, StyleSheet, Text, View } from "react-native";

const StoryItem = () => {
  return (
    <View style={styles.container}>
      <Image
        source={{ uri: "https://picsum.photos/100" }}
        style={styles.image}
      />
      <Text style={styles.text}>Emma</Text>
    </View>
  );
};

export default StoryItem;

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    marginRight: 12,
  },
  image: {
    width: 60,
    height: 60,
    borderRadius: 30,
  },
  text: {
    color: "white",
    fontSize: 12,
    marginTop: 5,
  },
});
