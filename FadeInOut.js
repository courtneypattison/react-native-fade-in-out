import React, { useEffect, useRef } from "react";
import PropTypes from "prop-types";
import { Animated } from "react-native";

const DEFAULT_DURATION = 300;

const FadeInOut = (props) => {
  const fadeAnim = useRef(new Animated.Value(props.visible ? 1 : 0)).current;

  propTypes = {
    children: PropTypes.node.isRequired,
    visible: PropTypes.bool.isRequired,
    duration: PropTypes.number,
    rotate: PropTypes.bool,
    scale: PropTypes.bool,
    style: PropTypes.object,
    useNativeDriver: PropTypes.bool,
  };

  
  useEffect(() => {
    Animated.timing(fadeAnim, {
      toValue: props.visible ? 1 : 0,
      duration:  props.duration || DEFAULT_DURATION,
      useNativeDriver: props.useNativeDriver || true,
    }).start();
  }, [props.visible]);

  const transform = [{ perspective: 1000 }];

  if (props.scale) {
    transform.push({ scale: fadeAnim });
  }

  if (props.rotate) {
    transform.push({
      rotate: fadeAnim.interpolate({
        inputRange: [0, 1],
        outputRange: ["0deg", "360deg"],
      }),
    });
  }

  return (
    <Animated.View style={{ ...props.style, opacity: fadeAnim, transform }}>
      {props.children}
    </Animated.View>
  );
};

export default FadeInOut;
