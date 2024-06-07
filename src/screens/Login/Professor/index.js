import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  Keyboard,
  Image,
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import Icon_Back from "react-native-vector-icons/FontAwesome6"
import authService from "../../../service/Auth";
import styles from "./Styles";

const LoginScreenProfessor = () => {
  const [nif, setNif] = useState("");
  const [senha, setSenha] = useState("");
  const navigation = useNavigation();

  const Login = async () => {
    try {
      await authService.loginProfessor(nif, senha);
      navigation.navigate("List");
    } catch (err) {
      console.error("Erro ao fazer login:", err);
    }
  };

  const handleGoBack = () => {
    navigation.goBack();
  };

  return (
    <View style={styles.container}>
      <View style={styles.backlogos}>
        <TouchableOpacity style={styles.goBackButton} onPress={handleGoBack}>
        <Icon_Back style={styles.arrowBack} name="arrow-left" size={35} color={'#10100D'}/>
        </TouchableOpacity>
        <Image
          style={styles.logo}
          source={require("../../../../assets/image/Logo.png")}
        />
      </View>
      <Image
        style={styles.BackGround}
        source={require("../../../../assets/image/BackGround.png")}
      />
      <View style={styles.main}>
        <Text style={styles.titulo}>Insira informações do Professor</Text>
        <View style={styles.box}>
          <TextInput
            style={styles.input}
            onChangeText={(text) => setNif(text)}
            value={nif}
            placeholder="NIF"
            keyboardType="numeric"
            onBlur={Keyboard.dismiss}
          ></TextInput>
          <TextInput
            style={styles.input}
            placeholder="Senha"
            onChangeText={(text) => setSenha(text)}
            value={senha}
            keyboardType="default"
            secureTextEntry={true}
            onBlur={Keyboard.dismiss} // Adicione onBlur para ocultar o teclado
          ></TextInput>
          <TouchableOpacity style={styles.button} onPress={Login}>
            <Text style={styles.txtBtn}>Entrar</Text>
          </TouchableOpacity>
        </View>
        <TouchableOpacity
          style={styles.Btn}
          onPress={() => navigation.navigate("RegisterProfessor")}
        >
          <Text style={styles.txtBtn}>Cadastrar</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default LoginScreenProfessor;
