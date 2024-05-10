// AnimatedLogo.js
import React, { Component } from 'react';
import { Animated, Easing } from 'react-native';

class AnimatedLogo extends Component {
  constructor(props) {
    super(props);
    this.spinValue = new Animated.Value(0);
  }

  componentDidMount() {
    this.spin();
  }

  spin() {
    this.spinValue.setValue(0);
    Animated.timing(
      this.spinValue,
      {
        toValue: 1,
        duration: 3500,
        easing: Easing.linear,
        useNativeDriver: true,
      }
    ).start(() => this.spin());
  }

  render() {
    const spin = this.spinValue.interpolate({
      inputRange: [0, 1],
      outputRange: ['0deg', '360deg']
    });

    return (
      <Animated.Image
        style={{ width: 100, height: 100, position: 'absolute', transform: [{ rotate: spin }] }}
        source={require('../../../assets/image/Logo.png')}
      />
    );
  }
}

export default AnimatedLogo;
