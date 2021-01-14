import React, { useEffect, useRef } from "react";
import { ViewStyle } from "react-native";
import { Animated } from "react-native";

const DEFAULT_DURATION = 300;

export interface FadeInOutProps {
  visible: boolean;
  children?: any;
  duration?: number;
  rotate?: boolean;
  scale?: boolean;
  style?: ViewStyle;
  useNativeDriver?: boolean;
}

const FadeInOut = ({children, visible, duration = DEFAULT_DURATION, rotate, scale, style, useNativeDriver = true}: FadeInOutProps) => {
  const fadeAnim = useRef(new Animated.Value(visible ? 1 : 0)).current;

  useEffect(() => {
    Animated.timing(fadeAnim, {
      toValue: visible ? 1 : 0,
      duration: duration,
      useNativeDriver: useNativeDriver,
    }).start();
  }, [visible]);

  const transform: any[] = [{ perspective: 1000 }];

  if (scale) {
    transform.push({ scale: fadeAnim });
  }

  if (rotate) {
    transform.push({
      rotate: fadeAnim.interpolate({
        inputRange: [0, 1],
        outputRange: ["0deg", "360deg"],
      }),
    });
  }

  return (
    <Animated.View style={{ ...style, opacity: fadeAnim, transform }}>
      {children}
    </Animated.View>
  );
};

export default FadeInOut;
