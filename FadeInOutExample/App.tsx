import React, { useState } from "react";
import { Button, Image, StyleSheet, View } from "react-native";
import FadeInOut from "react-native-fade-in-out";

const icon = require("./assets/cat.png");

const App = () => {
  const [durationVisible, setDurationVisible] = useState<boolean>(true);
  const [scaleVisible, setScaleVisible] = useState<boolean>(true);
  const [rotateVisible, setRotateVisible] = useState<boolean>(true);

  const toggleDurationVisible = () => {
    setDurationVisible(!durationVisible);
  };

  const toggleScaleVisible = () => {
    setScaleVisible(!scaleVisible);
  };

  const toggleRotateVisible = () => {
    setRotateVisible(!rotateVisible);
  };

  return (
    <View style={styles.container}>
      <FadeInOut visible={durationVisible} duration={500}>
        <Image source={icon} />
      </FadeInOut>
      <Button onPress={toggleDurationVisible} title="Duration = 500" />

      <FadeInOut visible={scaleVisible} scale={true}>
        <Image source={icon} />
      </FadeInOut>
      <Button onPress={toggleScaleVisible} title="Scale = true" />

      <FadeInOut visible={rotateVisible} rotate={true}>
        <Image source={icon} />
      </FadeInOut>
      <Button onPress={toggleRotateVisible} title="Rotate = true" />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "space-evenly",
    padding: 50,
  },
});

export default App;
