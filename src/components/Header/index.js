import React from "react";
import { View, Image, StyleSheet, Platform } from "react-native";

export function Header() {
  return (
    <View style={styles.header}>
      <View style={styles.headerMenu}>
      <Image
          style={styles.logo}
          source={require("../../../assets/image/Logo.png")}
        ></Image>
        <Image
          style={styles.menu}
          source={require("../../../assets/image/Menu.png")}
        ></Image>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  header: {
    ...Platform.select({
      web: {
        height: "25%",
        width: "100%",
      },
      android: {
        height: '15%',
        width: '100%',
        justfyContent: "center",
        justifyContent: 'center'
      },
      ios: {
        height: "20%",
        width: "100%",
      },
      alignItems: "center",
     
    }),
  },
  menu: {
    ...Platform.select({
      web: {
        marginTop: 10,
        marginLeft: "90%",
        marginLeft: '80%'
      },
      android: {
        alignItems: "center",
        position: 'absolute',
        right: 0,
        top: -10,
        margin: 10,
      },
      ios: {
        marginTop: "5%",
        marginLeft: "80%",
      },
    }),
  },
  logo: {
    alignSelf: 'center',
    height: 75,
    width: 75,
  },
});
