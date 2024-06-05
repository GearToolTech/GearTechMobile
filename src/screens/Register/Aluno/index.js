import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  Keyboard,
  Alert,
  Image,
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import styles from "./Styles";
import authRegister from "../../../service/AuthRegister";

const RegisterScreenAluno = () => {
  const [nomeAlunos, setNomeAlunos] = useState("");
  const [numMatricula, setNumMatricula] = useState("");
  const [emailEdu, setEmailEdu] = useState("");
  const [senha, setSenha] = useState("");
  const [turma, setTurma] = useState("");
  const [confirmarSenha, setConfirmarSenha] = useState("");
  const navigation = useNavigation();

  const criarAlunos = async () => {
    if (
      !nomeAlunos ||
      !numMatricula ||
      !emailEdu ||
      !senha ||
      !confirmarSenha ||
      !turma
    ) {
      Alert.alert("Erro", "Por favor, preencha todos os campos.");
      return;
    }

    if (senha !== confirmarSenha) {
      Alert.alert("Erro", "As senhas não correspondem.");
      return;
    }

    try {
      await authRegister.registerAluno(
        nomeAlunos,
        numMatricula,
        emailEdu,
        turma,
        senha
      );
      navigation.navigate("LoginAluno");
    } catch (err) {
      console.error("Erro ao cadastrar: ", err);
      Alert.alert(
        "Erro",
        "Erro ao cadastrar. Por favor, tente novamente mais tarde."
      );
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
            value={nomeAlunos}
            placeholder="Nome"
            onChangeText={(text) => setNomeAlunos(text)}
            onBlur={Keyboard.dismiss}
          />
          <TextInput
            style={styles.input}
            value={numMatricula}
            placeholder="Número da Matrícula"
            onChangeText={(text) => setNumMatricula(text)}
            onBlur={Keyboard.dismiss}
          />
          <TextInput
            style={styles.input}
            value={turma}
            placeholder="Turma"
            onChangeText={(text) => setTurma(text)}
            onBlur={Keyboard.dismiss}
          />
          <TextInput
            style={styles.input}
            value={emailEdu}
            placeholder="Email Educacional"
            onChangeText={(text) => setEmailEdu(text)}
            onBlur={Keyboard.dismiss}
          />
          <TextInput
            style={styles.input}
            value={senha}
            placeholder="Senha"
            secureTextEntry={true}
            onChangeText={(text) => setSenha(text)}
            onBlur={Keyboard.dismiss}
          />
          <TextInput
            style={styles.input}
            value={confirmarSenha}
            placeholder="Confirmar Senha"
            secureTextEntry={true}
            onChangeText={(text) => setConfirmarSenha(text)}
            onBlur={Keyboard.dismiss}
          />

          <TouchableOpacity style={styles.button} onPress={criarAlunos}>
            <Text style={styles.txtBtn}>Cadastrar</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

export default RegisterScreenAluno;
