// Service DentesRetos

import saveRegister from "../SaveResults";

export const Calculos = async (modulo1, numeroDentes1, modulo2, numeroDentes2) => {
  if (!modulo1 || (!numeroDentes1 && !modulo2) || !numeroDentes2) {
    return null;
  }

  // ENGRENAGEM DENTES RETOS
  //INPUTS

  const moduloNum1 = parseFloat(modulo1);
  const numeroDentesNum1 = parseInt(numeroDentes1);
  const moduloNum2 = parseFloat(modulo2);
  const numeroDentesNum2 = parseInt(numeroDentes2);

  // --------------------------------------------------------------

  //Cálculos
  const CirculoPrimitivo1 = moduloNum1 * numeroDentesNum1;
  const CirculoPrimitivo2 = moduloNum2 * numeroDentesNum2;
  const passo = Math.PI * moduloNum1;
  const folgaCabeca = 0.167 * moduloNum1;
  const alturaCabecaDente = moduloNum1;
  const alturaPeDente = moduloNum1 + folgaCabeca;
  const alturaDente = 2 * moduloNum1 + folgaCabeca;
  const circuloCabeca = CirculoPrimitivo1 + 2 * moduloNum1;
  const circuloPe = CirculoPrimitivo1 - 2 * (moduloNum1 + folgaCabeca);
  const distanciaEixos = CirculoPrimitivo1 / 2 + CirculoPrimitivo1 / 2;
  const circuloCabecaInterno = CirculoPrimitivo1 - 2 * moduloNum1;
  const circuloPeInterno = CirculoPrimitivo1 + 2 * (moduloNum1 + folgaCabeca);
  const distanciaEixosInterno = (CirculoPrimitivo2 - CirculoPrimitivo1) / 2;

  try {
    await saveRegister.saveDentesRetos(
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
    );
  } catch (err) {
    console.error("Erro ao salvar dentes retos: ", err);
  }

  return {
    // RESULTADOS

    CirculoPrimitivo1: CirculoPrimitivo1.toFixed(3),
    passo: passo.toFixed(3),
    folgaCabeca: folgaCabeca.toFixed(3),
    alturaCabecaDente: alturaCabecaDente.toFixed(3),
    alturaPeDente: alturaPeDente.toFixed(3),
    alturaDente: alturaDente.toFixed(3),
    circuloCabeca: circuloCabeca.toFixed(3),
    circuloPe: circuloPe.toFixed(3),
    distanciaEixos: distanciaEixos.toFixed(3),
    circuloCabecaInterno: circuloCabecaInterno.toFixed(3),
    circuloPeInterno: circuloPeInterno.toFixed(3),
    CirculoPrimitivo2: CirculoPrimitivo2.toFixed(3),
    distanciaEixosInterno: distanciaEixosInterno.toFixed(3),
  };
};
