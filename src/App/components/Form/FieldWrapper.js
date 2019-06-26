import React from "react";
import { View, Text, StyleSheet } from "react-native";
import color from "../../Config/colors";

const styles = StyleSheet.create({
  labelText: {
    color: color.gray,
    fontSize: 18,
    marginBottom: 10
  },
  messageText: {
    color: color.gray,
    fontSize: 13,
    marginBottom: 5,
    marginTop: 5
  },
  messageSuccess: {
    color: color.success
  },
  messageError: {
    color: color.error
  }
});

export default ({ children, label = "", message = "", messageType }) => {
  const messageStyles = [styles.messageText];
  if (messageType === "success") {
    messageStyles.push(styles.messageSuccess);
  } else if (messageType === "error") {
    messageStyles.push(styles.messageError);
  }
  return (
    <View style={styles.container}>
      <Text style={styles.labelText}>{label}</Text>
      {children}
      <Text style={messageStyles}>{message}</Text>
    </View>
  );
};
