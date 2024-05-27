import React, { useState } from 'react'
import {
  View,
  TextInput,
  TouchableOpacity,
  Text,
  Keyboard,
  Image,
  TouchableWithoutFeedback,
  Share,
} from 'react-native'
import { useNavigation } from '@react-navigation/native'
import styles from './styles'
import { Header } from '../../../components/Header'
import { Calculos } from '../../../service/SDentesRetos'

const DentesRetos = () => {
  const navigation = useNavigation()

  const [modulo1, setModulo1] = useState('')
  const [modulo2, setModulo2] = useState('')
  const [numeroDentes1, setNumeroDentes1] = useState('')
  const [numeroDentes2, setNumeroDentes2] = useState('')
  const [resultados, setResultados] = useState(null)

  const Calcular = () => {
    const resultadosCalculoPromise = Calculos(
      modulo1,
      numeroDentes1,
      modulo2,
      numeroDentes2
    )
    resultadosCalculoPromise
      .then((resultadosCalculo) => {
        console.log('Resultados do cálculo:', resultadosCalculo)
        if (resultadosCalculo) {
          setResultados(resultadosCalculo)
        } else {
          alert('Por favor, preencha todos os campos com valores válidos.')
        }
      })
      .catch((error) => {
        console.error('Erro ao calcular resultados:', error)
        alert('Ocorreu um erro ao calcular os resultados.')
      })
    Keyboard.dismiss()
  }

  const downloadResultados = () => {
    if (!resultados) {
      alert('Calcule os resultados antes de baixar.')
      return
    }

    const fileContents = JSON.stringify(resultados)
    const fileName = 'resultados.json'
    Share.share({
      title: 'Resultados de Engrenagem Helicoidal',
      message: fileContents,
      url: `data:,${fileContents}`,
      filename: fileName,
    })
      .then((result) => console.log(result))
      .catch((error) => console.log(error))
  }

  const handleGoBack = () => {
    navigation.goBack()
  }

  return (
    <TouchableWithoutFeedback>
      <View style={styles.container}>
        <Image
          style={styles.BackGround}
          source={require('../../../../assets/image/BackGroundList.png')}
        />
        <View style={styles.body}>
          <View style={styles.backlogos}>
            <TouchableOpacity
              style={styles.goBackButton}
              onPress={handleGoBack}
            >
              <Image source={require('../../../../assets/image/back.png')} />
            </TouchableOpacity>
            <Image
              style={styles.logo}
              source={require('../../../../assets/image/Logo.png')}
            />
            <Image source={require('../../../../assets/image/Menu.png')} />
          </View>
          <Text style={styles.titulo}>Dentes Retos</Text>
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
      </View>
    </TouchableWithoutFeedback>
  )
}

export default DentesRetos
