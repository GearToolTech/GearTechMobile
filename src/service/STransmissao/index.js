import saveRegister from "../SaveResults";

export const Calculos = async (numerosDentes) => {
  if (!numerosDentes || numerosDentes.length === 0) {
    console.error("Números de dentes das engrenagens não foram fornecidos!");
    return null;
  }

  // Verificando se todos os valores em numerosDentes são números válidos
  if (numerosDentes.some((dente) => isNaN(parseInt(dente)))) {
    console.error("Um ou mais valores de números de dentes não são válidos!");
    return null;
  }

  const numeroEngrenagens = numerosDentes.length;

  // Calculando o numerador e o denominador da relação de transmissão total
  let numerador = 1;
  let denominador = 1;
  for (let i = 1; i < numeroEngrenagens; i += 2) {
    numerador *= numerosDentes[i];
    denominador *= numerosDentes[i - 1];
  }

  // Calculando a relação de transmissão total
  const iTotal = numerador / denominador;

  // Calculando a multiplicação das relações individuais de transmissão
  let Iindividuais = 1;
  for (let i = 1; i < numeroEngrenagens; i += 2) {
    Iindividuais *= numerosDentes[i] / numerosDentes[i - 1];
  }

  try {
    await saveRegister.saveTransmissao(iTotal, Iindividuais);
  } catch (err) {
    console.error("Erro ao salvar Transmissões: ", err);
  }

  return {
    iTotal: iTotal.toFixed(3),
    Iindividuais: Iindividuais.toFixed(3),
  };
};
