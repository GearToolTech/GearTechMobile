// SplashScreen.js
import React, { useEffect } from 'react';
import { View, Image, StyleSheet } from 'react-native';
import AnimatedLogo from '../Animation/logo';

const SplashScreen = ({ navigation }) => {
  useEffect(() => {
    setTimeout(() => {
      navigation.replace('Home'); 
    }, 4000); 
  }, [navigation]);

  return (
    <View style={styles.container}>
        <Image style={styles.backimage} source={require('../../../assets/image/BackSplash.png')}/>
      <AnimatedLogo /> 
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#E4E9F7",
    justifyContent: 'center',
    alignItems: 'center',
  },
  backimage:{
    flex: 1,

  },
});

export default SplashScreen;
