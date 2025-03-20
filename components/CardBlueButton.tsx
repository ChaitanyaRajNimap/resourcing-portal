import React from "react";
import {
  Text,
  StyleSheet,
  TouchableOpacity,
  GestureResponderEvent,
} from "react-native";
import ScaleSize from "@/utils/Scaling";
import Colors from "@/utils/Colors";

type CardButtonProps = {
  text: string;
  onPress?: (event: GestureResponderEvent) => void;
};

const CardBlueButton: React.FC<CardButtonProps> = ({ text, onPress }) => {
  return (
    <TouchableOpacity style={styles.button} onPress={onPress}>
      <Text style={styles.buttonText} numberOfLines={1} ellipsizeMode="tail">
        {text}
      </Text>
    </TouchableOpacity>
  );
};

export default CardBlueButton;

const styles = StyleSheet.create({
  button: {
    maxWidth: "30%",
    padding: ScaleSize(13),
    borderRadius: ScaleSize(25),
    alignItems: "center",
    backgroundColor: Colors.BLUE100,
    justifyContent: "center",
    elevation: ScaleSize(10),
  },
  buttonText: {
    color: Colors.WHITE100,
    fontSize: ScaleSize(14),
  },
});
