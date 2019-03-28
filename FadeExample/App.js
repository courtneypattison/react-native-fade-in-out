import React from 'react';
import {Button, Image, StyleSheet, Text, View} from 'react-native';
import FadeInOut from './FadeInOut';

const icon = require('./assets/cat.png');

export default class App extends React.Component {
  state = {
    visible: true
  };

  toggleVisible = () => {
    this.setState(prevState => ({visible: !prevState.visible}));
  }

  render() {
    return (
      <View style={styles.container}>
        <Button onPress={this.toggleVisible} title="Start Fade" />

        <Text>Duration = 500</Text>
        <FadeInOut visible={this.state.visible} duration={500}>
          <Image source={icon} />
        </FadeInOut>

        <Text>Scale = true</Text>
        <FadeInOut visible={this.state.visible} scale={true}>
          <Image source={icon} />
        </FadeInOut>

        <Text>Rotate = true</Text>
        <FadeInOut visible={this.state.visible} rotate={true}>
          <Image source={icon} />
        </FadeInOut>
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
  },
});
