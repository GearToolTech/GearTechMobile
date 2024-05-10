import axios from "axios";
import authService from "../Auth";

const saveRegister = {
  saveDentesRetos: async (
    CirculoPrimitivo1,
    CirculoPrimitivo2,
    passo,
    folgaCabeca,
    alturaCabecaDente,
    alturaPeDente,
    alturaDente,
    circuloCabeca,
    circuloPe,
    distanciaEixos,
    circuloCabecaInterno,
    circuloPeInterno,
    distanciaEixosInterno
  ) => {
    const user = await authService.getLoggedInUser();

    const aluno = {
      numMatricula: user.sub,
    };

    const apiUrl = "http://10.110.12.16:8080/resultadoDentesRetos";
    axios.post(apiUrl, {
      circuloPrimitivo1: CirculoPrimitivo1,
      circuloPrimitivo2: CirculoPrimitivo2,
      passo: passo,
      folgaCabeca: folgaCabeca,
      alturaCabecaDente: alturaCabecaDente,
      alturaPeDente: alturaPeDente,
      alturaDente: alturaDente,
      circuloCabeca: circuloCabeca,
      circuloPe: circuloPe,
      distanciaEixos: distanciaEixos,
      circuloCabecaInterno: circuloCabecaInterno,
      circuloPeInterno: circuloPeInterno,
      distanciaEixosInterno: distanciaEixosInterno,
      aluno: aluno,
    });
  },
  saveConicos: async (
    CirculoPrimitivo1,
    CirculoPrimitivo2,
    AnguloConeCabe1,
    AnguloConeCabe2,
    AnguloPrimitivo1,
    AnguloPrimitivo2,
    AnguloEixos
  ) => {
    const user = await authService.getLoggedInUser();

    const aluno = {
      numMatricula: user.sub,
    };

    const apiUrl = "http://10.110.12.16:8080/resultadoDentesConicos";
    axios.post(apiUrl, {
      circuloPrimitivo1: CirculoPrimitivo1,
      circuloPrimitivo2: CirculoPrimitivo2,
      anguloConeCabe1: AnguloConeCabe1,
      anguloConeCabe2: AnguloConeCabe2,
      anguloPrimitivo1: AnguloPrimitivo1,
      anguloPrimitivo2: AnguloPrimitivo2,
      anguloEixos: AnguloEixos,
      aluno: aluno,
    });
  },
  saveHelicoidal: async (
    CirculoPrimitivo1,
    CirculoPrimitivo2,
    ModuloNormal,
    PassoNormal,
    PassoHelicoidal,
    DistanciaEntreEixos
  ) => {
    const user = await authService.getLoggedInUser();

    const aluno = {
      numMatricula: user.sub,
    };

    const apiUrl = "http://10.110.12.16:8080/resultadoDentesHelicoidas";
    await axios.post(apiUrl, {
      circuloPrimitivo1: CirculoPrimitivo1,
      circuloPrimitivo2: CirculoPrimitivo2,
      moduloNormal: ModuloNormal,
      passoNormal: PassoNormal,
      passoHelicoidal: PassoHelicoidal,
      distanciaEntreEixos: DistanciaEntreEixos,
      aluno: aluno,
    });
  },
  saveTransmissao: async (iTotal, iIndividuais) => {
    const user = await authService.getLoggedInUser();
    
    const aluno = {
      numMatricula: user.sub,
    };

    const apiUrl = "http://10.110.12.16:8080/resultadoTransmissoes";
    await axios.post(apiUrl, {
      iTotal: iTotal,
      iIndividuais: iIndividuais,
      aluno: aluno,
    });
  },
};

export default saveRegister;
