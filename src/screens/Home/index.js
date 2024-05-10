import React from "react";
import { View, Text, Image } from "react-native";
import { useNavigation } from "@react-navigation/native";
import AnimatedButton from "../../components/Animation/AnimatedButton";
import styles from "./styles";

function HomeScreen() {
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Image
          style={styles.logo}
          source={require("../../../assets/image/Logo.png")}
        />
      </View>

      <View style={styles.body}>
        <Image
          style={styles.imageBack}
          source={require("../../../assets/image/BackImage.png")}
        />
        <View style={styles.backHeader}>
          <Text style={styles.MsgB}>Bem Vindo! </Text>
          <Text style={styles.Msg}>
            Desenvolvemos um software capaz de poupar seu tempo quando mais
            precisa!
          </Text>
        </View>

        <View style={styles.main}>
          <View style={styles.aluno}>
            <Text style={styles.title}>Entrar como Aluno</Text>
            <View style={styles.btnaluno}>
              <Image source={require("../../../assets/image/alunoIcon.png")} />
              <AnimatedButton onPress={() => navigation.navigate("LoginAluno")}>
                <Text style={styles.txtBtn}>Entrar</Text>
              </AnimatedButton>
            </View>
          </View>

          <View style={styles.professor}>
            <Text style={styles.titleProfessor}>Entrar como Professor</Text>

            <View style={styles.btnprofessor}>
              <Image
                source={require("../../../assets/image/professorIcon.png")}
              />
              <AnimatedButton onPress={() => navigation.navigate("LoginProfessor")}>
                <Text style={styles.txtBtnProfessor}>Entrar</Text>
              </AnimatedButton>
            </View>
          </View>
        </View>
      </View>
    </View>
  );
}

export default HomeScreen;
