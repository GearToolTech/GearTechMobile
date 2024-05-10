import React, { useState } from "react";
import { View, Text, TextInput, TouchableOpacity, Keyboard, Platform, KeyboardAvoidingView, ScrollView, Share } from "react-native";
import { useNavigation } from '@react-navigation/native';
import { Header } from "../../../components/Header";
import styles from "./Style";
import { CalculosHelicoidais } from "../../../service/SHelicoidais";

function Helicoidal() {
  const navigation = useNavigation();

  const [modulo1, setModulo1] = useState("");
  const [modulo2, setModulo2] = useState("");
  const [anguloInclinacao, setAnguloInclinacao] = useState("");
  const [numDentes1, setNumDentes1] = useState("");
  const [numDentes2, setNumDentes2] = useState("");
  const [resultados, setResultados] = useState(null);

  

  const calcular = () => {
    const resultadosCalculoPromise = CalculosHelicoidais(modulo1, numDentes1, anguloInclinacao, modulo2, numDentes2);;
    resultadosCalculoPromise.then((resultadosCalculo) => {
      console.log("Resultados do cálculo:", resultadosCalculo);
      if (resultadosCalculo) {
        setResultados(resultadosCalculo);
      } else {
        alert("Por favor, preencha todos os campos com valores válidos.");
      }
    }).catch((error) => {
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
    const fileName = 'resultados.json';
    Share.share({
      title: 'Resultados de Engrenagem Helicoidal',
      message: fileContents,
      url: `data:,${fileContents}`,
      filename: fileName,
    })
      .then((result) => console.log(result))
      .catch((error) => console.log(error));
  };

  return (
    <KeyboardAvoidingView
      style={{ flex: 1 }}
      behavior={Platform.OS === "ios" ? "padding" : "height"}
    >
      <ScrollView contentContainerStyle={{ flexGrow: 1 }}>
        <View style={styles.container}>
          <Header />
          <Text style={styles.titulo}>Engrenagem Helicoidal</Text>
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

            {Platform.OS === 'ios' && (
              <TouchableOpacity style={styles.closeKeyboardButton} onPress={fecharTeclado}>
                <Text style={styles.txtBtn}>Fechar Teclado</Text>
              </TouchableOpacity>
            )}

            <TouchableOpacity style={styles.goBackButton} onPress={voltarTela}>
              <Text style={styles.txtBtn}>Voltar</Text>
            </TouchableOpacity>
            
            

            <TouchableOpacity style={styles.button} onPress={downloadResultados}>
              <Text style={styles.txtBtn}>Download</Text>
            </TouchableOpacity>
          </View>
        </View>
      </ScrollView>
    </KeyboardAvoidingView>
  );
}

export default Helicoidal;
