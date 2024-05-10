// projetoUtils.js

import saveRegister from "../SaveResults";

export const Calculos = async (
  modulo1,
  numeroDentes1,
  AnguloPrimitivoCones1,
  modulo2,
  numeroDentes2,
  AnguloPrimitivoCones2
) => {
  if (!modulo1 || !numeroDentes1 || !modulo2 || !numeroDentes2) {
    return null;
  }

  // ENGRENAGEM CÔNICA
  // INPUTS

  const moduloNum1 = parseFloat(modulo1);
  const moduloNum2 = parseFloat(modulo2);

  const numeroDentesNum1 = parseInt(numeroDentes1);
  const numeroDentesNum2 = parseInt(numeroDentes2);

  const AngPrimCone1 = parseFloat(AnguloPrimitivoCones1);
  const AngPrimCone2 = parseFloat(AnguloPrimitivoCones2);

  // --------------------------------------------------------------

  //Cálculos

  const CirculoPrimitivo1 = moduloNum1 * numeroDentesNum1;
  const CirculoPrimitivo2 = moduloNum2 * numeroDentesNum2;

  const AnguloConeCabe1 =
    (numeroDentesNum1 + 2 * Math.cos(AngPrimCone1)) /
    (numeroDentesNum2 - 2 * Math.sin(AngPrimCone1));
  const AnguloConeCabe2 =
    (numeroDentesNum2 + 2 * Math.cos(AngPrimCone2)) /
    (numeroDentesNum1 - 2 * Math.sin(AngPrimCone2));

  const AnguloPrimitivo1 = CirculoPrimitivo1 / CirculoPrimitivo2;
  const AnguloPrimitivo2 = CirculoPrimitivo2 / CirculoPrimitivo1;

  const AnguloEixos = AnguloPrimitivo1 + AnguloPrimitivo2;

  try {
    await saveRegister.saveConicos(
      CirculoPrimitivo1,
      CirculoPrimitivo2,
      AnguloConeCabe1,
      AnguloConeCabe2,
      AnguloPrimitivo1,
      AnguloPrimitivo2,
      AnguloEixos
    );
  } catch (err) {
    console.error("Erro ao salvar Conicos: ", err);
  }

  return {
    // RESULTADOS

    CirculoPrimitivo1: CirculoPrimitivo1.toFixed(3),
    CirculoPrimitivo2: CirculoPrimitivo2.toFixed(3),
    AnguloConeCabe1: AnguloConeCabe1.toFixed(3),
    AnguloConeCabe2: AnguloConeCabe2.toFixed(3),
    AnguloPrimitivo1: AnguloPrimitivo1.toFixed(3),
    AnguloPrimitivo2: AnguloPrimitivo2.toFixed(3),
    AnguloEixos: AnguloEixos.toFixed(3),
  };
};
