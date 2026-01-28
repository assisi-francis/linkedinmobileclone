import { View, Text, Image } from "react-native";

const PostStats = ({ likes, comments, reposts, icon }) => {
  return (
    <View style={{ flexDirection: "row", paddingHorizontal: 20, paddingVertical: 6 }}>
      <Image
        source={icon}
        style={{ width: 30, height: 30, resizeMode: "contain" }}
      />

      <Text style={{ fontSize: 12, color: "gray", marginLeft: 12, alignSelf: "center" }}>
        {likes}
      </Text>

      <Text style={{ fontSize: 12, color: "gray", marginLeft: "auto", alignSelf: "center" }}>
        {comments} comments
      </Text>

      <Text style={{ fontSize: 12, color: "gray", marginLeft: 12, alignSelf: "center" }}>
        · {reposts} reposts
      </Text>
    </View>
  );
};

export default PostStats;
