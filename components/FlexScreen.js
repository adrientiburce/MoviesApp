import React from "react";
import { StyleSheet, View } from "react-native";

const FlexScreen = () => {
  return (
    <View style={styles.container}>
      <View style={styles.flexTop}>
        <View style={styles.flexRight} />
        <View style={styles.flexLeft} />
      </View>
      <View style={styles.flexBottom}></View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  flexTop: {
    flex: 1,
    flexDirection: "row"
  },
  flexRight: {
    flex: 1,
    backgroundColor: "red"
  },
  flexLeft: {
    flex: 5,
    backgroundColor: "yellow",
    opacity: 0.8
  },
  flexBottom: {
    flex: 2,
    backgroundColor: "green"
  }
});

export default FlexScreen;
