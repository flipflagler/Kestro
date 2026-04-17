import { FlatList, StyleSheet, View } from "react-native";
import BottomNav from "../../components/BottomNav";
import PostCard from "../../components/PostCard";
import StoriesBar from "../../components/StoriesBar";

const HomeScreen = () => {
  return (
    <View style={styles.container}>
      <StoriesBar />

      <FlatList
        data={[1, 2, 3]}
        keyExtractor={(item: number) => item.toString()}
        renderItem={() => <PostCard />}
        showsVerticalScrollIndicator={false}
      />

      <BottomNav />
    </View>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#0F0F0F",
    paddingTop: 50,
  },
});
