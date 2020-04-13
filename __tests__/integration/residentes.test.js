import app from "@/app";
import Request from "supertest";
import Moock from "../factories";
import faker from "faker";

import { Quartos } from "@/models";

describe("Resisdentes", () => {
  it("should cadastre a residents with receive data valid.", async () => {
    const dataResident = {
      nome: faker.name.findName(),
      cpf: "233.342.242-30",
      sexo: true,
      rg: "23.342.242-30",
      idade: faker.random.number(),
      telefone: faker.phone.phoneNumberFormat()
    };

    const quarto = await Moock.factory.create("Quartos");

    // console.log(">>>>>>>>>>>>>>>>>", quarto.id);
    // console.log(">>>>>>>>>>>>>>>>>>>", await Quartos.findAll());

    const response = await Request(app)
      .post("/residentes")
      .send({ ...dataResident, quarto_id: quarto.id });

    // console.log(">>>>>>>>>>>>>>>>>>>", response.body);

    expect(response.status).toBe(200);
  });

  it("should no cadastre a resident with information invalid the bedroom.", async () => {
    const dataResident = {
      nome: faker.name.findName(),
      cpf: "233.342.242-30",
      sexo: true,
      rg: "23.342.242-30",
      idade: faker.random.number(),
      telefone: faker.phone.phoneNumberFormat()
    };

    const response = await Request(app)
      .post("/residentes")
      .send({ ...dataResident, quarto_id: -1 });

    expect(response.status).toBe(401);
  });

  it("should receive linst all resindents.", async () => {
    const response = await Request(app)
      .get("/residentes")
      .then(res => res.body);

    expect(Array.isArray(response)).toBe(true);
  });
});
