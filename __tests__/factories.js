import faker from "faker";
import { factory } from "factory-girl";
import { Residente, Quarto } from "@/models";

factory.define("Residente", Residente, {
  nome: faker.name.findName(),
  cpf: "233.342.242-30",
  sexo: true,
  rg: "23.342.242-30",
  idade: faker.random.number(),
  telefone: faker.phone.phoneNumberFormat(),
  quarto_id: faker.random.number()
});

factory.define("Quarto", Quarto, {
  tipo: true,
  quantidade_cama: faker.random.number(),
  quantidade_pesoa_max: faker.random.number(),
  quantidade_pesoa: faker.random.number(),
  numero_quarto: faker.random.number()
});

export default { factory };
