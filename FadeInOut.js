import React, {PureComponent} from 'react';
import PropTypes from 'prop-types';
import {Animated} from 'react-native';

export const DEFAULT_DURATION = 300;
const DEFAULT_USE_NATIVE_DRIVER = true;

export default class FadeInOut extends PureComponent {
  static propTypes = {
    children: PropTypes.node.isRequired,
    visible: PropTypes.bool.isRequired,
    duration: PropTypes.number,
    rotate: PropTypes.bool,
    scale: PropTypes.bool,
    style: PropTypes.object,
    useNativeDriver: PropTypes.bool,
  };

  state = {
    fadeAnim: new Animated.Value(this.props.visible ? 1 : 0),
  };

  componentDidUpdate(prevProps) {
    const {duration, useNativeDriver} = this.props;

    if (prevProps.visible !== this.props.visible) {
      Animated.timing(this.state.fadeAnim, {
        toValue: prevProps.visible ? 0 : 1,
        duration: duration ? duration : DEFAULT_DURATION,
        useNativeDriver: useNativeDriver ? useNativeDriver : DEFAULT_USE_NATIVE_DRIVER
      }).start();
    }
  }

  render() {
    const {fadeAnim} = this.state;
    const transform = [{perspective: 1000}];
  
    if (this.props.scale) {
      transform.push({scale: fadeAnim});
    }

    if (this.props.rotate) {
      transform.push({
        rotate: fadeAnim.interpolate({
          inputRange: [0, 1],
          outputRange: ['0deg', '360deg']
        })
      });
    }

    return (
      <Animated.View style={{...this.props.style, opacity: fadeAnim, transform}}>
        {this.props.children}
      </Animated.View>
    );
  }
}
