import Request from "supertest";
import faker from "faker";
import app from "@/app";

import Moock from "#/factories";

describe("Medicine", () => {
  it("should cadatre medicine with data valid.", async () => {
    const remedioInfo = await Moock.factory.create("RemedioInfo");

    const response = await Request(app)
      .post("/remedios")
      .send({
        quantidade: 40,
        tipo: "gota",
        remedios_info_id: remedioInfo.id
      });

    expect(response.body).toHaveProperty("id");
  });

  it("should not cadastre medicine without data", async () => {
    const response = await Request(app)
      .post("/remedios")
      .send();

    expect(response.status).toBe(401);
  });

  it("should not cadastre medicine with data description invalid.", async () => {
    const response = await Request(app)
      .post("/remedios")
      .send({
        quantidade: 40,
        tipo: "gota",
        remedios_info_id: -1
      });

    expect(response.status).toBe(401);
  });

  it("should not cadastre medicine with type of medicine invalid.", async () => {
    const numberRandom = Math.random();
    const nome = `Buscopan${numberRandom}`;

    const remedioInfo = await Moock.factory.create("RemedioInfo", { nome });

    const response = await Request(app)
      .post("/remedios")
      .send({
        quantidade: 40,
        tipo: "remedio",
        remedios_info_id: remedioInfo.id
      });

    expect(response.status).toBe(401);
  });

  it("should not cadastre medicine with quantility smaller or equals is 0.", async () => {
    const numberRandom = Math.random();
    const nome = `Buscopan${numberRandom}`;

    const remedioInfo = await Moock.factory.create("RemedioInfo", { nome });

    const DataRepet = {
      tipo: "gota",
      remedios_info_id: remedioInfo.id
    };

    const responseEqualsZero = await Request(app)
      .post("/remedios")
      .send({
        quantidade: 0,
        ...DataRepet
      });

    const responseNegative = await Request(app)
      .post("/remedios")
      .send({
        quantidade: -1,
        ...DataRepet
      });

    expect(responseNegative.status).toBe(401);
    expect(responseEqualsZero.status).toBe(401);
  });
});
