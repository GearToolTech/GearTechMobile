//Auth -> index.js
import axios from "axios";
import { jwtDecode } from "jwt-decode";
import "core-js/stable/atob";
import AsyncStorage from "@react-native-async-storage/async-storage";

const authService = {
  loginAluno: async (numMatricula, senha) => {
    try {
      await AsyncStorage.removeItem("token");
      const response = await axios.post("http://10.110.12.16:8080/auth/loginAluno", {
        numMatricula: numMatricula,
        senha: senha,
      });
      const token = response.data.token;
      await AsyncStorage.setItem("token", token);
      if(token != null){
        console.log("Token de aluno:", token);
      } else {
        console.log("Não foi possível obter o token de aluno.");
      }
      return token;
    } catch (error) {
      console.error("Erro ao fazer login:", error);
      throw error;
    }
  },
  logout: async () => {
    await AsyncStorage.removeItem("token");
   
  },
  isLoggedIn: async () => {
    const token = await AsyncStorage.getItem("token");
    return token && !(await authService.isTokenExpired(token));
  },
  isTokenExpired: async (token) => {
    try {
      const decoded = jwtDecode(token);
      return decoded.exp < Date.now() / 1000;
    } catch (err) {
      return false;
    }
  },
  getLoggedInUser: async () => {
    const token = await AsyncStorage.getItem("token");
    if (token && !(await authService.isTokenExpired(token))) {
      const decoded = jwtDecode(token);
      console.log(decoded);
      return decoded;
    } else {
      return null;
    }
  },
  loginProfessor: async (nif, senha) => {
    await AsyncStorage.removeItem("token");
    try {
      const response = await axios.post("http://10.110.12.16:8080/auth/loginProfessor", {
        nif: nif,
        senha: senha,
      });
      const token = response.data.token;
      await AsyncStorage.setItem("token", token);
      if(token != null){
        console.log("Token de professor:", token);
      } else {
        console.log("Não foi possível obter o token de professor.");
      }
      return token;
    } catch (error) {
      console.error("Erro ao fazer login:", error);
      throw error;
    }
  },

  isAluno: async () => {
    const token = await AsyncStorage.getItem("token");
    if (token && !(await authService.isTokenExpired(token))) {
      const decoded = jwtDecode(token);
      const isAluno = decoded.tipo === "aluno"; // Verifica se o tipo é "aluno"
      console.log("Is aluno:", isAluno);
      return isAluno;
    } else {
      return false;
    }
  },

  isProfessor: async () => {
    const token = await AsyncStorage.getItem("token");
    if (token && !(await authService.isTokenExpired(token))) {
      const decoded = jwtDecode(token);
      const isProfessor = decoded.tipo === "professor"; // Verifica se o tipo é "professor"
      console.log("Is professor:", isProfessor);
      return isProfessor;
    } else {
      return false;
    }
  },
};

export default authService;
