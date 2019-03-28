import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {Animated} from 'react-native';

export const DEFAULT_DURATION = 300;

export default class FadeInOut extends Component {
  static propTypes = {
    children: PropTypes.node.isRequired,
    visible: PropTypes.bool.isRequired,
    duration: PropTypes.number,
    rotate: PropTypes.bool,
    scale: PropTypes.bool,
    style: PropTypes.object,
  };

  constructor(props) {
    super(props);
    this.state = {
      fadeAnim: new Animated.Value(props.visible ? 1 : 0),
    };
  }

  shouldComponentUpdate(nextProps) {
    return this.props.visible !== nextProps.visible;
  }

  componentDidUpdate(prevProps) {
    const {duration} = this.props;
    const {fadeAnim} = this.state;
  
    Animated.timing(fadeAnim, {
        toValue: prevProps.visible ? 0 : 1,
        duration: duration ? duration : DEFAULT_DURATION,
    }).start();
  }

  render() {
    const {children, rotate, scale, style} = this.props;
    const {fadeAnim} = this.state;
    const transform = [{perspective: 1000}];
  
    if (scale) {
      transform.push({scale: fadeAnim});
    }

    if (rotate) {
      transform.push({
        rotate: fadeAnim.interpolate({
          inputRange: [0, 1],
          outputRange: ['0deg', '360deg']
        })
      });
    }

    return (
      <Animated.View style={{...style, opacity: fadeAnim, transform}}>
        {children}
      </Animated.View>
    );
  }
}
