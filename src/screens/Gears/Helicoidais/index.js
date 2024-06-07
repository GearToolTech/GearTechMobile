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
import { useNavigation } from "@react-navigation/native";
import { Header } from "../../../components/Header";
import styles from "./Style";
import { CalculosHelicoidais } from "../../../service/SHelicoidais";
import authService from "../../../service/Auth";
import Icon_Exit from "react-native-vector-icons/MaterialIcons";
import Icon_Info from "react-native-vector-icons/Feather";
import Icon_History from "react-native-vector-icons/FontAwesome5";
import saveRegister from "../../../service/SaveResults";
import Icon_Back from "react-native-vector-icons/FontAwesome6";

function Helicoidal() {
  const navigation = useNavigation();

  const [modulo1, setModulo1] = useState("");
  const [modulo2, setModulo2] = useState("");
  const [anguloInclinacao, setAnguloInclinacao] = useState("");
  const [numDentes1, setNumDentes1] = useState("");
  const [numDentes2, setNumDentes2] = useState("");
  const [resultados, setResultados] = useState(null);
  const [showModal, setShowModal] = useState(false);
  const [historicoResultados, setHistoricoResultados] = useState([]);
  const [showHistoryModal, setShowHistoryModal] = useState(false);

  const calcular = () => {
    const resultadosCalculoPromise = CalculosHelicoidais(
      modulo1,
      numDentes1,
      anguloInclinacao,
      modulo2,
      numDentes2
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

  const fecharTeclado = () => {
    Keyboard.dismiss();
  };

  const voltarTela = () => {
    navigation.goBack();
  };

  const downloadResultados = () => {
    if (!resultados) {
      alert("Calcule os resultados antes de baixar.");
      return;
    }

    const fileContents = JSON.stringify(resultados);
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

  const fetchResultados = async () => {
    try {
      const resultados = await saveRegister.fetchResultadosHelicoidal();
      return resultados;
    } catch (error) {
      console.error("Erro ao buscar resultados:", error);
      return [];
    }
  };

  const toggleHistoryModal = async () => {
    if (!showHistoryModal) {
      const resultados = await fetchResultados();
      setHistoricoResultados(resultados);
    }
    setShowHistoryModal(!showHistoryModal);
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
                <Icon_Back
                  style={styles.arrowBack}
                  name="arrow-left"
                  size={40}
                  color={"#10100D"}
                />
              </TouchableOpacity>
              <Image
                style={styles.logo}
                source={require("../../../../assets/image/Logo.png")}
              />
              <Icon_Exit
                style={{ marginTop: 30 }}
                name="exit-to-app"
                size={42}
                onPress={handleExit}
              />
            </View>
            <Text style={styles.titulo}>Engrenagem Helicoidal</Text>
            <View style={styles.icons}>
              <TouchableOpacity onPress={toggleModal}>
                <Icon_Info name="info" size={30} color={"black"} />
              </TouchableOpacity>
              <TouchableOpacity onPress={toggleHistoryModal}>
                <Icon_History name="history" size={30} color={"black"} />
              </TouchableOpacity>
            </View>
            <View style={styles.main}>
              <View style={styles.box}>
                <View style={styles.input1}>
                  <TextInput
                    style={styles.input}
                    placeholder="Módulo 1"
                    value={modulo1}
                    onChangeText={(text) => setModulo1(text)}
                    keyboardType="numeric"
                  />
                  <TextInput
                    style={styles.input}
                    placeholder="Número Dentes1"
                    value={numDentes1}
                    onChangeText={(text) => setNumDentes1(text)}
                    keyboardType="numeric"
                  />
                  <TextInput
                    style={styles.input}
                    placeholder="Ângulo (B)"
                    value={anguloInclinacao}
                    onChangeText={(text) => setAnguloInclinacao(text)}
                    keyboardType="numeric"
                  />
                </View>
                <View style={styles.input2}>
                  <TextInput
                    style={styles.input}
                    placeholder="Módulo 2"
                    value={modulo2}
                    onChangeText={(text) => setModulo2(text)}
                    keyboardType="numeric"
                  />
                  <TextInput
                    style={styles.input}
                    placeholder="Número Dentes2"
                    value={numDentes2}
                    onChangeText={(text) => setNumDentes2(text)}
                    keyboardType="numeric"
                  />
                </View>
              </View>
              <TouchableOpacity style={styles.button} onPress={calcular}>
                <Text style={styles.txtBtn}>Calcular</Text>
              </TouchableOpacity>
              {resultados && (
                <View style={styles.resultContainer}>
                  {Object.entries(resultados).map(([key, value]) => (
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
                  onPress={fecharTeclado}
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
      </ScrollView>
      <Modal visible={showModal} animationType="fade" transparent={true}>
        <View style={styles.modalContainer}>
          <View style={styles.modalContent}>
            <Text style={styles.modalText}>
              Engrenagem helicoidal tem esse nome devido ao seu formato de
              hélice, com a presença de dentes transversais que atuam em
              conjunto para a transmissão do torque. Além disso, a peça trabalha
              em pares, por meio do encaixe dos dentes do pinhão com a
              engrenagem durante a operação.
            </Text>
            <TouchableOpacity
              style={styles.btnOkModalInfo}
              onPress={toggleModal}
            >
              <Text style={styles.txtBtn}>OK</Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>
      <Modal visible={showHistoryModal} animationType="fade" transparent={true}>
        <View style={styles.modalContainer}>
          <View style={styles.historyModalContent}>
            <Text style={styles.tituloHistoric}>Histórico de Resultados</Text>
            <ScrollView style={styles.scrollView}>
              {historicoResultados.length > 0 ? (
                historicoResultados.map((resultado, index) => (
                  <View key={index} style={styles.historicData}>
                    {Object.entries(resultado).map(([key, value]) => (
                      <Text key={key} style={styles.resultText}>
                        {`${key}: ${value}`}
                      </Text>
                    ))}
                  </View>
                ))
              ) : (
                <Text style={styles.tituloHistoric}>
                  Nenhum resultado encontrado.
                </Text>
              )}
            </ScrollView>
            <TouchableOpacity style={styles.btnOk} onPress={toggleHistoryModal}>
              <Text style={styles.txtBtn}>OK</Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>
    </KeyboardAvoidingView>
  );
}

export default Helicoidal;
