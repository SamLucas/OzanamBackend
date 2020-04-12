import faker from "faker";
import { factory } from "factory-girl";
import { Residentes, Quartos, Funcionarios } from "@/models";

const funcionarioFuncao = ["farmaceutico", "enfermeira", "tecnico"];

factory.define("Funcionario", Funcionarios, {
  nome: faker.name.findName(),
  email: faker.internet.email(),
  password_hash: faker.internet.password(),
  cpf: "233.342.242-30",
  rg: "23.342.242-30",
  sexo: true,
  telefone: faker.phone.phoneNumberFormat(),
  endereco: faker.address.streetAddress(),
  funcao: funcionarioFuncao[Math.floor(Math.random() * 3)]
});

factory.define("Residentes", Residentes, {
  nome: faker.name.findName(),
  cpf: "233.342.242-30",
  sexo: true,
  rg: "23.342.242-30",
  idade: faker.random.number(),
  telefone: faker.phone.phoneNumberFormat(),
  quarto_id: faker.random.number()
});

factory.define("Quartos", Quartos, {
  tipo: true,
  quantidade_cama: faker.random.number(),
  quantidade_pesoa_max: faker.random.number(),
  quantidade_pesoa: faker.random.number(),
  numero_quarto: faker.random.number()
});

export default { factory };
