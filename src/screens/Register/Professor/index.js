// src/screens/Register/Professor/index.js

import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  Keyboard,
  Image
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import authRegister from "../../../service/AuthRegister";
import styles from "./Styles";

const RegisterScreenProfessor = () => {
  const [nome, setNome] = useState("");
  const [nif, setNif] = useState("");
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");
  const [confirmarSenha, setConfirmarSenha] = useState("");
  const navigation = useNavigation();

  const criarProfessor = async () => {
    try {
      await authRegister.registerProfessor(nome, nif, email, senha);
      navigation.navigate('LoginProfessor')
    }catch (err) {
      console.error('Erro ao cadastrar: ', err)
    }
  };

  const handleGoBack = () => {
    navigation.goBack();
  };

  return (
    <View style={styles.container}>
      <View style={styles.backlogos}>
        <TouchableOpacity style={styles.goBackButton} onPress={handleGoBack}>
          <Image source={require("../../../../assets/image/back.png")} />
        </TouchableOpacity>
        <Image
          style={styles.logo}
          source={require("../../../../assets/image/Logo.png")}
        />
        <Image source={require("../../../../assets/image/Menu.png")} />
      </View>
      <Image
        style={styles.BackGround}
        source={require("../../../../assets/image/BackImageRegister.png")}
      />
        <View style={styles.main}>
          <Text style={styles.titulo}>Informe suas informações pessoais</Text>
          <View style={styles.box}>
            <TextInput
              style={styles.input}
              value={nome}
              placeholder="Nome e Sobrenome"
              onChangeText={(text) => setNome(text)}
              onBlur={Keyboard.dismiss} // Adicione onBlur para ocultar o teclado
            ></TextInput>
            <TextInput
              style={styles.input}
              value={nif}
              placeholder="NIF"
              onChangeText={(text) => setNif(text)}
              onBlur={Keyboard.dismiss} // Adicione onBlur para ocultar o teclado
            ></TextInput>
            <TextInput
              style={styles.input}
              value={email}
              placeholder="Email"
              onChangeText={(text) => setEmail(text)}
              onBlur={Keyboard.dismiss} // Adicione onBlur para ocultar o teclado
            ></TextInput>
            <TextInput
              style={styles.input}
              value={senha}
              placeholder="Senha"
              secureTextEntry={true}
              onChangeText={(text) => setSenha(text)}
              onBlur={Keyboard.dismiss} // Adicione onBlur para ocultar o teclado
            ></TextInput>
            <TextInput
              style={styles.input}
              value={confirmarSenha}
              placeholder="Confirmar Senha"
              secureTextEntry={true}
              onChangeText={(text) => setConfirmarSenha(text)}
              onBlur={Keyboard.dismiss} // Adicione onBlur para ocultar o teclado
            ></TextInput>
            <TouchableOpacity
              style={styles.button}
              onPress={criarProfessor}
            >
              <Text style={styles.txtBtn}>Cadastrar</Text>
            </TouchableOpacity>
          </View>
        </View>
    </View>
  );
};

export default RegisterScreenProfessor;
