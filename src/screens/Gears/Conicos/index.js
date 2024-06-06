import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  Image,
  Keyboard,
  Platform,
  KeyboardAvoidingView,
  ScrollView,
  Share,
  Modal,
  Button,
} from "react-native";
import { Calculos } from "../../../service/SConicos";
import styles from "./styles";
import authService from "../../../service/Auth";
import Icon_Exit from "react-native-vector-icons/MaterialIcons";
import Icon_Info from "react-native-vector-icons/Feather";
import Icon_History from "react-native-vector-icons/FontAwesome5";

const Conicos = ({ navigation }) => {
  const [modulo1, setModulo1] = useState("");
  const [numeroDentes1, setNumeroDentes1] = useState("");
  const [modulo2, setModulo2] = useState("");
  const [numeroDentes2, setNumeroDentes2] = useState("");
  const [AnguloPrimitivoCones1, setAnguloPrimitivoCones1] = useState("");
  const [AnguloPrimitivoCones2, setAnguloPrimitivoCones2] = useState("");
  const [resultado, setResultados] = useState(null);
  const [showModal, setShowModal] = useState(false);

  const calcular = () => {
    const resultadosCalculoPromise = Calculos(
      modulo1,
      numeroDentes1,
      AnguloPrimitivoCones1,
      modulo2,
      numeroDentes2,
      AnguloPrimitivoCones2
    );
    resultadosCalculoPromise
      .then((resultadosCalculo) => {
        console.log("Resultados do cálculo:", resultadosCalculo);
        if (resultadosCalculo) {
          setResultados(resultadosCalculo);
        } else {
          alert("Por favor, preencha todos os campos com valores válidos.");
        }
      })
      .catch((error) => {
        console.error("Erro ao calcular resultados:", error);
        alert("Ocorreu um erro ao calcular os resultados.");
      });
    Keyboard.dismiss();
  };

  const downloadResultados = () => {
    if (!resultado) {
      alert("Calcule os resultados antes de baixar.");
      return;
    }

    const fileContents = JSON.stringify(resultado);
    const fileName = "resultados.json";
    Share.share({
      title: "Resultados de Engrenagem Helicoidal",
      message: fileContents,
      url: `data:,${fileContents}`,
      filename: fileName,
    })
      .then((result) => console.log(result))
      .catch((error) => console.log(error));
  };

  const dismissKeyboard = () => {
    Keyboard.dismiss();
  };

  const toggleModal = () => {
    setShowModal(!showModal);
  };

  const handleExit = async () => {
    try {
      await authService.logout();
      navigation.navigate("Home");
    } catch (err) {
      console.log("Erro ao sair da conta: ", err);
    }
  };

  const handleGoBack = async () => {
    navigation.goBack();
  };

  return (
    <KeyboardAvoidingView
      style={{ flex: 1 }}
      behavior={Platform.OS === "ios" ? "padding" : "height"}
    >
      <ScrollView contentContainerStyle={{ flexGrow: 1 }}>
        <View style={styles.container}>
          <Image
            style={styles.BackGround}
            source={require("../../../../assets/image/BackGroundList.png")}
          />

          <View style={styles.body}>
            <View style={styles.backlogos}>
              <TouchableOpacity
                style={styles.goBackButton}
                onPress={handleGoBack}
              >
                <Image source={require("../../../../assets/image/back.png")} />
              </TouchableOpacity>
              <Image
                style={styles.logo}
                source={require("../../../../assets/image/Logo.png")}
              />
              <Icon_Exit name="exit-to-app" size={40} onPress={handleExit} />
            </View>
            <Text style={styles.titulo}>Engrenagem Cônica</Text>
            <View style={styles.icons}>
              <TouchableOpacity onPress={toggleModal}>
                <Icon_Info name="info" size={30} color={"black"} />
              </TouchableOpacity>
              <Icon_History name="history" size={30} color={"black"} />
            </View>
            <View style={styles.main}>
              <View style={styles.box}>
                <View style={styles.input1}>
                  <TextInput
                    style={styles.input}
                    placeholder="Módulo 1"
                    onChangeText={setModulo1}
                    value={modulo1}
                    keyboardType="numeric"
                  />
                  <TextInput
                    style={styles.input}
                    placeholder="Número Dentes1"
                    onChangeText={setNumeroDentes1}
                    value={numeroDentes1}
                    keyboardType="numeric"
                  />
                  <TextInput
                    style={styles.input}
                    placeholder="Ângulo Primitivo"
                    onChangeText={setAnguloPrimitivoCones1}
                    value={AnguloPrimitivoCones1}
                    keyboardType="numeric"
                  />
                </View>
                <View style={styles.input2}>
                  <TextInput
                    style={styles.input}
                    placeholder="Módulo 2"
                    onChangeText={setModulo2}
                    value={modulo2}
                    keyboardType="numeric"
                  />
                  <TextInput
                    style={styles.input}
                    placeholder="Número Dentes2"
                    onChangeText={setNumeroDentes2}
                    value={numeroDentes2}
                    keyboardType="numeric"
                  />
                  <TextInput
                    style={styles.input}
                    placeholder="Ângulo Primitivo"
                    onChangeText={setAnguloPrimitivoCones2}
                    value={AnguloPrimitivoCones2}
                    keyboardType="numeric"
                  />
                </View>
              </View>

              <TouchableOpacity style={styles.button} onPress={calcular}>
                <Text style={styles.txtBtn}>Calcular</Text>
              </TouchableOpacity>

              {resultado && (
                <View style={styles.resultContainer}>
                  {Object.entries(resultado).map(([key, value]) => (
                    <Text
                      key={key}
                      style={styles.resultText}
                    >{`${key}: ${value}`}</Text>
                  ))}
                </View>
              )}

              {Platform.OS === "ios" && (
                <TouchableOpacity
                  style={styles.closeKeyboardButton}
                  onPress={dismissKeyboard}
                >
                  <Text style={styles.txtBtn}>Fechar Teclado</Text>
                </TouchableOpacity>
              )}
            </View>

            <TouchableOpacity
              style={styles.btnRelatorio}
              onPress={downloadResultados}
            >
              <Text style={styles.txtBtn}>Download</Text>
            </TouchableOpacity>
          </View>
        </View>
        <Modal visible={showModal} animationType="fade" transparent={true}>
          <View style={styles.modalContainer}>
            <View style={styles.modalContent}>
              <Text style={styles.modalText}>
                engrenagens cónicas são utilizadas nas situações em que os eixos
                das rodas motora e movida são concorrentes. As engrenagens
                cónicas podem ter dentes retos, inclinados e espirais ou curvos,
                podendo ainda apresentar eixos descentrados (hipoides).
              </Text>
              <Button title="OK" onPress={toggleModal} />
            </View>
          </View>
        </Modal>
      </ScrollView>
    </KeyboardAvoidingView>
  );
};

export default Conicos;
