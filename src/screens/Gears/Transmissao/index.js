import React, { useState } from "react";
import { View, Text, TextInput, TouchableOpacity, Keyboard, Share } from "react-native";
import { Header } from "../../../components/Header";
import { Calculos } from "../../../service/STransmissao";
import styles from "./styles";
import { useNavigation } from '@react-navigation/native'; // Importe o hook useNavigation

function Transmissao() {
  const navigation = useNavigation(); // Obtenha a função de navegação

  const [quantidadeEngrenagens, setQuantidadeEngrenagens] = useState("");
  const [numerosDentes, setNumerosDentes] = useState([]);
  const [resultados, setResultados] = useState(null);
  const [mostrarInputEngrenagens, setMostrarInputEngrenagens] = useState(true);
  const [mostrarBotaoSalvar, setMostrarBotaoSalvar] = useState(true);

  const handleQuantidadeEngrenagensChange = (text) => {
    setQuantidadeEngrenagens(text);
    // Reiniciar os números de dentes quando o usuário mudar a quantidade de engrenagens
    setNumerosDentes([]);
  };

  const handleNumeroDentesChange = (index, value) => {
    const newNumerosDentes = [...numerosDentes];
    newNumerosDentes[index] = value;
    setNumerosDentes(newNumerosDentes);
  };

  const handleSalvarQuantidadeEngrenagens = () => {
    if (quantidadeEngrenagens) {
      // Criar um array vazio para armazenar os números de dentes para cada engrenagem
      const newNumerosDentes = Array(parseInt(quantidadeEngrenagens)).fill("");
      setNumerosDentes(newNumerosDentes);
      setMostrarInputEngrenagens(false); // Ocultar o input de engrenagens após salvar a quantidade
      setMostrarBotaoSalvar(false); // Ocultar o botão "Salvar" após salvar a quantidade
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
  

  const handleGoBack = () => {
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
    <View style={styles.container}>
        <Header />
        <Text style={styles.titulo}>Transmissões</Text>
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
              <TouchableOpacity style={styles.Salvar} onPress={handleSalvarQuantidadeEngrenagens}>
                <Text style={styles.txtBtn}>Salvar</Text>
              </TouchableOpacity>
            )}
            {renderInputsNumeroDentes()}
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
          <TouchableOpacity style={styles.goBackButton} onPress={handleGoBack}>
            <Text style={styles.txtBtn}>Voltar</Text>
          </TouchableOpacity>
        </View>
        <TouchableOpacity style={styles.btnRelatorio} onPress={downloadResultados}>
          <Text style={styles.txtBtn}>Download</Text>
        </TouchableOpacity>
    </View>
  );
}

export default Transmissao;
