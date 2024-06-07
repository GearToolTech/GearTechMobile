import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  Image,
  Keyboard,
  Share,
  ScrollView, // Importe ScrollView
  Modal,
  Button,
} from "react-native";
import { Calculos } from "../../../service/STransmissao";
import styles from "./styles";
import { useNavigation } from "@react-navigation/native";
import authService from "../../../service/Auth";
import Icon_Exit from "react-native-vector-icons/MaterialIcons";
import Icon_History from "react-native-vector-icons/FontAwesome5";
import Icon_Info from "react-native-vector-icons/Feather";
import Icon_empty from "react-native-vector-icons/Entypo";
import saveRegister from "../../../service/SaveResults";
import Icon_Back from "react-native-vector-icons/FontAwesome6"



function Transmissao() {
  const navigation = useNavigation();
  const [quantidadeEngrenagens, setQuantidadeEngrenagens] = useState("");
  const [numerosDentes, setNumerosDentes] = useState([]);
  const [resultados, setResultados] = useState(null);
  const [mostrarInputEngrenagens, setMostrarInputEngrenagens] = useState(true);
  const [mostrarBotaoSalvar, setMostrarBotaoSalvar] = useState(true);
  const [showModal, setShowModal] = useState(false);
  const [historicoResultados, setHistoricoResultados] = useState([]);
  const [showHistoryModal, setShowHistoryModal] = useState(false);

  const handleQuantidadeEngrenagensChange = (text) => {
    setQuantidadeEngrenagens(text);
    setNumerosDentes([]);
  };

  const handleNumeroDentesChange = (index, value) => {
    const newNumerosDentes = [...numerosDentes];
    newNumerosDentes[index] = value;
    setNumerosDentes(newNumerosDentes);
  };

  const handleSalvarQuantidadeEngrenagens = () => {
    if (quantidadeEngrenagens) {
      const newNumerosDentes = Array(parseInt(quantidadeEngrenagens)).fill("");
      setNumerosDentes(newNumerosDentes);
      setMostrarInputEngrenagens(false);
      setMostrarBotaoSalvar(false);
    } else {
      alert("Por favor, insira a quantidade de engrenagens antes de salvar.");
    }
  };

  const renderInputsNumeroDentes = () => {
    return numerosDentes.map((numeroDentes, index) => (
      <TextInput
        key={index}
        style={styles.input}
        placeholder={`Número de Dentes Engrenagem ${index + 1}`}
        value={numeroDentes}
        onChangeText={(text) => handleNumeroDentesChange(index, text)}
        keyboardType="numeric"
      />
    ));
  };

  const calcular = () => {
    const resultadosCalculoPromise = Calculos(numerosDentes);
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
      const resultados = await saveRegister.fetchResultadosTransmissao();
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
    <View style={styles.container}>
      <Image
        style={styles.BackGround}
        source={require("../../../../assets/image/BackGroundList.png")}
      />
      <View style={styles.body}>
        <View style={styles.backlogos}>
          <TouchableOpacity style={styles.goBackButton} onPress={handleGoBack}>
          <Icon_Back style={styles.arrowBack} name="arrow-left" size={40} color={'#10100D'}/>
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

        <Text style={styles.titulo}>Transmissões</Text>
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
            {mostrarInputEngrenagens && (
              <TextInput
                style={styles.input}
                placeholder="Quantidade de Engrenagens"
                value={quantidadeEngrenagens}
                onChangeText={handleQuantidadeEngrenagensChange}
                keyboardType="numeric"
              />
            )}
            {mostrarBotaoSalvar && (
              <TouchableOpacity
                style={styles.Salvar}
                onPress={handleSalvarQuantidadeEngrenagens}
              >
                <Text style={styles.txtBtn}>Salvar</Text>
              </TouchableOpacity>
            )}
            <ScrollView style={{ width: "100%" }}>
              {numerosDentes.map((numeroDentes, index) => (
                <TextInput
                  key={index}
                  style={styles.input}
                  placeholder={`Número de Dentes ${index + 1}`}
                  value={numeroDentes}
                  onChangeText={(text) => handleNumeroDentesChange(index, text)}
                  keyboardType="numeric"
                />
              ))}
            </ScrollView>
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
              A engrenagem de transmissão, permitem o adição e diminuição de
              velocidade com mínimas perdas de energia, são responsáveis em
              transmitir o atividade entre dois eixos, utilizada em diferentes
              equipamentos industriais.
            </Text>
            <TouchableOpacity style={styles.btnOkModalInfo} onPress={toggleModal}>
              <Text style={styles.txtBtn}>OK</Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>
      <Modal
          visible={showHistoryModal}
          animationType="fade"
          transparent={true}
        >
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
                  <View style={styles.emptyResultHistoric}>
                    <Text style={styles.tituloHistoric}>
                      Você ainda não Calculou.
                    </Text>
                    <Icon_empty name="emoji-sad" size={60} color={'grey'}/>
                  </View>
                )}
              </ScrollView>
              <TouchableOpacity style={styles.btnOk} onPress={toggleHistoryModal}>
              <Text style={styles.txtBtn}>OK</Text>
            </TouchableOpacity>
            </View>
          </View>
        </Modal>
    </View>
  );
}

export default Transmissao;
