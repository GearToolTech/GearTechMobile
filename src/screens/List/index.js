import React, { useEffect, useState } from "react";
import { View, TouchableOpacity, Text, Image } from "react-native";
import { useNavigation } from "@react-navigation/native";
import styles from "./styles";
import { Header } from "../../components/Header";
import authService from "../../service/Auth";
import Icon_Exit from "react-native-vector-icons/MaterialIcons";

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



  const handleExit = async () => {
    try{
      await authService.logout();
      navigation.navigate("Home");
    }
    catch(err){
      console.log("Erro ao sair da conta: ", err);
    }
  };

  return (
    <View style={styles.container}>
      <Image
        style={styles.BackGround}
        source={require("../../../assets/image/BackGroundList.png")}
      />
      <View style={styles.body}>

        <View style={styles.backlogos}>
          
          <Image
            style={styles.logo}
            source={require("../../../assets/image/Logo.png")}
          />

        </View>
        <Icon_Exit style={styles.exit} name="exit-to-app" size={40} onPress={handleExit}/>


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
