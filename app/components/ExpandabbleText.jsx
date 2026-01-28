import { useState } from "react";
import { Text, Pressable } from "react-native";

const ExpandableText = ({ text, limit = 80, style }) => {
  const [expanded, setExpanded] = useState(false);

  return (
    <Pressable onPress={() => setExpanded(!expanded)}>
      <Text style={style}>
        {expanded
          ? text
          : text.length > limit
          ? text.slice(0, limit) + "  ...more"
          : text}
      </Text>
    </Pressable>
  );
};

export default ExpandableText;


