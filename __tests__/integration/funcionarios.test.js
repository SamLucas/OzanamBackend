import { Truncate } from "#/utils/truncate";
import Moock from "#/factories";
import bcrypt from "bcryptjs";
import app from "@/app";
import Request from "supertest";
import faker from "faker";

describe("Funcionarios", () => {
  // beforeEach(async () => {
  //   await Truncate();
  // });

  const dataFuncionario = {
    nome: faker.name.findName(),
    email: faker.internet.email(),
    password: faker.internet.password(),
    cpf: "233.342.242-30",
    rg: "23.342.242-30",
    sexo: true,
    telefone: faker.phone.phoneNumberFormat(),
    endereco: faker.address.streetAddress(),
    funcao: Moock.defineFunctionFuncionary()
  };

  it("should cadastre a functionary with data valid", async () => {
    const response = await Request(app)
      .post("/functionary")
      .send(dataFuncionario);

    expect(response.status).toBe(200);
  });

  it("should not cadastre a functionary with date invalid", async () => {
    const response = await Request(app)
      .post("/functionary")
      .send({
        ...dataFuncionario,
        nome: "",
        email: "",
        password: "",
        funcao: ""
      });

    expect(response.status).toBe(401);
  });

  it("should not cadastre a functionary with type function wrong", async () => {
    const response = await Request(app)
      .post("/functionary")
      .send({ ...dataFuncionario, funcao: "paciente" });

    expect(response.status).toBe(401);
  });

  it("should list all functionary", async () => {
    const response = await Request(app).get("/functionary");
    expect(Array.isArray(response.body)).toBe(true);
  });
});