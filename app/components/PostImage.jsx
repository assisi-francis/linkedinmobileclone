import { Image } from "react-native";

const PostImage = ({ source, height = 200, style }) => {
  return (
    <Image
      source={source}
      style={[
        { width: "100%", height: height, marginTop: 10, resizeMode: "cover" },
        style,
      ]}
    />
  );
};

export default PostImage;
