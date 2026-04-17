import { Ionicons } from "@expo/vector-icons";
import { Image, StyleSheet, Text, View } from "react-native";

const PostCard = () => {
  return (
    <View style={styles.card}>
      <Image
        source={{ uri: "https://picsum.photos/500" }}
        style={styles.image}
      />

      {/* User Info */}
      <View style={styles.userInfo}>
        <View style={styles.avatar} />
        <View>
          <Text style={styles.username}>Emma Watson</Text>
          <Text style={styles.handle}>@emmasmusic</Text>
        </View>
      </View>

      {/* Right Side Actions */}
      <View style={styles.actions}>
        <Ionicons name="heart-outline" size={24} color="white" />
        <Text style={styles.count}>860</Text>

        <Ionicons name="chatbubble-outline" size={24} color="white" />
        <Text style={styles.count}>320</Text>
      </View>
    </View>
  );
};

export default PostCard;

const styles = StyleSheet.create({
  card: {
    margin: 15,
    borderRadius: 20,
    overflow: "hidden",
  },
  image: {
    width: "100%",
    height: 400,
    borderRadius: 20,
  },
  userInfo: {
    position: "absolute",
    top: 15,
    left: 15,
    flexDirection: "row",
    alignItems: "center",
  },
  avatar: {
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: "white",
    marginRight: 10,
  },
  username: {
    color: "white",
    fontWeight: "bold",
  },
  handle: {
    color: "lightgray",
    fontSize: 12,
  },
  actions: {
    position: "absolute",
    right: 15,
    bottom: 20,
    alignItems: "center",
  },
  count: {
    color: "white",
    marginBottom: 10,
  },
});
