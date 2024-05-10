//Auth -> index.js
import axios from "axios";
import { jwtDecode } from "jwt-decode";
import "core-js/stable/atob";
import AsyncStorage from "@react-native-async-storage/async-storage";

const authService = {
  loginAluno: async (numMatricula, senha) => {
    try {
      await AsyncStorage.removeItem("token");
      const response = await axios.post("http://192.168.0.24:8080/loginAluno", {
        numMatricula: numMatricula,
        senha: senha,
      });
      const token = response.data.token;
      await AsyncStorage.setItem("token", token);
      if(token != null){
        console.log("Token: ", token);
      }else {
        console.log("Não");
      }
      return token;
    } catch (error) {
      console.error("Erro ao fazer login:", error);
      throw error;
    }
  },
  logout: async () => {
    await AsyncStorage.removeItem("token");
    console.log(token);
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
      const response = await axios.post("http://10.110.12.16:8080/loginProfessor", {
        nif: nif,
        senha: senha,
      });
      const token = response.data.token;
      await AsyncStorage.setItem("token", token);
      if(token != null){
        console.log("Sim", token);
      }else {
        console.log("Não");
      }
      return token;
    } catch (error) {
      console.error("Erro ao fazer login:", error);
      throw error;
    }
  },
};

export default authService;
