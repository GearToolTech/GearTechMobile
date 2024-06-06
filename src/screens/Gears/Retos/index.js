import React, { useState } from "react";
import {
  View,
  TextInput,
  TouchableOpacity,
  Text,
  Keyboard,
  Image,
  TouchableWithoutFeedback,
  Share,
  Modal,
  Button,
  ScrollView
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import styles from "./styles";
import { Header } from "../../../components/Header";
import { Calculos } from "../../../service/SDentesRetos";
import authService from "../../../service/Auth";
import Icon_Exit from "react-native-vector-icons/MaterialIcons";
import Icon_History from "react-native-vector-icons/FontAwesome5";
import Icon_Info from "react-native-vector-icons/Feather";
import saveRegister from "../../../service/SaveResults";

const DentesRetos = () => {
  const navigation = useNavigation();

  const [modulo1, setModulo1] = useState("");
  const [modulo2, setModulo2] = useState("");
  const [numeroDentes1, setNumeroDentes1] = useState("");
  const [numeroDentes2, setNumeroDentes2] = useState("");
  const [resultados, setResultados] = useState(null);
  const [showModal, setShowModal] = useState(false);
  const [historicoResultados, setHistoricoResultados] = useState([]);
  const [showHistoryModal, setShowHistoryModal] = useState(false);

  const Calcular = () => {
    const resultadosCalculoPromise = Calculos(
      modulo1,
      numeroDentes1,
      modulo2,
      numeroDentes2
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

  const toggleModal = () => {
    setShowModal(!showModal);
  };

  const fetchResultados = async () => {
    try {
      const resultados = await saveRegister.fetchResultados();
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
    <TouchableWithoutFeedback>
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
          <Text style={styles.titulo}>Dentes Retos</Text>
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
                  keyboardType="numeric"
                  value={modulo1}
                  onChangeText={(text) => setModulo1(text)}
                />
                <TextInput
                  style={styles.input}
                  placeholder="Número Dentes1"
                  keyboardType="numeric"
                  value={numeroDentes1}
                  onChangeText={(text) => setNumeroDentes1(text)}
                />
              </View>
              <View style={styles.input2}>
                <TextInput
                  style={styles.input}
                  placeholder="Módulo 2"
                  keyboardType="numeric"
                  value={modulo2}
                  onChangeText={(text) => setModulo2(text)}
                />
                <TextInput
                  style={styles.input}
                  placeholder="Número Dentes2"
                  keyboardType="numeric"
                  value={numeroDentes2}
                  onChangeText={(text) => setNumeroDentes2(text)}
                />
              </View>
            </View>
            <TouchableOpacity style={styles.button} onPress={Calcular}>
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
          </View>
          <TouchableOpacity
            style={styles.btnRelatorio}
            onPress={downloadResultados}
          >
            <Text style={styles.txtBtn}>Download</Text>
          </TouchableOpacity>
        </View>
        <Modal visible={showModal} animationType="fade" transparent={true}>
          <View style={styles.modalContainer}>
            <View style={styles.modalContent}>
              <Text style={styles.modalText}>
                Engrenagem de dentes retos é usada para transmitir um movimento
                circular contínuo, entre eixos paralelos simples. São muito
                utilizadas em equipamentos como máquina de lavar roupa e relógio
                de corda, porém este tipo de engrenagem é utilizada em carros na
                marcha ré, por isto que possuem um ruído maior quando neste
                movimento. Elas não são indicadas na caixa de marchas para
                frente devido ao nível de ruído. Para minimizar este barulho e a
                tensão entre as engrenagens, costuma-se usar a Engrenagem
                helicoidal.
              </Text>
              <Button  title="OK" onPress={toggleModal} />
            </View>
          </View>
        </Modal>
        <Modal visible={showHistoryModal} animationType="fade" transparent={true}>
          <View style={styles.modalContainer}>
            <View style={styles.historyModalContent}>
              <Text style={styles.modalText}>Histórico de Resultados</Text>
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
                  <Text style={styles.modalText}>Nenhum resultado encontrado.</Text>
                )}
              </ScrollView>
              <Button title="OK" onPress={toggleHistoryModal} />
            </View>
          </View>
        </Modal>
      </View>
    </TouchableWithoutFeedback>
  );
};

export default DentesRetos;
