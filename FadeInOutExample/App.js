import React from 'react';
import {Button, Image, StyleSheet, View} from 'react-native';
import FadeInOut from 'react-native-fade-in-out';

const icon = require('./assets/cat.png');

export default class App extends React.Component {
  state = {
    durationVisible: true,
    scaleVisible: true,
    rotateVisible: true,
  };

  toggleDurationVisible = () => {
    this.setState(prevState => ({durationVisible: !prevState.durationVisible}));
  }

  toggleScaleVisible = () => {
    this.setState(prevState => ({scaleVisible: !prevState.scaleVisible}));
  }

  toggleRotateVisible = () => {
    this.setState(prevState => ({rotateVisible: !prevState.rotateVisible}));
  }

  render() {
    return (
      <View style={styles.container}>
        <FadeInOut visible={this.state.durationVisible} duration={500}>
          <Image source={icon} />
        </FadeInOut>
        <Button onPress={this.toggleDurationVisible} title="Duration = 500" />

        <FadeInOut visible={this.state.scaleVisible} scale={true}>
          <Image source={icon} />
        </FadeInOut>
        <Button onPress={this.toggleScaleVisible} title="Scale = true" />
        
        <FadeInOut visible={this.state.rotateVisible} rotate={true}>
          <Image source={icon} />
        </FadeInOut>
        <Button onPress={this.toggleRotateVisible} title="Rotate = true" />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'space-evenly',
    padding: 50
  },
});
