import { TouchableOpacity, Text, StyleSheet, Dimensions } from "react-native";
import React from "react";

const screen = Dimensions.get("window");
const buttonWidth = screen.width / 4;
const styles = StyleSheet.create({
  button: {
    flex: 1,
    backgroundColor: "#333333",
    height: Math.floor(buttonWidth - 10),
    borderRadius: Math.floor(buttonWidth - 10),
    alignItems: "center",
    justifyContent: "center",
    margin: 5,
  },
  text: { color: "#fff", fontSize: 25 },
  textSecondary: {
    color: "#060606",
  },
  buttonDouble: {
    width: screen.width / 2 - 10,
    flex: 0,
    alignItems: "flex-start",
    paddingLeft: 40,
  },
  buttonSecondary: {
    backgroundColor: "#a6a6a6",
  },
  buttonAccent: {
    backgroundColor: "#f09a36",
  },
});

export default ({ text, onPress, size, theme }) => {
  const stylesButton = [styles.button];
  const stylesText = [styles.text];
  if (size === "double") {
    stylesButton.push(styles.buttonDouble);
  }
  if (theme === "secondary") {
    stylesButton.push(styles.buttonSecondary);
    stylesText.push(styles.textSecondary);
  } else if (theme === "accent") {
    stylesButton.push(styles.buttonAccent);
  }

  return (
    <TouchableOpacity style={stylesButton} onPress={onPress}>
      <Text style={stylesText}>{text}</Text>
    </TouchableOpacity>
  );
};
