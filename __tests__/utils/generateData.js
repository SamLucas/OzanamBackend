const funcionarioFuncao = ["farmaceutico", "enfermeira", "tecnico"];
export const defineFunctionFuncionary = () =>
  funcionarioFuncao[Math.floor(Math.random() * 3)];

const typeRemedio = ["gota", "comprimido", "miligramas", "gramas"];
export const defineTypeMedicine = () =>
  typeRemedio[Math.floor(Math.random() * 3)];
