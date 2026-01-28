import { View, Text, Image, TouchableOpacity } from "react-native";

const ActionButton = ({ icon, label, onPress, iconSize = 18, textStyle }) => {
  return (
    <TouchableOpacity onPress={onPress} style={[{ alignItems: "center" }]}>
      <Image
        source={icon}
        style={{ width: iconSize, height: iconSize, resizeMode: "contain" }}
      />
      <Text style={[{ fontSize: 12, color: "black", marginTop: 4 }, textStyle]}>
        {label}
      </Text>
    </TouchableOpacity>
  );
};

export default ActionButton;
