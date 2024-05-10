import { Share } from "react-native";

export const downloadResultados = (resultados, fileName = 'resultados.json') => {
  if (!resultados) {
    alert("Calcule os resultados antes de baixar.");
    return;
  }

  const fileContents = JSON.stringify(resultados);
  Share.share({
    title: 'Resultados de Engrenagem Helicoidal',
    message: fileContents,
    url: `data:,${fileContents}`,
    filename: fileName,
  })
    .then((result) => console.log(result))
    .catch((error) => console.log(error));
};
