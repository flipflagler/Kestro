import { ScrollView } from "react-native";
import StoryItem from "./StoryItem";

const StoriesBar = () => {
  return (
    <ScrollView
      horizontal
      showsHorizontalScrollIndicator={false}
      style={{ paddingHorizontal: 10 }}
    >
      {[1, 2, 3, 4, 5].map((item) => (
        <StoryItem key={item} />
      ))}
    </ScrollView>
  );
};

export default StoriesBar;
