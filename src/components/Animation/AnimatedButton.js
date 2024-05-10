import React, { useRef, useEffect } from "react";
import { Animated, TouchableOpacity, StyleSheet } from "react-native";
import styles from "./Styles";

const PULSE_DURATION = 1500;

const AnimatedButton = ({ children, onPress }) => {
  const scaleValue = useRef(new Animated.Value(1)).current;

  useEffect(() => {
    const animateButton = () => {
      Animated.sequence([
        Animated.timing(scaleValue, {
          toValue: 1.07,
          duration: PULSE_DURATION / 2,
          useNativeDriver: true,
        }),
        Animated.timing(scaleValue, {
          toValue: 1,
          duration: PULSE_DURATION / 2,
          useNativeDriver: true,
        }),
      ]).start(() => setTimeout(animateButton, PULSE_DURATION));
    };

    animateButton();

    return () => scaleValue.setValue(1);
  }, []);

  return (
    <TouchableOpacity onPress={onPress}>
      <Animated.View style={[styles.Btn, { transform: [{ scale: scaleValue }] }]}>
        {children}
      </Animated.View>
    </TouchableOpacity>
  );
};


export default AnimatedButton;
