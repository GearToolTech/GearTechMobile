// SHelicoidais - index.js

import saveRegister from "../SaveResults"

export const CalculosHelicoidais = async (modulo1, numDentes1, anguloInclinacao, modulo2,  numDentes2) => {
    
  if (!modulo1 || !numDentes1 || !anguloInclinacao && !modulo2 || !numDentes2) {
    return null;
  }

    // ENGRENAGEM HELICOIDAL
    //INPUTS

    const Mt1 = parseFloat(modulo1);
    const Z1 = parseInt(numDentes1);
    const B = parseFloat(anguloInclinacao);
    const Mt2 = parseFloat(modulo2);
    const z2 = parseFloat(numDentes2);
  
    // --------------------------------------------------------------


    //Cálculos
    
    const CirculoPrimitivo1 = Mt1 * Z1;
    const CirculoPrimitivo2 = Mt2 * z2;

    const ModuloNormal = Mt1 / Math.cos(B);
    const PassoNormal = Math.PI * ModuloNormal; 
    const PassoHelicoidal = PassoNormal / Math.cos(B);
    const DistanciaEntreEixos = (CirculoPrimitivo2 - CirculoPrimitivo1) / 2;
  
    try {
      await saveRegister.saveHelicoidal(
        CirculoPrimitivo1,
        CirculoPrimitivo2,
        ModuloNormal,
        PassoNormal,
        PassoHelicoidal,
        DistanciaEntreEixos
      );
    } catch (err) {
      console.error("Erro ao salvar Helicoidal: ", err);
    }

    return {  
      
      //RESULTADOS 

      CirculoPrimitivo1: CirculoPrimitivo1.toFixed(3),
      CirculoPrimitivo2: CirculoPrimitivo2.toFixed(3),
      ModuloNormal: ModuloNormal.toFixed(3),
      PassoNormal: PassoNormal.toFixed(3),
      PassoHelicoidal: PassoHelicoidal.toFixed(3),
      DistanciaEntreEixos: DistanciaEntreEixos.toFixed(3),
    };
    
  };
  