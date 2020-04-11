import app from "@/app";
import Request from "supertest";
import Moock from "#/factories";
import faker from "faker";

describe("Resisdentes", () => {
  it("should receive linst all resindents.", async () => {
    const response = await Request(app)
      .get("/residentes")
      .then(res => res.body);

    expect(Array.isArray(response)).toBe(true);
  });

  const dataResident = {
    nome: faker.name.findName(),
    cpf: "233.342.242-30",
    sexo: true,
    rg: "23.342.242-30",
    idade: faker.random.number(),
    telefone: faker.phone.phoneNumberFormat()
  };

  it("should cadastre a residents with receive data valid.", async () => {
    const { id } = await Moock.factory.create("Quarto");

    const response = await Request(app)
      .post("/residentes")
      .send({ ...dataResident, quarto_id: id });

    expect(response.status).toBe(200);
  });

  it("should no cadastre a resident with information invalid the bedroom.", async () => {
    const response = await Request(app)
      .post("/residentes")
      .send({ ...dataResident, quarto_id: -1 });

    expect(response.status).toBe(401);
  });
});
