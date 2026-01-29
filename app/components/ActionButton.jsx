import { View, Text, Image, TouchableOpacity } from "react-native";

const ActionButton = ({ icon, label, onPress, style, textStyle }) => {
  return (
    <TouchableOpacity onPress={onPress} style={[{ alignItems: "center" }]}>
      <Image
        source={icon}
        style={{ width: 18, height: 18, resizeMode: "contain" }}
      />
      <Text style={[{ fontSize: 12, color: "black", marginTop: 4 }, textStyle]}>
        {label}
      </Text>
    </TouchableOpacity>
  );
};

export default ActionButton;
