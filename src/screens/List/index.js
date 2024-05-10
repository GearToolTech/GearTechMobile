import React, { useEffect, useState } from "react";
import { View, TouchableOpacity, Text, Image } from "react-native";
import { useNavigation } from "@react-navigation/native";
import styles from "./styles";
import { Header } from "../../components/Header";
import authService from "../../service/Auth";

const ListScreen = () => {
  const navigation = useNavigation();
  const [userM, setUserM] = useState(null);

  useEffect(() => {
    const fetchUser = async () => {
      const user = await authService.getLoggedInUser();
      setUserM(user);
    };

    fetchUser();
  }, []);

  const handleGoBack = () => {
    navigation.goBack(); // Navegue de volta para a tela anterior
  };

  return (
    <View style={styles.container}>
      <Image
        style={styles.BackGround}
        source={require("../../../assets/image/BackGroundList.png")}
      />
      <View style={styles.body}>
        <View style={styles.backlogos}>
          <TouchableOpacity style={styles.goBackButton} onPress={handleGoBack}>
            <Image source={require("../../../assets/image/back.png")} />
          </TouchableOpacity>
          <Image
            style={styles.logo}
            source={require("../../../assets/image/Logo.png")}
          />
          <Image source={require("../../../assets/image/Menu.png")} />
        </View>

        <View style={styles.main}>
          <View style={styles.containerDenteReto}>
            <View style={styles.image}>
              <Image
                source={require("../../../assets/image/DentesRetos.png")}
              />
            </View>
            <View style={styles.content}>
              <Text style={styles.text}>Dentes Retos</Text>
              <TouchableOpacity
                style={styles.button}
                onPress={() => navigation.navigate("Retos")}
              >
                <Text style={styles.txtBtn}>Calcular</Text>
              </TouchableOpacity>
            </View>
          </View>

          <View style={styles.containerHelicoidal}>
            <View style={styles.image}>
              <Image source={require("../../../assets/image/Helicoidal.png")} />
            </View>
            <View style={styles.content}>
              <Text style={styles.text}>Helicoidais</Text>
              <TouchableOpacity
                style={styles.button}
                onPress={() => navigation.navigate("Helicoidais")}
              >
                <Text style={styles.txtBtn}>Calcular</Text>
              </TouchableOpacity>
            </View>
          </View>

          <View style={styles.containerConicos}>
            <View style={styles.image}>
              <Image source={require("../../../assets/image/Conicos.png")} />
            </View>
            <View style={styles.content}>
              <Text style={styles.text}>Cônicos</Text>
              <TouchableOpacity
                style={styles.button}
                onPress={() => navigation.navigate("Conicos")}
              >
                <Text style={styles.txtBtn}>Calcular</Text>
              </TouchableOpacity>
            </View>
          </View>

          <View style={styles.containerTransmissao}>
            <View style={styles.image}>
              <Image source={require("../../../assets/image/Transmissao.png")} />
            </View>
            <View style={styles.content}>
              <Text style={styles.text}>Transmissão</Text>
              <TouchableOpacity
                style={styles.button}
                onPress={() => navigation.navigate("Transmissao")}
              >
                <Text style={styles.txtBtn}>Calcular</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </View>
    </View>
  );
};

export default ListScreen;
